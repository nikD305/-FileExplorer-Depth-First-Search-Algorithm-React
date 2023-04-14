import React from 'react'
import { useState } from 'react'
import './Structure.css'
import {FcFolder} from 'react-icons/fc'
import {AiFillFile} from 'react-icons/ai'
import {AiOutlineFile,AiOutlineDelete} from 'react-icons/ai'

const Structure = ({ handleInsertNode,handleDeleteNode, data}) => {
  const [show, setShow] = useState(false)
const [showInput , setShowInput] = useState({
  visible:false,
  isFolder:null
})



const handleNewFolder = (e, isFolder) =>{
  e.stopPropagation();
setShow(true)
   setShowInput({
    visible:true,
    isFolder
   })

}


const onAddFolder = (e)=>{
  if(e.keyCode === 13 && e.target.value){
handleInsertNode(data.id, e.target.value,showInput.isFolder)
    setShowInput({...showInput, visible:false})
  }
}

const handleDelete = (e)=>{
  e.stopPropagation();
  handleDeleteNode(data.id,"nik",showInput.isFolder)
}
  // console.log(data)
  return (
    <div className='cont'>
{/* the reason why we have used condition if statement for isFolder is to give different icon for file and folder and to differenciate between file and dolder and also file dosent have Array in it so when to faces map() then we face error thats why we use if statement */}

     {data.isFolder ? (
        <div>
          <span onClick={()=>setShow(!show)}>
<div className="name">
          <FcFolder/>{data.name}  

</div>
           <div className='add'>

<button onClick={(e)=>handleNewFolder(e, true)}><FcFolder/>+</button>
<button onClick={(e)=>handleNewFolder(e , false)}><AiOutlineFile/>+</button>
<button onClick={(e)=>handleDelete(e)}><AiOutlineDelete/></button>
</div>
          </span>



        

          {   show?(
              <div style={{paddingLeft:"1rem"}}>

{
  showInput.visible && (
    <div className='inputContainer'>
      <span>{showInput.isFolder? <FcFolder/>:<AiOutlineFile/>}</span>
      <input className='input' 
      type="text"
      autoFocus
      onBlur={()=>setShowInput({...setShow,visible:false})}
      onKeyDown={onAddFolder}
      />
      </div>
  )
}

              {data.items.map(item => {
                return <Structure
                 handleInsertNode={handleInsertNode} 
                 handleDeleteNode={handleDeleteNode}
                 data={item}
                 key={item.id}
                 />
              })}
            </div>
            ):<></>
          }
         
        </div>
      ) : (
      <div className='file'><AiOutlineFile/> {data.name}</div>
      )}
    </div>
  )
}

export default Structure

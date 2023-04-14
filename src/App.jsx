 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { dataNest } from './components/data/data'
import Structure from './components/structure/Structure'
import useTraverseTree from './components/hooks/use-traverse-tree'


function App() {
  const [explorerData, setExloporerData] = useState(dataNest)
  const {insertNode,deleteNode} = useTraverseTree()

  const handleInsertNode = (folderId,item,isFolder)=>{
    const finalTree = insertNode(explorerData,folderId,item,isFolder)
setExloporerData(finalTree)
  }
  

const handleDeleteNode = (folderId,item,isFolder)=>{
  const finalTree = deleteNode(explorerData,folderId,item,isFolder)
  setExloporerData(finalTree)
}


  return (
    <div className="App">
    <Structure handleInsertNode={handleInsertNode} handleDeleteNode={handleDeleteNode} data={explorerData}/>
    </div>
  )
}

export default App

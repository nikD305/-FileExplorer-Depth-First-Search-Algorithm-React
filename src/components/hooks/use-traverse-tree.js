const useTraverseTree = () =>{
    const insertNode = function(tree,folderId,item,isFolder){
        if(tree.id===folderId && tree.isFolder){
            
            // push() add object in the last , unshift() adds object at top
              tree.items.unshift({
                id:new Date().getTime(),
                name:item,
                isFolder:isFolder,
                items:[]

              })

              return tree;
        }

        let latestNode = [];

       latestNode =  tree.items.map((ob)=>{
          return insertNode(ob,folderId,item,isFolder)


        })

        return {...tree,items:latestNode}
    }

    const deleteNode = function(tree, folderId) {
      if (tree.id === folderId) {
        return null;
      }
    
      let latestNode = tree.items.map(ob => deleteNode(ob, folderId));
      console.log("0")
      latestNode = latestNode.filter(node => node !== null);
      console.log("1")
    
      return { ...tree, items: latestNode };
    };



    

    // const deleteNode = function(tree, folderId) {
    //   const removeNode = function(items) {
    //     return items.filter(item => item.id !== folderId).map(item => ({
    //       ...item,
    //       items: removeNode(item.items)
    //     }));
    //   };
    
    //   return {
    //     ...tree,
    //     items: removeNode(tree.items)
    //   };
    // };
   
    return {insertNode,deleteNode}
}

export default useTraverseTree
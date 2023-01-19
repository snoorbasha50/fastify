import React from 'react'
import  "./Sidebar.css"

const Sidebar = () => {

  const Dragstart=(e)=>{
    console.log(e , "iiii");
    e.dataTransfer.setData("shapes", e.target.id);
  }

 
  return (
   <>
   <div className="Sidebar">

   <div className="square" id="square" draggable  onDragStart={(e)=>Dragstart(e)} ></div>
    <div className="circle" id="circle" draggable onDragStart={(e)=>Dragstart(e)}></div>
    <div className="triangle" id="triangle" draggable onDragStart={(e)=>Dragstart(e)}></div>
    <div className="rectangle" id="reactangle" draggable onDragStart={(e)=>Dragstart(e)}></div>

    

   </div>
   </>
  )
}

export default Sidebar

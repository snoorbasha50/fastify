import React,{useRef} from 'react'
import { useState } from 'react'
import "./Diagram.css"

const Diagram = () => {
  const [classArray , setClassArray] = useState([])
  const ref=useRef()

  const draggingOver=(e)=>{
    e.preventDefault()
    return false
    

  }

  

  const Dropover=(e)=>{

    var data = e.dataTransfer.getData("shapes");

    if(!classArray.includes(data))
    setClassArray([...classArray , data])
    console.log(data);
    var nodecopy=document.getElementById(data).cloneNode(true)
    console.log(e.target.children , "e.target" ,e.target.childNodes.length);
    var shape=document.getElementById('shape')
    if( e.target.childNodes.length === 0) {
      shape.appendChild(nodecopy)

    }

    if(e.target.childNodes.length > 0) {

      for(var i=0;i<e.target.childNodes.length;i++){
  
         if( !classArray.includes(data))
          shape.appendChild(nodecopy)

          // const draggingEnd=()=>{
            nodecopy.style.position = "relative"
            nodecopy.style.left =  e.clientX + "px";
            nodecopy.style.top = e.clientY + "px"
  

          // }
          
          //nodecopy.style.left =  e.clientX + "px";
          //nodecopy.style.top = e.clientY + "px"
  
    
      }
    }

   
    
    console.log(classArray , "classArray" ,e.clientX )

   
   
  }


  

  // const draggingEnd=()=>{
  //   nodecopy.style.position = "relative"
  //   nodecopy.style.left =  e.clientX + "px";
  //   nodecopy.style.top = e.clientY + "px"


  // }


  return (
    <>
    <div className="diagram"  id='shape'  ref={ref}
      onDragEnter={(e) => {
        e.preventDefault();
        return true;

      }} 
      
      //onDrop={(e)=>Dropover(e)} 
      
       onDragOver={(e)=>draggingOver(e)} 
        onDrop={(e) =>{Dropover(e)}}  droppable="true"  >

          

    </div>
    </>
  )
}

export default Diagram

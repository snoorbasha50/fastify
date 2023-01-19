
import React,{useState} from 'react'
import axios from 'axios'

const Form = () => {
    const[email,setEmail]=useState()
    const [name,setName]=useState()

    const handleSubmit=async(e)=>{
e.preventDefault()
const userData={
    userEmail:email,
    userName:name
}
const response=await fetch(`http://localhost:5000/products`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(userData)
}).then((response)=>response.json())
.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
// axios.post(`http://localhost:5000/products`,{...userData}).then(res=>{
//     console.log(res)
//     console.log(res.data)
// })

    }
    console.log(email,name);

 

    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email"  onChange={(e)=>setEmail(e.target.value)}  name="Email" placeholder='Type Email'/>
            <input type="text"    onChange={(e)=>setName(e.target.value)} name="Fullname"placeholder="Type Full name"/>
            <input type="submit" value="submit"/>

        </form>
      
    </div>
  )
  }


export default Form

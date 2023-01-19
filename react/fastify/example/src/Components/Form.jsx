import e from 'express'
import React,{useState} from 'react'

const Form = () => {
    const[email,setEmail]=useState()
    const [name,setName]=useState()

    const handleSubmit=(e)=>{
    e.preventDefault()
    const userData={
    userEmail:email,
    userName:name
}
axios.post('http:localhost:3000/products',{userData}).then(res=>{
    console.log(res.data)
    console.log(res)
})



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

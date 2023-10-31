import React,{useState} from 'react'
import "./App.css"
import axios from "axios"
import { TbRefresh } from "react-icons/tb";
import { LuLink2 } from "react-icons/lu";

const App = () => {
  const [quote,setQuote]=useState("Learn from yesterday, live for today, hope for tomorrow.")
  const [author,setAuthor]=useState("George Bernard Shaw")
  const [tags,setTags]=useState(['Famous Quotes','Inspirational'])
  async function handleSearch(){
    try{
      const response=axios.get('https://api.quotable.io/random')
      .then((res)=>{
        setQuote(res.data.content)
        setAuthor(res.data.author)
        setTags([res.data.tags])
      })
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className='container'>
      <div className='quote'>
        <h2>{author}</h2>
        <div className='item'>
          {
            tags.map((tag,idx)=>(
              <p key={idx}>{tag}</p>
            ))
          }
          
        </div>
        <div>
          <p className='para'>"{quote}"</p> 
        </div>
        {/* Learn from yesterday, live for today, hope for tomorrow. */}
      </div>
      <div className='btn'>
        <TbRefresh size={25} className='icons x' onClick={handleSearch}/>
        <LuLink2 size={30} className='icons y'/>
      </div>

    </div>
  )
}

export default App

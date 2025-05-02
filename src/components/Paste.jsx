import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './paste.css'
import { removeFromPaste } from '../redux/pasteSlice';
import toast from 'react-hot-toast';


const Paste = () => {
  const dispatch = useDispatch();
  const pastes = useSelector((state)=>state.paste.pastes);
  const [searchTerm,setSearchTerm]=useState('');

  const searchData = pastes.filter(
     (paste) => paste.title.toLowerCase().includes (searchTerm.toLowerCase())
  );

  function handleDelete(pasteId){
  dispatch(removeFromPaste(pasteId));
  }


  //function handleCopy(paste){
   
 // }


  return (
    <div>
      
      <input
      id='searching'
      type='search'
      placeholder='search content'
      onChange={(e)=>setSearchTerm(e.target.value)}

/> 
<div className='main-container'>
  {
    searchData.length > 0 && searchData.map ( (paste) => {
      
        return (
          // copy ke liye unique key mention krn apdega
          <div id='content' key={paste?._id}>
            <div>
            {paste.title}
            </div>
         
          
           <div>
           {paste.content}
            </div> 
            
         
            <div>
            {paste.createdAt}

            </div>
            <div id='btn-container'>

              
              <button>
               

             <a href={`/?pasteId=${paste?._id}`}>
             Edit

             </a>
             
                </button>

              <button onClick={()=>handleDelete(paste?._id)}>Delete</button>

              <button onClick={()=>{
                 navigator.clipboard.writeText(paste?.content);
                 toast.success("paste copied");
              }}>Copy</button>

              <button>Share</button>
              
              <button>
              <a href={`/pastes/${paste?._id}`}> view</a>
           
                
                </button>
            </div>
          
            <br />
          </div>
        )

    })
  }


</div>






</div>




  )
}

export default Paste

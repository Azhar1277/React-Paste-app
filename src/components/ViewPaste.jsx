import React, { useEffect, useState } from 'react'
import './home.css'
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from '../redux/pasteSlice';
 


const ViewPaste = () => {

const {id} = useParams();

const allPastes = useSelector((state)=> state.paste.pastes);
const paste = allPastes.filter((p) => p._id === id)[0];
console.log("final paste:",paste);
//console.log("target paste:",paste)
  return (

    <div>
    <div className='main'>
    <input
  
     type="text"
     placeholder='enter ur text'
     value={paste.title}
     disabled
     onChange={(e) => setTittle(e.target.value)}
     
     />
     {/*

     <button  onClick={createPaste}
      id='btn'>
      {

      
     pasteId ? "Update Paste" : "Create my Paste"
      }
     </button> */}

  </div>
  <div >
   <textarea id='textarea'
   value={paste.content}
   disabled
   placeholder='enter your text'
   onChange={(e) => setValue(e.target.value)}
rows={20}
   
   
   />
  </div>
</div>
  )
}

export default ViewPaste

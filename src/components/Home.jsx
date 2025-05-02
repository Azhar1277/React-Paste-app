import React, { useEffect, useState } from 'react'
import './home.css'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from '../redux/pasteSlice';
 

// useSearchparams helps to interect with query string  parameters
// and helps to read ,updte and manage these prameters

const Home = () => {
  const[tittle,setTittle]=useState('');
  const [value,setValue]=useState('');
  const [searchParams,setSearchParamas]=useSearchParams('');
  const pasteId = searchParams.get('pasteId');
 const dispatch = useDispatch();
const allPastes = useSelector((state)=> state.paste.pastes);

// update or edit ke liye jab bhi paste id chnge hogi uska logic
useEffect(() => {
 
  if(pasteId){
   
    const paste = allPastes.find((p) => p._id === pasteId);
    setTittle(paste.title);
    setValue(paste.content);
  }
  
 
  }, [pasteId])
  


  function createPaste(){
    // ky kya chaiye paste create me uska object bana lo
    const paste ={
      title:tittle,
      content:value,
      //paste id hai to thik warna date se random id bana lo
      _id:pasteId || 
      Date.now().toString(36),

        createdAt:new Date().toISOString(),
    }

    //store in local storage
    
    if(pasteId){
      //update

  dispatch(updateToPaste(paste));
    }

    else{
      //create

 dispatch(addToPaste(paste));

    }

    // after create and update clear it

    setTittle('');
    setSearchParamas({});
    setValue('');

  }
  return (
  <div>
      <div className='main'>
        
      <input
    
       type="text"
       placeholder='enter ur text' 
       value={tittle}
       onChange={(e) => setTittle(e.target.value)}
       
       />

       <button  onClick={createPaste}
        id='btn'>
        {

        
       pasteId ? "Update my Paste" : "Create my Paste"

        }
       </button>

    </div>
    <div >
     <textarea id='textarea'
     value={value}
     placeholder='enter your text'
     onChange={(e) => setValue(e.target.value)}
    rows={25}
     
     
     />
    </div>
  </div>
  )
}

export default Home

import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';



const initialState = {
  
  //value jaha sare paste store ho rhe

  pastes:localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem('pastes'))
  :[]
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {

    addToPaste: (state,action) => {
      const paste= action.payload;
      // centre me store ho gyaaa  by pushing new paste
      state.pastes.push(paste);

      //locall storag me store ho gya
     localStorage.setItem("pastes",
    JSON.stringify(state.pastes)),  
   toast.success("paste created successfully");
      
    },

    updateToPaste: (state,action) => {
  const paste = action.payload;
  const index = state.pastes.findIndex((item)=>
    item._id === paste._id);
 
  // if valid update kr do state ke andr aans 
  //local storage ke ander

  if(index >= 0){
    state.pastes[index] = paste;
    localStorage.setItem("pastes",JSON.stringify(state.pastes));
     toast.success('paste updated');

  }
  

     
    },  

    resetAllPaste: (state, action) => {
      state.pastes=[];
      localStorage.removeItem("pastes");
    
    },
    removeFromPaste:(state,action) => {
      const pasteId = action.payload;
      console.log(pasteId);
       const index = state.pastes.findIndex((item)=>item._id === pasteId);

       // agr exist krta hai to us paste ko state se 
       // dlt kr diya and naye wale ko local me 
       //update kr diya
       if(index >= 0){
        state.pastes.splice(index,1);
        localStorage.setItem('pastes',JSON.stringify(state.pastes));
        toast.success("paste deleted");
       }

    },
  },
});


export const { addToPaste, updateToPaste,resetAllPaste,removeFromPaste} = pasteSlice.actions

export default pasteSlice.reducer
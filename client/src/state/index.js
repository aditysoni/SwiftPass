import {createSlice} from '@reduxjs/toolkit' ;

const initialState =[] ;
export const authSlice = createSlice(
{
     name : "auth " , 
     initialState,
     reducers : 
     {
        setLogin : (state, action) => 
        {
            state.push(action.payload) ;
        }
     }
     
})

export const {setLogin} = authSlice.actions ; 

export default authSlice.reducer ; 
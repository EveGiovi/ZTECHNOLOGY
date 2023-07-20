import { Cookie } from '@mui/icons-material'
import { createAsyncThunk, createSlice, isRejected, isRejectedWithValue } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
//para abrir sesion
export const fetchLogin = createAsyncThunk('auth/login', async(formData)=>{
    try {
        const response = await axios.post(`${import.meta.env.VITE_URL_SERVER}api/auth/login`,formData)
        // const response=await axios.post('http://localhost:4000/api/auth/login',formData)
        Cookies.set('token',response.data.token,{expires:7});
        console.log(response.data.token);
        return response.data;
    } catch (error) {
        return isRejectedWithValue(error)
    }
})

//para cerrar sesion
export const fetchLogout =createAsyncThunk('auth/logout', async()=>{
    try {
        const response=await axios.post(`${import.meta.env.VITE_URL_SERVER}api/auth/logout`,{},{
            headers:{
                'x-token':Cookies.get('token')
            }
        })
        console.log(response.data);
        Cookies.remove('token');
        // const response=await axios.post('http://localhost:4000/api/auth/login',formData)
        return response.data;
        
    } catch (error) {
        // console.log(error.response.data.msg);
        // if(error.response.data.msg==='Token no válido'){
        //     console.log('msg2:',error.response.data.msg);
        //     Cookies.remove('token');
        // }
        return isRejectedWithValue(error)
    }
    })
    
const initialState = {
        user:null,
        loading:true, //para que aparesca cargando
    }
    export const authSlice=createSlice({
        name:'auth',
        initialState,
        reducers:{
            setLogin:(state,action)=>{
                state.user=action.payload;
                state.loading=false;
            }
        },
        extraReducers:(builder)=>{
            builder
                .addCase(fetchLogin.fulfilled,(state,action)=>{
                    state.user = action.payload.user;
                    state.loading = false;
                })
                .addCase(fetchLogin.rejected,(state,action)=>{
                    state.user = null;
                    state.loading = false;
                })
                .addCase(fetchLogout.fulfilled,(state,action)=>{
                    state.user = null;
                    state.loading = false;
                })
                .addCase(fetchLogout.rejected,(state,action)=>{
                    state.user = null;
                    state.loading = false;
                })
        }

})
export const {setLogin}=authSlice.actions

export default authSlice.reducer
import Container from '@mui/material/Container';
import CreateLogin from '@components/molecules/Logins/CreateLogin/CreateLogin';//importar el componente de mensaje de alerta
import ListLogin from '@components/molecules/Logins/ListLogin/ListLogin';
import { useState } from 'react';
import DeleteLogin from '@components/molecules/Logins/DeleteLogin/DeleteLogin';
import UpdateLogin from '@components/molecules/Logins/UpdateLogin/UpdateLogin';
import { store } from '../../lib/store';
// import { useSelector, useDispatch } from 'react-redux'

export default function Logins() {
  // const login=store();

   const [load,setLoad]= useState(false);
   const [idDelete, setIdDelete]=useState('');
   const [idUpdate, setIdUpdate]=useState('');

    
  return (
    <Container maxWidth="lg" sx={{mt:5}}> 
        {/* <CreateLogin load={login.userName} setLoad={setLoad}/> */}
        {/* llamar el componente CreateLogin */}
        <CreateLogin load={load} setLoad={setLoad}/>
        {/* setLoad carga y actualiza al eliminar */}
        <ListLogin load={load} setIdDelete={setIdDelete} setIdUpdate={setIdUpdate}/> 
        {/* actualizar la tabla despues de eliminar */}
        <DeleteLogin idDelete={idDelete} load={load} setLoad={setLoad}/>
        {/* //actualizar la tabla despues de modificar */}
        <UpdateLogin idUpdate={idUpdate} load={load} setLoad={setLoad}/>   
    </Container>
  );
}

import Container from '@mui/material/Container';
import CreateUser from '@components/molecules/Users/CreateUser/CreateUser';//importar el componente de mensaje de alerta
import ListUser from '@components/molecules/Users/ListUser/ListUser';
import { useState } from 'react';

export default function Users() {
    
  const [load,setLoad]= useState(false);
  
    
  return (
    <Container maxWidth="lg" sx={{mt:5}}> 
    {/* llamar el componente CreateLogin */}
    {/* PONER EL LOAD,SETLOAD */}
    <CreateUser load={load} setLoad={setLoad}/> 
    {/* PONER EL LOAD */}
    <ListUser load={load}/> 
  
    </Container>
  );
}

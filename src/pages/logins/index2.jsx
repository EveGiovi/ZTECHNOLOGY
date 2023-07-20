import Container from '@mui/material/Container';
import CreateLogin from '@components/molecules/Logins/CreateLogin/CreateLogin';//importar el componente de mensaje de alerta
import ListLogin from '@components/molecules/Logins/ListLogin/ListLogin';
import { useState } from 'react';

export default function Logins() {
   const [load,setLoad]= useState(false);

    
  return (
    <Container maxWidth="lg" sx={{mt:5}}> 

    {/* llamar el componente CreateLogin */}
    <CreateLogin load={load} setLoad={setLoad}/>
    <ListLogin load={load} setLoad={setLoad}/> 
        
    </Container>
  );
}

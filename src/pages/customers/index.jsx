import Container from '@mui/material/Container';
import CreateCustomer from '@components/molecules/Customers/CreateCustomer/CreateCustomer';//importar el componente de mensaje de alerta
import ListCustomer from '@components/molecules/Customers/ListCustomer/ListCustomer';
import { useState } from 'react';//importar

export default function Customers() {
   
  const [load,setLoad]= useState(false);
    
  return (
    <Container maxWidth="lg" sx={{mt:5}}> 
    {/* llamar el componente CreateLogin */}
    <CreateCustomer load={load} setLoad={setLoad}/>
    <ListCustomer load={load}/>
       
    </Container>
  );
}

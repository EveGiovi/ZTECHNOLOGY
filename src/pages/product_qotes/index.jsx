import Container from '@mui/material/Container';
import CreateProduct_qote from '@components/molecules/Product_qotes/CreateProduct_qote/CreateProduct_qote';//importar el componente de mensaje de alerta
import ListProduct_qote from '@components/molecules/Product_qotes/ListProduct_qote/ListProduct_qote';
import { useState } from 'react';

export default function Product_qotes() {
  const [load,setLoad]= useState(false);
    
  return (
    <Container maxWidth="lg" sx={{mt:5}}> 
    {/* llamar el componente CreateLogin */}
    <CreateProduct_qote load={load} setLoad={setLoad}/>
       <ListProduct_qote load={load}/>
    </Container>
  );
}
import Container from '@mui/material/Container';
import CreateProduct from '@components/molecules/Product/CreateProduct/CreateProduct';//importar el componente de mensaje de alerta
import ListProduct from '@components/molecules/Product/ListProduct/ListProduct';
import { useState } from 'react';

export default function Products() {
  const [load,setLoad]= useState(false);
    
  return (
    <Container maxWidth="lg" sx={{mt:5}}> 
    {/* llamar el componente CreateProduct */}
    <CreateProduct load={load} setLoad={setLoad}/>
    <ListProduct load={load}/>
        
    </Container>
  );
}
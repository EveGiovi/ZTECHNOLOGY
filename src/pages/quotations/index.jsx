import Container from '@mui/material/Container';
import CreateQuotation from '@components/molecules/Quotations/CreateQuotation/CreateQuotation';//importar el componente de mensaje de alerta
import ListQuotation from '@components/molecules/Quotations/ListQuotation/ListQuotation';
import { useState } from 'react';

export default function Quotations() {
  
  const [load,setLoad]= useState(false);
  return (
    <Container maxWidth="lg" sx={{mt:5}}> 
    {/* llamar el componente CreateLogin */}
    <CreateQuotation load={load} setLoad={setLoad}/>

    <ListQuotation load={load}/>

    </Container>
  );
}

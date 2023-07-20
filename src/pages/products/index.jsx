import Container from '@mui/material/Container';
import CreateProduct from '@components/molecules/Product/CreateProduct/CreateProduct';//importar el componente de mensaje de alerta
import ListProduct from '@components/molecules/Product/ListProduct/ListProduct';
import { useState } from 'react';
import DeleteProduct from '@components/molecules/Product/DeleteProduct/DeleteProduct';
import UpdateProduct from '@components/molecules/Product/UpdateProduct/UpdateProduct';
import { store } from '../../lib/store';

export default function Products() {
  const [load,setLoad]= useState(false);
  const [idDelete, setIdDelete]=useState('');
  const [idUpdate, setIdUpdate]=useState('');
    
  return (
    <Container maxWidth="lg" sx={{mt:5}}> 
        {/* llamar el componente CreateProduct */}
        <CreateProduct load={load} setLoad={setLoad}/>
        {/* setLoad carga y actualiza al eliminar */}
        <ListProduct load={load} setIdDelete={setIdDelete} setIdUpdate={setIdUpdate}/> 
        {/* actualizar la tabla despues de eliminar */}
        <DeleteProduct idDelete={idDelete} load={load} setLoad={setLoad}/>
        {/* //actualizar la tabla despues de modificar */}
        <UpdateProduct idUpdate={idUpdate} load={load} setLoad={setLoad}/>   
    </Container>
  );
}
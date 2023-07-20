import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default function Product_qotes(load) {
    const [rows,setRows]=useState([])

    useEffect(()=>{
      const fetchData =async()=>{
        const response = await axios.get('http://localhost:4000/api/product_qotes/consultProduct_qotes'); 
        console.log(response.data.product_qotes);//cambiar a la tabla que corresponde
        setRows(response.data.product_qotes);//cambiar a la tabla que corresponde
      }
      fetchData();
    },[load])//los corchetes son disparadores
return(
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell>Numero de Cotizacion</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Producto</TableCell>
            <TableCell>Cantidad a pedir</TableCell>
            <TableCell>Descuento</TableCell>
            <TableCell>Importe</TableCell>
            <TableCell>Acciones</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            {/* <TableCell component="th" scope="row">
                {row.picture}
            </TableCell> */}
            <TableCell >{row.Quotation.codNumber}</TableCell>
            <TableCell >{row.Product.stock}</TableCell>
            <TableCell >{row.Product.names} {row.Product.brand}</TableCell>
            <TableCell >{row.amount_prod}</TableCell>
            <TableCell >{row.descount}</TableCell>
            <TableCell >{row.imported}</TableCell>
            <TableCell ></TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>

)

}

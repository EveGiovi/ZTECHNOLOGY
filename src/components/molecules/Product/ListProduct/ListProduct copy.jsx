import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { IconButton } from '@mui/material';

export default function Products(load) {
    const [rows,setRows]=useState([])

    useEffect(()=>{
      const fetchData =async()=>{
        const response = await axios.get('http://localhost:4000/api/products/consultProducts'); 
        console.log(response.data.products);//cambiar a la tabla que corresponde
        setRows(response.data.products);//cambiar a la tabla que corresponde
      }
      fetchData();
    },[load])//los corchetes son disparadores
    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Imagen</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Marca</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell>Caracteristicas</TableCell>
                <TableCell>Especificaciones</TableCell>
                <TableCell>Stocks</TableCell>
                <TableCell>Acciones</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    <img width={100} src={`http://localhost:4000/uploads/${row.image}`}></img>
                </TableCell>
                <TableCell >{row.names}</TableCell>
                <TableCell >{row.brand}</TableCell>
                <TableCell >{row.value}</TableCell>
                <TableCell >{row.characteristics}</TableCell>
                <TableCell >{row.specifications}</TableCell>
                <TableCell >{row.stock}</TableCell>
                <TableCell >
                    {/* <IconButton color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton> */}
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    )

}
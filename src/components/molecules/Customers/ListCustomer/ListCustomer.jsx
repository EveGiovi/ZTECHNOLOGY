import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default function Customers(load) {
    const [rows,setRows]=useState([])

    useEffect(()=>{
      const fetchData =async()=>{
        const response = await axios.get('http://localhost:4000/api/customers/consultCustomers'); //cambiar direccion de la api
        console.log(response.data.customers);//cambiar a la tabla que corresponde
        setRows(response.data.customers);//cambiar a la tabla que corresponde
      }
      fetchData();
    },[load])//los corchetes son disparadores

    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Nombres</TableCell>
                <TableCell>Apellidos</TableCell>
                <TableCell>Documento</TableCell>
                <TableCell>Correo</TableCell>
                <TableCell>Dirección</TableCell>
                <TableCell>Telefono</TableCell>
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
                <TableCell >{row.names}</TableCell>
                <TableCell >{row.lastName}</TableCell>
                <TableCell >{row.document}</TableCell>
                <TableCell >{row.email}</TableCell>
                <TableCell >{row.address}</TableCell>
                <TableCell >{row.celphone}</TableCell>
                <TableCell ></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
}
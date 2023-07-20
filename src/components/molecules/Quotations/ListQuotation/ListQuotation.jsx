import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default function ListQuotation(load) {
    const [rows,setRows]=useState([])

    useEffect(()=>{
      const fetchData =async()=>{
        const response = await axios.get('http://localhost:4000/api/quotations/consultQuotations'); 
        console.log(response.data.quotations);//cambiar a la tabla que corresponde
        setRows(response.data.quotations);//cambiar a la tabla que corresponde
      }
      fetchData();
    },[load])//los corchetes son disparadores

    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Fecha y Hora de Cotizacion</TableCell>
                <TableCell>Codigo de Cotización</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Valor Total</TableCell>
                <TableCell>Vendedor</TableCell>
                <TableCell>Cliente</TableCell>
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
                <TableCell >{row.date}</TableCell>
                <TableCell >{row.codNumber}</TableCell>
                <TableCell >{row.description}</TableCell>
                <TableCell >{row.full_value}</TableCell>
                <TableCell >{row.User.firstName}</TableCell>
                <TableCell >{row.Customer.names} {row.Customer.lastName}</TableCell>
                <TableCell ></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
}
import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


export default function CreateUser(load){//PONER EL LOAD
   
    const [rows,setRows]=useState([])

    useEffect(()=>{
        const fetchData =async()=>{
          const response = await axios.get('http://localhost:4000/api/users/consultUsers'); 
          console.log(response.data.users);
          setRows(response.data.users);
        }
        fetchData();
      },[load])//PONER EL LOAD--los corchetes son disparadores

return(
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell>Primer Nombre</TableCell>
            <TableCell>Segundo Nombre</TableCell>
            <TableCell>Primer apellido</TableCell>
            <TableCell>Segundo Apellido</TableCell>
            <TableCell>Documento</TableCell>
            <TableCell>Correo</TableCell>
            <TableCell>Dirección</TableCell>
            <TableCell>Telefono</TableCell>
            <TableCell>Edad</TableCell>
            <TableCell>Estado</TableCell>
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
            <TableCell >{row.firstName}</TableCell>
            <TableCell >{row.secondName}</TableCell>
            <TableCell >{row.firstLastName}</TableCell>
            <TableCell >{row.secondLastName}</TableCell>
            <TableCell >{row.document}</TableCell>
            <TableCell >{row.email}</TableCell>
            <TableCell >{row.address}</TableCell>
            <TableCell >{row.celphone}</TableCell>
            <TableCell >{row.age}</TableCell>
            <TableCell >{row.state}</TableCell>
            {/* <TableCell >{row.Role.description}</TableCell>
            <TableCell >{row.User.firstName}  {row.User.firstLastName}</TableCell> */}
            <TableCell ></TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
)

}
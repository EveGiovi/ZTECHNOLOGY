import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { IconButton } from '@mui/material';//importar para icon button
import EditIcon from '@mui/icons-material/Edit';//boton para EDITAR importar
import DeleteIcon from '@mui/icons-material/Delete';//boton para ELIMINAR importar

//agregar setLoad para actualizar
export default function ListLogin({load,setLoad}) {
    const [rows,setRows]=useState([])

    useEffect(()=>{
      const fetchData =async()=>{
        const response = await axios.get('http://localhost:4000/api/logins/consultLogins'); 
        console.log(response.data.logins);//cambiar a la tabla que corresponde
        setRows(response.data.logins);//cambiar a la tabla que corresponde
      }
      fetchData();
    },[load])//los corchetes son disparadores
    //*funcion QUE RECIBE para ELIMINAR*/
    const handleDelete= async(id)=>{
        const response=await axios.delete(`http://localhost:4000/api/logins/deleteLogin/${id}`);
        setLoad(!load);//agregar para actulizar
        // console.log('idLogin:'+id);
        console.log(response);
    }
    return(
<TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Foto</TableCell>
                    <TableCell>Nombre de Usuario</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Rol</TableCell>
                    <TableCell>Usuario</TableCell>
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
                        <img width={100} src={`http://localhost:4000/uploads/${row.picture}`}></img>
                    </TableCell>
                    <TableCell >{row.userName}</TableCell>
                    <TableCell >{row.email}</TableCell>
                    <TableCell >{row.Role.description}</TableCell>
                    <TableCell >{row.User.firstName}  {row.User.firstLastName}</TableCell>
                    <TableCell >
                    {/* BOTON EDITAR EN LA VISTA */}
                    <IconButton color="success" aria-label="Editar">
                        <EditIcon />
                    </IconButton>
                    {/* ******** */}
                    {/* BOTON ELIMINAR (QUE ENVIA) EN LA VISTA */}
                    <IconButton color="primary" aria-label="Eliminar" onClick={()=>{handleDelete(row.id)}}>
                        <DeleteIcon />
                    </IconButton>
                    {/* *********** */}
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

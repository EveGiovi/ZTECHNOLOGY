import React,{useState} from 'react';// aumentar UseState
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';//importar Texfield para los inputs
import { Formik } from 'formik';//importar el formit
import * as Yup from 'yup';//importar el yup
import axios from 'axios';

export default function CreateCustomer({load,setLoad}) {//cambiar nombre de funcion
  const [open, setOpen] = useState(false);//quitar el react antes del useState

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      {/* cambiar el nombre del boton */}
        Crear Cliente
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
    <Formik
    //modificar para todos los campos
            initialValues={{
             names: '',
             lastName: '',
             document: '',
             email: '',
             address: '',
             celphone: '',
              }}
    //crear validacion con yup
    validationSchema={ Yup.object({
      names: Yup.string()
      .required('Este campo es requerido'),
      lastName: Yup.string()
      .required('Este campo es requerido'),
      document: Yup.string()
      .min(6, 'La contraseña debe contener minimo de 6 caracteres')
      .required('Este campo es requerido'),
      email: Yup.string()
      .email('Dirección de correo invalido')
      .required('Este campo es obligatorio'),
      address: Yup.string()
      .required('Este campo es requerido'),
      celphone: Yup.string()
      .max(9, 'La contraseña debe contener minimo de 9 caracteres')
      .required('Este campo es requerido'),
      
    })}
              //PARA GUARDAR EN LA BDD POST
              onSubmit={async(values, { setSubmitting }) => {
                const response=await axios.post('http://localhost:4000/api/customers/saveCustomer',values);
                console.log(response);
                setLoad(!load);
                setOpen(false);
                  // alert(JSON.stringify(values, null, 2));
                
              }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (

                // copiar y pegar contenido de formit
                <form onSubmit={handleSubmit}>
                        <DialogTitle id="alert-dialog-title">
                            {/* cambiar el titulo */}
                        {"Crear un nuevo Cliente"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {/* Quitar el texto y reemplazar por diseño de inputs textField */}
                            <TextField 
                            sx={{mt:1}}
                            fullWidth
                            id="outlined-basic" 
                            name="names"
                            label="Nombres Cliente"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.names}
                            error={errors.names}
                            helperText={errors.names}
                            />
                           <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="lastName"
                            label="Apellidos"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.lastName}
                            error={errors.lastName}
                            helperText={errors.lastName}
                            />
                            <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="document"
                            label="Documento"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.document}
                            error={errors.document}
                            helperText={errors.document}
                            />
                             <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="email"
                            label="Correo"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.email}
                            error={errors.email}
                            helperText={errors.email}
                            />
                             <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="address"
                            label="Dirección"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.address}
                            error={errors.address}
                            helperText={errors.address}
                            />
                             <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="celphone"
                            label="Telefono"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.celphone}
                            error={errors.celphone}
                            helperText={errors.celphone}
                            />


                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            {/* quitar textos y cambiar a tipo submit */}
                        <Button type='Submit'>
                            Crear
                        </Button>
                        </DialogActions>
                </form>
         )}
         </Formik>
      </Dialog>
    </div>
  );
}

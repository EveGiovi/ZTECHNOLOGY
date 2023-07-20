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


export default function CreateUser({load,setLoad}) {//PONER EL LOAD--cambiar nombre de funcion
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
        Crear Usuario 
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
             firstName: '',
             secondName: '',
             firstLastName: '',
             secondLastName: '',
             document: '',
             email: '',
             address: '',
             celphone: '',
             age: '',
            //  state: '',
              }}
      //crear validacion con yup
           validationSchema={ Yup.object({
            firstName: Yup.string()
            .required('Este campo es requerido'),
            secondName: Yup.string()
            .required('Este campo es requerido'),
            firstLastName: Yup.string()
            .required('Este campo es requerido'),
            secondLastName: Yup.string()
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
            age: Yup.string()
            .max(3, 'La contraseña debe contener maximo de 3 caracteres')
            .required('Este campo es requerido'),
            // state: Yup.string()
            // .required('Este campo es requerido'),
            
          })}
            //PARA GUARDAR EN LA BDD POST
            onSubmit={async(values, { setSubmitting }) => {
              const response=await axios.post('http://localhost:4000/api/users/saveUser',values);
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
                        {"Crear un nuevo Usuario"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {/* Quitar el texto y reemplazar por diseño de inputs textField */}
                            <TextField 
                            sx={{mt:1}}
                            fullWidth
                            id="outlined-basic" 
                            name="firstName"
                            label="Primer Nombre"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.firstName}
                            error={errors.firstName}
                            helperText={errors.firstName}
                            />
                             <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="secondName"
                            label="Segundo Nombre"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.secondName}
                            error={errors.secondName}
                            helperText={errors.secondName}
                            />
                             <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="firstLastName"
                            label="Primer Apellido"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.firstLastName}
                            error={errors.firstLastName}
                            helperText={errors.firstLastName}
                            />
                             <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="secondLastName"
                            label="Segundo Apellido"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.secondLastName}
                            error={errors.secondLastName}
                            helperText={errors.secondLastName}
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
                            label="Email"
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
                            <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="age"
                            label="Edad"
                            type="number"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.age}
                            error={errors.age}
                            helperText={errors.age}
                            />
                            {/* <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="state"
                            label="Estado"
                            // type="number"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.state}
                            error={errors.state}
                            helperText={errors.state}
                            /> */}
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

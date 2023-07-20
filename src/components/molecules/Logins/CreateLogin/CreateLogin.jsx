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

export default function CreateLogin({load,setLoad}) {//cambiar nombre de funcion
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
        Crear Login 
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
    {/* //para hacer un formulario */}
    <Formik
    //modificar para todos los campos
            initialValues={{
             userName: '',
             email: '',
             password: '',
             picture:'',
              }}
              //crear validacion con yup
              validationSchema={ Yup.object({
                userName: Yup.string()
                  .required('Este campo es requerido'),
                email: Yup.string().email('Dirección de correo invalido').required('Este campo es obligatorio'),
                password: Yup.string()
                   .min(8, 'La contraseña debe contener minimo 8 caracteres')
                   .required('Este campo es requerido'),
                
              })}
              
            // }}
            //PARA GUARDAR EN LA BDD POST
            onSubmit={async(values, { setSubmitting }) => {
                const response=await axios.post('http://localhost:4000/api/logins/saveLogin',values);
                console.log(response);
                setLoad(!load);
                setOpen(false);
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
                        {"Crear una nueva Cuenta"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {/* Quitar el texto y reemplazar por diseño de inputs textField */}
                            <TextField 
                            sx={{mt:1}}
                            fullWidth
                            id="outlined-basic" 
                            name="userName"
                            label="Nombre Usuario"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.userName}
                            error={errors.userName}
                            helperText={errors.userName}
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
                            name="password"
                            label="Contraseña"
                            type="password" //aumentar tipo de datos
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.password}
                            error={errors.password} //aumentar error
                            helperText={errors.password} //aumentar error
                            />
                            <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="picture"
                            label="Fotografia"
                            // type="radio-group" //aumentar tipo de datos
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.picture}
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

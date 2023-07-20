import React,{useEffect, useState} from 'react';// aumentar UseState
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

export default function UpdateLogin({idUpdate,load,setLoad}) {//cambiar nombre de funcion
  const [open, setOpen] = useState(false);//quitar el react antes del useState
  const[formData, setFormData]=useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const consultLoginById=async (id)=>{
    const response=await axios.get(`http://localhost:4000/api/logins/consultLogin/${id}`);
    console.log(response.data.login);
    setFormData(response.data.login);
  }
  //llama ventana modal
  useEffect(()=>{
    if(idUpdate){// si tiene datos llama a la funcion consultUserById
        consultLoginById(idUpdate);
    }
    setOpen(idUpdate? true:false);// si tiene en true abre la ventana modal
  },[idUpdate])
  //////
  return (
    <div>
  
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
    <Formik
    //llama en la ventana modal los datos con formData
            enableReinitialize
            initialValues={{
             id: idUpdate,
             userName: formData.userName || '',
             email: formData.email || '',
             picture:formData.picture ||'',
            //  password: '',
              }}
              //crear validacion con yup
              validationSchema={ Yup.object({
              userName: Yup.string()
                   .required('Este campo es requerido'),
                 email: Yup.string().email('Dirección de correo invalido').required('Este campo es obligatorio'),
                
               })}
           
            //PARA GUARDAR EN LA BDD POST
             onSubmit={async(values, { setSubmitting }) => {
              const response=await axios.put('http://localhost:4000/api/logins/updateLogin',values);
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
                        {"Actualiza una Cuenta"}
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
                            name="picture"
                            label="Fotografia"
                            type="text" //aumentar tipo de datos
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.picture}
                            />
                            {/* <TextField 
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
                            /> */}

                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            {/* quitar textos y cambiar a tipo submit */}
                        <Button type='Submit'>
                            Actualizar
                        </Button>
                        </DialogActions>
                </form>
         )}
         </Formik>
      </Dialog>
    </div>
  );
}

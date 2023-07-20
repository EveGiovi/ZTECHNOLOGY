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

export default function CreateQuotation({load,setLoad}) {//cambiar nombre de funcion
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
        Crear Cotizacion
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
            //  date: '',
             codNumber: '',
             description: '',
             full_value: '',
            //  id_user: '',
            //  id_customers: '',
              }}
              //crear validacion con yup
              validationSchema={ Yup.object({
                codNumber: Yup.string()
                  .required('Este campo es requerido')
                  .max(10, 'La contraseña debe contener minimo 10 caracteres'),
                description: Yup.string()
                  .required('Este campo es requerido'),
                full_value: Yup.string()
                  .required('Este campo es requerido'),
        
              })}
            
          //PARA GUARDAR EN LA BDD POST
          onSubmit={async(values, { setSubmitting }) => {
            const response=await axios.post('http://localhost:4000/api/quotations/saveQuotation',values);
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
                        {"Crear una nueva Cotización"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {/* Quitar el texto y reemplazar por diseño de inputs textField */}
                            <TextField 
                            sx={{mt:1}}
                            fullWidth
                            id="outlined-basic" 
                            name="codNumber"
                            label="Codigo Cotización"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.codNumber}
                            error={errors.codNumber}
                            helperText={errors.codNumber}
                            />
                           <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="description"
                            label="Descripción"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.description}
                            error={errors.description}
                            helperText={errors.description}
                            />
                            <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="full_value"
                            label="Valor Producto"
                            type="number" //aumentar tipo de datos
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.full_value}
                            error={errors.full_value} //aumentar error
                            helperText={errors.full_value} //aumentar error
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

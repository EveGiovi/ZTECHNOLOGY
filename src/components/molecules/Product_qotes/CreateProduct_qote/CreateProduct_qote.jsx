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

export default function CreateProduct_qote({load,setLoad}) {//cambiar nombre de funcion
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
        Crear Detalle Cotizacion
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
             amount_prod: '',
             descount: '',
             imported: '',
              }}
              //crear validacion con yup
              validationSchema={ Yup.object({
                amount_prod: Yup.string()
                  .required('Este campo es requerido'),
                // descount: Yup.string()
                //   .required('Este campo es requerido'),
                imported: Yup.string()
                  .required('Este campo es requerido'),
            
              })}
     
          //PARA GUARDAR EN LA BDD POST
          onSubmit={async(values, { setSubmitting }) => {
            const response=await axios.post('http://localhost:4000/api/product_qotes/saveProduct_qote',values);
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
                        {"Crear un nuevo detalle Cotizacion"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {/* Quitar el texto y reemplazar por diseño de inputs textField */}
                            <TextField 
                            sx={{mt:1}}
                            fullWidth
                            id="outlined-basic" 
                            name="amount_prod"
                            label="Cantidad de Producto"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.amount_prod}
                            error={errors.amount_prod}
                            helperText={errors.amount_prod}
                            />
                           <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="descount"
                            label="Descuento"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.descount}
                            error={errors.descount}
                            helperText={errors.descount}
                            />
                            <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="imported"
                            label="Importe"
                            type="number" //aumentar tipo de datos
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.imported}
                            error={errors.imported} //aumentar error
                            helperText={errors.imported} //aumentar error
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

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

export default function CreateProduct({load,setLoad}) {//cambiar nombre de funcion
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
        Crear Producto
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
             brand: '',
             value: '',
             characteristics: '',
             specifications: '',
             stock: '',
              }}
              //crear validacion con yup
              validationSchema={ Yup.object({
                names: Yup.string()
                  .required('Este campo es requerido'),
                brand: Yup.string()
                  .required('Este campo es requerido'),
                value: Yup.string()
                  .required('Este campo es requerido'),
                //   .number('Este campo debe ser numerico'),
                characteristics: Yup.string()
                  .required('Este campo es requerido'),
                specifications: Yup.string()
                  .required('Este campo es requerido'),
                stock: Yup.string()
                  .required('Este campo es requerido'),
                //   .number('Este campo debe ser numerico'),
                
                
              })}
         
           //PARA GUARDAR EN LA BDD POST
           onSubmit={async(values, { setSubmitting }) => {
              const response=await axios.post('http://localhost:4000/api/products/saveProduct',values);
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
                        {"Crear un nuevo Producto"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {/* Quitar el texto y reemplazar por diseño de inputs textField */}
                            <TextField 
                            sx={{mt:1}}
                            fullWidth
                            id="outlined-basic" 
                            name="names"
                            label="Nombre Producto"
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
                            name="brand"
                            label="Marca"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.brand}
                            error={errors.brand}
                            helperText={errors.brand}
                            />
                            <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="value"
                            label="Valor"
                            type="number" //aumentar tipo de datos
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.value}
                            error={errors.value} //aumentar error
                            helperText={errors.value} //aumentar error
                            />
                            <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="characteristics"
                            label="Caracteristicas"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.characteristics}
                            error={errors.characteristics}
                            helperText={errors.characteristics}
                            />
                             <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="specifications"
                            label="Especificaciones"
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.specifications}
                            error={errors.specifications}
                            helperText={errors.specifications}
                            />
                            <TextField 
                            sx={{mt:3}}
                            fullWidth
                            id="outlined-basic" 
                            name="stock"
                            label="Stock"
                            type="number" //aumentar tipo de datos
                            variant="outlined" 
                            onChange={handleChange}
                            value={values.stock}
                            error={errors.stock} //aumentar error
                            helperText={errors.stock} //aumentar error
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

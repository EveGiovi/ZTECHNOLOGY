import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';//importar Texfield para los inputs
import { Formik } from 'formik';//importar el formit
import * as Yup from 'yup';//importar el yup
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from '../../lib/slice/authSlice';
import { useNavigate} from 'react-router-dom'

const Auth = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    //lamar el metodo de useSelector
     const user = useSelector((state) => state.auth.user)
    return(
        <>
        {/* LLamr user que esta definido para traer los usuarios del postman */}
        <h1>Bienvenidos {user?.userName}</h1>
    <Container maxWidth="xs" sx={{mt:5}}>  
        <Formik
            //modificar para todos los campos
                    initialValues={{
                    email: '',
                    password: '',
                    }}
                    //crear validacion con yup
                    validationSchema={ Yup.object({
                        email: Yup.string().email('Dirección de correo invalido').required('Este campo es obligatorio'),
                        password: Yup.string()
                        .min(8, 'La contraseña debe contener minimo 8 caracteres')
                        .required('Este campo es requerido'),
                        
                    })}
                
                    //PARA GUARDAR EN LA BDD POST
                    onSubmit={async(values, { setSubmitting }) => {
                    const response=await dispatch(fetchLogin(values));
                    // const response=await axios.post('http://localhost:4000/api/logins/saveLogin',values);
                    console.log('Responde Login',response);
                    // setLoad(!load);
                    // setOpen(false);
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
                                <Button type='Submit' onClick={()=>{
                                    navigate("/")
                                }}>
                                    Iniciar Sesión
                                </Button>
                                
                        </form>
                )}
        </Formik>
    </Container>
        </>
    )
}
export default Auth;
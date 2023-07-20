import { Grid } from "@mui/material";
import logoImage from '../../assets/images/logoNegro.png'

const Home = () => {
    // const count = useSelector((state) => state.counter.value)
    return(
        <>
            Bienvenidos
        <div>
            <Grid container
                justify="center"
                direction="column"
                alignItems="center"
                style={{minHeight:'100vh'}}
                >
                <Grid item xs={3}>
                    <img width={500}  src={logoImage}></img>
                </Grid>
            </Grid>
        </div>
        </>
    )
}
export default Home;
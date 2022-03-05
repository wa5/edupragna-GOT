import { Container, Grid } from "@mui/material";
import { CardsContainer } from "../domains/cards/container/CardsContainer";
import { NavBarContainer } from "../domains/navbars/container/NavBarContainer";
import { SliderContainer } from "../domains/sliders/containers/SliderContainer";
import img1 from '../static/img/2.jpg'
import img2 from '../static/img/3.jpg'
import img3 from '../static/img/4.jpg'
export default function Home(){
    return (<>
    
    <Container maxWidth="lg">
    <NavBarContainer/>
    <Grid container>
    <CardsContainer/>
    </Grid>
       
       <SliderContainer img1={img1} img2={img2} img3={img3}/>

    </Container>
    </>)
}
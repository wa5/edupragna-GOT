import { Container, Grid } from "@mui/material";
import { CardsContainer } from "../domains/cards/container/CardsContainer";
import { InfinetSlider } from "../domains/common/slider/components/InfinetSlider";
import { NavBarContainer } from "../domains/navbars/container/NavBarContainer";
import { SliderContainer } from "../domains/sliders/containers/SliderContainer";
import img1 from '../static/img/2.jpg'
import img2 from '../static/img/3.jpg'
import img3 from '../static/img/4.jpg'
import Slider from "react-slick";
import Cards3Container from "../domains/cards/container/Cards3Container";
import BaicDiv from "../app/topcs/styled-components/BaicDiv";
import Narm from "../app/topcs/normalizer/Narm";
export default function Home(){
    
    return (<>
    
    <Container maxWidth="lg">
<Narm/>
    <BaicDiv/>






    {/* <NavBarContainer/>
    <
        
    <CardsContainer/> */}

   
 
  
       {/* <InfinetSlider/> */}
       <SliderContainer img1={img1} img2={img2} img3={img3}/>
       <br/>
       <Cards3Container/>
       <Cards3Container/>
       <Cards3Container/>
    </Container>
    </>)
}
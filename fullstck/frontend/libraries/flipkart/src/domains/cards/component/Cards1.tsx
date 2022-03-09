import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import img1 from '../../../static/img/1.jpg'
import { IProduct } from "../../../store/productlist/interfaces";
interface ICard1Pros {
  title:string,
  products:IProduct[]
}

const Card1: React.FC<ICard1Pros> = (props) => {

  const renderList = props.products.map((product) => {
    const { id, title, image, price, category } = product;
    
    return (<div>
    
   
    <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
     
    </div>)
  })
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4
  };
  return (
   <>
   {renderList}</>
 
    
    
     
   
    
  );
};

export default Card1;

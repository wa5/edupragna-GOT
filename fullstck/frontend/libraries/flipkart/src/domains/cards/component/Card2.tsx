import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from "@mui/material";
  import { Link } from "react-router-dom";
  import Slider from "react-slick";
  import img1 from '../../../static/img/1.jpg'
  import { IProduct } from "../../../store/productlist/interfaces";
  interface ICard1Pros {
    data: IProduct
  }
  
  const Card2: React.FC<ICard1Pros> = (props) => {
  const {image,title}=props.data
    
    
    return (
     <>

 <Card sx={{ maxWidth: 200 }}>
 <Link to='/' style={{textDecoration: 'none'}}>
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
          </Link>  
        </Card>
   
        
        </>
       
     
      
    );
  };
  
  export default Card2;
  
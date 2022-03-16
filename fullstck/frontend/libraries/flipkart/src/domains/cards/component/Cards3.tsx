import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"


interface ICards3Props{
image:string,
title:string,
id:number|undefined,
}

const Cards3:React.FC<ICards3Props>=(props)=>{
    return (<>
  <Card sx={{ maxWidth: 345 }}>
  <Link to={`/singlepage/${props.id}`} style={{textDecoration: 'none'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
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
    
    
    
    </>)
}

export default Cards3
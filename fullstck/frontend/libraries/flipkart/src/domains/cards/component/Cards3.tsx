import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"


interface ICards3Props{
image:string,
title:string
}

const Cards3:React.FC<ICards3Props>=(props)=>{
    return (<>
  <Card sx={{ maxWidth: 345 }}>
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
    </Card>
    
    
    
    </>)
}

export default Cards3
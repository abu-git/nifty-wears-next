import { makeStyles, Box, Grid, Button, Card, CardActions, CardActionArea, CardContent, CardMedia } from '@material-ui/core'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

const useStyles = makeStyles((theme) => ({
    cardroot: {
        maxWidth: 305,
        textAlign: "center",
        padding: 0,
        [theme.breakpoints.down('sm')]: {
            width: 400
        }
    },
    cardmedia: {
        height: 200
    },
    cardaction: {
        backgroundColor: "hsl(0, 0%, 6%)",
        color: "white",
        '&:hover' : {
            backgroundColor: "hsl(0, 0%, 10%)",
        },
    },
    griditem: {
        margin: "0 auto",
        padding: "2rem 4rem",
        [theme.breakpoints.down('sm')]: {
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "center"
        },
        [theme.breakpoints.down('xs')]: {
            padding: "1rem 2rem"
        }
    },
    buttonmargin: {
        margin: "0 auto"
    },
    buttonhover: {
        '&:hover':{
            transform: "scale(1.1)",
            backgroundColor: "#ffca68",
            color: "black"
        }
    }
}))

const MenuItem = ({product}) => {
    const classes = useStyles()
    const { addCart } = useContext(CartContext) 
    return(
    <>
        <Grid item lg={4} md={6} sm={12} xs={12} className={classes.griditem}>
                <Card className={classes.cardroot}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.cardmedia}
                            image={product.photo}
                            title="Nifty Wears Model"
                        />
                        <CardContent className={classes.cardaction}>
                            <h2>{product.title}</h2>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardaction}>
                        <Box className={classes.buttonmargin}>
                            <h3 color="inherit"> ${product.price}</h3>
                            <Button 
                                onClick={() => addCart(product.id)}
                                className={classes.buttonhover} 
                                variant="outlined" 
                                color="inherit">Add to Cart
                            </Button>
                        </Box>
                    </CardActions>
                </Card>
        </Grid>
    </>
    )
}

export default MenuItem
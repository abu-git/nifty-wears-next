import { Button, Container, Grid, makeStyles } from "@material-ui/core"
import Image from 'next/image'
import DeleteIcon from '@material-ui/icons/Delete'

import { CartContext } from "../context/CartContext"
import { useContext } from "react"

import Meta from "./Meta"

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "70vh",
        backgroundColor: "hsl(0, 100%, 0%)"
    },
    h3effects: {
        color: "white",
        fontSize: "2em"
    },
    h4effects: {
        fontSize: "1.2em"
    },
    price: {
        fontSize: "0.9em"
    },
    buttons: {
        fontSize: "1em",
        margin: "1em",
        '&:hover':{
            transform: "scale(1.1)",
            backgroundColor: "#ffca68",
            color: "black"
        }
    },
    cartTop: {
        padding: "1em"
    },
    container: {
        display: "flex",
        justifyContent: "space-between"
    },
    thumbnail: {
        padding: "1em"
    },
    img: {
        borderRadius: "4px"
    },
    left: {
        display: "flex",
        color: "white",
        //border: "1px red solid",
        width: "40%"
    },
    right: {
        color: "white",
        display: "flex",
        //border: "1px red solid",
        width: "40%"
        //justifyContent: "flex-end"
    },
    rightDetail: {
        paddingTop: "2em"
    }
}))

export default function CartPage4() {
    const classes = useStyles()
    const cartMeta = "Nifty Wears | Cart"
    const { cart, total, getTotal, addCart, removeCart }  = useContext(CartContext)

    return(
        <>
            <Meta title={cartMeta} />
            <Container maxWidth="xl">
                <Grid container className={classes.root}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.cartTop}>
                        <h3 className={classes.h3effects}>Shopping Cart</h3>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <ul>
                            {cart.map(item => {
                                return(
                                    <li className={classes.container}>
                                        <div className={classes.left}>
                                            <div className={classes.thumbnail}>
                                                <Image className={classes.img} src={item.photo} alt={item.title} width="100%" height="100%" />
                                            </div>
                                            <div className={classes.detail}>
                                                <h4 className={classes.h4effects}>{item.title}</h4>
                                                <h6 className={classes.price}>${item.price}</h6>
                                            </div>
                                        </div>
                                        <div className={classes.right}>
                                            <div className={classes.rightDetail}>
                                                <Button 
                                                    variant="outlined" 
                                                    color="inherit" 
                                                    onClick={() => removeCart(item.id)} 
                                                    className={classes.buttons}>-
                                                </Button>
                                                {item.quantity}
                                                <Button 
                                                    variant="outlined" 
                                                    color="inherit" 
                                                    onClick={() => addCart(item.id)} 
                                                    className={classes.buttons}>+
                                                </Button>
                                            </div>

                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
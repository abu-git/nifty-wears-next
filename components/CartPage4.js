import { Button, Container, Grid, makeStyles } from "@material-ui/core"
import Image from 'next/image'
import DeleteIcon from '@material-ui/icons/DeleteOutline'
import { ArrowForwardIos } from "@material-ui/icons"

import { CartContext } from "../context/CartContext"
import { useContext } from "react"

import Meta from "./Meta"

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "70vh",
        backgroundColor: "hsl(0, 100%, 0%)",
        //border: "1px red solid",
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
        margin: "0.6em",
        width: "10px",
        '&:hover':{
            transform: "scale(1.1)",
            backgroundColor: "#ffca68",
            color: "black"
        }
    },
    deleteDiv: {
        marginTop: "3px",
        cursor: "pointer",
        '&:hover': {
            transform: "scale(1.2)",
            /*backgroundColor: "#ffca68",
            color: "black"*/
        }
    },
    delete: {
        fontSize: "2em",
        //paddingTop: "6px"
    },
    cartTop: {
        padding: "1em"
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        //border: "1px red solid",
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
        //paddingTop: ".5em",
        //border: "1px red solid",
        display: "flex",
        alignItems: "center"
    },
    grid:{
        //border: "1px red solid",
    },
    promoCode: {
        marginTop: "15px",
        marginBottom: "15px"
    },
    promotion: {
        color: "white",
        display: "flex",
        flexDirection: "column"
    },
    input: {
        transition: "all 0.25s linear",
        outline: "none",
        width: "80%",
        fontSize: "1rem",
        padding: "1.1rem 0 0.5rem 1.8rem",
        border: "2px solid #ffca68",
        borderRadius: "2rem 0 0 2rem",
        '&:hover': {
            border: "2px solid #26eb5a"
        }
    },
    promoButton: {
        width: "20%",
        padding: "0.6rem 0",
        borderRadius: "0 2rem 2rem 0",
        backgroundColor: "#ffca68",
        color: "black",
        '&:hover': {
            border: "2px solid black",
            backgroundColor: "#26eb5a"
        }
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
                <Grid container className={classes.root} item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.cartTop}>
                        <h3 className={classes.h3effects}>Shopping Cart</h3>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.grid}>
                        
                            {cart.map(item => {
                                return(
                                    <>
                                    <div className={classes.container}>
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
                                                <div onClick={() => removeCart(item.id)} className={classes.deleteDiv}><DeleteIcon className={classes.delete}></DeleteIcon></div>
                                            </div>

                                        </div>
                                    </div>
                                    <hr/>
                                    </>
                                )
                            })}
                    </Grid>
                    <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className={classes.promoCode}>
                        <div className={classes.promotion}>
                            <label>Have a Promo Code?</label>
                            <div className={classes.inputContainer}>
                                <input className={classes.input} type="text" />
                                <button className={classes.promoButton}><ArrowForwardIos fontSize="small" /></button>
                            </div>
                        </div>                            
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
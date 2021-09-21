import { IconButton, Button, Container, Grid, makeStyles } from "@material-ui/core"
import Image from 'next/image'
import Link from 'next/link'
import DeleteIcon from '@material-ui/icons/DeleteOutline'
import { ArrowBack, ArrowForwardIos } from "@material-ui/icons"

import { CartContext } from "../context/CartContext"
import { useContext } from "react"

import Meta from "./Meta"

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "70vh",
        backgroundColor: "hsl(0, 100%, 0%)",
        //border: "1px red solid",
    },
    headerContainer: {
        display: "flex",
        justifyContent: "center"
    },
    header: {
        padding: "0",
        margin: "0",
    },
    h3header: {
        color: "white"
    },
    arrowback: {
        color: "white",
        marginRight: "15px",
        "&:hover": {
            cursor: "pointer"
        }
    },
    backtext: {
        color: "white",
        paddingBottom: "3px",
        "&:hover": {
            //color: "#ffca68",
            //textDecoration: "underline",
            cursor: "pointer"
        }
    },
    goback: {
        marginTop: "15px",
        '&:hover': {
            cursor: "pointer"
        },
        display: "flex"
    },
    h3effects: {
        color: "white",
        fontSize: "2em"
    },
    h4effects: {
        fontSize: "1.2em",
        [theme.breakpoints.down('sm')]: {
            fontSize: "0.9em"
        }
    },
    price: {
        fontSize: "0.9em",
        [theme.breakpoints.down('sm')]: {
            fontSize: "0.8em"
        }
    },
    buttons: {
        fontSize: "1em",
        margin: "0.6em",
        width: "10px",
        '&:hover':{
            transform: "scale(1.1)",
            backgroundColor: "#ffca68",
            color: "black"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "0.8em",
            margin: "0.4em"
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
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.5em"
        }
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
        padding: "1em",
        [theme.breakpoints.down('xs')]: {
            display: "none"
        }
    },
    img: {
        borderRadius: "4px"
    },
    left: {
        display: "flex",
        color: "white",
        //border: "1px red solid",
        width: "50%",
        justifyContent: "center"
    },
    right: {
        color: "white",
        display: "flex",
        marginRight: "4px",
        //border: "1px red solid",
        width: "50%",
        justifyContent: "center"
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
        marginTop: "30px",
        marginBottom: "15px",
        display: "flex",
        justifyContent: "center"
    },
    promotion: {
        color: "white",
        display: "flex",
        flexDirection: "column",
        width: "90%"
    },
    input: {
        transition: "all 0.25s linear",
        outline: "none",
        width: "80%",
        fontSize: "1rem",
        padding: "1.1rem 0 0.5rem 1.8rem",
        border: "2px solid black",
        borderRadius: "2rem 0 0 2rem",
        '&:hover': {
            border: "2px solid #ffca68"
        }
    },
    promoButton: {
        width: "20%",
        padding: "0.6rem 0",
        borderRadius: "0 2rem 2rem 0",
        backgroundColor: "black",
        color: "white",
        '&:hover': {
            border: "2px solid black",
            backgroundColor: "#ffca68",
            color: "black",
        }
    },
    summary: {
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    summaryh4: {
        margin: "0.5rem",
        padding: "0.5rem",
        color: "#ffca68",
        fontStyle: "bold"
    },
    summaryh5: {
        margin: "0.5rem",
        padding: "0.5rem",
        color: "white"
    },
    proceed: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "35px",
        marginBottom: "35px"
    },
    proceedButton: {
        backgroundColor: "black",
        border: "2px solid white",
        borderRadius: "10px",
        color: "white",
        padding: "15px",
        '&:hover':{
            transform: "scale(1.1)",
            backgroundColor: "#ffca68",
            color: "black",
            border: "2px solid black"
        }
    },
    noItems: {
        display: "flex",
        justifyContent: "center"
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
                <div className={classes.headerContainer}>
                    <IconButton className={classes.header}>
                        <Image width="30px" height="30px" alt="Nifty Wears logo" src="/assets/favicon_io/favicon-32x32.png" />
                        <h3 className={classes.h3header}>Nifty Wears</h3>
                    </IconButton>
                </div>
                <hr/>
                <Link href="/" passHref>
                    <div className={classes.goback}>
                        <ArrowBack className={classes.arrowback} />
                        <span className={classes.backtext}> Back to home</span>
                    </div>
                </Link>
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
                    {cart.length > 0 &&
                        <> 
                        <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className={classes.promoCode}>
                            <div className={classes.promotion}>
                                <label>Have a Promo Code?</label>
                                <div className={classes.inputContainer}>
                                    <input className={classes.input} type="text" />
                                    <button className={classes.promoButton}><ArrowForwardIos fontSize="small" /></button>
                                </div>
                            </div>                           
                        </Grid>
                        <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className={classes.summary}>
                            <h5 className={classes.summaryh5}>Subtotal: {"  $" + total} </h5>
                            <h5 className={classes.summaryh5}>Tax: $0.00</h5>
                            <h4 className={classes.summaryh4}>Total: {"  $" + total}</h4>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.proceed}>
                                <button className={classes.proceedButton}>Continue to Payment</button>
                        </Grid>
                        </>
                    }

                    {total === 0 &&
                        <>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.noItems}>
                                <h4 className={classes.summaryh4}>No items in cart.</h4>
                            </Grid>
                        </>
                    }
                </Grid>
            </Container>
        </>
    )
}
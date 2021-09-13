import { Container, Grid, makeStyles } from "@material-ui/core"
import Image from 'next/image'

import { CartContext } from "../context/CartContext"
import { useContext } from "react"

import Meta from "./Meta"

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "70vh",
        backgroundColor: "hsl(0, 100%, 0%)"
    },
    cartTop: {
        padding: "1em"
    },
    container: {
        display: "flex"
    },
    thumbnail: {
        padding: "1em"
    },
    img: {
        borderRadius: "4px"
    },
    left: {
        display: "flex",
        color: "white"
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
                        <h1>Shopping Cart</h1>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <section className={classes.container}>
                            <ul>
                                {cart.map(item => {
                                    return(
                                        <li>
                                            <div className={classes.left}>
                                                <div className={classes.thumbnail}>
                                                    <Image className={classes.img} src={item.photo} alt={item.title} width="100%" height="100%" />
                                                </div>
                                                <div className={classes.detail}>
                                                    <h4>{item.title}</h4>
                                                    <h6>{item.price}</h6>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
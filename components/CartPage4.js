import { Container, Grid, makeStyles } from "@material-ui/core"

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
                                {}
                            </ul>
                        </section>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
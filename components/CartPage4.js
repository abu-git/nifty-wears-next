import { Container, Grid, makeStyles } from "@material-ui/core"

import { CartContext } from "../context/CartContext"
import { useContext } from "react"

import Meta from "./Meta"

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "70vh",
        backgroundColor: "hsl(0, 100%, 0%)"
    }
}))

export default function CartPage4() {
    const classes = useStyles()
    const cartMeta = "Nifty Wears | Cart"

    return(
        <>
            <Meta title={cartMeta} />
            <Container maxWidth="xl">
                <Grid container className={classes.root}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <h1>Shopping Cart</h1>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
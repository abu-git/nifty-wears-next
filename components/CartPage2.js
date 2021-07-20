import { Container, Grid, makeStyles } from "@material-ui/core"
import CartItem2 from "./CartItem2"

import { CartContext } from "../context/CartContext"
import { useContext } from "react"


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "70vh",
    },
    table: {
        border: "1px solid #ccc",
        borderCollapse: "collapse",
        margin: 0,
        padding: 0,
        width: "100%",
        tableLayout: "fixed",
        color: "white",
        [theme.breakpoints.down('xs')]: {
            border: "0"
        }
    },
    tablecaption: {
        fontSize: "1.5em",
        margin: "0.5em 0 0.75em",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.3em"
        }
    },
    tablethead: {
        [theme.breakpoints.down('xs')]: {
            border: "none",
            clip: "rect(0 0 0 0)",
            height: "1px",
            margin: "-1px",
            overflow: "hidden",
            padding: "0",
            position: "absolute",
            width: "1px"
        }
    },
    tabletr: {
        //backgroundColor: "#f8f8f8",
        border: "1px solid #ddd",
        padding: "0.35em",
        [theme.breakpoints.down('xs')]: {
            borderBottom: "3px solid #ddd",
            display: "block",
            marginBottom: "1em"
        }
    },
    tableth: {
        padding: "0.625em",
        textAlign: "center",
        fontSize: "0.85em",
        letterSpacing: "0.1em",
        textTransform: "uppercase"
    },
    tabletd: {
        padding: "0.625em",
        textAlign: "center",
        [theme.breakpoints.down('xs')]: {
            borderBottom: "1px solid #ddd",
            display: "block",
            fontSize: "0.8em",
            textAlign: "right",
            '&:last-child': {
                borderBottom: 0
            },
            '&::before': {
                content: "attr(data-label)",
                float: "left",
                fontWeight: "bold",
                textTransform: "uppercase"
            }
        },
    }
}))

export default function CartPage2() {
    const classes = useStyles()
    const { cart, total, getTotal }  = useContext(CartContext)
    return(
        <>
            <Container maxWidth="xl">
                <Grid container className={classes.root}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <h1>Cart</h1>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <table className={classes.table}>
                            <caption className={classes.tablecaption}>Order Summary</caption>
                            <thead className={classes.tablethead}>
                                <tr className={classes.tabletr}>
                                    <th className={classes.tableth} scope="col">Item</th>
                                    <th className={classes.tableth} scope="col">Title</th>
                                    <th className={classes.tableth} scope="col">Quantity</th>
                                    <th className={classes.tableth} scope="col">Price</th>
                                    <th className={classes.tableth} scope="col">Remove Item</th>
                                </tr>
                            </thead>
                            <tbody>
                                { cart.map(item => {
                                    return(<CartItem2 item={item} key={item.id} />)
                                }) }
                                <tr className={classes.tabletr}>
                                    <td  className={classes.tabletd}></td>
                                    <td data-label="Total" className={classes.tabletd}>Total:</td>
                                    <td className={classes.tabletd}></td>
                                    <td className={classes.tabletd}>${total}</td>
                                    <td className={classes.tabletd}></td>
                                </tr>
                            </tbody>
                        </table>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

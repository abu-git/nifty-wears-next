import Link from 'next/link'
import { Container, Grid, makeStyles } from "@material-ui/core"
import CartItem2 from "./CartItem2"
import { ArrowBack } from '@material-ui/icons'

import { CartContext } from "../context/CartContext"
import { useContext } from "react"


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "70vh",
    },
    pageTitle: {
        textAlign: "center",
        marginTop: "20px",
        [theme.breakpoints.down('xs')]: {
            marginTop: "40px"
        },
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
    },
    arrowback: {
        marginTop: "5px",
        color: "white",
        width: "1.5em",
        height: "1.3em",
        "&:hover": {
            cursor: "pointer"
        }
    },
    backtext: {
        color: "white",
        paddingBottom: "3px",
        "&:hover": {
            cursor: "pointer"
        }
    },
    goback: {
        marginTop: "15px",
        '&:hover': {
            cursor: "pointer"
        }
    }
}))

export default function CartPage2() {
    const classes = useStyles()
    const { cart, total, getTotal }  = useContext(CartContext)
    return(
        <>
            <Container maxWidth="xl">
                <Link href="/" passHref>
                    <div className={classes.goback}>
                        <ArrowBack className={classes.arrowback} />
                        <span className={classes.backtext}> Back to home</span>
                    </div>
                </Link>
                <Grid container className={classes.root}>
                    <Grid className={classes.pageTitle} item xl={12} lg={12} md={12} sm={12} xs={12}>
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

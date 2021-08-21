import { Breadcrumbs,Container, Grid, makeStyles, Typography } from "@material-ui/core"
import Link from '@material-ui/core/Link'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Meta from "./Meta"
import Image from 'next/image'

import cartStyles from '../styles/CartPage.module.css'

import { CartContext } from "../context/CartContext"
import { useContext } from "react"

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "70vh",
    },
    breadFont: {
        color: "white"
    },
    cartTitle: {
        color: "white"
    },
    img: {
        borderRadius: "4px"
    },
    container: {
        [theme.breakpoints.down('xs')]: {

        }
    },
    products: {
        borderTop: "1px solid #ddd"
    },
    row: {

    },
    col_left: {

    },
    thumbnail: {

    }
}))

export default function CartPage3() {
    const classes = useStyles()
    const cartMeta = "Nifty Wears | Cart"
    const { cart, total, getTotal }  = useContext(CartContext)

    return(
        <>
            <Meta title={cartMeta} />
            <Container maxWidth="xl">
                <Grid container>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize='small'/>} className={classes.breadFont}>
                        <Link href="/">
                            Home
                        </Link>
                        <Typography fontFamily="Special Elite">Shopping Cart</Typography>
                    </Breadcrumbs>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.cartTitle}>
                        <h2>Shopping Cart</h2>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <section className={cartStyles.container}>
                            <ul className={cartStyles.products}>
                                {cart.map(item =>{ 
                                    return (
                                        <li className={cartStyles.row} key={item.id}>
                                            <div className={cartStyles.col_left}>
                                                <div className={cartStyles.thumbnail}>
                                                    <a href="#">
                                                        <Image className={classes.img} src={item.photo} alt={item.title} width="100%" height="100%" />
                                                    </a>
                                                </div>
                                                <div className={cartStyles.detail}>
                                                    <div className={cartStyles.name}>
                                                        <a>{item.title}</a>
                                                    </div>
                                                    <div className={cartStyles.description}>
                                                        {item.title}
                                                    </div>
                                                    <div className={cartStyles.price}>
                                                        {item.price}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={cartStyles.col_right}>
                                                <div className={cartStyles.quantity}>
                                                    
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
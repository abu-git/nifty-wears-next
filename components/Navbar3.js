import { IconButton, Badge, withStyles, makeStyles, Box, Container } from "@material-ui/core"
import { scroller } from 'react-scroll'
import Link from 'next/link'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import LoginSignUp from "./LoginSignUpNav"

const styles = theme => ({
    customBadge: {
        backgroundColor: "#ffca68",
        color: "black",
        '&:hover': {
        backgroundColor: "black",
        color: "#ffca68"
        }
    },
})


const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        color: "white",
        backgroundColor: "black",
        height: "45px"
    },
    navbutton: {
        padding: "10px",
        textAlign: "center",
        fontSize: "1em",
        cursor: "pointer",
        '&:hover': {
            backgroundColor: "#ffca68",
            color: "black"
        },
    },
    cartbutton: {
        marginLeft: "auto",
        padding: "10px",
        textAlign: "center",
        fontSize: "1em",
        cursor: "pointer",
        '&:hover': {
            backgroundColor: "#ffca68",
            color: "black"
        },
    },
    headerContainer: {
        display: "flex",
        justifyContent: "center",
        //borderBottom: "1px solid white"
    },
    header: {
        padding: "0",
        margin: "0",
    },
    h3effects: {
        color: "white"
    },
    
}))

function SimpleBadge(props) {
    const { classes } = props
    const { quantity } = useContext(CartContext)
    return(
        <Badge classes={{ badge: classes.customBadge }} badgeContent={quantity} overlap="rectangle">
            <ShoppingCartIcon />
        </Badge>
    )
}

const StyledBadge = withStyles(styles)(SimpleBadge)

export default function Navbar3(){
    const classes = useStyles()

    const scrollFunc = () => {
        var scroll = scroller
        scroll.scrollTo("shop", {
            smooth: true
        })
    }

    return(
        <Container maxWidth="xl">
            <div className={classes.headerContainer}>
                <IconButton className={classes.header}>
                    <Image width="30px" height="30px" alt="Nifty Wears logo" src="/assets/favicon_io/favicon-32x32.png" />
                    <h3 className={classes.h3effects}>Nifty Wears</h3>
                </IconButton>
            </div>
            {/* Login and SignUp is imported */}
            <LoginSignUp />
            <div className={classes.container}>
                <Link href="/about" passHref><div className={classes.navbutton}>About</div></Link>
                <div className={classes.navbutton} onClick={() => scrollFunc()}>Shop</div>
                <Link href="/contact" passHref><div className={classes.navbutton}>Contact</div></Link>
                <Link href="/cart" passHref><div className={classes.cartbutton}>Cart{" "}<StyledBadge /></div></Link>
            </div>
        </Container>
    )
}

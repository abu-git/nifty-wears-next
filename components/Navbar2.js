import Link from 'next/link'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { Link as Scroll, animateScroll, scroller } from 'react-scroll'
import { makeStyles, withStyles, Badge, Container } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'

const styles = theme => ({
    customBadge: {
      backgroundColor: "#ffca68",
      color: "black",
    },
})

const useStyles = makeStyles((theme) => ({
    topnav: {
        overflow: "hidden",
        backgroundColor: "#000000",
        '& #icon': {
            display: "none"
        },
        '& a': {
            float: "left",
            display: "block",
            color: "#f2f2f2",
            textAlign: "center",
            padding: "14px 16px",
            textDecoration: "none",
            fontSize: "17px",
            fontWeight: "bold",
            //border: "1px solid red",
            '&:hover': {
                backgroundColor: "#ffca68",
                color: "black"
            },
            [theme.breakpoints.down('xs')]: {
                ':not(:first-child)': {
                    display: "none"
                },
                '& #icon': {
                    float: "right",
                    display: "block"
                }
            }
        }
    },
    shopa: {
        float: "left",
        display: "block",
        color: "#f2f2f2",
        textAlign: "center",
        padding: "14px 16px",
        textDecoration: "none",
        fontSize: "17px",
        fontWeight: "bold",
        border: "1px solid red",
        '&:hover': {
            backgroundColor: "#ffca68",
            color: "black"
        },
    },
    topnavicon: {
        display: "none",
        [theme.breakpoints.down('xs')]: {
            float: "right",
            display: "block"
        }
    },
    topnavresponsive: {
        [theme.breakpoints.down('xs')]: {
            position: "relative",
            '& a': {
                float: "none",
                display: "block",
                textAlign: "left"
            },
            '& #icon':{
                position:"absolute",
                right: 0,
                top: 0
            }
        }
    },
    rightlink: {
        float: "right"
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


export default function Navbar2(){
    const classes = useStyles()

    const scrollFunc = () => {
        var scroll = scroller
        scroll.scrollTo("shop", {
            smooth: true
        })
    }

    const onClickFunc = e => {
        var x = document.getElementById("myTopnav")
        if(x.className === "topnav"){
            x.className += "responsive"
        }else{
            x.className = "topnav"
        }
        console.log(x)
    }
    return(
        <Container maxWidth="xl">
            <div className={classes.topnav} id="myTopnav">
                <Link href="/about"><a>About</a></Link>
                <a onClick={() => scrollFunc()}>
                    Shop   
                </a>
                <a>Contact</a>
                <div className={classes.rightlink}>
                    <Link href="/cart"><a>Cart{" "}<StyledBadge /></a></Link>
                </div>
                <a id="icon" onClick={() => onClickFunc()}><MenuIcon /></a>
            </div>
        </Container>
    )
}

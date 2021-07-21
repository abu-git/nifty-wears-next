import Link from 'next/link'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { Link as Scroll } from 'react-scroll'
import { makeStyles } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'

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
            '&:hover': {
                backgroundColor: "#ff5959",
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
    topnava: {
        float: "left",
        display: "block",
        color: "#f2f2f2",
        textAlign: "center",
        padding: "14px 16px",
        textDecoration: "none",
        fontSize: "17px",
        fontWeight: "bold",
        '&:hover': {
            backgroundColor: "#ff5959",
            color: "black"
        },
        [theme.breakpoints.down('xs')]: {
            ':not(:first-child)': {
                display: "none"
            }
        }
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
    }
}))

export default function Navbar2(){
    const classes = useStyles()

    const onClickFunc = e => {
        var x = document.getElementById("myTopnav")
        if(x.className === "topnav"){
            x.className += "responsive"
        }else{
            x.className = "topnav"
        }
    }
    return(
        <div className={classes.topnav} id="myTopnav">
            <a>Home</a>
            <a>About</a>
            <a>Shop</a>
            <a>Contact</a>
            <div className={classes.rightlink}>
                <a>Cart{" "}<ShoppingCartIcon /></a>
            </div>
            <a id="icon" onClick={() => onClickFunc()}><MenuIcon /></a>
        </div>
    )
}

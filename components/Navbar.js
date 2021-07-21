import Link from 'next/link'
import headerStyles from '../styles/Navbar.module.css'
import { IconButton, Badge, withStyles, makeStyles, Box } from "@material-ui/core"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Image from 'next/image'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const styles = theme => ({
    customBadge: {
      backgroundColor: "#ffca68",
      color: "black",
    },
    
})

const useStyles = makeStyles((theme) => ({
    cart: {

    },
    badgeMobile: {
        [theme.breakpoints.down('xl')]:{
            //margin:"48px 3px",
            display: "none !important"
        },
        [theme.breakpoints.down('lg')]:{
            //margin:"48px 3px",
            display: "none !important"
        },
        [theme.breakpoints.down('md')]:{
            display: "block !important"
        },
        [theme.breakpoints.down('sm')]:{
            display: "block"
        },
        [theme.breakpoints.down('xs')]:{
            display: "block"
        }
    },
    styledbadgeDesktop: {
        //border: "1px solid white",
        marginTop: "0",
        [theme.breakpoints.down('xl')]:{
            display: "block"
        },
        [theme.breakpoints.down('lg')]:{
            display: "block"
        },
        [theme.breakpoints.down('md')]:{
            display: "none !important"
        },
        [theme.breakpoints.down('sm')]:{
            display: "none !important"
        },
        [theme.breakpoints.down('xs')]:{
            display: "none !important"
        }
    }
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

export default function Navbar(props) {
    const classes = useStyles()

    return(
        <>
        <header className={headerStyles.header}>
            <IconButton className={headerStyles.logo}>
                <Image width="30px" height="30px" alt="Nifty Wears logo"  src="/assets/favicon_io/favicon-32x32.png" />
                <h3 className={headerStyles.logotitle}>Nifty Wears</h3>
            </IconButton>
            
            <input type="checkbox" id="nav-toggle" className={headerStyles.navtoggle}/>
            <nav className={headerStyles.nav}>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="#"><a>Shop</a></Link></li>
                    <li><Link href="#"><a>Contact</a></Link></li>
                    <li>
                        <Link href="/cart"><a>Cart{" "}<StyledBadge /></a></Link>
                    </li>
                </ul>
            </nav>
            <label htmlFor="nav-toggle" className={headerStyles.navtogglelabel}>
                <span></span>
            </label>
        </header>
        </>
    )
}
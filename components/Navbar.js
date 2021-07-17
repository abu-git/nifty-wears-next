import headerStyles from '../styles/Navbar.module.css'
import { IconButton, Badge, withStyles } from "@material-ui/core"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Image from 'next/image'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const styles = theme => ({
    customBadge: {
      backgroundColor: "#ffca68",
      color: "black"
    }
})


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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Contact</a></li>
                    <li>
                        {/*<a href="#">*/}
                            Cart{" "}<StyledBadge />
                        {/*</a>*/}
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
import headerStyles from '../styles/Navbar.module.css'
import { IconButton, Badge, makeStyles   } from "@material-ui/core"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Image from 'next/image'

const useStyles =  makeStyles((theme) => ({
    cart: {
        color: "white"
    },
    cartcounter : {
        color: "red"
    }
}))

export default function Navbar() {
    const classes = useStyles()

    return(
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
                        {/*<IconButton>*/}
                            Cart
                            <Badge badgeContent={2} className={classes.cartcounter}>
                                <ShoppingCartIcon className={classes.cart} width="30px" height="30px" />
                            </Badge>
                        {/*</IconButton>*/}
                    </li>
                </ul>
            </nav>
            <label htmlFor="nav-toggle" className={headerStyles.navtogglelabel}>
                <span></span>
            </label>
        </header>
    )
}
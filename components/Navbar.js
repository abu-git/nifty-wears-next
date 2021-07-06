import headerStyles from '../styles/Navbar.module.css'
import { makeStyles, IconButton } from "@material-ui/core"
import Image from 'next/image'
import { MicNone } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    logoimage: {
        width: "0.5rem",
        height: "1rem",
        display: "flex",
        justifyContent: "center"
    },
    
}))

export default function Navbar() {
    const classes = useStyles()
    return(
        <header className={headerStyles.header}>
            {/*<div className={headerStyles.logo}>
                <IconButton>
                    <Image width="30px" height="30px" alt="Nifty Wears logo"  src="/assets/favicon_io/favicon-32x32.png" />
                </IconButton>
                <h3>Nifty Wears</h3>    
            </div>*/}
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
                </ul>
            </nav>
            <label htmlFor="nav-toggle" className={headerStyles.navtogglelabel}>
                <span></span>
            </label>
        </header>
    )
}
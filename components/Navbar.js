import headerStyles from '../styles/Navbar.module.css'
import { makeStyles, IconButton } from "@material-ui/core"
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
    logoimage: {
        width: "1.5rem",
        height: "1.5rem"
    }
}))

export default function Navbar() {
    const classes = useStyles()
    return(
        <header className={headerStyles.header}>
            <IconButton className={classes.logoimage}>
                <Image alt="Nifty Wears logo" layout="fill" src="/assets/favicon_io/favicon-32x32.png" />
            </IconButton>
            {/*<Image alt="Nifty Wears logo" className={classes.logoimage} layout="fill" src="/assets/favicon_io/favicon-32x32.png" />*/}
            <h3 className={headerStyles.logo}>Nifty Wears</h3>
            <input type="checkbox" id="nav-toggle" className={headerStyles.navtoggle}/>
            <nav className={headerStyles.nav}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <label htmlFor="nav-toggle" className={headerStyles.navtogglelabel}>
                <span></span>
            </label>
        </header>
    )
}
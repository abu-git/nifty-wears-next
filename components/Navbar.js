import headerStyles from '../styles/Navbar.module.css'

export default function Navbar() {
    return(
        <header className={headerStyles.header}>
            <h1 className={headerStyles.logo}>Logo</h1>
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
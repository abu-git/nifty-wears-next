import { CssBaseline } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

import Meta from "./Meta"
import LogoPlacement from "./LogoPlacement"
import AfterNav from "./AfterNav"
import Footer from "./Footer"
import Navbar from "./Navbar"

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        backgroundColor: "hsl(0, 100%, 0%)",
        color: "white"
    }
}))

export default function HomePage() {
    const classes = useStyles()

    return(
        <div className={classes.root}>
            <Meta />
            {/*<LogoPlacement />*/}
            <Navbar />
            <AfterNav />
            <Footer />
            {/*<CssBaseline />*/}
        </div>
    )
        
}
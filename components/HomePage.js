import { CssBaseline } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

import Meta from "./Meta"

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
        <>
            <Meta />
            <div className={classes.root}>
                <CssBaseline />
            </div>
        </>
    )
        
}
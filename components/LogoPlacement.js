import { makeStyles } from "@material-ui/core"
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center"
    },
    appbar: {
        background: "none"
    }
}))

export default function LogoPlacement () {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <h1>Nifty Wears</h1>
                </Toolbar>
            </AppBar>
        </div>
    )

}
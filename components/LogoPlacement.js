import { makeStyles } from "@material-ui/core"
import { AppBar, Button, Collapse, IconButton, Toolbar, Typography } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    appbar: {
        background: "none",
        /*backgroundColor: 'grey',*/
        height: '100px'
    },
    appbarWrapper: {
        width: "80%",
        margin: "0 auto"
    },
    flexGroww: {
        flexGrow: 1
    },
    logoTitle: {
        fontStyle: "italic"
    }
}))

export default function LogoPlacement () {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <IconButton>
                        <img src="assets/favicon_io/favicon-32x32.png" />
                    </IconButton>
                    <Typography className={classes.flexGroww}><h1 className={classes.logoTitle}>Nifty Wears</h1></Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Shop</Button>               
                </Toolbar>
            </AppBar>
        </div>
    )

}
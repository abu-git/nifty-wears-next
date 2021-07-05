import { makeStyles } from "@material-ui/core"
import { AppBar, Button, Collapse, IconButton, Toolbar, Typography } from '@material-ui/core'
import Image from 'next/image'


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    appbar: {
        background: "none",
        backgroundColor: "hsl(0, 0%, 3.5%)",
        /*height: '100px'*/
    },
    appbarWrapper: {
        width: "90%",
        margin: "0 auto"
    },
    flexGroww: {
        flexGrow: 1,
    },
    logoTitle: {
        fontSize: "1.5em",
        color: "white"
    },
    buttonFx: {
        margin: "0 10px",
        backgroundColor: "hsl(0, 0%, 6%)",
        /*border: "1px white solid",*/
        '&:hover': {
            backgroundColor: "hsl(0,0%,8.7%)",
            transform: "scale(1.1)"
        }
    }
}))

export default function LogoPlacement () {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <IconButton>
                        <Image alt="Nifty Wears logo" layout="fill" src="/assets/favicon_io/favicon-32x32.png" />
                    </IconButton>
                    <Typography className={classes.flexGroww}><h1 className={classes.logoTitle}>Nifty Wears</h1></Typography>
                    <Button className={classes.buttonFx} color="inherit">Home</Button>
                    <Button className={classes.buttonFx} color="inherit">About</Button>
                    <Button className={classes.buttonFx} color="inherit">Shop</Button>
                    <Button className={classes.buttonFx} color="inherit">Contact</Button>                
                </Toolbar>
            </AppBar>
        </div>
    )

}
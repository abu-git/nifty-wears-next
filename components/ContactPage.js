import Link from 'next/link'
import  { IconButton, makeStyles, Container, Grid } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import Image from 'next/image'

import Meta from "./Meta"

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "70vh",
        backgroundColor: "hsl(0, 100%, 0%)",
        color: "white",
    },
    headerContainer: {
        display: "flex",
        justifyContent: "center"
    },
    header: {
        padding: "0",
        margin: "0",
    },
    h3effects: {
        color: "white"
    },
    arrowback: {
        color: "white",
        marginRight: "15px",
        "&:hover": {
            cursor: "pointer"
        }
    },
    backtext: {
        color: "white",
        paddingBottom: "3px",
        "&:hover": {
            //color: "#ffca68",
            //textDecoration: "underline",
            cursor: "pointer"
        }
    },
    title: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }
}))

export default function Contact() {
    const contactMeta = "Nifty Wears | Contact"
    const classes = useStyles()
    return(
        <>
            <Meta title={contactMeta} />
            <Container maxWidth="xl">
                <div className={classes.headerContainer}>
                    <IconButton className={classes.header}>
                        <Image width="30px" height="30px" alt="Nifty Wears logo" src="/assets/favicon_io/favicon-32x32.png" />
                        <h3 className={classes.h3effects}>Nifty Wears</h3>
                    </IconButton>
                </div>
                <hr/>
                <Link href="/" passHref>
                    <div className={classes.goback}>
                        <ArrowBack className={classes.arrowback} />
                        <span className={classes.backtext}> Back to home</span>
                    </div>
                </Link>
                <Grid container className={classes.root}>
                    <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className={classes.title}>
                            <h1>Contact</h1>
                        </div>
                    </Grid>
                    
                    <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className={classes.formContainer}>
                            <form>
                                
                            </form>
                        </div>
                    </Grid>
                </Grid>
                
            </Container>
        </>
    )
}
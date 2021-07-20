import Link from 'next/link'
import  { makeStyles, Container, Grid } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "70vh",
        backgroundColor: "hsl(0, 100%, 0%)",
        color: "white",
        display: "grid",
        gridTemplateColumns: "50% 50%",
        gap: "1em",
        [theme.breakpoints.down('md')]: {
            display: "flex",
            flexDirection: "column"
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column"
        },
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            flexDirection: "column"
        },
    },
    p_code: {
        color: "white",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.2em"
        }
    },
    left: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        //border: "1px solid red",
        maxHeight: "90vh",
        [theme.breakpoints.down('md')]: {
            maxHeight: "30vh",
        },
        [theme.breakpoints.down('sm')]: {
            maxHeight: "20vh",
            marginTop: "50px"
            //justifyContent: "center",
            //alignItems: "center"
        },
        [theme.breakpoints.down('xs')]: {
            maxHeight: "20vh",
            marginTop: "50px"
        },
        [theme.breakpoints.down('lg')]: {
            maxHeight: "90vh"
        }
    },
    right: {
        display: "flex",
        textAlign: "center",
        //border: "1px solid red",
        maxHeight: "90vh",
        [theme.breakpoints.down('sm')]:{
            marginTop: "0px"
        },
        [theme.breakpoints.down('xs')]: {
            maxHeight: "20vh",
            marginTop: "30px"
        },
        [theme.breakpoints.down('md')]: {
            //maxHeight: "30vh",
            marginTop: "0px"
        },
        [theme.breakpoints.down('lg')]: {
            maxHeight: "90vh",
            alignItems: "center",
            //border: "1px solid red"
        }
    },
    arrowback: {
        marginTop: "5px",
        color: "white",
        width: "1.5em",
        height: "1.3em",
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
    goback: {
        marginTop: "15px",
        '&:hover': {
            cursor: "pointer"
        }
    }
}))

export default function AboutPage(){
    const classes = useStyles()
    return(
        <>
            <Container maxWidth="xl">
                <Link href="/" passHref>
                    <div className={classes.goback}>
                        <ArrowBack className={classes.arrowback} />
                        <span className={classes.backtext}> Back to home</span>
                    </div>
                </Link>
                <Grid container className={classes.root}>
                    <Grid item className={classes.left}>
                        <h1>About Us</h1>
                    </Grid>
                    <Grid item className={classes.right}>
                        <p className={classes.p_code}>
                            We are a start up attire company with a simple business idea.
                            Our aim is to procure and produce suitable clothing for anyone 
                            willing to see value in our branded products.
                        </p>
                    </Grid>
                </Grid>  
            </Container>
            
        </>
    )
}
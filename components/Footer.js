import { makeStyles, Box, Container, Grid } from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'



const useStyles = makeStyles((theme) => ({
    footerColor: {
        paddingTop: "20px",
        paddingBottom: "40px",
        backgroundColor: "hsl(0, 0%, 3.5%)",
    },
    footerMain: {
        textAlign: "center",
        [theme.breakpoints.down('lg')]: {
            textAlign: "center",
        },
        [theme.breakpoints.down('md')]: {
            textAlign: "center",
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
        }
    },
    facebook: {
        [theme.breakpoints.down('lg')]:{
            color: "hsl(240, 100%, 58%)",
            paddingRight: "5px",
            paddingLeft: "5px",
            fontSize: "3.5rem",
            '&:hover': {
                transform: "scale(1.2)",
            }
        },
        [theme.breakpoints.down('md')]:{
            color: "hsl(240, 100%, 58%)",
            paddingRight: "5px",
            paddingLeft: "5px",
            fontSize: "3.5rem",
            '&:hover': {
                transform: "scale(1.2)",
            }
        },
        [theme.breakpoints.down('sm')]:{
            color: "hsl(240, 100%, 58%)",
            paddingRight: "5px",
            paddingLeft: "5px",
            fontSize: "3.5rem",
            '&:hover': {
                transform: "scale(1.2)",
            }
        },   
        color: "hsl(240, 100%, 58%)",
        paddingRight: "5px",
        paddingLeft: "5px",
        fontSize: "3.5rem",
        '&:hover': {
            transform: "scale(1.2)",
        }
    },
    instagram: {
        [theme.breakpoints.down('lg')]:{
            color: "hsl(43, 100%, 56%)",
            paddingRight: "5px",
            paddingLeft: "5px",
            fontSize: "3.5rem",
            '&:hover': {
                transform: "scale(1.2)",
            }
        },
        [theme.breakpoints.down('md')]:{
            color: "hsl(43, 100%, 56%)",
            paddingRight: "5px",
            paddingLeft: "5px",
            fontSize: "3.5rem",
            '&:hover': {
                transform: "scale(1.2)",
            }
        }, 
        [theme.breakpoints.down('sm')]:{
            color: "hsl(43, 100%, 56%)",
            paddingRight: "5px",
            paddingLeft: "5px",
            fontSize: "3.5rem",
            '&:hover': {
                transform: "scale(1.2)",
            }
        }, 
        color: "hsl(43, 100%, 56%)",
        paddingRight: "5px",
        paddingLeft: "5px",
        fontSize: "3.5rem",
        '&:hover': {
            transform: "scale(1.2)",
        },
    },
    twitter: {
        [theme.breakpoints.down('lg')]:{
            color: "hsl(225, 73%, 56%)",
            paddingRight: "5px",
            paddingLeft: "5px",
            fontSize: "3.5rem",
            '&:hover': {
                transform: "scale(1.2)",
            }
        },
        [theme.breakpoints.down('md')]:{
            color: "hsl(225, 73%, 56%)",
            paddingRight: "5px",
            paddingLeft: "5px",
            fontSize: "3.5rem",
            '&:hover': {
                transform: "scale(1.2)",
            }
        }, 
        [theme.breakpoints.down('sm')]:{
            color: "hsl(225, 73%, 56%)",
            paddingRight: "5px",
            paddingLeft: "5px",
            fontSize: "3.5rem",
            '&:hover': {
                transform: "scale(1.2)",
            }
        }, 
        color: "hsl(225, 73%, 56%)",
        paddingRight: "5px",
        paddingLeft: "5px",
        fontSize: "3.5rem",
        '&:hover': {
            transform: "scale(1.2)",
        },
    }
}))

export default function Footer() {
    const classes = useStyles()
    return(
        <>
            <Container maxWidth="xl" className={classes.footerColor}>
                <Grid container>
                    <Grid item className={classes.footerMain} lg={6} md={6} sm={12} xs={12}>
                        <h3>Nifty Wears &copy; 2021</h3> 
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box className={classes.footerMain}> 
                            <FacebookIcon className={classes.facebook} />
                            <InstagramIcon className={classes.instagram}/>
                            <TwitterIcon className={classes.twitter}/>
                        </Box> 
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
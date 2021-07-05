import { makeStyles, Box } from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'



const useStyles = makeStyles((theme) => ({
    footerColor: {
        paddingTop: "20px",
        paddingBottom: "40px",
        backgroundColor: "hsl(0, 0%, 3.5%)"
    },
    footerMain: {
        textAlign: "center"
    },
    facebook: {
        color: "hsl(240, 100%, 58%)",
        paddingRight: "5px",
        paddingLeft: "5px",
        fontSize: "3.5rem"
    },
    instagram: {
        color: "hsl(67, 73%, 60%)",
        paddingRight: "5px",
        paddingLeft: "5px",
        fontSize: "3.5rem"
    },
    twitter: {
        color: "hsl(225, 73%, 56%)",
        paddingRight: "5px",
        paddingLeft: "5px",
        fontSize: "3.5rem"
    }
}))

export default function Footer() {
    const classes = useStyles()
    return(
        <>
            <Box className={classes.footerColor}>
                <Box className={classes.footerMain} lg={6} md={6} sm={12} xs={12}>
                    <h3>Nifty Wears &copy; 2021</h3>        
                </Box>
                <Box className={classes.footerSocials} lg={6} md={6} sm={12} xs={12}>
                    <Box className={classes.footerMain}> 
                        <FacebookIcon className={classes.facebook} />
                        <InstagramIcon className={classes.instagram}/>
                        <TwitterIcon className={classes.twitter}/>
                    </Box> 
                </Box>
            </Box>
        </>
    )
}
import Image from 'next/image'
import { Grid, makeStyles, Container } from "@material-ui/core"
import { Box } from "@material-ui/core"


const useStyles =  makeStyles((theme) => ({
    showcase: {
        minHeight: "60vh",
        backgroundImage: `url("/nifty-backdrop.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        isolation: "isolate",
        /*alignItems: "center",
        marginTop: "50px",
        /*border: "1px solid red"*/
    },
    showcaseIntro: {
        /*font: `"Yellowtail", cursive`,*/
        width: "50%",
        padding: "2em",
        paddingTop: "min(15vh, 10rem)",
        position: "relative",
        /*textAlign: "center",
        fontSize: "1.8rem",
        fontStyle: "italic"*/

        '&::after' : {
            content: "",
            position: "absolute",
            inset: "0",
            zIndex: -1,
            background: "#355f08",
            opacity: 1,
            /*mixBlendMode: "difference"*/
        }
    },
    
}))

export default function AfterNav() {
    const classes = useStyles()

    return(
        <Container maxWidth="md">
        <Grid container>
            <Grid item lg={12} sm={12} md={12} xs={12}>
                <div className={classes.showcase}>
                    <div className={classes.showcaseIntro}>
                        <p>30% off on your first buy</p><h1>Nifty Wears</h1>
                    </div>
                </div>
                {/*<Box className={classes.showcaseIntro}>30% off on your first buy<h1>Nifty Wears</h1></Box>*/}
            </Grid>            
        </Grid>
        </Container>
        
    )
}
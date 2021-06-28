import Image from 'next/image'
import { Grid, makeStyles, Container } from "@material-ui/core"
import { Box } from "@material-ui/core"


const useStyles =  makeStyles((theme) => ({
    landing: {
        height: '450px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        /*border: "1px solid red"*/
    },
    showcasetext: {
        /*font: `"Yellowtail", cursive`,*/
        textAlign: "center",
        fontSize: "1.8rem",
        fontStyle: "italic"
    }
}))

export default function AfterNav() {
    const classes = useStyles()

    return(
        <Container maxWidth="md">
        <Grid container>
            <Grid item xs={6} className={classes.landing}>
                <Box className={classes.showcasetext}>30% off on your first buy<h1>Nifty Wears</h1></Box>
                {/*<Box><p>shop with us</p></Box>*/}
            </Grid>
            <Grid item xs={6}>
            <Box className={classes.landing} paddingTop="40px">
                <Image 
                    src="/model.jpg"
                    alt="Nifty Wears Shop Promo"
                    width={360}
                    height={360}
                />
            </Box>
            </Grid>
            
        </Grid>
        </Container>
        
    )
}
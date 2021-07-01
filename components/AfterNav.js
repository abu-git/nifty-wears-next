import Image from 'next/image'
import { Grid, Button, makeStyles, Container, Paper, Card, CardActionArea, CardActions, CardContent, CardMedia } from "@material-ui/core"
import { Box } from "@material-ui/core"


const useStyles =  makeStyles((theme) => ({
    code: {
        display: "block",
        width: "max-content",
        background: "white",
        fontSize: "2em",
        color: "black",
        padding: "0.25em 0.5em",
        borderRadius: "0.125em",
        marginBottom: "0.05em"
    },
    showcase: {
        minHeight: "40vh",
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
            /*opacity: 1,*/
            mixBlendMode: "multiply"
        }
    },
    containerMarginTop: {
        marginTop: "80px"
    },
    paper: {
        padding: "4px 4px",
        textAlign: "center",
        backgroundColor: "hsl(0, 0%, 6%)"
    },
    cardroot: {
        maxWidth: 345,
        textAlign: "center",
        padding: 0
    },
    cardmedia: {
        height: 300
    },
    cardaction: {
        backgroundColor: "hsl(0, 0%, 6%)",
        color: "white"
    }
}))

export default function AfterNav() {
    const classes = useStyles()

    return(
        <Container maxWidth="lg" className={classes.containerMarginTop}>
        <Grid container>
            <Grid item lg={12} sm={12} md={6} xs={12}>
                <div className={classes.showcase}>
                    <div className={classes.showcaseIntro}>
                        <h2 className={classes.code}>20% off first buy {/*Shop with*/}</h2>
                        <h1>Nifty Wears</h1>
                        <p>Your one stop shop for specially crafted clothing.</p>
                    </div>
                </div>
                {/*<Box className={classes.showcaseIntro}>30% off on your first buy<h1>Nifty Wears</h1></Box>*/}
            </Grid>
            
            <Grid item lg={4} md={6} sm={12} xs={12} className={classes.containerMarginTop}>
                {/*<Paper className={classes.paper}>*/}
                    <Card className={classes.cardroot}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.cardmedia}
                                image="/man1.jpg"
                                title="Nifty Wears Model"
                            />
                            <CardContent className={classes.cardaction}>
                                <h3>Brown Coat</h3>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardaction}>
                            <Button>Add to Cart</Button>
                            <Button>Share</Button>
                        </CardActions>
                    </Card>
                {/*</Paper>*/}
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} className={classes.containerMarginTop}>
                {/*<Paper className={classes.paper}>*/}
                    <Card className={classes.cardroot}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.cardmedia}
                                image="/man2.jpg"
                                title="Nifty Wears Model"
                            />
                            <CardContent className={classes.cardaction}>
                                <h3>Red Coat</h3>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button>Add to Cart</Button>
                            <Button>Share</Button>
                        </CardActions>
                    </Card>
                {/*</Paper>*/}
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} className={classes.containerMarginTop}>
                {/*<Paper className={classes.paper}>*/}
                    <Card className={classes.cardroot}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.cardmedia}
                                image="/man3.jpg"
                                title="Nifty Wears Model"
                            />
                            <CardContent className={classes.cardaction}>
                                <h3>White Shirt</h3>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button>Add to Cart</Button>
                            <Button>Share</Button>
                        </CardActions>
                    </Card>
                {/*</Paper>*/}
            </Grid>            
        </Grid>
        </Container>
        
    )
}
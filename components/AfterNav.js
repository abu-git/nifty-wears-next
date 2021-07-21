import Image from 'next/image'
import { Grid, Button, makeStyles, Container, Paper, Card, CardActionArea, CardActions, CardContent, CardMedia } from "@material-ui/core"
import { Box } from "@material-ui/core"
import { useContext } from 'react'

import { CartContext } from '../context/CartContext'


import MenuItem from './MenuItem'


const useStyles =  makeStyles((theme) => ({
    code: {
        display: "block",
        width: "max-content",
        background: "white",
        fontSize: "2em",
        color: "black",
        padding: "0.25em 0.5em",
        borderRadius: "0.125em",
        marginBottom: "0.5em",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.3em"
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "1.3em"
        }
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
        [theme.breakpoints.down('sm')]: {
            minheight: "30vh"
        }
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
        },
        [theme.breakpoints.down('sm')]: {
            paddingTop: "min(19vh, 12rem)",
            width: "100%"
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: "min(19vh, 12rem)",
            width: "90%"
        }
    },
    showcaseMarginTop: {
        marginTop: "80px",
        [theme.breakpoints.down('sm')]: {
            marginTop: "2px"
        },
        [theme.breakpoints.down('md')]: {
            marginTop: "10px"
        }
    },
    paper: {
        padding: "4px 4px",
        textAlign: "center",
        backgroundColor: "hsl(0, 0%, 6%)"
    },
    cardroot: {
        maxWidth: 305,
        textAlign: "center",
        padding: 0,
        [theme.breakpoints.down('sm')]: {
            width: 400
        }
    },
    griditem: {
        margin: "0 auto",
        padding: "2rem 4rem",
        [theme.breakpoints.down('sm')]: {
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "center"
        },
        [theme.breakpoints.down('xs')]: {
            padding: "1rem 2rem"
        }
    },
    showcase_p: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.5em"
        }
    },
    shoptitle: {
        textAlign: "center",
        margin: "43px 0"
    }
}))

const AfterNav = (props) => {
    const classes = useStyles()
    const { products } = useContext(CartContext)

    return(
        <>
        <Container maxWidth="xl" className={classes.showcaseMarginTop}>
            <Grid container>
                <Grid item lg={12} sm={12} md={12} xs={12}>
                    <div className={classes.showcase}>
                        <div className={classes.showcaseIntro}>
                            <h2 className={classes.code}>20% off first buy {/*Shop with*/}</h2>
                            <h1>Nifty Wears</h1>
                            <p className={classes.showcase_p}>Your one stop shop for specially crafted clothing.</p>
                        </div>
                    </div>
                    {/*<Box className={classes.showcaseIntro}>30% off on your first buy<h1>Nifty Wears</h1></Box>*/}
                </Grid>
            </Grid>
        </Container>

        <Container maxWidth="xl" id="shop">
            
            <Grid container className={classes.griditem}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.shoptitle}>
                    <h2>Check our stock!</h2>
                </Grid>
                <MenuItem product={products[0]} key={products[0].id} />
                <MenuItem product={products[1]} key={products[1].id} />
                <MenuItem product={products[2]} key={products[2].id} />
            </Grid> 
        </Container>
        </>
    )
}

export default AfterNav
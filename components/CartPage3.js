import { Breadcrumbs,Container, Grid, makeStyles, Typography } from "@material-ui/core"
import Link from '@material-ui/core/Link'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Meta from "./Meta"

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "70vh",
    },
    breadFont: {
        color: "white"
    },
    cartTitle: {
        color: "white"
    }
}))

export default function CartPage3() {
    const classes = useStyles()
    const cartMeta = "Nifty Wears | Cart"

    return(
        <>
            <Meta title={cartMeta} />
            <Container maxWidth="xl">
                <Grid container>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize='small'/>} className={classes.breadFont}>
                        <Link href="/">
                            Home
                        </Link>
                        <Typography fontFamily="Special Elite">Shopping Cart</Typography>
                    </Breadcrumbs>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.cartTitle}>
                        <h2>Shopping Cart</h2>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
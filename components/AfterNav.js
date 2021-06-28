import Image from 'next/image'
import { makeStyles } from "@material-ui/core"
import { Box } from "@material-ui/core"
import imageChoice from "../data/nw-pic.png"


const useStyles =  makeStyles((theme) => ({
    landingImg :  {
        /*backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5), url("assets/favicon_io/nw-pic.png"))`,
        /*backgroundImage: `url(${imageChoice})`,*/
        height: '450px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px"
    }
}))

export default function AfterNav() {
    const classes = useStyles()

    return(
        <Box className={classes.landingImg}>
            <Image 
                src="/nw-pic.png"
                alt="Nifty Wears Shop Promo"
                width={1010}
                height={450}
            />
        </Box>
    )
}
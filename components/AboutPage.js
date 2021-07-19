import  { makeStyles, Container } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        backgroundColor: "hsl(0, 100%, 0%)",
        color: "white",
        display: "grid",
        gridTemplateColumns: "50% 50%",
        gap: "1em"
    },
    p_code: {
        color: "white"
    },
    left: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //border: "1px solid red",
        maxHeight: "90vh"
    },
    right: {
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        //border: "1px solid red",
        maxHeight: "90vh"
    }
}))

export default function AboutPage(){
    const classes = useStyles()
    return(
        <>
            <Container maxWidth="xl">
                <div className={classes.root}>
                    <div className={classes.left}>
                        <h1>About Us</h1>
                    </div>
                    <div className={classes.right}>
                        <p className={classes.p_code}>
                            We are a start up attire company with a simple business idea.
                            Our aim is to procure and produce suitable clothing for anyone 
                            willing to see value in our branded products.
                        </p>
                    </div>
                </div>  
            </Container>
            
        </>
    )
}
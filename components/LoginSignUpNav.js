import { makeStyles } from "@material-ui/core"
import { Button, TextField, Dialog, DialogActions } from "@material-ui/core"
import { DialogContent, DialogContentText, DialogTitle } from "@material-ui/core"
import { useState } from "react"


const useStyles = makeStyles((theme) => ({
    loginSignup: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0",
        margin: "0",
        height: "50px",
        backgroundColor: "#0a0a0a"
    },
    login: {
        fontSize: "0.85em",
        marginRight: "0.8em",
        '&:hover': {
            color: "#ffca68",
            cursor: "pointer"
        }
    },
    divider: {
        marginRight: "0.8em"
    },
    signup: {
        fontSize: "0.85em",
        marginRight: "0.5em",
        '&:hover': {
            color: "#ffca68",
            cursor: "pointer"
        }
    },
    pFont: {
        fontSize: "1em"
    },
    dialogTitle: {
        border: "1px solid red",
    }
}))

export default function LoginSignUpNav() {
    const classes = useStyles()

    //Dialog Config starts here...
    const [openSignUp, setOpenSignUp] = useState(false)

    const handleSignUpOpen = () => {
        setOpenSignUp(true)
    }

    const handleSignUpClose = () => {
        setOpenSignUp(false)
    }

    return(
        <>
            <div className={classes.loginSignup}>
                <h5 className={classes.login}>Login</h5><h5 className={classes.divider}>|</h5><h5 onClick={handleSignUpOpen} className={classes.signup}>Sign Up</h5>
            </div>
            <Dialog open={openSignUp} onClose={handleSignUpClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" className={classes.dialogTitle}><h3>Sign Up</h3></DialogTitle>
                <DialogContent>
                    <DialogContentText fontFamily="inherit">
                        <p className={classes.pFont}>Sign Up and have your delivery information safely stored with us.</p>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}
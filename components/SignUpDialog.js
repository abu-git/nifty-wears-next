import { Button, TextField, Dialog, DialogActions } from "@material-ui/core"
import { DialogContent, DialogContentText, DialogTitle } from "@material-ui/core"
import { useState } from "react"

export default function SignUpDialog() {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return(
        <>
            <div>
                
            </div>
        </>
    )
}
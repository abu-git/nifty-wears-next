import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { makeStyles, withStyles } from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
    tabletd: {
        padding: "0.625em",
        textAlign: "center",
        [theme.breakpoints.down('xs')]: {
            borderBottom: "1px solid #ddd",
            display: "block",
            fontSize: "0.8em",
            textAlign: "right",
            /*'&:last-child': {
                borderBottom: 0
            },*/
            '&::before': {
                content: "attr(data-label)",
                float: "left",
                fontWeight: "bold",
                textTransform: "uppercase"
            }
        },
    },
}))

export default function CartItem2({ item }) {
    const { removeCart } = useContext(CartContext)
    const classes = useStyles()
    return (
        <>
            <tr>
                <td className={classes.tabletd} data-label="Item">
                    <Image src={item.photo} width="25px" height="25px" alt="cart item" />
                </td>
                <td className={classes.tabletd} data-label="Title">{item.title}</td>
                <td className={classes.tabletd} data-label="Quantity">{item.quantity}</td>
                <td className={classes.tabletd} data-label="Price">${item.price}</td>
                <td className={classes.tabletd} data-label="Remove Item" onClick={() => removeCart(item.id)}><DeleteIcon /></td>
            </tr>
        </>
    )
}
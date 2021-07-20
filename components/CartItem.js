import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { withStyles } from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete'
import Image from 'next/image'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'


const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
}))(TableRow)

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);

const CartItem = ({item}) => {
    const { removeCart } = useContext(CartContext)
    return(
        <StyledTableRow key={item.id}>
            <StyledTableCell component="th" scope="row">
                <Image src={item.photo} width="25px" height="25px" alt="cart item" />
            </StyledTableCell>
            <StyledTableCell align="right">{item.title}</StyledTableCell>
            <StyledTableCell align="right">x{item.quantity}</StyledTableCell>
            <StyledTableCell align="right">${item.price}</StyledTableCell>
            <StyledTableCell align="right" onClick={() => removeCart(item.id)}>
                <DeleteIcon />
            </StyledTableCell>
        </StyledTableRow>
    )
}

export default CartItem
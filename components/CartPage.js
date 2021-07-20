import { Container, Grid, makeStyles, withStyles } from "@material-ui/core"
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import CartItem from "./CartItem"
import { CartContext } from "../context/CartContext"
import { useContext, useEffect } from "react"

const useStyles = makeStyles((theme) =>  ({
    root: {
        minHeight: "70vh",
        backgroundColor: "hsl(0, 100%, 0%)",
        color: "white",
    },
    table: {
        minWidth: 700,
        
    }
}))

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
  }))(TableCell)


export default function CartPage(){
    const classes = useStyles()
    const { cart, total, getTotal }  = useContext(CartContext)
    console.log(cart)

    useEffect(() =>{
		getTotal();
	})


    return(
        <>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <h1>Cart</h1>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table}>
                                <TableBody>
                                    { cart.map(item => {
                                        return(<CartItem item={item} key={item.id} />)
                                    })}
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">
                                            Total:
                                        </StyledTableCell>
                                        <StyledTableCell align="right"></StyledTableCell>
                                        <StyledTableCell align="right">${total}</StyledTableCell>
                                        <StyledTableCell align="right"></StyledTableCell>
                                        <StyledTableCell align="right"></StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
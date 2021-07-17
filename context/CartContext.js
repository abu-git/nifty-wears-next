import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = (props) => {
    const [products] = useState([])

    //cart state
    const [cart, setCart] = useState([], ()=>{
        const localData = sessionStorage.getItem('cartData')
        return localData ? JSON.parse(localData) : []
    })


    //total state
    const [total, setTotal] = useState(0, ()=>{
		const totalData = sessionStorage.getItem('total');
		return totalData ? JSON.parse(totalData) : 0;
	})

    //quantity state
	const [quantity, setQuantity] = useState(0)

    const getQuantity = () => {
		let result = cart.reduce((previous, item) => {
			return previous + item.quantity
		},0)
		setQuantity(result)
	}

    const addCart = (id) => {
		console.log("item to be added " + products[id - 1].title)
		let check = false
		cart.forEach(cartItem => {
			if(cartItem.id === id){
				check = true
			}
		})
		if(!check){
			setCart([...cart, products[id - 1] ])
		}
		else{
			cart.forEach(item =>{
				if(item.id === id){
					item.quantity++
					return
				}
			})
			getQuantity()
			getTotal()
		}
	}


    const removeCart = (id) => {
		console.log('item to be removed ' + products[id - 1].title)
		let check = false
		cart.forEach(cartItem => {
			if(cartItem.id === id){
				check = true
			}
		})
		if(check){
			cart.forEach((cartItem, index) => {
				if(cartItem.id === id){
					if(cartItem.quantity > 1){
						cartItem.quantity--
					}
					else{
						cart.splice(index, 1)
					}
				}
			})
			getQuantity()
			getTotal()
		}
	}

    const getTotal = () => {
		let result = cart.reduce((previous, item) => {
			return previous + (item.price * item.quantity)
		},0)
		setTotal(result)
		sessionStorage.setItem('total', JSON.stringify(result))
	}

    useEffect(() => {
		getQuantity()
		getTotal()
	})

	useEffect(() => {
		sessionStorage.setItem('total', JSON.stringify(total))
	})

	useEffect(() =>{
		sessionStorage.setItem('cartData', JSON.stringify(cart))
	}, [cart])

    return(
		<CartContext.Provider value={{ cart, products, addCart, total, getTotal, quantity, getQuantity, removeCart }} >
			{props.children}
		</CartContext.Provider>
	)
}

export default CartContextProvider
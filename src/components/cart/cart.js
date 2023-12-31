import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";    

const Cart = () => {
    const { cart, clearCart, totalQuantity} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay Cursos en el carrito</h1>
                <Link to='/' className="Option">Cursos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...P}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar Carrito</button>
            <Link to='/checkout' className="Option">checkout</Link>
        </div>
    )
}

export default Cart;
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

const ItemDetail = ({id, name, image, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        
        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }
 
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader"> {name}</h2>
            </header>
            <picture> <img src={image} alt={name} className="ItemImg"/> </picture>
            <section>
                <p className="Info"> Categoria: {category}</p>
                <p className="Info"> Descricion: {description}</p>
                <p className="Info"> Precio: ${price}</p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={ (quantity)=>{console.log("Cantidad agregada de items ", quantity)} }/>
            </footer>
        </article>

    )

}

export default ItemDetail;
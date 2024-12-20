import React, { useState } from "react";
import ItemList from "../itemlist/ItemList";
import { produce, pantryItems } from "../storeitems/storeItems";
import '../../App.css';


export default function GroceryCart() {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart((prev) => {
            return [item, ...prev];
        });
    };

    const removeItem = (targetIndex) => {
        setCart((prev) => {
            return prev.filter((item, index) => index !== targetIndex);
        });
    };

    return (
        <div>
            <h1>Grocery Cart</h1>
            <ul>
                {cart.map((item, index) => (
                    <li onClick={() => removeItem(index)} key={index}>
                        {item}
                    </li>
                ))}
            </ul>
            <h2> pantry items</h2>
            <ItemList items={produce} onItemClick={addItem} />

            <ItemList items={pantryItems} onItemClick={addItem} />
        </div>
    );
}

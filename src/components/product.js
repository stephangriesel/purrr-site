import React, { useState } from "react";
import '../css/product.css';

const Product = ({ skus, product, image }) => {
    const stripe = window.Stripe(`${process.env.STRIPE_PK}`) // always use public key here
    // debugger

    const [sku, setSku] = useState(skus[0].node.id);

    const placeOrder = () => {
        stripe.redirectToCheckout({
            items: [
                {
                    sku: sku,
                    quantity: 1
                }
            ],
            successUrl: "http://localhost:8000/success",
            cancelUrl: "http://localhost:8000/cancel"
        })
    }
    return (
        <article>
            <img src={image} alt="Shirt" />
            <h3>{product.name}</h3>

            {/* Add variants, disabled for now:
            <select value={sku} onChange={(e) => setSku(e.target.value)}>
                {skus.map(edge =>
                    <option
                        key={edge.node.id} value={edge.node.id}>{edge.node.attributes.name}
                    </option>
                )}

            </select> */}
            <button onClick={placeOrder}>Buy</button>
        </article>
    )
}

export default Product

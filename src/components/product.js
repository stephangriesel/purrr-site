import React, { useState } from "react"

const Product = ({ skus, product }) => {
    const stripe = window.Stripe("pk_test_uxVeps2FOxzKRvcPqBMCOftw00gMGfkch3")

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
            <img src="https://picsum.photos/200/300" alt="Shirt" />
            <h3>{product.name}</h3>
            <select value={sku} onChange={(e) => setSku(e.target.value)}>
                {skus.map(edge => <option key={edge.node.id} value={edge.node.id}>{edge.node.attributes.name}</option>)}

            </select>
            <button onClick={placeOrder}>Buy</button>
        </article>
    )
}

export default Product

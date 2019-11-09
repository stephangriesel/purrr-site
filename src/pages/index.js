import React from "react"
import Layout from "../components/layout"
import Products from "../components/products"

const IndexPage = () => {
  return (
    <Layout>
      <div className="product-display">
        <Products />
      </div>
    </Layout>
  )
}

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SuccessPage = () => (
    <Layout>
        <div className="success-page">
            <h1>Success!!</h1>
            <p>Your order has been placed successfully</p>
            <Link to="/">Go back to the homepage</Link>
        </div>
    </Layout>
)

export default SuccessPage

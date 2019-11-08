import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SuccessPage = () => (
    <Layout>
        <h1>Success!!</h1>
        <p>Your order has been placed successfully</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default SuccessPage

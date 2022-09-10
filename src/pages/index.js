import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
  <Layout pageTitle="Home Page">
    <p>I'm making this by following the Gatsby Tutorial.</p>
    <StaticImage
        alt="The only secret you'll need"
        src="../images/dog.jpg"
    />
  </Layout>
    )
}

export const Head = () => <title>Home Page</title>

export default IndexPage

import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        Tel: 123455678. You can search from me on{" "}
        <a href="https://www.wikipedia.org" target="_blank">
          Wiki
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage

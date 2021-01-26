import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        I am Glen. I am 32 years old. I am a web developer and I enjoy coding
      </p>
      <p>
        You can contact me <Link to="/contact">here</Link>
      </p>
    </Layout>
  )
}

export default AboutPage

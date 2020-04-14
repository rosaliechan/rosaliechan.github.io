import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"


export default () => (
  <Layout>
    <Header headerText="Contact" />
    <h3>
      Send me an <a href="mailto:rosaliechan215@gmail.com" target="_blank" rel="noopener noreferrer">email</a>, 
    </h3>
    <h3>
      follow me on <a href="https://twitter.com/rosaliechan17" target="_blank" rel="noopener noreferrer">Twitter</a>, 
    </h3>
    <h3>
    connect with me on <a href="https://www.linkedin.com/in/rosaliechan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, 
    </h3>
    <h3>
      or subscribe to my <a href="https://truecolors.substack.com/" target="_blank" rel="noopener noreferrer">weekly newsletter</a>.
      </h3>
  </Layout>
)
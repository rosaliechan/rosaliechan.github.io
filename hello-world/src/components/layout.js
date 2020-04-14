import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}><h4>
    <Link to={props.to}>{props.children}</Link></h4>
  </li>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
  <div 
  css={css`
  margin: 0 auto;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
`}
>


        <header>
        <h1 css={css`
            display: inline-block;
            font-size:2.8em;
          `}
          >   
           <Link to={`/`}>    
          {data.site.siteMetadata.title}
          </Link>
</h1>
      
      
      <ul style={{ listStyle: `none`, float: `right`, paddingTop: `10px`, borderBottom: `1.5px DodgerBlue solid` }}>
        <ListLink to="/">About</ListLink>
        <ListLink to="/writing/">Writing</ListLink>
        <li style={{ display: `inline-block`, marginRight: `1rem` }}><h4><a href="https://truecolors.substack.com/" target="_blank" rel="noopener noreferrer">Newsletter</a></h4>
  </li>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>

    {children}
    <footer><h6>&copy; Rosalie Chan 2020, built with React and Gatsby</h6></footer>

  </div>
)
  }
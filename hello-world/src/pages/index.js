import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"


export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h2
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >I'm a journalist, engineer, and storyteller.</h2>
        <p>Rosalie is a senior reporter at <a href="https://www.businessinsider.com/author/rosalie-chan" target="_blank" rel="noopener noreferrer">Business Insider</a> covering enterprise tech. She also founded and writes <a href="https://truecolors.substack.com/" target="_blank" rel="noopener noreferrer">True Colors</a>, a weekly newsletter that highlights reporting, essays, and multimedia work by women of color.</p>
        <p>Formerly, she worked as a software engineer in the Silicon Valley and a freelance writer covering science, health, Asian American issues, and more.</p>
        <p>Born and raised in the Chicago area, she studied journalism and computer science at Northwestern University. She’s now based in San Francisco. In her free time, she enjoys reading, running, cooking, photography, sketching, and Muay Thai.</p>
        <p>In 2015, Rosalie received a research grant from Northwestern to report on Hakka youth cultural identity and efforts to revive the Hakka language in Taiwan. Her writing about this topic was published in <a href="https://narratively.com/how-to-save-an-ancient-language-before-it-disappears-forever/" target="_blank" rel="noopener noreferrer">Narratively</a>, the <a href="http://www.taipeitimes.com/News/feat/archives/2016/01/25/2003637997" target="_blank" rel="noopener noreferrer">Taipei Times</a>, and the China Post.</p>
        <p>In 2018, her feature on <a href="https://www.chicagomag.com/city-life/January-2018/St-Therese-Chinatown/" target="_blank" rel="noopener noreferrer">St. Therese Chinese Catholic Church</a> in Chicago’s Chinatown was part of a series in <i>Chicago</i> magazine called <a href="https://www.chicagomag.com/city-life/The-Last-Holdouts/" target="_blank" rel="noopener noreferrer">The Last Holdouts</a>, which received the 2018 City and Regional Magazine Association award for best online column.</p>
        <p>Her writing has also been published in <a href="https://time.com/author/rosalie-chan/" target="_blank" rel="noopener noreferrer">TIME</a>, <a href="https://www.vice.com/en_us/contributor/rosalie-chan" target="_blank" rel="noopener noreferrer">VICE</a>, <a href="https://psmag.com/social-justice/activists-in-oakland-are-pushing-for-better-research-around-police-violence-and-community-trauma" target="_blank" rel="noopener noreferrer">Pacific Standard</a>, <a href="https://www.teenvogue.com/contributor/rosalie-chan" target="_blank" rel="noopener noreferrer">Teen Vogue</a>, <a href="https://www.huffpost.com/author/rosalie-chan" target="_blank" rel="noopener noreferrer">The Huffington Post</a>, <a href="https://www.inverse.com/profile/rosalie-chan-19035556" target="_blank" rel="noopener noreferrer">Inverse</a>, and the book <a href="https://www.amazon.com/Whiter-Asian-American-Women-Colorism/dp/1479800295/ref=sr_1_1?keywords=nikki+khanna&qid=1582740513&sr=8-1" target="_blank" rel="noopener noreferrer"><i>Whiter: Asian American Women on Skin Color and Colorism</i></a>.</p>        
  
      </div>
    </Layout>
  )
}
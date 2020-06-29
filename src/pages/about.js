import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "About Me"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About Saurabh Sangpal" />
        <div>
          <p>
            I am a self taught software engineer from Pune, India.<br></br>
            I started my career as a game developer at <a href="https://arcanheim.com/" target="_blank">Arcanheim Interactive</a> in Pune.<br></br>
            Then I moved on to <a href="https://juegostudio.com" target="_blank">Juego Studios</a> in Bangalore and still work there.<br></br>
            I enjoy working on personal projects in my free time, <a href="https://github.com/SaurabhSangpal" target="_blank">GitHub</a>.
            I also enjoy solving programming problems on <a href="https://www.codewars.com/users/saurabhsangpal" target="_blank">CodeWars</a>.<br></br>
            Other than software development, I enjoy to produce music.<br></br>
            I am not a web developer so the quality of this website may be bad.<br></br>
            Built with <a href="https://gatsbyjs.org" target="_blank">GatsbyJS</a>.
          </p>
        </div>
      </Layout>
    )
  }
}

export default About

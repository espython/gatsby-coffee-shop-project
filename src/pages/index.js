import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BackgroundSection from '../components/BackgroundSection'
import Info from '../components/Info'
import Menu from '../components/Menu'
import Contact from '../components/Contact/Contact'
import Products from '../components/Products'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Coffee Magic"
      styleClass="default-background"
    />
    <Info data={{ link: '/about', dest: 'about' }} />
    <Menu items={data.menu} />
    <Products />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "nice-cofee-image.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 70, height: 70) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage

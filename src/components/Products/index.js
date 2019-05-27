import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Product from './Product'
import Title from '../Title'

const query = graphql`
  {
    products: allContentfulCoffeeProducts {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Products() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        console.log(data)
        return (
          <section>
            <div className="container">
              <Title title="our products" />
              <div className="row">
                {data.products.edges.map(({ node: product }) => (
                  <Product key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

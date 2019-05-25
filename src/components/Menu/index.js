import React, { Component } from 'react'
import Img from 'gatsby-image'
import Title from '../Title'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: this.getCategories(props.items.edges),
    }
  }

  getCategories = items => {
    const tmpItems = items.map(item => item.node.category)
    const tempCategories = new Set(tmpItems)
    let categories = Array.from(tempCategories)
    categories = ['all', ...categories]
    return categories
  }

  handleItems = category => {
    const { items } = this.state
    const tempItems = [...items]
    if (category === 'all') {
      this.setState(() => ({ coffeeItems: items }))
    } else {
      const reqItems = tempItems.filter(
        ({ node }) => node.category === category
      )
      this.setState(() => ({ coffeeItems: reqItems }))
    }
  }

  render() {
    const { coffeeItems, items, categories } = this.state

    if (items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            {/* categories */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {categories.map((category, index) => (
                  <button
                    type="button"
                    key={index}
                    className="btn btn-yellow text-capitalize m-3"
                    onClick={() => {
                      this.handleItems(category)
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            {/* items */}
            <div className="row">
              {coffeeItems.map(({ node }) => (
                <div
                  key={node.id}
                  className="col-11 col-md-6 my-3 d-flex mx-auto"
                >
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0 text-capitalize">
                        <small>{node.title}</small>
                      </h6>
                      <h6 className="mb-0">
                        $<small>{node.price}</small>
                      </h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    }
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h2>There is no items to display</h2>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

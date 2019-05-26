import React from 'react'
import Title from '../Title'

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="Contact Us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="">
            {/* name field */}
            <div className="form-group">
              <label htmlFor="name" con>
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="jhon smith"
              />
            </div>
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="john@email.com"
              />
            </div>
            {/* Description Area */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                rows="5"
                placeholder="your description"
                className="form-control"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

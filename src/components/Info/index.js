import React from 'react'
import { Link } from 'gatsby'
import Title from '../Title'

export default function Info({ data }) {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              dignissimos dolore consequatur voluptates, sed doloribus molestias
              dolor excepturi accusantium incidunt nesciunt laborum alias labore
              vero ullam autem accusamus! Quisquam sint reprehenderit ratione.
              Velit tempora non suscipit quisquam minus deserunt neque nostrum
              tempore? Ut, earum similique enim modi sequi eos vero.
            </p>
            <Link to={data.link}>
              <button className="btn text-uppercase btn-yellow" type="button">
                {data.dest}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

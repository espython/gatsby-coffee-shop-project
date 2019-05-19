import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  console.log('styleClass', styleClass)
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title  text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: 'Regulars Goes',
}

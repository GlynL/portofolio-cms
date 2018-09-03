import React from 'react'

const Header = () => (
  <section id="header" className="header" tabIndex="0">
    <h1>Glyn Lewington</h1>
    <img
      className="header__img"
      src="/static/images/portrait-pic.jpg"
      alt="Glyn self-portrait"
      title="Glyn"
    />
    <p>Frotend Web Developer</p>

    <div className="icons">
      <a className="icon-link" href="https://github.com/GlynL" target="_blank">
        <i className="fab fa-2x fa-github" />
      </a>
      <a
        className="icon-link"
        href="https://twitter.com/GlynWebDev"
        target="_blank"
      >
        <i className="fab fa-2x fa-twitter" />
      </a>
      <a
        className="icon-link"
        href="https://www.linkedin.com/in/glynlewington/"
        target="_blank"
      >
        <i className="fab fa-2x fa-linkedin-in" />
      </a>
      <a
        className="icon-link"
        href="https://medium.com/@glynlewington"
        target="_blank"
      >
        <i className="fab fa-2x fa-medium-m" />
      </a>
    </div>
  </section>
)

export default Header

import PropTypes from 'prop-types'
import React from 'react'


const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="fa fa-cloud"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Rey Q</h1>
        <p>
          Living in a digital world operated by thoughts and fingers.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li> */}
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            SERVICES
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

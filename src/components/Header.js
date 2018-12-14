import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from './Link'

const Wrapper = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default Header

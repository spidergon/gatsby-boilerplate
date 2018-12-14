import React from 'react'
// import { setConfig } from 'react-hot-loader'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { theme } from './styles/GlobalStyle'
import Header from './Header'
import './styles/layout.css'

// setConfig({ pureSFC: true })

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          <main
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0
            }}
          >
            {children}
          </main>
        </>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

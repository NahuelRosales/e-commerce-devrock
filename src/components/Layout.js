import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = (props) => {
  let { children } = props
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  )
}

export default Layout

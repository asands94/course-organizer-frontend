/* eslint-disable react/prop-types */
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Layout

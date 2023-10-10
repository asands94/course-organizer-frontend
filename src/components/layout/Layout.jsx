/* eslint-disable react/prop-types */
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Layout

import Navbar from '../components/Shared/Navbar'
import Home from '../components/Patient/Home'
import Footer from '../components/Patient/Footer'
function HomePage({setUser,user}) {
  return (
    <>
        <Navbar setUser={setUser} user={user}/>
        <Home/>
        <Footer/>
    </>
  )
}

export default HomePage
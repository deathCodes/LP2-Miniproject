import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Book from '../BookComponent/Book'

// import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import Login from '../Login/Login'
import Addbook from '../Addbook'

const MainComponent = () => {
  return (
    <div>

        <Header/>
        {/* <BrowserRouter> */}
            {/* <Header/> */}
            {/* <Routes>
       
            </Routes> */}
            {/* <Footer/> */}
            {/* </BrowserRouter> */}

{/* <Book/> */}

          <Routes>
                <Route index element={<Homepage/>}/>

                <Route path='/book' element={<Book/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/add" element={<Addbook/>}/>
          </Routes>


        <Footer/>
        
    </div>
  )
}

export default MainComponent
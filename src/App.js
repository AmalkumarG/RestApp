
import Footer from './Components/Footer'
import Header from './Components/Header'
import ResDetails from './Components/ResDetails'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ViewRestaurent from './Components/ViewRestaurent'
function App() {

  return (
    <div>
    <BrowserRouter>
            <Header/>
            <Routes>
              <Route path='/' element={ <ResDetails/>}/>
              <Route path='/viewRes/:id' element={ <ViewRestaurent/>}/>
            </Routes>
     
      <Footer/>
    </BrowserRouter>

    </div>
  )
}

export default App
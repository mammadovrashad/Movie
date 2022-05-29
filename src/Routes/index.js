import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import App from '../Page/App';
import Collection from '../Page/Collection';
import Error from '../Page/Error'

const Routers = () => {
  return (
   <BrowserRouter>
      <Routes>
         <Route path='/app' element={<App/>}/>
         <Route path='*' element={<Error/>}/>
         <Route path='/collection' element={<Collection/>}></Route>
      </Routes>
   </BrowserRouter>
  )
}

export default Routers;
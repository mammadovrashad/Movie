import './style.css';
import {useState} from 'react'
import Form from '../../components/Form';
import List from '../../components/List';
import Save from '../../components/SaveMovie';
import { movieContext } from '../../Context';
import Data from '../../components/Data';

const App = () => {
  const[movieName,setMovieName]=useState();
  const[database,setDatabase]=useState([]);
  return (
   <movieContext.Provider value={{movieName,setMovieName,database,setDatabase}}>
    <div className="countiner">
       <div className="row">
           <div className="col-12">
               <div className="blog">
                   <div className="col-6"><h1>MustSee</h1></div>
               </div>
           </div>
       </div>
   </div>
   <Form/>
   <Data/>
   <List/>
   <Save/>
   </movieContext.Provider>
  )
}

export default App;
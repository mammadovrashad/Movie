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
  const[list,setList]=useState([]);
  return (
   <movieContext.Provider value={{movieName,setMovieName,database,setDatabase,list,setList}}>
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
    <div className="row" style={{alignItems:'flex-start'}}>
        <div className="col-8">
            <List/>
        </div>
        <div className="col-4">
            <Save/>
        </div>
    </div>
   
  
   </movieContext.Provider>
  )
}

export default App;
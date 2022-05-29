import {useEffect,useContext} from 'react';
import { movieContext} from '../../Context';
import axios from 'axios';

const Data = () => {

    let{movieName,setDatabase,database}=useContext(movieContext);
    useEffect(
        ()=>{
            if(movieName!==undefined)
            {
                getData();
            }
            async function getData(){
                    const response=await axios.get(`http://www.omdbapi.com/?s=${movieName}&apikey=99d929d9`);
                    await setDatabase(response.data.Search);
                    await console.log(database);
            }
        },[movieName]);
        
}

export default Data;
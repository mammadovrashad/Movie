import './style.css';
import '../../Page/App/style.css'
import { useRef, useState,useContext } from 'react';
import { movieContext } from '../../Context';

const Form = () => {
    const search=useRef();
    const input=useRef();
    let{setMovieName} = useContext(movieContext);
    let[btnStyle,setBtnStyle]=useState('search-btn');
    let [chechkButton,setCheckButton]=useState(true);

    const submitForm=(e)=>{
      e.preventDefault();
      let movieName=e.target.movieName.value;
      setMovieName(movieName); 
    }

    const onInput=()=>{
       if(input.current.value.length>=1){
          setBtnStyle('btnActive');
          setCheckButton(false);
       }
       else{
        setBtnStyle('search-btn')
       }
    }
  return (
   <div className="col-8">
      <div className="form">
            <form onSubmit={submitForm}>
                <label htmlFor="movieName">Filmi başlığa görə axtarın:</label><br/><br/>
               <div className="add-search">
                    <input type="text" onInput={onInput} name='movieName' ref={input} id='movieName' placeholder='Məsələn, Shawshank Redemption' />
                    <button type='submit' className={btnStyle} disabled={chechkButton} ref={search}>Axtar</button>
               </div>
            </form>
      </div>
   </div>
   
  )
}

export default Form;
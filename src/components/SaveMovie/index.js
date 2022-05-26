import { useContext} from 'react';
import {movieContext} from '../../Context';
import './style.css';

const Save = () => {
  let{list,setList}=useContext(movieContext);
  return (
    <div className="save-blog">
     <div className="row">
       <div className="col-10">
        <div className="save-list">
          <div className="save-box">
               <form className='save-form'>
                 <input type="text" placeholder='Siyahı adını daxil edin' className='listname'/>
               </form>
               <div className="show-save-list">
                {
                   list.map((v,i)=>{
                    return(
                      <div className="item" key={'item'+i}>{v}
                       <button className="delete-item-btn" onClick={()=>
                         {
                         list.splice(i,1);
                         setList([...list]);
                         }
                         }>X</button>
                      </div>
                    )
                   })
                }
               </div>
               <button type='submit' className='list-btn'>Siyahını saxla</button>
          </div>
        </div>
       </div>
     </div>
    </div>
  )
}

export default Save;
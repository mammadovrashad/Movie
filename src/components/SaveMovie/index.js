import { useContext, useState,useRef} from 'react';
import {movieContext} from '../../Context';
import {Link} from 'react-router-dom'
import './style.css';

const Save = () => {
  const input=useRef();
  let{list,setList}=useContext(movieContext);
  let[btnPossition,setBtnPossition]=useState(
    {
    status:true,
    className:'list-btn-deactive'
  })
  const Change=()=>{
    if(input.current.value.length>=1){
      setBtnPossition(
        {
          status:false,
          className:''
        });
    }
    else{
     setBtnPossition(
       {
        status:true,
        className:'list-btn-deactive'
       })
    }
  }
  return (
    <div className="save-blog">
     <div className="row">
       <div className="col-10">
        <div className="save-list">
          <div className="save-box">
               <form className='save-form'>
                 <input type="text"  ref={input} placeholder='Siyahı adını daxil edin' className='listname'  onChange={Change}/>
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
              <Link to='/collection'>
                 <button disabled={btnPossition.status} className={`list-btn ${btnPossition.className}`} >Siyahını saxla</button>
              </Link>
          </div>
        </div>
       </div>
     </div>
    </div>
  )
}

export default Save;
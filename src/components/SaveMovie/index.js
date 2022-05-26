import './style.css';

const Save = () => {
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
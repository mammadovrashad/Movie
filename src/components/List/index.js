import './style.css';
import '../../Page/App/style.css';
import {useContext} from 'react';
import {movieContext} from '../../Context'


const List = () => {
    let{database}=useContext(movieContext);
  return (
    <div className="show-movie">
        <div className="col-12">
            <div className="cart">
                {
                    database.map((v,i)=>{     
                        return(
                            <div className="cart-info" key={"cart"+i}>
                                <div className="col-5" style={{display:'flex',alignItems:'center'}}>
                                   <div className="movie-img">
                                       <img src={v.Poster} alt={v.Title} />
                                   </div>
                                </div>
                                <div className="col-5">
                                    <div className="movie-title">{v.Title}</div>
                                    <div className="movie-year">Year {v.Year}</div>
                                    <div className="movie-add">
                                       <button>Siyahıya əlavə edin</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div> 
    </div>
  )
}

export default List;
import {useContext} from 'react';
import {movieContext} from '../../Context'

const Collection = () => {
    // let{list}=useContext(movieContext);
  return (
    <div className="collection">Collection
       {
            // list.map((v,i)=>{
            //     return(
            //         <ol>
            //             <li key={'list'+i}>{v}</li>
            //         </ol>
            //     )
            // })
       }
    </div>
  )
}

export default Collection;
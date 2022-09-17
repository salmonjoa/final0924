import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Mylike({realData, memData}){
  let [del, setDel] = useState(realData)
  let navigate = useNavigate();

  return (
    <>
      <div className='comm'>
        <h2><strong>좋아하는 레시피</strong></h2><br/>
        <hr/>
      {realData?.length > 0 && (
        del.map((a,i)=>
          <div className='inlinePic'>
            <div className='delLike'>
              <button className='close' onClick={()=>{
              let copy = [...del];
              copy.splice(i, 1);
              setDel(copy);
              }}> ✖ </button></div>
              <img src={a.mainIMG} width="100%" onClick={()=>{
                 navigate('/detail/'+ a.dish_num)
              }}/><br/><br/>
              <h4>{ a.dish_name }</h4>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Mylike;
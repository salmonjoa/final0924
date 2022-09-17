import {useState} from 'react';

function Myate({realData, memData}){
  let [temp, setTemp] = useState(['하나','둘','셋','넷','다섯','여섯','일곱','여덟','아홉','영']);
  return (
    <>
      <div className="comm">
        <h2><strong>작성한 글</strong></h2><br/>
        <hr/>
        <>
        <div>
          {temp.map((a, i)=>{
            return(
            <div>
              <p><h2>제목: {a}</h2></p>
              <p><small>레시피명</small></p>
              <h6 className='date'>작성자 | 날짜</h6>
            <hr/>
            </div>
              )}
            )}
        </div>
        </>
      </div>
    </>
  )
}

export default Myate;
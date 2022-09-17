import { useNavigate } from "react-router-dom";

function Reply({realData, memData}){
  let navigate = useNavigate();

  return(
    <>
    <div className='comm'>
      <h2><strong>댓글관리</strong></h2><br/>
      <hr/>
      {realData?.length > 0 && (
        realData.map((a, i)=>{
        return(
        <div className='mouse' onClick={()=>{
          navigate('/detail/'+ a.dish_num)
       }}>
          <div className="smallL">
            <img src={a.mainIMG} width='40%' />
          </div>
          <div className="smallR">
            <h4>{a.dish_name}</h4>
            임시댓글{a.dish_num}
            <br/>
            임시작성일{a.date}
          </div>
        {/* <div className="blind">-</div> */}
        <hr/>
        </div>
        )
      })
    )}  
    </div>
      </>
  );
}

export default Reply;
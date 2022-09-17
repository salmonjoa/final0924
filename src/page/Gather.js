import { useNavigate } from "react-router-dom";

function Gather(){
  let navigate = useNavigate();
  
  return (
    <div className='comm'>
      <h2><strong>마이페이지</strong></h2><hr/><br/>
      <div className="gather">
        <div className="gatherL"><strong>{'nickname'}</strong> 님</div>
        <div className="gatherR">
          <div className="triple">
            <p className="upj">좋아요</p>
            <p className="under" onClick={() => {navigate('/mypage/mylike')}}><strong>{'.length'}</strong></p>
          </div>
          <div className="triple">
            <p className="upj">먹어봄</p>
            <p className="under" onClick={() => {navigate('/mypage/myate')}}><strong>{'.length'}</strong></p>
          </div>
          <div className="triple">
            <p className="upj">댓글수</p>
            <p className="under" onClick={() => {navigate('/mypage/reply')}}><strong>{'.length'}</strong></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gather;
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const user = { mnum: 1 };

function Myate() {
  const [page, setPage] = useState(1);
  const [atetList, setAteList] = useState({ end: 0 });
  const size = 5;

  const getAte = async () => {
    const api = `http://3.38.19.221:8081/api/member/ate-list/${user.mnum}`;
    const headers = {
      'Content-type': 'application/json',
    };
    try {
      let res = null;
      if (page > atetList?.end) {
        res = await axios.get(`${api}/?page=1&size=${size}`, headers);
        setPage(2);
        console.log(res.data);
        setAteList(res.data);
      } else {
        res = await axios.get(`${api}/?page=${page}&size=${size}`, headers);
        setPage((prev) => prev + 1);
        setAteList({
          ...res.data,
          dtoList: [...atetList.dtoList, ...res.data.dtoList],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getAte(), []);

  return (
    <>
      <div className="comm">
        <h2>
          <strong>작성한 글</strong>
        </h2>
        <br />
        <hr />
        <>
          <div>
            {atetList.dtoList &&
              atetList.dtoList.map((a, i) => (
                <div key={i}>
                  <div 
                    className="mouse"
                    //onClick={() => {
                    //navigate('/detail/' + a.RCP_SEQ, { state: RCP_SEQ });}}
                  >
                    {console.log(a)}
                    <div className="smallL">
                      <img src={a.ate_picture} width="40%" />
                    </div>
                    <div className="smallR">
                      <h4>{a.RCP_NM}</h4>
                      댓글 {a.content}
                      <br />
                      작성일{a.date}
                    </div>
                    <hr />
                  </div>
                  {page <= atetList?.end &&
                    atetList?.dtoList?.length - 1 === i && (
                      <div onClick={getAte}>더보기</div>
                    )}
                </div>
              ))}
          </div>
        </>
      </div>
    </>
  );
}

export default Myate;

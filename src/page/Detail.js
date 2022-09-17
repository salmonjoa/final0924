import { useNavigate, useParams } from 'react-router-dom';
import { Nav, Button, Tab, Tabs } from 'react-bootstrap';
import {useState, useEffect} from 'react';
import axios from 'axios';

function Detail({realData}) {

  // hook
  let navigate = useNavigate();
  // 게시글 하단 탭
  let [tab, setTab] = useState('');
  let [reply, setReply] = useState([]);
  let [레시피, set레시피] = useState('');
  let [영상, set영상] = useState('');
  // 좋아요
  let [like, setLike] = useState(false);
  // 주소 파라미터
  let {id} = useParams();
  let dish = realData.find((result) => 
      result.dish_num === id
  );
  
    // 게시글 데이터 가져오기
    let [postData, setPostData] = useState([]);
    useEffect(()=>{
      axios.get("http://192.168.0.23:8080/api/dish/get/"+ dish.dish_num +"/1")
      .then((response)=>{
        // console.log(response.data)
        setPostData(response.data.result)
      })
      .catch(()=>{
        console.log('실패')
      })
    },[])

  let [inputText, setInputText] = useState([postData.commList]);

console.log(postData)

  // const first = dish.imgList;
  // const second = dish.recipe;
  // const mixedArr = first.map((item, i) => [item, second[i]]);
  // console.log(mixedArr);

  return (
    <>
    <Button className='back' variant="light" onClick={()=>{navigate(-1)}}>{'<<'} 뒤로가기</Button>
      <div className="container">
       {realData?.length > 0 && (
        <div className='all'>
          <h1 className='nameD'>{dish.dish_name}</h1>
          {/* <h1 className='nameD'>{dish.title}</h1> 더미데이터주의 */}
            <div className='detailR'>조회: {postData.hit}</div>
            <div className='detailR'>작성자: {dish.writer}</div>
            <div className='detailR'>작성일: {dish.date}</div>
          <div className='middle'>
            <img src={dish.mainIMG} width="100%" /><br/>
          <div className='small'>
            <span onClick={(e)=>{
              e.stopPropagation()
              setLike(!like)
              console.log(like)
            }}>
            <span className='mouse'>{like === true ? '❤️' : '🤍'}</span>
            {
              like === true ?
              postData.dish_like +1
              : postData.dish_like
            }
            </span>
            <span className='small'> 😋{postData.ate}</span>
          </div><br/>
        </div>
      </div>
      )}
      <Tabs
        defaultActiveKey="레시피"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="레시피" title="레시피">
          {realData?.length > 0 &&  (
          dish.recipe.map((order, i)=>{
            return(
              <>
              <p><img src={dish.imgList[i]} className='imgSize'></img></p>
              <h4>{order}</h4>
              <br/><br/>
              </>
            )
          })
        )
        }
        </Tab>
        <Tab eventKey="댓글" title="댓글">
          {
            reply.map((r, i)=>{
              return(
                <div>
                  <h6 className='oneline'>{r}</h6>
                  <div className='outline'>
                  <h6 className='arrReply'>작성자 | 작성일</h6>
                  <span className='blind'>-----</span>
                    <button className='delrepB' onClick={()=>{
                      let del = [...reply];
                      del.splice(i,1);
                      setReply(del);
                    }}>삭제</button></div>
                  <hr/>
                </div>
              )
            })
          }
          <div className='nameD'>
            <input className='replyTab' type="text" onChange={(e) => {
              setInputText(e.target.value);
            }}/><span className='blind'>-</span>
            <button className='replyB' onClick={() => {
              let copy = [...reply];
              inputText == '' ? alert('댓글을 입력하세요') : copy.push(inputText);
              setReply(copy);
              setInputText('');
            }}>등록</button>
            <br/><br/>
          </div>
        </Tab>
        <Tab eventKey="관련url" title="관련url">
          url
        </Tab>
      </Tabs>
          </div>
      </>
  );
}

// function TabCom({reply, setReply, input, setInput}){
//   return(
    
//     );
// }
export default Detail;

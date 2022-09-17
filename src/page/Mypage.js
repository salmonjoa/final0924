import {ListGroup, Col, Nav} from 'react-bootstrap'
import Information from './Information'
import Reply from './Reply'
import Mylike from './Mylike'
import Gather from './Gather'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Myate from './Myate'
import {useEffect, useState} from 'react'
import axios from 'axios';

let Mypage = ({realData}) => {

    // 멤버 데이터 가져오기
    let [memData, setMemData] = useState([]);
//     useEffect(()=>{
//       axios.get("http://192.168.0.10:8080/api/member/dishcomm-list/100") 
//       // axios.get("https://jsonplaceholder.typicode.com/posts") 더미데이터
//       .then((response)=>{
//         // console.log(response.data)
//         setMemData(response.data)
//       })
//       .catch(()=>{
//         console.log('실패')
//       })
//     },[])
// console.log(memData)
  let navigate = useNavigate();

  return(
    <div>
      <div className='floatL'>
        <div className='info'><strong> My Page </strong></div>
        <ListGroup>
          <Col>
            <Nav className="flex-column">
              <ListGroup.Item><Nav.Link onClick={() => {navigate('/mypage/myinfo')}}><strong className='black'>내정보관리</strong></Nav.Link></ListGroup.Item>
              <ListGroup.Item><Nav.Link onClick={() => {navigate('/mypage/mylike')}}><strong className='black'>좋아요❤️</strong></Nav.Link></ListGroup.Item>
              <ListGroup.Item><Nav.Link onClick={() => {navigate('/mypage/myate')}}><strong className='black'>먹어봄😋</strong></Nav.Link></ListGroup.Item>
              <ListGroup.Item><Nav.Link onClick={() => {navigate('/mypage/reply')}}><strong className='black'>댓글관리📝</strong></Nav.Link></ListGroup.Item>
            </Nav>
          </Col>
        </ListGroup>
      </div>
    {realData?.length > 0 && (
    <Routes>
      <Route path="/" element={<div className='floatR'><Gather /></div>}/>
      <Route path="myinfo" element={<div className='floatR'><Information memData={memData} /></div>}/>
      <Route path="mylike" element={<div className='floatR'><Mylike realData={realData} memData={memData} /></div>}/>
      <Route path="myate" element={<div className='floatR'><Myate realData={realData} memData={memData} /></div>}/>
      <Route path="reply" element={<div className='floatR'><Reply realData={realData} memData={memData} /></div>}/>
    </Routes>
    )}
    </div>
  );
}

export default Mypage;
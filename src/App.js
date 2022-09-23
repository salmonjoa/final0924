import './App.css'
import { Nav, Container, Navbar } from 'react-bootstrap'
import { Routes, Route, useNavigate} from 'react-router-dom'
import Detail from './page/Detail'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect, useState} from 'react'
import Mypage from './page/Mypage'
import Mylike from './page/Mylike'
import EditInfo from './page/EditInfo'
import List from './page/List'
import Main from './main/Main'
import Square from './square/Square'
import Header from './layouts/Header'
import axios from 'axios';
import Cardfilp from './square/Cardflip'

function App() {
let dispatch = useDispatch();

  // axios로 데이터 가져오기
  let [realData, setRealData] = useState([]);
    useEffect(()=>{
      axios.get("http://192.168.0.23:8080/api/dish/get")
      .then((response)=>{
        // console.log(response.data)
        setRealData(response.data)
      })
      .catch(()=>{
        console.log('실패')
      })
    },[])
    console.log(realData)
    // console.log(JSON.stringify(realData));

  let navigate = useNavigate();
  
  return (
    <div>
    <div className='login'>
        <Header />
      </div>
      <div className='appj'>
      {/* <img src='./image/냉장고.png' width="70px" height="70px"/> */}
      <h1 className='namej' onClick={() => {navigate('/')}}>냉장Go, 파먹Go!</h1>
        <Navbar>
          <Container>

            <div className='menubarj'>
              <Nav>
                <Nav.Link className='var' onClick={() => {navigate('/')}}><strong>Home🏠</strong></Nav.Link>
                <Nav.Link className='var' onClick={() => {navigate('/detail')}}><strong>레시피🍴</strong></Nav.Link>
                <Nav.Link className='var' onClick={() => {navigate('/square')}}><strong>광장🍀</strong></Nav.Link>
                <Nav.Link className='var' onClick={() => {navigate('/rank')}}><strong>랭킹🏆</strong></Nav.Link>
                <Nav.Link className='var' onClick={() => {navigate('/mypage')}}><strong>마이페이지👤</strong></Nav.Link>

              </Nav>
            </div>
          </Container>
        </Navbar>
      </div>
          <Routes>
            <Route path="/" element={ <Main realData={realData} />}/>
            <Route path="/main" element={<Cardfilp realData={realData}/>} />
            <Route path="/detail" element={<List realData={realData} />}/>
            <Route path="/square" element={<Square realData={realData}/>}/>
            <Route path="/detail/*" element={<Detail realData={realData} />}/>
            <Route path="/mypage/*" element={<Mypage realData={realData} />}/>
            <Route path="/mylike" element={<Mylike realData={realData} />}/>

          </Routes>
    </div>
  );
}

export default App;
import "./Card.css";
import './../App.css';
import {useNavigate} from 'react-router-dom';
import { Nav, Button, Navbar,Card } from 'react-bootstrap'
import Like from './Like'

// import { gsap } from "gsap";
// import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
// import Img from './Img';

function Cardfilp({realData}) {
  let navigate = useNavigate();
  // const [reversed, setReversed] = useState(false);
console.log(realData)
  return <>{realData && 
    realData.map((a, i) => {
      return (
        <div>
          <Card className="border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={a.mainIMG} className='gridImg'/>
      <Card.Body>
        <Card.Title>당근수삼정과</Card.Title>
        <Card.Text>
       맛있다
        </Card.Text>
        <Button onClick={()=>{navigate('/fileform')}}variant="primary">먹음</Button>
        <Button variant=" "> <Like/></Button>{' '}
      
      </Card.Body>
    </Card>
        {/* <Button onClick={()=>{navigate('/fileform')}}variant="primary">먹음</Button>
        <img src={a.mainIMG} className='gridImg'/> */}
        
          </div>  
      );
    })
  }</>
}

export default Cardfilp;

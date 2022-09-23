// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Modal, Button, Form, Container } from "react-bootstrap";
// import HorizonLine from "../component/HorizonLine";
// import InputGroup from "react-bootstrap/InputGroup";
// import GoogleLogin from "./GoogleButton";
// import { login } from "./userSlice";
// import { useDispatch } from "react-redux";

// // 로그인
// const SignInModal = ({ show, onHide }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [adminCheck, setCheck] = useState(true);

//   const dispach = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispach(
//       login({
//         memberID: email,
//         memberPW: password,
//         //checkbox: abc,
//         loggdeIn: true,
//       })
//     );
//   };

//   const mamber = () => {
//     let adminURL = "http://3.38.19.221:8081/api/login/admin";
//     let memberURL = "http://3.38.19.221:8081/api/login/member";
//     let url = "";
//     let abc = !adminCheck;

//     if (abc == true) {
//       url = adminURL;
//     } else {
//       url = memberURL;
//     }
//     console.log("check:" + abc);
//     axios
//       .post(url, {
//         memberID: email,
//         memberPW: password,
//         checkbox: abc,
//         loggdeIn: true,
//       })
//       // 리덕스에 user넣기!!!!!!!!!!!!!!!!
//       .then((response) => {
//         const user = {
//           ...response.data,
//           authorization: response.headers.authorization,
//           refreshtoken: response.headers.refreshtoken,
//         };
//         // Handle success.
//         console.log("Well done!");
//         console.log("User profile", user);
//         // console.log("User token", response.data.jwt);
//         console.log(response.headers["authorization"]);
//         console.log(response.headers["refreshtoken"]);
//         alert("환영합니다");
//         setEmail("");
//         setPassword("");
//       })
//       .catch((error) => {
//         // Handle error.
//         console.log("An error occurred:", error.response);
//         alert("로그인 실패하였습니다");
//         setEmail("");
//         setPassword("");
//       });
//   };

//   const onSuccess = async (response) => {
//     const {
//       googleId,
//       profileObj: { email, name },
//     } = response;

//     console.log(response);
//   };

//   const onFailure = (error) => {
//     console.log(error);
//     console.log(error.details);
//   };

//   return (
//     <Modal
//       show={show}
//       onHide={onHide}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Container>
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">로그인</Modal.Title>
//         </Modal.Header>

//         <Modal.Body onSubmit={(e) => handleSubmit(e)}>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>이메일</Form.Label>
//               <Form.Control
//                 value={email}
//                 onChange={(event) => {
//                   setEmail(event.target.value);
//                 }}
//                 placeholder="이메일을 입력해주세요"
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>비밀번호</Form.Label>
//               <Form.Control
//                 value={password}
//                 onChange={(event) => {
//                   setPassword(event.target.value);
//                 }}
//                 placeholder="비밀번호를 입력해주세요"
//               />
//             </Form.Group>
//             <Button
//               variant="info"
//               type="button"
//               className="my-3"
//               onClick={() => {
//                 mamber();
//               }}
//             >
//               로그인
//             </Button>
//           </Form>
//           <InputGroup className="mb-3">
//             <input
//               type="checkbox"
//               className="checkbox"
//               check={adminCheck}
//               onChange={() => {
//                 setCheck(!adminCheck);
//               }}
//             />
//             <span className="checkboxContent">관리자</span>
//           </InputGroup>
//           <HorizonLine text={"OR"} />
//           <GoogleLogin />
//         </Modal.Body>
//       </Container>
//     </Modal>
//   );
// };

// export default SignInModal;

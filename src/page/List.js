import './../App.css';
import { useState } from "react";
import Pagination from './../Paging';
import Posts from './Post';

function List({realData}){

  // ** 페이지네이션 **
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage, setPostsPerPage] = useState(10);

  // indexOf로 각 페이지의 첫번째와 마지막 인덱스 번호 구하기
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  // const currentPosts = (realData) => {
  //   const currentPosts = 0;
  //     currentPosts = realData.slice(indexOfFirst, indexOfLast);
  //     return currentPosts;
  // };
  return (
    <div>
      <Posts realData={realData} indexOfLast={indexOfLast} indexOfFirst={indexOfFirst}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={realData.length}
        paginate={setCurrentPage}
      ></Pagination>
    </div>
  )
}

export default List;
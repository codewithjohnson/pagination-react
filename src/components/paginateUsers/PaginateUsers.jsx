import { useState } from "react";
import User from "../user/User";
import "./paginateUsers.css";

const PaginateUsers = ({ users, pageLimit, noOfUsersToDisplay }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(noOfUsersToDisplay);
  const [pageNo, setPageNo] = useState(1);

  //   derive the number of buttons from pageLimit
  const getPaginatedUsersPageNo = () => {
    const btnNos = new Array(pageLimit).fill().map((_, index) => index + 1);
    return btnNos;
  };

  const changePageNo = (e) => {
    const value = e.target.textContent;
    setPageNo(value);
    const startPage = Math.abs(value * noOfUsersToDisplay - noOfUsersToDisplay);
    setStartIndex(startPage);
    const endPage = startPage + noOfUsersToDisplay;
    setEndIndex(endPage);
  };

  const getPrevPage = () => {
    if (startIndex > 1) {
      setStartIndex((prev) => prev - noOfUsersToDisplay);
      setEndIndex((prev) => prev - noOfUsersToDisplay);
      setPageNo((prev) => prev - 1);
    }
  };

  const getNextPage = () => {
    if (endIndex < users.length) {
      setStartIndex((prev) => prev + noOfUsersToDisplay);
      setEndIndex((prev) => prev + noOfUsersToDisplay);
      setPageNo((prev) => prev + 1);
    }
  };

  return (
    <>
      {
        <div className="PaginateduserContainer">
          {users.slice(startIndex, endIndex).map((user, index) => {
            return (
              <div className="paginateUsers" key={index}>
                <User user={user} index={index} />
              </div>
            );
          })}
        </div>
      }
      {users.length > 0 ? (
        <div className="pageNoBtn">
          <div className="bottomPageNo">Page {pageNo}</div>
          <div className="btns">
            <button onClick={getPrevPage} className="prevBtn">
              prev
            </button>
            {getPaginatedUsersPageNo().map((page, index) => {
              return (
                <button key={index} onClick={changePageNo}>
                  {page}
                </button>
              );
            })}
            <button onClick={getNextPage} className="nextBtn">
              next
            </button>
          </div>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </>
  );
};

export default PaginateUsers;

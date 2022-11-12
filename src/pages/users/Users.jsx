import { useEffect, useState } from "react";
import PaginateUsers from "../../components/paginateUsers/PaginateUsers";

const users = 100;
const URL = `https://randomuser.me/api/?results=${users}`;
const pageLimit = 5;
const noOfUsersToDisplay = 10;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    FetchUsers();
  }, []);

  const FetchUsers = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      })
      .catch((err) => {
        setError(err);
      });
  };

  if (error) {
    return <div>error fetching users</div>;
  }

  return (
    <>
      <PaginateUsers
        users={users}
        pageLimit={pageLimit}
        noOfUsersToDisplay={noOfUsersToDisplay}
      />
    </>
  );
};

export default Users;

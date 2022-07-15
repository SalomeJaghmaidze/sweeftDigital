import React from "react";
import { Wrapper } from "../MainStyles";
import { useState, useEffect } from "react";
import UserCard from "./UserCard";

const PER_PAGE = 15;

function UserList({ endpoint }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(2);

  const getData = async () => {
    fetch(`${process.env.REACT_APP_API_URL}/${endpoint}/${page}/${PER_PAGE}`)
      .then((res) => res.json())
      .then((json) => {
        setUsers([...users, ...json.list]);
        setNextPage(json.pagination.nextPage);
      });
  };

  const scrollToEnd = () => {
    if (nextPage) {
      setPage(nextPage);
    }
  };

  window.onscroll = function (e) {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      scrollToEnd();
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div>
      <Wrapper>
        {users.map((user, index) => {
          return <UserCard key={index} user={user}></UserCard>;
        })}
      </Wrapper>
    </div>
  );
}

export default UserList;

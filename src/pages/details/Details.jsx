import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Info,
  Address,
  Image,
  Header,
  List,
  Sequence,
} from "./DetailsStyles";
import UserList from "../main/components/UserList";

function Details() {
  let params = useParams();
  const [user, setUser] = useState([]);
  const [friendSequence, setFriendSequence] = useState([]);

  const getData = async () => {
    fetch(`${process.env.REACT_APP_API_URL}/user/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setUser(json);
        addToSequence(json);
      });
  };

  const addToSequence = (data) => {
    setFriendSequence([
      ...friendSequence,
      {
        id: data.id,
        prefix: data.prefix,
        name: data.name,
        lastName: data.lastName,
      },
    ]);
  };

  useEffect(() => {
    getData();
  }, [params.id]);

  return (
    <>
      <Wrapper>
        <Header>
          <Image>
            <img src={user.imageUrl + "?v" + user.id} alt="" />
          </Image>
          <Info>
            <legend>Info</legend>
            <div>
              <h1>
                {user.prefix} {user.name} {user.lastName}
              </h1>
              <h3>{user.title}</h3>
              <br></br>
            </div>
            <div>
              <p>
                <span>Email:</span> {user.email}
              </p>
              <p>
                <span>Ip address:</span> {user.ip}
              </p>
              <p>
                <span>Ip address:</span> {user.ip}
              </p>
              <p>
                <span>Job Area:</span> {user.jobArea}
              </p>
              <p>
                <span>Job Type:</span> {user.jobType}
              </p>
            </div>
          </Info>
          <Address>
            <legend>Address</legend>
            {user.company && (
              <h3>
                {user.company.name} {user.company.suffix}
              </h3>
            )}
            {user.address && (
              <div>
                <p>
                  <span>City:</span> {user.address.city}
                </p>
                <p>
                  <span>Country:</span> {user.address.country}
                </p>
                <p>
                  <span>State:</span> {user.address.state}
                </p>
                <p>
                  <span>Street Address:</span> <br></br>
                  <br></br> {user.address.streetAddress}
                </p>
                <p>
                  <span>Zip code:</span> {user.address.zipCode}
                </p>
              </div>
            )}
          </Address>
        </Header>
        <Sequence>
          {friendSequence.length > 1 &&
            friendSequence.map((friend, index) => {
              return (
                <p key={index}>
                  {index > 0 && ">"}
                  <Link to={`/user/${friend.id}`}>
                    {`${friend.name} ${friend.lastName}`}
                  </Link>
                </p>
              );
            })}
        </Sequence>
        <List>
          <h2>Friends:</h2>
          <UserList endpoint={`user/${params.id}/friends`}></UserList>
        </List>
      </Wrapper>
    </>
  );
}

export default Details;

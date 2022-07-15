import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Wrapper, Info, Address, Image, Header, List } from "./DetailsStyles";
import UserList from "../main/components/UserList";

function Details() {
  let params = useParams();
  const [post, setPost] = useState([]);

  const getData = async () => {
    const api = await fetch(
      "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/" +
        params.id
    );
    const data = await api.json();
    console.log(data.address.city);
    setPost(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Wrapper>
        <Header>
          <Image>
            <img src={post.imageUrl} alt="" />
          </Image>
          <Info>
            <legend>Info</legend>
            <div>
              <h1>
                {post.prefix} {post.name} {post.lastName}
              </h1>
              <h3>{post.title}</h3>
              <br></br>
            </div>
            <div>
              <p>
                <span>Email:</span> {post.email}
              </p>
              <p>
                <span>Ip address:</span> {post.ip}
              </p>
              <p>
                <span>Ip address:</span> {post.ip}
              </p>
              <p>
                <span>Job Area:</span> {post.jobArea}
              </p>
              <p>
                <span>Job Type:</span> {post.jobType}
              </p>
            </div>
          </Info>
          <Address>
            <legend>Address</legend>
            <h3>Considine, Wuckert and Schinner and Sons</h3>
            {post.address && (
              <div>
                <p>
                  <span>City:</span> {post.address.city}
                </p>
                <p>
                  <span>Country:</span> {post.address.country}
                </p>
                <p>
                  <span>State:</span> {post.address.state}
                </p>
                <p>
                  <span>Street Address:</span> <br></br>
                  <br></br> {post.address.streetAddress}
                </p>
                <p>
                  <span>Zip code:</span> {post.address.zipCode}
                </p>
              </div>
            )}
          </Address>
        </Header>
        <List>
          <h2>Friends:</h2>
          <UserList endpoint={`user/${params.id}/friends`}></UserList>
        </List>
      </Wrapper>
    </>
  );
}

export default Details;

import React from "react";
import { Card, Image, Wrapper } from "./MainStyles";
import { useState, useEffect } from "react";

function Main() {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState('1');
  const getData = async () => {
    const api = await fetch(
      "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/" + page + "/20"
    );
    const data = await api.json();
    setPage(page+1);
    console.log("222");
    setPost(data.list);
    
  };

  const handleScroll = (e) => {
    if(window.innerHeight + e.target.documentElement.scrollTop + 1>=e.target.documentElement.scrollHeight) {
      getData();
    
      console.log("scrolled")
    }
   
 
  };

  useEffect(() => {
    getData();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Wrapper >
      {post.map((profile, index) => {
        return (
          <Card key={index}>
            <Image src={profile.imageUrl} alt={profile.title} />
            <h1>{profile.prefix} {profile.name} {profile.lastName}</h1>
            <p>{profile.title}</p>
          </Card>
        );
      })}
      </Wrapper>
    </div>
  );
}

export default Main;

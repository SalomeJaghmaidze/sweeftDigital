import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import {Wrapper, Info, Address, Image} from './DetailsStyles'


function Details() {
    let params = useParams();
    const [post, setPost] = useState([]);

    const getData = async (id) => {
        const api = await fetch(
          "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/" + params.id
        );
        const data = await api.json();
        console.log(data.address.city)
        setPost(data);
      };

      useEffect(() => {
        getData();
      }, []);
    
  return (
    <Wrapper>
        <Image>
        <img src={post.imageUrl} alt="" />
        </Image>
        <Info>
        <h1>{post.prefix} {post.name} {post.lastName}</h1>
        <p>{post.title}</p>
        <div>
            <p>Email: {post.email}</p>
            <p>Ip address: {post.ip}</p>
            <p>Job Area: {post.jobArea}</p>
            <p>Job Type: {post.jobType}</p>
        </div>
        </Info>
        <Address>
        <h1>Considine, Wuckert and Schinner and Sons</h1>
        {/* <div>
            <p>City: {post.address.city}</p>
            <p>Country: {post.address.country}</p>
            <p>State: {post.address.state}</p>
            <p>Street Adress: {post.address.streetAddress}</p>
            <p>Zip code: {post.address.zipCode}</p>
        </div> */}
        </Address>
    </Wrapper>
  )
}

export default Details
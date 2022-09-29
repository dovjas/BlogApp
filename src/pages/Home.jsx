import React from "react";
import {Link} from "react-router-dom";
const Home = () => {
  const blogPosts = [
    {
      id:1,
      title:"Lorem ipsum dolor sit",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum iusto ab totam harum enim officiis ipsum alias illo neque dolore autem quis accusantium, hic blanditiis laudantium vitae dolor eum laboriosam",
      img: "https://images.unsplash.com/photo-1664411179124-4fb6413a3e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:2,
      title:"Lorem ipsum dolor ",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum iusto ab totam harum enim officiis ipsum alias illo neque dolore autem quis accusantium, hic blanditiis laudantium vitae dolor eum laboriosam",
      img: "https://images.unsplash.com/photo-1664411179124-4fb6413a3e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:3,
      title:"Lorem ipsum ",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum iusto ab totam harum enim officiis ipsum alias illo neque dolore autem quis accusantium, hic blanditiis laudantium vitae dolor eum laboriosam",
      img: "https://images.unsplash.com/photo-1664411179124-4fb6413a3e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:4,
      title:"Lorem ",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum iusto ab totam harum enim officiis ipsum alias illo neque dolore autem quis accusantium, hic blanditiis laudantium vitae dolor eum laboriosam",
      img: "https://images.unsplash.com/photo-1664411179124-4fb6413a3e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
  ]


  return (
    <div className="home">
      <div className="posts">
        {blogPosts.map((blog)=>(
          <div className="post" key={blog.id}>
            <div className="img">
              <img src={blog.img} alt="blog image" /> 
            </div>
            <div className="content">
              <Link className="link" to={`./blog/${blog.id}`}>
              <h1>{blog.title}</h1>
              </Link>
              <p>{blog.description}</p>
              <button>Read More</button>
            </div>
          </div>
        
        ))}
      </div>


    </div>
  )
}

export default Home
import React from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'



export default function PostsComponent() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios.get('http://localhost/EPICODE/WP-3-TEST/wordpress/wp-json/wp/v2/posts')
        .then(response => {
            console.log(response.data);
          setPosts(response.data);
          
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    }, []);

  
    return (
        
      <div className="container mt-5">
        <h1 className="mb-4">Posts</h1>
        <div className="row">
          {posts && posts.map(post => (
            <div key={post.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <Link to={`/post/${post.id}`} className="custom-link"><h5 className="card-title">{post.title.rendered}</h5></Link>
                  <p className="card-text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                  <p className="card-text"><strong>Author:</strong> {post.author}</p>
                  <p className="card-text"><strong>Date:</strong> {post.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
          
    );
  };

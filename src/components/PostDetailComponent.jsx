import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


function PostDetailComponent() {
    const [post, setPost] = useState(null);
    const { postId } = useParams();
  
    useEffect(() => {
      axios.get(`http://localhost/EPICODE/WP-3-TEST/wordpress/wp-json/wp/v2/posts/${postId}`)
        .then(response => {

           
            console.log(response.data);
          setPost(response.data);
        })
        .catch(error => {
          console.error('Error fetching post:', error);
        });
    }, [postId]);
  
    if (!post) {
      return <div>Loading...</div>;
    }
  
    return (
        <>
        {post &&
        <Container className="mt-4">
        <Row>
          <Col>
            <h1>{post.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
            <p>Author: {post.author}</p>
            <p>Date: {post.date}</p>
          </Col>
        </Row>
      </Container>
    }
        </>
    );
  }
  
  export default PostDetailComponent;
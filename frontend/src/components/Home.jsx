import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

    const [posts, setPost] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try{
                const response = await axios.get('http://localhost:3001/get');
                setPost(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPost();
    },[]);

  return (
    <div className='blog-app'>
        <div className="posts-container">
            {posts.map((post) => (
            <div key={post._id} className="post-card">
                <img src={post.img_url} alt={post.title} className="post-image" />
                <h3 className="post-title">{post.title}</h3>
                <span className='post-content'>{post.content}</span>
                <div className="post-actions">
                <button className="action-button delete">DELETE</button>
                <button className="action-button update">UPDATE</button>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Home

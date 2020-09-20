import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Post from '../Post/Post';
const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts/';
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);
    return (
        <React.Fragment>
            <CssBaseline />
                <h1 style={{background:'#1976D2',color:'#F3F8FC',marginTop:'0',padding:'5px',textAlign:'center'}}>Social Buddy React Router M-ui</h1>
            <Container fixed >
                {
                    posts.map(post => <Post post={post}></Post>)
                }
            </Container>
        </React.Fragment>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const { postId} = useParams()
    const [postDetail, setPostDetail] = useState({});
    const { title, body } = postDetail;
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPostDetail(data))
    }, [postId]);

    return (
        <React.Fragment>
            <CssBaseline />
            <h1 style={{ background: '#1976D2', color: '#F3F8FC', margin: '0', padding: '5px', textAlign: 'center' }}>Social Buddy(Post Detail)</h1>
            <Container fixed>
                <Typography variant="h4" gutterBottom> {title}</Typography>
                <Typography variant="body1" gutterBottom style={{ marginBottom: '15px' }}>ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit.ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit{body} </Typography>
                <Typography>

                <Comment postId={postId}></Comment>
                  
                </Typography>
            </Container>
        </React.Fragment>
    );
};

export default PostDetail;
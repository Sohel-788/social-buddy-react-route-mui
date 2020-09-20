import { Button, Link, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
const Post = (props) => {
    const { title, body, id } = props.post;
    const history = useHistory();
    const handleClick = (postId) => {
        const url = `/post/${postId}`;
        history.push(url)
    }
    return (
        <div style={{marginBottom:'30px',border:'1px solid lightgray',padding:'10px',borderRadius:'10px'}}>
            <Typography variant="h4" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body1" gutterBottom style={{marginBottom:'15px'}}>{body} </Typography>
            <Link to={`/post/${id}`}>
            <Button onClick={() => handleClick(id)}  variant="contained" color="primary">
                See More{id}
            </Button>
            </Link>
        </div>
    );
};

export default Post;
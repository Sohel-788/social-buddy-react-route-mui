import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
const NoMatch = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed style={{textAlign:'center'}}>
                <h3>Sorry! There is something wrong. The expected content is not found.</h3>
                <p>404 error!</p>
            </Container>
        </React.Fragment>

    );
};

export default NoMatch;
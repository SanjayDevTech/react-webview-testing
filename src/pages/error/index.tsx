import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ErrorPage() {
    const history = useHistory();
    return (
        <div>
            <h1>Error Page</h1>
            <p>This is the error page.</p>
            <button onClick={() => history.push('/')}>Back to home</button>
        </div>
    );
}

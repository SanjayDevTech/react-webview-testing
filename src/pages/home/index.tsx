import React from 'react';
import useCookie from 'react-use-cookie';
import computeName from '../../names';

export default function HomePage() {
    const [name, setName] = useCookie('name');
    return (
        <div>
            <h1>Home Page</h1>
            <p>This is the home page.</p>
            <p>Name from cookie: {name || 'undefined'}</p>
            <button onClick={() => setName(computeName())}>Change Name</button>
        </div>
    );
}

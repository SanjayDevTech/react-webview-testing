import React from 'react';
import { useHistory } from 'react-router-dom';
import useCookie from 'react-use-cookie';
import computeName from '../../names';

export default function HomePage() {
    const [name, setName] = useCookie('name');
    const history = useHistory();
    return (
        <div>
            <h1>Home Page</h1>
            <p>This is the home page.</p>
            <p>Name from cookie: {name || 'undefined'}</p>
            <button
                onClick={() => {
                    const name = computeName();
                    const a = (window as any).Android;
                    if (a) {
                        a?.showToast(name);
                    }
                    setName(name);
                }}>
                Change Name
            </button>
            <button onClick={() => history.push('/second')}>Navigate</button>
        </div>
    );
}

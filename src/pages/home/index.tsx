import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useCookie from 'react-use-cookie';
import computeName from '../../names';

export default function HomePage() {
    const [file, setFile] = useState<File>();
    const [name, setName] = useCookie('name');
    const history = useHistory();

    const deviceId: string | undefined = useMemo(
        () => window.Android?.getDeviceId(),
        [],
    );

    useEffect(() => {
        if (!file) return;
        console.log(file.name);
        window.Android?.showToast(file.name);
    }, [file]);

    return (
        <div>
            <h1>Home Page</h1>
            <p>This is the home page.</p>
            {deviceId && <p> Device id: {deviceId}</p>}
            <p>Name from cookie: {name || 'undefined'}</p>
            <button
                onClick={() => {
                    const name = computeName();
                    const a = window.Android;
                    a?.showToast(name);
                    setName(name);
                }}>
                Change Name
            </button>
            <button onClick={() => history.push('/second')}>Navigate</button>
            <input type='file' onChange={(e) => setFile(e.target.files?.[0])} />
        </div>
    );
}

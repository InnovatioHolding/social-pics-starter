import './Upload.css';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Upload() {

    const history = useHistory();

    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');

    async function submit(event) {
        event.preventDefault();
        // TODO: actually submit somewhere
        console.log('New pic:', { description, file });
        history.push('/');
    }

    return <div className="Upload">
        <h2>Upload</h2>
        <form onSubmit={submit}>
            <div>
                {file && <div>
                    <img className="preview" src={URL.createObjectURL(file)} alt="Preview" />
                </div>}
                <label>File: <input type="file" accept="image/*" required
                    onChange={e => setFile(e.target.files[0])} /></label>
            </div>
            <div>
                <label>Description: <input type="text" onChange={e => setDescription(e.target.value)} /></label>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
}
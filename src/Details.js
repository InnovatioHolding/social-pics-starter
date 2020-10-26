import React from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';
import { fakeFeed } from './fake-data';

export default function Details() {

    let { id } = useParams();

    const image = fakeFeed.find(i => i.id === id);

    return <div className="Details">
        <h2>Details</h2>
        {image && <>
            <img src={image.url} alt="" />
            <p><strong>@{image.userName}</strong> {image.description}</p>
        </>}
    </div>
}
import React from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { fakeFeed } from './fake-data';

export default function Feed() {

    const feed = fakeFeed;

    return <div className="Feed">
        <h2>Feed</h2>
        <div className="pics">
            {feed.map(p => <Link to={'/feed/' + p.id} key={p.id}>
                <div className="pic">
                    <img src={p.url} alt="" />
                </div>
            </Link>)}
        </div>
    </div>
}
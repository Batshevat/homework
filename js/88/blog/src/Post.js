import './Post.css'
import React from "react";

export default function Post({ post: { title, body } }) {
    return (
        <div className="post">
            <div className="title">{title}</div>
            <div className="body">{body}</div>
        </div>
    )
}
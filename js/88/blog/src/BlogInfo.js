import React from "react";
import { Link } from "react-router-dom";

export default function BlogInfo({blog, handleBlogSelected}) {
    const { name, website, company: { name: companyNAme, catchphrase, bs } } = blog;
    return (
        <Link to='/blog' className="blog" onClick={handleBlogSelected(blog)}>
            <div className="title">{name}</div>
            <div className="website">{website}</div>
            <div className="company">
                <div>{companyName}</div>
                <div>{catchPhrase}</div>
                <div>{bs}</div>
            </div>
        </Link >)
    )
}
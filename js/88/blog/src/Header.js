import React from 'react';
import 'Header.css';
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <Header>
            <h1>PCS Blogs</h1>
            <h2 id="title">...</h2>
            <nav>
                <ul>
                    <li><Link to='/' href="#" exact>BlogList</Link></li>
                </ul>
            </nav>
        </Header>
    )
}
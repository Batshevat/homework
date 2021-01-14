import './App.css';
import Header from './Header';
import BlogList from './blogList';
import Blog from './Blog';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    const [selectedBlog, setSelectedBlog] = useState();
    return (
        <BrowserRouter>
            <Header />
            <hr />
            <Switch>
                <Route path="/">
                    <BlogList handleBlogSelected={setSelectedBlog} />
                </Route>
                <Route path="/blog">
                    {selectedBlog && <Blog blog={selectedBlog} />}
                </Route>
                <Redirect from="/" to='/blogs' exact />
                <Route render={() => {
                    return (<>
                        <h1>Page Not Found</h1>
                        <Link to='/blogs'>Home</Link>
                    </>)
                }}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

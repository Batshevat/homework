import './App.css';
import Header from './Header';
import BlogList from './blogList';
import Blog from './Blog';
import React, { useState } from 'react';

function App() {
  const [selectedBlog, setSelectedBlog] = useState();
  return (
    <>
      <Header />
      <hr />
      <BlogList handleBlogSelected = {setSelectedBlog}/>
      <hr />
     {selectedBlog && <Blog blog={selectedBlog}/>}
    </>
  );
}

export default App;

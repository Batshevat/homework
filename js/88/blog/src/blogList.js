import React, { Component } from 'react';
import './blogList.css';


export default class BlogList extends Component {

    async componentDidMount() {
        state = { blogs: [] };
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error(`${response.statusCode} - ${response.statusText}`);
            }
            const blogs = await response.json();
            this.setState({
                blogs: blogs
            });


        } catch (err) {
            console.error(err);
        }
    }
    handleBlogSelected = (blog)=>{
        this.props.handleBlogSelected(blog);
    }
    render() {
        return (
            <div>
                {this.state.blogs.map(<BlogInfo blog={blog} key={blog.id} handleBlogSelected={
                    this.props.handleBlogSelected
                } />)}
            </div>
        )
    }
}
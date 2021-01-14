import React, { useEffect, useState } from 'react';
import Post from "./Post";

export default function Blog({ blog: { id } }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        (async () =>  try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${blog.id}`);
            if (!response.ok) {
                throw new Error(`${response.statusCode} - ${response.statusText}`);
            }
            const posts = await response.json();
            setPosts(posts);

        }
            catch (err) {
                console.error(err);
            }

        })();   
    }, [id]);
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
}
import React, { Component } from "react";

export default class Posts extends Component {

state = {
    posts: []
}

    async componentDidMount () {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        //console.log(resp);
        const data = await resp.json()
        //console.log(data);
        this.setState({posts: data})
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
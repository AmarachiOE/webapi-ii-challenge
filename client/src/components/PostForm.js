import React from 'react';

class PostForm extends React.Component {
    state = {
        // wrap input fields in an object (post obj)
        post: {
            title: "",
            contents: ""
        }
    };

    changeHandler = event => { 
        event.persist();
        this.setState(prevState => ({
            post: {
                ...prevState.post,
                [event.target.name]: event.target.value
            }
        }));

        // this.setState({
        //     post: {
        //         ...this.state.post,
        //         [event.target.name]: event.target.value
        //     }
        // })
    };

    // onSubmit function here:
    handleSubmit = (e) => {
        e.preventDefault();

        // invoke addFriend function from App.js
        this.props.addPost(e, this.state.post)

        // clears form after submitted
        this.setState({
            post: {
                title: "",
                contents: ""
            }
        })
        
    }

    render() {
        return (
            <div className="post-form-container">
                <h3>Add New Post</h3>
                <form className="post-form" onSubmit={this.handleSubmit}> 
                    <input
                        type="text"
                        name="title"
                        value={this.state.post.title}
                        onChange={this.changeHandler}
                        placeholder="Title"
                    />
                    <input
                        type="text"
                        name="contents"
                        value={this.state.post.contents}
                        onChange={this.changeHandler}
                        placeholder="Contents"
                    />
                    <button className="add-post-btn">Add Post</button>
                
                </form>
            </div>
        )
    }
}

export default PostForm;
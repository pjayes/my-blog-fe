import React, { useState } from "react";

const AddComment = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const addComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username, text: comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setComment('');
    };
    return (
        <div>
            <div>
                <label id="username">Username</label>
                <input id="username" value={username} onChange={event => setUsername(event.target.value)}></input>
            </div>
            <div>
                <label id="comment">Comment</label>
                <textarea id="comment" value={comment} onChange={event => setComment(event.target.value)}></textarea>
            </div>
            <div>
                <button onClick={() => addComment()}>Add Comment</button>
            </div>
        </div>
    );
}

export default AddComment;
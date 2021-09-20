import React from 'react';

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {

    const upvote = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post'
        });
        const body = await result.json();
        setArticleInfo(body);
    };

    return (
        <div>
            <button onClick={() => upvote()}>Upvote</button>
            <p>This article has been upvoted {upvotes} times</p>
        </div>
    );
}
    
export default UpvotesSection;
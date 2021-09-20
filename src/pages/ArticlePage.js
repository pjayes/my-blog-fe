import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddComment from '../components/AddComment';
import articleContent from '../article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);
    const [articleInfo, setArticleInfo] = useState({ upvotes: 3, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        };
        fetchData();
    }, [name]);

    if (!article) return <NotFoundPage />
    
    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <>
        <h1>{article.title}</h1>
        <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
        {article.content.map((content, key) => (
            <p key={key}>{content}</p>
        ))}
        
        <CommentsList comments={articleInfo.comments}/>
        <AddComment articleName={name} setArticleInfo={setArticleInfo}/>
        <h3>Other articles : </h3>
        <ArticlesList articles={otherArticles}/>
        </>
    )
}

export default ArticlePage;
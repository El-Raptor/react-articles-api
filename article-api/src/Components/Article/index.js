import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Article(props) {
    const [articles, setArticle] = useState([]);

    const articleList = articles.map((article) =>
        <li key={article['_id']}>
            <a href={article['web_url']}>{article['headline']['main']}</a>
        </li>
    );

    useEffect(() => {
        axios.get(
            "https://api.nytimes.com/svc/search/v2/articlesearch.json", {
            params: {
                'api-key': process.env.REACT_APP_SEARCH_ARTICLE_KEY,
                q: 'Soccer',
                fq: 'glocations: ("Brazil")',
                sort: 'newest'
            }
        }).then(response => {
            setArticle(response.data.response.docs)
        });
    }, []);

    return articleList;
}

export default Article;
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import GlobalStyles from './styles/GlobalStyles';
import Layout from './Components/Layout';

function App() {
  const [article, setArticle] = useState([]);

  let getArticle = async () => {
    let res = await axios.get(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json", {
        params: {
          'api-key': process.env.REACT_APP_SEARCH_ARTICLE_KEY,
          'q': 'Sacramento',
          'sort': 'newest'
        }
      }
    );
    setArticle(res.data.response.docs);
  };

  useEffect(() => {
    getArticle();
  });

  function Article(props) {
    const articleList = article.map((a) => 
      <li key={a['_id']}>
        <a href={a['web_url']}>{a['headline']['main']}</a>        
      </li>
    )

    return articleList;
  }

  if (!article) {
    return (
      <Fragment>
        <Layout>
          <h1>Nenhum artigo encontrado!</h1>
        </Layout>

        <GlobalStyles />
      </Fragment>
    )
  }
  else {
    return (
      <Fragment>
        <Layout >
          <Article />
        </Layout>

        <GlobalStyles />
      </Fragment>
    );
  }
}

export default App;

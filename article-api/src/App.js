import React, { Fragment } from 'react';

import Article from './Components/Article';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './Components/Layout';

function App() {
  return (
    <Fragment>
      <Layout >
        <Article />
      </Layout>

      <GlobalStyles />
    </Fragment>
  );
}

export default App;

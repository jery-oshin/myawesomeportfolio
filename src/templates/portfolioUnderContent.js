import React from 'react';

import Layout from '../components/layout';
import PortfolioItem from '../components/PortfolioItem';


const PageTemplate = ({pageContext}) => {
    return ( 
        <Layout>
            <h1 dangerouslySetInnerHTML={{__html: pageContext.title}}/>
            <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
            <PortfolioItem />
        </Layout>
     );
}
 
export default PageTemplate;
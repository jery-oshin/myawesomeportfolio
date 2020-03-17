import React from 'react';

import Layout from '../components/layout';

const PageTemplate = ({pageContext}) => {
    return ( 
        <Layout>
            <h1 dangerouslySetInnerHTML={{__html: pageContext.title}}/>
        </Layout>
     );
}
 
export default PageTemplate;
import React from 'react';

import {graphql, useStaticQuery} from 'gatsby';

import styled from 'styled-components';
const SiteInfoWrapper = styled.div`
    flex-grow: 1 ;
    color: white;
    margin: auto 0;
`;

const SiteTitle = styled.div`
    font-weight: bold;
`


const SiteInfo = () => {

    const data = useStaticQuery(graphql`
    
        query {	
            allWordpressSiteMetadata{
                edges{
                    node {
                        name
                        description
                    }
                }
            }
        }
    
    `)
    
    return ( 
        data.allWordpressSiteMetadata.edges.map( edge => (
            <SiteInfoWrapper key={edge.node.name}>
                    <SiteTitle>{edge.node.name}</SiteTitle>
                    <div>{edge.node.description}</div>
            </SiteInfoWrapper> 
        ))

     );
}
 
export default SiteInfo;
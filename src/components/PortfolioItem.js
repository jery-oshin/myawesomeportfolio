import React from 'react';

import {graphql, useStaticQuery, Link} from 'gatsby';

import styled from 'styled-components';

const PortfolioItemsWrapper = styled.div`

    display: flex;

`


const PortfolioItems = styled.div`

    width: 300px;
    border: 1px solid #efefef;
    padding: 16px;
    margin: 16px;

`;

const PortfolioImage = styled.img`

    max-width: 100%;

`;

const PortfolioItem = () => {

    const data = useStaticQuery(graphql`
        query 
        {
            allWordpressWpPortfolio {
                edges{
                    node{
                        id 
                        slug
                        title
                        excerpt
                        content
                        featured_media{
                            source_url
                        }
                    }
                }
            }
        }
    
    `)

    return ( 
        <PortfolioItemsWrapper>{
            data.allWordpressWpPortfolio.edges.map( item => (
                <PortfolioItems key={item.node.id}>
                    <h2>{item.node.title}</h2>
                    <PortfolioImage src={item.node.featured_media.source_url} alt="Thumbnail" />
                    <div dangerouslySetInnerHTML={{__html: item.node.excerpt}} />
                    <Link to={`/portfolio/${item.node.slug}`}>Read . . .</Link>
                </PortfolioItems>
            ))
        }</PortfolioItemsWrapper>
    )
}
 
export default PortfolioItem;
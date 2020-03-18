import React from 'react';

import {graphql, useStaticQuery, Link} from 'gatsby';

const PortfolioItem = () => {

    const data = useStaticQuery(graphql`
    query {
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
        <div>{
            data.allWordpressWpPortfolio.edges.map( item => (
                <div key={item.node.id}>
                    <h2>{item.node.title}</h2>
                    <img src={item.node.featured_media.source_url} alt="Thumbnail" />
                    <div dangerouslySetInnerHTML={{__html: item.node.excerpt}} />
                    <Link to={`/portfolio/${item.node.slug}`}></Link>
                </div>
            ) )
            }
        </div>
    )
}
 
export default PortfolioItem;
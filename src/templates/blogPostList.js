import React from 'react';

import Layout from '../components/layout';

import { Link } from 'gatsby';

import styled from 'styled-components';

const Pagination = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const PageNumber = styled(Link)`
    display: block;
    padding: 8px 16px;
`;

const PageNumnerWrapper = styled.div`
    border: 1px solid #eee;
    background: ${ props => props.isCurrentPage ? '#eeeeee' : 'white'}
`;

const BlogPostList = ({pageContext}) => {
    return ( 

        <Layout>
            {pageContext.posts.map( post => (
                <div>
                    <h3 dangerouslySetInnerHTML={{__html: post.node.title}} />
                    <small>
                        {post.node.date}
                    </small>
                    <p dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
                    <div>
                        <Link to={`/post/${post.node.slug}`}> Read More. . . </Link>
                    </div>

                </div>
            ))}
            <Pagination>
                {
                    Array.from({length: pageContext.numberOfPages}).map((page, index) => (
                        <PageNumnerWrapper key={index} isCurrentPage={index + 1 === pageContext.currentPage }>
                            <PageNumber to={index === 0 ? '/blog' : `/blog/${index + 1}`}>
                                {
                                    index + 1 
                                }
                            </PageNumber>
                        </PageNumnerWrapper> 
                    ))
                }
            </Pagination>
        </Layout>

     );
}
 
export default BlogPostList ;
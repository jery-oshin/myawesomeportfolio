import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

import SiteInfo from './siteInfo';

const MainMenuWrapper = styled.div`

    display: flex;
    background-color: rgb( 3, 27, 77 );

`

const MainMenuInner = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    width: 960px;
    height: 100%;
`

const MenuItem = styled(Link)`
    color: white;
    display: block;
    padding: 8px 16px;
`

const MainMenu = () => {
    const query = useStaticQuery( graphql`

    query {
        allWordpressWpApiMenusMenusItems(filter: {
            name:{
                eq: "Main menu"
            }}){
            edges{
                node{
                    name
                    items{
                    title
                    object_slug
                    }
                }
            }
        
        }
    }
`);
    
    return (
        <MainMenuWrapper>
            <MainMenuInner>
            <SiteInfo />
                {
                    query.allWordpressWpApiMenusMenusItems.edges.map( edge => (
                        edge.node.items.map( item => {
                            console.log(`/${item.object_slug}`);
                            return(
                            <div key={item.title}>
                                <MenuItem to={`/${item.object_slug}`} key={item.title}>
                                    {item.title}
                                </MenuItem>
                            </div>
                            )
                        })
                    ))
                }
            </MainMenuInner>
        </MainMenuWrapper> 
     );
}
 
export default MainMenu;
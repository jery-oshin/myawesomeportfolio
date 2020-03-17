import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

export const data = StaticQuery(graphql`

    query {
        allWordpressWpApiMenusMenusItems {
            edges{
                node{
                    items{
                        title
                        object_slug
                    }
                }
            }
        }
    }

`);

const MainMenu = (props) => {
    console.log(props);
    return (
        <div>
            Main Menu
        </div> 
     );
}
 
export default MainMenu;
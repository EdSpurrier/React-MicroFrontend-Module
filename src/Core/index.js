import React, { useEffect } from 'react'
import styled from 'styled-components'
import { GlobalStyles, Flex } from 'arktheme';
import useHostStore from "host/hostStore";
import { getMenuByLabel } from '../menus';
import useProjects from '../api/graphQL/state/useProjects';

/*
  For exporting as the root of a MFE App
*/


const Container = styled.div`

    ${GlobalStyles.Colors.Placeholder.Red}
    ${Flex};
    ${Flex.Center};


    ${props => {
        const theme = props.theme;

        return `
            /* Theme & Responsive Styles */

        `;
        }
    }

`;


const Core = () => {
  const { setPageTitle, setVerticalNavigation, setCurrentProjectId } = useHostStore();
  const verticalMenu = getMenuByLabel('boilerplate');

  const { state, actions } = useProjects();

  useEffect(()=>{
      setPageTitle('Boilerplate');
      setVerticalNavigation(verticalMenu.routeRoot, verticalMenu.links);
  },[])

  return (
    <Container>
        App Core
    </Container>
  )
}

export default Core
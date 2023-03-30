import React, { useEffect } from 'react'
import styled from 'styled-components'
import SectionHeader from '../../components/SectionHeader';
import { Button, Flex } from 'arktheme';
import useHostStore from "host/hostStore";
import { getMenuByLabel } from '../../menus';
import useProjects from '../../api/graphQL/state/useProjects';

const Container = styled.div`
    ${props => {
        const theme = props.theme;

        return `
            /* Theme & Responsive Styles */
            min-height: calc(100vh - ${theme.responsiveSizes.nav.main.height+1}px);
        `;
        }
    }

`;

const DataLine = styled.div`
    ${Flex.Flex}
    ${Flex.SpaceBetween}
`;

const DataLineBox = styled.div`
    ${Flex.Flex}
    padding: 10px;
    border: 1px solid black;
    width: 50%;
`;

const Home = () => {
    const { setPageTitle, setVerticalNavigation, setCurrentProjectId } = useHostStore();
    const verticalMenu = getMenuByLabel('boilerplate');

    const { state, actions } = useProjects();

  useEffect(()=>{
      setPageTitle('Boilerplate');
      setVerticalNavigation(verticalMenu.routeRoot, verticalMenu.links);
  },[])



  const showProjectData = (projectData) => {

    if (!projectData) {
      return [];
    };

    return (
      projectData.map((project, key) => (
        <DataLine key={key}>
            <DataLineBox>
                {project.id}
            </DataLineBox>
            <DataLineBox>
                {project.name}
            </DataLineBox>
        </DataLine>
      ))
    );
  }

  return (
    <Container>
        <SectionHeader title={'Home'}/>
        <Button type={"primary"}>CTA</Button>
        {showProjectData(state.projects?.projects)}
    </Container>
  )
}

export default Home
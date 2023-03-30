import React from 'react'
import styled from 'styled-components'
import { Flex, Title } from 'arktheme';

const Container = styled.div`
  padding: ${props => props.theme.responsiveSizes.sectionHeader.padding};
  ${Flex.Flex}
  ${Flex.SpaceBetween}
  ${Flex.CenterVertical}
`;




const SectionHeader = ({ title, children }) => {

  return (
    <Container>
      <Title level={3}>{title}</Title>
      {children}
    </Container>
  )
}

export default SectionHeader
import { gql } from '@apollo/client';

export const ProjectsQuery = gql`
    query {
        projects {
            name
            projectIdentifier
            category
            description
            projectAddress {
                street
                city
                state
                postCode
                country
            }
            budget
            projectStartDate
            projectEndDate
            isDeleted
            createdDate
            updatedDate
            createdBy
            updatedBy
            id
        }
    }
`;

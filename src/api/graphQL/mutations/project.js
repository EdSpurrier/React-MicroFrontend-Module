import { gql } from '@apollo/client';

export const EditProjectMutation = gql`
    mutation EditProject($input: EditProjectInput!) {
        editProject(input: $input) {
            isSuccessful
            message
        }
    }
`;

export const DeleteProjectMutation = gql`
    mutation DeleteProject($input: DeleteProjectInput!) {
        deleteProject(input: $input) {
            isSuccessful
            message
        }
    }
`;

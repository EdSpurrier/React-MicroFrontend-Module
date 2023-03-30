import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { DeleteProjectMutation } from '../../mutations/project';
import { ProjectsQuery } from '../../queries/project';
import { useMemo } from 'react';


export default () => {
  const { projectId } = useParams();
  const {data: projects, loading, error} = useQuery(ProjectsQuery);
  const [deleteProjectMutation, { loading: deletingProject }] = useMutation(DeleteProjectMutation);

  const project = useMemo(()=> {

    //  If no projectId provided return null
    if(!projectId) return null; 

    return projects?.projects?.find(project => project.id === projectId);
  }, [projects]);



  

  const deleteProject = (projectId) => {
    return deleteProjectMutation({
      variables: {
        input: {
          id: projectId
        }
      },
      update: (store, { data }) => {
      },
      refetchQueries: [{ query: ProjectsQuery }]
    }).catch(errors => {
      console.error('ERROR: deleteProject', errors);
      return false;
    }).then(()=>{
      return true;
    });

  }





  return {
    state: {
      projects,
      project,
      loading,
      error,
      deletingProject
    },
    actions: {
      deleteProject
    }
  };
};

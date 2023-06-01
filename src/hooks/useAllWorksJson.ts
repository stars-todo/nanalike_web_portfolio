import { useStaticQuery, graphql } from 'gatsby';
import { WorksType } from '@data-types/works';

export const useAllWorksJson = (): WorksType => {
  const { allWorksJson } = useStaticQuery(
    graphql`
      query getJson {
        allWorksJson {
          nodes {
            title
            skills
            place
            year
            isOngoing
            jsonId
          }
        }
      }
    `
  );
  return allWorksJson.nodes;
};

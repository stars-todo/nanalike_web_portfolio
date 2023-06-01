import React from 'react';
import PageLayout from '@layouts/PageLayout';
import WorkDetail from '@layouts/WorkDetail/WorkDetail';
import test from '@data/workboard/workboard.yaml';
import { graphql, useStaticQuery } from 'gatsby';

// const data = useStaticQuery(graphql`
//   query MyQuery {
//     allYaml(filter: { yamlId: { eq: "workboard" } }) {
//       nodes {
//         title
//         skills
//         link
//         yamlId
//       }
//     }
//   }
// `);
const WorkDetailPage = ({ data, params }: any) => {
  // const a = +props.params.relativeDirectory;
  // const data = useStaticQuery<any>(graphql`
  //   query allFileInfo {
  //     allYaml(filter: { yamlId: { eq: a } }) {
  //       nodes {
  //         title
  //         skills
  //         link
  //         yamlId
  //       }
  //     }
  //   }
  // `);
  console.log(data?.allYaml);
  return (
    <PageLayout>
      <WorkDetail id={params.relativeDirectory} data={data?.allYaml?.nodes[0]} />
    </PageLayout>
  );
};

export default WorkDetailPage;

export const query = () => graphql`
  query allYamlData($relativeDirectory: String!) {
    allYaml(filter: { yamlId: { eq: $relativeDirectory } }) {
      nodes {
        yamlId
        title
        skills
        link
        info
        flex {
          desc
          img
        }
        full {
          desc
          img
        }
      }
    }
  }
`;

export const Head = ({ data }: { data: any }) => (
  <title>
    나나라이크{` | ${data.allYaml?.nodes[0].title}` || ' | 웹퍼블리셔 포트폴리오'}
  </title>
);

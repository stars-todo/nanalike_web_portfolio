import React, { useEffect } from 'react';
import PageLayout from '@layouts/PageLayout';
import WorkDetail from '@layouts/WorkDetail/WorkDetail';
import { HeadFC, graphql } from 'gatsby';
import SEO from '@components/SEO/SEO';

const WorkDetailPage = ({ data, params }: any) => {
  console.log(data[0]);
  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [url]);

  return (
    <PageLayout>
      <WorkDetail
        id={params.relativeDirectory}
        data={data.allYaml.nodes[0]}
        images={data.images?.nodes}
      />
    </PageLayout>
  );
};

export default WorkDetailPage;

export const query = graphql`
  query ($relativeDirectory: String!) {
    allYaml(filter: { yamlId: { eq: $relativeDirectory } }) {
      nodes {
        full
        flex
        info
        link
        skills
        title
        yamlId
      }
    }
    images: allFile(
      sort: { name: ASC }
      filter: {
        relativeDirectory: { eq: $relativeDirectory }
        extension: { regex: "/(jpg|jpeg|png|gif)/" }
      }
    ) {
      nodes {
        relativePath
        publicURL
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH, formats: [AUTO, WEBP])
        }
      }
    }
  }
`;

export const Head: HeadFC = ({ data }: { data: any }) => (
  <SEO
    title={`nanalike | ${data?.allYaml?.nodes[0]?.title || ' | 웹 포트폴리오'}`}
    pathname={`work/${data?.allYaml?.nodes[0]?.yamlId}`}
  />
);

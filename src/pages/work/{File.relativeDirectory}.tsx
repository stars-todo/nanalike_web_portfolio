import React, { useEffect, useLayoutEffect } from 'react';
import PageLayout from '@layouts/PageLayout';
import WorkDetail from '@layouts/WorkDetail/WorkDetail';
import test from '@data/workboard/workboard.yaml';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const WorkDetailPage = ({ data, params }: any) => {
  console.log(params);
  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [url]);

  return (
    <PageLayout>
      <WorkDetail
        id={params.relativeDirectory}
        data={data?.file?.childYaml}
        images={data.images?.nodes}
      />
    </PageLayout>
  );
};

export default WorkDetailPage;

export const query = graphql`
  query ($relativeDirectory: String!) {
    file(relativeDirectory: { eq: $relativeDirectory }) {
      childYaml {
        yamlId
        title
        skills
        link
        info
        full
        flex
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
          gatsbyImageData(
            quality: 100
            layout: FULL_WIDTH
            placeholder: TRACED_SVG
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
`;

export const Head = ({ data }: { data: any }) => (
  <title>
    나나라이크{` | ${data.file?.childYaml?.title}` || ' | 웹퍼블리셔 포트폴리오'}
  </title>
);

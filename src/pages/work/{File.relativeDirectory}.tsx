import React from 'react';
import PageLayout from '@layouts/PageLayout';
import WorkDetail from '@layouts/WorkDetail/WorkDetail';

const WorkDetailPage = () => {
  return (
    <PageLayout>
      <WorkDetail />
    </PageLayout>
  );
};

export default WorkDetailPage;

// export const query = () => graphql`
//   query WorkDetail {
//     allFile(filter: { relativeDirectory: { ne: "" } }) {
//       nodes {
//         relativeDirectory
//       }
//     }
//   }
// `;

export const Head = ({ data }: { data: any }) => <title>(작업중) 상세</title>;

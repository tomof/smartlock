import * as React from "react";
import Layout from '../components/Layout'
import DialNumbers from '../components/DialNumbers'

const IndexPage = () => {
  return (
    <Layout title="SmartLock">
      <div css={{
        width: '100%',
        marginTop: '150px',
        textAlign: 'center',
      }}>
        <DialNumbers />
      </div>
    </Layout>
  )
};

export default IndexPage;

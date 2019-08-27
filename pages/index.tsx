import { useState } from 'react'
import Layout from '../components/Layout'
import DialNumbers from '../components/DialNumbers'

const IndexPage = () => {
  const [dialNumber] = useState(1234);
  return (
    <Layout title="SmartLock">
      <div css={{
        width: '100%',
        marginTop: '150px',
        textAlign: 'center',
      }}>
        <DialNumbers
          selectedNumber={dialNumber}
        />
      </div>
    </Layout>
  )
};

export default IndexPage;

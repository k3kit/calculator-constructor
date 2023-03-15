import React from 'react';
import { Layout } from './components/layout/Layout';
import { Constructor } from './components/Constructor/Constructor';
import { DropArea } from './components/DropArea/DropArea';
function App() {
  return (
    <Layout>
      <Constructor />
      <DropArea />
    </Layout>
  );
}

export default App;

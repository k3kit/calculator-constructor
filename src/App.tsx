import React from 'react';
import { Layout } from './components/layout/Layout';
import { Constructor } from './components/Constructor/Constructor';
import { DropArea } from './components/DropArea/DropArea';
import { useAppSelector } from './hooks/redux';
function App() {
  const { value } = useAppSelector((state) => state.mode);
  return (
    <Layout>
      <div style={{ minWidth: '240px' }}> {value ? <div></div> : <Constructor />}</div>

      <DropArea />
    </Layout>
  );
}

export default App;

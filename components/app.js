import React, { memo } from 'react';
import { GraphContextProvider } from '../contexts';

import { Container } from './app.style';

import GraphContent from '../components/graph';

const Graph = memo(() => {
  return (
    <GraphContextProvider>
      <GraphContent />
    </GraphContextProvider>
  );
});

function App() {
  return (
    <Container>
      <Graph />
    </Container>
  );
}
export default App;

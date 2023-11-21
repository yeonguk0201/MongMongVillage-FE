import { Route, Routes } from 'react-router-dom';
import { ROUTE_ARR } from './routes/Routes';

import Layout from './Layout';

function App() {
  return (
    <Routes>
      {ROUTE_ARR.map((el) => (
        <Route
          path={el.path}
          key={el.path}
          element={<Layout>{el.element}</Layout>}
        />
      ))}
    </Routes>
  );
}

export default App;

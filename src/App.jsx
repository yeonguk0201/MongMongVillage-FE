import { Route, Routes } from 'react-router-dom';
import { ROUTE_ARR } from './routes/Routes';
import { Header, Footer } from './components';

function App() {
  return (
    <Routes>
      {ROUTE_ARR.map((el) => (
        <Route
          path={el.path}
          key={el.path}
          element={
            <>
              <Header />
              {el.element}
              <Footer />
            </>
          }
        />
      ))}
    </Routes>
  );
}

export default App;

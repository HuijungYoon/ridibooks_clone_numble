import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Main />
            </AppLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;

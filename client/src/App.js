import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, Landing, Register } from "./pages";
import {
  Addjob,
  Alljobs,
  Profile,
  Stats,
  Sharedlayout,
  ProtectedRoute,
} from "./pages/dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Sharedlayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />}></Route>
          <Route path="all-jobs" element={<Alljobs />}></Route>
          <Route path="add-job" element={<Addjob />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//import { StartPageLoad } from './components/StartPageLoad';
import { SingAccount } from './pages/SingAccount';
import { Routes, Route } from "react-router-dom";
import { CreateAccount } from './pages/CreateAccount';

function App() {
  return (
    <Routes>
    <Route path="/" element={<SingAccount />} />
    <Route path="create" element={<CreateAccount />} />
  </Routes>
  );
}

export default App;

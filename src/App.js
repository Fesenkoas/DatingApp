//import { StartPageLoad } from './components/StartPageLoad';
import { SingAccount } from './pages/SingAccount';
import { Routes, Route } from "react-router-dom";
import { CreateAccount } from './pages/CreateAccount';
import { PageCreate } from './pages/PageCreate';
import { ProfileMatching } from './pages/ProfileMatching/ProfileMatching';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<SingAccount />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/register" element={<PageCreate />} />
        <Route path="/profile" element={<ProfileMatching />} />
      </Routes>
    </Provider>
  );
}

export default App;

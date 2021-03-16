import "./App.css";
import LoginButton from "./components/LoginButton/LoginButton";
import LogoutButton from "./components/LogoutButton/LogoutButton";
import Profile from "./components/Profile/Profile";
import { useAuth0 } from '@auth0/auth0-react';
import Loader from "./components/Loader/Loader";


function App() {
  const { isLoading } = useAuth0();

  if(isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;

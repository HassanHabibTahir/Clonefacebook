
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { useStateValue } from './Stateprovider';

function App() {
  const [{ user }, dispatch] = useStateValue()
  // const user = null
  console.log(user, "this is the Useer")
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app_body">
            <Sidebar />

            <Feed />
            <Widgets />
          </div>
        </>
      )}


    </div>
  );
}

export default App;
// https://dev.to/kiransethu46/top-5-javascript-projects-for-resume-8d6
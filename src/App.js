import logo from './logo.svg';
import './App.css';
import InterMarks from './components/InterMarks';

function App() {
  return (
  <div className='App'>
    <Header></Header>
    <InterMarks></InterMarks>
  
  </div>
  );
}

 let loggedIn = true;
 function Header() {
  return(
    <nav className='nav-bar'> 
    <ul>
      <li>HOME</li>
      <li>ABOUT US</li>
      <li>CONTACT US</li>
      {
        loggedIn?(<li>LOGIN</li>):(<li>LOGOUT</li>)
      }
    </ul>
    </nav>
  )
 }

export default App;

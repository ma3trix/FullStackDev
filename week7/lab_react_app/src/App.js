import logo from './logo.svg';
import Name, {  } from './Name';
import Welcome, {  } from './components/welcome/Welcome';
import Student from './components/student/Student';

function App() {
  return (
  <>
    <h2>Malik Adebiyi</h2>
    <Welcome/>
    <Name fnm="Malik" lnm="Adebiyi"/>
    <Name fnm="M" lnm="A"/>
    <Student college="GBC"/>
  </>);
 
  
}

export default App;

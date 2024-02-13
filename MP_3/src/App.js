import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//główne komponenty
import Navigation from './components/fragments/Navigation';
import Footer from './components/fragments/Footer';

//widoki
import MainContent from './components/other/MainContent';
import EmployeeList from './components/employee/EmployeeList';

function App() {
  return (
    <>
      <Navigation />
      <Router>

        <Switch>

        <Route path="/employees">
        <EmployeeList />
        </Route>

        <Route path="/">
        <MainContent />
        </Route>
       
        </Switch>
  
      </Router>
      <Footer />
    </>
  );
}

export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Navbar, Nav, NavDropdown,
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Category from './Category';
import Journal from './Journal'
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';


function App() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">
              <AccountBalanceWalletRoundedIcon />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/journal">Journal</Nav.Link>
            <Nav.Link href="/category">CategoryManager</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/journal">
          <Journal />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/">
          <Journal />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;

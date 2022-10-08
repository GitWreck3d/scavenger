import logo from './logo.svg';
import Navbar from './Navbar';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

/* src/App.js */
function App({ signOut, user }) {
  // Todo logic here

  return (
    <>
      {/* Add Todo JSX here  */}
      <Navbar></Navbar>
      <div className="content">
        <Heading level={1}>Hello {user.username}</Heading>
        <Button onClick={signOut}>Sign out</Button>
      </div>
    </>
  );
}

export default withAuthenticator(App);

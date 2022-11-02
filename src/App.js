import logo from './logo.svg';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import CustomAuthentiator from './CustomAuthenticator';
import Database from './Database'
import { useState } from 'react';
import EmailForm from './EmailForm';
import SendEmail from './sendEmail';

/* src/App.js */
<<<<<<< Updated upstream
const formFields = {
  signIn: {
    username: {
      labelHidden: false,
      placeholder: 'Enter your username here',
      isRequired: true,
      label: 'Username:'
    },
  },
}
function App({ signOut, user }) {
=======
function App({ signOut, user, data }) {
>>>>>>> Stashed changes
  // Todo logic here

  return (
    <>



      {/* Add Todo JSX here  */}
<<<<<<< Updated upstream
     <CustomAuthentiator>

     </CustomAuthentiator>

      <Database />
      <EmailForm />
      <SendEmail />
=======
      <Heading area={'auto'} margin={'initial'} color={'#594F4F'} level={5}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
>>>>>>> Stashed changes
    </>
  );
}

export default App;
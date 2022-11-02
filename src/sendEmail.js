
import React from 'react';
import ReactDOM from 'react-dom/client';
import SendEmailCommand from '@aws-sdk/client-ses';
import sesClient from './libs/sesClient.js';
import EmailForm from './EmailForm.jsx';
import NavBar2 from './ui-components/NavBar2.jsx';

//emails are sent from this email address
const sourceEmail = 'smcken16@students.kennesaw.edu';

function sendEmail(){
//This creates and sends an email with user input as params
const createSendEmailCommand = (toAddress, fromAddress, subject, message) => {
  return new SendEmailCommand({
    Destination: {
      /* required */
      CcAddresses: [
        /* more items */
      ],
      ToAddresses: [
        toAddress,
        /* more To-email addresses */
      ],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: "UTF-8",
          Data: message,
        },
        Text: {
          Charset: "UTF-8",
          Data: message,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [
      /* more items */
    ],
  });
};

//creates object from user input to send to the above method
document.getElementById("sendEmail").onClick = async () => {
  const sendEmailCommand = createSendEmailCommand(
   sourceEmail,
   document.getElementById('recipient').value,
   document.getElementById('subject').value,
   document.getElementById('message').value,
  );

  try {
    return await sesClient.send(sendEmailCommand);
  } catch (e) {
    console.error("Failed to send email.");
    return e;
  }
};  
}
export default sendEmail();
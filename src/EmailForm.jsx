import React from 'react';
import ReactDOM from 'react-dom/client';
import  SendEmailCommand  from '@aws-sdk/client-ses';
import  sesClient  from './libs/sesClient.js';


//something stackOverflow told me to do idfk tbh
// var AWS = require('aws-sdk');
// AWS.config.update({region: 'us-east-1'});
// const SNS = new AWS.SNS({apiVersion: '2010-03-31'});

function EmailForm(){

  //This is the actual form 
  <>
<form>
  {/* Email Recipient */}
  <label for="recipient">To: </label>
  <input type="email" id="recipient" name="recipient" /><br /><br />

  {/* Subject */}
  <label for="subject">Subject: </label>
  <input type="text" id="subject" name="subject" /><br /><br />

  {/* Email Body */}
  <label for="body">Message: </label>
  <textarea id="body" name="body" rows="5" cols="33"></textarea><br /><br />

  {/* Buttons */}
  <button id="sendEmail">Submit</button>
  <button id="cancel">Cancel</button>
</form> 
</>
}
export default EmailForm();

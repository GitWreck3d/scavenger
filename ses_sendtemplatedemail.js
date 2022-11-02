// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

//source email
const sourceEmail = 'smcken16@students.kennesaw.edu'

//INPUT TEXTBOX INFO HERE
//vars to hold user information
const userName = document.getElementById('textbox-id').value;
const userEmail = document.getElementById('textbox-id').value;



await ses
  .sendEmail({
    Destination:{
      ToAddresses: [userEmail],
    },
    Source: sourceEmail,
    Message: {
      Subject: {Data : document.getElementById('textbox-id').value},
      Body:{
        Text:{
          Data: document.getElementById('textbox-id').value,
        }
      }
    }
  })
.promise()

// // Create sendTemplatedEmail params 
// var params = {
//   Destination: { /* required */
//     CcAddresses: [
//       'EMAIL_ADDRESS',
//       /* more CC email addresses */
//     ],
//     ToAddresses: [
//       userEmail,
//       /* more To email addresses */
//     ]
//   },
//   Source: sourceEmail, /* required */
//   Template: 'TEMPLATE_NAME', /* required */
//   TemplateData: '{ \"REPLACEMENT_TAG_NAME\":\"REPLACEMENT_VALUE\" }', /* required */
//   ReplyToAddresses: [
//     sourceEmail,
//   ],
// };


// // Create the promise and SES service object
// var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendTemplatedEmail(params).promise();

// // Handle promise's fulfilled/rejected states
// sendPromise.then(
//   function(data) {
//     console.log(data);
//   }).catch(
//     function(err) {
//     console.error(err, err.stack);
//   });


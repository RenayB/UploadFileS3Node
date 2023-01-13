const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });

var params = {
    Body: "testing", 
    Bucket: "rayfromca-test-bucket", 
    Key: "testfile"
   };
   s3.putObject(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);           // successful response
     /*
     data = {
      ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"", 
      VersionId: "Bvq0EDKxOcXLJXNo_Lkz37eM3R4pfzyQ"
     }
     */
   });

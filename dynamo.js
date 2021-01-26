const AWS = require("aws-sdk");
const awsConfig = {
    "region": process.env.region,
    "endpoint": process.env.dynamoEndpoint, 
    "accessKeyId": process.env.accesskeyid, 
    "secretAccessKey": process.env.secretaccesskey
};
AWS.config.update(awsConfig);

exports.aws = aws;

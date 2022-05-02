import AWS = require("aws-sdk");
import { config } from "./config/config";

// Configure AWS
// const credentials = new AWS.SharedIniFileCredentials({ profile: "default" });
const credentials = new AWS.Credentials({
  accessKeyId: config.aws_access_key,
  secretAccessKey: config.aws_secret,
});

AWS.config.credentials = credentials;

export const s3 = new AWS.S3({
  signatureVersion: "v4",
  region: config.aws_region,
  params: { Bucket: config.aws_media_bucket },
  credentials: {
    accessKeyId: config.aws_access_key,
    secretAccessKey: config.aws_secret,
  }
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;
  const url = s3.getSignedUrl("getObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
  console.log(url);

  return url;
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;

  const url = s3.getSignedUrl("putObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
  console.log(url);

  return url;

  // return s3.getSignedUrl("putObject", {
  //   Bucket: config.aws_media_bucket,
  //   Key: key,
  //   Expires: signedUrlExpireSeconds,
  // });
}

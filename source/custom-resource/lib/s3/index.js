/*********************************************************************************************************************
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

const AWS = require("aws-sdk");

let PutNotification = async (config) => {
  const s3 = new AWS.S3({ customUserAgent: process.env.SOLUTION_IDENTIFIER });

  let params;

  switch (config.WorkflowTrigger) {
    case "VideoFile":
      params = {
        Bucket: config.Source,
        NotificationConfiguration: {
          LambdaFunctionConfigurations: [
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".mpg",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".mp4",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".m4v",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".mov",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".m2ts",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".wmv",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".mxf",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".mkv",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".m3u8",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".mpeg",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".webm",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".h264",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".MPG",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".MP4",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".M4V",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".MOV",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".M2TS",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".WMV",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".MXF",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".MKV",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".M3U8",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".MPEG",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".WEBM",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: ".H264",
                    },
                    {
                      Name: "prefix",
                      Value: "original/",
                    },
                  ],
                },
              },
            },
          ],
        },
      };

      console.log(`Configuring S3 event for ${config.WorkflowTrigger}`);
      await s3.putBucketNotificationConfiguration(params).promise();
      break;

    case "MetadataFile":
      params = {
        Bucket: config.Source,
        NotificationConfiguration: {
          LambdaFunctionConfigurations: [
            {
              Events: ["s3:ObjectCreated:*"],
              LambdaFunctionArn: config.IngestArn,
              Filter: {
                Key: {
                  FilterRules: [
                    {
                      Name: "suffix",
                      Value: "json",
                    },
                  ],
                },
              },
            },
          ],
        },
      };

      console.log(`Configuring S3 event for ${config.WorkflowTrigger}`);
      await s3.putBucketNotificationConfiguration(params).promise();
      break;

    default:
      throw new Error(`Unknown WorkflowTrigger: ${config.WorkflowTrigger}`);
  }

  return "success";
};

module.exports = {
  putNotification: PutNotification,
};

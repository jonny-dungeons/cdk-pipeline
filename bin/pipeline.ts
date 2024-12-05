import * as cdk from "aws-cdk-lib";
import { MyPipelineStack } from "../lib/pipeline-stack";

const app = new cdk.App();
new MyPipelineStack(app, "MyPipelineStack", {
  env: {
    account: "586275239337",
    region: "us-east-1",
  },
});

app.synth();

import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { MyLambdaStack } from "./containerization-stack";

export class ContainerizationStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props?: cdk.StageProps) {
    super(scope, id, props);

    const lambdaStack = new MyLambdaStack(this, "LambdaStack");
  }
}

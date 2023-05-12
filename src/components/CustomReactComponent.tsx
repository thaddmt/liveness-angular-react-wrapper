import { FaceLivenessDetector } from '@aws-amplify/ui-react-liveness';
import { Amplify } from 'aws-amplify';
import * as React from 'react';
import { FunctionComponent } from 'react';

Amplify.configure({
    "aws_cognito_region": "us-east-2", // (required) - Region where Amazon Cognito project was created
    "aws_cognito_identity_pool_id": "us-east-2:xxxx-xxxxx-xxxxx-xxxxx", // (required) - the pool region should match the cognito region
});

export interface IMyComponentProps {
}

export const CustomReactComponent: FunctionComponent<IMyComponentProps> = (props: IMyComponentProps) => {
    return (
        <div id="container">
            <FaceLivenessDetector
                sessionId={'placeholder-value'} // TODO: Replace this with a real response from your backend
                region={'us-east-1'}
                onAnalysisComplete={async () => { }} // TODO: Replace this with a real callback
            />
        </div>
    );
};

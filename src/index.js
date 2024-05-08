import * as core from '@actions/core';
import * as github from '@actions/github';

function greet() {
    try {
        // `who-to-greet` input defined in action metadata file
        const nameToGreet = core.getInput('who-to-greet');
        console.log(`Hi ${nameToGreet}, this is v0.7`);
        const time = (new Date()).toTimeString();
        core.setOutput("time", time);
        // Get the JSON webhook payload for the event that triggered the workflow
        const payload = JSON.stringify(github.context.payload, undefined, 2)
        console.log(`The event payload: ${payload}`);
    } catch (error) {
        if (error instanceof Error) {
            core.setFailed(error.message); // Properly log the error message and fail the action
        } else {
            console.log('Failed to greet');
        }
    }
}

function main() {
    greet();
}

main();

export default greet;

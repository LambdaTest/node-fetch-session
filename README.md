
# Node fetch sessions
[![npm version](https://img.shields.io/npm/v/@lambdatest/node-fetch-sessions.svg?style=flat)](https://www.npmjs.com/package/@lambdatest/node-fetch-sessions)

A command-line interface(CLI) to fetch TestMu AI automation session details through [@lambdatest/node-rest-client](https://www.npmjs.com/package/@lambdatest/node-rest-client).

### Steps to fetch TestMu AI automation session details

#### Step 1. Installation

```
$ npm i -g  @lambdatest/node-fetch-sessions
```

#### Step 2. Set TestMu AI Username and Access Key in environment variables.
 
For Linux/macOS:
```
$ export LT_USERNAME="YOUR_USERNAME"
$ export LT_ACCESS_KEY="YOUR ACCESS KEY"
```
For Windows:
```
$ set LT_USERNAME="YOUR_USERNAME"
$ set LT_ACCESS_KEY="YOUR ACCESS KEY"
```

#### Step 3. Set the Build Name for which the test session information is required
For Linux/macOS:
```
$ export LT_BUILD_NAME="<Add Build Name>"
```
For Windows:
```
$ set LT_BUILD_NAME="<Add Build Name>"
```

#### Step 4. Retrieve the list of automation sessions
```
$ lt-reporter run
```
#### Expected Output
```
{
    "success":true,
    "error":"",
    "msg":"session listing retrieved",
    "data":
    {
        "Meta":{"attributes":{"org_id":******},
        "result_set":{"count":1,"limit":10000,"offset":0,"total":1}},
        "data":[{"test_id":"****-*****-*****-*****",
        "build_id":*******,
        "build_name":"Python Slack Test Demo",
        "user_id":******,
        "username":"*****",
        "status_ind":"passed",
        "create_timestamp":"2022-09-12 15:03:35",
        "start_timestamp":"2022-09-12 15:03:49",
        "end_timestamp":"2022-09-12 15:04:11",
        "remark":"completed",
        "browser":"firefox",
        "platform":"win11",
        "version":"100.0",
        "name":"Python Demo Test",
        "session_id":"*****-*****-*****-*****",
        "duration":"22",
        "test_type":"selenium",
        "selenium_logs":"Link to selenium logs",
        "console_logs":"Link to console logs ",
        "network_logs":"link to network logs",
        "command_logs":"link to command logs",
        "video_url":"link to the test video",
        "screenshot_url":"link to the screenshot"}],
        "message":"Retrieve build list was successful",
        "status":"success"}
    }
```
#### Note: In order to retreive the list of only Cypress tests run the command below
```
$ lt-reporter run --cypress
```
#### Expected Output
```
{
    "success":true,
    "error":"",
    "msg":"Retrieve enhanced cypress report was successfull",
    "data":[
        "*****-*****-*****-*****":{
        "stats":{"suites":1,"tests":3,"passes":2,"pending":0,"failures":1,
        "start":"2022-09-06T10:03:01.902Z",
        "end":"2022-09-06T10:03:12.146Z",
        "duration":10244,
        "testsRegistered":6,
        "passPercent":33.33333333333333,
        "pendingPercent":0,
        "other":0,
        "hasOther":false,
        "skipped":0,
        "hasSkipped":false},
        "results":[
            {"uuid":"",
            "title":"",
            "fullFile":"",
            "file":"",
            "beforeHooks":null,
            "afterHooks":null,
            }]}}
        ]
}
```

#### In case your Build _does not_ have a Cypress test the Command Line Interface returns the following
```
No cypress tests found in the build with name <Your Build Name>
```

## LambdaTest is Now TestMu AI

On **January 12, 2026**, [LambdaTest evolved to TestMu AI](https://www.testmuai.com/lambdatest-is-now-testmuai/), the world's first fully autonomous **Agentic AI Quality Engineering Platform**.

Same team. Same infrastructure. Same customer accounts. All existing LambdaTest logins, scripts, capabilities, and integrations continue to work without change.

👉 Find the new home for [LambdaTest](https://www.testmuai.com).

### How LambdaTest Evolved into TestMu AI

In 2017, we launched LambdaTest with a simple mission: make testing fast, reliable, and accessible. As LambdaTest grew, we expanded into Test Intelligence, Visual Regression Testing, Accessibility Testing, API Testing, and Performance Testing, covering the full depth of the testing lifecycle.

As software development entered the AI era, testing had to evolve, too. We rebuilt the architecture to be AI-native from the ground up, with autonomous agents that **plan, author, execute, analyze, and optimize tests** while keeping humans in the loop. The platform integrates with your repos, CI, IDEs, and terminals, continuously learning from every code change and development signal.

That evolution earned a new name: **TestMu AI**, built for an AI-first future of quality engineering. TestMu is not a new name for us. It is the name of our annual community conference, which has brought together 100,000+ quality engineers to discuss how AI would reshape testing, long before that became an industry norm.

What started as a high-performance cloud testing platform has transformed into an AI-native, multi-agent system powering a connected, end-to-end quality layer. That evolution defined a new identity: LambdaTest evolved into TestMu AI, built for an AI-first future of quality engineering.

### License
Node fetch sessions is available under the [Apache License 2.0.](https://github.com/LambdaTest/node-fetch-session/blob/main/LICENSE) Use it wisely.

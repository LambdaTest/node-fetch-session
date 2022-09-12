
![LambdaTest Logo](https://www.lambdatest.com/resources/images/logos/logo.svg)

# Node fetch sessions

A command-line interface(CLI) to fetch [LambdaTest](https://automation.lambdatest.com/build) automation session details through [@lambdatest/node-rest-client](https://www.npmjs.com/package/@lambdatest/node-rest-client).

### Steps to fetch LambdaTest automation session details

#### Step 1. Installation

```
$ npm i -g  @lambdatest/node-fetch-sessions
```

#### Step 2. Set LambdaTest Username and Access Key in environment variables.
 
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

#### Step 3. Set Build Name for which the test session information is required
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
$ fetch-Lt-sessions
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
$ fetch-Lt-sessions --enhancedCyReport
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
### License
Node fetch sessions is available under the [Apache License 2.0.](https://github.com/LambdaTest/node-fetch-session/blob/main/LICENSE) Use it wisely.

### About LambdaTest
[LambdaTest](https://www.lambdatest.com/) is a leading test execution and orchestration platform that is fast, reliable, scalable, and secure. It allows users to run both manual and automated testing of web and mobile apps across 3000+ different browsers, operating systems, and real device combinations. Using LambdaTest, businesses can ensure quicker developer feedback and hence achieve faster go to market. Over 500 enterprises and 1 Million + users across 130+ countries rely on LambdaTest for their testing needs.

#### Features
- Run Selenium, Cypress, Puppeteer, Playwright, and Appium automation tests across 3000+ real desktop and mobile environments.
- Real-time cross browser testing on 3000+ environments.
- Test on Real device cloud
- Blazing fast test automation with HyperExecute
- Accelerate testing, shorten job times and get faster feedback on code changes with Test At Scale.
- Smart Visual Regression Testing on cloud
- 120+ third-party integrations with your favorite tool for CI/CD, Project Management, Codeless Automation, and more.
- Automated Screenshot testing across multiple browsers in a single click.
- Local testing of web and mobile apps.
- Online Accessibility Testing across 3000+ desktop and mobile browsers, browser versions, and operating systems.
- Geolocation testing of web and mobile apps across 53+ countries.
- LT Browser - for responsive testing across 50+ pre-installed mobile, tablets, desktop, and laptop viewports


#!/usr/bin/env node

const { filterCyTests } = require("./lib/helpers/utils");
const { fetchCyEnhancedReport } = require("./lib/helpers/utils/cypress");

const ltClient = require("@lambdatest/node-rest-client");

const fetchSession = async (argv) => {
    // read credentials from env

    if (!process.env.LT_ACCESS_KEY || !process.env.LT_USERNAME) {
        console.log("Access and username is required");
        throw new Error("User name and Access Key is required parameter");
    }

    // read build name from env
    if (!process.env.LT_BUILD_NAME) {
        console.log(" Please set Build name to env <LT_BUILD_NAME>");
        throw new Error("Build name is required");
    }

    const autoClient = ltClient.AutomationClient({
        username: process.env.LT_USERNAME,
        accessKey: process.env.LT_ACCESS_KEY,
    });

    // using default options
        let options = {
            buildLimt: 20,
            buildName: process.env.LT_BUILD_NAME,
            sessionParams: {
                limit: 10000,
            },
        };

    // fetch enhanced cypress tests data
    const fetchEnhancedCyReport = argv && argv.cypress;

    const data = await autoClient.getSessionsOfBuild(options);

    if (!fetchEnhancedCyReport) {
        console.log(JSON.stringify(data));
        return;
    }

    // fetch cypress enhanced test data
    if (fetchEnhancedCyReport) {
        const cyTests = filterCyTests(data.data.data);
        if (cyTests.length == 0) {
            console.error(
                `No cypress tests found in the build with name ${process.env.LT_BUILD_NAME}`
            );
            return;
        }
        const cyReport = await fetchCyEnhancedReport(cyTests, autoClient);
        console.log(JSON.stringify(cyReport));
    }
    return;
};

const argv = require("yargs")
.usage("Usage: $0 <command> [options]")
.command("run", "Fetches LambdaTest automation session details", {}, function (argv) {
    fetchSession(argv);
  })
  .option('cypress', {
    alias: 'cy',
    description: 'Filter cypress test session details'
  })
  .parse();


#!/usr/bin/env node

const ltClient = require("@lambdatest/node-rest-client");

const fetchSession = async (options) => {
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

    if (!options) {
        // using default options
        options = {
            buildLimt: 20,
            buildName: process.env.LT_BUILD_NAME,
            sessionParams: {
                limit: 10000,
            },
        };
    }
    const data = await autoClient.getSessionsOfBuild(options);
    console.log(JSON.stringify(data));
    return;
};

fetchSession();
module.exports = fetchSession;

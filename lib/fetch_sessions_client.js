const ltClient = require("@lambdatest/node-rest-client");

module.exports = {
    FetchSession: function (options) {
        // read credentials from env
        const autoClient = ltClient.AutomationClient({
            username: process.env.LT_USERNAME,
            accessKey: process.env.LT_ACCESS_KEY,
        });
        
        if (!autoClient.username || !autoClient.accessKey){
            console.error("User name and Access is required")
            return
        }
        
        // read build name from env
        if (!process.env.LT_BUILD){
            console.error("Build name is required")
        }

        if (!options){
            // using default options
            options = {
                buildLimt: 20,
                buildName: process.env.LT_BUILD,
                sessionParams: {
                    limit: 10000,
                },
            }
        }
        const data = await autoClient.getSessionsOfBuild(options);
        console.log(JSON.stringify(data));
        return 

    },
};
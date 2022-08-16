const ltClient = require("@lambdatest/node-rest-client");
 module.exports.fetchSession = async (options) => {
        // read credentials from env
       
        if (!process.env.LT_ACCESS_KEY || !process.env.LT_USERNAME){
            console.log("Access and username is required")
            throw new Error("User name and Access is required parameter")
        }
        
        // read build name from env
        if (!process.env.LT_BUILD){
            console.log(" Please set Build name to env")
            throw new Error ("Build name is required")
        }

        const autoClient = ltClient.AutomationClient({
            username: process.env.LT_USERNAME,
            accessKey: process.env.LT_ACCESS_KEY,
        });

        if (!options){
            // using default options
            console.log("Setting default configurations")
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

    }

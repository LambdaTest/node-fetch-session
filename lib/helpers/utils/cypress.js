const _ = require("lodash");
const fetchCyEnhancedReport = async (testIDArr = [], ltClient) => {
    // structure of response
    // const data = {
    //     success,
    //     error,
    //     msg
    //     data,
    //     failedTests,
    // };
    if (!ltClient || !_.isArray(testIDArr)) {
        return {
            success: false,
            error: "Either cypress test ids is not an array or Automation client is not passed",
            msg: "",
            data: [],
        };
    }

    let cyReportArr = [];
    let result = [];
    let failedTests = [];
    const chunkSize = 20;
    // fetch cypress test enhanced report in chunks of 20
    for (let i = 0; i < testIDArr.length; i += chunkSize) {
        cyReportArr = [];
        const testChunk = testIDArr.slice(i, i + chunkSize);
        cyReportArr = _.map(testChunk, (elem) => {
            return ltClient.fetchCyEnhancedReport(elem);
        });
        try {
            const cyReport = await Promise.all(cyReportArr.map((p) => p.catch((e) => e)));
            _.forEach(cyReport, (report, index) => {
                if (!(report instanceof Error)) {
                    result.push({
                        [testChunk[index]]: report,
                    });
                } else {
                    // failed tests whose report can't be fetched
                    failedTests.push({
                        [testChunk[index]]: "unable to fetch detailed cypress report",
                    });
                }
            });
        } catch (e) {
            console.log("unable to fetch cypress enhanced report, exception", e);
            return {
                success: false,
                error: "Unable to fetch cypress enhanced report",
                msg: "",
                data: [],
                failedTests: [],
            };
        }
    }
    return {
        success: true,
        error: "",
        msg: "Retrieve enhanced cypress report was successfull",
        data: result,
        failedTests,
    };
};

module.exports = {
    fetchCyEnhancedReport,
};

const _ = require("lodash");
const { TEST_TYPE_CYPRESS } = require("../../const");

const filterCyTests = (tests = []) => {
    if (!_.isArray(tests)) {
        return [];
    }
    const cyTests = _.filter(tests, (test) => {
        if (test && test.test_type && test.test_type.toLowerCase() == TEST_TYPE_CYPRESS) {
            return true;
        }
        return false;
    });
    return _.map(cyTests, "test_id");
};

module.exports = {
    filterCyTests,
};

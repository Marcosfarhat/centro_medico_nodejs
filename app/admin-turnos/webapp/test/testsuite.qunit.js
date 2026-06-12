window.suite = function() {
    "use strict";

    var oSuite = new parent.jsUnitTestSuite(),
        sContextPath = location.pathname;

    oSuite.addTestPage(sContextPath.replace("testsuite.qunit.html", "integration/opaTests.qunit.html"));

    return oSuite;
};

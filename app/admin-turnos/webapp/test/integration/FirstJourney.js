sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();
            Then.onTheTurnosList.iSeeThisPage();
        });

        opaTest("Teardown", function (Given, When, Then) {
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});

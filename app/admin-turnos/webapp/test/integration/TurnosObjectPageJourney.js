sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("TurnosObjectPageObjectPage journey");

        opaTest("Navigate to TurnosObjectPageObjectPage", function (Given, When, Then) {
            Given.iStartMyApp();
            When.onTheTurnosList.onFilterBar().iExecuteSearch();
            Then.onTheTurnosList.onTable().iCheckRows();
            When.onTheTurnosList.onTable().iPressRow(0);
            Then.onTheTurnosObjectPage.iSeeThisPage();
        });

        opaTest("Check body sections of the Object Page", function (Given, When, Then) {
            Then.onTheTurnosObjectPage.iCheckSection({ section: "FieldGroup::DetalleTurno" });
            Then.onTheTurnosObjectPage.onForm({ section: "FieldGroup::DetalleTurno" }).iCheckField({ property: "fecha" });
            Then.onTheTurnosObjectPage.onForm({ section: "FieldGroup::DetalleTurno" }).iCheckField({ property: "estado" });
        });

        opaTest("Teardown", function (Given, When, Then) {
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});

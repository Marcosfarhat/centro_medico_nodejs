sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("TurnosListListReport journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();
            Then.onTheTurnosList.iSeeThisPage();
        });

        opaTest("Check table columns and actions", function (Given, When, Then) {
            Then.onTheTurnosList.onTable().iCheckColumns(undefined, {
                "fecha":   { "header": "Fecha"    },
                "hora":    { "header": "Hora"     },
                "estado":  { "header": "Estado"   }
            });
        });

        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            When.onTheTurnosList.onFilterBar().iExecuteSearch();
            Then.onTheTurnosList.onTable().iCheckRows();
            When.onTheTurnosList.onTable().iPressRow(0);
            Then.onTheTurnosObjectPage.iSeeThisPage();
        });

        opaTest("Teardown", function (Given, When, Then) {
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});

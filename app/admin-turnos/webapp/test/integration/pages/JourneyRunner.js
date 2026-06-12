sap.ui.define([
    "sap/fe/test/JourneyRunner",
    "centro/medico/admin/adminturnos/test/integration/pages/TurnosList",
    "centro/medico/admin/adminturnos/test/integration/pages/TurnosObjectPage"
], function (JourneyRunner, TurnosList, TurnosObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('centro/medico/admin/adminturnos') + '/test/flpSandbox.html#centromedicoadminturnos-tile',
        pages: {
            onTheTurnosList: TurnosList,
            onTheTurnosObjectPage: TurnosObjectPage
        },
        async: true
    });

    return runner;
});

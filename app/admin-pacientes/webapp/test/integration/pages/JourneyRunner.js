sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"centro/medico/admin/adminpacientes/test/integration/pages/PacientesList",
	"centro/medico/admin/adminpacientes/test/integration/pages/PacientesObjectPage"
], function (JourneyRunner, PacientesList, PacientesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('centro/medico/admin/adminpacientes') + '/test/flp.html#app-preview',
        pages: {
			onThePacientesList: PacientesList,
			onThePacientesObjectPage: PacientesObjectPage
        },
        async: true
    });

    return runner;
});


/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/ui/demo/ui5/test/integration/NavigationJourney"
	], function () {
		QUnit.start();
	});
});

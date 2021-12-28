sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (
	ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui.demo.ui5",
		settings: {
			id: "ui5"
		},
		async: true
	}).placeAt('content')
});
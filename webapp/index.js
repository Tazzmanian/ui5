sap.ui.define([
	"sap/ui/core/mvc/XMLView",
	"sap/m/Button",
	"sap/m/MessageToast",
	"sap/m/Text",
], function (XMLView, Text, MessageToast, Button) {
	"use strict";

	// new Button({
	// 	text: "Ready...",
	// 	press: function () {
	// 		MessageToast.show("Hello World!");
	// 	}
	// }).placeAt("content");

	// new Text({
	// 	text: "Hello UI5!"
	// }).placeAt("content")

	// XMLView.create({
	// 	viewName:"sap.ui.demo.ui5.view.App"
	// }).then( function(oView) {
	// 	oView.placeAt("content");
	// });

	XMLView.create({
		viewName: "sap.ui.demo.ui5.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});
});
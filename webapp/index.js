sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast",
	"sap/m/Text"
], function (Button, MessageToast, Text) {
	"use strict";

	// new Button({
	// 	text: "Ready...",
	// 	press: function () {
	// 		MessageToast.show("Hello World!");
	// 	}
	// }).placeAt("content");

	new Text({
		text: "Hello UI5!"
	}).placeAt("content")

});
sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(
	Controller,
	MessageToast
) {
	"use strict";

	return Controller.extend("sap.ui.demo.ui5.controller.App", {
        onShowHello : function () {
            // show a native JavaScript alert
            MessageToast.show('Hello there')
         }
	});
});
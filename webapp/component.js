sap.ui.define([
	"sap/ui/base/ManagedObject",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
], function(
	ManagedObject,
	UIComponent,
	JSONModel,
	ResourceModel,
    HelloDialog
) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.ui5.Component", {
        metadata: {
            manifest: "json"
        },
        init: function() {
            // call init func of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data models
            const oData = {
                recipient: {
                    name: "UI5"
                }
            }
            const oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set Dialog
            this._helloDialog = new HelloDialog(this.getRootControl());
        },
        exit: function() {
            this._helloDialog.destroy();
            delete this._helloDialog;
        },

        openHelloDialog: function() {
            this._helloDialog.open();
        }
    })
});
sap.ui.define([
	"sap/ui/base/ManagedObject",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
    "sap/ui/Device"
], function(
	ManagedObject,
	UIComponent,
	JSONModel,
	ResourceModel,
	HelloDialog,
	Device
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

            // set device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

            // create the views based on the url/hash
			this.getRouter().initialize();
        },
        exit: function() {
            this._helloDialog.destroy();
            delete this._helloDialog;
        },

        openHelloDialog: function() {
            this._helloDialog.open();
        },
        getContentDensityClass : function () {
			if (!this._sContentDensityClass) {
				if (!Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		}
    })
});
sap.ui.define([
	"sap/ui/base/ManagedObject",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(
	ManagedObject,
	UIComponent,
	JSONModel,
	ResourceModel
) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.ui5.Component", {
        metadata: {
            rootView: {
                "viewName": "sap.ui.demo.ui5.view.App",
                "type": "XML",
                "async": true,
                "id": "app"
            }
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

            // set i18n model
            const i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.ui5.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.setModel(i18nModel, "i18n");
        }
    })
});
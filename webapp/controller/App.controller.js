sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (
    Controller,
    MessageToast
) {
    "use strict";

    return Controller.extend("sap.ui.demo.ui5.controller.App", {
        onOpenDialog: function() {
            this.getOwnerComponent().openHelloDialog();
        },
        onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
    });
});
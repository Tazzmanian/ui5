sap.ui.define([
	"sap/ui/base/ManagedObject",
  "sap/ui/core/Fragment",
  "sap/ui/core/syncStyleClass"
], function(
	ManagedObject,
	Fragment,
  syncStyleClass
) {
	"use strict";

	return ManagedObject.extend("sap.ui.demo.ui5.controller.HelloDialog", {
    constructor: function(oView) {
      this._oView = oView;
    },
    exit: function() {
      delete this._oView;
    },
    open: function() {
      const oView = this._oView;

      // create dialog lazily
      if (!oView.byId('helloDialog')) {
        const oFragmentController = {
          onCloseDialog: function() {
            oView.byId('helloDialog').close()
          }
        };

        Fragment.load({
          id: oView.getId(),
          name: "sap.ui.demo.ui5.view.HelloDialog",
          controller: oFragmentController
        }).then(function (oDialog) {
          // connect dialoog to the root view of the component
          oView.addDependent(oDialog);
          //forward compact/cozy style in dialog
          syncStyleClass(oView.getController().getOwnerComponent.getContentDensityClass(), oView, oDialog);
          oDialog.open();
        });
      } else {
        oView.byId('helloDialog').open();
      }
    }
	});
});
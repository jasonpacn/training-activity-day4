sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], 
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 * @param {typeof sap.m.MessageToast} MessageToast
 */
function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("com.training.exer1patigayon.controller.MainView", {
        onInit() {
        },
        onAddItem: function (){
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sMsg = oTextBundle.getText("addButtonMsg");
            this.fnDisplayMsg(sMsg);
        },


        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },

        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");
            var oCCLabel = this.getView().byId("idLblCC");
            var oCCInput = this.getView().byId("idInputCC");
            //show the mobile num field
            if (sSelectedKey === "GCASH") {
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
                oCCLabel.setVisible(false);
                oCCInput.setVisible(false);
            }
            //show credit card input for CC
            else if (sSelectedKey === "CC") {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
                oCCLabel.setVisible(true);
                oCCInput.setVisible(true);
            }
            //else(COD)
            else {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
                oCCLabel.setVisible(false);
                oCCInput.setVisible(false);
            }
        },
        onPressCheckout: function (){
            var oView = this.getView();
            var sFName = oView.byId("idInptFName").getValue().trim();
            var sLName = oView.byId("idInptLName").getValue().trim();

            if (sFName === "" && sLName === "") {
                MessageBox.error("Both First Name and Last Name are required.");
                return;
            }

            MessageToast.show("Checkout successful!");
        },



    });
});
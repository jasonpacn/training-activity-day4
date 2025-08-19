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
            let oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            let sMsg = oTextBundle.getText("addButtonMsg");
            this.fnDisplayMsg(sMsg);
        },


        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },

        onChangeMOP: function (oEvent) {
            let sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            let oMobileLabel = this.getView().byId("idLblPhone");
            let oMobileInput = this.getView().byId("idInputPhone");
            let oCCLabel = this.getView().byId("idLblCC");
            let oCCInput = this.getView().byId("idInputCC");

            MessageToast.show("You selected " + sSelectedKey);

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
            let oView = this.getView();
            let sFName = oView.byId("idInptFName").getValue().trim();
            let sLName = oView.byId("idInptLName").getValue().trim();

            let oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

            if (sFName === "" && sLName === "") {
                MessageBox.error(oBundle.getText("checkoutErrorMsg"));
                return;
            }

            MessageToast.show(oBundle.getText("checkoutSuccessMsg"));
        },



    });
});
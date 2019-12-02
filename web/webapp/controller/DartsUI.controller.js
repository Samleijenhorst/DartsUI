sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"dartsui5/web/web/model/formatter"
], function (Controller, JSONModel, MessageToast, formatter) {
	"use strict";

	return Controller.extend("dartsui5.web.web.controller.DartsUI", {
		formatter: formatter,

		onInit: function () {
			this.oDartsModel = new JSONModel({});
			this.getView().setModel(this.oDartsModel, "DartsModel");
		},

		onChange: function (oEvent) {
			if (oEvent.getParameter("newValue")) {
				$.ajax({
						url: "/api/501/" + oEvent.getParameter("newValue")
					})
					.done((results) => {
						this.oDartsModel.setProperty("/", results);
						this.oDartsModel.updateBindings();
					}).fail((error) => {
						MessageToast.show("Ongeldige invoer.")
					});
			} else {
				this.oDartsModel.setProperty("/", []);
				this.oDartsModel.updateBindings();
			}
		}
	});
});
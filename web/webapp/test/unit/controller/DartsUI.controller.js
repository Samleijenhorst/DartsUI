/*global QUnit*/

sap.ui.define([
	"dartsui5/web/web/controller/DartsUI.controller"
], function (Controller) {
	"use strict";

	QUnit.module("DartsUI Controller");

	QUnit.test("I should test the DartsUI controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
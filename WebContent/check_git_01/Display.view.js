sap.ui.jsview("check_git_01.Display", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf check_git_01.Display
	*/ 
	getControllerName : function() {
		return "check_git_01.Display";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf check_git_01.Display
	*/ 
	createContent : function(oController) {
		// create a simple Input field
		var oInput2 = new sap.ui.commons.TextField({
			id: 'input2',
			value : 'Hello World!',
			tooltip : 'Change the Text',
			width : '10em',
			change : function(){
				oInput2.setValueState(
					oInput2.getValue() != 'Hello World!' ? sap.ui.core.ValueState.Error : sap.ui.core.ValueState.None
				);
			}
		});

		//attach it to some element in the page
		oInput2.placeAt("content");
	}

});

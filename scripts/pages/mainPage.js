/* globals */
//TODO: include this file in onStart in pages/index.js Use the code below:
//include("pages/mainPage.js");
(function() {
    var mainPage = Pages.mainPage = new SMF.UI.Page({
        name: "mainPage",
        onKeyPress: mainPage_onKeyPress,
        onShow: mainPage_onShow
    });

    /**
     * Creates action(s) that are run when the user press the key of the devices.
     * @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
     * @this Pages.page2
     */
    function mainPage_onKeyPress(e) {
        if (e.keyCode === 4) {
            Application.exit();
        }
    }

    /**
     * Creates action(s) that are run when the page is appeared
     * @param {EventArguments} e Returns some attributes about the specified functions
     * @this Pages.page2
     */
    function mainPage_onShow() {
        SMF.UI.statusBar.visible = true;
        //type your here code
        var myTextBtn = new SMF.UI.TextButton({
    		width : '80%',
    		height : '10%',
    		left : '10%',
    		top : '20%',
    		text : "Bar Chart"
    	});
	
    	myTextBtn.onPressed = function(){
    	    Pages.barChartPage.show();
    	}
    	
         Pages.mainPage.add(myTextBtn);
         
        var myTextBtn2 = new SMF.UI.TextButton({
    		width : '80%',
    		height : '10%',
    		left : '10%',
    		top : '40%',
    		text : "Pie Chart"
    	});
	
    	myTextBtn2.onPressed = function(){
    	    Pages.pieChartPage.show();
    	}
    	
         Pages.mainPage.add(myTextBtn2);
         
         var myTextBtn3 = new SMF.UI.TextButton({
    		width : '80%',
    		height : '10%',
    		left : '10%',
    		top : '60%',
    		text : "Line Chart"
    	});
	
    	myTextBtn3.onPressed = function(){
    	    Pages.lineChartPage.show();
    	}
    	
         Pages.mainPage.add(myTextBtn3);
    }
})();
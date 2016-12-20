/* globals */
//TODO: include this file in onStart in pages/index.js Use the code below:
//include("pages/lineChartPage.js");
(function() {
    var lineChartPage = Pages.lineChartPage = new SMF.UI.Page({
        name: "lineChartPage",
        fillColor: "#EEEEEE",
        onKeyPress: lineChartPage_onKeyPress,
        onShow: lineChartPage_onShow
    });

    var label1 = new SMF.UI.Label({
		top : "10%",
		left : "10%",
		width : "80%",
		height : "10%",
		textAlignment : "center",
		text : "Smartface Line Chart",
		multipleLine : false
	});
	lineChartPage.add(label1);
    /**
     * Creates action(s) that are run when the user press the key of the devices.
     * @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
     * @this Pages.lineChartPage
     */
    function lineChartPage_onKeyPress(e) {
        if (e.keyCode === 4) {
            Application.exit();
        }
    }

	///////////////////////////////////////////////////////
    ///////////////////////Line Chart///////////////////////
    ///////////////////////////////////////////////////////
    
	//Create New Line Chart View Object
	/*
	Parameters	:
			1.Parameter : Paramater must be "Landroid/app/Activity;" 
	*/
	var lineChart = new SMFLineChart("Landroid/app/Activity;");

	//Set Frame Line Chart View Object
	/*
	Parameters	: 1.Parameter : Paramater must be json like that 
		{"left" : "0%","top" : "0%","width" : "100%","height" : "100%"} // Percent
		{"left" : 10, "top" : 500, "width" : 800, height" : "1000"}  // Pixel
		
	*/

	
	lineChart.setPosition({
		"left" : "0%",
        "top" : "20%",
        "width" : "100%",
        "height" : "50%"
	});
	
	
	//Set onError Function
	/*
     Return Values	:
			e.errorText  = Error Description Text
		 	e.errorCode  = Error Code
    	
     Error Codes	:
		   	Error Code : 1001 Error Text : Please check your position values
			Error Code : 1002 Error Text : X and Y data array length must be same
			Error Code : 1003 Error Text : Please check your R-G-B value (Must be between 0-255)
	*/
	lineChart.onError = function (e) {
	
	alert("Error Text : " + e.errorText);
	alert("Error Code : " + e.errorCode);
	
	};
	
	//Set onItemSelected Function
	/*
	 Return Values	:
			 e.index	 = Selected Item Array Index
			 e.x		 = Selected Item X Value
			 e.y		 = Selected Item Y Value
	*/
	lineChart.onItemSelected = function (e) {
		alert(
			"Index : " + e.index +
			" xValue : " + e.x +
			" yValue : " + e.y 
		);
	};
	

	
	//Set Color Line Chart View
	/*
	Parameters	:
			1. Parameter : Color Name must be Upper Case	"String" 
				Color Names : 
				RED, BLACK, BLUE, CYAN, GRAY, GREEN, MAGENTA, WHITE, YELLOW
	*/
	lineChart.setColorRGB(204,51,30);
	
	//Line Chart View add to Page
	lineChartPage.add(lineChart);
	
	///////////////////////////////////////////////////////
    ///////////////////////Line Chart///////////////////////
    ///////////////////////////////////////////////////////
	    
    /**
     * Creates action(s) that are run when the page is appeared
     * @param {EventArguments} e Returns some attributes about the specified functions
     * @this Pages.lineChartPage
     */
    function lineChartPage_onShow() {
    	SMF.UI.statusBar.visible = true;
        //type your here code
        var xArray = [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010];
		var yArray = [56,35.5,22.12,45.15,20.35,6.12,2.12,3.5,45.15,20.35];
		lineChart.setData(xArray,yArray);
    }
    
	var btnBack = new SMF.UI.TextButton({
		width : '80%',
		height : '10%',
		left : '10%',
		top : '80%',
		text : "BACK"
	});

	btnBack.onPressed = function(){
	   Pages.back();
	}
	
    Pages.lineChartPage.add(btnBack);
         
})();
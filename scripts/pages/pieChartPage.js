/* globals */
//TODO: include this file in onStart in pages/index.js Use the code below:
//include("pages/pieChartPage.js");
(function() {
    var pieChartPage = Pages.pieChartPage = new SMF.UI.Page({
        name: "pieChartPage",
        fillColor: "#EEEEEE",
        onKeyPress: pieChartPage_onKeyPress,
        onShow: pieChartPage_onShow
    });

    var label1 = new SMF.UI.Label({
		top : "10%",
		left : "10%",
		width : "80%",
		height : "10%",
		textAlignment : "center",
		text : "Smartface Pie Chart",
		multipleLine : false
	});
	pieChartPage.add(label1);
	
	///////////////////////////////////////////////////////
    ///////////////////////Pie Chart///////////////////////
    ///////////////////////////////////////////////////////
    
    /* 
        Parameters	:  1.Parameter : Paramater must be "Landroid/app/Activity;" 
    */
    var pieChart = new SMFPieChart("Landroid/app/Activity;");


    /*
	Parameters	: 1.Parameter : Paramater must be json like that 
		{"left" : "0%","top" : "0%","width" : "100%","height" : "100%"} // Percent
		{"left" : 10, "top" : 500, "width" : 800, height" : "1000"}  // Pixel
		
	*/
    pieChart.setPosition({
        "left" : "0%",
        "top" : "20%",
        "width" : "100%",
        "height" : "50%"
    });
    
    
    
    
     
    /*
        Return Values	:   e.index	  	 Selected Item Array Index
                            e.text		 Selected Item Text Value
                            e.value	  	 Selected Item Value

    */
    pieChart.onItemSelected = function (e) {
    
    alert(
			"Index : " + e.index +
			" Text : " + e.text +
			" Value : " + e.value
		);
    };
    
    
    /*
        Return Values	:   e.errorText  = Error Description Text
    	                    e.errorCode  = Error Code
    	                    
        Error Codes:
            Error Code : 1001 
            Error Text : Please check your position values
            Error Code : 1002 
            Error Text : Data and label array length must be same
            Error Code : 1003 
            Error Text : Data, label and color array length must be same


    */      
    pieChart.onError = function (e) {
    
    alert("Error Text : " + e.errorText);
    alert("Error Code : " + e.errorCode);
    
    };
    
    pieChartPage.add(pieChart);
    
    ///////////////////////////////////////////////////////
    ///////////////////////Pie Chart///////////////////////
    ///////////////////////////////////////////////////////
	    
	/**
    /**
     * Creates action(s) that are run when the user press the key of the devices.
     * @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
     * @this Pages.pieChartPage
     */
    function pieChartPage_onKeyPress(e) {
        if (e.keyCode === 4) {
            Application.exit();
        }
    }

    /**
     * Creates action(s) that are run when the page is appeared
     * @param {EventArguments} e Returns some attributes about the specified functions
     * @this Pages.pieChartPage
     */
    function pieChartPage_onShow() {
        SMF.UI.statusBar.visible = true;
        
        var xArray = [56,35.5,84];
        var yArray = ["Data 1","Data 2","Data 3"];
        var zArray = ["BLUE","GREEN","RED"];
        
        /* 
            Parameters	: 	 1. Parameter : Datas			"Array"
                             2. Parameter : Labels			"Array"
                             3. Parameter : Colors			"Array"
                             Color Names :
                             RED, BLACK, BLUE, CYAN, GRAY, GREEN, MAGENTA, WHITE, YELLOW

        */  
        pieChart.setDataWithColors(xArray,yArray,zArray);
        
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
    	
         Pages.pieChartPage.add(btnBack);
})();
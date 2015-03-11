
/* Merve Tucar, Internet and Web Systems I, Fall 2013*/


var mainView = Ti.UI.createView();


//FirstView Component Constructor
function FirstView() {
	
// First View for signup page
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'blue',
		text:'Already a member? Login here with your account!',
		height:'auto',
		width:'auto',
		top : '73%'
	});
	
	
	
	//Add behavior for UI
	label.addEventListener("click", function(e) {
		
		//mainView.animate({view:loginView, transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
		self.visible = false;
		loginView.visible = true;
		//LoginView.visible = true;
		//LoginView.open();
		
	});
	
	self.add(label);

	
	
	// Create a Button.
	var signupButton = Ti.UI.createButton({
		title : 'Sign up',
		height : '7.5%',
		width : '60%',
		top : '65%',
		backgroundColor: 'purple',
		color: 'white'
		
	});
	
	
	// Listen for click events.
	signupButton.addEventListener('click', function() {
		
		var request = Titanium.Network.createHTTPClient();
		var url = "http://10.0.2.2/IWSMobileProject.php";
		
		signupButton.enabled = false;
		
		
		
		if(signupPasswordTextField.value.length > 0 && signupEmailTextfield.value.length > 0)
		{
			
			
			request.open("POST", url);
			
			
			
			request.onload = function(){
				
				//alert(this.responseText);
				if(this.responseText == "signup_success")
				{
					alert("Sign Up Succeeded. Please login with your account");
					
					
				}
				else if(this.responseText == "signup_failed")
				{
					
					alert("Sign Up Failed");
					loginButton.enabled = true;
				}
				
				
			};
			
			
			var pass = signupPasswordTextField.value;	
			var email = signupEmailTextfield.value;
			request.send({"command" : "Signup" , "password": pass, "email" : email });
		}
		
		else{
			alert("Fields can't be empty");
			signupButton.enabled = true;
			
		}
	});

	
	
	var  signupPasswordTextField = Ti.UI.createTextField({
 		 borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 		 color: '#336699',
 		 width : '60%',
 		 height : '7.5%',
		 top : '58%',
		 passwordMask :'true',
		 hintText:'Password'
	});
	
		

	var  signupEmailTextfield = Ti.UI.createTextField({
 		 borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 		 color: '#336699',
 		 hintText:'E-mail',	
 		 width : '60%',
 		 height : '7.5%',
		 top : '50%'
		
	});
	
		var  signupNameTextfield= Ti.UI.createTextField({
 		 borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 		 color: '#336699',
 		 top: '30%', 
 		 width : '60%',
 		 height : '7.5%',
 		 top : '42%',
 		 hintText:'Name',
		 
		
	});
	

	var bmiLabel = Ti.UI.createLabel({
		color:'purple',
		text:'BMI Calculator',
		fontWeight:'bold',
		shadowColor: 'pink',
		shadowOffset: {x:3, y:3},
		font: { fontSize:34 },
		top : '31%',
		left:  '20%'
	});
	
	var bmiLabel2 = Ti.UI.createLabel({
		color:'pink',
		text:'Calculate your Body-Mass Index',
		shadowColor: 'pink',
		font: { fontSize:12 },
		top : '36%',
		left: '21%'
	});
	

	
	// Add to the parent view.
	var loginView = Ti.UI.createView({visible:false});
	
	
	function CreateLoginView()
	{
	
		var loginButton = Ti.UI.createButton({
		title : 'Login',
		height : '7.5%',
		width : '60%',
		top : '57%',
		backgroundColor: 'purple',
		color: 'white'
		
		
		
		
	});
	
	
	loginButton.addEventListener('click', function(e){
		
		var request = Titanium.Network.createHTTPClient();
		var url = "http://10.0.2.2/IWSMobileProject.php";
		
		loginButton.enabled = false;
		
		if(loginPasswordTextField.value.length > 0 && loginEmailTextfield.value.length > 0)
		{
			
			
			request.open("POST", url);
			
			
			
			request.onload = function(){
		
				if(this.responseText == "Login_success")
				{
					tabGroup.open();
					
					
				}
				else if(this.responseText == "Login_fail")
				{
					
					alert("login failed");
					loginButton.enabled = true;
				}
				
				
			};
			
			var pass = loginPasswordTextField.value;	
			var email = loginEmailTextfield.value;
			request.send({"command" : "Login" , "password": pass, "email" : email });
		}
		
		else{
			alert("fields can't be empty");
			loginButton.enabled = true;
			
		}
		
	});
	
	var  loginPasswordTextField = Ti.UI.createTextField({
 		 borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 		 color: '#336699',
 		 top: '50%', 
 		 width : '60%',
 		 height : '7.5%',
		 top : '50%',
		 passwordMask :'true',
		 hintText:'Password'
	});
	
		

	var  loginEmailTextfield = Ti.UI.createTextField({
 		 borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 		 color: '#336699',
 		 hintText:'E-mail',	
 		 width : '60%',
 		 height : '7.5%',
		 top : '42%'
		
	});
	
	var bmiLabel = Ti.UI.createLabel({
		color:'purple',
		text:'BMI Calculator',
		fontWeight:'bold',
		shadowColor: 'pink',
		shadowOffset: {x:3, y:3},
		font: { fontSize:34 },
		top : '31%',
		left:  '20%'
	});
	
	var bmiLabel2 = Ti.UI.createLabel({
		color:'pink',
		text:'Calculate your Body-Mass Index',
		shadowColor: 'pink',
		font: { fontSize:12 },
		top : '36%',
		left: '21%'
	});
	
	var backlabel = Ti.UI.createLabel({
		color:'blue',
		text:'Click here to go back Sign Up',
		height:'auto',
		width:'auto',
		top : '65%',
		
	});
	
	loginView.add(loginButton);
	loginView.add(loginEmailTextfield);
	loginView.add(loginPasswordTextField);
	loginView.add(bmiLabel);
	loginView.add(bmiLabel2);
	loginView.add(backlabel);
	
	backlabel.addEventListener("click", function(e){
		
		self.visible = true;
		loginView.visible = false;
	});
	

		
	}
	//LoginView function is above
	CreateLoginView();
	
	
	self.add(signupButton);
	self.add(signupEmailTextfield);
	self.add(signupPasswordTextField);
	self.add(bmiLabel);
	self.add(bmiLabel2);
	self.add(signupNameTextfield);


	
		
	var tabGroup = Titanium.UI.createTabGroup();
	
	
	
	var win1 = Titanium.UI.createWindow({  
    title:'BMI Calculator',
    backgroundColor:'white'
	});
	
	var win1View = Titanium.UI.createView();	
	var tab1 = Titanium.UI.createTab({  
	title:'BMI Calculator',
    backgroundColor:'grey',
	window:win1
	});
	win1.containingTab = tab1;
	
	 
	 var bmiLabelwin1 = Ti.UI.createLabel({
		color:'purple',
		text:'BMI Calculator',
		fontWeight:'bold',
		shadowColor: 'pink',
		shadowOffset: {x:3, y:3},
		font: { fontSize:35 },
		top : '15%',
		left:  '20%'
	});
	
	var bmiLabel2win1 = Ti.UI.createLabel({
		color:'pink',
		text:'Calculate your Body-Mass Index',
		shadowColor: 'pink',
		font: { fontSize:12 },
		top : '21%',
		left: '22%'
	});
	
	
	var heightLabel = Titanium.UI.createLabel({
		color:'purple',
		text:'Height',
		shadowColor: 'pink',
		font: { fontSize:20 },
		top : '31%',
		left: '10%'
	});
	

	var feet = Titanium.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 		color: '#336699',
 		left: '27%',
 		width : '27%',
 		height : '9%',
		top : '30%',
		hintText:'Feet'
	}); 
	
	var inches = Titanium.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color: '#336699',
		left: '57%',
 		width : '27%',
 		height : '9%',
		top : '30%',
		hintText:'Inches'
	}); 
	
	
	
	
	
	
	var weight = Titanium.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color: '#336699',
		left: '27%',
 		width : '27%',
 		height : '9%',
		top : '40%',
		hintText:'Pounds'
	}); 
	
		var weightLabel = Titanium.UI.createLabel({
		color:'purple',
		text:'Weight',
		shadowColor: 'pink',
		font: { fontSize:20 },
		top : '41%',
		left: '10%'
	});
	
	var calculateButton = Ti.UI.createButton({
		title : 'Calculate Your BMI',
		height : '7.5%',
		width : '45%',
		top : '50%',
		left: '40%',
		backgroundColor: 'purple',
		color: 'white'
		
	});
	
	function sendSquaredValue(feet, inches)
	{
		var feetfloat = parseFloat(feet.value);
		var inchfloat = parseFloat(inches.value);
		var temp1 = (feetfloat*12)+inchfloat;	
		var feetInchToCM = temp1*0.025;
		var temp2 = feetInchToCM*feetInchToCM;	
		return temp2;
	}
	
	calculateButton.addEventListener('click', function(e){
		
		
		resultLabel.text = 'Your BMI: ';
		var weightfloat = parseFloat(weight.value)*0.45;
		var bmi = weightfloat/sendSquaredValue(feet,inches);
		resultLabel2.text += bmi.toFixed(2)+"";
		
		
		
		if(bmi<18.5)
			resultLabel2.text += '\n Underweight';
	    else if(18.5<=bmi && bmi<=24.9)
	    	resultLabel2.text += '\n Normal Weight';
	    else if(24.9<=bmi && bmi<=29.9)
	    	resultLabel2.text += '\n Overweight';
	    else
	    	resultLabel2.text += '\n Obesity';
	    
	});
	
	var resultLabel = Titanium.UI.createLabel({
		color:'purple',
		shadowColor: 'pink',
		font: { fontSize:24 },
		top : '60%',
		left: '10%'
	});
	
	var resultLabel2 = Titanium.UI.createLabel({
		color:'pink',
		shadowColor: 'pink',
		font: { fontSize:24 },
		top : '60%',
		left: '35%'
	});
	
	
	 
	
	win1.add(win1View);
	win1View.add(feet);
	win1View.add(inches);
	win1View.add(weight);
	win1View.add(bmiLabelwin1);
	win1View.add(bmiLabel2win1);
	win1View.add(heightLabel);
	win1View.add(weightLabel);
	win1View.add(calculateButton);
	win1View.add(resultLabel);
	win1View.add(resultLabel2);

	//
	// create controls tab and root window
	//
	//var win2View = Titanium.UI.createView();
	
	var win2 = Titanium.UI.createWindow({  
    title:'Map',
    backgroundColor:'white'
	});
	var tab2 = Titanium.UI.createTab({  
	backgroundColor:'grey',
    title:'Map',
    window:win2
	});
	
	
	
	/*
	var mountainView = Titanium.Map.createAnnotation({
    latitude:37.390749,
    longitude:-122.081651,
    title:"Appcelerator Headquarters",
    subtitle:'Mountain View, CA',
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true,
    leftButton: '../images/appcelerator_small.png',
    myid:1 // Custom property to uniquely identify this annotation.
	});
	*/	
	var mapview = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:37.390749, longitude:-71,
             latitudeDelta:0.01, longitudeDelta:0.01},
    animate:true,
    regionFit:true,
    userLocation:true
	});
	
	//var Map = require('ti.map');
    //var mapview = Map.createView({mapType:Map.NORMAL_TYPE});

	win2.add(mapview);
	win2.containingTab = tab2;


	
		
		//
		//  add tabs
		//
	tabGroup.addTab(tab1);  
	tabGroup.addTab(tab2);  
		
		
		// open tab group


	
	
	mainView.add(self);
	mainView.add(loginView);

	
	return mainView;
	
}

module.exports = FirstView;

Merve Tucar, IWS I, Fall 2013

I developed Body-Mass Index Calculator application as I described the design details in the quiz we 
had. Repeatedly, I used Titanium Appcelaretor platform. A BMI calculator basically asks for height
and wight of the user, and then returns the category that the person's health condition belongs. 
The categories can be one of the followings "underweight, normal weight, overweight and obesity".

As it was expected, the following features were added to the application:
  
 	- "Where am I?" : I added this feature as "the map tab" to the application. The map feature can 
be seen within the tab group, at the end of the firstView file. Unfourtanetely, I wasn't able to see 
the output of neither this feature nor "What is there here and around" feature, since I used the Android emulator. 
The Android emulator or the web-view doesn't support the map-view screen. I wasn't able to test the app
within an Android phone; I don't have one.

	- "Who am I" : Signup and Login features were added and database connections are perfectly working.
	- "Where have I been?/What have I done" : Once a user signs up and calculates her/his BMI, 
BMI information of the user with that day's date are stored in the database. 
	- "What else were you able to do with these capabilities" : I created the calculator, user 
profile and map. 

You need Titanium SDK, php supported web server on localhost, mysql, and ti.map add module (can be 
found at :http://docs.appcelerator.com/titanium/3.0/#!/api/Modules.Map) to run the application.

Couple more notes related to FirstView.js for you to find what you are looking for in the code easily:

-FirstView() function contains Signup page feature
-CreateLoginView() function contains Login page feature
-Inside the tabGroup(), you can find the calculator code and map code & features
-Place FirstView.js file under your ui/Common directory.(After creating Titanium Single View Project)

Overall, it was a very fun project in which I learnt a great deal of technologies. Incompability with Andorid emulator
map and web was one of the limitations that I faced during the implementation. Also, the emulator
works very slow, and this was very time-consuming.

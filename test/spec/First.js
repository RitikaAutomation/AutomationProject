//-- To Lock a Device--
//driver.lock(5);

//--To Unlock a Device--
//driver.unlock(5);

//boolean value true / false
//driver.isLocked();

//Console log to print line
//To get Current Activity
console.log("Hello Ritzz", driver.getCurrentActivity());

//--To get Current Package
driver.getCurrentPackage();

//--To install Application into Device
driver.installApp(c://rit/flipkart.apk)

  //to check whether this app is installed or not package 
  driver.isAppInstalled(appId)

//to Terminate app
driver.terminateApp(appId)

//--To hide keyword 
driver.hideKeyboard()

//--To check keyboard is open or not true/false
driver.isKeyboardShown()

//--To open activity and start application
driver.startActivity(appPackage, appActivity, appWaitPackage, appWaitActivity, intentAction, intentCategory, intentFlags, optionalIntentArguments, dontStopAppOnReset)

//To get device time
driver.getDeviceTime()
13: 45 >> instagram open 
search >> mark 
13: 47(2 minutes)
  >> mark profile open >> post view 
 13 : 45 + 00: 60 >> 14: 45
 if (devucetime == 14: 45)
{
  start execution
}
//--To close the app
driver.closeApp()
//--To Start Recording
driver.startRecordingScreen()

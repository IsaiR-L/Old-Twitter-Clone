# Old-Twitter-Clone
Clone of original twitter using React Native Expo

--------------------------------------------------------------------------------------------------------------------------------------------------
PROJECT SCOPE:

GOAL: Make a copy of of the old Twitter before it became X using React Native Expo. Which allows us to make a old twitter copy for all platforms using only one code base.

UI/UX: The below link is a Figma creation with twitter UI/UX protoype that we will use as a guidline for our design. Of course the further we go we may want to add more features like dark mode for example but we can use this figma to help us visualize our goal and help us stay on track.

https://www.figma.com/proto/qarBVRG5P0GkJxDCwv7VTi/Twitter-UI-Screens--Community-?node-id=7-257&p=f&t=qVcImwSAtJ0Bw7od-1&scaling=min-zoom&content-scaling=fixed&page-id=4%3A1224

--------------------------------------------------------------------------------------------------------------------------------------------------
App Testing/Emulation Setup:

There are going to be two options for testing/viewing the app.

On a physical mobile device via Expo Go app

This will be the easiest way to be able to see/test the app and I would recommend it if you don't want to go through the whole process of setting up a emulator on your computer 

Requirements:
Android/iOS mobile device

Setup Steps:
Install Expo GO app from either App Store or Google Play store.

------------------------
Via Android/IOS Emulator

There are two option for emulators
Android Emulator

Requirements:
Download/update Android Studio
 Windows: https://developer.android.com/studio Mac: https://developer.android.com/studio
Setup For Windows: 
Open Android Studio Setup. Under Select components to install, select Android Studio and Android Virtual Device. Then, click Next.
In the Android Studio Setup Wizard, under Install Type, select Standard and click Next.
The Android Studio Setup Wizard will ask you to verify the settings, such as the version of Android SDK, platform-tools, and so on. Click Next after you have verified.
In the next window, accept licenses for all available components.5.After the tools installation is complete, configure the ANDROID_HOME environment variable: 
    Go to Windows Control Panel > User Accounts > User Accounts (again) > Change my environment variables and click New to create a new               ANDROID_HOME user variable.
NOTE: To find out your installed SDK location:
To find the location of the SDK in Android Studio manually, go to Settings > Languages & Frameworks > Android SDK. See the location next to Android SDK Location that is usually near the top of the page

   
To verify that the new environment variable is loaded, open PowerShell, and copy and paste the following command:
Get-ChildItem -Path Env:
The command will return a list of user environment variables. Check for Android_Home. If its there then the variable has been loaded 
To add platform-tools to the Path, go to Windows Control Panel > User Accounts > User Accounts (again) > Change my environment variables > Path > Edit > New and add the path to the platform-tools
NOTE: By default the platform-tools should be installed at the following location:
      %LOCALAPPDATA%\Android\Sdk\platform-tools
Verify that you can run adb from the PowerShell. To do this run the following command in powershell:
adb --version
If the command returns the version number of adb then the environment path is now setup

Now open Android studio again and navigate to the main screen of Android Studio
On the Android Studio main screen, click More Actions, then Virtual Device Manager in the dropdown menu
Click the Create device button(which can also be a plus sign on the screen)
Now choose the hardware you would like to emulate and select the OS version you would like to run on your emulated device and add any additional setting you would like to add to your emulated device. Only required setting are the device and device OS

Your Android emulation environment is now setup 
Setup For Mac: 

Launch Android Studios and setup account
On the main page click on more actions and select SDK manager
Go to Settings > Languages & Frameworks > Android SDK
Under SDK platforms tab choose/install latest android api version
Under SDK tools tab choose/install latest Android SDK Build-Tools and Android Emulator
Copy path listed in the box that says Android SDK Location towards top of page.
Click Apply and OK to install the Android SDK and related build tools
Open your terminal and enter the following commands:
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/platform-tools
Now reload the path environment variables in your current shell:
If you are using ZSH:
  source $HOME/.zshrc
If you are using BASH:
  source $HOME/.bashrc
NOTE: If you are unsure which you are using run this command to know which you are using:
    
echo $SHELL

Run the following command in your terminal:
adb version
If you see an output similar to the one below your path environment has been setup correctly
      Android Debug Bridge version 1.0.41
      Version 35.0.2-12147458
      Installed as /Users/isairl/Library/Android/sdk/platform-tools/adb
      Running on Darwin 24.3.0 (arm64)

NOTE: If you get no output or an error try rerunning steps 8 to 10 
Now that the environment path is setup go back to Android Studio and navigate to the main page and choose virtual device manager option from the more actions drop down menu
In the virtual device manager click create virtual device button(Can also be a plus sign in the top left corner)
Now choose the hardware you would like to emulate and select the OS version you would like to run on your emulated device and add any additional setting you would like to add to your emulated device. Only required setting are the device and device OS

Your android emulation is now ready

-----------------------
IOS Emulator

NOTE: A MAC device is required to run a IOS emulator 
Download/update XCode from MAC App Store
Add/setup account
Download/add IOS platform in Xcode under settings>components>Platform
Open your terminal
Install watchmen on your MAC by entering the following commands in your terminal:
brew install watchman
Your iOS emulator environment is now setup 

define({"0":{y:0,u:"../Content/AndroidIntroduction/DANUBE_WELCOME_ANDROID.htm",l:-1,t:"\n\t\t\tWelcome to the help\n\t\t",i:0.00419654118959014,a:"Welcome to the Dragon Medical SpeechKit Android edition help Dragon Medical SpeechKit enables you to add speech recognition functionality to your Android apps. We\u0027ve designed it to be easy for you to integrate and for end users to use. The service provided by Dragon Medical SpeechKit is guaranteed ..."},"1":{y:0,u:"../Content/New/WHATS_NEW.htm",l:-1,t:"What\u0027s new",i:0.00419654118959014,a:"For information specific to the current release, see the release notes provided with the SDK package. The release notes contain the following information: New in this version Solved issues Known issues Important information Software requirements End-of-support and end-of-life dates For an archive of ..."},"2":{y:0,u:"../Content/AndroidIntroduction/DANUBE_SETUP_ANDROID.htm",l:-1,t:"\n\t\t\tSetting up Dragon Medical SpeechKit",i:0.00478215035529921,a:"Requirements Development requirements Android SDK Java Development Kit (JDK) Android Studio Runtime requirements Android Note: For more information on supported and recommended Android versions and architecture compatibility, see the release notes delivered with the product. Important: Spell ..."},"3":{y:0,u:"../Content/AndroidIntroduction/DANUBE_GETTING_STARTED_ANDROID.htm",l:-1,t:"\n\t\t\tGetting started\n\t\t",i:0.00449379716062832,a:"About Dragon Medical SpeechKit Our aim is to help your users do their job more quickly by using the easiest form of interaction possible - speech. At the same time we understand the necessity of streamlining your development cycle. With a little preparation and a few easy steps we can help you ..."},"4":{y:0,u:"../Content/AndroidIntroduction/DANUBE_ACTIVITY_LIFECYCLE_ANDROID.htm",l:-1,t:"\n\t\t\tSpeech recognition activity life cycle\n\t\t",i:0.00598959557916014,a:"Make sure to be aware of the differences between the life cycle of the session object and your speech-enabled activities; they have important implications for the correct places to call various API methods. Session object lifetime The shared session object has a lifetime equal to that of your ..."},"5":{y:0,u:"../Content/Concepts/DANUBE_CONCEPTS_OVERVIEW.htm",l:-1,t:"\n\t\t\tConcepts - overview\n\t\t",i:0.00478215035529921,a:"For an explanation of Dragon Medical SpeechKit concepts, see: Dragon Medical SpeechKit design Dragon Medical SpeechKit architecture Partner GUID Organization token Voice commands Application commands Error handling Voice user interface and VUIController User profile adaptation: good practice ..."},"6":{y:0,u:"../Content/Concepts/DANUBE_DESIGN.htm",l:-1,t:"Dragon Medical SpeechKit design\n\t\t",i:0.00486332820389187,a:"Dragon Medical SpeechKit has been designed based on our extensive experience in both the medical and speech recognition fields. It\u0027s important to be aware of the design when integrating it into your app in order to get the most out of it. Please spend some time with our documentation before ..."},"7":{y:0,u:"../Content/Concepts/DANUBE_ARCHITECTURE.htm",l:-1,t:"Dragon Medical SpeechKit architecture\n\t\t",i:0.00486332820389187,a:"  System components Dragon Medical SpeechKit Nuance SDKs to speech-enable your desktop, iOS, Android or browser app. Dragon Medical Server Speech recognition servers. Dragon Medical SpeechKit (Browser edition) web server Hosts the Browser SDK required to speech-enable browser apps. Nuance Management ..."},"8":{y:0,u:"../Content/Concepts/DANUBE_PARTNER_GUID.htm",l:-1,t:"\n\t\t\tPartner GUID\n\t\t",i:0.0304377742169621,a:"Your development organization is assigned a partner GUID when it signs up for the Nuance Healthcare Development Platform as a Nuance Healthcare partner. This partner GUID never changes. When a Dragon Medical SpeechKit session is initialized, this partner GUID must be passed to Dragon Medical ..."},"9":{y:0,u:"../Content/Concepts/DANUBE_LICENSE_GUID.htm",l:-1,t:"\n\t\t\tOrganization token\n\t\t",i:0.0304377742169621,a:"When a Dragon Medical license is installed in the Nuance Management Center, it must be associated with an organization token. When a Dragon Medical SpeechKit session is initialized, this organization token must be passed to Dragon Medical SpeechKit to identify the license to be used. Important: The ..."},"10":{y:0,u:"../Content/Concepts/DANUBE_VOICE_COMMANDS.htm",l:-1,t:"\n\t\t\tVoice commands\n\t\t",i:0.0131588609139831,a:"A voice command is a spoken word or phrase that initiates an action in an app. They enable users to control your app without physically interacting with the app UI. All voice commands that are currently available to an end user are displayed in the personalization \u0026 help window.  Note: You can ..."},"11":{y:0,u:"../Content/Concepts/DANUBE_APPLICATION_COMMANDS.htm",l:-1,t:"\n\t\t\tApplication commands\n\t\t",i:0.0142085424477969,a:"You can define  voice commands  for your users. These application commands are specific to your app and how you want your users to interact with it. Application commands can be used to: Control GUI elements: For example, the user says save report instead of selecting the Save button. Control ..."},"12":{y:0,u:"../Content/Concepts/DANUBE_ERROR_HANDLING.htm",l:-1,t:"Error handling",i:0.00456607223285369,a:"To ensure that Dragon Medical SpeechKit is robust and fault-tolerant and that your app doesn\u0027t fail to work because of issues in Dragon Medical SpeechKit, the following error handling strategies have been developed: Your integration will only be notified programmatically of errors that it can ..."},"13":{y:0,u:"../Content/Concepts/DANUBE_VUI_CONTROLLER.htm",l:-1,t:"Voice user interface and VUIController",i:0.00456607223285369,a:"The design of Dragon Medical SpeechKit is centered on the concept of a \u0027document\u0027 or \u0027form\u0027 that a user can modify via voice using the app’s voice user interface (VUI). The design is structured according to the \u0027model-view-controller\u0027 (MVC) pattern: The app’s GUI (a window/dialog/view with text ..."},"14":{y:0,u:"../Content/GoodPractice/DANUBE_GOODPRACTICE_ADAPTATION.htm",l:-1,t:"Reducing Recognition Error Rates",i:0.00419654118959014,a:"Reducing recognition error rates Apps can help their users achieve low recognition error rates by following these integration guidelines. Be aware that certain bad integration patterns can make it impossible for the system to adjust to the user\u0027s way of speaking and therefore cause increased ..."},"15":{y:0,u:"../Content/Concepts/DANUBE_ADAPTATION.htm",l:-1,t:"User profile adaptation",i:0.0453446780218091,a:"The speech recognition profile of a Dragon Medical SpeechKit user is continuously adapted to the user\u0027s way of speaking. The system learns by comparing the text created by Dragon Medical SpeechKit to the final text after it has been corrected by the user. This is a statistical and heuristic process ..."},"16":{y:0,u:"../Content/AndroidUseCases/DANUBE_OVERVIEW_ANDROID.htm",l:-1,t:"\n\t\t\tUse cases - overview\n\t\t",i:0.00576704390361723,a:"These steps are mandatory to add basic speech recognition functionality to your Android app: Speech recognition session initialization Speech-enabling your Android app This is additional functionality you can implement: Start recording automatically Setting the language and topic Enabling named ..."},"17":{y:0,u:"../Content/AndroidUseCases/DANUBE_INITIALIZE_SESSION_ANDROID.htm",l:-1,t:"\n\t\t\tSpeech recognition session initialization\n\t\t",i:0.0594735772100432,a:"Important: If you\u0027re deploying Dragon Medical Server at your site (and not hosted by Nuance), make sure to  configure Dragon Medical SpeechKit for on-premise deployment  before initializing a speech recognition session. Procedure When a user wants to initiate a speech recognition session via your ..."},"18":{y:0,u:"../Content/AndroidUseCases/DANUBE_SPEECH_ENABLE_ANDROID.htm",l:-1,t:"\n\t\t\tSpeech-enabling your Android application\n\t\t",i:0.0834610374698631,a:"Speech-enabling your Android app Important: If you\u0027re deploying Dragon Medical Server at your site (and not hosted by Nuance), make sure to  configure Dragon Medical SpeechKit for on-premise deployment  before speech-enabling your app. Prerequisites You\u0027ve created one or more activities and the ..."},"19":{y:0,u:"../Content/AndroidUseCases/DANUBE_START_RECORD_AUTOMATICALLY_ANDROID.htm",l:-1,t:"Start recording automatically",i:0.00448489438426102,a:"You can start recording automatically when a speech-enabled activity is displayed. Prerequisites You\u0027ve  speech-enabled an activity . Procedure Override the onResume() callback method in your activity. In this callback method, call synchronize() on the VuiController instance. Call startRecording() ..."},"20":{y:0,u:"../Content/AndroidUseCases/DANUBE_LANGUAGE_TOPIC_ANDROID.htm",l:-1,t:"\n\t\t\tSetting the language and topic\n\t\t",i:0.00569510940197622,a:"The language and topic properties are optional. Speech recognition language You can specify the language to be used for speech recognition for each VUI form. Changing the language property after the VuiController is opened will only have an effect if the synchronize() method is called. Note: By ..."},"21":{y:0,u:"../Content/AndroidUseCases/DANUBE_NAMED_FIELD_NAVIGATION_ANDROID.htm",l:-1,t:"\n\t\t\tEnabling named field navigation\n\t\t",i:0.0215468389558469,a:"You can enable specific text controls for named field navigation; this means a user can say a voice command to move directly to a specific text control. For example, the text control for information on the past medical history of a patient could be associated with the \"medical history\" concept. ..."},"22":{y:0,u:"../Content/AndroidUseCases/DANUBE_FIELDS_ANDROID.htm",l:-1,t:"\n\t\t\tDictating into fields\n\t\t",i:0.0186736044165967,a:"Recording can be started/stopped by your app by explicitly calling the startRecording() and stopRecording() methods on the shared session object. When the cursor is placed in a text control and the user starts recording, the resulting text is inserted at the cursor position. When text is selected in ..."},"23":{y:0,u:"../Content/AndroidUseCases/DANUBE_GUI_VIEW_ANDROID.htm",l:-1,t:"Defining  the set of speech-enabled text controls",i:0.0382096718840989,a:"Dynamically changing text controls in activities If you dynamically change the set of views in an activity (for example, your app adds/removes, enables/disables or hides/shows specific text fields depending on the user’s actions), the VUI form must be synchronized to recognize these changes. ..."},"24":{y:0,u:"../Content/AndroidUseCases/DANUBE_EVENTS_ANDROID.htm",l:-1,t:"\n\t\t\tEvents\n\t\t",i:0.00703902052140372,a:"Your app can be notified about various events that happen during speech recognition. Session events Your app can be notified whenever recording is started or stopped during a session. In your app, include a class that implements the SessionEventListener interface; generally, your speech-enabled ..."},"25":{y:0,u:"../Content/AndroidUseCases/DANUBE_APPLICATION_COMMANDS_ANDROID.htm",l:-1,t:"\n\t\t\tApplication commands\n\t\t",i:0.0120193553467796,a:"Each  application command  is associated with one command set. A command set is associated with one or more VUI forms. A VUI form can have more than one command set associated with it.  Prerequisites You\u0027ve speech-enabled an activity (see:  Speech-enabling your Android app ). Procedure To define ..."},"26":{y:0,u:"../Content/AndroidUseCases/DANUBE_END_USER_ANDROID.htm",l:-1,t:"\n\t\t\tEnd user online help\n\t\t",i:0.0115480248428146,a:"We provide HTML end user online help deployed with and hosted by the Dragon Medical Recognition Service. Our end user help focuses on how your users can use speech recognition features. End users can access the help via the  Dragon Medical SpeechKit personalization \u0026 help screen. The end user help ..."},"27":{y:0,u:"../Content/AndroidUseCases/DANUBE_HOSTED_VIEW_ANDROID.htm",l:-1,t:"\n\t\t\tPersonalization \u0026 help screen\n\t\t",i:0.00448489438426102,a:"The personalization \u0026 help screen is an HTML view that contains a variety of pages. To access it, the user taps the menu icon on the speech bar or says what can I say while recording. You can also make this view available to your users via your app. When the view opens, the active form is still ..."},"28":{y:0,u:"../Content/AndroidUseCases/DANUBE_CUSTOM_CONTROLS_ANDROID.htm",l:-1,t:"Custom controls",i:0.00569510940197622,a:"Dragon Medical SpeechKit doesn\u0027t support all text control types out-of-the-box. Implementing the custom control interface of Dragon Medical SpeechKit enables you to speech-enable unsupported controls. Your custom control implementation is responsible for manipulating the text inside the unsupported ..."},"29":{y:0,u:"../Content/AndroidUseCases/DANUBE_CONFIGURE_ONPREMISE_ANDROID.htm",l:-1,t:"\n\t\t\tConfiguring Dragon Medical SpeechKit for on-premise deployment",i:0.0407300353230949,a:"If you\u0027re hosting an on-premise Dragon Medical system within your organization\u0027s network, set the Dragon Medical Server URL in Dragon Medical SpeechKit before you initialize a speech recognition session. Use the Session methods setServerURL and getServerURL. Make sure you know the URL of your Dragon ..."},"30":{y:0,u:"../Content/AndroidUseCases/DANUBE_DOCUMENT_WORKFLOW_SUPPORT_ANDROID.htm",l:-1,t:"Support functionality for document workflows",i:0.00419654118959014,a:"Overview Dragon Medical SpeechKit provides support for apps with a document-oriented workflow. Such an app enables the user to create, save, load and edit persistent entities called documents. Dragon Medical SpeechKit can be made aware of such documents; this enables the user to continue using ..."},"31":{y:0,u:"../Content/AndroidUseCases/DANUBE_SAMPLE_CODE_ANDROID.htm",l:-1,t:"\n\t\t\tSample code\n\t\t",i:0.0183852512219258,a:"A sample VuiController integration Original layout XML file \u003c?xml version=\"1.0\" encoding=\"utf-8\"?\u003e   \u003cLinearLayout android:orientation=\"vertical\" android:layout_width=\"fill_parent\" android:layout_height=\"fill_parent\" … \u003c/LinearLayout\u003e Layout XML file with Dragon Medical SpeechKit code added \u003c?xml ..."},"32":{y:0,u:"../Content/Appendix/DANUBE_ACKNOWLEDGEMENTS.htm",l:-1,t:"Acknowledgements",i:0.00419654118959014,a:"Dragon Medical SpeechKit: Acknowledgements This product includes the following third-party software:"},"33":{y:0,u:"../Content/AndroidIntroduction/DANUBE_TECHNICAL_RESTRICTIONS_ANDROID.htm",l:-1,t:"\n\t\t\tTechnical restrictions\n\t\t",i:0.00681457109324873,a:"To display your app\u0027s end user online help in the personalization \u0026 help window, make sure it can be loaded in an iframe. For more information, see:  Your app\u0027s end user help . The maximum length of a text control is approximately 50,000 characters. Speech recognition might not be available if more ..."},"34":{y:0,u:"../Content/Appendix/DANUBE_RESOURCE_UTILIZATION.htm",l:-1,t:"Resource usage",i:0.00419654118959014,a:"Resource usage The table below presents resource consumption values when speech recognition is used with a simple GUI app. Values can differ significantly depending on the hardware used and the complexity of the apps involved."},"35":{y:0,u:"../Content/Appendix/DANUBE_COMMAND_CHANGES_CA.htm",l:-1,t:"\n\t\t\tChanges to Catalan voice commands\n\t\t",i:0.0279745026128531,a:"Based on user feedback and technology improvements, voice commands have changed. Remarks The first voice command listed is the main command, the others are alternatives. This topic lists changes to the Catalan voice commands. For more information on changes to the Hungarian voice commands, see:  ..."},"36":{y:0,u:"../Content/Appendix/DANUBE_COMMAND_CHANGES_HU.htm",l:-1,t:"\n\t\t\tChanges to Hungarian voice commands\n\t\t",i:0.0279745026128531,a:"Based on user feedback and technology improvements, voice commands have changed. Remarks The first voice command listed is the main command, the others are alternatives. This topic lists changes to the Hungarian voice commands. For more information on changes to the Catalan voice commands, see:  ..."},"37":{y:0,u:"../Content/Appendix/DANUBE_COMMAND_CHANGES_SL.htm",l:-1,t:"\n\t\t\tChanges to Slovenian voice commands\n\t\t",i:0.0279745026128531,a:"Based on user feedback and technology improvements, voice commands have changed. Remarks The first voice command listed is the main command, the others are alternatives. This topic lists changes to the Slovenian voice commands. For more information on changes to the Catalan voice commands, see:  ..."},"38":{y:0,u:"../Content/Appendix/DANUBE_GLOSSARY.htm",l:-1,t:"\n\t\t\tGlossary\n\t\t",i:0.00845734887950119,a:"A Android edition Edition of Dragon Medical SpeechKit designed for Android devices; for example, Samsung Galaxy Tab. audio device A device which is connected to a computer to record and/or play back sound; for example, a microphone. B Browser edition Edition of Dragon Medical SpeechKit designed for ..."},"39":{y:0,u:"../Content/AndroidIntroduction/DANUBE_API_ANDROID.htm",l:-1,t:"API reference",i:0.00782718624273572,a:"API reference Dragon Medical SpeechKit API Reference  documentation describes the interface."},"40":{y:0,u:"../Content/New/RELEASE_HISTORY_CONTENTS.htm",l:-1,t:"Release history",i:0.00806086881308652,a:"Release history"},"41":{y:0,u:"../Content/ReleaseNotes/DM_SK_RELEASE_NOTES_2022.2_ANDROID.htm",l:-1,t:"Dragon Medical SpeechKit 2022.2 (Android edition)",i:0.0279745026128531,a:"Release Notes for Dragon Medical SpeechKit 2022.2 (Android edition 4.2 R1) New in version 2022.2 (4.2 R1) Android 12 (API level 31) is now supported. [HCPLAT-2030, DNB-37955, DNB-42414] Note: For information on previous releases, see:  Release history . Important information If you are using Kotlin ..."},"42":{y:0,u:"../Content/ReleaseNotes/DM_SK_RELEASE_NOTES_2021.2_ANDROID.htm",l:-1,t:"Dragon Medical SpeechKit 2021.2 (Android edition)",i:0.0279745026128531,a:"Release Notes for Dragon Medical SpeechKit 2021.2 (Android edition 3.10 R1) New in version 2021.2 (3.10 R1) Dragon Medical SpeechKit\u0027s minSdkVersion is 26. If your app uses a lower minSdkVersion, add the overrideLibrary attribute to the \u003cuses-sdk\u003e tag in your manifest. For more information, see:  ..."},"43":{y:0,u:"../Content/ReleaseNotes/DM_SK_RELEASE_NOTES_2020.4_ANDROID.htm",l:-1,t:"Dragon Medical SpeechKit 2020.4 (Android edition)",i:0.0279745026128531,a:"Release Notes for Dragon Medical SpeechKit 2020.4 (Android edition) New in version 2020.4 Android 11 is now supported. Android 7 is no longer supported. Solved in version 2020.4 Continuously dictating for a long time (\u003e 5 minutes) no longer causes the app to become unresponsive. [DNB-24018] The ..."},"44":{y:0,u:"../Content/ReleaseNotes/DM_SK_RELEASE_NOTES_3.5_R1_ANDROID.htm",l:-1,t:"Dragon Medical SpeechKit 3.5 Release 1 (Android edition)",i:0.0279745026128531,a:"Release Notes for Dragon Medical SpeechKit 3.5 Release 1 (Android edition) New in version 3.5 release 1 Operating system support: Android 9 and 10 are now supported. [HCPLAT-776] Android 6 and lower are no longer supported. [DNB-20393] Note: Dragon Medical SpeechKit\u0027s minSdkVersion is 24. If your ..."},"45":{y:0,u:"../Content/ReleaseNotes/DM_SK_RELEASE_NOTES_3.4_R1_ANDROID.htm",l:-1,t:"Dragon Medical SpeechKit 3.4 Release 1 (Android edition)",i:0.0279745026128531,a:"Release Notes for Dragon Medical SpeechKit 3.4 Release 1 (Android edition) Solved issues The cursor is no longer moved to the beginning of the field when \u003cEditText android:maxLength=\"255\"/\u003e is set and the recognized text is longer than 255 characters. [DNB-14353] An Application Not Responding (ANR) ..."},"46":{y:0,u:"../Content/ReleaseNotes/DM_SK_RELEASE_NOTES_3.3_R4_ANDROID.htm",l:-1,t:"Dragon Medical SpeechKit 3.3 Release 4 (Android edition)",i:0.0279745026128531,a:"Release Notes for Dragon Medical SpeechKit 3.3 Release 4 (Android edition) Solved issues in version 3.3 Release 4 After selecting a word via voice command or rotating the device, users can now select correction alternatives manually. [DNB-11866, DNB-12048] In landscape mode, the keyboard no longer ..."},"47":{y:0,u:"../Content/ReleaseNotes/DM_SK_RELEASE_NOTES_3.2_R7_ANDROID.htm",l:-1,t:"Dragon Medical SpeechKit 3.2 Release 7 (Android edition)",i:0.00419654118959014,a:"Release Notes for Dragon Medical SpeechKit 3.2 Release 7 (Android edition) New in version 3.2 Release 7 For users with a Dragon Medical One license, if text is selected via voice, a correction menu is now displayed; this menu offers alternative speech recognition results and additional ..."},"48":{y:0,u:"../Content/ReleaseNotes/DM_SK_RELEASE_NOTES_3.1_SR4_ANDROID.htm",l:-1,t:"Dragon Medical SpeechKit 3.1 Service Release 4 (Android edition)",i:0.00419654118959014,a:"Release Notes for Dragon Medical SpeechKit 3.1 Service Release 4 (Android edition) Solved issues in service release next The \"Application commands\" topic of the SDK help has been improved to ensure larger numeric command IDs are implemented correctly. [DNB-8344] The application no longer shuts down ..."},"49":{y:0,u:"../Content/ReleaseNotes/DM_SK_RELEASE_NOTES_3.0_SR16_ANDROID.htm",l:-1,t:"Dragon Medical SpeechKit 3.0 Service Release 16 (Android edition)",i:0.00419654118959014,a:"Release Notes for Dragon Medical SpeechKit 3.0 Service Release 16 (Android edition) Dragon Medical SpeechKit is a component of the Nuance Healthcare Development Platform. Rebranding the components is currently an ongoing activity. Dragon Medical SpeechKit was previously called 360 | SpeechAnywhere ..."},"50":{y:0,u:"../Content/ReleaseNotes/DM_SK_RELEASE_NOTES_3.0_SR4_ANDROID.htm",l:-1,t:"Dragon Medical SpeechKit 3.0 Service Release 4 (Android edition)",i:0.00419654118959014,a:"Release Notes for Dragon Medical SpeechKit 3.0 Service Release 4 (Android edition) Dragon Medical SpeechKit is a component of the Nuance Healthcare Development Platform. Rebranding the components is currently an ongoing activity. Dragon Medical SpeechKit was previously called 360 | SpeechAnywhere ..."},"51":{y:0,u:"../Content/ReleaseNotes_NSA_SAS/SAS_RELEASE_NOTES_2.1_SR8_ANDROID.htm",l:-1,t:"360 | SpeechAnywhere Services 2.1 Service Release 8 (Android edition)",i:0.00419654118959014,a:"Release Notes for 360 | SpeechAnywhere Services 2.1 Service Release 8 (Android edition) Solved issues in service release 8 Non-ASCII characters no longer cause incorrect cursor positions. [DNB-5187] The speech bar is no longer displayed in the foreground of pop-up windows. [DNB-5075] The ..."},"52":{y:0,u:"../Content/ReleaseNotes_NSA_SAS/SAS_RELEASE_NOTES_2.1_SR4_ANDROID.htm",l:-1,t:"360 | SpeechAnywhere Services 2.1 Service Release 4 (Android edition)",i:0.00419654118959014,a:"Release Notes for 360 | SpeechAnywhere Services 2.1 Service Release 4 (Android edition) New in service release 4 Support for 64-bit applications. Solved issues in service release 4 The undo that voice command no longer moves the cursor to the wrong place. [DNB-4944] Application commands defined ..."},"53":{y:0,u:"../Content/ReleaseNotes_NSA_SAS/SAS_RELEASE_NOTES_2.1_ANDROID.htm",l:-1,t:"360 | SpeechAnywhere Services 2.1 (Android edition)",i:0.00419654118959014,a:"Release Notes for 360 | SpeechAnywhere Services 2.1 (Android edition) Important information 360 | SpeechAnywhere Services 2.0 Server is compatible with client versions 1.5, 1.6, 2.0 and 2.1. 360 | SpeechAnywhere Services 2.1 (Android edition) is compatible with server versions 1.6 and 2.0. To use ..."},"54":{y:0,u:"../Content/ReleaseNotes_NSA_SAS/SAS_RELEASE_NOTES_1.6_SR5_ANDROID.htm",l:-1,t:"360 | SpeechAnywhere Services 1.6 Service Release 5 (Android edition)",i:0.00419654118959014,a:"Release Notes for 360 | SpeechAnywhere Services 1.6 Service Release 5 (Android edition) Solved issues in service release 5 Text input issues after changes to the screen orientation in the Manage Vocabulary page and the help  have been solved. [PSP00068302, PSP00068716] The What You Can Say page has ..."},"55":{y:0,u:"../Content/ReleaseNotes_NSA_SAS/SAS_RELEASE_NOTES_1.6_ANDROID.htm",l:-1,t:"360 | SpeechAnywhere Services 1.6 (Android edition)",i:0.00419654118959014,a:"Release Notes for 360 | SpeechAnywhere Services 1.6 (Android edition) Important information 360 | SpeechAnywhere Services 1.6 Server is compatible with client versions 1.4, 1.5 and 1.6. 360 | SpeechAnywhere Services 1.6 (Android edition) is compatible with server versions 1.4, 1.5 and 1.6. To use ..."},"56":{y:0,u:"../Content/ReleaseNotes_NSA_SAS/SAS_RELEASE_NOTES_1.5_SR1_ANDROID.htm",l:-1,t:"360 | SpeechAnywhere Services 1.5 Service Release 1 (Android edition)",i:0.00419654118959014,a:"Release Notes for 360 | SpeechAnywhere Services 1.5 Service Release 1 (Android edition) Solved issues The speech bar no longer flickers when an Activity is themed as a dialog. [PSP00072311] The Android edition now displays an error message if an SAS Service machine is out of resources. [PSP00072052, ..."},"57":{y:0,u:"../Content/ReleaseNotes_NSA_SAS/SAS_RELEASE_NOTES_1.4_SR10_ANDROID.htm",l:-1,t:"360 | SpeechAnywhere Services 1.4 Service Release 10 (Android edition)",i:0.00419654118959014,a:"Release Notes for 360 | SpeechAnywhere Services 1.4 Service Release 10 (Android edition) Solved issues Performance issues have been resolved for Android 4.3 devices. [PSP00070336] Important information 360 | SpeechAnywhere Services 1.4 Server is compatible with client versions 1.2, 1.3 and 1.4. The ..."},"58":{y:0,u:"../Content/ReleaseNotes_NSA_SAS/SAS_RELEASE_NOTES_1.4_ANDROID.htm",l:-1,t:"360 | SpeechAnywhere Services 1.4 (Android edition)",i:0.00419654118959014,a:"Release Notes for 360 | SpeechAnywhere Services 1.4 (Android edition) Important information 360 | SpeechAnywhere Services 1.4 Server is compatible with client versions 1.2 and 1.3. The delete field voice command has been removed. In NMC \"customer token\" has changed to \"organization token\". Known ..."},"59":{y:0,u:"../Content/ReleaseNotes_NSA_SAS/SAS_README_1.3_SR19_ANDROID.htm",l:-1,t:"360 | SpeechAnywhere Services 1.3 Service Release 19",i:0.00419654118959014,a:"Release Notes - 360 | SpeechAnywhere Services 1.3 Service Release 19 This is a service release for 360 | SpeechAnywhere Services Android edition. Solved issues Unknown words are now processed properly for adaptation. [PSP00064627] Speech recognition now works with Android integrations that require ..."},"60":{y:0,u:"../Content/ReleaseNotes_NSA_SAS/DANUBE_README_1.3_ANDROID.htm",l:-1,t:"360 | SpeechAnywhere Services 1.3",i:0.00419654118959014,a:"Release Notes for 360 | SpeechAnywhere Services 1.3 Important information for on-premise systems The 360 | SpeechAnywhere Services 1.3 administration and installation guides are available in English, German, French, Dutch, Spanish, Swedish, Norwegian, Danish and Finnish. Please be aware that the ..."},"61":{y:0,u:"../Content/AndroidIntroduction/DANUBE_ACKNOWLEDGEMENTS_ANDROID.htm",l:-1,t:"\n\t\t\tAcknowledgements\n\t\t",i:0.00449379716062832,a:"Dragon Medical SpeechKit: Acknowledgments This product includes software developed by the Speex project ( http://www.speex.org/ ). Copyright and license:  SpeexLicense.txt This product includes software developed by the PUGIXML project ( http://pugixml.org/ ). Copyright and license:  ..."},"62":{y:0,u:"../Content/DeferredCorrection/DANUBE_CONCEPT_DEFERRED_CORRECTION.htm",l:-1,t:"Deferred correction concept",i:0.0811736982316574,a:"Deferred correction is a workflow in which the author works with frontend recognition (Dragon Medical Server returns recognition results in real time) and another user, typically a transcriptionist, corrects the results at a later point in time. Workflow A typical workflow: The author uses  frontend ..."},"63":{y:0,u:"../Content/Appendix/DANUBE_COMMAND_COMPARISON_HYBRID.htm",l:-1,t:"\n\t\t\tChanges to voice commands\n\t\t",i:0.00978908684885885,a:"Based on user feedback and technology improvements, voice commands have changed. Remarks The first voice command listed is the main command, the others are alternatives. This topic lists changes to the Catalan, Hungarian and Slovenian voice commands. For more information on changes to the Danish, ..."},"64":{y:0,u:"../Content/Appendix/DANUBE_COMMAND_CHANGES_NN.htm",l:-1,t:"\n\t\t\tChanges to Nynorsk voice commands\n\t\t",i:0.0279745026128531,a:"Based on user feedback and technology improvements, voice commands have changed. Remarks The first voice command listed is the main command, the others are alternatives. This topic lists changes to the Nynorsk voice commands. For more information on changes to the Catalan voice commands, see:  ..."},});
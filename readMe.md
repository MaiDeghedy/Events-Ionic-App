
## Table of Contents

- [Description](#Description)
- [Design](#Design)
- [Available Scripts](#available-scripts)
  - [ionic serve](#ionic-serve)
- [Start App](#start-app)




## Description
This project is simple implementation for "Events Application" 
Developed as mobile app usion ionic 3,Angular 5 and Type script 

### Application has two pages:
1-Events-List view which preview all events retrieved from the server categorized by [Today,This Week and Other] categories with search input.
2-Event-Details view accessed by tapping any event on Events list page (show the name of the tapped event and its members,rest of content is static)
## Design
src -> <br/>
   	&nbsp; app-><br/>
       	&nbsp; &nbsp; app.component<br/>
        &nbsp; &nbsp; main.ts<br/>
        &nbsp; &nbsp; assets-><br/>
        	&nbsp; &nbsp; &nbsp; icon<br/>
            &nbsp; &nbsp; &nbsp; imgs<br/>
            &nbsp; &nbsp; &nbsp; sass<br/>
         &nbsp; &nbsp; models<br/>
            &nbsp; &nbsp; &nbsp; event.model<br/>
        &nbsp; &nbsp; pages<br/>
              &nbsp; &nbsp; &nbsp; event-details-> <br/>
                &nbsp; &nbsp; &nbsp; &nbsp; event-details.component<br/>
                 &nbsp; &nbsp; &nbsp; events-list-> <br/>
                  &nbsp; &nbsp; &nbsp; &nbsp; event-item-> <br/>
                   &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; event-item.component <br/>
                   &nbsp; &nbsp; &nbsp; &nbsp; event-list.component <br/>
                    &nbsp; &nbsp; services<br/>
                        &nbsp; &nbsp; &nbsp; events.service <br/>
                        &nbsp; &nbsp; &nbsp; services.module <br/>

    	&nbsp; index.html-><br/>
WWW
package.json
package-lock.json
webpack.config.json




## Available Scripts

In the project directory, you can run:
### `ionic serve`
compile the application and start it on port 8100.abd updates the contents of www folder.
### `ionic cordova build android`
Build (prepare + compile) an Ionic project for Android into platforms folder 
### `ionic cordova build ios`
Build (prepare + compile) an Ionic project for IOS into platforms folder 

## Start App
To view the app just open 'index.html' located on WWW folder it contains compiled version of the app.and for production you can just host this folder on the server.
Or run 'ionic serve' command in the project directory.

## Table of Contents

- [Description](#Description)
-[Design](#Design)
- [Notes](#Notes)
- [Available Scripts](#available-scripts)
  - [ionic serve](#ionic-build)
  - [ionic build](#ionic-build)



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



## Available Scripts

In the project directory, you can run:
### `ionic serve`
Install the packages into node_modules folder from the package.json file.

### `ionic build`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.



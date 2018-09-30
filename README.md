# SQ APP FOR INTERNAL is rewritten in Angular6 and Bootstrap 4

Simple Dashboard Admin App built using Angular 6 and Bootstrap 4

This project is a port of the famous Free Admin Bootstrap Theme [SB Admin v6.0](http://startbootstrap.com/template-overviews/sb-admin-2/) to Angular5 Theme.

Powered by [StartAngular](http://startangular.com/) & [StrapUI](http://strapui.com/)

## Introduction

JUST FULL aims to leverage on choosing passengers who view being bumped as a ticket to perks. Using the technology of streamlining and automating the current offloading process, the app scores and prioritize passengers according to their willingness to be voluntary offloaded. Since the search for volunteers will be completed before the departure date of the flights, airport staff will be able to provide a more efficient service, while passengers can enjoy a seamless experience flying SQ.

## Tabs Explain
There are 3 layouts at the backend: the Dashboard, Overbooked Flights and Passengers.

### Dashboard

‘Dashboard’ is designed to illustrate offloading performance, in terms of year to month and monthly. Breakdown provides a further drill on amount of overbooking in each sector, the trend of compensation amount, these information can be retrieved from ‘View Breakdown’.

### Overbooked Flights
‘Overbooked Flights’ displays upcoming overbooked flights, which are labeled with Red, Yellow and Green, representing the severity of overbooking status, ‘Red’ requires immediate action of revenue analysts. Machine Learning System developed by THINK TANK will recommend a compensation price based of historical trend and rank the priority of passengers who have traits that are commonly found in passengers who are willing to voluntary offload.  

### Passenger
‘Passenger’ digest details of each selected target offload passengers, showing the 4 factors the machine learning system consider to prioritize the passengers, namely check-in status, freedom of traffic, KrisFlyer membership tier and previous record of offloading. The offer confirmation of each passenger is shown in one sight, the analysts receive real time result of offering sending out and result of acceptance.

## Demo
https://youtu.be/7NMZxP0t4Jc


## Framework

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

Provides fast, reliable and extensible starter for the development of Angular projects.

`sb-admin-bs4-angular5` provides the following features:

*   Developed using boostrap-v4.0.0
*   angular-v6.0.0
*   angular/cli-v6.0.0
*   [ng-bootstrap-v2.0.0](https://github.com/ng-bootstrap/)
*   [ngx-translate-v10.0.0](https://github.com/ngx-translate)
*   Following the best practices.
*   Ahead-of-Time compilation support.
*   Official Angular i18n support.
*   Production and development builds.
*   Tree-Shaking production builds.

### How to start

**Note** that this seed project requires **node >=v6.9.0 and npm >=3**.

In order to start the project use:

```bash
$ git clone https://github.com/start-angular/SB-Admin-BS4-Angular-6
$ cd SB-Admin-BS4-Angular-6
# install the project's dependencies
$ npm install
# watches your files and uses livereload by default run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
$ npm start
# prod build, will output the production application in `dist`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build
```

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




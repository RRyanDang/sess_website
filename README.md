# SessWebsite

Official Website Link: https://www.senecaengsoc.ca/home

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Sample websites:

[Conestoga](https://www.conestogaengsoc.com/about-us)

[Alberta](https://www.essualberta.ca/contact)

[Ottawa](https://www.essaeg.ca/)

[CFES](https://cfes.ca/)

[ESSCO](https://www.essco.ca/)



## Resources:

[Flowbite](https://flowbite.com/)

[tailwind](https://tailwindcss.com/)

[TW Element](https://tw-elements.com/docs/standard/components/carousel/)

## MSAL

To install msal, run command:

    npm install @azure/msal-angular @azure/msal-browser


## SSL for localhost

[see here](https://gist.github.com/cecilemuller/9492b848eb8fe46d462abeb26656c4f8)

In augular.json

```json
{
   "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
   "projects": {
       "<PROJECT-NAME>": {
           "architect": {
               "serve: {
                   "options": {
                       "sslKey": "<relative path from angular.json>/server.key",
                       "sslCert": "<relative path from angular.json>/server.crt",
                       ...
                   }, ...
               }, ...
           }, ...
       }, ...
   }, ...
}
```

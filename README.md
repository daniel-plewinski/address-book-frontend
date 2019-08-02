# Address Book Frontend
This is a basic Angular 8 app with HttpClient, Routing and basic Jasmnine Unit Tests 

## Configuration and running
This app requires a backend app which can be found in the repo "Address Book Backend". Both apps can be run in the provided docker images.

### Provide your backend url
After starting the backend up in a Docker container set the right url in the "apiUrl.ts" file in the project root directory.

To build the docker image run `docker-compose build`.
To start the docker container run `docker-compose up`.


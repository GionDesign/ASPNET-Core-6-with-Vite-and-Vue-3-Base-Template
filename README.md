# ASP.NET Core 6, Vite and Vue 3 Base Template

![ASP.NET Core 6, Vite and Vue 3 Logo](./assets/images/dotnet-vite-vue-logo.png)


---

**This base template is a current work in progress**

This template is a base template that uses .NET Core 6 web api controllers and includes a front end Vite application with a scaffolded skeleton Vue 3 application.

When running, this application uses a proxy from the front end to reach the .NET Core REST APIs to consume the requests.
It is just a base template for the time being inorder to test out a form of .NET Core 6 integration with Vite and Vue.js.

**NOTE:** Docker functionality is still in Progress and not functional at this point in time, however normally running/publishing the application using `dotnet` in the cli or running in Visual Studio will function as expected.

---

**Contents:**
- [ASP.NET Core 6, Vite and Vue 3 Base Template](#aspnet-core-6-vite-and-vue-3-base-template)
  - [Dev System Requirements](#dev-system-requirements)
  - [Running the Application](#running-the-application)
    - [Visual Studio IDE](#visual-studio-ide)
    - [Command Line](#command-line)
  - [Dockerize Application [ Work In Progress ]](#dockerize-application--work-in-progress-)
    - [Requirements](#requirements)
      - [Create Docker Image](#create-docker-image)
      - [Run Docker Container](#run-docker-container)

---

## Dev System Requirements

- [.NET Core SDK for you machine](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
- [Visual Studio for your machine](https://visualstudio.microsoft.com/downloads/)

---

## Running the Application

### Visual Studio IDE

To run the project within Visual Studio IDE you can run it by selecting the `Run` button in the top left hadn of the Visual Studio window or use the shortcut key for your system:
- Windows => `F5`
- MacOS => `Ctrl + F5`

Then navigate to the url: `https://localhost:3000`

There you should be able to see the running frontend Vue application.

On the main page there is a button labeled `Click me`, if you open the `console` using `inspect` then when you click on `Click me`, it shoudl display the respone from the api request in the backend.

To access the backend endpoints directly you can use the url `https://localhost:7053/api/`

The base template only has the weatherforecast endpoint, but as you go you can create more endpoints and custom responses.
As the `WeatherForecast` endpoint is a `GET` request, just by hitting the endpoint it should return with the API response:

**Example:**

Url: `https://localhost:7053/api/weatherforecast`

Response: `[{"date":"2022-06-13T10:22:03.425049+10:00","temperatureC":10,"temperatureF":49,"summary":"Warm"},{"date":"2022-06-14T10:22:03.42526+10:00","temperatureC":-13,"temperatureF":9,"summary":"Sweltering"},{"date":"2022-06-15T10:22:03.425264+10:00","temperatureC":35,"temperatureF":94,"summary":"Chilly"},{"date":"2022-06-16T10:22:03.425264+10:00","temperatureC":4,"temperatureF":39,"summary":"Sweltering"},{"date":"2022-06-17T10:22:03.425265+10:00","temperatureC":4,"temperatureF":39,"summary":"Balmy"}]`

### Command Line

To run within the command line you can use the command:
`dotnet run`

within the root folder of the application.



Then navigate to the url: `https://localhost:3000`

There you should be able to see the running frontend Vue application.

On the main page there is a button labeled `Click me`, if you open the `console` using `inspect` then when you click on `Click me`, it shoudl display the respone from the api request in the backend.

To access the backend endpoints directly you can use the url `https://localhost:7053/api/`

The base template only has the weatherforecast endpoint, but as you go you can create more endpoints and custom responses.
As the `WeatherForecast` endpoint is a `GET` request, just by hitting the endpoint it should return with the API response:

**Example:**

Url: `https://localhost:7053/api/weatherforecast`

Response: `[{"date":"2022-06-13T10:22:03.425049+10:00","temperatureC":10,"temperatureF":49,"summary":"Warm"},{"date":"2022-06-14T10:22:03.42526+10:00","temperatureC":-13,"temperatureF":9,"summary":"Sweltering"},{"date":"2022-06-15T10:22:03.425264+10:00","temperatureC":35,"temperatureF":94,"summary":"Chilly"},{"date":"2022-06-16T10:22:03.425264+10:00","temperatureC":4,"temperatureF":39,"summary":"Sweltering"},{"date":"2022-06-17T10:22:03.425265+10:00","temperatureC":4,"temperatureF":39,"summary":"Balmy"}]`


## Dockerize Application [ Work In Progress ]

### Requirements

- [Docker installed](https://docs.docker.com/get-docker/)

#### Create Docker Image
`docker build -t aspnet-vite .`

#### Run Docker Container

Running in detached mode:
`docker run -d -p 3000:80 -p 7053:7053 -e ASPNETCORE_HTTPS_PORT=7053 aspnet-vite`

Running in live mode within console:
`docker run --rm -p 3000:80 -p 7053:7053 -e ASPNETCORE_HTTPS_PORT=7053 aspnet-vite`
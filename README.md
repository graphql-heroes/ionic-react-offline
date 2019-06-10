# GraphQL Server

The GraphQL server uses https://github.com/aerogear/voyager-server[Voyager Server] to provide GraphQL capabilities along with security, monitoring and tools to simplify GraphQL API development.

## Getting Started

Requirements:

- Docker
- Node.js 6.x or above to run server
- (optional) access to a running OpenShift instance

### Running the server

1. Start the PostgreSQL container

```shell
cd ./server
docker-compose up -d
```

2. Start the server

```shell
npm install
npm run start
```

### NOTE

If Keycloak integration is enabled on the server, and the Keycloak server is running using self-signed certificate, please make sure set this environment variable before running the server:

```shell
export NODE_TLS_REJECT_UNAUTHORIZED=0
```

### Running the Server on OpenShift (optional)

1. Log into your OpenShift instance with the `oc login` command.
2. Deploy the Server with PostgreSQL

```shell
oc new-app -f server/openshift-template.yml
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

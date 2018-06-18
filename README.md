## React/Redux Boilerplate for Holochain apps

This repo is a simple Holochain application with a React/Redux frontend in `ui-src`, and was built following the UI development guidelines outlined in the [Holochain Development Wiki](https://developer.holochain.org/UI_Development), and using the Holochain [clutter](https://github.com/holochain/clutter) project as a guide.

### Installation
This app was bootstrapped with `create-react-app`. run `$ npm install` to install dependencies, and then `$ npm start` to boot up the server.

### Build Configuration.
This app uses webpack as its build tool. Build files are located in `scripts` and all webpack configuration files are in `config`.

### Development
`npm start` runs the app in development mode. Open http://localhost:3000 to view the app in the browser. The page will automatically reload if you make changes to the code.

To see development changes on the Holochain webserver, you have to move the compiled files to the `ui` folder by running `npm run build`, and then restart the websever by running `hcdev web`.

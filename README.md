# MSA Components

MSA Components provided as package based on create-react-app

## Development

In the project directory, you can run:

### `npm run start-chat`

Runs the app in the development mode fir the chat component

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
For the build uses olny the components from `src/lib` folder.
All of the code we need to use should be there.

## Development strategy

Pushing to the `master` branch deploy components to the MSA portals. 
Use `develop` branch for the final test of your code.

### How to add features/fixes
1. Create another branch from master. ( follow names featute/branchmane or fix/branchname)
2. Create PR to the `develop` branch. Assign someone to check it.
3. After approvement code merges to `develop` branch and after the final test - to `master` branch.

### How to add new components
1. Create new react component inside `src/lib` directory. Make sure that you include it to the `src/lib/index.js`
2. Import you component to the `src/config.js` for the local development
3. Add the new script to the `package.json` to run development mode for your component - `REACT_APP_COMPONENT=EXAMPLE react-scripts start`. Look at example component to see how it works.
4. Add new script to the README.md file.

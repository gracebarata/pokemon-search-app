POKEMON SEARCH APP
PLAN

// Behaviours:
// When searching for Pokemon, I want to see a list of options which match what I’m typing.
// When clicking on an item from the options list, we expect to select that Pokemon for the search field
// When clicking the search button, show the selected pokemon’s profile

# Plan So Far

- PokeSuggest
  - SearchBar
    - SearchField
    - SearchButton
  - AutoComplete
    - OptionsList
    - Option
  - PokemonDisplay
    - PokemonImage
    - PokemonInfo

What do we want to track? - what is typed into the search field (searchTerm) - the list of options (options) - the pokemon we want to show (result)

How do each of these things interact with our components?
What do they need to be seen by? What do they need to be changed /edited by?

    - searchTerm
      - needs to be seen by search bar > search field, autocomplete > options list
      - needs to be edited by options > option, search bar > search field
        - options needs to be able to set the searchTerm when clicking an option
        - search field needs to be able to set the searchTerm when typing in to the input
      - lives in PokeSuggest

     - options
      - needs to be seen by autocomplete > options list
      - is dependent on searchTerm
      - lives in AutoComplete
    - result
      - needs to be seen by pokemon display
      - needs to be edited by search bar > search button
        - when you click the button, need to be able to set result to be searchTerm
      - lives in PokeSuggest

Pokemon <- API
Pokemon -> options, result
searchTerm dictates
fetch -> when the searchTerm changes > autocomplete = options
Autocomple prop includes searchTerm
useEffect(
() => ...
, [searchTerm])
fetch -> click the button = result

    -





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

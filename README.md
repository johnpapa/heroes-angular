# Tour of Heroes

This project was created to help represent a fundamental app written with Angular. The heroes and villains theme is used throughout the app.

by [John Papa](http://twitter.com/john_papa)

Comparative apps can be found here with [Svelte](https://github.com/johnpapa/heroes-svelte), [React](https://github.com/johnpapa/heroes-react), and [Vue](https://github.com/johnpapa/heroes-vue)

## Why

I love JavaScript and the Web! One of the most common questions I hear is "which framework is best?". I like to flip this around and ask you "which is best for you?". The best way to know this is to try it for yourself. I'll follow up with some articles on my experiences with these frameworks but in the meantime, please try it for yourself to gain your own experience with each.

## Live Demos

Hosted in [Azure](https://azure.microsoft.com/free/?WT.mc_id=javascript-0000-jopapa)

- [Tour of Heroes with Angular](https://papa-heroes-angular.azurewebsites.net)
- [Tour of Heroes with React](https://papa-heroes-react.azurewebsites.net)
- Tour of Heroes with Svelte - coming soon!
- [Tour of Heroes with Vue](https://papa-heroes-vue.azurewebsites.net)

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/johnpapa/heroes-angular.git
   cd heroes-angular
   ```

1. Install the npm packages

   ```bash
   npm install
   ```

1. Run the app!

   ```bash
   npm run quick
   ```

## Cypress Tests

1. You can execute all of the UI tests by running the following steps

   ```bash
   npm run cypress
   ```

## What's in the App

Each of these apps contain:

Each of the apps written in the various frameworks/libraries has been designed to have similar features. While consistency is key, I want these apps to be comparable, yet done in an way authentic to each respective framework.

Each project represents heroes and villains. The user can list them and edit them.

Here is a list of those features:

- [x] Start from the official quick-start and CLI
- [x] Client side routing
  - [x] Three main routes Heroes, Villains, About
  - [x] Handles an erroneous route, leading to a PageNotFound component
  - [x] Active route is highlighted in the nav menu
  - [x] Routing should use html5 mode, not hash routes
- [x] API
  - [x] JSON server as a backend
  - [x] App served on one port which can access API on another port proxy or CORS)
  - [x] HTTP - Uses most common client http libraries for each framework
- [x] Styling
  - [x] Bulma
  - [x] SASS
  - [x] Font Awesome
  - [x] Same exact css in every app
- [x] Editing - Heroes and Villains will be editable (add, update, delete)
- [x] State/Store - Uses a store for state management
- [x] Web development server handles fallback routing
- [x] Generic components
  - [x] Modal
  - [x] Button Tool
  - [x] Card
  - [x] Header bar
  - [x] List header
  - [x] Nav bar
- [x] Props in and emit events out
- [x] Environment variable for the API location

### Why Cypress?

Cypress.io makes it easy to run all three apps simultaneously in end to end tests, so you can watch the results while developing.

### Why abstracted CSS?

The goal of the project was to show how each framework can be designed to create the same app. Each uses their own specific techniques in a way that is tuned to each framework. However the one caveat I wanted to achieve was to make sure all of them look the same. While I could have used specific styling for each with scoped and styled components, I chose to create a single global styles file that they all share. This allowed me to provide the same look and feel, run the same cypress tests, and focus more on the HTML and JavaScript/TypeScript.

### Why JSON Server?

The app uses a JSON server for a backend by default. This allows you to run the code without needing any database engines or cloud accounts. Enjoy!

## Problems or Suggestions

[Open an issue here](/issues)

## Thank You

Thank you to [Sarah Drasner](https://twitter.com/), [Brian Holt](https://twitter.com/), [Chris Noring](https://twitter.com/), [Craig Shoemaker](https://twitter.com/), and [Ward Bell](https://twitter.com/wardbell) for providing input and reviewing the code in some of the repos for the Angular, React, Svelte, and Vue apps:

- [heroes-angular](https://github.com/johnpapa/heroes-angular)
- [heroes-react](https://github.com/johnpapa/heroes-react)
- [heroes-svelte](https://github.com/johnpapa/heroes-svelte)
- [heroes-vue](https://github.com/johnpapa/heroes-vue)

## Resources

- [VS Code](https://code.visualstudio.com/?WT.mc_id=javascript-0000-jopapa)
- [Azure Free Trial](https://azure.microsoft.com/free/?WT.mc_id=javascript-0000-jopapa)
- [VS Code Extension for Node on Azure](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack&WT.mc_id=javascript-0000-jopapa)
- [VS Code Extension Marketplace](https://marketplace.visualstudio.com/vscode?WT.mc_id=javascript-0000-jopapa)
- [VS Code - macOS keys](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf?WT.mc_id=javascript-0000-jopapa)
- [VS Code - Windows keys](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf?WT.mc_id=javascript-0000-jopapa)

### Debugging Resources

- [Debugging Angular in VS Code](https://code.visualstudio.com/docs/nodejs/angular-tutorial?WT.mc_id=javascript-0000-jopapa)
- [Debugging React in VS Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial?WT.mc_id=javascript-0000-jopapa)
- [Debugging Vue in VS Code](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial?WT.mc_id=javascript-0000-jopapa)

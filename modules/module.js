//A module is just a file. One script is one module. Each module, which corresponds to a script, can interact with others through special directives like export and import. Modules can load each other and use special directives: export and import to interchange functionality, call functions of one module from another one:
//export keyword labels variables and functions that should be accessible from outside the current module.
//import allows the import of functionality from other modules.
//export and import are non-blocking, they are processed in parallel.
//Modules are always in Strict Mode (no need to define "use strict").

/*When managing external dependencies in a project, developers commonly use tools like npm (Node Package Manager) or Yarn. By running npm init, developers can initialize a package.json file, which becomes the central configuration for all external packages used in the project.
    - use npm init to download files. It creates a package.json file with what you installed.    
    - npm init -y : defaults all the responses to yes
Package.json is the centre for all external packages used in a particular project.
Yarn is a package manager that doubles as a project manager. It is a package manager for your code. It allows you to use and share code with other developers from around the world. Yarn does this quickly, securely, and reliably so you don't ever have to worry. It is faster...
yarn add <package-name> -to install a package
*yarn lock
The concept of temporary storage for installed files in a folder is introduced through the use of 'npx cowsay'.
The difference between yarn and npm is that yarn is faster and more secure than npm. 
npx is a package runner tool that comes with npm 5.2+ and higher. It is used to execute packages. It is used to execute packages from the npm registry. It is used to install and manage packages.

To install something globally: npm install -g <package-name> /npm install --location:global <package-name>

To install something locally: npm install <package>.
node_modules will only show when you use npm install. It will not show when you install globally.


//require.js is a JavaScript file and module loader. It is optimized for in-browser use, but it can be used in other JavaScript environments, like Node. Using a modular script loader like RequireJS will improve the speed and quality of your code.*/

//npm install cowsay

# FrenchTyperJS
Copying of all French Characters packaged as either an html file or a simple electron app

__This is a small and lightweight programm allowing users to copy all of the special french symbols to the clipboard.__

It was written with HTML, Javascript and CSS. The project can be run as a standalone electron app (see electron folder) or opened as a single .html file in the browser (see singleHtmlFile folder).
Feel free to distribute it under the terms of the GNU
General Public License 3.0 or higher.

## use single html file
just download the FrenchTyperJS.html file in the singleHtmlFile folder.
You can then put it on a usb stick or anywhere on your computer and run it with Edge, Chrome or Firefox.

## Compile electron app from source (commands in Posix)
- first clone the git repository with
`git clone https://github.com/Julius-Gu/FrenchTyperJS`
- go to the electron folder
`cd FrenchTyperJS/electron/`
- check that node is installed with
`node -v`
`npm -v`
`electron -v`
- run npm with
`npm init -y`
- check that the project is starting correctly with
`npm start`
(this should create a window)
- create an executable
`npm install --save-dev @electron-forge/cli`
`npx electron-forge import`
`npm run make`

<!-- - you can then navigate to ./out/FrenchTyper-[os]-[cpu_arch] and run `./FrenchTyperJS` -->

this will create an "out" folder where the compiled files are located


This project is a rewrite of the old FrenchTyper in Web Technologies to make it more visually appealing and platform independent

please let me know of any issues. 

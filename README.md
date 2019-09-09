# hackernews
cli tool for hackernews

Download the Project

![Project structure](https://github.com/marc13004/hackernews/blob/master/Pics/file.PNG)

From Node command line tool Install the necessary NPM modules:

  1. npm install commander
  2. npm install axios
  3. npm install cheerio
  
These installation should override the Package.json file from the project.
You can review the package.json from here if necessary
  
Introduction:

Build with the npm modules Cheerio for web scraping and commander for cli tool building for node.js

The program scrap the web for every top <td> elements and then go through all the structure to find every specific data needs
such as ranks, author, comments etc...
  
The result is send to an asynchronous function who will build the necessary Json array from the specific datas we have collect.

With Commander I have build a command to print n integer number of Json from the new Json array I have build.

Here is the structure of the folder:





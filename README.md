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

From the root file of the project using a command line tool, you can enter the following command:

      node ./index.js --posts 10
      
  
  
Introduction:

Build with the npm modules Cheerio for web scraping and commander for cli tool building for node.js

The program scrap the web for every top <td> elements and then go through all the structure to find every specific data needs
such as ranks, author, comments etc...
  
The result is send to an asynchronous function who will build the necessary Json array from the specific datas we have collect.

With Commander I have build a command to print n integer number of Json from the new Json array I have build.

Scraping with Cheerio and axios:

![Project structure](https://github.com/marc13004/hackernews/blob/master/Pics/scraping.PNG)

Building The Json from the Objects collected at Hackernews https://news.ycombinator.com/ :

![Project structure](https://github.com/marc13004/hackernews/blob/master/Pics/forloop.PNG)

Command Line Building Function:

![Project structure](https://github.com/marc13004/hackernews/blob/master/Pics/commandFunc.PNG)










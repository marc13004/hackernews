# hackernews
cli tool for hackernews

Build with the npm modules Cheerio for web scraping and commander for cli tool building for node.js

The program scrap the web for every top <td> elements and then go through all the structure to find every specific data needs
such as ranks, author, comments etc...
  
The result is send to an asynchronous function who will build the necessary Json array from the specific datas we have collect.

With Commander I have build a command to print n integer number of Json from the new Json array I have build.

Here is the structure of the folder:





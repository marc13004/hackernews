const program = require('commander');
const getResults = require('./scraper.js');

//async function waiting the arrays of Objects chain
(async () => {
  try {
  let chain = await getResults();

  let title;
  let uri;
  let author;
  let points;
  let comments;
  let ranks;

  var news = { hackernews: [] };

//looping to build the Json Object necessary prior printing it via a command
// looping and handling error such has undefined value with a try catch statement

  for (var i = 0; i < 30; i++) {
    
    title = null;
    uri = null;
    author = null;
    points = null;
    comments = null;
    ranks = null;

    try {
      title = chain.chain[i].obj[0].children[4].children[0].children[0].data;
      uri = chain.chain[i].obj[0].children[4].children[0].attribs['href'];
      author = chain.chain[i].obj[0].next.children[1].children[3].children[0].data;
      points = chain.chain[i].obj[0].next.children[1].children[1].children[0].data;
      comments = chain.chain[i].obj[0].next.children[1].children[11].children[0].data;
      ranks = chain.chain[i].obj[0].children[1].children[0].children[0].data;

      news.hackernews.push({
          "title" : title,
          "uri"  : uri,
          "author"  : author,
          "points"  : points,
          "comments"  : comments,
          "ranks"  : ranks,
      });

    } catch(e) {
      console.log(e.message);
    } finally{
    continue
  }

  }
  //function to print n number of posts
  // taking integer n from the command option --posts <number>
  function myCommand(number) {
    for (var i = 0; i < number; i++) {
      console.log('\n'+'integer argument '+ (i+1) + '\n');
      console.log(news.hackernews[i]);
    };
  };

  //Building the command using Commander option posts is taking an interger as arguments, passing it to the myCommand function
    program
      .version('1.0.0')
      .option('-p, --posts <number>', 'integer argument', myCommand)
      .parse(process.argv);

//      if (program.posts !== undefined) console.log(`integer: ${program.posts}`);
} catch (e) {
    console.log(e.message);
  }
})()

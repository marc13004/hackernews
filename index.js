const program = require('commander');
const getResults = require('./scraper.js');

//async function waiting the arrays of Objects chain
(async () => {
  let chain = await getResults();
  var news = { hackernews: [] };


//looping to build the Json Object necessary prior printing it via a command
  for (var i = 0; i < 30; i++) {

    news.hackernews.push({
        "title" : chain.chain[i].obj[0].children[4].children[0].children[0].data,
        "uri"  : chain.chain[i].obj[0].children[4].children[0].attribs['href'],
        "author"  : chain.chain[i].obj[0].next.children[1].children[3].children[0].data,
        "points"  : chain.chain[i].obj[0].next.children[1].children[1].children[0].data,
        "comments"  : chain.chain[i].obj[0].next.children[1].children[11].children[0].data,
        "ranks"  : chain.chain[i].obj[0].children[1].children[0].children[0].data,
    });

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

})()

var request = require('request'),
cheerio = require('cheerio'),
deckUrls = []

for (var i = 0; i < 2; i++) {
  let count = i
  request('http://yugioh.wikia.com/wiki/TCG_Set_Galleries:_Decks', function(err, resp, body){
    if(!err && resp.statusCode == 200){
      var $ = cheerio.load(body)
      $('a:nth-child(3)', `#gallery-${count}`).each(function(){
        var url = (`http://yugioh.wikia.com${this.attribs.href}`)
        deckUrls.push(url)
      })
      console.log(deckUrls)
      console.log(deckUrls.length)
    }
  })
}

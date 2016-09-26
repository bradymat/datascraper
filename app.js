var request = require('request'),
cheerio = require('cheerio'),
urls = []

// All starter and structure deck card list urls
for (var i = 0; i < 2; i++) {
  let count = i
  request('http://yugioh.wikia.com/wiki/TCG_Set_Galleries:_Decks', function(err, resp, body){
    if(!err && resp.statusCode == 200){
      var $ = cheerio.load(body)
      $('a:nth-child(3)', `#gallery-${count}`).each(function(){
        var url = (`http://yugioh.wikia.com${this.attribs.href}`)
        urls.push(url)
      })
      console.log(urls)
      console.log(urls.length)
    }
  })
}

// All booster pack card list urls
for (var i = 0; i < 11; i++) {
  let count = i
  request('http://yugioh.wikia.com/wiki/TCG_Set_Galleries:_Boosters', function(err, resp, body){
    if(!err && resp.statusCode == 200){
      var $ = cheerio.load(body)
      $('a:nth-child(3)', `#gallery-${count}`).each(function(){
        var url = (`http://yugioh.wikia.com${this.attribs.href}`)
        urls.push(url)
      })
      console.log(urls)
      console.log(urls.length)
    }
  })
}

var request = require('request'),
cheerio = require('cheerio'),
urls = []

request('http://yugioh.wikia.com/wiki/TCG_Set_Galleries:_Boosters', function(err, resp, body){
  if(!err && resp.statusCode == 200){
    var $ = cheerio.load(body)
    $('a:nth-child(3)', '#mw-content-text').each(function(){
      var url = (`http://yugioh.wikia.com${this.attribs.href}`)
      urls.push(url)
    })
    console.log(urls)
  }
})

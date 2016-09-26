var request = require('request'),
cheerio = require('cheerio'),
setUrls = []

for (var i = 0; i < 11; i++) {
  let count = i
  request('http://yugioh.wikia.com/wiki/TCG_Set_Galleries:_Boosters', function(err, resp, body){
    if(!err && resp.statusCode == 200){
      var $ = cheerio.load(body)
      $('a:nth-child(3)', `#gallery-${count}`).each(function(){
        var url = (`http://yugioh.wikia.com${this.attribs.href}`)
        setUrls.push(url)
      })
      console.log(setUrls)
      console.log(setUrls.length)
    }
  })
}

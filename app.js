#!/usr/bin/env node

var fs = require('fs')
var request = require('request')
var copyPaste = require('copy-paste')
var pastebin = 'http://pastebin.com/api/api_post.php'
var apiDevKey = 'f99782d8f8dffcf3610daa5efc691c37'
var fileName = process.argv[2]

if (!fileName) {
	return console.error('File name missing.\n Usage: pbin <file name>')
}

fs.readFile(fileName, 'utf-8', (err, data) => {
  var formData = {
	  api_dev_key: apiDevKey,
	  api_option: 'paste',
	  api_paste_code: data
  }

  function pastebinResponse (err, httpResponse, body) {
	  if (err) {
	    return console.err('Pasting failed: ', err)
	  }
	  if (body.indexOf('limit')) {
	  	return console.log('Reached maximum pastes.\nSorry, pastebin.com limits the number of times you can paste per 24h.')
	  }
	  console.log('Successfully pasted in pastebin: ' + body)
	  copyPaste.copy(body, () => {
	  	console.log('Link copied in your clipboard.')
	  	process.exit()
	  })
  }

  request.post({url: pastebin, formData: formData}, pastebinResponse)
})


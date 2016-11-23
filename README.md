##Developer Key
You can get the developer key, by signing up on pastebin.com
##Installation
Clone the repo<br>    
`git clone git@github.com:iamropo/pbin.git`
<br>
`cd pbin`
<br>
Replace the folllowing code in app.js:<br>
`...`<br>
`var developerKey = '' // Your dev key goes here` <br>
`...`<br>
with your developer key<br>
`var developerKey = '<your developer key from pastebin.com>'`<br>
and then<br>
`npm link`
##Usage
`pbin filename`<br><br>
Example<br>
`pbin hello.txt`
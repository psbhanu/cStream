// Example
var cStreamModule = require('cstream');
var cStream = cStreamModule();

var data = '';

var cReadStream = cStream.createReadStream('input.txt');

cReadStream.on('data', function(chunk){
	console.log('Data Chunk Received!');
	data += chunk;
});

cReadStream.on('end', function(){
	console.log('Data Receive End!');
	console.log('File Contents: ' + data);
});

cReadStream.on('error', function(err){
	console.log('Error occurs!');
});

console.log('End of Program!');

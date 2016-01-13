module.exports = function() {
	return {
		createReadStream : function(file) {
			console.log('Creating Read Stream..');
			
			var events = require('events');
			var eventEmitter = new events.EventEmitter();

			var fs = require('fs');
			var rs = fs.createReadStream(file);
			
			rs.on('data', function(chunk){
				eventEmitter.emit('data', chunk);
			});			
			
			rs.on('end', function(){
				eventEmitter.emit('end');
			});			

			rs.on('error', function(err){
				eventEmitter.emit('error', err);
			});			

			return eventEmitter;
		}
	};
}


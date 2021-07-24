const mongoose = require('mongoose');

/* mongoose.connect('mongodb+srv://chrisduran:chrisduran@politicalcompassnicarag.dtb8h.mongodb.net/politicalCompassNicaraguaDB?retryWrites=true&w=majority');
mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error', () => console.log('Connection failed with - ',err)); */

mongoose.connect('mongodb+srv://chrisduran:chrisduran@paginationwithnodejsand.yujvo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(db => 'DB Is connected!')
	.catch(err => console.log('errorConnectingDB: ' + err));
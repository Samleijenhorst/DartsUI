'use strict';

const App = require('./App');
const port = process.env.PORT || 3000

App.initialize();
App.instance.listen(port, () => {
	console.log(`Server is up on port ${ port }`) // eslint-disable-line
});
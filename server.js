// run server
import app_express from './app_express/app_express.js';
import { SERVER_CONFIG } from './config/cf.js';
import { DEBUG } from './utils/log.js';

// ====================== RUN ====================================

app_express.listen(SERVER_CONFIG.PORT, function () {
	DEBUG(`App listening on port 3000!`);
});
// ===============================================================
import '@babel/polyfill'

import app from './server';

async function run() {
    await app.listen(app.get('port'));
    console.log('server on port', app.get('port'))
}

run()
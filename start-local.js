import { setLocalConfig, setValueMap, setSkipBehaviors, generateConf } from './src/akamai-nginx.js';

(function() {
    setLocalConfig(
        __dirname + '/sample.papi.json',
        'lua/akamai.lua'
    );

    setValueMap(
        new Map([
            ['staging-old.akamai.com', 'staging-new.akamai.com'],
            ['origin.akamaicustomer.com', 'something.com']
        ])
    );

    setSkipBehaviors([
        'cpCode'
    ]);

    generateConf().then(() => {
        console.log('done.')
    });
})();
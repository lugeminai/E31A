const PROXY_CONFIG = [{
    context: ['/api'],
    target: 'localhost:4000/',
    secure: false,
}, ];

module.exports = PROXY_CONFIG;
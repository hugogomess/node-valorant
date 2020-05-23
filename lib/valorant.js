const request = require('request');

class Valorant {
  constructor(riotToken) {
    this.options = {
      api_base: 'https://api.valorant.riotgames.com', // waiting api release
      riot_token: riotToken,
      request_headers: {
        Accept: '*/*',
        Connection: 'close',
        'User-Agent': 'valorant-api-client',
        'X-Riot-Token': riotToken,
      },
    };
  }

  get(endpoint, params, callback) {
    // waiting api release
  }

  post(endpoint, params, callback) {
    // waiting api release
  }
}

module.exports = new Valorant();

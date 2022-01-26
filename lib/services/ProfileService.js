const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

module.exports = class ProfileService {
  static async create({ name }) {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    console.log(res);
    const response = await res.json();
    const { quote } = response[0];

    return Profile.insert({
      name,
      quote,
    });
  }
};

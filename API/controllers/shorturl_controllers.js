const shorturl_model = require('../models/shorturl_model');
const url_validator = require('is-url');
const API_ENDPOINT = 'https://shorturl--api.herokuapp.com/';
const random = require('randomstring');
const path = require('path');

module.exports = {

    async getUrl(req, res) {

        try {
            const data = await shorturl_model.findOne({ short_url: req.params.id })

            if (data)
                return res.status(200).redirect(data.real_url);
            else
                return res.status(404).sendFile(path.join(__dirname, '../errors_response', 'http404.json'));
        }

        catch (err) {

            console.log(err);
            return res.status(500).sendFile(path.join(__dirname, '../errors_response', 'http500.json'));
        }

    },

    async shortUrl(req, res) {

        const { url } = req.body;
        const short_url_id = random.generate(5)

        //valida a url
        if (url_validator(url)) {
            try {
                await shorturl_model.create({ real_url: url, short_url: short_url_id })
                
                return res.status(201).type('.json').send(
                    { "url": API_ENDPOINT + short_url_id }
                )
            }
            catch (err) {
                return res.status(500).sendFile(path.join(__dirname, '../errors_response', 'http500.json'));
            }
        }
        else {
            return res.status(400).
                sendFile(path.join(__dirname, '../errors_response', 'http400.json'));
        }
    }
}
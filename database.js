require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://alexindevs:WnBymXqq7hxEqvoy@urlshortener.yakdsr2.mongodb.net/urlshortener?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
console.log(`mongodb+srv://alexindevs:WnBymXqq7hxEqvoy@urlshortener.yakdsr2.mongodb.net/urlshortener?retryWrites=true&w=majority`);

let urlSchema = mongoose.Schema({
    original_url: String,
    short_id: Number
})

let UrlModel = mongoose.model('Url', urlSchema, 'Urls');

module.exports = {
    UrlModel: UrlModel,
    UrlSchema: urlSchema
};
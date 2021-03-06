var consts = require('../../static/consts'),
    utils = require('../utils/utils'),

    isEmpty = require('lodash/lang/isEmpty');

module.exports = {
    parseResponse: function(robo, card) {
        var cardDetails;

        if (!isEmpty(card)) {
            cardDetails = utils.getCardDetails(card[0]);
            utils.sendDetails(robo, cardDetails);
        } else {
            robo.send(consts.defaultError);
        }
    }
};


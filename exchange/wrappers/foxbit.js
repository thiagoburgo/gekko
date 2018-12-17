const Foxbit = require('foxbit-api');
const _ = require('lodash');
const moment = require('moment');
const retry = require('../exchangeUtils').retry;
const marketData = require('./foxbit-markets.json');

const Trader = function(config) {
  _.bindAll(this);
  if (_.isObject(config)) {

  }
}

Trader.prototype.getTrades = function(since, callback, descending){
}

Trader.prototype.getTicker = function(callback){

}

Trader.prototype.getFee = function(callback){

}

Trader.prototype.getPortfolio = function(callback){

}

Trader.prototype.getLotSize = function(tradeType, amount, size, callback){

}

Trader.prototype.buy = function(amount, price, callback){

}

Trader.prototype.sell = function(amount, price, callback){

}

Trader.prototype.getOrder = function(order, callback){

}

Trader.prototype.checkOrder = function(order, callback){

}

Trader.prototype.cancelOrder = function(order, callback){

}

Trader.prototype.roundPrice = function(rawPrice){

}

Trader.prototype.roundAmount = function(rawAmount){

}

/***************/
// Effectively counts the number of decimal places, so 0.001 or 0.234 results in 3
Trader.prototype.getPrecision = function(tickSize) {
  if (!isFinite(tickSize)) return 0;
  var e = 1, p = 0;
  while (Math.round(tickSize * e) / e !== tickSize) { e *= 10; p++; }
  return p;
};

Trader.prototype.round = function(amount, tickSize) {
  var precision = 100000000;
  var t = this.getPrecision(tickSize);

  if(Number.isInteger(t))
    precision = Math.pow(10, t);

  amount *= precision;
  amount = Math.floor(amount);
  amount /= precision;

  // https://gist.github.com/jiggzson/b5f489af9ad931e3d186
  amount = scientificToDecimal(amount);

  return amount;
};
/***************/


/***OPTIONAL**/

Trader.prototype.isValidPrice = function(price){

}

Trader.prototype.isValidLot = function(price, amount){

}


Trader.getCapabilities = function() {
  return {
    name: 'Foxbit',
    slug: 'foxbit',
    currencies: marketData.currencies,
    assets: marketData.assets,
    markets: marketData.markets,
    requires: ['key', 'secret'],
    providesHistory: 'date',
    providesFullHistory: true,
    tid: 'tid',
    tradable: true,
    gekkoBroker:  '0.6.2',
    limitedCancelConfirmation: true
  };
};

module.exports = Trader;

var app = require('../app');
var loopback = require('loopback');

var ProductType = app.models.product;

ProductType.create({ name: 'ProductA', SKU: 'SKU99', description:'description A' });
ProductType.create({ name: 'ProductB', SKU: 'SKU99', description:'description B' });
ProductType.create({ name: 'ProductC', SKU: 'SKU99', description:'description C' });

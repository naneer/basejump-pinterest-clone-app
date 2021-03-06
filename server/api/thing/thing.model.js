'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    timestamps = require('mongoose-timestamps');

var ThingSchema = new Schema({
  url: { type: String, default: "/assets/images/page-not-found.png" },
  caption: String,
  active: { type: Boolean, default: true },
  _owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

ThingSchema.plugin(timestamps);

module.exports = mongoose.model('Thing', ThingSchema);
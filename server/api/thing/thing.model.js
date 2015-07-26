'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    timestamps = require('mongoose-timestamps');

var ThingSchema = new Schema({
  url: String,
  likes: Number,
  active: { type: Boolean, default: true },
  _owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

ThingSchema.plugin(timestamps);

module.exports = mongoose.model('Thing', ThingSchema);
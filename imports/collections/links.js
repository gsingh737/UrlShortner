/**
 * Created by User on 7/8/2017.
 */
import {Mongo} from 'meteor/mongo';
import validUrl from 'valid-url';
import {check, Match} from 'meteor/check';

Meteor.methods({
   'links.insert': function (url) {
        validUrl.isUri(url);
        check(url, Match.Where(url => validUrl.isUri(url)));
   }
});
export const Links = new Mongo.Collection('links');

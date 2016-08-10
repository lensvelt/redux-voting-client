//Set up code to use 'jsdom' (enables testing DOM virtually rather than in browser using, say, Karma)
import jsdom from 'jsdom';

//Create jsdom versions of the document & window objects & put them on the global object
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

//Ensures will be discovered by React when it accesses document or window
global.document = doc;
global.window = win;
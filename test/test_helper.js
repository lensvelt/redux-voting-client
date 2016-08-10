//Set up code to use 'jsdom' (enables testing DOM virtually rather than in browser using, say, Karma)
import jsdom from 'jsdom';

//Create jsdom versions of the document & window objects & put them on the global object
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

//Ensures will be discovered by React when it accesses document or window
global.document = doc;
global.window = win;

/*ALSO: Take all properties from jsdom window object (eg. navigator) & hoist
* onto Node.js global object:
* - ensures properties provided by window can be used without the 'window.' prefix
*   as would happen in a browser environment.
* - this is because some of the code in React relies on this */ 
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
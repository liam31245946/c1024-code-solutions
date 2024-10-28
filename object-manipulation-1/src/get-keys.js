'use strict';
/* exported getKeys */
function getKeys(objects) {
  const keys = [];
  for (const key in objects) {
    keys.push(key);
  }
  return keys;
}

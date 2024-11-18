'use strict';
/* exported toObject */
function toObject(keyValuePairs) {
  const [key, value] = keyValuePairs;
  return { [key]: value };
}

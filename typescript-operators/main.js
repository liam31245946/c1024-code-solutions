'use strict';
/* eslint-disable no-unused-vars */
const v1 = { value: 'Something' };
const v2 = '';
const v3 = undefined;
const v4 = [3, 5, 7, 9];
const v5 = {
  name: 'Carl',
  details: {
    age: 82,
  },
};
v1 && console.log('v1 is truthy ');
v2 && console.log('v2 is truthy');
const config1 = v1 || 'default-value';
console.log('config1', config1);
const config2 = v2 || 'default -value';
console.log('config2', config2);
const cfg1 = v1 ?? 'default-value';
const cfg2 = v2 ?? 'default-value';
const cfg3 = v3 ?? 'default-value';
console.log('v1 is undefined', cfg1);
console.log('v2 is undefined', cfg2);
console.log('v3 is undefined', cfg3);
const tern1 = v1 ? 'truthy' : 'falsy';
const tern2 = v2 ? 'truthy' : 'falsy';
console.log('tern1: ', tern1);
console.log('tern2: ', tern2);
const oc1 = v1?.value;
const oc2 = v5?.details?.address?.city;
console.log('oc1: ', oc1);
console.log('oc2: ', oc2);
const sObj = { ...v1, foo: 'bar' };
console.log('sObj', sObj);
const sArr = [100, ...v4];
console.log('sArr', sArr);
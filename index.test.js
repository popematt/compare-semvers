const process = require('process');
const cp = require('child_process');
const path = require('path');

test('compare equal sem-vers', () => {
  process.env['INPUT_FIRST'] = '1.2.3';
  process.env['INPUT_SECOND'] = '1.2.3';
  const ip = path.join(__dirname, 'index.js');
  const result = cp.execSync(`node ${ip}`, {env: process.env}).toString();
  expect(result).toContain("result::0")
})

test('compare unequal sem-vers', () => {
  process.env['INPUT_FIRST'] = '1.2.3';
  process.env['INPUT_SECOND'] = '1.2.4';
  const ip = path.join(__dirname, 'index.js');
  const result = cp.execSync(`node ${ip}`, {env: process.env}).toString();
  expect(result).toContain("result::-1")
})

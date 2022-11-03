const solution = require('./isMAC48Address2.js');

test('test 1', () => {
    expect(solution('00-1B-63-84-45-E6')).toBe(true);
});

test('test 2', () => {
    expect(solution('Z1-1B-63-84-45-E6')).toBe(false);
});

test('test 3', () => {
    expect(solution('not a MAC-48 address')).toBe(false);
});

test('test 4', () => {
    expect(solution('FF-FF-FF-FF-FF-FF')).toBe(true);
});

test('test 5', () => {
    expect(solution('00-00-00-00-00-00')).toBe(true);
});

test('test 6', () => {
    expect(solution('G0-00-00-00-00-00')).toBe(false);
});

test('test 7', () => {
    expect(solution('02-03-04-05-06-07-')).toBe(false);
});

test('test 8', () => {
    expect(solution('12-34-56-78-9A-BC')).toBe(true);
});

test('test 9', () => {
    expect(solution('FF-FF-AB-CD-EA-BC')).toBe(true);
});

test('test 10', () => {
    expect(solution('12-34-56-78-9A-BG')).toBe(false);
});

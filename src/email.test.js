const { test } = require('node:test');
const assert = require('node:assert/strict');
const { extractEmails, isValidEmail, getValidEmails, getInvalidEmails } = require('./email.js');

test('extractEmails returns email strings from members', () => {
    const members = [
        { name: 'John', email: 'john@example.com' },
        { name: 'Jane', email: 'jane@example.com' },
    ];
    assert.deepEqual(extractEmails(members), ['john@example.com', 'jane@example.com']);
});

test('extractEmails returns empty array for non-array input', () => {
    assert.deepEqual(extractEmails(null), []);
    assert.deepEqual(extractEmails('not-an-array'), []);
});

test('isValidEmail validates email format', () => {
    assert.equal(isValidEmail('user@example.com'), true);
    assert.equal(isValidEmail('user+tag@example.co.uk'), true);
    assert.equal(isValidEmail('invalid-email'), false);
    assert.equal(isValidEmail(''), false);
    assert.equal(isValidEmail(null), false);
    assert.equal(isValidEmail('a'.repeat(65) + '@example.com'), false);
    assert.equal(isValidEmail('user@' + 'a'.repeat(250)), false);
});

test('getValidEmails returns only valid emails', () => {
    const members = [
        { name: 'John', email: 'john@example.com' },
        { name: 'Bad', email: 'not-an-email' },
        { name: 'Jane', email: 'jane@example.com' },
    ];
    assert.deepEqual(getValidEmails(members), ['john@example.com', 'jane@example.com']);
});

test('getValidEmails returns empty array for non-array input', () => {
    assert.deepEqual(getValidEmails(undefined), []);
});

test('getValidEmails filters out missing, null, and empty emails', () => {
    const members = [
        { name: 'John', email: 'john@example.com' },
        { name: 'NoEmail' },
        { name: 'Null', email: null },
        { name: 'Empty', email: '' },
        { name: 'Invalid', email: 'bad' },
    ];
    assert.deepEqual(getValidEmails(members), ['john@example.com']);
});

test('getInvalidEmails returns only non-empty invalid emails', () => {
    const members = [
        { name: 'John', email: 'john@example.com' },
        { name: 'Bad', email: 'not-an-email' },
        { name: 'NoEmail' },
        { name: 'Null', email: null },
        { name: 'Empty', email: '' },
        { name: 'AlsoBad', email: 'bad@' },
    ];
    assert.deepEqual(getInvalidEmails(members), ['not-an-email', 'bad@']);
});

test('getInvalidEmails returns empty array for non-array input', () => {
    assert.deepEqual(getInvalidEmails(null), []);
});

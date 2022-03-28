import fixed from '../src/utilities/fixed';

test('Send 1.432543 and get 1.43', () => {
    expect(fixed(1.432543)).toBe('1.43');
});

test('Send 1000000 and get 1.00m', () => {
    expect(fixed(1000000)).toBe('1.00m');
});

test('Send 1000000000 and get 1.00b', () => {
    expect(fixed(1000000000)).toBe('1.00b');
});
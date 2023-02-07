const sum = require('./sum');

test('sanity sum fucntion smoke test',
    () => {
        const actual = sum(1, 2);
        expect(actual).toBe(3);
        expect(sum(-1,10)).toBe(9);
        expect(sum(0,0)).toBe(0);
    }
);

test('testing large addition', () => {
    expect(sum(1000+6000)).toBe(7000);
});
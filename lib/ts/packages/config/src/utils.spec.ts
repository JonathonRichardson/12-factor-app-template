import { cx } from "./utils";

test('cx concats class names', () => {
    expect(cx('a', 'b', 'c')).toBe('a b c');
});
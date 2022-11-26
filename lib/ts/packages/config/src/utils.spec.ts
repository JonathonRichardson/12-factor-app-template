import { cx } from "./utils";

test("cx concats class names", () => {
    expect(cx("a", "b", "c")).toBe("a b c");
});

test("cx ignores false, null, and undefined values", () => {
    let classNames = cx("a", false && "b", null, undefined, "c d");
    expect(classNames).toBe("a c d");
});

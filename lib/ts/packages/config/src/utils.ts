/**
 * Concat class names.  This function ignores any false, undefined, or null values,
 * which allows for more fluent conditional classes.  See the tests for more examples
 * of this.
 * 
 * Note that order is maintained.
 * 
 * @param classNames list of class names
 * @returns a string representing a list of classes.
 */
export function cx(...classNames: Array<string | null | undefined | false>) {
    return classNames.filter(className => typeof className === 'string').join(' ');
}
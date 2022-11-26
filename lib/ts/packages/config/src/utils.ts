export function add() {
    return 2;
}

export function cx(...classNames: Array<string | null | undefined>) {
    return classNames.filter(className => typeof className === 'string').join(' ');
}
export const maxLengthCreator = (max) => (value) => {
    if (value.length > max) {
        return `Не более ${max} символов`;
    }
    return undefined;
}
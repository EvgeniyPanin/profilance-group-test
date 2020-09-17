export const required = (value) => {
    if (value && value.length !== 0) {
        return undefined;
    }
    return 'Это обязательное поле';
}
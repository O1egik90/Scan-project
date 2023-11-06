export function getCurrentYear() {
    const currentDate = new Date(Date.now());
    return currentDate.getFullYear();
}

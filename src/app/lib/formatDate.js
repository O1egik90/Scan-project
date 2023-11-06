export function formatDate(strDate) {
    const date = new Date(strDate).getDate();
    const month = new Date(strDate).getMonth();
    const year = new Date(strDate).getFullYear();
    return `${date < 10 ? '0' + date : date}.${month < 9 ? '0' + (month + 1) : month + 1}.${year}`;
}

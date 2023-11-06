export function bodyLock(status) {
    status ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
}

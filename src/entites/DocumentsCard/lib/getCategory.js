export function getCategory(doc) {
    if (doc.attributes.isTechNews) {
        return 'Технические новости';
    } else if (doc.attributes.isAnnouncement) {
        return 'Анонс или календарь событий';
    } else if (doc.attributes.isDigest) {
        return 'Дайджест';
    } else {
        return 'Лента новостей';
    }
}

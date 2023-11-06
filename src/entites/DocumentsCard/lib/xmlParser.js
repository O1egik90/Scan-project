export function xmlParser(xml) {
    const parser = new DOMParser();
    let xmlStr = parser.parseFromString(xml, 'text/xml');
    let htmlString = xmlStr.children[0].textContent;
    return htmlString;
}

export const NODE_URL = () => {
    // return 'http://www.foreverjuniordev.com:49999'
    return 'http://localhost:49999'
}

export const parseCookie = (ca: any) => {
    let co: any = {};

    for (let i in ca) {
        let c = ca[i].trim().split('=');
        co[c[0]] = c[1];
    }
    
    return co;
}

const exist = (eid: string) => {
    return document.getElementById(eid)
}

const inView = (eid: string) => {
    if (document.getElementById(eid)) {
        let elemTop = document.getElementById(eid).offsetTop;
        let elemBottom = elemTop + document.getElementById(eid).offsetHeight;
        let docViewTop = document.body.scrollTop;
        let docViewBottom = docViewTop + window.innerHeight;
    
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    } else {
        return false
    }
}

export const resetSearch = () => {
    if (exist('search') && !inView('search') && !document.getElementById('search-box').classList.contains('search-fixed')) {
        document.getElementById('search-box').classList.remove('search-restore');
        document.getElementById('search-box').classList.add('search-fixed');
    }
    if (exist('search') && inView('search') && document.getElementById('search-box').classList.contains('search-fixed')) {
        document.getElementById('search-box').classList.remove('search-fixed');
        document.getElementById('search-box').classList.add('search-restore');
    }
}

export const resetPages = () => {
    if (exist('pages') && !inView('controls') && !document.getElementById('controls').classList.contains('controls-fixed')) {
        document.getElementById('controls').classList.add('controls-fixed')
    }
    if (exist('pages') && inView('pages')) {
        document.getElementById('controls').classList.remove('controls-fixed')
    }
}
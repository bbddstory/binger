export const cleanUrl = () => {
    let hash = location.hash,
        lastChar = hash.substring(hash.length - 1);

    if (lastChar === '/') {
        location.hash = hash.substr(0, hash.length - 1);
    }
}

export const parseCookie = (ca: any) => {
    let co: any = {};

    for (let i in ca) {
        let c = ca[i].trim().split('=');
        co[c[0]] = c[1];
    }
    
    return co;
}

// export const parseHash = () => {
//     let hash = location.hash;

//     if (hash.indexOf('?') !== -1) { // There're parameters in the URL
//         return hash.substring(hash.lastIndexOf('/') + 1, hash.indexOf('?'))
//     } else { // There're no parameters
//         let arr = hash.split('/');
//         return arr[arr.length - 1];
//     }
// }

// export const parseParam = (p: string) => {
//     let results = new RegExp('[\?&]' + p + '=[a-zA-Z0-9]*').exec(location.hash);

//     if (results !== null) {
//         let arr = results[0].split('=');
//         return arr[arr.length - 1];
//     } else {
//         return null;
//     }
// }

export const inView = (eid: string) => {
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

export const exist = (eid: string) => {
    return document.getElementById(eid)
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

// export const resetFooter = () => {
//     console.log(document.getElementById('app').scrollHeight, window.innerHeight);
    
//     if (document.getElementById('center').scrollHeight > window.innerHeight) {
//         document.getElementById('footer').classList.remove('footer-fixed')
//     } else {
//         document.getElementById('footer').classList.add('footer-fixed')
//     }
// }
import * as jq from 'jquery';

export const parseCookie = (ca: any) => {
    let co: any = {};

    for (let i in ca) {
        let c = ca[i].trim().split('=');
        co[c[0]] = c[1];
    }
    
    return co;
}

export const cleanUrl = () => {
    let hash = location.hash,
        lastChar = hash.substring(hash.length - 1);

    if (lastChar === '/') {
        location.hash = hash.substr(0, hash.length - 1);
    }
}

export const parseHash = () => {
    let hash = location.hash;

    if (hash.indexOf('?') !== -1) { // There're parameters in the URL
        return hash.substring(hash.lastIndexOf('/') + 1, hash.indexOf('?'))
    } else { // There're no parameters
        let arr = hash.split('/');
        return arr[arr.length - 1];
    }
}

export const parseParam = (p: string) => {
    let results = new RegExp('[\?&]' + p + '=[a-zA-Z0-9]*').exec(location.hash);

    if (results !== null) {
        let arr = results[0].split('=');
        return arr[arr.length - 1];
    } else {
        return null;
    }
}

export const inView = (el: string) => {
    let docViewTop = jq(window).scrollTop();
    let docViewBottom = docViewTop + jq(window).height();

    let elemTop = jq(el).offset().top;
    let elemBottom = elemTop + jq(el).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

export const resetSearch = () => {
    if (!inView('.search') && !jq('.search-box').hasClass('search-fixed')) {
        jq('.search-box').removeClass('search-restore');
        jq('.search-box').addClass('search-fixed');
    }
    if (inView('.search') && jq('.search-box').hasClass('search-fixed')) {
        jq('.search-box').removeClass('search-fixed');
        jq('.search-box').addClass('search-restore');
    }
}

export const resetPages = () => {
    if (!inView('.controls') && !jq('.controls').hasClass('controls-fixed')) {
        jq('.controls').addClass('controls-fixed')
    }
    if (inView('.pages')) {
        jq('.controls').removeClass('controls-fixed')
    }
}

export const resetFooter = () => {
    if (Math.ceil(jq('.footer').offset().top + jq('.footer').height()) < window.innerHeight) {
        jq('.footer').addClass('footer-fixed')
    }
    if (Math.ceil(document.querySelector('#center').scrollHeight) > window.innerHeight) {
        jq('.footer').removeClass('footer-fixed')
    }
}
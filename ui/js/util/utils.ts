import * as jq from 'jquery';

export const inView = (el: string) => {
    var docViewTop = jq(window).scrollTop();
    var docViewBottom = docViewTop + jq(window).height();

    var elemTop = jq(el).offset().top;
    var elemBottom = elemTop + jq(el).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
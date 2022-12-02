import songs from '/js/data/songs.js';

function makeDiv({ id, classes, children }) {
    const div = document.createElement('div');
    div.id = id;
    div.classList.add(...classes);
    children.forEach(c => div.append(c));
    return div;
}
function makeH1({ innerHTML }) {
    const h1 = document.createElement('h1');
    h1.innerHTML = innerHTML;
    return h1;
}
function makeP({ innerHTML }) {
    const p = document.createElement('p');
    p.innerHTML = innerHTML;
    return p;
}
function makeList({ items, itemToStrFn }) {
    function makeLi(innerHTML) {
        const li = document.createElement('li');
        li.innerHTML = innerHTML;
        return li;
    }
    const ul = document.createElement('ul');
    items.forEach(item => ul.append(makeLi(itemToStrFn(item))));
    return ul;
}
export default (function makeSongComponent() {
    const h1 = makeH1({
        innerHTML: 'songs',
    });
    const p = makeP({
        innerHTML: 'hello from songComponent',
    });
    const songList = makeList({
        items: songs,
        itemToStrFn: function songToStr(song) {
            return `${song.artist} - ${song.title}`;
        },
    });
    const container = makeDiv({
        id: 'songComponent',
        classes: ['container', 'mt-4'],
        children: [
            h1,
            p,
            songList,
        ],
    });

    return {
        get: function get() {
            return container;
        },
    };
}());
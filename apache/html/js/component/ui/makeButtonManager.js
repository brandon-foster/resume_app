export default function makeButtonManager(config) {
    const elem = document.createElement('button');
    elem.id = config.id;
    elem.type = 'button'
    elem.classList.add('btn', 'btn-secondary');
    elem.innerHTML = 'go';
    elem.addEventListener('click', function onClick(e) {
        config.clickAction(e);
    });
    return {
        getElem: function getElem() {
            return elem;
        },
    };
};

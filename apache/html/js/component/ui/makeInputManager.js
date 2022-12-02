import addListenerOn from '/js/addListenerOn.js';

export default function makeInputManager(config) {
    const elem = document.createElement('input');
    elem.id = 'itemInput';
    elem.type = 'text';
    const api = {
        getValue: function getValue() {
            return elem.value;
        },
        getElem: function getElem() {
            return elem;
        },
    };
    elem.addEventListener('change', function onChange(e) {
        config.changeAction.bind(api)(e);
    });
    return api;
};
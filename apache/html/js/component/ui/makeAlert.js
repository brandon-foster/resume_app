export default function makeAlert(config) {
    const elem = document.createElement('div');
    elem.id = config.id;            
    elem.classList.add('alert', 'alert-primary');
    elem.innerHTML = config.placeholderText;
    return {
        getElem: function getElem() {
            return elem;
        },
        setText: function setText(text) {
            elem.innerHTML = text;
        },
    };
};
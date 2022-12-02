import waitFor from '/js/util/waitFor.js';

export default function makeResponseManager(config) {
    // const elem = document.getElementById(config.id);
    const elem = document.createElement('span');
    elem.id = config.id;
    let updated = false;
    function setInnerHtml(text) {
        elem.innerHTML = text;
    }
    function getInnerHtml() {
        return elem.innerHTML;
    }
    return {
        update: function update(text) {
            updated = true;
            setInnerHtml(text);
        },
        spin: async function spin() {
            updated = false;
            while (updated === false) {
                async function delay() {
                    await waitFor(50);
                }
                function makeNewStr(oldStr) {
                    if (oldStr.length > 50) {
                        return '.';
                    }
                    return oldStr + '.';
                }
                setInnerHtml(makeNewStr(getInnerHtml()));
                await delay();
            }
        },
        getElem: function getElem() {
            return elem;
        },
    };
};
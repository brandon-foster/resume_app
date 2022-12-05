import dataManager from '/js/dataManager.js';
import addListenerOn from '/js/addListenerOn.js';

function makeUi() {
    const title = document.getElementById('title');
    const body = document.getElementById('body');
    function setTitle(val) {
        title.innerHTML = val;
    }
    function setBody(val) {
        body.innerHTML = val;
    }
    function display(opinion) {
        setTitle(opinion.title);
        setBody(opinion.body);
    }
    return {
        display: display,
    };
};

function makeOpinionLoader(opArr) {
    let availableOpIds = [];
    function populateAvailableOpIds() {
        for (let i = 0; i < opArr.length; i++) {
            availableOpIds.push(i);
        }
    }
    function next() {
        if (availableOpIds.length === 0) {
            populateAvailableOpIds();
        }
        const chosenOpIdIndex = Math.floor(Math.random() * availableOpIds.length);
        const chosenOpId = availableOpIds[chosenOpIdIndex]
        availableOpIds = availableOpIds.filter(num => num !== chosenOpId);
        return opArr[chosenOpId];
    }
    return {
        next: next,
    };
};

window.onload = (async function init() {
    const opArr = await dataManager.getJson('/js/data/opinions.json');
    const opinionLoader = makeOpinionLoader(opArr);
    const ui = makeUi();
    addListenerOn('#loadRandomOpinion', 'click', function rand() {
        const next = opinionLoader.next();
        ui.display(next);
    });
    const next = opinionLoader.next();
    ui.display(next);
}());

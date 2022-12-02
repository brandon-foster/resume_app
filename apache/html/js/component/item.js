import makeInputManager from '/js/component/ui/makeInputManager.js';
import makeButtonManager from '/js/component/ui/makeButtonManager.js';
import makeAlert from '/js/component/ui/makeAlert.js';
import dataManager from '/js/dataManager.js';

export default (function makeItemComponent() {
    const elem = document.getElementById('itemUi');
    let valueString;
    const crudAlert = makeAlert({
        id: 'itemAlert',
        placeholderText: 'placeholder text',
    });
    const itemInputManager = makeInputManager({
        id: 'itemInput',        
        changeAction: function changeAction(e) {
            valueString = this.getValue();
        },
    });
    const itemButtonManager = makeButtonManager({
        id: 'itemButton',
        clickAction: async function clickAction(e) {
            const response = await dataManager.post('/api/item', {
                value: valueString,
            });
            crudAlert.setText(`created: ${response.value}`);
        },
    });
    const components = [
        crudAlert,
        itemInputManager,
        itemButtonManager
    ];
    components.forEach(c => elem.appendChild(c.getElem()));
}());
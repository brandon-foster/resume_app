import addListener from '/js/util/addListener.js';
import dataManager from '/js/dataManager.js';
import purchasesList from '/js/component/purchasesList.js';

export default (function makeUpdatePurchaseFormFn() {
    addListener('form.updatePurchase', 'submit', async function onSubmitUpdatePurchase(e) {
        e.preventDefault();
        const response = await dataManager.put('/api/purchase', {
            peId: this.querySelector('input[name=id]').value,
            peDate: this.querySelector('input[name=date]').value,
            peDollars: this.querySelector('input[name=dollars]').value,
            peTagString: this.querySelector('input[name=tagString]').value,
        });
        purchasesList.update(response);
    });
    return function makeForm(id, date, dollars, tagString) {
        function makeHiddenInput(name, value) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            input.value = value;
            return input;
        }
        function makeTextInput(name, value) {
            const input = document.createElement('input');
            input.type = 'text';
            input.name = name;
            input.value = value;
            return input;
        }
        function makeSubmitInput() {
            const input = document.createElement('input');
            input.type = 'submit';
            return input;
        }
        const form = document.createElement('form');
        form.append(makeHiddenInput('id', id));
        form.append(makeTextInput('date', date));
        form.append(makeTextInput('dollars', dollars));
        form.append(makeTextInput('tagString', tagString));
        form.append(makeSubmitInput());
        form.classList.add('updatePurchase');
        return form;
    }
}());
import dataManager from '/js/dataManager.js';
import purchasesList from '/js/component/purchasesList.js';

export default (function makePurchaseForm(id, { dataManager, purchasesList }) {
    function focus() {
        textInputs.dateInput.focus();
    };
    const form = document.getElementById(id);
    const textInputs = {
        dateInput: form.querySelector('input[name=purchaseDate]'),
        dollarsInput: form.querySelector('input[name=purchaseDollars]'),
        tagStringInput: form.querySelector('input[name=purchaseTagString]'),
    };
    purchasesList.onUpdate(function focusOnCreationForm() {
        focus();
    });
    (function init() {
        function clearInputs() {
            Object.values(textInputs).forEach(v => v.value = '');
            textInputs.dateInput.focus();
        }
        form.addEventListener('submit', async function onPurchaseFormSubmit(e) {
            e.preventDefault();
            const postResponse = await dataManager.post('/api/purchase', {
                peDate: textInputs.dateInput.value,
                peDollars: textInputs.dollarsInput.value,
                peTagString: textInputs.tagStringInput.value,
            });
            purchasesList.add(postResponse);
            clearInputs();
        });
        focus();
    }());
    return {
        getElem: function getElem() {
            return form;
        },
    };
}(
    'purchaseForm',
    {
        dataManager: dataManager,
        purchasesList: purchasesList,
    }
));
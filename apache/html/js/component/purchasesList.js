import addListener from '/js/util/addListener.js';
import makeUpdatePurchaseForm from '/js/makeUpdatePurchaseForm.js';

export default (function makePurchasesList(id) {
    const elem = document.getElementById(id);
    const map = new Map();
    const list = [];
    let onUpdateListener = null;
    addListener('#purchasesList li', 'click', function onLiClick(e) {
        if (this.querySelector('form.updatePurchase') === null) {
            const id = this.querySelector('.peId').innerHTML;
            const values = Array.from(this.querySelector('.details').children).map(span => span.innerHTML);
            this.appendChild(makeUpdatePurchaseForm(id, ...values));
        }
        else if (!e.target.matches('input')) {
            this.querySelector('form.updatePurchase').classList.toggle('hidden');
        }
        if (!e.target.matches('input')) {
            this.querySelector('form.updatePurchase input:nth-of-type(2)').focus();
        }
    });
    function makeLiInnerHtml(obj) {
        const detailsSpan = span(`${span(obj.peDate, ['peDate'])}${span(obj.peDollars, ['peDollars'])}${span(obj.peTagString, ['peTagString'])}`, ['details']);
        return `${span(obj.peId, ['peId'])}${detailsSpan}`
    }
    function span(str, classList = null) {
        const classStr = classList === null ? '' : classList.join(' ');
        return `<span class=${classStr}>${str}</span>`;
    }
    return {
        add: function add(purchaseObj) {
            map.set(purchaseObj.peId, purchaseObj);
            list.push(purchaseObj);
            function makeLi(obj) {
                const li = document.createElement('li');
                li.dataset.id = obj.peId;
                li.innerHTML = makeLiInnerHtml(obj);
                return li;
            }
            elem.prepend(makeLi(purchaseObj));
        },
        getAll: function getAll() {
            return list;
        },
        update: function update(purchaseObj) {
            function updateObj(donor) {
                const patient = map.get(donor.peId);
                patient.peDate = donor.peDate;
                patient.peDollars = donor.peDollars;
                patient.peTagString = donor.peTagString;
            }
            function updateView(obj, li) {
                li.innerHTML = makeLiInnerHtml(obj);
            }
            updateObj(purchaseObj);
            updateView(purchaseObj, elem.querySelector(`li[data-id="${purchaseObj.peId}"]`));
            onUpdateListener();
            return map.get(id);
        },
        onUpdate: function onUpdate(fn) {
            onUpdateListener = fn;
        },
    }
}('purchasesList'));
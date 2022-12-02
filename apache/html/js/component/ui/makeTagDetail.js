import { makeLi, makeUl } from '/js/util/htmlUtils.js';

export default function makeTagDetail(tagObj) {
    const div = document.createElement('div');
    div.classList.add('tagDetail');
    for (const prop in tagObj) {
        if (prop === 'tagStr') {
            div.append(makeLi(tagObj[prop]));
        }
        else if (prop === 'purchaseRecords') {
            function makePurchasesUl() {
                const prUl = document.createElement('ul');
                const purchaseRecords = tagObj[prop];
                purchaseRecords.forEach(pr => {
                    prUl.append(makeLi(`${pr.peId}  ~ ${pr.peDate} ~ ${pr.peDollars} ~ ${pr.peTagString}`));
                });
                return prUl;
            }
            div.append(makeUl(
                [
                    makeLi(`total: ${tagObj.totalDollars}`),
                    makeLi('purchases'),
                    makePurchasesUl()
                ]
            ));
        }
    }
    return div;
};
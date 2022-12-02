import dataManager from '/js/dataManager.js';
import purchasesList from '/js/component/purchasesList.js';
import purchaseForm from '/js/component/purchaseForm.js';
import exportButton from '/js/component/exportButton.js';
import songComponent from '/js/component/songComponent.js';
import makeTagList from '/js/component/makeTagList.js';

window.onload = function onload() {
    (async function loadAllRecords() {
        const allRecords = await dataManager.getJson('/api/purchase');
        allRecords.forEach(r => purchasesList.add(r));
        const tagList = makeTagList({
            id: 'tagList',
            records: allRecords,
            sortKey: 'tagStr',
        });
        function onClickSortBy(e) {
            const sortKey = e.target.dataset.sortKey;
            console.log(`sortKey: ${sortKey}`);
            tagList.sortBy(sortKey);
        }
        const sortByTagStrButton = document.getElementById('sortByTagStr');
        const sortByTotalDollarsButton = document.getElementById('sortByTotalDollars');
        sortByTagStrButton.addEventListener('click', onClickSortBy);
        sortByTotalDollarsButton.addEventListener('click', onClickSortBy);
    }()).then(() => {
        document.body.append(songComponent.get());
    });
};
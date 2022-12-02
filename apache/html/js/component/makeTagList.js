import makeTagRepository from '/js/repository/tagRepository.js';
import makeTagDetail from '/js/component/ui/makeTagDetail.js';

export default function makeTagList({ id, records, sortKey = 'totalDollars' }) {
    const tagRepository = makeTagRepository(records);
    const ui = document.getElementById(id);
    function appendToUi(tagObjList) {
        tagObjList.forEach(tagObj => {
            ui.append(makeTagDetail(tagObj));
        });
    }
    (function init() {
        console.log(`sortKey: ${sortKey}`);
        const individualTags = tagRepository.getIndividualTags();
        const sortedList = individualTags
            .sort((a, b) => {
                if (sortKey === 'totalDollars') {
                    return a.totalDollars - b.totalDollars
                }
                return a.tagStr.localeCompare(b.tagStr);
            });
        console.log(sortedList);
        appendToUi(
            sortedList
        );
    }());
    return {
        sortBy: function sortBy(sortKey) {
            console.log(`sorting by ${sortKey}`);
            ui.innerHTML = '';
            appendToUi(tagRepository
                .getIndividualTags()
                .sort((a, b) => {
                    if (sortKey === 'totalDollars') {
                        return a.totalDollars - b.totalDollars
                    }
                    return a.tagStr.localeCompare(b.tagStr);
                }));
        },
    };
};
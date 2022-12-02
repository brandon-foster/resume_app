export default function makeTagRepository(purchaseRecords) {
    const tagToRecords = new Map();
    const individualTagToRecords = new Map();
    const tags = [];
    const individualTags = [];
    function createTagObj(tagString, purchaseRecordList) {
        function calcTotal(records) {
            return records
                .map(rec => rec.peDollars)
                .map(str => parseInt(str))
                .reduce((total, num) => total + num);
        }
        return {
            tagStr: tagString,
            totalDollars: calcTotal(purchaseRecordList),
            purchaseRecords: purchaseRecordList,
        };
    }
    purchaseRecords.forEach(pe => {
        (function initTagToRecords() {
            if (!tagToRecords.has(pe.peTagString)) {
                tagToRecords.set(pe.peTagString, [pe]);
            }
            else {
                tagToRecords.get(pe.peTagString).push(pe);
            }
        }());
    });
    purchaseRecords.forEach(pe => {
        (function initIndividualTagToRecords() {
            const tagArr = pe.peTagString.split('*');
            tagArr.forEach(t => {
                if (!individualTagToRecords.has(t)) {
                    individualTagToRecords.set(t, [pe]);
                }
                else {
                    individualTagToRecords.get(t).push(pe);
                }
            });
        }());
    });
    (function initTags() {
        for (const [tagString, purchaseRecordList] of tagToRecords) {
            tags.push(createTagObj(tagString, purchaseRecordList));
        }
    }());
    (function initIndividualTags() {
        for (const [individualTag, purchaseRecordList] of individualTagToRecords) {
            individualTags.push(createTagObj(individualTag, purchaseRecordList));
        }
    }());
    function getMapTagToPurchaseRecords() {
        return tagToRecords;
    }
//    function getTags() {
//        return tags;
//    }
    function getIndividualTags() {
        return individualTags;
    }
    return {
        getMapTagToPurchaseRecords: getMapTagToPurchaseRecords,
//        getTags: getTags,
        getIndividualTags: getIndividualTags,
    };
};
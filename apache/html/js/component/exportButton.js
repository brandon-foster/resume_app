import purchasesList from '/js/component/purchasesList.js';

export default (function makeExportButton(id) {
    document.getElementById(id).addEventListener('click', function onExportButtonClick(e) {
        let sql = '';
        purchasesList.getAll().forEach(p => {
            sql += `INSERT INTO purchase_entity (pe_date, pe_dollars, pe_tag_string) VALUES ('${p.peDate}', '${p.peDollars}', '${p.peTagString}');`;
            sql += '\n';
        });
        console.log(sql);
    });
}('exportButton'));
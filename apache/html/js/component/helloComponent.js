import makeButtonManager from '/js/component/ui/makeButtonManager.js';
import makeResponseManager from '/js/makeResponseManager.js';
import dataManager from '/js/dataManager.js';

export default (function makeHelloComponent() {
    const helloComponent = {
        elem: document.getElementById('helloComponent'),
        helloButtonManager: makeButtonManager({
            id: 'helloButton',
            clickAction: async function clickAction(e) {
                helloComponent.helloResponseManager.spin();
                const data = await dataManager.getText('/api/hello');
                helloComponent.helloResponseManager.update(data);
            },
        }),
        helloResponseManager: makeResponseManager({
            id: 'helloResponse',
        }),
    };
    helloComponent.elem.appendChild(helloComponent.helloButtonManager.getElem());
    helloComponent.elem.appendChild(helloComponent.helloResponseManager.getElem());
}());
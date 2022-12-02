export default function addListener(selector, eventType, handler) {
    document.addEventListener(eventType, function intermediateHandler(e) {
        let target = e.target;
        while (target !== null) {
            if (target.matches(selector)) {
                handler.bind(target)(e);
                return;
            }
            target = target.parentElement;
        }
    });
};
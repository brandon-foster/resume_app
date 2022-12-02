export default function addListenerOn(selector, eventType, handler) {
    document.addEventListener(eventType, function handle(e) {
        let target = e.target;
        while (target !== null) {
            if (target.matches(selector)) {
                handler(e);
                return;
            }
            target = target.parentElement;
        }
    });    
}
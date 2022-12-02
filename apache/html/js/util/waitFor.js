export default function waitFor(millis) {
    return new Promise((res, rej) => {
        setTimeout(res, millis);
    });
};
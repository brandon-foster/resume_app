export default (function makeDataManager() {
    return {
        getText: function getText(path) {
            return new Promise(async (res, rej) => {
                fetch(path)
                    .then(response => response.text())
                    .then(text => res(text));
            });
        },
        getJson: function getJson(path) {
            return new Promise(async (res, rej) => {
                fetch(path)
                    .then(response => response.json())
                    .then(json => res(json));
            });
        },
        post: function post(path, obj) {
            return new Promise(async (res, rej) => {
                fetch(path, {
                    method: 'POST',
                    body: JSON.stringify(obj),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(resp => resp.json())
                    .then(json => res(json))
                    .catch(err => console.log(err));
            });
        },
        put: function put(path, obj) {
            return new Promise(async (res, rej) => {
                fetch(path, {
                    method: 'PUT',
                    body: JSON.stringify(obj),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(resp => resp.json())
                    .then(json => res(json))
                    .catch(err => console.log(err));
            });
        }
    };
}());
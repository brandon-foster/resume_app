function makeLi(str) {
    const li = document.createElement('li');
    li.innerHTML = str;
    return li;
}
function makeUl(liArr) {
    const ul = document.createElement('ul');
    liArr.forEach(li => ul.append(li));
    return ul;
}

export { makeLi, makeUl };
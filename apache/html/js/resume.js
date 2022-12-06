const resItems = [
    {
        heading: 'CGI Federal',
        lines: [
            {
                title: 'OpenShift to EKS Migration',
                text: 'Transition microservices to EKS from OpenShift for development, UAT, and prod environments',                
                tags: [
                    'EKS',
                ],
            },
            {
                title: 'Remove Technical Debt',
                text: 'Refactor inherited code',
                tags: [
                    'JUnit', 'Mockito', 'JaCoCo', 'Spring Boot', 'unit testing', 'Spring integration testing', 'controller testing', 'Java',
                ],
            },
            {
                title: 'Prod Support Sub Team',
                text: 'Selected to join production support team to deliver priority enahancements and defect resolution',
                tags: ['Java', 'PostgreSQL', 'Oracle', 'Bash', 'EKS'],
            },
        ],
    },
];

function createTitle(title) {
    const h3 = document.createElement('h3');
    h3.innerHTML = title;
    h3.classList.add('fw-light');
    return h3;
}

function createP(text) {
    const p = document.createElement('p');
    p.innerHTML = text;
    return p;
}

function createAnchor(text, href) {
    const a = document.createElement('a');
    a.innerText = text;
    a.href = href;
    a.classList.add('btn', 'btn-sm', 'btn-secondary', 'fw-bold', 'border-white', 'bg-white');
    return a;
}

function createTagList(tagArr) {
    const anchors = tagArr.map(t => {
       console.log(t);
        return createAnchor(t, '#');
    });
    console.log(anchors);
    const wrapper = document.createElement('div');
    anchors.forEach(a => wrapper.append(a));
    return wrapper;
}

function createLineElem(lineObj) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('row', 'mt-5');

//    const colLeft = document.createElement('div');
//    colLeft.classList.add('col-md-3');
//    colLeft.append(createTagList(lineObj.tags));
//
//    const colRight = document.createElement('div');
//    colRight.classList.add('col-md-9');
//    colRight.append(createP(lineObj.text));

    wrapper.append(createTitle(lineObj.title));
//    wrapper.append(colLeft);
//    wrapper.append(colRight);
    wrapper.append(createP(lineObj.text));
    wrapper.append(createTagList(lineObj.tags));
    return wrapper;
}

function createHeading(heading) {
    const h2 = document.createElement('h2');
    h2.innerHTML = heading;
    h2.classList.add('mt-5');
    return h2;
}

function makeResItemElem(resItem) {
    const lineElems = resItem.lines.map(l => createLineElem(l));
    const wrapper = document.createElement('div');
    wrapper.classList.add('w-max-42em', 'd-flex', 'w-100', 'text-center', 'mx-auto', 'mb-auto', 'flex-column');
    wrapper.append(createHeading(resItem.heading));
    lineElems.forEach(le => wrapper.append(le));
    return wrapper;
}

window.onload = (function init() {
    const main = document.querySelector('main');
    main.append(makeResItemElem(resItems[0]));
}());
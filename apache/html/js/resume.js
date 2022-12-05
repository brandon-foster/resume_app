const resItems = [
    {
        heading: 'CGI Federal',
        lines: [
            {
                text: 'Transition microservices to EKS from OpenShift for development, UAT, and prod environments',                
                tags: [
                    'EKS',
                ],
            },
            {
                text: 'Refactor inherited code',
                tags: [
                    'JUnit', 'Mockito', 'JaCoCo', 'Spring Boot', 'unit testing', 'Spring integration testing', 'controller testing', 'Java',
                ],
            },
            {
                text: 'Selected to join production support team to deliver priority enahancements and defect resolution',
                tags: ['Java', 'PostgreSQL', 'Oracle', 'Bash', 'EKS'],
            },
        ],
    },
];

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
    wrapper.classList.add('row', 'mt-4');

    const colLeft = document.createElement('div');
    colLeft.classList.add('col-md-3');
    colLeft.append(createTagList(lineObj.tags));

    const colRight = document.createElement('div');
    colRight.classList.add('col-md-9');
    colRight.append(createP(lineObj.text));

    wrapper.append(colLeft);
    wrapper.append(colRight);
    return wrapper;
}

function makeResItemElem(resItem) {
    const heading = document.createElement('h1');
    heading.innerHTML = resItem.heading;
    heading.classList.add('mt-5');
    
    const lineElems = resItem.lines.map(l => createLineElem(l));

    const wrapper = document.createElement('div');
    wrapper.append(heading);
    lineElems.forEach(le => wrapper.append(le));
    return wrapper;
}

window.onload = (function init() {
    const main = document.querySelector('main');
    main.append(makeResItemElem(resItems[0]));
}());
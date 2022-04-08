const urlParamsStr = window.location.search;
const urlParams = new URLSearchParams(urlParamsStr);
const projectParam = urlParams.get('pr');

function loadProjectsPage() {
    if (urlParams.has('pr')) {
        if (projectParam == 'terflo') {
            loadProjectInPage('terflo');
        } else if (projectParam == 'lbts') {
            loadProjectInPage('lbts');
        } else if (projectParam == 'lusass' || projectParam == 'lushassault') {
            loadProjectInPage('lusass');
        }
    }
}
function loadProjectInPage(pr) {
    if (pr == 'terflo') {
        window.location.href = "https://withered.app/hub/projects/terflo/";
    } else if (pr == 'lbts') {
        window.location.href = "https://withered.app/hub/projects/lbts/";
    } else if (pr == 'lusass') {
        window.location.href = "https://withered.app/hub/projects/lushassault/";
    }
}
const metalabUrls = [
    'metalab.co',
    'jointempest.com',
    'ambi.school',
    'dwavesys.com',
    'neuralink.com',
    'visitworldheritage.com',
    'crypto.com',
    'otter.ai',
    'notarize.com',
    'valueact.com',
    'mysudo.com',
    'getflow.com',
    'ubereats.com',
    'slack.com',
    'coinbase.com'
]

chrome.runtime.onInstalled.addListener(function() {
    // Replace all rules ...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
        {
        // That fires when a page's URL matches one in the metalabUrls array ...
        conditions: metalabUrls.map(url => {
            return new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { urlContains: url },
            })
        }),
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
        }
    ]);
    });
});

function addPopupToDom(domContent) {
    console.log('I received DOM content');
}

chrome.pageAction.onClicked.addListener( (tab) => {
    chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, addPopupToDom)
})
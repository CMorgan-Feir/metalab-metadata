const metalabUrls = [
    'metalab.co',
    'jointempest.com',
    'ambi.school',
    'dwavesys.com',
    'neuralink.com',
    'visitworldheritage.com',
    'crypto.com',
    'otter.ai',
    // http:google-amp-gallery-vr-demo-12ab3gsbn3gv1.surge.sh
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
        // That fires when a page's URL contains a 'g' ...
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

function doStuffWithDom(domContent) {
    console.log('I received DOM content');
}

chrome.pageAction.onClicked.addListener( (tab) => {
    console.log('Sending message')
    chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom)
})
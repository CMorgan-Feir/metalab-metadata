
const addDivToPage = (doc) => {

    const containerDiv = doc.createElement('DIV')
    document.body.appendChild(containerDiv)
    const containerStyle = 'color: black; background: white; margin: 50px; border-radius: 15px; height: 250px; border: 1px solid blue; position: fixed !important; width: 400px; height: 250px !important; top: -17px !important; right: -17px !important; z-index: 2147483647 !important; border-width: initial !important; border-style: none !important; border-color: initial !important;border-image: initial !important; box-shadow: 0 30px 50px 0 rgba(44,49,59,0.20);'
    containerDiv.setAttribute("style", containerStyle)

    const closeDivContainer = doc.createElement('DIV')
    const closeDivContainerStyle = 'display: flex; justify-content: flex-end; margin: 10px'
    closeDivContainer.setAttribute("style", closeDivContainerStyle)
    containerDiv.appendChild(closeDivContainer)

    const closeButtonContainer = doc.createElement('DIV')
    closeDivContainer.appendChild(closeButtonContainer)
    const svgString = '<svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="CSS-Peeper-2.0" stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="csspeeper-icons" transform="translate(-350.000000, -272.000000)" fill-rule="nonzero"> <path d="M356.414214,277 L359.707107,273.707107 C360.097631,273.316582 360.097631,272.683418 359.707107,272.292893 C359.316582,271.902369 358.683418,271.902369 358.292893,272.292893 L355,275.585786 L351.707107,272.292893 C351.316582,271.902369 350.683418,271.902369 350.292893,272.292893 C349.902369,272.683418 349.902369,273.316582 350.292893,273.707107 L353.585786,277 L350.292893,280.292893 C349.902369,280.683418 349.902369,281.316582 350.292893,281.707107 C350.683418,282.097631 351.316582,282.097631 351.707107,281.707107 L355,278.414214 L358.292893,281.707107 C358.683418,282.097631 359.316582,282.097631 359.707107,281.707107 C360.097631,281.316582 360.097631,280.683418 359.707107,280.292893 L356.414214,277 Z" id="close-ico"></path> </g> </g> </svg>'
    closeButtonContainer.innerHTML = svgString

    const textContainer = doc.createElement('DIV')
    textContainer.textContent = 'MADE BY METALAB'
    containerDiv.appendChild(textContainer)
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    addDivToPage(document)
    sendResponse(document.all[0].outerHTML);
});

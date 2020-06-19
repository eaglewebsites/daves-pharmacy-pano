// Hot spot creation function
const hotspot = (hotSpotDiv, args) => {
    hotSpotDiv.classList.add('custom-tooltip')
    var span = document.createElement('span')
    span.innerHTML = args
    hotSpotDiv.appendChild(span)
    span.style.width = span.scrollWidth - 20 + 'px'
    span.style.marginLeft =
        -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px'
    span.style.marginTop = -span.scrollHeight - 12 + 'px'
}

// const hotspot = () => {
//     alert('user cliekd')
// }

// pitch: 35 top -35 bottom of image
// yaw: -80 left and 80 right edge of image

const hotspots = [
    {
        pitch: 2, // up and down on x axis
        yaw: -66, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <img src="/img/DSC_0007-min.jpg"/>
                <p class="text-gray-800">
                    Developed by a pharmacist and a mother for her daughter with eczema,
                    <strong>Kosmatology is made</strong> with your skin in mind. We offer the
                    entire organic skincare line that is safe for all of your family members.
                </p>
            </div>`,
    },
    {
        pitch: -6, // up and down on x axis
        yaw: -50, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <p class="text-gray-800">
                    From kids to adults, we have your vitamin, cough, cold and allergy needs
                    met!
                </p>
            </div>`,
    },
    {
        pitch: 2, // up and down on x axis
        yaw: 42, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <img src="/img/IMG_0093-min.jpg"/>
                <p class="text-gray-800">
                    Check out our seasonal section! We keep you health in
                    mind through every season. From our array of sun blocks
                    and bug sprays in the summer to immunity products and
                    cough drops in the winter. Your seasonal needs are located
                    right inside the front door for your convenience.
                </p>
            </div>`,
    },
    {
        pitch: 1.8, // up and down on x axis
        yaw: 59, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <p class="text-gray-800">
                    With a full brace line and a stocked first aid section,
                    we have your back when those accidents happen!
                </p>
            </div>`,
    },
    {
        pitch: -3, // up and down on x axis
        yaw: 71, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <img src="/img/IMG_0079-min.jpg"/>
                <p class="text-gray-800">
                    From crutches to canes and even a flashy red walker, we have
                    your essential home health needs covered!
                </p>
            </div>`,
    },
]

export default hotspots

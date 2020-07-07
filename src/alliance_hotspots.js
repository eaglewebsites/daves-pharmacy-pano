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

// pitch: 35 top -35 bottom of image
// yaw: -80 left and 80 right edge of image

const alliance_hotspots = [
    {
        pitch: 8, // up and down on x axis
        yaw: -60, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <img src="/img/IMG_0014.jpg"/>
                <p class="text-gray-800">
                    That cough or cold have you down? We have your back! Check out our
                    entire line of cough and cold essentials today.
                </p>
            </div>`,
    },
    {
        pitch: -8, // up and down on x axis
        yaw: 44, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <img src="/img/IMG_0023.jpg"/>
                <p class="text-gray-800">
                    Since 2004, Naked Bee has been committed to making high quality products
                    with sustainable ingredients. Naked Bee is never made with harse chemical
                    fillters or additives. Their products are also never tested on animals. All
                    naked Bee products are made in the USA!
                </p>
            </div>`,
    },
    {
        pitch: 2, // up and down on x axis
        yaw: 16, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <img src="/img/IMG_0026.jpg"/>
                <p class="text-gray-800">
                    Immunity is your body's best defense! Come see our entire line of immune products
                    ranging from Sambucol to Emergen-C and everywhere in between.
                </p>
            </div>`,
    },
    {
        pitch: 6, // up and down on x axis
        yaw: 61, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <img src="/img/IMG_0028.jpg"/>
                <p class="text-gray-800">
                    From the all-natural to the traditional, we have your kiddos covered with all the
                    essentials for coughs, colds, fevers, allergies, teething, and beyond.
                </p>
            </div>`,
    },
    {
        pitch: -22, // up and down on x axis
        yaw: 32, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <img src="/img/IMG_0030.jpg"/>
                <p class="text-gray-800">
                    Made in Boulder Colorado, Goddess Garden is for the planet and for the people.
                    Starting from humble beginnings with a mineral sunscreen to expanding to offer
                    skincare lines for adults and infants, Goddess Garden has stayed true to its
                    core. They offer all natural and sustainable products that are both safe for you
                    and your kiddos.
                </p>
            </div>`,
    },
    {
        pitch: -12, // up and down on x axis
        yaw: 25, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <img src="/img/IMG_0033.jpg"/>
                <p class="text-gray-800">
                    Developed by a pharmacist and a mother for her daughter with eczema, Kosmatology
                    is made with your skin in mind. We offers the entire organic skincare line that
                    is safe for all of your family members.
                </p>
            </div>`,
    },
    {
        pitch: 3, // up and down on x axis
        yaw: 1, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <img src="/img/IMG_0043.jpg"/>
                <p class="text-gray-800">
                    Dave's Pharmacy offers two essential oil lines (Young Living and Natural Truth)
                    complete with diffusers, carrier oils, dropper bottles, and products made with
                    essential oils.
                </p>
            </div>`,
    },
    {
        pitch: -4, // up and down on x axis
        yaw: -27, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <img src="/img/IMG_0047.jpg"/>
                <p class="text-gray-800">
                    Made with fair trade ingredients and with the honey bees in mind, this
                    luscious lip balm is a must have! It's a staff favorite and a portion of the
                    purchases goes to honey bee research/conservation. Watch for seasonal flavors, they
                    sell out fast!
                </p>
            </div>`,
    },
    {
        pitch: -15, // up and down on x axis
        yaw: 5, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <img src="/img/IMG_0051.jpg"/>
                <p class="text-gray-800">
                    Relax and unwind with our full line of USA made bath salts and bubble baths. From
                    soothing lavender to our muscle ease blend you can erase the day away!
                </p>
            </div>`,
    },
    {
        pitch: -7, // up and down on x axis
        yaw: -54, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <p class="text-gray-800">
                    Allergies are no fun. Come ask our pharmacist which of our many over-the-counter
                    allergy solutions is right for you!
                </p>
            </div>`,
    },
    {
        pitch: 0, // up and down on x axis
        yaw: -44, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <p class="text-gray-800">
                    Whether its a simple scrape or something much more severe, we can help you out
                    in our fully loaded first aid section. We also offer two full athletic brace lines!
                </p>
            </div>`,
    },
    {
        pitch: -15, // up and down on x axis
        yaw: -37, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <p class="text-gray-800">
                    Ask us about our immunization and clinical services today!
                </p>
            </div>`,
    },
    {
        pitch: 7, // up and down on x axis
        yaw: -43, // left and right on y axis
        cssClass: 'custom-hotspot',
        createTooltipFunc: hotspot,
        createTooltipArgs: `
            <div>
                <p class="text-gray-800">
                    Safety is our number one priority and this is why we carry NOVA. With walkers
                    of all shapes, sizes, and colors, canes with any design, bathroom safety, and
                    cushions; our NOVA room is stocked with all of your home health needs.
                </p>
            </div>`,
    },
]

export default alliance_hotspots

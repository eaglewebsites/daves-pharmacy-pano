import 'alpinejs'
import './style.css'
import hotspots from './hotspots'

/**
 * Base x-data to use with alpine
 */
const pharmacy = () => {
    return {
        init: function () {
            console.log('⚡️ initilized alpinejs..')
            this.createPanoramicView()
        },
        createPanoramicView: function () {
            pannellum.viewer('panorama', {
                type: 'equirectangular',
                panorama: '/img/hemingford_pano.jpg',
                haov: 160.87, // wideness
                vaov: 70.15, // height
                vOffset: 0, // view offset (how 'high' you have to look),
                hfov: 50, //zoom level,
                preview: '/img/preview.png',
                hotSpots: hotspots,
            })
        },
    }
}

/**
 * Initialize pharmacy object on window to use with alpine
 */
window.pharmacy = pharmacy

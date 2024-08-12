import { BUY_ICECREAM } from "./icecreamTypes"
/**
 * This is buycake action creator
 * @see https://stackoverflow.com
 * @returns this returns buy cake string
 */
export const buyIcecream = () => {
    return {
        type: BUY_ICECREAM
    }
}
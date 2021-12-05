
"use strict";

export class Aqi {

    #aqi;

    constructor(aqi) {
        this.#aqi = aqi;
    }

    getAqi() {
        return this.#aqi;
    }

    setAqi(aqi) {
        this.#aqi = aqi;
    }

    /**
     * Determine level of concerns based on AQI:
        0 - Good
        1 - Moderate
        2 - Unhealthy for Sensitive Groups
        3 - Unhealthy
        4 - Very Unhealthy
        5 - Hazardous
     * 
     * @returns {Number | String}
     */
    getLevelOfAqi() {
        let aqi = this.#aqi;

        if (0 <= aqi && aqi <= 50)
            return 0;
        else if (51 <= aqi && aqi <= 100)
            return 1;
        else if (101 <= aqi && aqi <= 150)
            return 2;
        else if (151 <= aqi && aqi <= 200)
            return 3;
        else if (201 <= aqi && aqi <= 300)
            return 4;
        else if (301 <= aqi && aqi <= 500)
            return 5;
        else
            throw ("Not a valid AQI.");
    }

    getStatus() {
        switch (this.getLevelOfAqi(this.#aqi)) {
            case 0:
                return "Good";
            case 1:
                return "Moderate";
            case 2:
                return "Unhealthy for Sensitive Groups";
            case 3:
                return "Unhealthy";
            case 4:
                return "Very Unhealthy";
            case 5:
                return "Hazardous";
        }
    }
}
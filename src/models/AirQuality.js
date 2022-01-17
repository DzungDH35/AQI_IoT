export class AirQuality {
	#pollutants = null; // so2, no2, co, o3, pm2_5, pm10
	#aqi = null;
	#location = null;
	#time = null;

	constructor(data = {}) {
		this.setSo2(data.so2);
		this.setNo2(data.no2);
		this.setCo(data.co);
		this.setO3(data.o3);
		this.setPm2_5(data.pm2_5);
		this.setPm10(data.pm10);
		this.setAqi(data.aqi);
		this.setLocation(data.location);
		this.setTime(data.time);
	}

	getSo2() { return this.#pollutants.so2; }
	setSo2(so2) { if (so2 >= 0) this.#pollutants.so2 = so2; }

	getNo2() { return this.#pollutants.no2; }
	setNo2(no2) { if (no2 >= 0) this.#pollutants.no2 = no2; }

	getCo() { return this.#pollutants.co; }
	setCo(co) { if (co >= 0) this.#pollutants.co = co; }

	getO3() { return this.#pollutants.o3; }
	setO3(o3) { if (o3 >= 0) this.#pollutants.o3 = o3; }

	getPm2_5() { return this.#pollutants.pm2_5; }
	setPm2_5(pm2_5) { if (pm2_5 >= 0) this.#pollutants.pm2_5 = pm2_5; }

	getPm10() { return this.#pollutants.pm10; }
	setPm10(pm10) { if (pm10 >= 0) this.#pollutants.pm10 = pm10; }

	getAqi() { return this.#aqi; }
	setAqi(aqi) {
		if (0 <= aqi || aqi <= 500)
			this.#aqi = aqi;
		else
			throw ("Not a valid AQI.");
	}

	getLocation() { return this.#location; }
	setLocation(location) { this.location = location; }

	getTime() { return this.#time; }
	setTime(time) { this.#time = time; }

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
	}

	getStatus() {
		switch (this.getLevelOfAqi(this.#aqi)) {
			case 0:
				return "Good";
			case 1:
				return "Moderate";
			case 2:
				return "Unhealthy for sensitive groups";
			case 3:
				return "Unhealthy";
			case 4:
				return "Very Unhealthy";
			case 5:
				return "Hazardous";
		}
	}
}
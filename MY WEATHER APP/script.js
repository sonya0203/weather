const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '41110d1827msh13d64087c059f7ap19e6d1jsnd56b0386c84f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function getWeather(city) {
	try {
		const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
}

city = "Mumbai"
function search(city) {
	getWeather(city)
		.then(data => {
			cityName.innerHTML = city;
			temp.innerHTML = data.temp;
			temp2.innerHTML = data.temp;
			feels_like.innerHTML = data.feels_like;
			humidity.innerHTML = data.humidity;
			humidity2.innerHTML = data.humidity;
			min_temp.innerHTML = data.min_temp;
			max_temp.innerHTML = data.max_temp;
			wind_speed.innerHTML = data.wind_speed;
			wind_speed2.innerHTML = data.wind_speed;
			wind_degrees.innerHTML = data.wind_degrees;
			sunrise.innerHTML = data.sunrise;
			sunset.innerHTML = data.sunset;
		});
}

search(city);

submit.addEventListener("click",(e)=>{
	e.preventDefault();
	cityValue = document.getElementById("city").value
	console.log(cityValue)
	search(cityValue)
})

const cities = ["Punjab", "delhi", "goa", "pune", "kudal"];
const tableRows = document.querySelectorAll("tbody tr");


cities.forEach(async (element, index) => {
	const data = await getWeather(element);
	console.log(data); 

	if (tableRows[index]) {
		const cells = tableRows[index].querySelectorAll("td");
		cells[0].textContent = data.cloud_pct;
		cells[1].textContent = data.temp;
		cells[2].textContent = data.feels_like;
		cells[3].textContent = data.humidity;
		cells[4].textContent = data.min_temp;
		cells[5].textContent = data.max_temp;
		cells[6].textContent = data.wind_speed;
		cells[7].textContent = data.wind_degrees;
		cells[8].textContent = data.sunrise;
		cells[9].textContent = data.sunset;
	}
});

const formloc = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')


const updateUI = (data) =>{
    // const citydetails = data.citydetails
    // const weather = data.weather
    console.log(data)

    const {citydetails ,weather } = data

    details.innerHTML = `
    <h5 class="my-3">${citydetails.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>
`   
    const iconsrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconsrc)

    let timesrc = null;
    if(weather.IsDayTime){ 
       timesrc = 'img/day.svg';
    }
     else{
         timesrc = 'img/night.svg';
     }
     time.setAttribute('src', timesrc)
    if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
}

}

const updateCity =async (city) => {
const citydetails = await getcity(city)     
const weather  = await getweather(citydetails.Key)

return {citydetails, weather }
}
formloc.addEventListener('submit', e =>{
 e.preventDefault()


 const city = formloc.city.value.trim()
 formloc.reset()
 updateCity(city)
 .then(data => updateUI(data))
 .catch(err => console.log(err))

})

const key = "gj8mhEphF6tGjl6wXTtRtpEySG0Yssov"

const getweather =  async (id) => {
    const base ="http://dataservice.accuweather.com/currentconditions/v1/"
    const query =`${id}?apikey=${key}`
    const response = await fetch(base + query)
    const data = await response.json()
return data[0]
}

const getcity = async (city) => {
    const base ="http://dataservice.accuweather.com/locations/v1/cities/search"
    const query =`?apikey=${key}&q=${city}`
    const response = await fetch(base + query)
    const data = await response.json()
    return data[0]
}


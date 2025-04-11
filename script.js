async function getCountry() {
    response = await fetch("https://restcountries.com/v3.1/all")
    countryData = await response.json()
    console.log(countryData)
    content = ""

    countryData.forEach(country => {
        content += `
        <div class="card m-3 p-4 text-light bg-dark rounded-0" style="width: 18rem; height: 440px ">
            <img src=${country.flags.svg} class="card-img-top img-fluid rounded-2" style="height:130px;" alt="${country.flags.alt}">
            <div class="card-body px-2">
                <h5 class="card-title">${country.name.official}</h5>
                <h6 class="card-title text-primary">Capital : ${country.capital}</h6>
                <h6 class="card-title ">Region : ${country.region}</h6>
                <h6 class="card-title ">Population : ${country.population}</h6>
                <h6 class="card-title ">${country.name.common} is ${country.unMember?'a member of UN': 'not a Member of UN'}</h6>
                <h6 class="card-title ">${country.name.common} is ${country.independent?'an Independent Country': 'not an Independent Country'}</h6>
            </div>
        </div>
        `
    });
    countries.innerHTML = content
}
getCountry()
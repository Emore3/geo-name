const container = document.querySelector(`.container`)
const main = document.querySelector(`.main`)


const nationForm = document.querySelector(`.nation`)
const nationInput = document.querySelector(`.nation__input`)
const btn = document.querySelector(`.btn`)

nationForm.onsubmit = async (e) => {
    e.preventDefault()
    const name = nationInput.value
    const response = await fetch(`https://api.nationalize.io?name=${name}`)
    const mapp = await response.json()
    console.log({mapp})

    let sum = 0
    let manny = []
    let con = []


    

    for (let index = 0; index < mapp.country.length; index++) {
        let probby = mapp.country[index].probability
        sum += probby
        manny.push(probby)


        allCountries.forEach(country => {
            if(country.code === mapp.country[index].country_id){
              con.push(country.name)
            }
          })
    }

    console.log(manny)
    console.log(con)

    const propp = document.querySelector(`.percent`)
    // propp.innerHTML = ''
    arrd = []
    for (let i = 0; i < manny.length; i++) {
        let hat = (manny[i] / sum) * 100
        // propp.innerHTML += 
        // `
        // <div class="perce">
        //     <div class="per" style="width: ${hat}%;"></div>
        // </div>
        // `

        arrd.push(`
        <h3> ${con[i]} </h3>
        <div class="perce">
            <div class="per" style="width: ${hat}%;"></div>
        </div>
        `) 
    }
    propp.innerHTML = arrd

    console.log("finished")
    
  }



// nationForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     alert(`hello my name is ${nationInput.value}`);

//     let sum = 0
//     let manny = []
//     for (let index = 0; index < mapp[2].country.length; index++) {
//         let probby = mapp[2].country[index].probability
//         sum += probby
//         manny.push(probby)
//     }

//     console.log(manny)

//     const propp = document.querySelector(`.percent`)
//     propp.innerHTML = ''
//     for (let i = 0; i < manny.length; i++) {
//         let hat = (manny[i] / sum) * 100
//         propp.innerHTML += 
//         `
//         <div class="perce">
//             <div class="per" style="width: ${hat}%;"></div>
//         </div>
//         `
//     }

// });

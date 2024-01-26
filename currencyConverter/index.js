const apiKey = "e0f8896cb15f592d9c38c86b";
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`

const fetchData = async () => {
    const response = await fetch(url)
    const data = await response.json
    console.log(data)
    // .then(response => response.json())
    // .then(json => {
    //     console.log(response)
    // })
}
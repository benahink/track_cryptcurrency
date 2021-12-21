let btc = document.getElementById('btc')
let eth = document.getElementById('eth')
let doge = document.getElementById('doge')

let url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd"

axios.get(url)
    .then(function(response) {
        console.log(response.data)
        let data = response.data 
        btc.innerHTML = data.bitcoin.usd
        eth.innerHTML = data.ethereum.usd
        doge.innerHTML = data.dogecoin.usd
    }).catch(err => console.log(err))




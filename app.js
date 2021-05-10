const tableBody = document.querySelector(".table-body");
const mainContainer = document.querySelector(".container");
axios
  .get(
    "https:api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  )
  .then((res) => {
    let allCurrencies = res.data;
    // console.log(allCurrencies);
    let cryptoCoin = "";
    // Loop over each coin object in the data array:
    allCurrencies.forEach((coin) => {
      cryptoCoin += "<tr>";
      cryptoCoin += `<td> <img src="${coin.image}"> </td>`;
      // cryptoCoin += `<td> ${coin.symbol} </td>`;
      cryptoCoin += `<td> ${coin.name} </td>`;
      cryptoCoin += `<td> £${coin.current_price}</td>`;
      cryptoCoin += `<td> ${coin.price_change_percentage_24h}%</td>`;
      cryptoCoin += `<td> ${coin.market_cap}</td>`;

      // const coinName = coin.name;
      // const coinDiv = document.createElement("div");
      // coinDiv.innerHTML = coinName;
      // mainContainer.appendChild(coinDiv);
    });
    document.getElementById("data").innerHTML = cryptoCoin;
  })
  .catch((e) => {
    console.log(e);
  });

// const getAllCurrencies = async () => {
//   try {
//     const res = await axios.get(
//       "https:api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=20&page=1&sparkline=false"
//     );
//     const currenciesArray = res.data;
//   } catch (e) {
//     console.log(e);
//   }
// };
// getAllCurrencies();

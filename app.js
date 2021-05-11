const tableBody = document.querySelector(".table-body");
const mainContainer = document.querySelector(".container");
axios
  .get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
  )
  .then((res) => {
    let allCurrencies = res.data;
    // console.log(allCurrencies);
    let cryptoCoin = "";

    // Loop over each coin object in the data array and
    allCurrencies.forEach((coin) => {
      cryptoCoin += "<tr>";
      cryptoCoin += `<td> ${coin.market_cap_rank} </td>`;
      cryptoCoin += `<td> <img src="${coin.image}"> </td>`;
      cryptoCoin += `<td class="text-start">${coin.symbol.toUpperCase()}</td>`;
      cryptoCoin += `<td class="text-start"> £${coin.current_price
        .toFixed(2)
        .toLocaleString()}</td>`;
      if (coin.price_change_percentage_24h < 0) {
        cryptoCoin += `<td class="text-danger"> ${coin.price_change_percentage_24h.toFixed(
          2
        )}%</td>`;
      } else {
        cryptoCoin += `<td class="text-success"> ${coin.price_change_percentage_24h.toFixed(
          2
        )}%</td>`;
      }
      if (coin.price_change_percentage_7d_in_currency < 0) {
        cryptoCoin += `<td class="text-danger"> ${coin.price_change_percentage_7d_in_currency.toFixed(
          2
        )}%</td>`;
      } else {
        cryptoCoin += `<td class="text-success"> ${coin.price_change_percentage_7d_in_currency.toFixed(
          2
        )}%</td>`;
      }
      cryptoCoin += `<td> £${coin.market_cap.toLocaleString()}</td>`;
    });
    // if (coin.price_change_percentage_24h < 0) {
    //   coin.price_change_percentage_24h.display.style = "red";
    // }
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

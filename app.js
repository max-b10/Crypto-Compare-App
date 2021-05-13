const portfolioButton = document.querySelector("#return-button");

const tableBody = document.querySelector(".table-body");
const mainContainer = document.querySelector(".container");
const searchTextInput = document.querySelector("#search-text");
// let deviceWidth = document.documentElement.clientWidth || window.innerWidth;

portfolioButton.addEventListener("click", () => {
  window.location.replace("https://portfoliomax.netlify.app");
});

axios
  .get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
  )
  .then((res) => {
    let allCurrencies = res.data;
    let cryptoCoin = "";
    // console.log(allCurrencies);
    // Loop over each coin object
    allCurrencies.forEach((coin) => {
      cryptoCoin += `<tr class="coin-row"> `;
      cryptoCoin += `<td> ${coin.market_cap_rank} </td>`;
      cryptoCoin += `<td> <img src="${coin.image}"> </td>`;
      cryptoCoin += `<td class="text-start coin-id">${coin.id.toUpperCase()}</td>`;
      cryptoCoin += `<td class="text-start"> £${coin.current_price
        .toFixed(2)
        .toLocaleString()}</td>`;
      if (coin.price_change_percentage_24h_in_currency < 0) {
        cryptoCoin += `<td class="text-danger small-screen"> ${coin.price_change_percentage_24h_in_currency}%</td>`;
      } else {
        cryptoCoin += `<td class="text-success small-screen"> ${coin.price_change_percentage_24h_in_currency}%</td>`;
      }
      if (coin.price_change_percentage_7d_in_currency < 0) {
        cryptoCoin += `<td class="text-danger small-screen"> ${coin.price_change_percentage_7d_in_currency.toFixed(
          2
        )}%</td>`;
      } else {
        cryptoCoin += `<td class="text-success small-screen"> ${coin.price_change_percentage_7d_in_currency.toFixed(
          2
        )}%</td>`;
      }
      cryptoCoin += `<td class="small-screen"> £${coin.market_cap.toLocaleString()}</td>`;
    });

    document.getElementById("data").innerHTML = cryptoCoin;
  })
  .catch((e) => {
    console.log(e);
  });

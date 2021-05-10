const tableBody = document.querySelector(".table-body");

axios
  .get(
    "https:api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=20&page=1&sparkline=false"
  )
  .then((res) => {
    const allCurrencies = res.data;
    console.log(allCurrencies);
  })
  .catch((e) => {
    console.log(e);
  });

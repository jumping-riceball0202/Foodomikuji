const results = ["粉もん", "中華", "イタリアン", "スペイン料理", "ロシア料理", "韓国料理", "エスニック", "未知の味", "トルコ料理", "創作和食", "とんかつ", "すし", "焼肉", "沖縄料理"];
let lastResult = null;

document.getElementById("omikujiBtn").addEventListener("click", () => {
  let result;
  // 直前と同じ結果が出ないようにする
  do {
    result = results[Math.floor(Math.random() * results.length)];
  } while (result === lastResult);

  lastResult = result;

  // 結果を表示
  document.getElementById("result").innerHTML =
  `今日の気分は…<br>「<span class="result-word">${result}</span>」です！`;
});

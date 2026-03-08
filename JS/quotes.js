const quotes = [
{
    quote: '성공은 준비된 자에게 찾아온다.',
    author: "루이 파스퇴르",
},
{
    quote:'나는 실패한 게 아니다. 작동하지 않는 1만 가지 방법을 발견한 것이다.',
    author:"토머스 에디슨",
},
{
    quote:'생각하는 대로 살지 않으면, 사는 대로 생각하게 된다.',
    author:"폴 발레리",
},
{
    quote:'행동이 모든 성공의 기초이다.',
    author:"파블로 피카소",
},
{
    quote:'자신을 이기는 것이 가장 위대한 승리다.',
    author:"플라톤",
},
{
    quote:'미래는 그것을 준비하는 사람의 것이다.',
    author:"말콤 엑스",
},
{
    quote:'나는 생각한다, 고로 존재한다.',
    author:"르네 데카르트",
},
{
    quote:'기회는 준비된 사람에게만 보인다.',
    author:"루이 파스퇴르",
},
{
    quote:'위대한 일은 작은 일들을 모아 이루어진다.',
    author:"빈센트 반 고흐",
},
{
    quote:'두려움은 도전의 시작점일 뿐이다.',
    author:"넬슨 만델라",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const refreshQuoteButton = document.querySelector("#refresh-quote");

function paintQuote() {
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;

}

paintQuote();

refreshQuoteButton.addEventListener("click", paintQuote);

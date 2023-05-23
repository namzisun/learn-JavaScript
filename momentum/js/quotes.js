const quotes = [
	{
		quote: "quote1",
		auther: "auther1"
	},
	{
		quote: "quote2",
		auther: "auther2"
	},
	{
		quote: "quote3",
		auther: "auther3"
	},
	{
		quote: "quote3",
		auther: "auther3"
	},
	{
		quote: "quote4",
		auther: "auther4"
	},
	{
		quote: "quote5",
		auther: "auther5"
	},
	{
		quote: "quote6",
		auther: "auther6"
	},
	{
		quote: "quote7",
		auther: "auther7"
	},
	{
		quote: "quote8",
		auther: "auther8"
	},
	{
		quote: "quote9",
		auther: "auther9"
	},
	{
		quote: "quote10",
		auther: "auther10"
	},
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

let indexOfQuotes = Math.floor(Math.random() * quotes.length)
const todaysQuote = quotes[indexOfQuotes]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.auther
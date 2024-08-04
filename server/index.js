const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3003);

// app.get('/', (req, res) => {
// 	res.send('Hello, Express')
// });

app.listen(app.get('port'), ()=>{
	console.log(app.get('port'), '번 포트에서 대기 중')
});


const axios = require("axios");
const cheerio = require("cheerio");
const https = require('https');

const getHTML = async (keyword) => {
	const endpoint = [
		"https://www.y-mart.de/de/search?q=" + encodeURI(keyword),
		"https://dawayo.de/de/?post_type=product&s=" + encodeURI(keyword)
	];
	const httpsAgent = new https.Agent({
		rejectUnauthorized: false
	})

	try {
		return axios.all(endpoint
				.map((endpoint) => axios.get(endpoint, {httpsAgent})))
	} catch (err) {
		console.log(err);
	}
};
// Parsing for Ymart
const parsingYmart = async (page) => {
	const $ = cheerio.load(page); // 웹 페이지를 파싱이 가능한 구조로 로드 시킴
	// console.log(page)
	let products = [];
	$('.yprodlist .prodcard').each(function(i, elm) {
		const baseUrl = 'http://www.y-mart.de';
		const title = $(this).find('.card-title').text();
		const link = $(this).find('a').attr('href');
		const portion = $(this).find('.prodspecs:nth-of-type(1)').find('.text-nowrap').text().trim();
		const price = $(this).find('.prodlistprice').text().trim();
		products.push({
			title: title,
			link: baseUrl + link,
			portion: portion,
			price: price,
		});
	});

	return products;
};

// Parsing for Dawayo
const parsingDawayo = async (page) => {
	const $ = cheerio.load(page); // 웹 페이지를 파싱이 가능한 구조로 로드 시킴

	let products = [];
	$('ul.products li').each(function(i, elm) {
		const baseUrl = 'http://dawayo.de/';
		const title = $(this).find('.woocommerce-loop-product__title').text();
		const link = $(this).find('.woocommerce-loop-product__title').find('a').attr('href');
		const portion = $(this).find('.price').find('.mcmp_recalc_price_row').text().trim();
		const price = $(this).find('.price > .woocommerce-Price-amount').text();

		products.push({
			title: title,
			link: baseUrl + link,
			portion: portion,
			price: price,
		});
	});


	return products;
};

const getProducts = async (keyword) => {
	const html = await getHTML(keyword); // Get Data

	const productsYmart = await parsingYmart(html[0].data); // Parsing for Ymart and return as array
	const productsDawayo = await parsingDawayo(html[1].data); // Parsing for Dawayo and return as array

	console.log(productsYmart, productsDawayo);
};

getProducts('김치'); // Get products with keyword
/** @type {import('tailwindcss').Config} */
const { Roboto, Permanent_Marker } = require("next/dist/compiled/@next/font/dist/google");
module.exports = {
	content: [
		"./component/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				custom: {
					text: {
						basic: '#444444'
					},
					gray: {
						lightest: '#eeeeee',
						lighter: '#dddddd',
						light: '#cccccc',
						dark: '#bbbbbb',
						darker: '#888888',
						darkest: '#444444',
					},
					turkishRose: '#b57281',
					pinkGray: '#e7dada',
					deepPink: '#8f4b5a'
				}
			}
		},
		fontFamily: {
			Roboto: 'Roboto',
			Permanent_Marker: 'Permanent_Marker',
		}
	},
	plugins: [],
}


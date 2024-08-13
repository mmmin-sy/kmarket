import React from 'react'

import ResultItem, { ResultProps} from '@/component/Result/ResultItem';
import {describe} from "node:test";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("ResultItem tests suite", () => {
	// it("Initial tests", () => {
	// 	expect(2).toEqual(3);
	// });
	it("result item output", () => {
		let testItem: ResultProps = {
			title: 'title 01',
			link:  'http://google.com',
			portion:  '1 €/kg',
			price:  '12.33',
			market:  'Rewe'
		}
		render(<ResultItem item={testItem}></ResultItem>);
		// expect(utils.container).toMatchSnapshot();

		expect(screen.getByTestId('title').innerHTML).toBe('title 01');
		expect(screen.getByTestId('price').innerHTML).toBe('12.33 €');
		expect(screen.getByTestId('portion').innerHTML).toBe('1 €/kg');
		expect(screen.getByTestId('market').innerHTML).toBe('Rewe');
	});

})

import Link from "next/link";
import {FunctionComponent} from "react";

export interface ResultProps {
	title: string,
	link: string,
	portion: string,
	price: string,
	market: string
}

export interface ResultItemProps {
	item: {
		title: string,
		link: string,
		portion: string,
		price: string,
		market: string
	}
}

export default function ResultItem({ item }: ResultItemProps){
	return (
		<div className="grid grid-cols-[2fr_1fr_0.5fr_50px_50px] py-1 px-2 border-x border-b border-solid border-custom-gray-light hover:bg-custom-gray-lightest">
			<span data-testid="title" className="flex items-center text-sm">{item.title}</span>
			<span data-testid="price" className="font-bold pl-5 pr-2 text-right">{item.price} €</span>
			<span data-testid="portion" className="flex items-center text-xs pr-2">{item.portion}</span>
			<span data-testid="market" className="flex items-center text-xs pr-2">{item.market}</span>
			<Link href={item.link} target="_blank" className="flex items-center text-xs underline">Go Shop</Link>
		</div>
	)
}
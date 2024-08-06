import Link from "next/link";

interface ResultItemProps {
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
		<div className="grid grid-cols-[2fr_1fr_0.5fr_50px_50px] py-1">
			<span className="text-sm">{item.title}</span>
			<span className="font-bold pl-5 pr-2 text-right">{item.price}</span>
			<span className="text-xs pr-2">{item.portion}</span>
			<span className="text-xs pr-2">{item.market}</span>
			<Link href={item.link} target="_blank" className="text-xs underline">Go Shop</Link>
		</div>
	)
}
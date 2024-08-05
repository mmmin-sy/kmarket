import Link from "next/link";

interface ResultItemProps {
	item: {
		title: string,
		link: string,
		portion: string,
		price: string
	}
}

export default function ResultItem({ item }: ResultItemProps){
	return (
		<div className="flex items-center">
			<span className="text-sm">{item.title}</span>
			<span className="font-bold pl-5 pr-2">{item.price}</span>
			<span className="text-xs pr-2">{item.portion}</span>

			<Link href={item.link} target="_blank" className="text-xs underline">Go Shop</Link>
		</div>
	)
}
import { SelectOption } from '@/types/form';
import ArrowIcon from "@/assets/icons/arrow";
import {useState} from "react";
import Image from 'next/image'

export interface SelectBoxProps {
	options: SelectOption[];
}
export default function SelectBox ({ options }: SelectBoxProps){
	const [selected, setSelect] = useState<SelectOption>(options[0]);
	const [open, setOpen] = useState<boolean>(false)
	const iconWidth = 24;

	const selectOption = (option: SelectOption) =>{
		setSelect(option);
		setOpen(false);
	}

	return (
		<div className="text-sm">
			<div className={`flex justify-between border border-solid border-custom-gray-light rounded-tl-md rounded-tr-md ${open ? '' : 'rounded-md '} cursor-pointer`}>
				<div className={`flex justify-between w-full`} onClick={() => setOpen(!open)}>
					<div className={`flex appearance-none p-2 focus:outline-none w-[calc(100%-${iconWidth}px)] rounded-tl-md ${open ? '' : 'rounded-bl-md'} cursor-pointer`}>
						{selected.img && (
							<span className="pr-1"><Image src={selected.img} alt="en" width={20} height={15}/></span>)}
						{selected?.text}
					</div>

					<div className={`w-[${iconWidth}] pr-2 flex items-center`}>
						<span className={`${open ? 'rotate-180' :''}`}><ArrowIcon/></span>
					</div>
				</div>
			</div>

			{open && (
				<div className="border border-solid border-custom-gray-light border-t-0">
					{options.map((option, id) => (
						<div
							className={`w-[calc(100%+${iconWidth}px)] cursor-pointer hover:bg-custom-gray-light`} key={id}
							onClick={() => selectOption(option)}
						>
							<div className="flex p-2">
								{option.img && (
									<span className="pr-1"><Image src={option.img} alt="en" width={20} height={15}/></span>)}
								<span>{option.text}</span>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	)
}
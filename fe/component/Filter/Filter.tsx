import React, {useState} from 'react';
interface FilterProps {
	max: number;
	min: number;
	unit?: string;
}
export default function Filter ({ max, min, unit }: FilterProps){
	const sliderRef = React.useRef<HTMLInputElement>(null);
	const lowerRef = React.useRef<HTMLInputElement>(null);
	const upperRef = React.useRef<HTMLInputElement>(null);

	const [lowerPercentage, setLowerPer] = useState<number>(0);
	const [upperPercentage, setUpperPer] = useState<number>(100);

	const [lowerValue, setLowerVal] = useState<number>(min);
	const [upperValue, setUpperVal] = useState<number>(max);


	const getPercentage = (current) => {
		const sliderWidth = sliderRef.current.getBoundingClientRect().width;
		return Math.round((100 * current) / sliderWidth);
	}

	const handleLowerMouseMove = (event) => {
		let position = event.clientX;
		const start = 0;
		const upperElement = upperRef.current.getBoundingClientRect().left - 16;

		if (position < start) position = start;
		if (position >= (upperElement - 10)) position = upperElement - 5;

		const newPercentage = getPercentage(position);

		setLowerPer(newPercentage);
		setLowerVal((max * newPercentage) / 100);
	}

	const handleLowerMouseDown = () => {
		document.addEventListener('mousemove', handleLowerMouseMove);
		document.addEventListener('mouseup', handleLowerMouseUp);
	}

	const handleLowerMouseUp = () => {
		document.removeEventListener('mouseup', handleLowerMouseUp);
		document.removeEventListener('mousemove', handleLowerMouseMove);
	}

	const handleUpperMouseDown = () => {
		document.addEventListener('mousemove', handleUpperMouseMove);
		document.addEventListener('mouseup', handleUpperMouseUp);
	}

	const handleUpperMouseMove = (event) => {
		let position = event.clientX;

		const end = sliderRef.current.getBoundingClientRect().width;
		const lowerElement = lowerRef.current.getBoundingClientRect().left + 16;

		if (position <= (lowerElement - 10)) position = lowerElement - 5;
		if (position > end) position = end;

		const newPercentage = getPercentage(position);
		setUpperPer(newPercentage);
		setUpperVal((max * newPercentage) / 100);
	}

	const handleUpperMouseUp = () => {
		document.removeEventListener('mouseup', handleUpperMouseUp);
		document.removeEventListener('mousemove', handleUpperMouseMove);
	}

	return (
		<div className="relative">
			<div className="h-[4px]">
				<div ref={sliderRef} className="h-full border border-solid bg-custom-gray-lighter rounded">

					<div className="w-full absolute top-0 left-0 h-[4px]">

						<div className="relative">
							<div
								ref={lowerRef}
								className="absolute w-[16px] h-[16px] top-[-6px] rounded-lg bg-custom-deepPink cursor-pointer z-10"
								onMouseDown={handleLowerMouseDown}
								onMouseUp={handleLowerMouseUp}
								style={{left: `calc(${lowerPercentage}% - 16px)`}}
							>
							</div>
							<div
								className="absolute bg-custom-deepPink h-[4px] w-full z-0"
								style={{left: `${lowerPercentage}%`, right: `${100 - upperPercentage}%`, width: `${(100 - lowerPercentage - (100 - upperPercentage))}%`}}
							></div>
							<div
								ref={upperRef}
								className="absolute w-[16px] h-[16px] top-[-6px] rounded-lg bg-custom-deepPink cursor-pointer z-10"
								onMouseDown={handleUpperMouseDown}
								onMouseUp={handleUpperMouseUp}
								style={{right: `calc(${100 - upperPercentage}% - 16px)`}}
							>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute left-0 top-4">{lowerValue} {unit}</div>
			<div className="absolute right-0 top-4">{upperValue} {unit}</div>
		</div>
	)
}
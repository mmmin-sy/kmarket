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
	const diff = React.useRef<HTMLInputElement>(null);

	const [lowerPercentage, setLowerPer] = useState<number>(0);
	const [upperPercentage, setUpperPer] = useState<number>(100);

	const [lowerValue, setLowerVal] = useState<number>(min);
	const [upperValue, setUpperVal] = useState<number>(max);


	const getPercentage = (current) => {
		const sliderWidth = sliderRef.current.getBoundingClientRect().width;
		return Math.floor((100 * current) / sliderWidth);
	}

	const handleMouseMoveLower = (event) => {
		let position = event.clientX;
		const start = 0;
		const upperElement = upperRef.current.getBoundingClientRect().left - 16;

		if (position < start) position = start;
		if (position > upperElement) position = upperElement - 1;

		const newPercentage = getPercentage(position);
		if (lowerPercentage !== newPercentage) {
			setLowerPer(newPercentage);
			setLowerVal((max * newPercentage) / 100);
		}
	}

	// 슬라이트버튼을 눌렀을때.
	// moving 할수있는 이벤트 등록.
	const handleMouseDownLower = (event) => {
		console.log(event.clientX, lowerRef.current.getBoundingClientRect().left)
		document.addEventListener('mousemove', handleMouseMoveLower);
		document.addEventListener('mouseup', handleMouseUpLower);
	}

	const handleMouseUpLower = () => {
		document.removeEventListener('mouseup', handleMouseUpLower);
		document.removeEventListener('mousemove', handleMouseMoveLower);
	}

	const handleMouseDownUpper = (event) => {
		document.addEventListener('mousemove', handleMouseMoveUpper);
		document.addEventListener('mouseup', handleMouseUpUpper);
	}

	const handleMouseMoveUpper = (event) => {
		let position = event.clientX;

		const end = sliderRef.current.getBoundingClientRect().width;
		const lowerElement = lowerRef.current.getBoundingClientRect().left + 8;

		if (position < lowerElement) position = lowerElement;
		if (position > end) position = end;

		const newPercentage = getPercentage(position);
		if (upperPercentage !== newPercentage) {
			setUpperPer(newPercentage);
			setUpperVal((max * newPercentage) / 100);
		}
	}

	const handleMouseUpUpper = () => {
		document.removeEventListener('mouseup', handleMouseUpUpper);
		document.removeEventListener('mousemove', handleMouseMoveUpper);
	}

	return (
		<div className="relative">
			<div className="h-[8px]">
				<div ref={sliderRef} className="h-full border border-solid bg-custom-gray-lighter rounded">

					<div className="w-full absolute top-0 left-0 h-[8px]">

						<div className="relative">
							<div
								ref={lowerRef}
								className="absolute w-[16px] h-[16px] top-[-4px] rounded-md bg-custom-deepPink cursor-pointer z-10"
								onMouseDown={handleMouseDownLower}
								onMouseUp={handleMouseUpLower}
								style={{left: `calc(${lowerPercentage}% - 8px)`}}
							>
							</div>
							<div
								className="absolute bg-custom-deepPink h-[8px] w-full z-0"
								style={{left: `${lowerPercentage}%`, right: `${100 - upperPercentage}%`, width: `${(100 - lowerPercentage - (100 - upperPercentage))}%`}}
							></div>
							<div
								ref={upperRef}
								className="absolute w-[16px] h-[16px] top-[-4px] rounded-md bg-custom-deepPink cursor-pointer"
								onMouseDown={handleMouseDownUpper}
								onMouseUp={handleMouseUpUpper}
								style={{right: `calc(${100 - upperPercentage}% - 8px)`}}
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
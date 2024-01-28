import {ReactNode, useState} from "react";

const Tooltip = ({
	children,
	content,
}: {
	children: ReactNode;
	content: string;
}) => {
	const [active, setActive] = useState(false);
	return (
		<>
			<div
				className="inline-block relative text-center"
				onMouseEnter={() => setActive(true)}
				onMouseLeave={() => setActive(false)}>
				{children}
				{active && (
					<div className="absolute -top-6 bg-[#0e4c94] px-2 rounded-md text-white right-0 translate-[-50%,-50%]">
						{content}
					</div>
				)}
			</div>
		</>
	);
};

export default Tooltip;

import {ReactNode} from "react";
import {motion} from "framer-motion";
import {useToolTip} from "../hooks/useToolTip";

type ToolTipProps = {
	text: string;
	children: ReactNode;
};

const Tooltip = ({text, children}: ToolTipProps) => {
	const {showToolTip, setShowToolTip} = useToolTip();
	return (
		<>
			<div
				className="relative w-auto h-auto"
				onMouseEnter={() => setShowToolTip(true)}
				onMouseLeave={() => setShowToolTip(false)}>
				<motion.div
					variants={{
						hidden: {
							opacity: 0,
						},
						visible: {
							opacity: 1,
						},
					}}
					initial="hidden"
					animate={showToolTip ? "visible" : "hidden"}
					className="absolute bg-[#0e4c94] rounded-md px-2 py-1 text-white left-0 top-0">
					{text}
				</motion.div>
				{children}
			</div>
		</>
	);
};

export default Tooltip;

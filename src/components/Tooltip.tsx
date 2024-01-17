import {ReactNode} from "react";
import {motion} from "framer-motion";

type ToolTipProps = {
	text: string;
	showToolTip: boolean;
	children: ReactNode;
};

const Tooltip = ({text, showToolTip, children}: ToolTipProps) => {
	return (
		<>
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
				className="absolute w-auto h-auto py-2 px-3 top-0">
				{text}
			</motion.div>
			{children}
		</>
	);
};

export default Tooltip;

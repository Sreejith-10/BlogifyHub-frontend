import {useToolTip} from "../hooks/useToolTip";
import {motion} from "framer-motion";

const Tooltip = () => {
	const [showToolTip] = useToolTip();
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
				className="absolute w-auto h-auto py-2 px-3">
				Tooltip
			</motion.div>
		</>
	);
};

export default Tooltip;

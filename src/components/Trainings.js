import React from "react";
import "../styles/Trainings.css";
import { motion } from "framer-motion";
import { TrainingData } from "../data/TrainingData";
import TrainingCard from "./TrainingCard";

const Trainings = () => {
	const fade = {
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

	return (
		<div className='trainings' id='trainings'>
			<div className='container'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={fade}
					viewport={{ once: true }}
					className='heading'>
					{/* <p className='heading-sub-text'></p> */}
					<p className='heading-text'>Trainings &amp; Certificates</p>
				</motion.div>

				<motion.div
					className='trainings-box'
					initial={{ opacity: 0 }}
					whileInView={fade}
					viewport={{ once: true }}>
					{TrainingData.map((t, index) => (
						<TrainingCard t={t} key={index} />
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default Trainings;

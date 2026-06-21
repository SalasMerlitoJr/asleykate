import React from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";
import { SkillsData } from "../data/SkillsData";

const Skills = () => {
	const skillEffect = {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

	return (
		<>
			<div className='skills' id='skills'>
				<div className='container'>
					<motion.div
						whileInView={skillEffect}
						initial={{ y: "-80px", opacity: 0 }}
						className='heading'>
						<p className='heading-text'>Education</p>
					</motion.div>
					<motion.div
						whileInView={skillEffect}
						className='education-list'
						initial={{ y: "-80px", opacity: 0 }}>
						{SkillsData.map((el, index) => (
							<div className='education-item' key={index}>
								<div className='education-bullet'>{el.icon}</div>
								<div className='education-text'>
									<h3 className='education-degree'>{el.degree}</h3>
									<p className='education-institution'>{el.institution}</p>
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Skills;

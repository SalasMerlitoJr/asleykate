// Replace these placeholder entries with your actual trainings and certificates.
// icon: any react-icons component
// issuer: organization that issued it
// year: completion year (string, so you can use ranges like "2021 - 2022")
// credentialUrl: optional, link to verify/view the credential (leave as "" if none)

import {
	FaCertificate,
	FaUserMd,
	FaHeartbeat,
	FaShieldVirus,
} from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";

export const TrainingData = [
	{
		title: "Philippine Integrated Disease Surveillance and Response (PIDSR) Training",
		issuer: "Department of Health (Philippines)",
		year: "",
		desc: "National training program that equips healthcare professionals in disease surveillance, outbreak investigation, and rapid response to strengthen public health defenses.",
		icon: <FaHeartbeat />,
		credentialUrl: "",
	},
	{
		title: "Training for the EREID CHD Coordinators on Prevention and Response Strategies",
		issuer: "Department of Health (Philippines)",
		year: "",
		desc: "Training program for CHD Coordinators on surveillance, outbreak investigation, and rapid response to emerging and re‑emerging infectious diseases.",
		icon: <MdLocalHospital />,
		credentialUrl: "",
	},
	{
		title: "Dengue Clinical Practice Guidelines Refresher",
		issuer: "Department of Health - Region X",
		year: "2023",
		desc: "A refresher training on updated clinical guidelines for the diagnosis, management, and prevention of dengue cases.",
		icon: <GiHealthNormal />,
		credentialUrl: "",
	},
	{
		title: "National HIV Counseling and Testing Training of Trainers (HCT TOT)",
		issuer: "Department of Health (Philippines)",
		year: "",
		desc: "A specialized program preparing trainers to deliver standardized HIV counseling and testing services nationwide.",
		icon: <FaShieldVirus />,
		credentialUrl: "",
	},
	{
		title: "Advanced Cardiac Life Support",
		issuer: "Department of Health (Philippines)",
		year: "",
		desc: "Training on advanced emergency cardiovascular care, including resuscitation protocols and critical interventions.",
		icon: <FaCertificate />,
		credentialUrl: "",
	},
	{
		title: "Basic Life Support",
		issuer: "Department of Health (Philippines)",
		year: "",
		desc: "Foundational training on CPR, first aid, and immediate response to life‑threatening emergencies.",
		icon: <FaUserMd />,
		credentialUrl: "",
	},
];

import { FaStethoscope, FaHospital, FaHeartbeat } from "react-icons/fa";
import { GiMicroscope, GiPill, GiSyringe, GiHealthNormal, GiTestTubes, GiCaduceus } from "react-icons/gi";
import { MdLocalPharmacy } from "react-icons/md";
import { RiFirstAidKitLine } from "react-icons/ri";

export const SkillsData = [
    // Core Medical Stack
    { name: "Stethoscope", icon: <FaStethoscope /> },
    { name: "Hospital", icon: <FaHospital /> },
    { name: "Heartbeat", icon: <FaHeartbeat /> },
    { name: "Microscope", icon: <GiMicroscope /> },
    { name: "Pill", icon: <GiPill /> },
    { name: "Syringe", icon: <GiSyringe /> },

    // Diagnostics & Lab
    { name: "Test Tubes", icon: <GiTestTubes /> },
    { name: "Pharmacy", icon: <MdLocalPharmacy /> },
    { name: "Health", icon: <GiHealthNormal /> },

    // Emergency & Care
    { name: "First Aid", icon: <RiFirstAidKitLine /> },

    // Added Icons
    { name: "Caduceus", icon: <GiCaduceus /> },   // universal medical symbol
    { name: "DNA", icon: <GiHealthNormal /> },    // represents genetics & modern medicine
];

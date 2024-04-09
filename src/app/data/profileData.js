import {
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMobileAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import userPic from "../assets/Symun2.jpg";

export const profileData = [{
  name: "Md. Symun Majumdar",
  occupation: "Front-End Web Developer",
  imageUrl: userPic,
  socialMedia: [
    { icon: FaFacebookF, link: "#",color: "#1773ea" },
    { icon: FaTwitter, link: "#",color: "#1773ea" },
    { icon: FaInstagram, link: "#", color: "#1773ea" },
    { icon: FaLinkedinIn, link: "#", color: "#1773ea" },
  ],
  contactInfo: [
    { icon: FaMobileAlt, label: "Phone", value: "+123 456 7890" },
    { icon: FaEnvelopeOpenText, label: "Email", value: "msymunnadeem@gmail.com" },
    { icon: FaLocationDot, label: "Location", value: "Mohammadpur Dhaka Bangladesh" },
    { icon: FaCalendarAlt, label: "Birthday", value: "June 12, 1998" },
  ],
}] 
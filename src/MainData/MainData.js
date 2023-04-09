import AboutSection from "../Sections/AboutSection/AboutSection";
import { ContactSection } from "../Sections/ContactSection/ContactSection";
import { HomeSection } from "../Sections/HomeSection/HomeSection";

export const routes = [
    {
        id: 1,
        slug: "/",
        component: <HomeSection />
    },
    {
        id: 2,
        slug: "/contact",
        component: <ContactSection />
    },
    {
        id: 2,
        slug: "/about",
        component: <AboutSection />
    }
]

export const NavMenu = [
    {
        id: 1,
        url: "/",
        label: "Home",

    },
    {
        id: 2,
        url: "/about",
        label: "About",

    },
    {
        id: 3,
        url: "/contact",
        label: "Contact",

    }
]

export const techSkill = [
    {
        id: 1,
        label: "React.js"
    },
    {
        id: 2,
        label: "Next.js"
    },
    {
        id: 3,
        label: "Redux"
    },
    {
        id: 4,
        label: "JavaScript"
    },
    {
        id: 5,
        label: "Html"
    },
    {
        id: 6,
        label: "Css"
    },
    {
        id: 7,
        label: "BootStrap"
    },

]

export const alsoKnow = [
    {
        id: 1,
        label: "Node.js Basic"
    },
    {
        id: 2,
        label: "MySql Basic"
    },
    {
        id: 3,
        label: "Sequalize"
    },
    {
        id: 4,
        label: "Material UI"
    },
    {
        id: 5,
        label: "React Bootstrap"
    },
]

export const platForms = [
    {
        id: 1,
        label: "Visual studio Code"
    },
    {
        id: 2,
        label: "Shogun"
    },
    {
        id: 3,
        label: "Postman"
    },
    {
        id: 4,
        label: "Shopify"
    },
    {
        id: 5,
        label: "Netlify"
    },
]

export const experience = [
    {
        id: 1,
        title: "ReactJs Developer",
        company: "Squad Technologies Pvt Ltd - Ahmedabad, Gujarat",
        duration: "March 2022 to Till date"

    },
    {
        id: 2,
        title: "Jr ReactJs Developer",
        company: "Haraxy Technologies Pvt Ltd - Gandhinagar, Gujarat",
        duration: "Nov 2021 to March 2022"

    },
    {
        id: 3,
        title: "Sr Service Engineer (Industrial service)",
        company: "Jet Inks Private Ltd - Ahmedabad, Gujarat",
        duration: "January 2020 to July 2021"

    },
    {
        id: 4,
        title: "Service Engineer (Industrial service)",
        company: "Squad Technologies Pvt Ltd - Ahmedabad, Gujarat",
        duration: "June 2018 to December 2019"

    },
    {
        id: 5,
        title: "Service Engineer (Industrial service)",
        company: "Sahajanand Laser Technology private Ltd - Gandhinagar, Gujarat",
        duration: "October 2016 to June 2018"

    },
]

export const projects = [
    {
        id: 7,
        title: "Nylas Integration(March 2023 – till date)",
        technology: "Next.js,Node Api,HTML, css",
        customerProduct: "Mail Management",
        platformUsed: "visual studio code",

    },
    {
        id: 6,
        title: "E-commerce App UI(Dec 2022 – Feb 2023)",
        technology: "Next.js, Material UI, css",
        customerProduct: "Clothes",
        platformUsed: "visual studio code,figma",

    },
    {
        id: 5,
        title: "Weather App and Business Detail listing(Dec 2022 – March 2023)",
        technology: "Next.js,Next API, Material UI, css,React-bootstrap",
        customerProduct: "Weather and business detail app",
        platformUsed: "visual studio code",
        features:'Google-map-react , Admin panel,created api in next.js'

    },
    {
        id: 4,
        title: "HRMS App (June 2022 – Dec 2022)",
        technology: "React.js, Material UI, css",
        customerProduct: "Hrms",
        platformUsed: "visual studio code,figma",
        features:'Dashboard'

    },
    {
        id: 3,
        title: "E-commerce App (May 2022 - Nov 2022)",
        technology: "Next.js , Material UI, css",
        customerProduct: "steel plants",
        platformUsed: "Shogun ,shopify"

    },
    {
        id: 2,
        title: "E-commerce App (Mar 2022 –Sept 2022)",
        technology: "Next.js,htm,css,JavaScript",
        customerProduct: "Clothes, footwear ,bags etc.",
        platformUsed: "Shogun, shopify",
        features: "Google Analytics,multi-store(world-wide),multi-language,multi-currency ,infinite scroll,filter"

    },
    {
        id: 1,
        title: "E-commerce App (Nov 2021 –Mar 22)",
        technology: "React.js, Redux, html, css,JavaScript",
        customerProduct: "Clothes",
        platformUsed: "visual studio code,figma"

    },
]
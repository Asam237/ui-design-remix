import { Link } from "react-router-dom"
import MenuImg from "../../assets/pictures/menu.png"

interface NavsProps {
    link: string
    name?: string
    img?: any
}
const navs: NavsProps[] = [
    {
        link: "#",
        name: "About technology"
    },
    {
        link: "#",
        name: "Pricing"
    },
    {
        link: "#",
        name: "Contact"
    },
    {
        link: "#",
        name: "Download files"
    },
    {
        link: "#",
        img: MenuImg
    }
]

export default function HeaderComponent() {
    return (
        <header className="flex flex-col md:flex-row md:justify-between md:items-center">
            <h1 className="text-2xl" style={{ fontFamily: 'Fredoka One, cursive' }}> SOLUTION</h1>

            <div>
                <ul className="flex flex-col md:flex-row">
                    {
                        navs.map((item, index) => {
                            return (
                                <li key={index} className="mt-1 md:mt-0 md:ml-8">
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                            )
                        })
                    }
                    <li className="mt-1 md:mt-0 md:ml-8">
                        <img src={MenuImg} className="w-6 h-6" alt="" />
                    </li>
                </ul>
            </div>
        </header>
    )
}
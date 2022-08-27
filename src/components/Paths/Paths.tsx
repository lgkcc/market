import React from 'react';
import {PathBar} from "./Paths.styles";
import {Link, useLocation} from "react-router-dom";
import {useGetAllProductQuery, useSearchCategoriesQuery} from "../../store/market/market.api"

const Paths = () => {
    const {data: categoryData} = useSearchCategoriesQuery({
        refetchOnFocus: false
    })
    const {data: productData} = useGetAllProductQuery({
        refetchOnFocus: false
    })
    const {pathname} = useLocation()
    const [, ...paths] = pathname.split('/')
    const objPath: { [key: string]: { [key: string]: string } } = {
        menu: {title: "меню", path: "/menu"},
        auth: {title: "авторизация", path: "/auth"},
        profile: {title: "профиль", path: "/profile"}
    }
    const mapPath = paths.map((path, index) => {
        if (path.length > 0) {
            if (paths.length - 1 === index) {
                return <span
                    key={path}>{" >> "}{(objPath[path]?.title || categoryData?.find((category: any) => category.path === path)?.title || productData?.find((product: any) => product._id === path)?.title || "").toLowerCase()}</span>
            }
            return path && <Link key={path}
                                 to={`/${paths.slice(0, index + 1).join("/")}`}>{" >> "}{objPath[path]?.title || categoryData?.find((category: any) => category.path === path)?.title || productData?.find((product: any) => product._id === path)?.title || ""}</Link>
        }
    })
    return (
        <PathBar>
            <Link to='/'>Главная</Link>{mapPath}
        </PathBar>

    );
};

export default Paths;
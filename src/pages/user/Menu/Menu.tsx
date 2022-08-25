import React from 'react';
import {ItemWrapper} from "./Menu.styles";
import CategoryItem from "../../../components/CategoryItem/CategoryItem";
import {useSearchCategoriesQuery} from "../../../store/market/market.api";
import {Link} from "react-router-dom";

const Menu = () => {
    const {data: categoryData} = useSearchCategoriesQuery({
        refetchOnFocus: false
    })
    return (
        <ItemWrapper>
            {
                categoryData?.map((categoryData:any) => <Link to={`/menu/${categoryData.path}`} key={categoryData._id}><CategoryItem {...categoryData}/></Link>)
            }
        </ItemWrapper>
    );
};

export default Menu;
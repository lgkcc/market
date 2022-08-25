import React from 'react';
import {ItemWrapper} from "./Menu.styles";
import CategoryItem from "../../../components/CategoryItem/CategoryItem";
import {useSearchCategoriesQuery} from "../../../store/market/market.api";
import categoryItem from "../../../components/CategoryItem/CategoryItem";

const Menu = () => {
    const {data: categoryData} = useSearchCategoriesQuery({
        refetchOnFocus: false
    })
    return (
        <ItemWrapper>
            {
                categoryData?.map((categoryData:any) => <CategoryItem {...categoryData}/>)
            }
        </ItemWrapper>
    );
};

export default Menu;
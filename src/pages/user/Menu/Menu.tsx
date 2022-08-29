import React, {useMemo} from 'react';
import {ItemWrapper} from "./Menu.styles";
import CategoryItem from "../../../components/CategoryItem/CategoryItem";
import {useSearchCategoriesQuery} from "../../../store/market/market.api";
import {Link} from "react-router-dom";
import Skeleton from "../../../components/Skeleton/Skeleton";

const Menu = () => {
    const {data: categoryData, isLoading} = useSearchCategoriesQuery({
        refetchOnFocus: false
    })

    const memoMap = useMemo(() => {
        if (isLoading) {
            return [...new Array(8)].map((_, i) => <Skeleton key={i}/>)
        }
        return categoryData?.map((categoryData: any) => <Link to={`/menu/${categoryData.path}`}
                                                              key={categoryData._id}><CategoryItem {...categoryData}/></Link>)
    }, [categoryData])

    return (
        <ItemWrapper>
            {
                memoMap
            }
        </ItemWrapper>
    );
};

export default Menu;
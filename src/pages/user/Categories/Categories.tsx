import React, {useMemo} from 'react';
import {useGetAllProductQuery} from "../../../store/market/market.api";
import {Link, useParams} from "react-router-dom";
import CategoryItem from "../../../components/CategoryItem/CategoryItem";
import {ItemWrapper} from "./Categories.styles"
import Skeleton from "../../../components/Skeleton/Skeleton";

const Categories = () => {
    const {categoryName} = useParams()
    const {data: productData, isLoading} = useGetAllProductQuery({categories: categoryName}, {
        refetchOnFocus: false
    })

    const memoMap = useMemo(() => {
        if (isLoading) {
            return [...new Array(8)].map((_, i) => <Skeleton key={i}/>)
        }
        return productData?.map((categoryData: any) => <CategoryItem {...categoryData} key={categoryData._id}/>)
    }, [productData])

    return (
        <ItemWrapper>
            {
                memoMap
            }
        </ItemWrapper>
    );
};

export default Categories;
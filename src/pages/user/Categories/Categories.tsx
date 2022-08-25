import React from 'react';
import {useGetAllProductQuery} from "../../../store/market/market.api";
import {useParams} from "react-router-dom";
import CategoryItem from "../../../components/CategoryItem/CategoryItem";
import {ItemWrapper} from "./Categories.styles"

const Categories = () => {
    const {categoryName} = useParams()
    const {data: productData} = useGetAllProductQuery({categories: categoryName}, {
        refetchOnFocus: false
    })
    return (
        <ItemWrapper>
            {
                productData?.map((categoryData: any) => <CategoryItem {...categoryData} key={categoryData._id}/>)
            }
        </ItemWrapper>
    );
};

export default Categories;
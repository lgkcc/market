import React from 'react';
import {Image, Item, ItemTitle} from "./CategotyItem.styles";
import img from "../../assets/img.jpg";
import {ICategoryItemProps} from "./CategoryItem.interface";

const CategoryItem: React.FC<ICategoryItemProps> = ({title}) => {
    return (
        <Item>
            <Image src={img}/>
            <ItemTitle>
                {title}
            </ItemTitle>
        </Item>
    );
};

export default CategoryItem;
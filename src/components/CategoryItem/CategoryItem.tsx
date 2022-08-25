import React from 'react';
import {Image, Item, ItemTitle} from "./CategotyItem.styles";
import img from "../../assets/img.jpg";
import {ICategoryItemProps} from "./CategoryItem.interface";
import {Link} from "react-router-dom";

const CategoryItem:React.FC<ICategoryItemProps> = ({title, path}) => {
    return (
        <Link to={`/menu/${path}`}>
            <Item>
                <Image src={img}/>
                <ItemTitle>
                    {title}
                </ItemTitle>
            </Item>
        </Link>
    );
};

export default CategoryItem;
import { useEffect, useState } from "react";
import { StyledNavigation } from "./Navigation.styles";

const Navigation = () => {

    const items = ['Clothes', 'Sneakers', 'Bags', 'Accessorize'];
    const [list, setList] = useState(items.map(item => ''));

    useEffect(() => {
        const timeouts = items.map((item, index) => {
            return setTimeout(() => {
                if (list[index] !== item) {
                    setList(prevList => {
                        const newList = [...prevList];
                        newList[index] = item.slice(0, prevList[index].length + 1);
                        return newList;
                    });
                }
            }, 200);
        });
        return () => {
            timeouts.forEach(timeout => clearTimeout(timeout));

        };
        // eslint-disable-next-line
    }, [list]);

    return (
        <StyledNavigation>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </StyledNavigation>
    );
}

export default Navigation
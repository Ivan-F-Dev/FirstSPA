import React, {useState} from 'react';
import s from './Paginator.module.css';
import ButtonCommon from "../Buttons/ButtonCommon";
import cn from 'classnames';

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {pages.push(i)}
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={s.paginator}>
        <div>{portionNumber > 1 && <span onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}><ButtonCommon color={"brown"} text={"<"}/></span>}</div>
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <div className={cn(currentPage === p && s.selectedPage, s.page)}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p} </div>
            })}
        <div>{portionCount > portionNumber && <span onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}><ButtonCommon color={"brown"} text={">"}/></span>}</div>
    </div>
}
export default Paginator
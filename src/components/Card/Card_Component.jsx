import React, {useState} from 'react';
import './Card.scss';

/**
 * 
 * @param {food: object} Объект, содержащий данные о товаре (data.json). Product data object. 
 * @param {setIsSelected({id: food.id, newIsSelected:!food.isSelected}): function} Функция, при клике на карточку меняет значение поля isSelected на противоположное
 */
export const Card_Component = ({food, setIsSelected}) => {
    const [preTitleText, setPreTitleText] = useState("Сказочное заморское яство");
    const [hovered, setHovered] = useState(false);

    //Обработка клика мыши на карточке
    const handleClick = () => {
        if(!food.disabled){
            setIsSelected({id: food.id, newIsSelected: !food.isSelected});
            reducePreTitle();
        } 
    };

    //Формируем название классов
    const returnClassName = () => {
        return food.isSelected ? "cardSelected" : "card";
    };


    //Определяем текст в поле invitation
    const returnInvitationText = () => {
        const classInvitation = food.isSelected ? "cardSelected_invitation": "card_invitation";
        const classInvitationDisabled = classInvitation + " classInvitationDisabled";

        if (!food.disabled){
            return food.isSelected ? 
                <div className={classInvitation}>{food.inivitationText}</div>: 
                <div className={classInvitation}>Чего сидишь? Порадуй котэ, <a href="#" className={getInvitationLinkStyle()} onClick={handleClick} >купи.</a></div>;
        } else {
            return <div className={classInvitationDisabled}>{food.invitationDisabled}</div>
        }
    };

    // устанавливаем текст preTitle = "Котэ не одобряет?"
    const changePreTitle = () => {
        if(food.isSelected){
            setPreTitleText("Котэ не одобряет?");
        }
    };

    // сбрасываем текст preTitle в дефолтное значение = "Сказочное заморское яство"
    const reducePreTitle = () => {
        setPreTitleText("Сказочное заморское яство");
    };

    // Обработка события "ухода" мыши с карточки
    const handleOnMouseLeave = () => {
        reducePreTitle();
        if (!food.disabled){
            setHovered(true);
            setTimeout(setHovered, 5000, false);
        }
        
    };

//функции для определения классов
    const getContentStyle = () => {
        let tmpStyle = food.isSelected ? "cardSelected_content" : "card_content";
        return hovered ? tmpStyle + " " + tmpStyle + "__hover" : tmpStyle;
    };
    const getLeftTriangleStyle = () => {
        let tmpStyle = food.isSelected ? "cardSelected_leftTriangle" : "card_leftTriangle";
        return hovered ? tmpStyle + " " + tmpStyle + "__hover" : tmpStyle;
    };
    const getPreTitleStyle = () => {
        let tmpStyle = food.isSelected ? "cardSelected_preTitle" : "card_preTitle";
        return hovered ? tmpStyle + " " + tmpStyle + "__hover" : tmpStyle;
    };
    const getTitleStyle = () => {
        return food.isSelected ? "cardSelected_title" : "card_title";
    };
    const getWithStyle = () => {
        return food.isSelected ? "cardSelected_with" : "card_with";
    };
    const getPortionCountStyle = () => {
        return food.isSelected ? "cardSelected_portionCount" : "card_portionCount";
    };
    const getGiftStyle = () => {
        return food.isSelected ? "cardSelected_gift" : "card_gift";
    };
    const getWeightStyle = () => {
        let tmpStyle = food.isSelected ? "cardSelected_weight" : "card_weight";
        return hovered ? tmpStyle + " " + tmpStyle + "__hover" : tmpStyle;
    };
    const getInvitationLinkStyle = () => {
        let tmpStyle = food.isSelected ? "cardSelected_invitation__link" : "card_invitation__link";
        return hovered ? tmpStyle + " " + tmpStyle + "__hover" : tmpStyle;
    };
    // рендеринг
    return (
        <div className={returnClassName()} onMouseOver={changePreTitle} onMouseLeave={handleOnMouseLeave}>
            
            <div className={getContentStyle()} onClick={handleClick} >
                <div className={getLeftTriangleStyle()}></div>
                <div className={getPreTitleStyle()}>
                    {preTitleText}
                </div>
                <div className={getTitleStyle()}>
                    Нямушка
                </div>
                <div className={getWithStyle()}>
                    {food.description}
                </div>
                <div className={getPortionCountStyle()}>
                    {food.portionCount}
                </div>
                <div className={getGiftStyle()}>
                    {food.gift}
                </div>
                <div className={getGiftStyle()}>
                    {food.customerIsGlad ? "Заказчик доволен" : ""}
                </div>
                <div className={getWeightStyle()}>
                    <div className="card_weight__nmbr">{food.disabled ? food.disabledWeight : "0,5"}</div>
                    <div className="card_weight__unit">кг</div>
                </div>
                {food.disabled && <div className="card_disabled"></div>}
            </div>
            {returnInvitationText()}
        </div>
    )
};
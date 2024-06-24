import "./cardWithBtn.css"
import "../index.css"
import { Button } from "./Button"

interface CardWithButtonProps {
    title: string,
    content: string,
    containerBgColor: "#fff" | "#236999";
    cardBgColor?: string;
    buttonLabel: string,
    icon?: string;
    iconPosition?: "left" | "right";
}

export const CardWithButton = (
    { title, content, buttonLabel, cardBgColor, containerBgColor, icon, iconPosition }:
        CardWithButtonProps) => {

    const textColor = containerBgColor === "#fff" ? "#236999" : (cardBgColor ? "#236999" : "#fff");

    return (
        <>
            <div style={{ backgroundColor: containerBgColor }} className="main-container">
                <div className={`card-container 
                    ${cardBgColor ? "card-container-dark-solid"
                        : containerBgColor === "#fff" ? "card-container-light"
                            : "card-container-dark"}`}>
                    <div className="card-text-container">
                        <h3 className="card-title">{title}</h3>
                        <p className={`card-text ${textColor === "#fff"
                            ? "card-text-white"
                            : cardBgColor !== "#fff" && textColor === "#236999"
                                ? "card-text-black"
                                : "card-text-blue"}`}>{content}</p>
                    </div>
                    <Button label={buttonLabel} icon={icon} iconPosition={iconPosition} color={textColor} />
                </div>
            </div>
        </>
    )
}

export default CardWithButton;
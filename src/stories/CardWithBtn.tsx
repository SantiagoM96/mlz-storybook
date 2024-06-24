import "./cardWithBtn.css";
import "../index.css";
import { Button } from "./Button";

interface CardWithButtonProps {
    title: string;
    content: string;
    containerBgColor: "#fff" | "#236999";
    isSolid?: boolean;
    buttonLabel: string;
    icon?: string;
    iconPosition?: "close" | "separate";
}

export const CardWithButton = (
    {
        title = "Card Title",
        content,
        buttonLabel = "Ver más",
        containerBgColor,
        isSolid = false,
        icon = "chevron_forward",
        iconPosition = "separate" }
        : CardWithButtonProps) => {

    const cardBgColor = isSolid && containerBgColor === "#236999" ? "#fff" : undefined;
    const textColor = containerBgColor === "#fff" ? "#236999" : (cardBgColor ? "#236999" : "#fff");

    return (
        <>
            <div style={{ backgroundColor: containerBgColor }} className="main-container">
                <div className={`card-container 
                    ${cardBgColor ? "card-container-solid"
                        : containerBgColor === "#fff" ? "card-container-light"
                            : "card-container-transparent-blue"}`}>
                    <div className="card-text-container">
                        <h3 className="card-title">{title}</h3>
                        <p className={`card-text ${textColor === "#fff"
                            ? "card-text-white"
                            : cardBgColor !== "#fff" && textColor === "#236999"
                                ? "card-text-dark"
                                : "card-text-blue"}`}>{content}</p>
                    </div>
                    <Button label={buttonLabel} icon={icon} iconPosition={iconPosition} color={textColor} />
                </div>
            </div>
        </>
    );
}

export default CardWithButton;

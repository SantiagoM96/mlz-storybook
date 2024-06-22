import "./card.css"
import "../index.css"
import { Button } from "./Button"

interface CardWithButtonProps {
    title: string,
    content: string,
    backgroundColor: "#fff" | "#236999";
    labelButton: string,
    icon?: string;
    iconPosition?: "left" | "right";
}

export const CardWithButton = (
    { title, content, labelButton, backgroundColor, icon, iconPosition }:
        CardWithButtonProps) => {
            
    let cardBackground;
    let textColor;

    if (backgroundColor === "#fff") {
        cardBackground = "#0000000d";
        textColor = "#236999";
    } else {
        cardBackground = "#ffffff33";
        textColor = "#ffffff";
    }

    return (
        <>
            <div style={{ backgroundColor }} className="main-container">
                <div className="card-container" style={{ backgroundColor: cardBackground, color: textColor }}>
                    <div className="card-text-container">
                        <h3 className="card-title">{title}</h3>
                        <p className={`card-text ${textColor === "#ffffff" ? "white" : "black"}`}>{content}</p>
                    </div>
                    <Button label={labelButton} icon={icon} iconPosition={iconPosition} color={textColor} />
                </div>
            </div>
        </>
    )
}

export default CardWithButton;
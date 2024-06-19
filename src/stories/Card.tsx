import "./card.css"
import { Button } from "./Button"

export const Card = () => {
    return (
        <>
            <div className="card-container">
                <div className="card-text-container">
                    <h3 className="card-title">Título</h3>
                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quis molestias, soluta provident cup!</p>
                </div>
                <Button label="Button" backgroundColor="#"/>
            </div>
        </>
    )
}

export default Card
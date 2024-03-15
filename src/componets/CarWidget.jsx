import carrito from '../assets/carrito.png'

export const CarWidget = () => {
    return (
        <div id='CarWidget'>
        <img src={carrito} alt="carrito" className= "carrito" />
        <span>10</span>
        </div>
    )
}
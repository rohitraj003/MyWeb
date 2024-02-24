import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Card from "../Card/Card"

export default function Authorities() {
    return (
        <>
            <Card
            image="https://picsum.photos/200/300"
            quantity="10 Plates"
            quality="Good"
            address="NIT Patna Mess"
            time = "1 hour"

            />
            <Card
            image="https://picsum.photos/200/300"
            quantity="15 Plates"
            quality="Average"
            address="NIT Patna Mess"
            time = "2 hours"

            />

        </>
    )
}
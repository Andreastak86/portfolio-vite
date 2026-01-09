import "./intro.css";
import me from "../../assets/male.png";
export default function Intro() {
    return (
        <>
            <div>
                <h1>Velkommen til min portfolio</h1>
                <p>Mitt navn er Andreas Takvam</p>
                <h3>Jeg er en fullstack utvikler</h3>
                <img src={me} alt='me' height={100} width={100} />
            </div>
            <div>
                <p>
                    Så kjekt at du besøker min nettside, jeg jobber i dag som
                    fullstack-utvikler med kjærlig interesse for React
                </p>
                <p>
                    Ønsker du å komme i kontakt med meg så kan du sende meg en
                    melding her!
                </p>
                <a href='#contact'>Kom i kontakt!</a>
            </div>
        </>
    );
}

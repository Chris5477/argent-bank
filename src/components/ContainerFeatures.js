import Features from "./Features";
import chat from "../img/icon-chat.png"
import money from "../img/icon-money.png"
import security from "../img/icon-security.png"

const ContainerFeatures = () => {

    const features = {
        feature1 : {
            title : "You are our #1 priority",
            description : "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        },
        feature2 : {
            title : "More savings means higher rates",
            description : "The more you save with us, the higher your interest rate will be!"
        },
        feature3 : {
            title : "Security you can trust",
            description : " We use top of the line encryption to make sure your data and money is always safe."
        }
    }

    const {feature1, feature2, feature3} = features


return(
    <section className="features">
        <h2 className="sr-only">Features</h2>

        <Features picture={chat} title={feature1.title} description={feature1.description} />
        <Features picture={money} title={feature2.title} description={feature2.description} />
        <Features picture={security} title={feature3.title} description={feature3.description} />
    </section>
)
}
export default ContainerFeatures;
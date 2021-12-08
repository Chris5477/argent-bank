import Features from "./Features";
import chat from "../img/icon-chat.png";
import money from "../img/icon-money.png";
import security from "../img/icon-security.png";
import { features_static } from "../data_static/features";

const ContainerFeatures = () => {
  const { feature1, feature2, feature3 } = features_static;

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <Features picture={chat} title={feature1.title} description={feature1.description} />
      <Features picture={money} title={feature2.title} description={feature2.description} />
      <Features picture={security} title={feature3.title} description={feature3.description} />
    </section>
  );
};
export default ContainerFeatures;

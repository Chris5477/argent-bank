import Feature from "./Feature";
import { features_static } from "../data_static/features";
import chat from "../img/icon-chat.png";
import money from "../img/icon-money.png";
import security from "../img/icon-security.png";

const { feature1, feature2, feature3 } = features_static;

const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <Feature picture={chat} props={feature1} />
      <Feature picture={money} props={feature2} />
      <Feature picture={security} props={feature3} />
    </section>
  );
};
export default Features;

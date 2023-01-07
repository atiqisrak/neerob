import cn from "classnames";
import styles from "./clients.module.css";
import TextOverlap from "../../../components/TextOverlap";
import Tag from "../../../components/Tag";
import Client from "./Client";
import ScrollAnimation from "../../../components/ScrollAnimation";

const logos = [
  {
    name: "Bangladesh Army",
    path: '/images/army.png',
    alt: 'Bangladesh Army Logo'
  },
  {
    name: "Navana Group",
    path: '/images/navana/navana_logo.png',
    alt: 'Navana Group Logo'
  },
  {
    name: "Toyota",
    path: '/images/navana/toyota_logo.png',
    alt: 'Toyota Logo'
  },
  {
    name: "Navana Furniture",
    path: '/images/navana/navana_furniture_logo.png',
    alt: 'Navana Furniture Logo'
  },
  {
    name: "Navana Foods",
    path: '/images/navana/navana_foods_logo.png',
    alt: 'Navana Foods Logo'
  },
  {
    name: "Gloria Jean's Coffees",
    path: '/images/navana/gjc_logo.png',
    alt: 'Gloria Jean\'s Coffees Logo'
  },
];
const Clients = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <Tag number="03" background="#b1e5fc" />
          <TextOverlap title="My Clients" text="My Clients" />
        </div>

        <div className={styles.wrapper}>
        {logos.map((item, index) => (
            <ScrollAnimation key={index}>
              <img src={item.path} alt={item.alt} className="logo-image" style={{ width: '200px', height: 'auto', padding:'30px 0' }} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;

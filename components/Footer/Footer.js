import cn from "classnames";
import Link from "next/link";
import styles from "./footer.module.css";

const sites = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/about",
    title: "Portfolio",
  },
  {
    link: "/about",
    title: "About Us",
  },
  {
    link: "/blog",
    title: "Blog",
  },
];

const information = [
  {
    title: "FAQ",
  },
  {
    title: "Site Map",
  },
  {
    title: "Cookies Policy",
  },
  {
    title: "Contact Me",
  },
];

const contact = [
  {
    title: "Phone: (+880) 196 4650 050",
  },
  {
    title: "Contact me at: raihannerob06@gmail.com",
  },
  {
    title: "Blog",
  },
];

const Footer = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.main_content}>
          <h4 className={cn("body-bold", styles.title)}>Neerob Raihan</h4>
          <p className={cn("caption", styles.subtitle)}>
            Faucibus ornare suspendisse sed nisigittis volutpat odio facilisis
            mauris amet massa velit scelerisque.
          </p>

          <div>
            <p className={cn("body-2-bold")}>Join our newsletter</p>
            <div className={styles.newsletter}>
              <input
                className={cn("caption", styles.input)}
                placeholder="Email Address"
              />
              <button className={cn("button")}>Join</button>
            </div>
          </div>
        </div>
        <div className={styles.sub_content}>
          <div className={styles.content}>
            <h4 className={cn("body-2-bold", styles.title)}>Site</h4>
            <div className={styles.links}>
              {sites.map((item, index) => (
                <Link href={item.link} key={index}>
                  <a className={cn("button-small", styles.button)}>
                    {item.title}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.content}>
            <h4 className={cn("body-2-bold", styles.title)}>Information</h4>
            <div className={styles.links}>
              {information.map((item, index) => (
                <button
                  key={index}
                  className={cn("button-small", styles.button)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.content}>
            <h4 className={cn("body-2-bold", styles.title)}>Contact Me</h4>
            <div className={styles.links}>
              {contact.map((item, index) => (
                <button
                  key={index}
                  className={cn("button-small", styles.button)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

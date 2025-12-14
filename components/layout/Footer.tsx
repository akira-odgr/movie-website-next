import { footerList } from "@/data/data";
import { div } from "framer-motion/client";

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                {/* Footer top */}
                <div>
                    {footerList.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
                {/* Footer bottom */}
                <div></div>
            </div>
        </footer>
    );
};

export default Footer;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ScrollCard = ({ children, delay = 0 }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: delay * 0.2 }}
        >
            {children}
        </motion.div>
    );
}; 
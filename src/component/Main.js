import { motion } from "framer-motion";

function Main() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>

      <div className="main">
        


      </div>
      
    </motion.div>
  );
};
export default Main;
import { motion } from "framer-motion";

function Weapon() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>

      <div className="weapon">


      </div>
      
    </motion.div>
  );
};
export default Weapon;

import { Stack } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
type ModalType = {
  basketModal: boolean;
  setBasketModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Basket = (props: ModalType) => {
  const { basketModal, setBasketModal } = props;
  return (
    <Stack>
      <AnimatePresence>
        {basketModal && (
          <div>
            <BasketModal />
          </div>
        )}
      </AnimatePresence>
    </Stack>
  );
};
const BasketModal = () => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0, transition: { duration: 1 } }}
      exit={{ x: "100%" }}
      style={{
        position: "fixed",
        backgroundColor: "white",
        width: "500px",
        height: "100vh",
        zIndex: "2",
        top: "0px",
        right: "0px",
      }}
    >
      asdasdasd{" "}
    </motion.div>
  );
};

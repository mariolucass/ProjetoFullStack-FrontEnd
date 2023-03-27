import { Dialog, DialogActions, DialogTitle } from "@mui/material";
import { ZodFunction } from "zod";
import { Button } from "../Buttons";

interface IProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  handleFunction: () => void;
  text: string;
}

export const DialogComponent = ({
  state,
  setState,
  text,
  handleFunction,
}: IProps) => {
  const handleCloseModal = () => setState(false);

  const confirmAndCloseModal = () => {
    handleFunction();
    handleCloseModal();
  };

  return (
    <Dialog open={state} onClose={handleCloseModal}>
      <DialogTitle>{text}</DialogTitle>

      <DialogActions>
        <Button type="button" onClick={confirmAndCloseModal} autoFocus>
          Sim
        </Button>

        <Button type="button" onClick={handleCloseModal}>
          Não
        </Button>
      </DialogActions>
    </Dialog>
  );
};

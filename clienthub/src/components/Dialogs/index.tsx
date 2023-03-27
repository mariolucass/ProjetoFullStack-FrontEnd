import { Button } from "../Buttons";
import { Dialog, DialogActions, DialogTitle } from "@mui/material";

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
        <Button type="button" variant="tertiary" onClick={handleCloseModal}>
          Não
        </Button>

        <Button
          type="button"
          variant="secondary"
          onClick={confirmAndCloseModal}
        >
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  );
};

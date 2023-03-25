import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Button } from "../../../../components";

export const DialogDelete = ({ state, setState }: any) => {
  const handleCloseModal = () => {
    setState(false);
  };

  return (
    <Dialog open={state} onClose={handleCloseModal}>
      <DialogTitle>"Deseja realmente deletar o contato? "</DialogTitle>

      <DialogActions>
        <Button type="button" onClick={handleCloseModal} autoFocus>
          Sim
        </Button>

        <Button type="button" onClick={handleCloseModal}>
          Não
        </Button>
      </DialogActions>
    </Dialog>
  );
};

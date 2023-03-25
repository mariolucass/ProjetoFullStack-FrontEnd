import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface IProps {
  list: Array<any>;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

export const SelectComponent = ({ list, setState }: IProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };

  const renderMenuItems = list.map((elem) => (
    <MenuItem value={elem.id}>{elem.name}</MenuItem>
  ));

  return (
    <FormControl>
      <InputLabel>Contato</InputLabel>

      <Select label="Age" onChange={handleChange} sx={{ width: 250 }}>
        {renderMenuItems}
      </Select>
    </FormControl>
  );
};

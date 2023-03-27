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
    <MenuItem key={elem.id} value={elem.id}>
      {elem.name}
    </MenuItem>
  ));

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>CONTATO</InputLabel>

      <Select onChange={handleChange} sx={{ width: 250 }} defaultValue="">
        {renderMenuItems}
      </Select>
    </FormControl>
  );
};

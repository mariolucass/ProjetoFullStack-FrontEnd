import { useState } from "react";
import { Box } from "@mui/system";
import * as styled from "./styles";
import * as layouts from "../../layouts";
import { Tab, Tabs } from "@mui/material";
interface TabPanelProps {
  element: React.ReactNode;
  index: number;
  value: number;
}

export const Dashboard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const TabPanel = ({ element, value, index }: TabPanelProps) => (
    <styled.DivStyled
      role="tabpanel"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      {value === index && element}
    </styled.DivStyled>
  );
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Contatos" sx={{ width: 20 }} />
          <Tab label="Criar contato" sx={{ width: 20 }} />
          <Tab label="Atualizar contato" sx={{ width: 20 }} />
          <Tab label="Deletar contato" sx={{ width: 20 }} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} element={<layouts.AllContacts />} />
      <TabPanel value={value} index={1} element={<layouts.CreateContact />} />
      <TabPanel value={value} index={2} element={<layouts.UpdateContact />} />
      <TabPanel value={value} index={3} element={<layouts.DeleteContact />} />
    </>
  );
};

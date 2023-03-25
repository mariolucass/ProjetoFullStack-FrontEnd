import { Modal, Slide, Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import * as layouts from "../../layouts";
import * as styled from "./styles";

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
    <styled.DivStyled role="tabpanel">
      {value === index && element}
    </styled.DivStyled>
  );

  return (
    <>
      <layouts.Header />

      <styled.MainStyled>
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
      </styled.MainStyled>
    </>
  );
};

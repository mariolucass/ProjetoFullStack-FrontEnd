import * as styled from "./styles";

export const AllContacts = () => {
  const contactsList: any = [];

  const contacts = contactsList.map((elem: any) => {
    return (
      <li>
        <img src={elem.img} alt={elem.name} />
        <span>{elem.name}</span>
        <span>{elem.email}</span>
        <span>{elem.phone}</span>
      </li>
    );
  });

  return (
    <styled.DivStyled>
      <h1>Aqui está todos os seus contatos</h1>

      {/* <div>
        <styled.ListStyled>{contacts}</styled.ListStyled>;
      </div> */}
    </styled.DivStyled>
  );
};

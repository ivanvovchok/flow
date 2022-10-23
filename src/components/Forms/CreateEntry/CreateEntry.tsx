import React, {Dispatch, SetStateAction} from "react";
import {Drawer} from "antd";
import HeaderSection from "./HeaderSection";
import CreateEntryForm from "./CreateEntryForm";

interface ICreateEntryFormProps {
  isVisible: boolean
  entryType: string
  onClose: Dispatch<SetStateAction<boolean>>
}


const CreateEntry: React.FC<ICreateEntryFormProps> = ({isVisible, entryType, onClose}) => {
  const title: string = entryType === 'outcome' ?
    'Додайте нову витрату' :
    'Додайте новий дохід';

  const hideDrawer = (): void => {
    onClose(false);
  }

  return (
    <Drawer
      title={title}
      placement="right"
      onClose={hideDrawer}
      open={isVisible}
    >
      <HeaderSection entryType={entryType}/>
      <CreateEntryForm entryType={entryType} onClose={hideDrawer}/>
    </Drawer>
  );
}

export default CreateEntry
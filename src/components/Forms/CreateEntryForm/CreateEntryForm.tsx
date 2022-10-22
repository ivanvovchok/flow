import React, {Dispatch, SetStateAction} from "react";
import {Drawer} from "antd";

interface ICreateEntryFormProps {
  isVisible: boolean
  entryType: string
  onClose: Dispatch<SetStateAction<boolean>>
}


const CreateEntryForm: React.FC<ICreateEntryFormProps> = ({isVisible, entryType, onClose}) => {
  const title: string = entryType === 'outcome' ?
    'Додайте нову витрату' :
    'Додайте новий дохід';
  const gradientType: string = entryType === 'outcome' ?
    'linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)' :
    'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)';
  const emojiType: string = entryType === 'outcome' ? '😭' : '🤑'


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
      <div
        style={{
          marginBottom: 20,
          padding: 4,
          borderRadius: 16,
          backgroundImage: gradientType,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 24
        }}
      >
        <p style={{
          margin: 0
        }}>{emojiType}</p>
      </div>

      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}

export default CreateEntryForm
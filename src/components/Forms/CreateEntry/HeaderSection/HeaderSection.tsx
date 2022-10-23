import React from "react";

interface IHeaderSectionProps {
  entryType: string
}

const HeaderSection: React.FC<IHeaderSectionProps> = ({entryType}) => {
  const gradientType: string = entryType === 'outcome' ?
    'linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)' :
    'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)';
  const emojiType: string = entryType === 'outcome' ? '😭' : '🤑'

  return (
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
  )
}

export default HeaderSection
import React from "react";

const useTopBar = () => {
  const [isUserProfileVisible, setUserProfileVisible] = React.useState(false)
  const [isCreateEntryFormVisible, setCreateEntryFormVisible] = React.useState(false)
  const [currentEntryType, setCurrentEntryType] = React.useState("expense")

  return {
    isUserProfileVisible,
    setUserProfileVisible,
    isCreateEntryFormVisible,
    setCreateEntryFormVisible,
    currentEntryType,
    setCurrentEntryType
  }
}

export default useTopBar
import React from "react";
import UploaderMain from "../pure/UploaderMain";

const handleChooseFile = () => {
    console.log("hola mundo com estan todos");
};

function handleChangeInput() {
    console.log("te amo");
}
const UploaderMainContainer = () => {
  return <UploaderMain handleChooseFile={handleChooseFile} handleChangeInput={handleChangeInput} />;
};

export default UploaderMainContainer;

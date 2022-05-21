import React, { FunctionComponent } from 'react'
import { ReactButton, ReactImage, ReactInput } from 'react-component-lib'
import testButtonImage from '../../assets/images/test.jpg'
import { useInputTypeText } from '../../hooks'

export const StyleSheet: FunctionComponent = () => {
  const {
    styleSheetData,
    inputTypeTextHandleChange,
    inputTypeTextHandleOnKeyUp,
    reactButtonHandleChange,
  } = useInputTypeText()
  return (
    <React.Fragment>
      <ReactImage
        id={'reactImage'}
        dataTestId={'reactImage'}
        imageSrc={testButtonImage}
      />
      <ReactInput
        id={'inputTypeText'}
        inputType={'text'}
        inputName={'inputTypeText'}
        inputValue={styleSheetData?.inputTypeText}
        inputHandleChange={(event) => inputTypeTextHandleChange(event)}
        inputHandleOnKeyUp={(event) => inputTypeTextHandleOnKeyUp(event)}
      />

      <ReactButton
        dataTestId={'reactButton'}
        buttonName={'reactButton'}
        id={'reactButton'}
        buttonType={'button'}
        buttonText={'reactButton'}
        buttonHandleChange={(event) => reactButtonHandleChange(event)}
      />
    </React.Fragment>
  )
}

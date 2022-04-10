import { FunctionComponent } from 'react'
import { ReactInput } from 'react-component-lib'
import { useInputTypeText } from '../../hooks'

export const StyleSheet: FunctionComponent = () => {
  const {
    styleSheetData,
    inputTypeTextHandleChange,
    inputTypeTextHandleOnKeyUp,
  } = useInputTypeText()
  return (
    <>
      <ReactInput
        id={'inputTypeText'}
        inputType={'text'}
        inputName={'inputTypeText'}
        inputValue={styleSheetData?.inputTypeText}
        inputHandleChange={(event) => inputTypeTextHandleChange(event)}
        inputHandleOnKeyUp={(event) => inputTypeTextHandleOnKeyUp(event)}
      />
    </>
  )
}

import { ChangeEvent, useState } from 'react'
import {
  styleSheetData,
  styleSheetDataInitialState,
} from '../../containers/StyleSheet/StyleSheet.types'

export const useInputTypeText = () => {
  const [styleSheetData, setStyleSheetData] = useState<styleSheetData>(
    styleSheetDataInitialState,
  )

  const inputTypeTextHandleChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target
    setStyleSheetData({ ...styleSheetData, [name]: value })
  }

  const inputTypeTextHandleOnKeyUp = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {}

  return {
    styleSheetData,
    inputTypeTextHandleChange,
    inputTypeTextHandleOnKeyUp,
  }
}

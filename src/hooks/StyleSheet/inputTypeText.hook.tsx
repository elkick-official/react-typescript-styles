import { ChangeEvent, useEffect, useState } from 'react'
import {
  styleSheetData,
  styleSheetDataInitialState,
} from '../../containers/StyleSheet/StyleSheet.types'

export const useInputTypeText = () => {
  const [styleSheetData, setStyleSheetData] = useState<styleSheetData>(
    styleSheetDataInitialState,
  )
  const [rows, setRows] = useState<JSX.Element>()
  const theadData = ['Name', 'Email', 'Date']
  const tbodyData = [
    {
      id: '1',
      items: ['Ravaliya', 'Ravaliya@email.com', '01/01/2021'],
    },
    {
      id: '2',
      items: ['Hermione', 'Hermione@email.com', '12/24/2020'],
    },
    {
      id: '3',
      items: ['Anannya', 'Anannya@email.com', '12/01/2020'],
    },
  ]
  const inputTypeTextHandleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    const { name, value } = event.target
    setStyleSheetData({ ...styleSheetData, [name]: value })
  }

  const inputTypeTextHandleOnKeyUp = (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLTextAreaElement>,
  ): void => {}

  const reactButtonHandleChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent> | undefined,
  ) => {
    console.log({ event })
  }

  const getRows = () => {
    return (
      <>
        {tbodyData.map((data: any) => {
          return (
            <tr>
              {data?.items?.map((item: any) => {
                return (
                  <>
                    <td>{item}</td>
                  </>
                )
              })}
            </tr>
          )
        })}
      </>
    )
  }

  useEffect(() => {
    setRows(getRows())
  }, [])

  return {
    styleSheetData,
    rows,
    theadData,
    inputTypeTextHandleChange,
    inputTypeTextHandleOnKeyUp,
    reactButtonHandleChange,
  }
}

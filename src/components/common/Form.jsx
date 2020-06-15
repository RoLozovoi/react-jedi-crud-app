import React, { useState } from 'react'

import Input from './Input'
import Button from './Button'

const createInitialStateFromColumns = columns => columns.reduce(
  (acc, cur) => {
    acc[cur] = ''
    return acc
  }, {}
)

const Form = ({ columns, onSubmit }) => {
  const [personData, setPersonData] = useState(
    createInitialStateFromColumns(columns)
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(personData)
  }

  const handleChange = (event) => {
    const { currentTarget: input } = event
    const data = { ...personData }
    data[input.name] = input.value
    setPersonData(data)
  }

  return (
    <form>
      {columns.map(columnName => (
        <Input
          key={columnName}
          name={columnName}
          label={columnName}
          value={personData[columnName]}
          type="input"
          onChange={handleChange}
        />
      ))}
      <Button
        label="Save"
        classes="alert alert-danger"
        onClick={handleSubmit}
      />
    </form>
  )
}

export default Form

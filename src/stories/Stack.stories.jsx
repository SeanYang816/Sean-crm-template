import React from 'react'
import Stack from 'components/Stack'
import PropTypes from "prop-types"

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: {type: 'number', defaultValue: 4},
  }
}

const Template = ({numberOfChildren, ...args}) => (
  <Stack {...args} >
    {[...Array(numberOfChildren).keys()].map((n, index) => (
      <div
        key={index}
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        {n + 1}
      </div>
    ))}
  </Stack>)

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: 'row',
  spacing: '2',
  wrap: false,
}

export const Vertical = Template.bind({})
Vertical.args = {
  direction: 'column',
  spacing: '2',
  wrap: false,
}

export const NoSpacing = Template.bind({})
NoSpacing.args = {
  direction: 'row',
  spacing: '0',
  wrap: false,
}

export const WrappingOverflow = Template.bind({})
WrappingOverflow.args = {
  numberOfChildren: 40,
  direction: 'row',
  spacing: '2',
  wrap: true,
}

export const Empty = Template.bind({})
Empty.args = {
  numberOfChildren: 0,
  direction: 'row',
  spacing: '2',
  wrap: false,
}

Template.propTypes = {
  numberOfChildren: PropTypes.number,
}

import React, { useId } from 'react'

import { Input, InputProps } from './ui/input'
import { Label } from './ui/label'

interface Props extends InputProps {
  label?: string
  helperText?: string
}

export const FormInput = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const id = useId()
    return (
      <div className="flex flex-col gap-2">
        <Label className="font-medium" htmlFor={id}>
          {props.label}
        </Label>
        <Input id={id} ref={ref} {...props} />
        <p className="text-sm text-red-400">{props.helperText}</p>
      </div>
    )
  },
)

FormInput.displayName = 'FormInput'

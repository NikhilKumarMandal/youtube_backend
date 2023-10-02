import React,{useId} from 'react'

function Select({
    options = [],
    label,
    className = '',
    ...props
},ref) {
    const id = useId()
  return (
    <div>
        {label && <label className='' htmlFor={id}></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        >
        {options?.map((option) =>(
            <options key = {option} value = {option}>{option}</options>
        ) )}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)
import {  type FC } from 'react'
import { ChooseFileProps } from './types'
import Button from '../Button'



const ChooseFile:FC<ChooseFileProps> = ({
    variant = 'primary',
    size = 'small',
    onClick,
    label='Choose File',
    disabled = false,
    type = 'button',
    className = '',
    style = {},
    iconName,
    isChooseFile=false,
    buttonWidth='auto',
    buttonHeight= 'auto',
    selectedFile = {},
    handleCloseIcon,
  }) => {

  return (
    <div>
     <Button 
       variant={variant}
       label={label}
       type={type}
       onClick={onClick}
       buttonWidth={buttonWidth}
       buttonHeight={buttonHeight}
       isChooseFile={isChooseFile}
       size={size}
       disabled={disabled}
       className={className}
       iconName={iconName}
       style={style}
       iconPosition='right'
       selectedFile={selectedFile}
       handleCloseIcon={handleCloseIcon}
     />
    </div>
  )
}

export default ChooseFile;

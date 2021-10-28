import React from 'react'
import { Button as BaseButton } from '@chakra-ui/react'

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    icon?: JSX.Element;
    text: string;
}

const Button: React.FC<ButtonProps> = ({
    icon,
    text,
    ...attributes
}): JSX.Element => {
    return (
        <BaseButton >
            {icon}
            {text}</BaseButton>
    );
};

export { Button }

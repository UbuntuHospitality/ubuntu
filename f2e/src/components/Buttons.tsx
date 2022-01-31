import { FC, ReactNode } from 'react';
import './Buttons.scss';

interface Props {
    text: string;
    className?: string;
    onClick?: any;
    icon?: ReactNode;
}

export const ButtonFilled: FC<Props> = ({ text, className, onClick }) => {
    const classes: string = className + ' filled';
    return (
        <button className={classes} onClick={onClick}>
            {text}
        </button>
    );
};

export const ButtonPinkFilled: FC<Props> = ({ text, className, onClick }) => {
    const classes: string = className + ' filled-pink text-nowrap';
    return (
        <button className={classes} onClick={onClick}>
            {text}
        </button>
    );
};

export const ButtonDarkFilled: FC<Props> = ({ text, className, onClick }) => {
    const classes: string = className + ' filled-dark text-nowrap';
    return (
        <button className={classes} onClick={onClick}>
            {text}
        </button>
    );
};

export const ButtonOutlined: FC<Props> = ({
    text,
    className,
    onClick,
    icon,
}) => {
    const classes: string = className + ' outlined text-nowrap';
    return (
        <button className={classes} onClick={onClick}>
            {text}
            {icon}
        </button>
    );
};

export const ButtonWhiteFilled: FC<Props> = ({ text, className, onClick }) => {
    const classes: string = className + ' filled-white text-nowrap';
    return (
        <button className={classes} onClick={onClick}>
            {text}
        </button>
    );
};

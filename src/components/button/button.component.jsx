import {
  BaseButton,
  GoogleSignInButton,
  InvertedSignInButton,
} from './button.styles.jsx';

export const ButtonTypeClasses = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = ButtonTypeClasses.base) =>
  ({
    [ButtonTypeClasses.base]: BaseButton,
    [ButtonTypeClasses.google]: GoogleSignInButton,
    [ButtonTypeClasses.inverted]: InvertedSignInButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;

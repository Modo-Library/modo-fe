import React from 'react';

type ButtonType = () => React.ReactElement;

export const Button: ButtonType = () => <button>버튼</button>;

export default Button;

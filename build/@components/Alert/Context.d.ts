/// <reference types="react" />
import { AlertProps, IContextAlertProps } from './types';
export declare const ContextAlert: import("react").Context<IContextAlertProps>;
export declare const useAlert: () => {
    insertAlert: (newAlert?: AlertProps) => void;
};
export default useAlert;

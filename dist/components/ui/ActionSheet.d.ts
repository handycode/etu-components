import React, { FC } from 'react';
import { MouseHandler } from '../types';
interface IAction {
    onClick: Function;
}
interface ITextAction extends IAction {
    text?: string;
}
interface IChildAction extends IAction {
    child?: React.ReactNode;
}
interface IProps {
    title?: React.ReactNode;
    visible?: boolean;
    mask?: boolean;
    maskClosable?: boolean;
    actions: (ITextAction | IChildAction)[];
    onCancel?: MouseHandler;
    itemClassName?: string;
    cancelText?: string;
}
declare const ActionSheet: FC<IProps>;
export declare const showActionSheet: (options: Pick<IProps, "title" | "mask" | "onCancel" | "maskClosable" | "actions" | "itemClassName" | "cancelText">) => () => void;
export default ActionSheet;

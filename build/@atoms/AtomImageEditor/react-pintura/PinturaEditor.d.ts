export default PinturaEditor;
declare class PinturaEditor extends React.Component<any, any, any> {
    constructor(props: any);
    elementRef: React.RefObject<any>;
    editor: import("../pintura/pintura").PinturaEditor;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.DetailedReactHTMLElement<{
        className: string;
        ref: React.RefObject<any>;
    }, any>;
}
import React from "react";

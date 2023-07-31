export function appendDefaultEditor(element: any, options: any): {
    handleEvent: (...args: any[]) => void;
};
export function appendDefaultEditors(targets: any, options: any): any;
export function appendEditor(target: any, options?: {}): {
    handleEvent: (...args: any[]) => void;
};
export function appendEditors(targets: any, options: any): any;
export function appendNode(node: any, haystack: any): any;
export function blobToFile(blob: any, filename: any, mimetype: any): any;
export function colorStringToColorArray(color: any): any;
export function createDefaultColorOptions(): {
    transparent: number[];
    white: number[];
    silver: number[];
    gray: number[];
    black: number[];
    navy: number[];
    blue: number[];
    aqua: number[];
    teal: number[];
    olive: number[];
    green: number[];
    yellow: number[];
    orange: number[];
    red: number[];
    maroon: number[];
    fuchsia: number[];
    purple: number[];
};
export function createDefaultFontFamilyOptions(): string[][];
export function createDefaultFontScaleOptions(): {
    extraSmall: string;
    small: string;
    mediumSmall: string;
    medium: string;
    mediumLarge: string;
    large: string;
    extraLarge: string;
};
export function createDefaultFontSizeOptions(): number[];
export function createDefaultFontStyleOptions(): string[][];
export function createDefaultImageOrienter(): {
    read: (file: any, onprogress: any) => Promise<any>;
    apply: (imageData: any, orientation?: number) => Promise<any>;
};
export function createDefaultImageReader(options?: {}): (string | ((state: any, options: any, onprogress: any) => Promise<any>))[][];
export function createDefaultImageWriter(options?: {}): any[][];
export function createDefaultLineEndStyleOptions(): string[];
export function createDefaultShapePreprocessor(): (shape: any, options?: {
    isPreview: boolean;
}) => any;
export function createDefaultStrokeScaleOptions(): {
    extraSmall: string;
    small: string;
    mediumSmall: string;
    medium: string;
    mediumLarge: string;
    large: string;
    extraLarge: string;
};
export function createDefaultStrokeWidthOptions(): number[];
export function createDefaultTextAlignOptions(): string[];
export function createEditor(): {};
declare function createBackgroundColorControl(items: any): (typeof ColorPicker | {
    title: (locale: any) => any;
    options: any[];
})[];
declare function createColorControl(items: any): (typeof ColorPicker | {
    title: (locale: any) => any;
    options: any[];
})[];
declare function createColorOptions(colors: any): any[][];
declare function createFontColorControl(items: any): (typeof ColorPicker | {
    title: (locale: any) => any;
    options: any[];
})[];
declare function createFontFamilyControl(fontFamilies: any): (typeof Dropdown | {
    title: (locale: any) => any;
    onload: ({ options }: {
        options?: any[];
    }) => void;
    ondestroy: () => void;
    optionLabelStyle: (value: any) => string;
    options: any[];
    optionFilter: (fontFamilyOption: any) => any;
})[];
declare function createFontFamilyOptions(fonts: any): any[];
declare function createFontScaleOptions(scales: any): any[][];
declare function createFontSizeControl(items: any): (typeof Dropdown | {
    title: (locale: any) => any;
    options: any[];
})[];
declare function createFontSizeOptions(sizes: any): any;
declare function createFontStyleControl(items: any): (typeof Dropdown | {
    title: (locale: any) => any;
    optionLabelStyle: (value: any) => string;
    options: any[];
})[];
declare function createFontStyleOptions(styles: any): any;
declare function createLineEndStyleControl(items: any): (typeof Dropdown | {
    title: (locale: any) => any;
    options: any[];
    optionIconStyle: any;
})[];
declare function createLineEndStyleOptions(styles: any): any;
declare function createLineHeightControl(items: any): (typeof Dropdown | {
    title: (locale: any) => any;
    options: any[];
})[];
declare function createLineStartStyleControl(items: any): (typeof Dropdown | {
    title: (locale: any) => any;
    options: any[];
    optionIconStyle: any;
})[];
export function createMarkupEditorShapeStyleControls(options?: {}): {
    defaultColor: (typeof ColorPicker | {
        title: (locale: any) => any;
        options: any[];
    })[];
    defaultNumber: {}[];
    defaultPercentage: {}[];
    backgroundColor: (typeof ColorPicker | {
        title: (locale: any) => any;
        options: any[];
    })[];
    strokeColor: (typeof ColorPicker | {
        title: (locale: any) => any;
        options: any[];
        buttonClass: string;
        onchange: (value: any, shape: any) => void;
    })[];
    strokeWidth: (typeof Dropdown | {
        title: (locale: any) => any;
        options: (shape: any) => any[];
    })[];
    lineStart: (typeof Dropdown | {
        title: (locale: any) => any;
        options: any[];
        optionIconStyle: any;
    })[];
    lineEnd: (typeof Dropdown | {
        title: (locale: any) => any;
        options: any[];
        optionIconStyle: any;
    })[];
    color: (typeof ColorPicker | {
        title: (locale: any) => any;
        options: any[];
    })[];
    fontFamily: (typeof Dropdown | {
        title: (locale: any) => any;
        onload: ({ options }: {
            options?: any[];
        }) => void;
        ondestroy: () => void;
        optionLabelStyle: (value: any) => string;
        options: any[];
        optionFilter: (fontFamilyOption: any) => any;
    })[];
    fontStyle_fontWeight: (typeof Dropdown | {
        title: (locale: any) => any;
        optionLabelStyle: (value: any) => string;
        options: any[];
    })[];
    fontSize: (typeof Dropdown | {
        title: (locale: any) => any;
        options: any[];
    })[];
    textAlign: (typeof RadioGroup | {
        title: (locale: any) => any;
        options: any[];
    })[];
    frameColor: string[];
    frameSize: (string | {
        min: number;
        max: number;
        title: (locale: any) => any;
    })[];
    frameInset: (string | {
        min: number;
        max: number;
        title: (locale: any) => any;
    })[];
    frameOffset: (string | {
        min: number;
        max: number;
        title: (locale: any) => any;
    })[];
    frameRadius: (string | {
        min: number;
        max: number;
        title: (locale: any) => any;
    })[];
    frameAmount: (string | {
        min: number;
        max: number;
        step: number;
        title: (locale: any) => any;
    })[];
};
declare function createStrokeColorControl(items: any, options?: {}): (typeof ColorPicker | {
    title: (locale: any) => any;
    options: any[];
    buttonClass: string;
    onchange: (value: any, shape: any) => void;
})[];
declare function createStrokeScaleOptions(scales: any): any[][];
declare function createStrokeWidthControl(items: any): (typeof Dropdown | {
    title: (locale: any) => any;
    options: (shape: any) => any[];
})[];
declare function createStrokeWidthOptions(sizes: any): any;
declare function createTextAlignControl(items: any): (typeof RadioGroup | {
    title: (locale: any) => any;
    options: any[];
})[];
declare function createToolStyle(type: any, shape?: {}, options?: {
    position: string;
}): any[];
export function createMarkupEditorToolStyles(tools: any): any;
export function createMarkupEditorToolbar(tools?: string[]): any[][];
export function createNode(instance: any, id: any, props: any, children: any): any[];
export function createShapePreprocessor(processors: any): (shape: any, options?: {
    isPreview: boolean;
}) => any;
export function defineCustomElements(options?: {}): Promise<any>;
export function defineDefaultCustomElements(options: any): Promise<any>;
export function degToRad(degrees: any): number;
export function dispatchEditorEvents(editor: any, handler: any, options?: {}): any[];
declare namespace brightness {
    const base: number;
    const min: number;
    const max: number;
    function getLabel(value: any): number;
    function getStore({ imageColorMatrix }: {
        imageColorMatrix: any;
    }): any;
    function getValue(store: any): any;
    function setValue(store: any, v: any): any;
}
declare namespace clarity {
    const base_1: number;
    export { base_1 as base };
    const min_1: number;
    export { min_1 as min };
    const max_1: number;
    export { max_1 as max };
    export function getStore_1({ imageConvolutionMatrix }: {
        imageConvolutionMatrix: any;
    }): any;
    export { getStore_1 as getStore };
    export function getValue_1(store: any): number;
    export { getValue_1 as getValue };
    export function setValue_1(store: any, v: any): void;
    export { setValue_1 as setValue };
}
declare namespace contrast {
    const base_2: number;
    export { base_2 as base };
    const min_2: number;
    export { min_2 as min };
    const max_2: number;
    export { max_2 as max };
    export function getLabel_1(value: any): number;
    export { getLabel_1 as getLabel };
    export function getStore_2({ imageColorMatrix }: {
        imageColorMatrix: any;
    }): any;
    export { getStore_2 as getStore };
    export function getValue_2(store: any): any;
    export { getValue_2 as getValue };
    export function setValue_2(store: any, v: any): any;
    export { setValue_2 as setValue };
}
declare namespace exposure {
    const base_3: number;
    export { base_3 as base };
    const min_3: number;
    export { min_3 as min };
    const max_3: number;
    export { max_3 as max };
    export function getLabel_2(value: any): number;
    export { getLabel_2 as getLabel };
    export function getStore_3({ imageColorMatrix }: {
        imageColorMatrix: any;
    }): any;
    export { getStore_3 as getStore };
    export function getValue_3(store: any): any;
    export { getValue_3 as getValue };
    export function setValue_3(store: any, v: any): any;
    export { setValue_3 as setValue };
}
declare namespace gamma {
    const base_4: number;
    export { base_4 as base };
    const min_4: number;
    export { min_4 as min };
    const max_4: number;
    export { max_4 as max };
    export function getLabel_3(value: any): number;
    export { getLabel_3 as getLabel };
    export function getStore_4({ imageGamma }: {
        imageGamma: any;
    }): any;
    export { getStore_4 as getStore };
}
declare namespace saturation {
    const base_5: number;
    export { base_5 as base };
    const min_5: number;
    export { min_5 as min };
    const max_5: number;
    export { max_5 as max };
    export function getLabel_4(value: any): number;
    export { getLabel_4 as getLabel };
    export function getStore_5({ imageColorMatrix }: {
        imageColorMatrix: any;
    }): any;
    export { getStore_5 as getStore };
    export function getValue_4(store: any): number;
    export { getValue_4 as getValue };
    export function setValue_4(store: any, v: any): any;
    export { setValue_4 as setValue };
}
declare namespace temperature {
    const base_6: number;
    export { base_6 as base };
    const min_6: number;
    export { min_6 as min };
    const max_6: number;
    export { max_6 as max };
    export function getStore_6({ imageColorMatrix }: {
        imageColorMatrix: any;
    }): any;
    export { getStore_6 as getStore };
    export function getValue_5(store: any): number;
    export { getValue_5 as getValue };
    export function setValue_5(store: any, v: any): any;
    export { setValue_5 as setValue };
}
declare namespace vignette {
    const base_7: number;
    export { base_7 as base };
    const min_7: number;
    export { min_7 as min };
    const max_7: number;
    export { max_7 as max };
    export function getStore_7({ imageVignette }: {
        imageVignette: any;
    }): any;
    export { getStore_7 as getStore };
}
declare function chrome(): number[];
declare function cold(): number[];
declare function fade(): number[];
declare function invert(): number[];
declare function monoDefault(): number[];
declare function monoNoir(): number[];
declare function monoStark(): number[];
declare function monoWash(): number[];
declare function pastel(): number[];
declare function sepiaBlues(): number[];
declare function sepiaColor(): number[];
declare function sepiaDefault(): number[];
declare function sepiaRust(): number[];
declare function warm(): number[];
export function findNode(needle: any, haystack: any): any;
declare namespace edgeCross {
    namespace shape {
        const frameStyle: string;
        const frameInset: string;
        const frameSize: string;
    }
    const thumb: string;
}
declare namespace edgeOverlap {
    export namespace shape_1 {
        const frameStyle_1: string;
        export { frameStyle_1 as frameStyle };
        export const frameOffset: string;
        const frameSize_1: string;
        export { frameSize_1 as frameSize };
    }
    export { shape_1 as shape };
    const thumb_1: string;
    export { thumb_1 as thumb };
}
declare namespace edgeSeparate {
    export namespace shape_2 {
        const frameStyle_2: string;
        export { frameStyle_2 as frameStyle };
        const frameInset_1: string;
        export { frameInset_1 as frameInset };
        const frameOffset_1: string;
        export { frameOffset_1 as frameOffset };
        const frameSize_2: string;
        export { frameSize_2 as frameSize };
    }
    export { shape_2 as shape };
    const thumb_2: string;
    export { thumb_2 as thumb };
}
declare namespace hook {
    export namespace shape_3 {
        const frameStyle_3: string;
        export { frameStyle_3 as frameStyle };
        const frameInset_2: string;
        export { frameInset_2 as frameInset };
        const frameSize_3: string;
        export { frameSize_3 as frameSize };
        export const frameLength: string;
    }
    export { shape_3 as shape };
    const thumb_3: string;
    export { thumb_3 as thumb };
}
declare namespace lineMultiple {
    export namespace shape_4 {
        const frameStyle_4: string;
        export { frameStyle_4 as frameStyle };
        export const frameAmount: number;
        const frameInset_3: string;
        export { frameInset_3 as frameInset };
        const frameSize_4: string;
        export { frameSize_4 as frameSize };
        const frameOffset_2: string;
        export { frameOffset_2 as frameOffset };
        export const frameRadius: number;
    }
    export { shape_4 as shape };
    const thumb_4: string;
    export { thumb_4 as thumb };
}
declare namespace lineSingle {
    export namespace shape_5 {
        const frameStyle_5: string;
        export { frameStyle_5 as frameStyle };
        const frameInset_4: string;
        export { frameInset_4 as frameInset };
        const frameSize_5: string;
        export { frameSize_5 as frameSize };
        const frameRadius_1: number;
        export { frameRadius_1 as frameRadius };
    }
    export { shape_5 as shape };
    const thumb_5: string;
    export { thumb_5 as thumb };
}
declare namespace polaroid {
    export namespace shape_6 {
        const frameStyle_6: string;
        export { frameStyle_6 as frameStyle };
    }
    export { shape_6 as shape };
    const thumb_6: string;
    export { thumb_6 as thumb };
}
declare namespace solidRound {
    export namespace shape_7 {
        const frameStyle_7: string;
        export { frameStyle_7 as frameStyle };
        const frameSize_6: string;
        export { frameSize_6 as frameSize };
        export const frameRound: boolean;
    }
    export { shape_7 as shape };
    const thumb_7: string;
    export { thumb_7 as thumb };
}
declare namespace solidSharp {
    export namespace shape_8 {
        const frameStyle_8: string;
        export { frameStyle_8 as frameStyle };
        const frameSize_7: string;
        export { frameSize_7 as frameSize };
    }
    export { shape_8 as shape };
    const thumb_8: string;
    export { thumb_8 as thumb };
}
export function getEditorDefaults(options?: {}): any;
export function getEditorProps(): string[];
export function insertNodeAfter(node: any, needle: any, haystack: any): void;
export function insertNodeBefore(node: any, needle: any, haystack: any): void;
declare function isModernBrowser(): any;
export function legacyDataToImageState(editor: any, imageSize: any, data?: {}): {};
export namespace locale_en_gb {
    export const labelReset: string;
    export const labelDefault: string;
    export const labelAuto: string;
    export const labelNone: string;
    export const labelEdit: string;
    export const labelClose: string;
    export function labelSupportError(features: any): string;
    export const labelColor: string;
    export const labelWidth: string;
    export const labelSize: string;
    export const labelOffset: string;
    export const labelAmount: string;
    export const labelInset: string;
    export const labelRadius: string;
    export const labelSizeExtraSmall: string;
    export const labelSizeSmall: string;
    export const labelSizeMediumSmall: string;
    export const labelSizeMedium: string;
    export const labelSizeMediumLarge: string;
    export const labelSizeLarge: string;
    export const labelSizeExtraLarge: string;
    export const labelButtonRevert: string;
    export const labelButtonCancel: string;
    export const labelButtonUndo: string;
    export const labelButtonRedo: string;
    export const labelButtonExport: string;
    export const iconSupportError: string;
    export { IconCross as iconButtonClose };
    export const iconButtonRevert: string;
    export const iconButtonUndo: string;
    export const iconButtonRedo: string;
    export const iconButtonExport: string;
    export const statusLabelButtonClose: string;
    export { IconCross as statusIconButtonClose };
    export function statusLabelLoadImage(state: any): "Minimum image size is {minWidth} × {minHeight}" | "Error loading image" | "Creating preview…" | "Loading image…" | "Waiting for image";
    export function statusLabelProcessImage(state: any): "Error uploading image" | "Uploading image…" | "Error processing image" | "Processing image…";
}
export namespace markup_editor_defaults {
    const markupEditorToolbar: any[][];
    const markupEditorToolStyles: any;
    namespace markupEditorShapeStyleControls {
        export const defaultColor: (typeof ColorPicker | {
            title: (locale: any) => any;
            options: any[];
        })[];
        export const defaultNumber: {}[];
        export const defaultPercentage: {}[];
        export const backgroundColor: (typeof ColorPicker | {
            title: (locale: any) => any;
            options: any[];
        })[];
        export const strokeColor: (typeof ColorPicker | {
            title: (locale: any) => any;
            options: any[];
            buttonClass: string;
            onchange: (value: any, shape: any) => void;
        })[];
        export const strokeWidth: (typeof Dropdown | {
            title: (locale: any) => any;
            options: (shape: any) => any[];
        })[];
        export const lineStart: (typeof Dropdown | {
            title: (locale: any) => any;
            options: any[];
            optionIconStyle: any;
        })[];
        export const lineEnd: (typeof Dropdown | {
            title: (locale: any) => any;
            options: any[];
            optionIconStyle: any;
        })[];
        export const color: (typeof ColorPicker | {
            title: (locale: any) => any;
            options: any[];
        })[];
        export const fontFamily: (typeof Dropdown | {
            title: (locale: any) => any;
            onload: ({ options }: {
                options?: any[];
            }) => void;
            ondestroy: () => void;
            optionLabelStyle: (value: any) => string;
            options: any[];
            optionFilter: (fontFamilyOption: any) => any;
        })[];
        export const fontStyle_fontWeight: (typeof Dropdown | {
            title: (locale: any) => any;
            optionLabelStyle: (value: any) => string;
            options: any[];
        })[];
        export const fontSize: (typeof Dropdown | {
            title: (locale: any) => any;
            options: any[];
        })[];
        export const textAlign: (typeof RadioGroup | {
            title: (locale: any) => any;
            options: any[];
        })[];
        export const frameColor: string[];
        const frameSize_8: (string | {
            min: number;
            max: number;
            title: (locale: any) => any;
        })[];
        export { frameSize_8 as frameSize };
        const frameInset_5: (string | {
            min: number;
            max: number;
            title: (locale: any) => any;
        })[];
        export { frameInset_5 as frameInset };
        const frameOffset_3: (string | {
            min: number;
            max: number;
            title: (locale: any) => any;
        })[];
        export { frameOffset_3 as frameOffset };
        const frameRadius_2: (string | {
            min: number;
            max: number;
            title: (locale: any) => any;
        })[];
        export { frameRadius_2 as frameRadius };
        const frameAmount_1: (string | {
            min: number;
            max: number;
            step: number;
            title: (locale: any) => any;
        })[];
        export { frameAmount_1 as frameAmount };
    }
}
export namespace markup_editor_locale_en_gb {
    const shapeLabelButtonSelectSticker: string;
    const shapeIconButtonSelectSticker: string;
    const shapeIconButtonFlipHorizontal: string;
    const shapeIconButtonFlipVertical: string;
    const shapeIconButtonRemove: string;
    const shapeIconButtonDuplicate: string;
    const shapeIconButtonMoveToFront: string;
    const shapeIconButtonTextLayoutAutoWidth: string;
    const shapeIconButtonTextLayoutAutoHeight: string;
    const shapeIconButtonTextLayoutFixedSize: string;
    const shapeTitleButtonTextLayoutAutoWidth: string;
    const shapeTitleButtonTextLayoutAutoHeight: string;
    const shapeTitleButtonTextLayoutFixedSize: string;
    const shapeTitleButtonFlipHorizontal: string;
    const shapeTitleButtonFlipVertical: string;
    const shapeTitleButtonRemove: string;
    const shapeTitleButtonDuplicate: string;
    const shapeTitleButtonMoveToFront: string;
    const shapeLabelInputText: string;
    const shapeIconInputCancel: string;
    const shapeIconInputConfirm: string;
    const shapeLabelInputCancel: string;
    const shapeLabelInputConfirm: string;
    const shapeLabelStrokeNone: string;
    const shapeLabelFontStyleNormal: string;
    const shapeLabelFontStyleBold: string;
    const shapeLabelFontStyleItalic: string;
    const shapeLabelFontStyleItalicBold: string;
    const shapeTitleBackgroundColor: string;
    const shapeTitleFontFamily: string;
    const shapeTitleFontSize: string;
    const shapeTitleFontStyle: string;
    const shapeTitleLineHeight: string;
    const shapeTitleLineStart: string;
    const shapeTitleLineEnd: string;
    const shapeTitleStrokeWidth: string;
    const shapeTitleStrokeColor: string;
    const shapeTitleLineDecorationBar: string;
    const shapeTitleLineDecorationCircle: string;
    const shapeTitleLineDecorationSquare: string;
    const shapeTitleLineDecorationArrow: string;
    const shapeTitleLineDecorationCircleSolid: string;
    const shapeTitleLineDecorationSquareSolid: string;
    const shapeTitleLineDecorationArrowSolid: string;
    const shapeIconLineDecorationBar: string;
    const shapeIconLineDecorationCircle: string;
    const shapeIconLineDecorationSquare: string;
    const shapeIconLineDecorationArrow: string;
    const shapeIconLineDecorationCircleSolid: string;
    const shapeIconLineDecorationSquareSolid: string;
    const shapeIconLineDecorationArrowSolid: string;
    const shapeTitleColorTransparent: string;
    const shapeTitleColorWhite: string;
    const shapeTitleColorSilver: string;
    const shapeTitleColorGray: string;
    const shapeTitleColorBlack: string;
    const shapeTitleColorNavy: string;
    const shapeTitleColorBlue: string;
    const shapeTitleColorAqua: string;
    const shapeTitleColorTeal: string;
    const shapeTitleColorOlive: string;
    const shapeTitleColorGreen: string;
    const shapeTitleColorYellow: string;
    const shapeTitleColorOrange: string;
    const shapeTitleColorRed: string;
    const shapeTitleColorMaroon: string;
    const shapeTitleColorFuchsia: string;
    const shapeTitleColorPurple: string;
    const shapeTitleTextColor: string;
    const shapeTitleTextAlign: string;
    const shapeTitleTextAlignLeft: string;
    const shapeTitleTextAlignCenter: string;
    const shapeTitleTextAlignRight: string;
    const shapeIconTextAlignLeft: string;
    const shapeIconTextAlignCenter: string;
    const shapeIconTextAlignRight: string;
    const shapeLabelToolSharpie: string;
    const shapeLabelToolEraser: string;
    const shapeLabelToolRectangle: string;
    const shapeLabelToolEllipse: string;
    const shapeLabelToolArrow: string;
    const shapeLabelToolLine: string;
    const shapeLabelToolText: string;
    const shapeLabelToolPreset: string;
    const shapeIconToolSharpie: string;
    const shapeIconToolEraser: string;
    const shapeIconToolRectangle: string;
    const shapeIconToolEllipse: string;
    const shapeIconToolArrow: string;
    const shapeIconToolLine: string;
    const shapeIconToolText: string;
    const shapeIconToolPreset: string;
}
export function openDefaultEditor(options: any): {
    handleEvent: (...args: any[]) => void;
    modal: any;
};
export function openEditor(options: {}, parent: any): {
    handleEvent: (...args: any[]) => void;
    modal: any;
};
export function overlayDefaultEditor(element: any, options: any): {
    handleEvent: (...args: any[]) => void;
};
export function overlayEditor(target: any, options: any): {
    handleEvent: (...args: any[]) => void;
};
export namespace plugin_annotate {
    const util: (string | typeof Annotate)[];
}
export namespace plugin_annotate_locale_en_gb {
    const annotateLabel: string;
    const annotateIcon: string;
}
export namespace plugin_crop {
    const util_1: (string | typeof Crop)[];
    export { util_1 as util };
}
export namespace plugin_crop_locale_en_gb {
    const cropLabel: string;
    const cropIcon: string;
    const cropIconButtonRecenter: string;
    const cropIconButtonRotateLeft: string;
    const cropIconButtonRotateRight: string;
    const cropIconButtonFlipVertical: string;
    const cropIconButtonFlipHorizontal: string;
    function cropIconSelectPreset(locale: any, aspectRatio: any): string;
    function cropIconCropBoundary(locale: any, isBoundToImage: any): string;
    const cropLabelButtonRecenter: string;
    const cropLabelButtonRotateLeft: string;
    const cropLabelButtonRotateRight: string;
    const cropLabelButtonFlipHorizontal: string;
    const cropLabelButtonFlipVertical: string;
    const cropLabelSelectPreset: string;
    const cropLabelCropBoundary: string;
    const cropLabelCropBoundaryEdge: string;
    const cropLabelCropBoundaryNone: string;
    const cropLabelTabRotation: string;
    const cropLabelTabZoom: string;
}
export namespace plugin_decorate {
    const util_2: (string | typeof Decorate)[];
    export { util_2 as util };
}
export namespace plugin_decorate_locale_en_gb {
    const decorateLabel: string;
    const decorateIcon: string;
}
export namespace plugin_filter {
    const util_3: (string | typeof Filter)[];
    export { util_3 as util };
}
export namespace plugin_filter_defaults {
    export { filterFunctionsDefault as filterFunctions };
    export { filterOptionsDefault as filterOptions };
}
export namespace plugin_filter_locale_en_gb {
    const filterLabel: string;
    const filterIcon: string;
    const filterLabelChrome: string;
    const filterLabelFade: string;
    const filterLabelCold: string;
    const filterLabelWarm: string;
    const filterLabelPastel: string;
    const filterLabelMonoDefault: string;
    const filterLabelMonoNoir: string;
    const filterLabelMonoWash: string;
    const filterLabelMonoStark: string;
    const filterLabelSepiaDefault: string;
    const filterLabelSepiaBlues: string;
    const filterLabelSepiaRust: string;
    const filterLabelSepiaColor: string;
}
export namespace plugin_finetune {
    const util_4: (string | typeof Finetune)[];
    export { util_4 as util };
}
export namespace plugin_finetune_defaults {
    export { finetuneControlConfigurationDefault as finetuneControlConfiguration };
    export { finetuneOptionsDefault as finetuneOptions };
}
export namespace plugin_finetune_locale_en_gb {
    const finetuneLabel: string;
    const finetuneIcon: string;
    const finetuneLabelBrightness: string;
    const finetuneLabelContrast: string;
    const finetuneLabelSaturation: string;
    const finetuneLabelExposure: string;
    const finetuneLabelTemperature: string;
    const finetuneLabelGamma: string;
    const finetuneLabelClarity: string;
    const finetuneLabelVignette: string;
}
export namespace plugin_frame {
    const util_5: (string | typeof Frame)[];
    export { util_5 as util };
}
export namespace plugin_frame_defaults {
    export { frameStylesDefault as frameStyles };
    export { frameOptionsDefault as frameOptions };
}
export namespace plugin_frame_locale_en_gb {
    const frameLabel: string;
    const frameIcon: string;
    const frameLabelMatSharp: string;
    const frameLabelMatRound: string;
    const frameLabelLineSingle: string;
    const frameLabelLineMultiple: string;
    const frameLabelEdgeSeparate: string;
    const frameLabelEdgeOverlap: string;
    const frameLabelEdgeCross: string;
    const frameLabelCornerHooks: string;
    const frameLabelPolaroid: string;
}
export namespace plugin_resize {
    const util_6: (string | typeof Resize)[];
    export { util_6 as util };
}
export namespace plugin_resize_locale_en_gb {
    const resizeLabel: string;
    const resizeIcon: string;
    const resizeLabelFormCaption: string;
    const resizeLabelInputWidth: string;
    const resizeTitleInputWidth: string;
    const resizeLabelInputHeight: string;
    const resizeTitleInputHeight: string;
    const resizeTitleButtonMaintainAspectRatio: string;
    function resizeIconButtonMaintainAspectRatio(active: any, activeFraction: any): string;
}
export namespace plugin_sticker {
    const util_7: (string | typeof Sticker)[];
    export { util_7 as util };
}
export namespace plugin_sticker_locale_en_gb {
    const stickerLabel: string;
    const stickerIcon: string;
}
export function processDefaultImage(src: any, options?: {}): any;
export function processImage(src: any, options: any): any;
export function removeNode(needle: any, haystack: any): any;
export function setPlugins(...args: any[]): void;
export function supportsWebGL(): any;
declare class ColorPicker extends SvelteComponent {
    constructor(options: any);
}
declare class Dropdown extends SvelteComponent {
    constructor(options: any);
}
declare class RadioGroup extends SvelteComponent {
    constructor(options: any);
}
declare const IconCross: "<g fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\" stroke-width=\".125em\"><path d=\"M18 6L6 18M6 6l12 12\"></path></path></g>";
declare class Annotate extends SvelteComponent {
    constructor(options: any);
    get name(): any;
    set isActive(arg: any);
    get isActive(): any;
    set isActiveFraction(arg: any);
    get isActiveFraction(): any;
    set isVisible(arg: any);
    get isVisible(): any;
    set stores(arg: any);
    get stores(): any;
    set locale(arg: any);
    get locale(): any;
    set markupEditorToolbar(arg: any);
    get markupEditorToolbar(): any;
    set markupEditorToolStyles(arg: any);
    get markupEditorToolStyles(): any;
    set markupEditorShapeStyleControls(arg: any);
    get markupEditorShapeStyleControls(): any;
    set markupEditorToolSelectRadius(arg: any);
    get markupEditorToolSelectRadius(): any;
    set willRenderShapePresetToolbar(arg: any);
    get willRenderShapePresetToolbar(): any;
    set annotateTools(arg: any);
    get annotateTools(): any;
    set annotateToolShapes(arg: any);
    get annotateToolShapes(): any;
    set annotateShapeControls(arg: any);
    get annotateShapeControls(): any;
    set annotateActiveTool(arg: any);
    get annotateActiveTool(): any;
    set annotateEnableButtonFlipVertical(arg: any);
    get annotateEnableButtonFlipVertical(): any;
    set annotateEnableSelectImagePreset(arg: any);
    get annotateEnableSelectImagePreset(): any;
    set annotatePresets(arg: any);
    get annotatePresets(): any;
    set annotateWillRenderShapePresetToolbar(arg: any);
    get annotateWillRenderShapePresetToolbar(): any;
    set enableSelectToolToAddShape(arg: any);
    get enableSelectToolToAddShape(): any;
    set enableTapToAddText(arg: any);
    get enableTapToAddText(): any;
    set willRenderShapeControls(arg: any);
    get willRenderShapeControls(): any;
    set beforeAddShape(arg: any);
    get beforeAddShape(): any;
    set beforeRemoveShape(arg: any);
    get beforeRemoveShape(): any;
    set beforeDeselectShape(arg: any);
    get beforeDeselectShape(): any;
    set beforeSelectShape(arg: any);
    get beforeSelectShape(): any;
    set beforeUpdateShape(arg: any);
    get beforeUpdateShape(): any;
}
declare class Crop extends SvelteComponent {
    constructor(options: any);
    get name(): any;
    set isActive(arg: any);
    get isActive(): any;
    set stores(arg: any);
    get stores(): any;
    set cropImageSelectionCornerStyle(arg: any);
    get cropImageSelectionCornerStyle(): any;
    set cropWillRenderImageSelectionGuides(arg: any);
    get cropWillRenderImageSelectionGuides(): any;
    set cropAutoCenterImageSelectionTimeout(arg: any);
    get cropAutoCenterImageSelectionTimeout(): any;
    set cropEnableZoomMatchImageAspectRatio(arg: any);
    get cropEnableZoomMatchImageAspectRatio(): any;
    set cropEnableRotateMatchImageAspectRatio(arg: any);
    get cropEnableRotateMatchImageAspectRatio(): any;
    set cropEnableRotationInput(arg: any);
    get cropEnableRotationInput(): any;
    set cropEnableZoom(arg: any);
    get cropEnableZoom(): any;
    set cropEnableZoomInput(arg: any);
    get cropEnableZoomInput(): any;
    set cropEnableZoomAutoHide(arg: any);
    get cropEnableZoomAutoHide(): any;
    set cropEnableImageSelection(arg: any);
    get cropEnableImageSelection(): any;
    set cropEnableInfoIndicator(arg: any);
    get cropEnableInfoIndicator(): any;
    set cropEnableZoomTowardsWheelPosition(arg: any);
    get cropEnableZoomTowardsWheelPosition(): any;
    set cropEnableLimitWheelInputToCropSelection(arg: any);
    get cropEnableLimitWheelInputToCropSelection(): any;
    set cropEnableCenterImageSelection(arg: any);
    get cropEnableCenterImageSelection(): any;
    set cropEnableButtonRotateLeft(arg: any);
    get cropEnableButtonRotateLeft(): any;
    set cropEnableButtonRotateRight(arg: any);
    get cropEnableButtonRotateRight(): any;
    set cropEnableButtonFlipHorizontal(arg: any);
    get cropEnableButtonFlipHorizontal(): any;
    set cropEnableButtonFlipVertical(arg: any);
    get cropEnableButtonFlipVertical(): any;
    set cropSelectPresetOptions(arg: any);
    get cropSelectPresetOptions(): any;
    set cropEnableSelectPreset(arg: any);
    get cropEnableSelectPreset(): any;
    set cropEnableButtonToggleCropLimit(arg: any);
    get cropEnableButtonToggleCropLimit(): any;
    set cropWillRenderTools(arg: any);
    get cropWillRenderTools(): any;
    set locale(arg: any);
    get locale(): any;
    set tools(arg: any);
    get tools(): any;
}
declare class Decorate extends SvelteComponent {
    constructor(options: any);
    get name(): any;
    set isActive(arg: any);
    get isActive(): any;
    set isActiveFraction(arg: any);
    get isActiveFraction(): any;
    set isVisible(arg: any);
    get isVisible(): any;
    set stores(arg: any);
    get stores(): any;
    set locale(arg: any);
    get locale(): any;
    set markupEditorToolbar(arg: any);
    get markupEditorToolbar(): any;
    set markupEditorToolStyles(arg: any);
    get markupEditorToolStyles(): any;
    set markupEditorShapeStyleControls(arg: any);
    get markupEditorShapeStyleControls(): any;
    set markupEditorToolSelectRadius(arg: any);
    get markupEditorToolSelectRadius(): any;
    set willRenderShapePresetToolbar(arg: any);
    get willRenderShapePresetToolbar(): any;
    set decorateTools(arg: any);
    get decorateTools(): any;
    set decorateToolShapes(arg: any);
    get decorateToolShapes(): any;
    set decorateShapeControls(arg: any);
    get decorateShapeControls(): any;
    set decorateActiveTool(arg: any);
    get decorateActiveTool(): any;
    set decorateEnableButtonFlipVertical(arg: any);
    get decorateEnableButtonFlipVertical(): any;
    set decorateEnableSelectImagePreset(arg: any);
    get decorateEnableSelectImagePreset(): any;
    set decoratePresets(arg: any);
    get decoratePresets(): any;
    set decorateWillRenderShapePresetToolbar(arg: any);
    get decorateWillRenderShapePresetToolbar(): any;
    set enableSelectToolToAddShape(arg: any);
    get enableSelectToolToAddShape(): any;
    set enableTapToAddText(arg: any);
    get enableTapToAddText(): any;
    set willRenderShapeControls(arg: any);
    get willRenderShapeControls(): any;
    set beforeAddShape(arg: any);
    get beforeAddShape(): any;
    set beforeRemoveShape(arg: any);
    get beforeRemoveShape(): any;
    set beforeDeselectShape(arg: any);
    get beforeDeselectShape(): any;
    set beforeSelectShape(arg: any);
    get beforeSelectShape(): any;
    set beforeUpdateShape(arg: any);
    get beforeUpdateShape(): any;
}
declare class Filter extends SvelteComponent {
    constructor(options: any);
    get name(): any;
    set isActive(arg: any);
    get isActive(): any;
    set isActiveFraction(arg: any);
    get isActiveFraction(): any;
    set stores(arg: any);
    get stores(): any;
    set locale(arg: any);
    get locale(): any;
    set filterFunctions(arg: any);
    get filterFunctions(): any;
    set filterOptions(arg: any);
    get filterOptions(): any;
}
declare namespace filterFunctionsDefault {
    export { chrome };
    export { fade };
    export { pastel };
    export { cold };
    export { warm };
    export { monoDefault };
    export { monoWash };
    export { monoNoir };
    export { monoStark };
    export { sepiaDefault };
    export { sepiaRust };
    export { sepiaBlues };
    export { sepiaColor };
}
declare const filterOptionsDefault: (string | (string | ((locale: any) => any))[][])[][];
declare class Finetune extends SvelteComponent {
    constructor(options: any);
    get name(): any;
    set stores(arg: any);
    get stores(): any;
    set isActive(arg: any);
    get isActive(): any;
    set locale(arg: any);
    get locale(): any;
    set finetuneControlConfiguration(arg: any);
    get finetuneControlConfiguration(): any;
    set finetuneOptions(arg: any);
    get finetuneOptions(): any;
}
declare namespace finetuneControlConfigurationDefault {
    export { gamma };
    export { brightness };
    export { contrast };
    export { saturation };
    export { exposure };
    export { temperature };
    export { clarity };
    export { vignette };
}
declare const finetuneOptionsDefault: (string | ((locale: any) => any))[][];
declare class Frame extends SvelteComponent {
    constructor(options: any);
    get name(): any;
    set isActive(arg: any);
    get isActive(): any;
    set stores(arg: any);
    get stores(): any;
    set locale(arg: any);
    get locale(): any;
    set frameStyles(arg: any);
    get frameStyles(): any;
    set frameOptions(arg: any);
    get frameOptions(): any;
    set markupEditorShapeStyleControls(arg: any);
    get markupEditorShapeStyleControls(): any;
}
declare namespace frameStylesDefault {
    export { solidSharp };
    export { solidRound };
    export { lineSingle };
    export { lineMultiple };
    export { edgeSeparate };
    export { edgeCross };
    export { edgeOverlap };
    export { hook };
    export { polaroid };
}
declare const frameOptionsDefault: (string | ((locale: any) => any))[][];
declare class Resize extends SvelteComponent {
    constructor(options: any);
    get name(): any;
    set isActive(arg: any);
    get isActive(): any;
    set stores(arg: any);
    get stores(): any;
    set locale(arg: any);
    get locale(): any;
    set resizeMinSize(arg: any);
    get resizeMinSize(): any;
    set resizeMaxSize(arg: any);
    get resizeMaxSize(): any;
    set resizeSizePresetOptions(arg: any);
    get resizeSizePresetOptions(): any;
    set resizeWidthPresetOptions(arg: any);
    get resizeWidthPresetOptions(): any;
    set resizeHeightPresetOptions(arg: any);
    get resizeHeightPresetOptions(): any;
    set resizeWillRenderFooter(arg: any);
    get resizeWillRenderFooter(): any;
}
declare class Sticker extends SvelteComponent {
    constructor(options: any);
    get name(): any;
    set isActive(arg: any);
    get isActive(): any;
    set isActiveFraction(arg: any);
    get isActiveFraction(): any;
    set isVisible(arg: any);
    get isVisible(): any;
    set stores(arg: any);
    get stores(): any;
    set locale(arg: any);
    get locale(): any;
    set stickers(arg: any);
    get stickers(): any;
    set stickerStickToImage(arg: any);
    get stickerStickToImage(): any;
    set stickerEnableSelectImage(arg: any);
    get stickerEnableSelectImage(): any;
    set stickersEnableButtonFlipVertical(arg: any);
    get stickersEnableButtonFlipVertical(): any;
    set stickersWillRenderShapePresetToolbar(arg: any);
    get stickersWillRenderShapePresetToolbar(): any;
    set willRenderShapeControls(arg: any);
    get willRenderShapeControls(): any;
    set markupEditorToolSelectRadius(arg: any);
    get markupEditorToolSelectRadius(): any;
    set willRenderShapePresetToolbar(arg: any);
    get willRenderShapePresetToolbar(): any;
    set beforeAddShape(arg: any);
    get beforeAddShape(): any;
    set beforeRemoveShape(arg: any);
    get beforeRemoveShape(): any;
    set beforeDeselectShape(arg: any);
    get beforeDeselectShape(): any;
    set beforeSelectShape(arg: any);
    get beforeSelectShape(): any;
    set beforeUpdateShape(arg: any);
    get beforeUpdateShape(): any;
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
declare class SvelteComponent {
    $destroy(): void;
    $on(type: any, callback: any): () => void;
    $set($$props: any): void;
}
export { createBackgroundColorControl as createMarkupEditorBackgroundColorControl, createColorControl as createMarkupEditorColorControl, createColorOptions as createMarkupEditorColorOptions, createFontColorControl as createMarkupEditorFontColorControl, createFontFamilyControl as createMarkupEditorFontFamilyControl, createFontFamilyOptions as createMarkupEditorFontFamilyOptions, createFontScaleOptions as createMarkupEditorFontScaleOptions, createFontSizeControl as createMarkupEditorFontSizeControl, createFontSizeOptions as createMarkupEditorFontSizeOptions, createFontStyleControl as createMarkupEditorFontStyleControl, createFontStyleOptions as createMarkupEditorFontStyleOptions, createLineEndStyleControl as createMarkupEditorLineEndStyleControl, createLineEndStyleOptions as createMarkupEditorLineEndStyleOptions, createLineHeightControl as createMarkupEditorLineHeightControl, createLineStartStyleControl as createMarkupEditorLineStartStyleControl, createStrokeColorControl as createMarkupEditorStrokeColorControl, createStrokeScaleOptions as createMarkupEditorStrokeScaleOptions, createStrokeWidthControl as createMarkupEditorStrokeWidthControl, createStrokeWidthOptions as createMarkupEditorStrokeWidthOptions, createTextAlignControl as createMarkupEditorTextAlignControl, createToolStyle as createMarkupEditorToolStyle, brightness as effectBrightness, clarity as effectClarity, contrast as effectContrast, exposure as effectExposure, gamma as effectGamma, saturation as effectSaturation, temperature as effectTemperature, vignette as effectVignette, chrome as filterChrome, cold as filterCold, fade as filterFade, invert as filterInvert, monoDefault as filterMonoDefault, monoNoir as filterMonoNoir, monoStark as filterMonoStark, monoWash as filterMonoWash, pastel as filterPastel, sepiaBlues as filterSepiaBlues, sepiaColor as filterSepiaColor, sepiaDefault as filterSepiaDefault, sepiaRust as filterSepiaRust, warm as filterWarm, edgeCross as frameEdgeCross, edgeOverlap as frameEdgeOverlap, edgeSeparate as frameEdgeSeparate, hook as frameHook, lineMultiple as frameLineMultiple, lineSingle as frameLineSingle, polaroid as framePolaroid, solidRound as frameSolidRound, solidSharp as frameSolidSharp, isModernBrowser as isSupported };

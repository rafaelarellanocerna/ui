/// <reference types="react" />
import { AtomButtonTypes } from './types';
export declare const ButtonStyled: import("@emotion/styled").StyledComponent<{
    form?: string;
    slot?: string;
    title?: string;
    defaultChecked?: boolean;
    defaultValue?: string | number | readonly string[];
    suppressContentEditableWarning?: boolean;
    suppressHydrationWarning?: boolean;
    accessKey?: string;
    className?: string;
    contentEditable?: "inherit" | (boolean | "true" | "false");
    contextMenu?: string;
    dir?: string;
    draggable?: boolean | "true" | "false";
    hidden?: boolean;
    id?: string;
    lang?: string;
    placeholder?: string;
    spellCheck?: boolean | "true" | "false";
    tabIndex?: number;
    translate?: "yes" | "no";
    radioGroup?: string;
    role?: import("react").AriaRole;
    about?: string;
    datatype?: string;
    inlist?: any;
    prefix?: string;
    property?: string;
    resource?: string;
    typeof?: string;
    vocab?: string;
    autoCapitalize?: string;
    autoCorrect?: string;
    autoSave?: string;
    color?: string;
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
    itemID?: string;
    itemRef?: string;
    results?: number;
    security?: string;
    unselectable?: "on" | "off";
    inputMode?: "text" | "none" | "search" | "tel" | "url" | "email" | "numeric" | "decimal";
    is?: string;
    "aria-activedescendant"?: string;
    "aria-atomic"?: boolean | "true" | "false";
    "aria-autocomplete"?: "list" | "none" | "inline" | "both";
    "aria-busy"?: boolean | "true" | "false";
    "aria-checked"?: boolean | "true" | "false" | "mixed";
    "aria-colcount"?: number;
    "aria-colindex"?: number;
    "aria-colspan"?: number;
    "aria-controls"?: string;
    "aria-current"?: boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date";
    "aria-describedby"?: string;
    "aria-details"?: string;
    "aria-disabled"?: boolean | "true" | "false";
    "aria-dropeffect"?: "link" | "none" | "copy" | "move" | "execute" | "popup";
    "aria-errormessage"?: string;
    "aria-expanded"?: boolean | "true" | "false";
    "aria-flowto"?: string;
    "aria-grabbed"?: boolean | "true" | "false";
    "aria-haspopup"?: boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree";
    "aria-hidden"?: boolean | "true" | "false";
    "aria-invalid"?: boolean | "true" | "false" | "grammar" | "spelling";
    "aria-keyshortcuts"?: string;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "aria-level"?: number;
    "aria-live"?: "off" | "assertive" | "polite";
    "aria-modal"?: boolean | "true" | "false";
    "aria-multiline"?: boolean | "true" | "false";
    "aria-multiselectable"?: boolean | "true" | "false";
    "aria-orientation"?: "horizontal" | "vertical";
    "aria-owns"?: string;
    "aria-placeholder"?: string;
    "aria-posinset"?: number;
    "aria-pressed"?: boolean | "true" | "false" | "mixed";
    "aria-readonly"?: boolean | "true" | "false";
    "aria-relevant"?: "text" | "all" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals";
    "aria-required"?: boolean | "true" | "false";
    "aria-roledescription"?: string;
    "aria-rowcount"?: number;
    "aria-rowindex"?: number;
    "aria-rowspan"?: number;
    "aria-selected"?: boolean | "true" | "false";
    "aria-setsize"?: number;
    "aria-sort"?: "none" | "ascending" | "descending" | "other";
    "aria-valuemax"?: number;
    "aria-valuemin"?: number;
    "aria-valuenow"?: number;
    "aria-valuetext"?: string;
    children?: import("react").ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
    onCopy?: import("react").ClipboardEventHandler<HTMLButtonElement>;
    onCopyCapture?: import("react").ClipboardEventHandler<HTMLButtonElement>;
    onCut?: import("react").ClipboardEventHandler<HTMLButtonElement>;
    onCutCapture?: import("react").ClipboardEventHandler<HTMLButtonElement>;
    onPaste?: import("react").ClipboardEventHandler<HTMLButtonElement>;
    onPasteCapture?: import("react").ClipboardEventHandler<HTMLButtonElement>;
    onCompositionEnd?: import("react").CompositionEventHandler<HTMLButtonElement>;
    onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLButtonElement>;
    onCompositionStart?: import("react").CompositionEventHandler<HTMLButtonElement>;
    onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLButtonElement>;
    onCompositionUpdate?: import("react").CompositionEventHandler<HTMLButtonElement>;
    onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLButtonElement>;
    onFocus?: import("react").FocusEventHandler<HTMLButtonElement>;
    onFocusCapture?: import("react").FocusEventHandler<HTMLButtonElement>;
    onBlur?: import("react").FocusEventHandler<HTMLButtonElement>;
    onBlurCapture?: import("react").FocusEventHandler<HTMLButtonElement>;
    onChange?: import("react").FormEventHandler<HTMLButtonElement>;
    onChangeCapture?: import("react").FormEventHandler<HTMLButtonElement>;
    onBeforeInput?: import("react").FormEventHandler<HTMLButtonElement>;
    onBeforeInputCapture?: import("react").FormEventHandler<HTMLButtonElement>;
    onInput?: import("react").FormEventHandler<HTMLButtonElement>;
    onInputCapture?: import("react").FormEventHandler<HTMLButtonElement>;
    onReset?: import("react").FormEventHandler<HTMLButtonElement>;
    onResetCapture?: import("react").FormEventHandler<HTMLButtonElement>;
    onSubmit?: import("react").FormEventHandler<HTMLButtonElement>;
    onSubmitCapture?: import("react").FormEventHandler<HTMLButtonElement>;
    onInvalid?: import("react").FormEventHandler<HTMLButtonElement>;
    onInvalidCapture?: import("react").FormEventHandler<HTMLButtonElement>;
    onLoad?: import("react").ReactEventHandler<HTMLButtonElement>;
    onLoadCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onError?: import("react").ReactEventHandler<HTMLButtonElement>;
    onErrorCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onKeyDown?: import("react").KeyboardEventHandler<HTMLButtonElement>;
    onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLButtonElement>;
    onKeyPress?: import("react").KeyboardEventHandler<HTMLButtonElement>;
    onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLButtonElement>;
    onKeyUp?: import("react").KeyboardEventHandler<HTMLButtonElement>;
    onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLButtonElement>;
    onAbort?: import("react").ReactEventHandler<HTMLButtonElement>;
    onAbortCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onCanPlay?: import("react").ReactEventHandler<HTMLButtonElement>;
    onCanPlayCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onCanPlayThrough?: import("react").ReactEventHandler<HTMLButtonElement>;
    onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onDurationChange?: import("react").ReactEventHandler<HTMLButtonElement>;
    onDurationChangeCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onEmptied?: import("react").ReactEventHandler<HTMLButtonElement>;
    onEmptiedCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onEncrypted?: import("react").ReactEventHandler<HTMLButtonElement>;
    onEncryptedCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onEnded?: import("react").ReactEventHandler<HTMLButtonElement>;
    onEndedCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onLoadedData?: import("react").ReactEventHandler<HTMLButtonElement>;
    onLoadedDataCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onLoadedMetadata?: import("react").ReactEventHandler<HTMLButtonElement>;
    onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onLoadStart?: import("react").ReactEventHandler<HTMLButtonElement>;
    onLoadStartCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onPause?: import("react").ReactEventHandler<HTMLButtonElement>;
    onPauseCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onPlay?: import("react").ReactEventHandler<HTMLButtonElement>;
    onPlayCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onPlaying?: import("react").ReactEventHandler<HTMLButtonElement>;
    onPlayingCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onProgress?: import("react").ReactEventHandler<HTMLButtonElement>;
    onProgressCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onRateChange?: import("react").ReactEventHandler<HTMLButtonElement>;
    onRateChangeCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onSeeked?: import("react").ReactEventHandler<HTMLButtonElement>;
    onSeekedCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onSeeking?: import("react").ReactEventHandler<HTMLButtonElement>;
    onSeekingCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onStalled?: import("react").ReactEventHandler<HTMLButtonElement>;
    onStalledCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onSuspend?: import("react").ReactEventHandler<HTMLButtonElement>;
    onSuspendCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onTimeUpdate?: import("react").ReactEventHandler<HTMLButtonElement>;
    onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onVolumeChange?: import("react").ReactEventHandler<HTMLButtonElement>;
    onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onWaiting?: import("react").ReactEventHandler<HTMLButtonElement>;
    onWaitingCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onAuxClick?: import("react").MouseEventHandler<HTMLButtonElement>;
    onAuxClickCapture?: import("react").MouseEventHandler<HTMLButtonElement>;
    onClick?: import("react").MouseEventHandler<HTMLButtonElement>;
    onClickCapture?: import("react").MouseEventHandler<HTMLButtonElement>;
    onContextMenu?: import("react").MouseEventHandler<HTMLButtonElement>;
    onContextMenuCapture?: import("react").MouseEventHandler<HTMLButtonElement>;
    onDoubleClick?: import("react").MouseEventHandler<HTMLButtonElement>;
    onDoubleClickCapture?: import("react").MouseEventHandler<HTMLButtonElement>;
    onDragCapture?: import("react").DragEventHandler<HTMLButtonElement>;
    onDragEndCapture?: import("react").DragEventHandler<HTMLButtonElement>;
    onDragEnter?: import("react").DragEventHandler<HTMLButtonElement>;
    onDragEnterCapture?: import("react").DragEventHandler<HTMLButtonElement>;
    onDragExit?: import("react").DragEventHandler<HTMLButtonElement>;
    onDragExitCapture?: import("react").DragEventHandler<HTMLButtonElement>;
    onDragLeave?: import("react").DragEventHandler<HTMLButtonElement>;
    onDragLeaveCapture?: import("react").DragEventHandler<HTMLButtonElement>;
    onDragOver?: import("react").DragEventHandler<HTMLButtonElement>;
    onDragOverCapture?: import("react").DragEventHandler<HTMLButtonElement>;
    onDragStartCapture?: import("react").DragEventHandler<HTMLButtonElement>;
    onDrop?: import("react").DragEventHandler<HTMLButtonElement>;
    onDropCapture?: import("react").DragEventHandler<HTMLButtonElement>;
    onMouseDown?: import("react").MouseEventHandler<HTMLButtonElement>;
    onMouseDownCapture?: import("react").MouseEventHandler<HTMLButtonElement>;
    onMouseEnter?: import("react").MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: import("react").MouseEventHandler<HTMLButtonElement>;
    onMouseMove?: import("react").MouseEventHandler<HTMLButtonElement>;
    onMouseMoveCapture?: import("react").MouseEventHandler<HTMLButtonElement>;
    onMouseOut?: import("react").MouseEventHandler<HTMLButtonElement>;
    onMouseOutCapture?: import("react").MouseEventHandler<HTMLButtonElement>;
    onMouseOver?: import("react").MouseEventHandler<HTMLButtonElement>;
    onMouseOverCapture?: import("react").MouseEventHandler<HTMLButtonElement>;
    onMouseUp?: import("react").MouseEventHandler<HTMLButtonElement>;
    onMouseUpCapture?: import("react").MouseEventHandler<HTMLButtonElement>;
    onSelect?: import("react").ReactEventHandler<HTMLButtonElement>;
    onSelectCapture?: import("react").ReactEventHandler<HTMLButtonElement>;
    onTouchCancel?: import("react").TouchEventHandler<HTMLButtonElement>;
    onTouchCancelCapture?: import("react").TouchEventHandler<HTMLButtonElement>;
    onTouchEnd?: import("react").TouchEventHandler<HTMLButtonElement>;
    onTouchEndCapture?: import("react").TouchEventHandler<HTMLButtonElement>;
    onTouchMove?: import("react").TouchEventHandler<HTMLButtonElement>;
    onTouchMoveCapture?: import("react").TouchEventHandler<HTMLButtonElement>;
    onTouchStart?: import("react").TouchEventHandler<HTMLButtonElement>;
    onTouchStartCapture?: import("react").TouchEventHandler<HTMLButtonElement>;
    onPointerDown?: import("react").PointerEventHandler<HTMLButtonElement>;
    onPointerDownCapture?: import("react").PointerEventHandler<HTMLButtonElement>;
    onPointerMove?: import("react").PointerEventHandler<HTMLButtonElement>;
    onPointerMoveCapture?: import("react").PointerEventHandler<HTMLButtonElement>;
    onPointerUp?: import("react").PointerEventHandler<HTMLButtonElement>;
    onPointerUpCapture?: import("react").PointerEventHandler<HTMLButtonElement>;
    onPointerCancel?: import("react").PointerEventHandler<HTMLButtonElement>;
    onPointerCancelCapture?: import("react").PointerEventHandler<HTMLButtonElement>;
    onPointerEnter?: import("react").PointerEventHandler<HTMLButtonElement>;
    onPointerEnterCapture?: import("react").PointerEventHandler<HTMLButtonElement>;
    onPointerLeave?: import("react").PointerEventHandler<HTMLButtonElement>;
    onPointerLeaveCapture?: import("react").PointerEventHandler<HTMLButtonElement>;
    onPointerOver?: import("react").PointerEventHandler<HTMLButtonElement>;
    onPointerOverCapture?: import("react").PointerEventHandler<HTMLButtonElement>;
    onPointerOut?: import("react").PointerEventHandler<HTMLButtonElement>;
    onPointerOutCapture?: import("react").PointerEventHandler<HTMLButtonElement>;
    onGotPointerCapture?: import("react").PointerEventHandler<HTMLButtonElement>;
    onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLButtonElement>;
    onLostPointerCapture?: import("react").PointerEventHandler<HTMLButtonElement>;
    onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLButtonElement>;
    onScroll?: import("react").UIEventHandler<HTMLButtonElement>;
    onScrollCapture?: import("react").UIEventHandler<HTMLButtonElement>;
    onWheel?: import("react").WheelEventHandler<HTMLButtonElement>;
    onWheelCapture?: import("react").WheelEventHandler<HTMLButtonElement>;
    onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLButtonElement>;
    onAnimationEnd?: import("react").AnimationEventHandler<HTMLButtonElement>;
    onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLButtonElement>;
    onAnimationIteration?: import("react").AnimationEventHandler<HTMLButtonElement>;
    onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLButtonElement>;
    onTransitionEnd?: import("react").TransitionEventHandler<HTMLButtonElement>;
    onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLButtonElement>;
    autoFocus?: boolean;
    disabled?: boolean;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    name?: string;
    type?: "button" | "submit" | "reset";
    value?: string | number | readonly string[];
} & import("framer-motion").MotionProps & import("react").RefAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme;
} & AtomButtonTypes, {}, {}>;
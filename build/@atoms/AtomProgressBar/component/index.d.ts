export interface ProgressBarProps {
    backgroundColor?: string;
    progress?: string;
    progressColor?: string;
    height?: string;
    width?: string;
    borderRadius?: string;
    rightLabel?: string;
    leftLabel?: string;
    innerLabel?: string;
    className?: string;
    row?: boolean;
}
export declare const ProgressBar: ({ backgroundColor, progressColor, borderRadius, rightLabel, innerLabel, leftLabel, className, progress, height, width, row, }: ProgressBarProps) => import("@emotion/react/jsx-runtime").JSX.Element;

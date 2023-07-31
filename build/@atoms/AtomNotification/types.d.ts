import { MotionProps } from 'framer-motion';
export interface AtomNotificationTypes extends MotionProps {
    notification: any;
    count: number;
    color?: string;
}

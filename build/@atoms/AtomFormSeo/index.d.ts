import { FormikValues } from 'formik';
import { SeoPageProps } from '../AtomSeoPage/types';
export declare type IInitialSeoValues = {
    seo: SeoPageProps;
};
export declare const initialSeoValues: IInitialSeoValues;
declare type Props = {
    formik?: FormikValues;
};
declare const AtomFormSeo: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default AtomFormSeo;

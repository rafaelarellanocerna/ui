import { QuotationReduceType, QuotationReduceTypePayload } from '../reducer/quotation';
export declare const SetQuotation: (payload: QuotationReduceType) => {
    type: string;
    payload: QuotationReduceType<object>;
};
export declare const AddQuotation: (payload: QuotationReduceTypePayload) => {
    type: string;
    payload: QuotationReduceTypePayload<object>;
};
export declare const DeleteQuotation: () => {
    type: string;
};

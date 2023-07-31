import { Reducer } from 'react';
declare const TypesReducers: {
    SETSURVEYDETAIL: (_: SurveyDetailReducer, payload: SurveyDetailReducer) => SurveyDetailReducer;
};
declare type UserAction = {
    type: keyof typeof TypesReducers;
    payload: SurveyDetailReducer;
};
export declare type SurveyDetailReducer = {
    memberId: string;
    surveyId: string;
    name: string;
};
export declare const initialState: SurveyDetailReducer;
declare const surveyDetail: Reducer<SurveyDetailReducer, UserAction>;
export default surveyDetail;

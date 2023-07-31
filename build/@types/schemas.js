'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

exports.IPeriodInvoice = void 0;
(function (IPeriodInvoice) {
    IPeriodInvoice["DAILY"] = "DAILY";
    IPeriodInvoice["WEEKLY"] = "WEEKLY";
    IPeriodInvoice["TWO_WEEKS"] = "TWO_WEEKS";
    IPeriodInvoice["MONTHLY"] = "MONTHLY";
})(exports.IPeriodInvoice || (exports.IPeriodInvoice = {}));
exports.IBillingForm = void 0;
(function (IBillingForm) {
    IBillingForm["CERTIFICATE"] = "CERTIFICATE";
    IBillingForm["GLOBAL"] = "GLOBAL";
})(exports.IBillingForm || (exports.IBillingForm = {}));
exports.IPaymentTerm = void 0;
(function (IPaymentTerm) {
    IPaymentTerm["CASH_PAYMENT"] = "CASH_PAYMENT";
    IPaymentTerm["PREPAID"] = "PREPAID";
    IPaymentTerm["PAYMENT_POSTPONED"] = "PAYMENT_POSTPONED";
    IPaymentTerm["CREDIT"] = "CREDIT";
})(exports.IPaymentTerm || (exports.IPaymentTerm = {}));
exports.ITypeInsurance = void 0;
(function (ITypeInsurance) {
    ITypeInsurance["MEDICAL_EXPENSES"] = "MEDICAL_EXPENSES";
    ITypeInsurance["LIFE"] = "LIFE";
    ITypeInsurance["HOME"] = "HOME";
    ITypeInsurance["CARS"] = "CARS";
    ITypeInsurance["OLDER"] = "OLDER";
    ITypeInsurance["YOUNGER"] = "YOUNGER";
    ITypeInsurance["DENTAL"] = "DENTAL";
})(exports.ITypeInsurance || (exports.ITypeInsurance = {}));
exports.IPerson = void 0;
(function (IPerson) {
    IPerson["NATURAL"] = "NATURAL";
    IPerson["LEGAL"] = "LEGAL";
})(exports.IPerson || (exports.IPerson = {}));
exports.IUseCDFI = void 0;
(function (IUseCDFI) {
    IUseCDFI["PROOF_OF_INCOME"] = "PROOF_OF_INCOME";
    IUseCDFI["DISBURSEMENT_VOUCHER"] = "DISBURSEMENT_VOUCHER";
    IUseCDFI["PROOF_OF_TRANSFER"] = "PROOF_OF_TRANSFER";
    IUseCDFI["PAYROLL_RECEIPT"] = "PAYROLL_RECEIPT";
    IUseCDFI["PROOF_OF_RECEIPT_OF_PAYMENTS"] = "PROOF_OF_RECEIPT_OF_PAYMENTS";
    IUseCDFI["PROOF_OF_WITHHOLDINGS_AND_PAYMENT_INFORMATION"] = "PROOF_OF_WITHHOLDINGS_AND_PAYMENT_INFORMATION";
})(exports.IUseCDFI || (exports.IUseCDFI = {}));
exports.Iauth_PaymentMethod = void 0;
(function (Iauth_PaymentMethod) {
    Iauth_PaymentMethod["CASH"] = "CASH";
    Iauth_PaymentMethod["NOMINAL_CHECK"] = "NOMINAL_CHECK";
    Iauth_PaymentMethod["TRANSFER"] = "TRANSFER";
    Iauth_PaymentMethod["ELECTRONIC_FUNDS"] = "ELECTRONIC_FUNDS";
    Iauth_PaymentMethod["TO_DEFINE"] = "TO_DEFINE";
})(exports.Iauth_PaymentMethod || (exports.Iauth_PaymentMethod = {}));
exports.IEnumMemberRelationStatus = void 0;
(function (IEnumMemberRelationStatus) {
    IEnumMemberRelationStatus["ACTIVE"] = "ACTIVE";
    IEnumMemberRelationStatus["POTENTIAL"] = "POTENTIAL";
    IEnumMemberRelationStatus["INTERESTED"] = "INTERESTED";
    IEnumMemberRelationStatus["CLOSED"] = "CLOSED";
})(exports.IEnumMemberRelationStatus || (exports.IEnumMemberRelationStatus = {}));
exports.ISellStatus = void 0;
(function (ISellStatus) {
    ISellStatus["IN_PROCESS"] = "IN_PROCESS";
    ISellStatus["DONE"] = "DONE";
    ISellStatus["CANCELLED"] = "CANCELLED";
})(exports.ISellStatus || (exports.ISellStatus = {}));
exports.IGender = void 0;
(function (IGender) {
    IGender["MALE"] = "MALE";
    IGender["FEMALE"] = "FEMALE";
    IGender["UNKNOWN"] = "UNKNOWN";
})(exports.IGender || (exports.IGender = {}));
exports.IMaritalStatus = void 0;
(function (IMaritalStatus) {
    IMaritalStatus["DIVORCED"] = "DIVORCED";
    IMaritalStatus["MARRIED"] = "MARRIED";
    IMaritalStatus["SINGLE"] = "SINGLE";
    IMaritalStatus["SEPARATED"] = "SEPARATED";
    IMaritalStatus["WIDOWED"] = "WIDOWED";
    IMaritalStatus["UNKNOWN"] = "UNKNOWN";
})(exports.IMaritalStatus || (exports.IMaritalStatus = {}));
exports.ISocialNetworkType = void 0;
(function (ISocialNetworkType) {
    ISocialNetworkType["FACEBOOK"] = "FACEBOOK";
    ISocialNetworkType["TWITTER"] = "TWITTER";
    ISocialNetworkType["INSTAGRAM"] = "INSTAGRAM";
})(exports.ISocialNetworkType || (exports.ISocialNetworkType = {}));
exports.ISortEnumType = void 0;
(function (ISortEnumType) {
    ISortEnumType["ASC"] = "ASC";
    ISortEnumType["DESC"] = "DESC";
})(exports.ISortEnumType || (exports.ISortEnumType = {}));
exports.IEnumTransactionStatus = void 0;
(function (IEnumTransactionStatus) {
    IEnumTransactionStatus["PENDING"] = "PENDING";
    IEnumTransactionStatus["IN_POCESS"] = "IN_POCESS";
    IEnumTransactionStatus["PAID"] = "PAID";
    IEnumTransactionStatus["CANCELED"] = "CANCELED";
})(exports.IEnumTransactionStatus || (exports.IEnumTransactionStatus = {}));
exports.IEnumTransactionService = void 0;
(function (IEnumTransactionService) {
    IEnumTransactionService["STRIPE"] = "STRIPE";
    IEnumTransactionService["PAYPAL"] = "PAYPAL";
})(exports.IEnumTransactionService || (exports.IEnumTransactionService = {}));
exports.IEnumTransactionType = void 0;
(function (IEnumTransactionType) {
    IEnumTransactionType["RETIREMENT"] = "RETIREMENT";
    IEnumTransactionType["DEPOSIT"] = "DEPOSIT";
    IEnumTransactionType["PAYMENT"] = "PAYMENT";
})(exports.IEnumTransactionType || (exports.IEnumTransactionType = {}));
exports.IInvoiceStatus = void 0;
(function (IInvoiceStatus) {
    IInvoiceStatus["PENDING"] = "PENDING";
    IInvoiceStatus["PAID"] = "PAID";
    IInvoiceStatus["CANCELLED"] = "CANCELLED";
})(exports.IInvoiceStatus || (exports.IInvoiceStatus = {}));
exports.IProductStatus = void 0;
(function (IProductStatus) {
    IProductStatus["DRAFT"] = "DRAFT";
    IProductStatus["PUBLISHED"] = "PUBLISHED";
    IProductStatus["INACTIVE"] = "INACTIVE";
    IProductStatus["PROGRAMMED"] = "PROGRAMMED";
})(exports.IProductStatus || (exports.IProductStatus = {}));
exports.IArticleStatus = void 0;
(function (IArticleStatus) {
    IArticleStatus["DRAFT"] = "DRAFT";
    IArticleStatus["PUBLISHED"] = "PUBLISHED";
    IArticleStatus["PROGRAMMED"] = "PROGRAMMED";
})(exports.IArticleStatus || (exports.IArticleStatus = {}));
exports.ITypeContent = void 0;
(function (ITypeContent) {
    ITypeContent["ARTICLE"] = "ARTICLE";
    ITypeContent["PODCAST"] = "PODCAST";
    ITypeContent["VIDEO"] = "VIDEO";
    ITypeContent["BENEFITS"] = "BENEFITS";
    ITypeContent["PROMOTIONS"] = "PROMOTIONS";
    ITypeContent["COMUNICATIONS"] = "COMUNICATIONS";
})(exports.ITypeContent || (exports.ITypeContent = {}));
exports.IArticleLanguage = void 0;
(function (IArticleLanguage) {
    IArticleLanguage["ES"] = "ES";
    IArticleLanguage["EN"] = "EN";
    IArticleLanguage["PT"] = "PT";
    IArticleLanguage["ZH"] = "ZH";
    IArticleLanguage["DE"] = "DE";
    IArticleLanguage["FR"] = "FR";
    IArticleLanguage["RU"] = "RU";
})(exports.IArticleLanguage || (exports.IArticleLanguage = {}));
exports.IQuestionType = void 0;
(function (IQuestionType) {
    IQuestionType["SINGLE"] = "SINGLE";
    IQuestionType["OPEN"] = "OPEN";
    IQuestionType["MULTIPLE"] = "MULTIPLE";
})(exports.IQuestionType || (exports.IQuestionType = {}));
exports.IShopType = void 0;
(function (IShopType) {
    IShopType["IXULABS"] = "IXULABS";
    IShopType["MERCADOLIBRE"] = "MERCADOLIBRE";
    IShopType["BODEGA"] = "BODEGA";
})(exports.IShopType || (exports.IShopType = {}));
exports.IStoreType = void 0;
(function (IStoreType) {
    IStoreType["MOVIL"] = "MOVIL";
    IStoreType["FIJO"] = "FIJO";
})(exports.IStoreType || (exports.IStoreType = {}));
exports.IProductType = void 0;
(function (IProductType) {
    IProductType["CASH"] = "CASH";
    IProductType["SUBSCRIPTION"] = "SUBSCRIPTION";
})(exports.IProductType || (exports.IProductType = {}));
exports.ICostingType = void 0;
(function (ICostingType) {
    ICostingType["AVERAGE"] = "AVERAGE";
    ICostingType["STANDARD"] = "STANDARD";
    ICostingType["EUPS"] = "EUPS";
    ICostingType["PEPS"] = "PEPS";
    ICostingType["EQUAL"] = "EQUAL";
    ICostingType["PACKAGE"] = "PACKAGE";
})(exports.ICostingType || (exports.ICostingType = {}));
exports.IProductModality = void 0;
(function (IProductModality) {
    IProductModality["PURCHASE"] = "PURCHASE";
    IProductModality["SELL"] = "SELL";
    IProductModality["PRODUCTION"] = "PRODUCTION";
    IProductModality["CONSUMPTION"] = "CONSUMPTION";
    IProductModality["FIXED_ACTIVE"] = "FIXED_ACTIVE";
    IProductModality["BILLS"] = "BILLS";
})(exports.IProductModality || (exports.IProductModality = {}));
exports.IProviderType = void 0;
(function (IProviderType) {
    IProviderType["NATIONAL"] = "NATIONAL";
    IProviderType["FOREIGN"] = "FOREIGN";
})(exports.IProviderType || (exports.IProviderType = {}));
exports.IEnumDiscount = void 0;
(function (IEnumDiscount) {
    IEnumDiscount["FIXED"] = "FIXED";
    IEnumDiscount["DISCOUNT"] = "DISCOUNT";
})(exports.IEnumDiscount || (exports.IEnumDiscount = {}));
exports.IEnumResourceQuoteStatus = void 0;
(function (IEnumResourceQuoteStatus) {
    IEnumResourceQuoteStatus["DRAFT"] = "DRAFT";
    IEnumResourceQuoteStatus["RELEASED"] = "RELEASED";
    IEnumResourceQuoteStatus["PENDING"] = "PENDING";
    IEnumResourceQuoteStatus["APPROVED"] = "APPROVED";
    IEnumResourceQuoteStatus["REJECTED"] = "REJECTED";
})(exports.IEnumResourceQuoteStatus || (exports.IEnumResourceQuoteStatus = {}));
exports.IEnumQuizStatus = void 0;
(function (IEnumQuizStatus) {
    IEnumQuizStatus["STARTED"] = "STARTED";
    IEnumQuizStatus["SAVED"] = "SAVED";
    IEnumQuizStatus["FINISHED"] = "FINISHED";
})(exports.IEnumQuizStatus || (exports.IEnumQuizStatus = {}));
exports.IQuiz_QuestionType = void 0;
(function (IQuiz_QuestionType) {
    IQuiz_QuestionType["MULTIPLE_OPTION"] = "MULTIPLE_OPTION";
    IQuiz_QuestionType["MULTIPLE_SELECTION"] = "MULTIPLE_SELECTION";
    IQuiz_QuestionType["OPEN"] = "OPEN";
})(exports.IQuiz_QuestionType || (exports.IQuiz_QuestionType = {}));
exports.IEnumTagPosition = void 0;
(function (IEnumTagPosition) {
    IEnumTagPosition["TOP"] = "TOP";
    IEnumTagPosition["BOTTOM"] = "BOTTOM";
    IEnumTagPosition["LEFT"] = "LEFT";
    IEnumTagPosition["RIGHT"] = "RIGHT";
    IEnumTagPosition["HIDDEN"] = "HIDDEN";
    IEnumTagPosition["QUIZ"] = "QUIZ";
})(exports.IEnumTagPosition || (exports.IEnumTagPosition = {}));
exports.IEnumOnlineQuizStatus = void 0;
(function (IEnumOnlineQuizStatus) {
    IEnumOnlineQuizStatus["DRAFT"] = "DRAFT";
    IEnumOnlineQuizStatus["PUBLISHED"] = "PUBLISHED";
})(exports.IEnumOnlineQuizStatus || (exports.IEnumOnlineQuizStatus = {}));
exports.IEnumCivilState = void 0;
(function (IEnumCivilState) {
    IEnumCivilState["SINGLE"] = "SINGLE";
    IEnumCivilState["MARRIED"] = "MARRIED";
    IEnumCivilState["FREE_UNION"] = "FREE_UNION";
    IEnumCivilState["SEPARATE"] = "SEPARATE";
    IEnumCivilState["DIVORCED"] = "DIVORCED";
    IEnumCivilState["WIDOWER"] = "WIDOWER";
})(exports.IEnumCivilState || (exports.IEnumCivilState = {}));
exports.IEnumBenefits = void 0;
(function (IEnumBenefits) {
    IEnumBenefits["ANOTHER"] = "ANOTHER";
    IEnumBenefits["LAW_BENEFITS"] = "LAW_BENEFITS";
})(exports.IEnumBenefits || (exports.IEnumBenefits = {}));
exports.IEnumHiringType = void 0;
(function (IEnumHiringType) {
    IEnumHiringType["DETERMINATED"] = "DETERMINATED";
    IEnumHiringType["UNDETERMINATED"] = "UNDETERMINATED";
    IEnumHiringType["TRIAL"] = "TRIAL";
    IEnumHiringType["TRAINING"] = "TRAINING";
    IEnumHiringType["SEASON"] = "SEASON";
})(exports.IEnumHiringType || (exports.IEnumHiringType = {}));
exports.IFrequencyPayment = void 0;
(function (IFrequencyPayment) {
    IFrequencyPayment["BIWEEKLY"] = "BIWEEKLY";
    IFrequencyPayment["MONTHLY"] = "MONTHLY";
    IFrequencyPayment["QUARTERLY"] = "QUARTERLY";
    IFrequencyPayment["SEMI_ANNUALLY"] = "SEMI_ANNUALLY";
    IFrequencyPayment["ANNUALLY"] = "ANNUALLY";
})(exports.IFrequencyPayment || (exports.IFrequencyPayment = {}));
exports.IServicePayment = void 0;
(function (IServicePayment) {
    IServicePayment["MEXPAGO"] = "MEXPAGO";
    IServicePayment["PAYPAL"] = "PAYPAL";
    IServicePayment["STRIPE"] = "STRIPE";
    IServicePayment["CONEKTA"] = "CONEKTA";
    IServicePayment["FLAP"] = "FLAP";
})(exports.IServicePayment || (exports.IServicePayment = {}));
exports.IBackgroundTypesOptions = void 0;
(function (IBackgroundTypesOptions) {
    IBackgroundTypesOptions["INPUTTEXT"] = "INPUTTEXT";
    IBackgroundTypesOptions["CHECKBOX"] = "CHECKBOX";
    IBackgroundTypesOptions["RADIOINPUT"] = "RADIOINPUT";
    IBackgroundTypesOptions["TEXTEDITOR"] = "TEXTEDITOR";
})(exports.IBackgroundTypesOptions || (exports.IBackgroundTypesOptions = {}));
exports.IEnumInsideType = void 0;
(function (IEnumInsideType) {
    IEnumInsideType["PROGRESS"] = "PROGRESS";
    IEnumInsideType["DEADLINE"] = "DEADLINE";
    IEnumInsideType["TEXT"] = "TEXT";
    IEnumInsideType["MEMBER"] = "MEMBER";
    IEnumInsideType["TASK"] = "TASK";
    IEnumInsideType["STATUS"] = "STATUS";
    IEnumInsideType["FILE"] = "FILE";
    IEnumInsideType["DATE"] = "DATE";
})(exports.IEnumInsideType || (exports.IEnumInsideType = {}));
exports.IProgress = void 0;
(function (IProgress) {
    IProgress["NONE"] = "NONE";
    IProgress["NOT_INITIALIZED"] = "NOT_INITIALIZED";
    IProgress["IN_PROGRESS"] = "IN_PROGRESS";
    IProgress["STAGNANT"] = "STAGNANT";
    IProgress["FINALIZED"] = "FINALIZED";
})(exports.IProgress || (exports.IProgress = {}));
exports.IPriority = void 0;
(function (IPriority) {
    IPriority["NONE"] = "NONE";
    IPriority["LOW"] = "LOW";
    IPriority["MEDIUM"] = "MEDIUM";
    IPriority["HIGH"] = "HIGH";
})(exports.IPriority || (exports.IPriority = {}));
exports.IEnumSpaceAccess = void 0;
(function (IEnumSpaceAccess) {
    IEnumSpaceAccess["READER"] = "READER";
    IEnumSpaceAccess["EDITOR"] = "EDITOR";
})(exports.IEnumSpaceAccess || (exports.IEnumSpaceAccess = {}));
exports.IEnumVisibility = void 0;
(function (IEnumVisibility) {
    IEnumVisibility["NONE"] = "NONE";
    IEnumVisibility["PUBLIC"] = "PUBLIC";
    IEnumVisibility["PRIVATE"] = "PRIVATE";
})(exports.IEnumVisibility || (exports.IEnumVisibility = {}));
exports.IFunctionType = void 0;
(function (IFunctionType) {
    IFunctionType["WRITE"] = "WRITE";
    IFunctionType["READER"] = "READER";
    IFunctionType["CUSTOM"] = "CUSTOM";
    IFunctionType["DISABLE"] = "DISABLE";
})(exports.IFunctionType || (exports.IFunctionType = {}));
exports.IServiceEmail = void 0;
(function (IServiceEmail) {
    IServiceEmail["SENDGRID"] = "SENDGRID";
})(exports.IServiceEmail || (exports.IServiceEmail = {}));
exports.ITemplateService = void 0;
(function (ITemplateService) {
    ITemplateService["REGISTER"] = "REGISTER";
})(exports.ITemplateService || (exports.ITemplateService = {}));
exports.ITypeForm = void 0;
(function (ITypeForm) {
    ITypeForm["LIFE"] = "LIFE";
    ITypeForm["WITHDRAWAL"] = "WITHDRAWAL";
    ITypeForm["EDUCATIONAL"] = "EDUCATIONAL";
    ITypeForm["INVESTMENT"] = "INVESTMENT";
    ITypeForm["MEDICAL_EXPENSES"] = "MEDICAL_EXPENSES";
})(exports.ITypeForm || (exports.ITypeForm = {}));
exports.ICourseLevel = void 0;
(function (ICourseLevel) {
    ICourseLevel["BEGGINER"] = "BEGGINER";
    ICourseLevel["ADVANCED"] = "ADVANCED";
})(exports.ICourseLevel || (exports.ICourseLevel = {}));
exports.ICourseModality = void 0;
(function (ICourseModality) {
    ICourseModality["PRESENCIAL"] = "PRESENCIAL";
    ICourseModality["VIRTUAL"] = "VIRTUAL";
})(exports.ICourseModality || (exports.ICourseModality = {}));
exports.ICourseType = void 0;
(function (ICourseType) {
    ICourseType["SIMPLE"] = "SIMPLE";
    ICourseType["CERTIFICATE"] = "CERTIFICATE";
})(exports.ICourseType || (exports.ICourseType = {}));
exports.IBeginType = void 0;
(function (IBeginType) {
    IBeginType["UNIQUE"] = "UNIQUE";
    IBeginType["MULTIPLE"] = "MULTIPLE";
})(exports.IBeginType || (exports.IBeginType = {}));
exports.IPurchaseQuoteStatus = void 0;
(function (IPurchaseQuoteStatus) {
    IPurchaseQuoteStatus["PENDING"] = "PENDING";
    IPurchaseQuoteStatus["ACCEPTED"] = "ACCEPTED";
    IPurchaseQuoteStatus["DENIED"] = "DENIED";
})(exports.IPurchaseQuoteStatus || (exports.IPurchaseQuoteStatus = {}));
exports.IEventMode = void 0;
(function (IEventMode) {
    IEventMode["ONLINE"] = "ONLINE";
    IEventMode["FACE_TO_FACE"] = "FACE_TO_FACE";
})(exports.IEventMode || (exports.IEventMode = {}));
exports.IEventVisibility = void 0;
(function (IEventVisibility) {
    IEventVisibility["PUBLIC"] = "PUBLIC";
    IEventVisibility["PRIVATE"] = "PRIVATE";
})(exports.IEventVisibility || (exports.IEventVisibility = {}));
exports.IEventStatus = void 0;
(function (IEventStatus) {
    IEventStatus["CLOSED"] = "CLOSED";
    IEventStatus["OPEN"] = "OPEN";
})(exports.IEventStatus || (exports.IEventStatus = {}));
exports.ITemplateType = void 0;
(function (ITemplateType) {
    ITemplateType["WHATSAPP"] = "WHATSAPP";
    ITemplateType["PUSH_NOTIFICATION"] = "PUSH_NOTIFICATION";
    ITemplateType["EMAIL"] = "EMAIL";
    ITemplateType["SMS"] = "SMS";
    ITemplateType["CAMPAIGN"] = "CAMPAIGN";
    ITemplateType["WHATSAPP_MESSAGES"] = "WHATSAPP_MESSAGES";
})(exports.ITemplateType || (exports.ITemplateType = {}));
exports.IRoleType = void 0;
(function (IRoleType) {
    IRoleType["NOMINATOR"] = "NOMINATOR";
    IRoleType["SELLER"] = "SELLER";
    IRoleType["PROSPECT"] = "PROSPECT";
})(exports.IRoleType || (exports.IRoleType = {}));
exports.ICouponRuleType = void 0;
(function (ICouponRuleType) {
    ICouponRuleType["FIXED_AMOUNT"] = "FIXED_AMOUNT";
    ICouponRuleType["DISCOUNT"] = "DISCOUNT";
})(exports.ICouponRuleType || (exports.ICouponRuleType = {}));
exports.IRuleAppliesOn = void 0;
(function (IRuleAppliesOn) {
    IRuleAppliesOn["MEMBERSHIP"] = "MEMBERSHIP";
    IRuleAppliesOn["PRODUCT"] = "PRODUCT";
    IRuleAppliesOn["CATEGORIES"] = "CATEGORIES";
})(exports.IRuleAppliesOn || (exports.IRuleAppliesOn = {}));
exports.ITypeVideo = void 0;
(function (ITypeVideo) {
    ITypeVideo["STREAM"] = "STREAM";
    ITypeVideo["MEET"] = "MEET";
})(exports.ITypeVideo || (exports.ITypeVideo = {}));
exports.IEnumRecordStatus = void 0;
(function (IEnumRecordStatus) {
    IEnumRecordStatus["IN_PROGRESS"] = "IN_PROGRESS";
    IEnumRecordStatus["FINISHED"] = "FINISHED";
})(exports.IEnumRecordStatus || (exports.IEnumRecordStatus = {}));
exports.IEnumNameCatalog = void 0;
(function (IEnumNameCatalog) {
    IEnumNameCatalog["BRAND"] = "BRAND";
    IEnumNameCatalog["SUB_BRAND"] = "SUB_BRAND";
    IEnumNameCatalog["MODEL"] = "MODEL";
    IEnumNameCatalog["DESCRIPTION_MODEL"] = "DESCRIPTION_MODEL";
    IEnumNameCatalog["SEPOMEX"] = "SEPOMEX";
    IEnumNameCatalog["OCCUPATION"] = "OCCUPATION";
    IEnumNameCatalog["BANK"] = "BANK";
    IEnumNameCatalog["INSURER_SUBBRAND"] = "INSURER_SUBBRAND";
    IEnumNameCatalog["FISCAL_REGIME_INSURER_SUBBRANCH"] = "FISCAL_REGIME_INSURER_SUBBRANCH";
})(exports.IEnumNameCatalog || (exports.IEnumNameCatalog = {}));
exports.IEnumFormsPayment = void 0;
(function (IEnumFormsPayment) {
    IEnumFormsPayment["CASH_PAYMENT"] = "CASH_PAYMENT";
    IEnumFormsPayment["BIANNUAL"] = "BIANNUAL";
    IEnumFormsPayment["QUARTERLY"] = "QUARTERLY";
    IEnumFormsPayment["MONTHLY"] = "MONTHLY";
})(exports.IEnumFormsPayment || (exports.IEnumFormsPayment = {}));
exports.ITransactionType = void 0;
(function (ITransactionType) {
    ITransactionType["DIRECT"] = "DIRECT";
    ITransactionType["TO_ACCOUNT"] = "TO_ACCOUNT";
    ITransactionType["SUBSCRIPTION"] = "SUBSCRIPTION";
})(exports.ITransactionType || (exports.ITransactionType = {}));
exports.ITransactionStatus = void 0;
(function (ITransactionStatus) {
    ITransactionStatus["PAID"] = "PAID";
    ITransactionStatus["PENDING"] = "PENDING";
    ITransactionStatus["ERROR"] = "ERROR";
    ITransactionStatus["CANCEL"] = "CANCEL";
})(exports.ITransactionStatus || (exports.ITransactionStatus = {}));
exports.IQuoteGender = void 0;
(function (IQuoteGender) {
    IQuoteGender["MALE"] = "MALE";
    IQuoteGender["FEMALE"] = "FEMALE";
    IQuoteGender["UNKNOWN"] = "UNKNOWN";
})(exports.IQuoteGender || (exports.IQuoteGender = {}));
exports.IQuoteStatus = void 0;
(function (IQuoteStatus) {
    IQuoteStatus["HIRE"] = "HIRE";
    IQuoteStatus["PENDING"] = "PENDING";
    IQuoteStatus["QUOTED"] = "QUOTED";
    IQuoteStatus["ISSUED"] = "ISSUED";
    IQuoteStatus["CANCELED"] = "CANCELED";
    IQuoteStatus["PAID"] = "PAID";
})(exports.IQuoteStatus || (exports.IQuoteStatus = {}));
exports.IServiceEnvironment = void 0;
(function (IServiceEnvironment) {
    IServiceEnvironment["PRODUCTION"] = "PRODUCTION";
    IServiceEnvironment["DEVELOPMENT"] = "DEVELOPMENT";
    IServiceEnvironment["TESTING"] = "TESTING";
})(exports.IServiceEnvironment || (exports.IServiceEnvironment = {}));
exports.IInsurerPackageStatus = void 0;
(function (IInsurerPackageStatus) {
    IInsurerPackageStatus["AMPLIA"] = "AMPLIA";
    IInsurerPackageStatus["LIMITADA"] = "LIMITADA";
    IInsurerPackageStatus["RC"] = "RC";
})(exports.IInsurerPackageStatus || (exports.IInsurerPackageStatus = {}));
exports.IEnumQuoteStatus = void 0;
(function (IEnumQuoteStatus) {
    IEnumQuoteStatus["CANCELED"] = "CANCELED";
    IEnumQuoteStatus["APPROVED"] = "APPROVED";
    IEnumQuoteStatus["APPROVED_BY_CUSTOMER"] = "APPROVED_BY_CUSTOMER";
})(exports.IEnumQuoteStatus || (exports.IEnumQuoteStatus = {}));
exports.IMetaType = void 0;
(function (IMetaType) {
    IMetaType["INT"] = "INT";
    IMetaType["STRING"] = "STRING";
    IMetaType["FLOAT"] = "FLOAT";
    IMetaType["BOOLEAN"] = "BOOLEAN";
})(exports.IMetaType || (exports.IMetaType = {}));
exports.IServiceOption = void 0;
(function (IServiceOption) {
    IServiceOption["PRESENCIAL"] = "PRESENCIAL";
    IServiceOption["ONLINE"] = "ONLINE";
})(exports.IServiceOption || (exports.IServiceOption = {}));
exports.ICertificateType = void 0;
(function (ICertificateType) {
    ICertificateType["GENERATE_DOCUMENT"] = "GENERATE_DOCUMENT";
    ICertificateType["UPLOAD_DOCUMENT"] = "UPLOAD_DOCUMENT";
})(exports.ICertificateType || (exports.ICertificateType = {}));
exports.IInsurerType = void 0;
(function (IInsurerType) {
    IInsurerType["NATIONAL"] = "NATIONAL";
    IInsurerType["INTERNATIONAL"] = "INTERNATIONAL";
    IInsurerType["MIXED"] = "MIXED";
})(exports.IInsurerType || (exports.IInsurerType = {}));
exports.IMerchandiseStatus = void 0;
(function (IMerchandiseStatus) {
    IMerchandiseStatus["DISABLED"] = "DISABLED";
    IMerchandiseStatus["EXCLUDED"] = "EXCLUDED";
    IMerchandiseStatus["WAITING_FOR_APPROVAL"] = "WAITING_FOR_APPROVAL";
    IMerchandiseStatus["ENABLED"] = "ENABLED";
})(exports.IMerchandiseStatus || (exports.IMerchandiseStatus = {}));
exports.ITransportMode = void 0;
(function (ITransportMode) {
    ITransportMode["SEA"] = "SEA";
    ITransportMode["AERIAL"] = "AERIAL";
    ITransportMode["TERRESTRIAL"] = "TERRESTRIAL";
    ITransportMode["INTERMODAL"] = "INTERMODAL";
})(exports.ITransportMode || (exports.ITransportMode = {}));
exports.ICoverageType = void 0;
(function (ICoverageType) {
    ICoverageType["WAREHOUSE_TO_WAREHOUSE"] = "WAREHOUSE_TO_WAREHOUSE";
    ICoverageType["HARBOR_TO_HARBOR"] = "HARBOR_TO_HARBOR";
    ICoverageType["HARBOR_TO_WAREHOUSE"] = "HARBOR_TO_WAREHOUSE";
    ICoverageType["WAREHOUSE_TO_HARBOR"] = "WAREHOUSE_TO_HARBOR";
})(exports.ICoverageType || (exports.ICoverageType = {}));
exports.IPolicyType = void 0;
(function (IPolicyType) {
    IPolicyType["UNIQUE_CLIENT"] = "UNIQUE_CLIENT";
    IPolicyType["MULTICLIENT"] = "MULTICLIENT";
})(exports.IPolicyType || (exports.IPolicyType = {}));
exports.IPaymentResponsable = void 0;
(function (IPaymentResponsable) {
    IPaymentResponsable["CLIENT"] = "CLIENT";
    IPaymentResponsable["INSURER"] = "INSURER";
})(exports.IPaymentResponsable || (exports.IPaymentResponsable = {}));
exports.IIssueStatus = void 0;
(function (IIssueStatus) {
    IIssueStatus["REMESADO"] = "REMESADO";
    IIssueStatus["POR_REMESAR"] = "POR_REMESAR";
    IIssueStatus["RECHAZADO"] = "RECHAZADO";
    IIssueStatus["AUDITAR"] = "AUDITAR";
})(exports.IIssueStatus || (exports.IIssueStatus = {}));
exports.ICertificateStatusFrom = void 0;
(function (ICertificateStatusFrom) {
    ICertificateStatusFrom["ADMINISTRATOR"] = "ADMINISTRATOR";
    ICertificateStatusFrom["PUBLIC_USER"] = "PUBLIC_USER";
})(exports.ICertificateStatusFrom || (exports.ICertificateStatusFrom = {}));
exports.ICertificateMovementType = void 0;
(function (ICertificateMovementType) {
    ICertificateMovementType["REJECTION"] = "REJECTION";
    ICertificateMovementType["APPROVAL"] = "APPROVAL";
})(exports.ICertificateMovementType || (exports.ICertificateMovementType = {}));
exports.Iitus_PaymentTerm = void 0;
(function (Iitus_PaymentTerm) {
    Iitus_PaymentTerm["CASH"] = "CASH";
    Iitus_PaymentTerm["CREDIT"] = "CREDIT";
})(exports.Iitus_PaymentTerm || (exports.Iitus_PaymentTerm = {}));
exports.IInvoicingMethod = void 0;
(function (IInvoicingMethod) {
    IInvoicingMethod["BY_CERTIFICATE"] = "BY_CERTIFICATE";
    IInvoicingMethod["GLOBAL"] = "GLOBAL";
})(exports.IInvoicingMethod || (exports.IInvoicingMethod = {}));
exports.IInvoicingPeriod = void 0;
(function (IInvoicingPeriod) {
    IInvoicingPeriod["INMEDIATE"] = "INMEDIATE";
    IInvoicingPeriod["WEEKLY"] = "WEEKLY";
    IInvoicingPeriod["FORTNIGHT"] = "FORTNIGHT";
    IInvoicingPeriod["MONTHLY"] = "MONTHLY";
})(exports.IInvoicingPeriod || (exports.IInvoicingPeriod = {}));
exports.IContractorType = void 0;
(function (IContractorType) {
    IContractorType["MULTICLIENT"] = "MULTICLIENT";
    IContractorType["ONECLIENT"] = "ONECLIENT";
})(exports.IContractorType || (exports.IContractorType = {}));
exports.IPolicyStatus = void 0;
(function (IPolicyStatus) {
    IPolicyStatus["REMESADO"] = "REMESADO";
    IPolicyStatus["POR_REMESAR"] = "POR_REMESAR";
})(exports.IPolicyStatus || (exports.IPolicyStatus = {}));
exports.IContactType = void 0;
(function (IContactType) {
    IContactType["COLLECTION"] = "COLLECTION";
    IContactType["GENERAL"] = "GENERAL";
    IContactType["EMAILINVOICING"] = "EMAILINVOICING";
    IContactType["INVOICINGMODALITY"] = "INVOICINGMODALITY";
})(exports.IContactType || (exports.IContactType = {}));
exports.IEnumStudenteVerify = void 0;
(function (IEnumStudenteVerify) {
    IEnumStudenteVerify["VERIFIED"] = "VERIFIED";
    IEnumStudenteVerify["INCORRECT"] = "INCORRECT";
    IEnumStudenteVerify["TO_BE_CHECKED"] = "TO_BE_CHECKED";
})(exports.IEnumStudenteVerify || (exports.IEnumStudenteVerify = {}));
exports.IEnumAttendanceStatus = void 0;
(function (IEnumAttendanceStatus) {
    IEnumAttendanceStatus["ON_SCHOOL"] = "ON_SCHOOL";
    IEnumAttendanceStatus["TUTOR_ARRIVED"] = "TUTOR_ARRIVED";
    IEnumAttendanceStatus["COMING_OUT"] = "COMING_OUT";
    IEnumAttendanceStatus["ON_HOME"] = "ON_HOME";
    IEnumAttendanceStatus["ABSENT"] = "ABSENT";
})(exports.IEnumAttendanceStatus || (exports.IEnumAttendanceStatus = {}));
exports.IEnumFCurrency = void 0;
(function (IEnumFCurrency) {
    IEnumFCurrency["PESO"] = "PESO";
    IEnumFCurrency["DOLLAR"] = "DOLLAR";
    IEnumFCurrency["UDI"] = "UDI";
    IEnumFCurrency["EURO"] = "EURO";
})(exports.IEnumFCurrency || (exports.IEnumFCurrency = {}));
exports.IEnumBonoType = void 0;
(function (IEnumBonoType) {
    IEnumBonoType["EMISSION"] = "EMISSION";
    IEnumBonoType["CANCEL"] = "CANCEL";
    IEnumBonoType["PRODUCTION"] = "PRODUCTION";
    IEnumBonoType["ANOTHER"] = "ANOTHER";
})(exports.IEnumBonoType || (exports.IEnumBonoType = {}));
exports.ITypeAgentProvider = void 0;
(function (ITypeAgentProvider) {
    ITypeAgentProvider["SURETY"] = "SURETY";
    ITypeAgentProvider["INSURANCE_CARRIER"] = "INSURANCE_CARRIER";
})(exports.ITypeAgentProvider || (exports.ITypeAgentProvider = {}));
exports.IEnumPolicePaymentType = void 0;
(function (IEnumPolicePaymentType) {
    IEnumPolicePaymentType["MONTHLY"] = "MONTHLY";
    IEnumPolicePaymentType["BIMONTHLY"] = "BIMONTHLY";
    IEnumPolicePaymentType["QUARTERLY"] = "QUARTERLY";
    IEnumPolicePaymentType["CASH_PAYMENT"] = "CASH_PAYMENT";
    IEnumPolicePaymentType["BIANNUAL"] = "BIANNUAL";
    IEnumPolicePaymentType["ANNUAL"] = "ANNUAL";
    IEnumPolicePaymentType["FORTNIGTHLY"] = "FORTNIGTHLY";
    IEnumPolicePaymentType["WEEKLLY"] = "WEEKLLY";
    IEnumPolicePaymentType["FOURTEEN"] = "FOURTEEN";
})(exports.IEnumPolicePaymentType || (exports.IEnumPolicePaymentType = {}));
exports.IEnumPoliceStatus = void 0;
(function (IEnumPoliceStatus) {
    IEnumPoliceStatus["DISABLED"] = "DISABLED";
    IEnumPoliceStatus["N_OR_A"] = "N_OR_A";
    IEnumPoliceStatus["IN_PROCESS"] = "IN_PROCESS";
    IEnumPoliceStatus["OT_CANCELED"] = "OT_CANCELED";
    IEnumPoliceStatus["TO_START"] = "TO_START";
    IEnumPoliceStatus["VALID"] = "VALID";
    IEnumPoliceStatus["CANCALED"] = "CANCALED";
    IEnumPoliceStatus["EXPIRED"] = "EXPIRED";
    IEnumPoliceStatus["RENEWED"] = "RENEWED";
    IEnumPoliceStatus["UNRENEWED"] = "UNRENEWED";
    IEnumPoliceStatus["PRE_CANCELED"] = "PRE_CANCELED";
    IEnumPoliceStatus["ACTIVE_BY_A_ENDORSEMENT"] = "ACTIVE_BY_A_ENDORSEMENT";
    IEnumPoliceStatus["INACTIVE_BY_D_ENDORSEMENT"] = "INACTIVE_BY_D_ENDORSEMENT";
    IEnumPoliceStatus["INACTIVE_INITIAL_BY_CANCELATION"] = "INACTIVE_INITIAL_BY_CANCELATION";
    IEnumPoliceStatus["INACTIVE_A_ENDORSEMENT_BY_CANCELATION"] = "INACTIVE_A_ENDORSEMENT_BY_CANCELATION";
    IEnumPoliceStatus["INACTIVE_BY_EXPIRED_POLICY"] = "INACTIVE_BY_EXPIRED_POLICY";
    IEnumPoliceStatus["INACTIVE_BY_RENEWED_POLICY"] = "INACTIVE_BY_RENEWED_POLICY";
})(exports.IEnumPoliceStatus || (exports.IEnumPoliceStatus = {}));
exports.IEnumPoliceDocumentType = void 0;
(function (IEnumPoliceDocumentType) {
    IEnumPoliceDocumentType["POLICY"] = "POLICY";
    IEnumPoliceDocumentType["POLICY_GROUP"] = "POLICY_GROUP";
    IEnumPoliceDocumentType["SUBGROUP"] = "SUBGROUP";
    IEnumPoliceDocumentType["CATEGORY"] = "CATEGORY";
    IEnumPoliceDocumentType["CERTIFICATE"] = "CERTIFICATE";
    IEnumPoliceDocumentType["BAIL"] = "BAIL";
    IEnumPoliceDocumentType["BAIL_COVER"] = "BAIL_COVER";
    IEnumPoliceDocumentType["BAIL_CATEGORY"] = "BAIL_CATEGORY";
    IEnumPoliceDocumentType["BAIL_CERTIFICATE"] = "BAIL_CERTIFICATE";
    IEnumPoliceDocumentType["COLLECTIVITIES"] = "COLLECTIVITIES";
    IEnumPoliceDocumentType["COLLECTIVITIES_POLICY"] = "COLLECTIVITIES_POLICY";
})(exports.IEnumPoliceDocumentType || (exports.IEnumPoliceDocumentType = {}));
exports.IEnumPoliceAdministrationType = void 0;
(function (IEnumPoliceAdministrationType) {
    IEnumPoliceAdministrationType["SIMPLIFIED"] = "SIMPLIFIED";
    IEnumPoliceAdministrationType["SELFMANAGED"] = "SELFMANAGED";
    IEnumPoliceAdministrationType["DETAILED"] = "DETAILED";
})(exports.IEnumPoliceAdministrationType || (exports.IEnumPoliceAdministrationType = {}));
exports.IEnumPoliceRenew = void 0;
(function (IEnumPoliceRenew) {
    IEnumPoliceRenew["RENEWABLE"] = "RENEWABLE";
    IEnumPoliceRenew["UNRENEWABLE"] = "UNRENEWABLE";
})(exports.IEnumPoliceRenew || (exports.IEnumPoliceRenew = {}));
exports.IEnumPoliceRenewalStatus = void 0;
(function (IEnumPoliceRenewalStatus) {
    IEnumPoliceRenewalStatus["THERE_IS_NO_SUBSEQUENT_RENEWAL"] = "THERE_IS_NO_SUBSEQUENT_RENEWAL";
    IEnumPoliceRenewalStatus["RENEW_IN_PROCESS"] = "RENEW_IN_PROCESS";
    IEnumPoliceRenewalStatus["COMPLETEW_RENOVATION"] = "COMPLETEW_RENOVATION";
    IEnumPoliceRenewalStatus["ERROR_THERE_ARE_MULTIPLE_RENOVATIONS"] = "ERROR_THERE_ARE_MULTIPLE_RENOVATIONS";
})(exports.IEnumPoliceRenewalStatus || (exports.IEnumPoliceRenewalStatus = {}));
exports.IEnumPoliceReceipts = void 0;
(function (IEnumPoliceReceipts) {
    IEnumPoliceReceipts["POLICY"] = "POLICY";
    IEnumPoliceReceipts["SUBGROUP"] = "SUBGROUP";
    IEnumPoliceReceipts["CATEGORY"] = "CATEGORY";
})(exports.IEnumPoliceReceipts || (exports.IEnumPoliceReceipts = {}));
exports.IEnumPayScheme = void 0;
(function (IEnumPayScheme) {
    IEnumPayScheme["TRADITIONAL"] = "TRADITIONAL";
    IEnumPayScheme["MINIMUM_PRIMA"] = "MINIMUM_PRIMA";
})(exports.IEnumPayScheme || (exports.IEnumPayScheme = {}));
exports.IEnumPoliceConcept = void 0;
(function (IEnumPoliceConcept) {
    IEnumPoliceConcept["PRECANCELED"] = "PRECANCELED";
    IEnumPoliceConcept["CAPTURE_ERROR"] = "CAPTURE_ERROR";
    IEnumPoliceConcept["REISSUE"] = "REISSUE";
    IEnumPoliceConcept["NON_PAYMENT"] = "NON_PAYMENT";
    IEnumPoliceConcept["ANOTHER"] = "ANOTHER";
    IEnumPoliceConcept["NOT_APPLY"] = "NOT_APPLY";
})(exports.IEnumPoliceConcept || (exports.IEnumPoliceConcept = {}));
exports.IEnumPoliceEmisionStatus = void 0;
(function (IEnumPoliceEmisionStatus) {
    IEnumPoliceEmisionStatus["DOCUMENTS_RECEIVED"] = "DOCUMENTS_RECEIVED";
    IEnumPoliceEmisionStatus["DOCUMENT_PENDING"] = "DOCUMENT_PENDING";
    IEnumPoliceEmisionStatus["DOCUMENT_UPLODAD"] = "DOCUMENT_UPLODAD";
    IEnumPoliceEmisionStatus["IN_AUTHORIZATION"] = "IN_AUTHORIZATION";
    IEnumPoliceEmisionStatus["EMMITED"] = "EMMITED";
})(exports.IEnumPoliceEmisionStatus || (exports.IEnumPoliceEmisionStatus = {}));
exports.IEnumPoliceBussinessLine = void 0;
(function (IEnumPoliceBussinessLine) {
    IEnumPoliceBussinessLine["COMERTIAL"] = "COMERTIAL";
    IEnumPoliceBussinessLine["PERSONAL"] = "PERSONAL";
    IEnumPoliceBussinessLine["ANOTHER"] = "ANOTHER";
})(exports.IEnumPoliceBussinessLine || (exports.IEnumPoliceBussinessLine = {}));
exports.IEnumPolicyType = void 0;
(function (IEnumPolicyType) {
    IEnumPolicyType["OPEN"] = "OPEN";
    IEnumPolicyType["CLOSED"] = "CLOSED";
})(exports.IEnumPolicyType || (exports.IEnumPolicyType = {}));
exports.IEnumConductChoise = void 0;
(function (IEnumConductChoise) {
    IEnumConductChoise["UNDOMICILED"] = "UNDOMICILED";
    IEnumConductChoise["AGENT"] = "AGENT";
    IEnumConductChoise["CAC"] = "CAC";
    IEnumConductChoise["CAT_OR_DOMICILED"] = "CAT_OR_DOMICILED";
    IEnumConductChoise["PAYROLL"] = "PAYROLL";
    IEnumConductChoise["CUT"] = "CUT";
})(exports.IEnumConductChoise || (exports.IEnumConductChoise = {}));
exports.Isaam_EnumGender = void 0;
(function (Isaam_EnumGender) {
    Isaam_EnumGender["MALE"] = "MALE";
    Isaam_EnumGender["FEMALE"] = "FEMALE";
    Isaam_EnumGender["UNKNOWN"] = "UNKNOWN";
})(exports.Isaam_EnumGender || (exports.Isaam_EnumGender = {}));
exports.IEnumContractorType = void 0;
(function (IEnumContractorType) {
    IEnumContractorType["PHYSICAL"] = "PHYSICAL";
    IEnumContractorType["MORAL"] = "MORAL";
})(exports.IEnumContractorType || (exports.IEnumContractorType = {}));
exports.IEnumContractorGroupType = void 0;
(function (IEnumContractorGroupType) {
    IEnumContractorGroupType["GROUP"] = "GROUP";
    IEnumContractorGroupType["SUBGROUP"] = "SUBGROUP";
    IEnumContractorGroupType["SUBSUBGROUP"] = "SUBSUBGROUP";
})(exports.IEnumContractorGroupType || (exports.IEnumContractorGroupType = {}));
exports.IEnumSinisterRelation = void 0;
(function (IEnumSinisterRelation) {
    IEnumSinisterRelation["TITULAR"] = "TITULAR";
    IEnumSinisterRelation["SPOUSE"] = "SPOUSE";
    IEnumSinisterRelation["FIRSTBORN"] = "FIRSTBORN";
    IEnumSinisterRelation["ANOTHER"] = "ANOTHER";
})(exports.IEnumSinisterRelation || (exports.IEnumSinisterRelation = {}));
exports.IEnumSinisterKind = void 0;
(function (IEnumSinisterKind) {
    IEnumSinisterKind["PERSONAL_ACCIDENTS"] = "PERSONAL_ACCIDENTS";
    IEnumSinisterKind["MEDICAL_EXPENSES"] = "MEDICAL_EXPENSES";
    IEnumSinisterKind["HEALTH"] = "HEALTH";
    IEnumSinisterKind["LIFE"] = "LIFE";
    IEnumSinisterKind["CIVIL_LIABILITY_AND_PROFESSIONAL_RISKS"] = "CIVIL_LIABILITY_AND_PROFESSIONAL_RISKS";
    IEnumSinisterKind["MARITIME_AND_TRANSPORT"] = "MARITIME_AND_TRANSPORT";
    IEnumSinisterKind["FIRE"] = "FIRE";
    IEnumSinisterKind["AGRICULTURALAND_ANIMALS"] = "AGRICULTURALAND_ANIMALS";
    IEnumSinisterKind["AUTOMOBILES"] = "AUTOMOBILES";
    IEnumSinisterKind["CREDIT"] = "CREDIT";
    IEnumSinisterKind["HOME_CREDIT"] = "HOME_CREDIT";
    IEnumSinisterKind["FINANCIAL_GUARANTEE"] = "FINANCIAL_GUARANTEE";
    IEnumSinisterKind["DIVERSE"] = "DIVERSE";
    IEnumSinisterKind["EARTHQUAKE_AND_CATASTROPHIC_RISKS"] = "EARTHQUAKE_AND_CATASTROPHIC_RISKS";
})(exports.IEnumSinisterKind || (exports.IEnumSinisterKind = {}));
exports.IEnumSinisterReason = void 0;
(function (IEnumSinisterReason) {
    IEnumSinisterReason["ACCIDENT"] = "ACCIDENT";
    IEnumSinisterReason["DISEASE"] = "DISEASE";
    IEnumSinisterReason["BIRTH"] = "BIRTH";
})(exports.IEnumSinisterReason || (exports.IEnumSinisterReason = {}));
exports.IEnumSinisterType = void 0;
(function (IEnumSinisterType) {
    IEnumSinisterType["INITIAL"] = "INITIAL";
    IEnumSinisterType["COMPLEMENT"] = "COMPLEMENT";
})(exports.IEnumSinisterType || (exports.IEnumSinisterType = {}));
exports.IEnumSinisterPaymentType = void 0;
(function (IEnumSinisterPaymentType) {
    IEnumSinisterPaymentType["CHECK"] = "CHECK";
    IEnumSinisterPaymentType["TRANSFER"] = "TRANSFER";
})(exports.IEnumSinisterPaymentType || (exports.IEnumSinisterPaymentType = {}));
exports.IEnumSinisterStatus = void 0;
(function (IEnumSinisterStatus) {
    IEnumSinisterStatus["PENDING"] = "PENDING";
    IEnumSinisterStatus["IN_PROCESS"] = "IN_PROCESS";
    IEnumSinisterStatus["COMPLETED"] = "COMPLETED";
    IEnumSinisterStatus["CANCELED"] = "CANCELED";
    IEnumSinisterStatus["REJECTED"] = "REJECTED";
    IEnumSinisterStatus["ON_WAITING"] = "ON_WAITING";
    IEnumSinisterStatus["REPROCESS"] = "REPROCESS";
    IEnumSinisterStatus["DISCONFORMITY"] = "DISCONFORMITY";
})(exports.IEnumSinisterStatus || (exports.IEnumSinisterStatus = {}));
exports.IEnumTypeSinisterGeneral = void 0;
(function (IEnumTypeSinisterGeneral) {
    IEnumTypeSinisterGeneral["ACCIDENTS_AND_DISEASES"] = "ACCIDENTS_AND_DISEASES";
    IEnumTypeSinisterGeneral["CAR_DAMAGES"] = "CAR_DAMAGES";
    IEnumTypeSinisterGeneral["NON_CARS_DAMAGE"] = "NON_CARS_DAMAGE";
    IEnumTypeSinisterGeneral["LIFE"] = "LIFE";
})(exports.IEnumTypeSinisterGeneral || (exports.IEnumTypeSinisterGeneral = {}));
exports.IEnumSinisterCarType = void 0;
(function (IEnumSinisterCarType) {
    IEnumSinisterCarType["COLLISION"] = "COLLISION";
    IEnumSinisterCarType["FIRE"] = "FIRE";
    IEnumSinisterCarType["OVERTURN"] = "OVERTURN";
    IEnumSinisterCarType["TOTAL_THEFT"] = "TOTAL_THEFT";
    IEnumSinisterCarType["PARTIAL_THIEF"] = "PARTIAL_THIEF";
    IEnumSinisterCarType["GLASS"] = "GLASS";
    IEnumSinisterCarType["FLOODS"] = "FLOODS";
    IEnumSinisterCarType["CRANE_SERVICE"] = "CRANE_SERVICE";
    IEnumSinisterCarType["TOTAL_LOSS"] = "TOTAL_LOSS";
    IEnumSinisterCarType["VANDALISM"] = "VANDALISM";
    IEnumSinisterCarType["SCOPE_AND_PROOJECTION"] = "SCOPE_AND_PROOJECTION";
    IEnumSinisterCarType["DAMAGES"] = "DAMAGES";
    IEnumSinisterCarType["NATUAL_PHENOMENA"] = "NATUAL_PHENOMENA";
    IEnumSinisterCarType["AFFECTED_BY_COLISION"] = "AFFECTED_BY_COLISION";
    IEnumSinisterCarType["TIRE_DAMAGE"] = "TIRE_DAMAGE";
    IEnumSinisterCarType["ROADSIDE_ASSISTANCE"] = "ROADSIDE_ASSISTANCE";
    IEnumSinisterCarType["RUN_OVER"] = "RUN_OVER";
    IEnumSinisterCarType["ADMINISTRATIVE_TRANSACTIONS"] = "ADMINISTRATIVE_TRANSACTIONS";
    IEnumSinisterCarType["PARTIAL_LOSS"] = "PARTIAL_LOSS";
})(exports.IEnumSinisterCarType || (exports.IEnumSinisterCarType = {}));
exports.IEnumSinisterCarSubType = void 0;
(function (IEnumSinisterCarSubType) {
    IEnumSinisterCarSubType["CONCLUSION_DE_AJUSTE_O_PETICIONES_EN_GENERAL"] = "CONCLUSION_DE_AJUSTE_O_PETICIONES_EN_GENERAL";
    IEnumSinisterCarSubType["LEGAL"] = "LEGAL";
    IEnumSinisterCarSubType["VALUATION"] = "VALUATION";
    IEnumSinisterCarSubType["RERAIR"] = "RERAIR";
    IEnumSinisterCarSubType["MATERIAL_DAMAGE"] = "MATERIAL_DAMAGE";
    IEnumSinisterCarSubType["THEFT"] = "THEFT";
    IEnumSinisterCarSubType["THEFT_LOCATED"] = "THEFT_LOCATED";
    IEnumSinisterCarSubType["REIMBURSEMENT_OF_MEDICAL_EXPENSES"] = "REIMBURSEMENT_OF_MEDICAL_EXPENSES";
    IEnumSinisterCarSubType["REIMBURSEMENT_OF_FUNERAL_EXPENSES"] = "REIMBURSEMENT_OF_FUNERAL_EXPENSES";
    IEnumSinisterCarSubType["CRANE_REINBURSEMENT"] = "CRANE_REINBURSEMENT";
    IEnumSinisterCarSubType["CRANE_REIMBURSEMENT_FOR_ASSISTANCE"] = "CRANE_REIMBURSEMENT_FOR_ASSISTANCE";
    IEnumSinisterCarSubType["GLASS_REINBURSEMENT"] = "GLASS_REINBURSEMENT";
    IEnumSinisterCarSubType["REFUND_OR_DEDUCTIBLE_OR_DAMAGES_TO_THIRD_PARTIES"] = "REFUND_OR_DEDUCTIBLE_OR_DAMAGES_TO_THIRD_PARTIES";
    IEnumSinisterCarSubType["PAYMENT_OF_DAMAGES"] = "PAYMENT_OF_DAMAGES";
    IEnumSinisterCarSubType["PT_LETTER_AND_AMOUTS"] = "PT_LETTER_AND_AMOUTS";
    IEnumSinisterCarSubType["REJECTION_LETTER"] = "REJECTION_LETTER";
    IEnumSinisterCarSubType["DEDUCTIBLE_BILL"] = "DEDUCTIBLE_BILL";
})(exports.IEnumSinisterCarSubType || (exports.IEnumSinisterCarSubType = {}));
exports.IEnumSinisterCarSubSubType = void 0;
(function (IEnumSinisterCarSubSubType) {
    IEnumSinisterCarSubSubType["DOCUMENT_REVIEW"] = "DOCUMENT_REVIEW";
    IEnumSinisterCarSubSubType["COMPENSATION"] = "COMPENSATION";
})(exports.IEnumSinisterCarSubSubType || (exports.IEnumSinisterCarSubSubType = {}));
exports.IEnumSinisterLifeReason = void 0;
(function (IEnumSinisterLifeReason) {
    IEnumSinisterLifeReason["NATURAL"] = "NATURAL";
    IEnumSinisterLifeReason["ACCIDENTAL"] = "ACCIDENTAL";
    IEnumSinisterLifeReason["ORGANIC_LOSSES"] = "ORGANIC_LOSSES";
    IEnumSinisterLifeReason["DISABILITY"] = "DISABILITY";
    IEnumSinisterLifeReason["FUNERALS"] = "FUNERALS";
})(exports.IEnumSinisterLifeReason || (exports.IEnumSinisterLifeReason = {}));
exports.IEnumSAType = void 0;
(function (IEnumSAType) {
    IEnumSAType["PERMANENT"] = "PERMANENT";
    IEnumSAType["RULE_IN_MONTHS"] = "RULE_IN_MONTHS";
    IEnumSAType["ANOTHER"] = "ANOTHER";
})(exports.IEnumSAType || (exports.IEnumSAType = {}));
exports.IEnumEntorsementType = void 0;
(function (IEnumEntorsementType) {
    IEnumEntorsementType["A"] = "A";
    IEnumEntorsementType["B"] = "B";
    IEnumEntorsementType["D"] = "D";
})(exports.IEnumEntorsementType || (exports.IEnumEntorsementType = {}));
exports.IEnumPoliceReceiptStatus = void 0;
(function (IEnumPoliceReceiptStatus) {
    IEnumPoliceReceiptStatus["PAID"] = "PAID";
    IEnumPoliceReceiptStatus["CANCELED"] = "CANCELED";
    IEnumPoliceReceiptStatus["EXTENDED"] = "EXTENDED";
    IEnumPoliceReceiptStatus["PAY_PENDING"] = "PAY_PENDING";
    IEnumPoliceReceiptStatus["LIQUIDATE"] = "LIQUIDATE";
    IEnumPoliceReceiptStatus["RECONCILED"] = "RECONCILED";
    IEnumPoliceReceiptStatus["CLOSED"] = "CLOSED";
    IEnumPoliceReceiptStatus["DISABLED"] = "DISABLED";
    IEnumPoliceReceiptStatus["PRECANCELED"] = "PRECANCELED";
    IEnumPoliceReceiptStatus["PRTIAL_PAYMENT"] = "PRTIAL_PAYMENT";
    IEnumPoliceReceiptStatus["PRE_CANCELED"] = "PRE_CANCELED";
})(exports.IEnumPoliceReceiptStatus || (exports.IEnumPoliceReceiptStatus = {}));
exports.IEnumPoliceReceiptType = void 0;
(function (IEnumPoliceReceiptType) {
    IEnumPoliceReceiptType["POLICY"] = "POLICY";
    IEnumPoliceReceiptType["A_ENDORSEMENT"] = "A_ENDORSEMENT";
    IEnumPoliceReceiptType["D_ENDORSEMENT_CREDIT_NOTE"] = "D_ENDORSEMENT_CREDIT_NOTE";
    IEnumPoliceReceiptType["BOND"] = "BOND";
    IEnumPoliceReceiptType["CERTIFICATE"] = "CERTIFICATE";
})(exports.IEnumPoliceReceiptType || (exports.IEnumPoliceReceiptType = {}));
exports.IEnumBank = void 0;
(function (IEnumBank) {
    IEnumBank["ABC_CAPITAL"] = "ABC_CAPITAL";
    IEnumBank["ACCIVAL"] = "ACCIVAL";
    IEnumBank["ACTINVER"] = "ACTINVER";
    IEnumBank["AFIRME"] = "AFIRME";
    IEnumBank["AKALA"] = "AKALA";
    IEnumBank["AMERICAN_EXPRESS"] = "AMERICAN_EXPRESS";
    IEnumBank["AUTOFIN"] = "AUTOFIN";
    IEnumBank["AXA"] = "AXA";
    IEnumBank["AZTECA"] = "AZTECA";
    IEnumBank["BAJIO"] = "BAJIO";
    IEnumBank["BAMSA"] = "BAMSA";
    IEnumBank["BANCO_FAMSA"] = "BANCO_FAMSA";
    IEnumBank["BANCO_INBURSA"] = "BANCO_INBURSA";
    IEnumBank["BANCOMEXT"] = "BANCOMEXT";
    IEnumBank["BANCOPPEL"] = "BANCOPPEL";
    IEnumBank["BANJERCITO"] = "BANJERCITO";
    IEnumBank["BANK_OF_AMERICA"] = "BANK_OF_AMERICA";
    IEnumBank["BANOBRAS"] = "BANOBRAS";
    IEnumBank["BANORTE"] = "BANORTE";
    IEnumBank["BANREGIO"] = "BANREGIO";
    IEnumBank["BANSEFI"] = "BANSEFI";
    IEnumBank["BANSI"] = "BANSI";
    IEnumBank["BARCLAYS"] = "BARCLAYS";
    IEnumBank["B_AND_B"] = "B_AND_B";
    IEnumBank["BBASE"] = "BBASE";
    IEnumBank["BBVA"] = "BBVA";
    IEnumBank["BITAL"] = "BITAL";
    IEnumBank["BMONEX"] = "BMONEX";
    IEnumBank["BMULTIVA"] = "BMULTIVA";
    IEnumBank["BULLTICK_CB"] = "BULLTICK_CB";
    IEnumBank["BX"] = "BX";
    IEnumBank["BXM"] = "BXM";
    IEnumBank["CA"] = "CA";
    IEnumBank["CB_ACTINVER"] = "CB_ACTINVER";
    IEnumBank["CBDEUTSCHE"] = "CBDEUTSCHE";
    IEnumBank["CB_INTERCAM"] = "CB_INTERCAM";
    IEnumBank["CB_JPMORGAN"] = "CB_JPMORGAN";
    IEnumBank["CIBANCO"] = "CIBANCO";
    IEnumBank["CI_BOLSA"] = "CI_BOLSA";
    IEnumBank["CITI_BANAMEX"] = "CITI_BANAMEX";
    IEnumBank["CLS"] = "CLS";
    IEnumBank["COMPARTAMOS"] = "COMPARTAMOS";
    IEnumBank["CONSUBANCO"] = "CONSUBANCO";
    IEnumBank["CREDIT_SUISSE"] = "CREDIT_SUISSE";
    IEnumBank["DEUTSCHE"] = "DEUTSCHE";
    IEnumBank["DS"] = "DS";
    IEnumBank["CASH"] = "CASH";
    IEnumBank["ESTRUCTURADORES"] = "ESTRUCTURADORES";
    IEnumBank["EVERCORE"] = "EVERCORE";
    IEnumBank["FAMSA"] = "FAMSA";
    IEnumBank["FIESTA_REWARDS_PLATINUM"] = "FIESTA_REWARDS_PLATINUM";
    IEnumBank["FINAMEX"] = "FINAMEX";
    IEnumBank["FINCOMUN"] = "FINCOMUN";
    IEnumBank["GBM"] = "GBM";
    IEnumBank["HDI_SEGUROS"] = "HDI_SEGUROS";
    IEnumBank["HIPOTECARIAFEDERAL"] = "HIPOTECARIAFEDERAL";
    IEnumBank["HSBC"] = "HSBC";
    IEnumBank["INBURSA"] = "INBURSA";
    IEnumBank["INDEVAL"] = "INDEVAL";
    IEnumBank["ING"] = "ING";
    IEnumBank["INTERACCIONES"] = "INTERACCIONES";
    IEnumBank["INTERBANCO"] = "INTERBANCO";
    IEnumBank["INTERNATIONAL_BANK_OF_COMERCE"] = "INTERNATIONAL_BANK_OF_COMERCE";
    IEnumBank["INVERLAT"] = "INVERLAT";
    IEnumBank["INVEX"] = "INVEX";
    IEnumBank["IXE"] = "IXE";
    IEnumBank["JP_MORGAN"] = "JP_MORGAN";
    IEnumBank["KUSPIT"] = "KUSPIT";
    IEnumBank["LAREDO_NATIONAL_BANK"] = "LAREDO_NATIONAL_BANK";
    IEnumBank["LB"] = "LB";
    IEnumBank["LIBERTAD"] = "LIBERTAD";
    IEnumBank["LIVERPOOL"] = "LIVERPOOL";
    IEnumBank["MAPFRE"] = "MAPFRE";
    IEnumBank["MASARI"] = "MASARI";
    IEnumBank["MASTER_CARD"] = "MASTER_CARD";
    IEnumBank["MERRILL_LYNCH"] = "MERRILL_LYNCH";
    IEnumBank["MSI"] = "MSI";
    IEnumBank["MIFEL"] = "MIFEL";
    IEnumBank["MONEXCB"] = "MONEXCB";
    IEnumBank["NAFIN"] = "NAFIN";
    IEnumBank["OACTIN"] = "OACTIN";
    IEnumBank["OPCIONES_EMPRESARIALES_DEL_NOROESTE"] = "OPCIONES_EMPRESARIALES_DEL_NOROESTE";
    IEnumBank["ORDER"] = "ORDER";
    IEnumBank["OTROS"] = "OTROS";
    IEnumBank["PROFUTURO"] = "PROFUTURO";
    IEnumBank["REFORMA"] = "REFORMA";
    IEnumBank["SANTANDER"] = "SANTANDER";
    IEnumBank["SCOTIABANK"] = "SCOTIABANK";
    IEnumBank["SEGMTY"] = "SEGMTY";
    IEnumBank["SKANDIA"] = "SKANDIA";
    IEnumBank["SOFIEXPRESS"] = "SOFIEXPRESS";
    IEnumBank["STERLING"] = "STERLING";
    IEnumBank["STP"] = "STP";
    IEnumBank["SU_CASITA"] = "SU_CASITA";
    IEnumBank["TC"] = "TC";
    IEnumBank["TELECOMM"] = "TELECOMM";
    IEnumBank["THE_ROYAL_BANK"] = "THE_ROYAL_BANK";
    IEnumBank["TIBER"] = "TIBER";
    IEnumBank["TOKYO"] = "TOKYO";
    IEnumBank["TRANSFER"] = "TRANSFER";
    IEnumBank["UBS_BANK"] = "UBS_BANK";
    IEnumBank["UNAGRA"] = "UNAGRA";
    IEnumBank["UNICA"] = "UNICA";
    IEnumBank["VALMEX"] = "VALMEX";
    IEnumBank["VALUE"] = "VALUE";
    IEnumBank["VECTOR"] = "VECTOR";
    IEnumBank["VE_POR_MAS"] = "VE_POR_MAS";
    IEnumBank["VISA"] = "VISA";
    IEnumBank["VOLKSWAGEN"] = "VOLKSWAGEN";
    IEnumBank["WAL_MART"] = "WAL_MART";
    IEnumBank["ZURICH"] = "ZURICH";
})(exports.IEnumBank || (exports.IEnumBank = {}));
exports.IEnumReferrerClosed = void 0;
(function (IEnumReferrerClosed) {
    IEnumReferrerClosed["NON_PAYMENT"] = "NON_PAYMENT";
    IEnumReferrerClosed["IN_ACCOUNT"] = "IN_ACCOUNT";
    IEnumReferrerClosed["CLOSED"] = "CLOSED";
})(exports.IEnumReferrerClosed || (exports.IEnumReferrerClosed = {}));
exports.IEnumPoliceReceiptPaymentMethod = void 0;
(function (IEnumPoliceReceiptPaymentMethod) {
    IEnumPoliceReceiptPaymentMethod["UNKNOWN"] = "UNKNOWN";
    IEnumPoliceReceiptPaymentMethod["CHECK"] = "CHECK";
    IEnumPoliceReceiptPaymentMethod["CASH"] = "CASH";
    IEnumPoliceReceiptPaymentMethod["TRANSFER"] = "TRANSFER";
    IEnumPoliceReceiptPaymentMethod["CREDIT_NOTE"] = "CREDIT_NOTE";
    IEnumPoliceReceiptPaymentMethod["DEPOSIT_PRIMA"] = "DEPOSIT_PRIMA";
    IEnumPoliceReceiptPaymentMethod["BANK_DEPOSIT"] = "BANK_DEPOSIT";
    IEnumPoliceReceiptPaymentMethod["CREDIT_CARD"] = "CREDIT_CARD";
    IEnumPoliceReceiptPaymentMethod["DEBIT_CARD"] = "DEBIT_CARD";
    IEnumPoliceReceiptPaymentMethod["ACCOUNT_STATUS"] = "ACCOUNT_STATUS";
    IEnumPoliceReceiptPaymentMethod["COMPANY"] = "COMPANY";
})(exports.IEnumPoliceReceiptPaymentMethod || (exports.IEnumPoliceReceiptPaymentMethod = {}));
exports.IEnumAutoType = void 0;
(function (IEnumAutoType) {
    IEnumAutoType["CAR"] = "CAR";
    IEnumAutoType["MOTORCYCLE"] = "MOTORCYCLE";
    IEnumAutoType["TRACT"] = "TRACT";
    IEnumAutoType["BUS"] = "BUS";
    IEnumAutoType["PICK_UP"] = "PICK_UP";
    IEnumAutoType["TRUCK_1_5_TON"] = "TRUCK_1_5_TON";
    IEnumAutoType["DRIVER_APP"] = "DRIVER_APP";
    IEnumAutoType["TRAILER"] = "TRAILER";
    IEnumAutoType["TRUCK_PLUS_1_5_TON"] = "TRUCK_PLUS_1_5_TON";
})(exports.IEnumAutoType || (exports.IEnumAutoType = {}));
exports.IEnumChargeType = void 0;
(function (IEnumChargeType) {
    IEnumChargeType["A"] = "A";
    IEnumChargeType["B"] = "B";
    IEnumChargeType["C"] = "C";
    IEnumChargeType["UNKNOWN"] = "UNKNOWN";
})(exports.IEnumChargeType || (exports.IEnumChargeType = {}));
exports.IEnumProcedent = void 0;
(function (IEnumProcedent) {
    IEnumProcedent["RESICENCE"] = "RESICENCE";
    IEnumProcedent["TOURIST"] = "TOURIST";
    IEnumProcedent["LEGALIZED"] = "LEGALIZED";
    IEnumProcedent["FRONTIER"] = "FRONTIER";
    IEnumProcedent["UNSPECIFIED"] = "UNSPECIFIED";
})(exports.IEnumProcedent || (exports.IEnumProcedent = {}));
exports.IEnumFormDamageType = void 0;
(function (IEnumFormDamageType) {
    IEnumFormDamageType["N_A"] = "N_A";
    IEnumFormDamageType["ANOTHER"] = "ANOTHER";
    IEnumFormDamageType["FAMILIAR"] = "FAMILIAR";
    IEnumFormDamageType["HOUSE_ROOM"] = "HOUSE_ROOM";
    IEnumFormDamageType["CONDOMINIUM"] = "CONDOMINIUM";
    IEnumFormDamageType["BUILDING"] = "BUILDING";
    IEnumFormDamageType["MULTIPLE_BUSSINESS"] = "MULTIPLE_BUSSINESS";
    IEnumFormDamageType["ONLY_FIRE"] = "ONLY_FIRE";
    IEnumFormDamageType["PLANE"] = "PLANE";
    IEnumFormDamageType["SHIP"] = "SHIP";
    IEnumFormDamageType["STATEMENT"] = "STATEMENT";
    IEnumFormDamageType["DRONE"] = "DRONE";
    IEnumFormDamageType["PLEASURE_BOATS"] = "PLEASURE_BOATS";
    IEnumFormDamageType["SPECIFY"] = "SPECIFY";
    IEnumFormDamageType["HELICOPTER"] = "HELICOPTER";
    IEnumFormDamageType["PROGNOSIS"] = "PROGNOSIS";
    IEnumFormDamageType["ANIMALS"] = "ANIMALS";
    IEnumFormDamageType["CROPS"] = "CROPS";
    IEnumFormDamageType["GENERAL_CREDIT"] = "GENERAL_CREDIT";
    IEnumFormDamageType["HOME_CREDIT"] = "HOME_CREDIT";
    IEnumFormDamageType["DOCUMENTOS_QUE_SEAN_OBJETO_DE_OFERTA_PUBLICA_O_DE_INTERMEDIACION_EN_MERCADOS_DE_VALORES"] = "DOCUMENTOS_QUE_SEAN_OBJETO_DE_OFERTA_PUBLICA_O_DE_INTERMEDIACION_EN_MERCADOS_DE_VALORES";
    IEnumFormDamageType["SECURITIES_EMISSIONS"] = "SECURITIES_EMISSIONS";
    IEnumFormDamageType["CREDIT_TITLES"] = "CREDIT_TITLES";
    IEnumFormDamageType["ADMINISTRATION"] = "ADMINISTRATION";
    IEnumFormDamageType["ARCHITECTS"] = "ARCHITECTS";
    IEnumFormDamageType["CONTRACTOR"] = "CONTRACTOR";
    IEnumFormDamageType["CRIME"] = "CRIME";
    IEnumFormDamageType["ATOS"] = "ATOS";
    IEnumFormDamageType["OFFICERS"] = "OFFICERS";
    IEnumFormDamageType["MISCELLANEOUS_E_AND_O"] = "MISCELLANEOUS_E_AND_O";
    IEnumFormDamageType["BUSSINESS"] = "BUSSINESS";
    IEnumFormDamageType["EVENT"] = "EVENT";
    IEnumFormDamageType["FAMILIAR_AND_CONDOMINIUM"] = "FAMILIAR_AND_CONDOMINIUM";
    IEnumFormDamageType["HOLE_IN_ONE"] = "HOLE_IN_ONE";
    IEnumFormDamageType["ENGINEERING"] = "ENGINEERING";
    IEnumFormDamageType["FINANCIAL_INSTITUTIONS"] = "FINANCIAL_INSTITUTIONS";
    IEnumFormDamageType["FINANCIAL_LINES"] = "FINANCIAL_LINES";
    IEnumFormDamageType["DOCTORS"] = "DOCTORS";
    IEnumFormDamageType["CATASTRHOPHIC_RISKS"] = "CATASTRHOPHIC_RISKS";
    IEnumFormDamageType["BOILERS_AND_PRESSURE_VESSELS"] = "BOILERS_AND_PRESSURE_VESSELS";
    IEnumFormDamageType["MONEY_AND_VALUES"] = "MONEY_AND_VALUES";
    IEnumFormDamageType["EQ_CONTRACTORS_AND_HEAVY_MACHINE"] = "EQ_CONTRACTORS_AND_HEAVY_MACHINE";
    IEnumFormDamageType["EQ_ELLECTRONIC"] = "EQ_ELLECTRONIC";
    IEnumFormDamageType["MACHINERY_ASSEMBLY"] = "MACHINERY_ASSEMBLY";
    IEnumFormDamageType["CIVIL_WORKS_UNDER_CONSTRUCCION"] = "CIVIL_WORKS_UNDER_CONSTRUCCION";
    IEnumFormDamageType["FINISHED_CIVIL_WORKS"] = "FINISHED_CIVIL_WORKS";
    IEnumFormDamageType["GLASS_BREAK"] = "GLASS_BREAK";
    IEnumFormDamageType["MACHINERY_BREAK"] = "MACHINERY_BREAK";
    IEnumFormDamageType["CRIME_OR_BBB"] = "CRIME_OR_BBB";
    IEnumFormDamageType["D_AND_O"] = "D_AND_O";
    IEnumFormDamageType["FIPI"] = "FIPI";
    IEnumFormDamageType["CYBER"] = "CYBER";
    IEnumFormDamageType["VCAPS"] = "VCAPS";
    IEnumFormDamageType["MEDICAL_RCP"] = "MEDICAL_RCP";
    IEnumFormDamageType["POLITICAL_RISK"] = "POLITICAL_RISK";
    IEnumFormDamageType["RC_PUBLIC_SERVERS"] = "RC_PUBLIC_SERVERS";
    IEnumFormDamageType["RCP"] = "RCP";
})(exports.IEnumFormDamageType || (exports.IEnumFormDamageType = {}));
exports.IEnumConstructionType = void 0;
(function (IEnumConstructionType) {
    IEnumConstructionType["SOLID"] = "SOLID";
    IEnumConstructionType["WOOD"] = "WOOD";
    IEnumConstructionType["LEAF"] = "LEAF";
    IEnumConstructionType["ANOTHER"] = "ANOTHER";
})(exports.IEnumConstructionType || (exports.IEnumConstructionType = {}));
exports.IEnumContractorGroupingType = void 0;
(function (IEnumContractorGroupingType) {
    IEnumContractorGroupingType["ENTERPRISE"] = "ENTERPRISE";
    IEnumContractorGroupingType["COLLEGE"] = "COLLEGE";
    IEnumContractorGroupingType["INDIVIDUAL"] = "INDIVIDUAL";
})(exports.IEnumContractorGroupingType || (exports.IEnumContractorGroupingType = {}));
exports.IEnumReferrerPaymentType = void 0;
(function (IEnumReferrerPaymentType) {
    IEnumReferrerPaymentType["CLABE"] = "CLABE";
    IEnumReferrerPaymentType["ACCOUNT_NUMBER"] = "ACCOUNT_NUMBER";
    IEnumReferrerPaymentType["CARD_NUMBER"] = "CARD_NUMBER";
    IEnumReferrerPaymentType["CASH"] = "CASH";
})(exports.IEnumReferrerPaymentType || (exports.IEnumReferrerPaymentType = {}));
exports.IEnumReferrerFrequency = void 0;
(function (IEnumReferrerFrequency) {
    IEnumReferrerFrequency["WEEKLY"] = "WEEKLY";
    IEnumReferrerFrequency["FORTNIGHTLY"] = "FORTNIGHTLY";
    IEnumReferrerFrequency["MONTHLY"] = "MONTHLY";
})(exports.IEnumReferrerFrequency || (exports.IEnumReferrerFrequency = {}));
exports.IEnumReferrerAccountState = void 0;
(function (IEnumReferrerAccountState) {
    IEnumReferrerAccountState["PRE_APPROVED"] = "PRE_APPROVED";
    IEnumReferrerAccountState["CLOSED"] = "CLOSED";
    IEnumReferrerAccountState["REJECTED"] = "REJECTED";
})(exports.IEnumReferrerAccountState || (exports.IEnumReferrerAccountState = {}));
exports.IEnumPoliceQuoteStatus = void 0;
(function (IEnumPoliceQuoteStatus) {
    IEnumPoliceQuoteStatus["DISABLED"] = "DISABLED";
    IEnumPoliceQuoteStatus["IN_PROCESS"] = "IN_PROCESS";
    IEnumPoliceQuoteStatus["EMITTED"] = "EMITTED";
    IEnumPoliceQuoteStatus["BATTED"] = "BATTED";
})(exports.IEnumPoliceQuoteStatus || (exports.IEnumPoliceQuoteStatus = {}));
exports.IEnumInsurerReminderType = void 0;
(function (IEnumInsurerReminderType) {
    IEnumInsurerReminderType["AUTOMATIC"] = "AUTOMATIC";
    IEnumInsurerReminderType["FREE"] = "FREE";
    IEnumInsurerReminderType["FROM_RECORD"] = "FROM_RECORD";
})(exports.IEnumInsurerReminderType || (exports.IEnumInsurerReminderType = {}));
exports.IEnumInsurerReminderInstanceType = void 0;
(function (IEnumInsurerReminderInstanceType) {
    IEnumInsurerReminderInstanceType["POLICY_NOT_RENEWED_VALIDITY_DATE"] = "POLICY_NOT_RENEWED_VALIDITY_DATE";
    IEnumInsurerReminderInstanceType["PAY_PENDING_RECEIPTS_START_VALIDITY_DATE"] = "PAY_PENDING_RECEIPTS_START_VALIDITY_DATE";
    IEnumInsurerReminderInstanceType["PAY_PENDING_RECEIPTS_END_VALIDITY_DATE"] = "PAY_PENDING_RECEIPTS_END_VALIDITY_DATE";
    IEnumInsurerReminderInstanceType["PAY_PENDING_RECEIPTS_PROMISE_DATE"] = "PAY_PENDING_RECEIPTS_PROMISE_DATE";
    IEnumInsurerReminderInstanceType["SINISTER_COMPROMISE_DATE"] = "SINISTER_COMPROMISE_DATE";
})(exports.IEnumInsurerReminderInstanceType || (exports.IEnumInsurerReminderInstanceType = {}));
exports.IEnumInsurerCommentModel = void 0;
(function (IEnumInsurerCommentModel) {
    IEnumInsurerCommentModel["POLICE"] = "POLICE";
    IEnumInsurerCommentModel["CONTRACTOR"] = "CONTRACTOR";
    IEnumInsurerCommentModel["RECEIPTS"] = "RECEIPTS";
    IEnumInsurerCommentModel["SINISTER"] = "SINISTER";
    IEnumInsurerCommentModel["RENOVATIONS"] = "RENOVATIONS";
    IEnumInsurerCommentModel["COMMISSIONS_RECEIPTS"] = "COMMISSIONS_RECEIPTS";
    IEnumInsurerCommentModel["GROUPS"] = "GROUPS";
    IEnumInsurerCommentModel["PACKAGE"] = "PACKAGE";
    IEnumInsurerCommentModel["ENDORSEMENT"] = "ENDORSEMENT";
    IEnumInsurerCommentModel["AGENTPROVIDER"] = "AGENTPROVIDER";
    IEnumInsurerCommentModel["ACCOUNT_STATUS"] = "ACCOUNT_STATUS";
    IEnumInsurerCommentModel["BAIL"] = "BAIL";
    IEnumInsurerCommentModel["BONDS"] = "BONDS";
    IEnumInsurerCommentModel["COMMENTS"] = "COMMENTS";
    IEnumInsurerCommentModel["LOG"] = "LOG";
    IEnumInsurerCommentModel["LETTERS"] = "LETTERS";
    IEnumInsurerCommentModel["COLLECTIVITIES"] = "COLLECTIVITIES";
    IEnumInsurerCommentModel["GRAPHS"] = "GRAPHS";
    IEnumInsurerCommentModel["NOTES"] = "NOTES";
    IEnumInsurerCommentModel["BAIL_CLAIM"] = "BAIL_CLAIM";
    IEnumInsurerCommentModel["TASKS"] = "TASKS";
    IEnumInsurerCommentModel["FINISHED_TASKS"] = "FINISHED_TASKS";
    IEnumInsurerCommentModel["EVENTS"] = "EVENTS";
    IEnumInsurerCommentModel["CERTIFICATE"] = "CERTIFICATE";
    IEnumInsurerCommentModel["REPORTS"] = "REPORTS";
    IEnumInsurerCommentModel["APP_MNOTIFICATIONS"] = "APP_MNOTIFICATIONS";
    IEnumInsurerCommentModel["FLOTILLAS"] = "FLOTILLAS";
    IEnumInsurerCommentModel["MAILING_TEMPLATE"] = "MAILING_TEMPLATE";
    IEnumInsurerCommentModel["REMINDERS"] = "REMINDERS";
})(exports.IEnumInsurerCommentModel || (exports.IEnumInsurerCommentModel = {}));
exports.IEnumEmaiModel = void 0;
(function (IEnumEmaiModel) {
    IEnumEmaiModel["OT_REQUEST"] = "OT_REQUEST";
    IEnumEmaiModel["OT_REGISTER"] = "OT_REGISTER";
    IEnumEmaiModel["ACCIDENT_REQUEST"] = "ACCIDENT_REQUEST";
    IEnumEmaiModel["ACCIDENT_END"] = "ACCIDENT_END";
    IEnumEmaiModel["REMINDER"] = "REMINDER";
    IEnumEmaiModel["PAYMENT"] = "PAYMENT";
    IEnumEmaiModel["CREATED_NOTE"] = "CREATED_NOTE";
    IEnumEmaiModel["APPLIED_NOTE"] = "APPLIED_NOTE";
    IEnumEmaiModel["POLICE_RENEW"] = "POLICE_RENEW";
    IEnumEmaiModel["REMINDER_POLICE_RENEW"] = "REMINDER_POLICE_RENEW";
    IEnumEmaiModel["ACCIDENT_IN_PROCESS"] = "ACCIDENT_IN_PROCESS";
    IEnumEmaiModel["ACCIDENT_CANCELED"] = "ACCIDENT_CANCELED";
    IEnumEmaiModel["ACCIDENT_REJECTED"] = "ACCIDENT_REJECTED";
    IEnumEmaiModel["ACCIDENT_ON_QUEUE"] = "ACCIDENT_ON_QUEUE";
})(exports.IEnumEmaiModel || (exports.IEnumEmaiModel = {}));
exports.IEnumEmailFrequency = void 0;
(function (IEnumEmailFrequency) {
    IEnumEmailFrequency["MONTHLY"] = "MONTHLY";
    IEnumEmailFrequency["FORTNIGTHLY"] = "FORTNIGTHLY";
    IEnumEmailFrequency["WEEKLY"] = "WEEKLY";
    IEnumEmailFrequency["OVERDUE"] = "OVERDUE";
    IEnumEmailFrequency["LATER_WEEK"] = "LATER_WEEK";
    IEnumEmailFrequency["LATER_FORTNIGTH"] = "LATER_FORTNIGTH";
    IEnumEmailFrequency["LATER_MONTH"] = "LATER_MONTH";
    IEnumEmailFrequency["OVERDUE_POLICE_TO_RENEW"] = "OVERDUE_POLICE_TO_RENEW";
    IEnumEmailFrequency["TWENTY_DATYS_AFTER"] = "TWENTY_DATYS_AFTER";
    IEnumEmailFrequency["TWENTY_DATYS_BEFORE"] = "TWENTY_DATYS_BEFORE";
})(exports.IEnumEmailFrequency || (exports.IEnumEmailFrequency = {}));
exports.IEnumEmailRamo = void 0;
(function (IEnumEmailRamo) {
    IEnumEmailRamo["LIFE"] = "LIFE";
    IEnumEmailRamo["ACIDENTS_AND_DISEASES"] = "ACIDENTS_AND_DISEASES";
    IEnumEmailRamo["DAMAGES"] = "DAMAGES";
    IEnumEmailRamo["ALL"] = "ALL";
})(exports.IEnumEmailRamo || (exports.IEnumEmailRamo = {}));
exports.IEnumEmailType = void 0;
(function (IEnumEmailType) {
    IEnumEmailType["POLICE"] = "POLICE";
    IEnumEmailType["IND_POLICE_OF_COLECTIVITY"] = "IND_POLICE_OF_COLECTIVITY";
    IEnumEmailType["GROUP_POLICE"] = "GROUP_POLICE";
    IEnumEmailType["ALL"] = "ALL";
})(exports.IEnumEmailType || (exports.IEnumEmailType = {}));
exports.IEnumEmailChargeType = void 0;
(function (IEnumEmailChargeType) {
    IEnumEmailChargeType["DOMICILED"] = "DOMICILED";
    IEnumEmailChargeType["UNDOMICILED"] = "UNDOMICILED";
    IEnumEmailChargeType["ALL"] = "ALL";
    IEnumEmailChargeType["UNDOMICILIED_AND_AGENT"] = "UNDOMICILIED_AND_AGENT";
})(exports.IEnumEmailChargeType || (exports.IEnumEmailChargeType = {}));
exports.IEnumEmailDateType = void 0;
(function (IEnumEmailDateType) {
    IEnumEmailDateType["VALIDITY_BEGIN"] = "VALIDITY_BEGIN";
    IEnumEmailDateType["OVERDUE"] = "OVERDUE";
})(exports.IEnumEmailDateType || (exports.IEnumEmailDateType = {}));
exports.IEnumPoliceReceiptFolioPaymentMethod = void 0;
(function (IEnumPoliceReceiptFolioPaymentMethod) {
    IEnumPoliceReceiptFolioPaymentMethod["CHECK"] = "CHECK";
    IEnumPoliceReceiptFolioPaymentMethod["CASH"] = "CASH";
    IEnumPoliceReceiptFolioPaymentMethod["TRANSFER"] = "TRANSFER";
    IEnumPoliceReceiptFolioPaymentMethod["BANK_DEPOSIT"] = "BANK_DEPOSIT";
    IEnumPoliceReceiptFolioPaymentMethod["CREDIT_CARD"] = "CREDIT_CARD";
    IEnumPoliceReceiptFolioPaymentMethod["DEBIT_CARD"] = "DEBIT_CARD";
    IEnumPoliceReceiptFolioPaymentMethod["ACCOUNT_STATUS"] = "ACCOUNT_STATUS";
    IEnumPoliceReceiptFolioPaymentMethod["COMPANY"] = "COMPANY";
    IEnumPoliceReceiptFolioPaymentMethod["UNKNOWN"] = "UNKNOWN";
})(exports.IEnumPoliceReceiptFolioPaymentMethod || (exports.IEnumPoliceReceiptFolioPaymentMethod = {}));
exports.IEnumInsurerLogEvent = void 0;
(function (IEnumInsurerLogEvent) {
    IEnumInsurerLogEvent["CREATE"] = "CREATE";
    IEnumInsurerLogEvent["DELETE"] = "DELETE";
    IEnumInsurerLogEvent["UPDATE"] = "UPDATE";
    IEnumInsurerLogEvent["CANCEL"] = "CANCEL";
})(exports.IEnumInsurerLogEvent || (exports.IEnumInsurerLogEvent = {}));
exports.IEnumInsurerTicketPriority = void 0;
(function (IEnumInsurerTicketPriority) {
    IEnumInsurerTicketPriority["LOW"] = "LOW";
    IEnumInsurerTicketPriority["MEDIUM"] = "MEDIUM";
    IEnumInsurerTicketPriority["HIGH"] = "HIGH";
})(exports.IEnumInsurerTicketPriority || (exports.IEnumInsurerTicketPriority = {}));
exports.IEnumInsurerTicketConcept = void 0;
(function (IEnumInsurerTicketConcept) {
    IEnumInsurerTicketConcept["ENDORSEMENT"] = "ENDORSEMENT";
    IEnumInsurerTicketConcept["EMISSION"] = "EMISSION";
    IEnumInsurerTicketConcept["QUOTE"] = "QUOTE";
    IEnumInsurerTicketConcept["CORRECTION"] = "CORRECTION";
    IEnumInsurerTicketConcept["CANCELATION"] = "CANCELATION";
    IEnumInsurerTicketConcept["RENEW"] = "RENEW";
    IEnumInsurerTicketConcept["ANOTHER"] = "ANOTHER";
    IEnumInsurerTicketConcept["REFUND"] = "REFUND";
    IEnumInsurerTicketConcept["SURGERY_SCHEDULING"] = "SURGERY_SCHEDULING";
    IEnumInsurerTicketConcept["B_ENDORSEMENT"] = "B_ENDORSEMENT";
    IEnumInsurerTicketConcept["D_ENDORSEMENT"] = "D_ENDORSEMENT";
    IEnumInsurerTicketConcept["RECOGNITION_ANTIQUITY"] = "RECOGNITION_ANTIQUITY";
    IEnumInsurerTicketConcept["ANTIQUITY_LETTER"] = "ANTIQUITY_LETTER";
})(exports.IEnumInsurerTicketConcept || (exports.IEnumInsurerTicketConcept = {}));
exports.IEnumNotificationType = void 0;
(function (IEnumNotificationType) {
    IEnumNotificationType["NOTIFICATION"] = "NOTIFICATION";
    IEnumNotificationType["PROMOTION"] = "PROMOTION";
})(exports.IEnumNotificationType || (exports.IEnumNotificationType = {}));
exports.IEnumMonth = void 0;
(function (IEnumMonth) {
    IEnumMonth["JANUARY"] = "JANUARY";
    IEnumMonth["FEBRUARY"] = "FEBRUARY";
    IEnumMonth["MARCH"] = "MARCH";
    IEnumMonth["APRIL"] = "APRIL";
    IEnumMonth["MAY"] = "MAY";
    IEnumMonth["JUNE"] = "JUNE";
    IEnumMonth["JULY"] = "JULY";
    IEnumMonth["AUGUST"] = "AUGUST";
    IEnumMonth["SEPTEMBER"] = "SEPTEMBER";
    IEnumMonth["OCTOBER"] = "OCTOBER";
    IEnumMonth["NOVEMBER"] = "NOVEMBER";
    IEnumMonth["DECEMBER"] = "DECEMBER";
})(exports.IEnumMonth || (exports.IEnumMonth = {}));
exports.IEnumResponsableArea = void 0;
(function (IEnumResponsableArea) {
    IEnumResponsableArea["EMITION"] = "EMITION";
    IEnumResponsableArea["EJECUTIVE"] = "EJECUTIVE";
    IEnumResponsableArea["COMERTIAL"] = "COMERTIAL";
    IEnumResponsableArea["COLLECTION"] = "COLLECTION";
    IEnumResponsableArea["SINISTER"] = "SINISTER";
})(exports.IEnumResponsableArea || (exports.IEnumResponsableArea = {}));
exports.Iexchange_Status = void 0;
(function (Iexchange_Status) {
    Iexchange_Status["INPROCESS"] = "INPROCESS";
    Iexchange_Status["EXCHANGED"] = "EXCHANGED";
})(exports.Iexchange_Status || (exports.Iexchange_Status = {}));
exports.IMovementType = void 0;
(function (IMovementType) {
    IMovementType["CODEREGISTRATION"] = "CODEREGISTRATION";
    IMovementType["EXCHANGE"] = "EXCHANGE";
})(exports.IMovementType || (exports.IMovementType = {}));
exports.IPrizeCodeStatus = void 0;
(function (IPrizeCodeStatus) {
    IPrizeCodeStatus["AVAILABLE"] = "AVAILABLE";
    IPrizeCodeStatus["EXCHANGED"] = "EXCHANGED";
})(exports.IPrizeCodeStatus || (exports.IPrizeCodeStatus = {}));
exports.IHttpStatusCode = void 0;
(function (IHttpStatusCode) {
    IHttpStatusCode["CONTINUE"] = "CONTINUE";
    IHttpStatusCode["SWITCHING_PROTOCOLS"] = "SWITCHING_PROTOCOLS";
    IHttpStatusCode["PROCESSING"] = "PROCESSING";
    IHttpStatusCode["EARLY_HINTS"] = "EARLY_HINTS";
    IHttpStatusCode["OK"] = "OK";
    IHttpStatusCode["CREATED"] = "CREATED";
    IHttpStatusCode["ACCEPTED"] = "ACCEPTED";
    IHttpStatusCode["NON_AUTHORITATIVE_INFORMATION"] = "NON_AUTHORITATIVE_INFORMATION";
    IHttpStatusCode["NO_CONTENT"] = "NO_CONTENT";
    IHttpStatusCode["RESET_CONTENT"] = "RESET_CONTENT";
    IHttpStatusCode["PARTIAL_CONTENT"] = "PARTIAL_CONTENT";
    IHttpStatusCode["MULTI_STATUS"] = "MULTI_STATUS";
    IHttpStatusCode["ALREADY_REPORTED"] = "ALREADY_REPORTED";
    IHttpStatusCode["IM_USED"] = "IM_USED";
    IHttpStatusCode["AMBIGUOUS"] = "AMBIGUOUS";
    IHttpStatusCode["MOVED"] = "MOVED";
    IHttpStatusCode["REDIRECT"] = "REDIRECT";
    IHttpStatusCode["REDIRECT_METHOD"] = "REDIRECT_METHOD";
    IHttpStatusCode["NOT_MODIFIED"] = "NOT_MODIFIED";
    IHttpStatusCode["USE_PROXY"] = "USE_PROXY";
    IHttpStatusCode["UNUSED"] = "UNUSED";
    IHttpStatusCode["TEMPORARY_REDIRECT"] = "TEMPORARY_REDIRECT";
    IHttpStatusCode["PERMANENT_REDIRECT"] = "PERMANENT_REDIRECT";
    IHttpStatusCode["BAD_REQUEST"] = "BAD_REQUEST";
    IHttpStatusCode["UNAUTHORIZED"] = "UNAUTHORIZED";
    IHttpStatusCode["PAYMENT_REQUIRED"] = "PAYMENT_REQUIRED";
    IHttpStatusCode["FORBIDDEN"] = "FORBIDDEN";
    IHttpStatusCode["NOT_FOUND"] = "NOT_FOUND";
    IHttpStatusCode["METHOD_NOT_ALLOWED"] = "METHOD_NOT_ALLOWED";
    IHttpStatusCode["NOT_ACCEPTABLE"] = "NOT_ACCEPTABLE";
    IHttpStatusCode["PROXY_AUTHENTICATION_REQUIRED"] = "PROXY_AUTHENTICATION_REQUIRED";
    IHttpStatusCode["REQUEST_TIMEOUT"] = "REQUEST_TIMEOUT";
    IHttpStatusCode["CONFLICT"] = "CONFLICT";
    IHttpStatusCode["GONE"] = "GONE";
    IHttpStatusCode["LENGTH_REQUIRED"] = "LENGTH_REQUIRED";
    IHttpStatusCode["PRECONDITION_FAILED"] = "PRECONDITION_FAILED";
    IHttpStatusCode["REQUEST_ENTITY_TOO_LARGE"] = "REQUEST_ENTITY_TOO_LARGE";
    IHttpStatusCode["REQUEST_URI_TOO_LONG"] = "REQUEST_URI_TOO_LONG";
    IHttpStatusCode["UNSUPPORTED_MEDIA_TYPE"] = "UNSUPPORTED_MEDIA_TYPE";
    IHttpStatusCode["REQUESTED_RANGE_NOT_SATISFIABLE"] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    IHttpStatusCode["EXPECTATION_FAILED"] = "EXPECTATION_FAILED";
    IHttpStatusCode["MISDIRECTED_REQUEST"] = "MISDIRECTED_REQUEST";
    IHttpStatusCode["UNPROCESSABLE_ENTITY"] = "UNPROCESSABLE_ENTITY";
    IHttpStatusCode["LOCKED"] = "LOCKED";
    IHttpStatusCode["FAILED_DEPENDENCY"] = "FAILED_DEPENDENCY";
    IHttpStatusCode["UPGRADE_REQUIRED"] = "UPGRADE_REQUIRED";
    IHttpStatusCode["PRECONDITION_REQUIRED"] = "PRECONDITION_REQUIRED";
    IHttpStatusCode["TOO_MANY_REQUESTS"] = "TOO_MANY_REQUESTS";
    IHttpStatusCode["REQUEST_HEADER_FIELDS_TOO_LARGE"] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
    IHttpStatusCode["UNAVAILABLE_FOR_LEGAL_REASONS"] = "UNAVAILABLE_FOR_LEGAL_REASONS";
    IHttpStatusCode["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
    IHttpStatusCode["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED";
    IHttpStatusCode["BAD_GATEWAY"] = "BAD_GATEWAY";
    IHttpStatusCode["SERVICE_UNAVAILABLE"] = "SERVICE_UNAVAILABLE";
    IHttpStatusCode["GATEWAY_TIMEOUT"] = "GATEWAY_TIMEOUT";
    IHttpStatusCode["HTTP_VERSION_NOT_SUPPORTED"] = "HTTP_VERSION_NOT_SUPPORTED";
    IHttpStatusCode["VARIANT_ALSO_NEGOTIATES"] = "VARIANT_ALSO_NEGOTIATES";
    IHttpStatusCode["INSUFFICIENT_STORAGE"] = "INSUFFICIENT_STORAGE";
    IHttpStatusCode["LOOP_DETECTED"] = "LOOP_DETECTED";
    IHttpStatusCode["NOT_EXTENDED"] = "NOT_EXTENDED";
    IHttpStatusCode["NETWORK_AUTHENTICATION_REQUIRED"] = "NETWORK_AUTHENTICATION_REQUIRED";
})(exports.IHttpStatusCode || (exports.IHttpStatusCode = {}));
exports.IEnumGender = void 0;
(function (IEnumGender) {
    IEnumGender["MASCULINE"] = "MASCULINE";
    IEnumGender["FEMININE"] = "FEMININE";
})(exports.IEnumGender || (exports.IEnumGender = {}));
exports.IEnumInsurerSubBranch = void 0;
(function (IEnumInsurerSubBranch) {
    IEnumInsurerSubBranch["AXA"] = "AXA";
    IEnumInsurerSubBranch["CHUBB"] = "CHUBB";
    IEnumInsurerSubBranch["SURA"] = "SURA";
    IEnumInsurerSubBranch["ZURICH"] = "ZURICH";
    IEnumInsurerSubBranch["MAPFRE"] = "MAPFRE";
    IEnumInsurerSubBranch["QUALITAS"] = "QUALITAS";
    IEnumInsurerSubBranch["BANORTE"] = "BANORTE";
    IEnumInsurerSubBranch["ANA_SEGUROS"] = "ANA_SEGUROS";
    IEnumInsurerSubBranch["AFIRME"] = "AFIRME";
    IEnumInsurerSubBranch["HDI"] = "HDI";
})(exports.IEnumInsurerSubBranch || (exports.IEnumInsurerSubBranch = {}));
exports.IEnumIdProduct = void 0;
(function (IEnumIdProduct) {
    IEnumIdProduct["AMPLIA"] = "AMPLIA";
    IEnumIdProduct["AMPLIA_PLUS"] = "AMPLIA_PLUS";
    IEnumIdProduct["LIMITADA"] = "LIMITADA";
})(exports.IEnumIdProduct || (exports.IEnumIdProduct = {}));
exports.IEnumMethodPayment = void 0;
(function (IEnumMethodPayment) {
    IEnumMethodPayment["CASH"] = "CASH";
    IEnumMethodPayment["CREDIT_CARD"] = "CREDIT_CARD";
})(exports.IEnumMethodPayment || (exports.IEnumMethodPayment = {}));
exports.IEnumTypePerson = void 0;
(function (IEnumTypePerson) {
    IEnumTypePerson["FISICA"] = "FISICA";
    IEnumTypePerson["MORAL"] = "MORAL";
})(exports.IEnumTypePerson || (exports.IEnumTypePerson = {}));
exports.IEnumInterval = void 0;
(function (IEnumInterval) {
    IEnumInterval["DAY"] = "DAY";
    IEnumInterval["WEEK"] = "WEEK";
    IEnumInterval["MONTH"] = "MONTH";
    IEnumInterval["YEAR"] = "YEAR";
})(exports.IEnumInterval || (exports.IEnumInterval = {}));
exports.IEnumInsurer = void 0;
(function (IEnumInsurer) {
    IEnumInsurer["CHUBB"] = "CHUBB";
    IEnumInsurer["ANA"] = "ANA";
    IEnumInsurer["QUALITAS"] = "QUALITAS";
    IEnumInsurer["GNP"] = "GNP";
    IEnumInsurer["HDI"] = "HDI";
    IEnumInsurer["POTOSI"] = "POTOSI";
    IEnumInsurer["MAPFRE"] = "MAPFRE";
    IEnumInsurer["ZURICH"] = "ZURICH";
})(exports.IEnumInsurer || (exports.IEnumInsurer = {}));
exports.IPdfType = void 0;
(function (IPdfType) {
    IPdfType["MEDICRECIPE"] = "MEDICRECIPE";
    IPdfType["PRESCRIPTION_THERAPY"] = "PRESCRIPTION_THERAPY";
    IPdfType["CONSULT"] = "CONSULT";
    IPdfType["BACKGROUND"] = "BACKGROUND";
})(exports.IPdfType || (exports.IPdfType = {}));
exports.IStatus = void 0;
(function (IStatus) {
    IStatus["ACTIVE"] = "ACTIVE";
    IStatus["PENDING"] = "PENDING";
    IStatus["INACTIVE"] = "INACTIVE";
})(exports.IStatus || (exports.IStatus = {}));
exports.IProblemStatus = void 0;
(function (IProblemStatus) {
    IProblemStatus["OPEN"] = "OPEN";
    IProblemStatus["PENDING"] = "PENDING";
    IProblemStatus["CLOSED"] = "CLOSED";
})(exports.IProblemStatus || (exports.IProblemStatus = {}));
exports.IApplyPolicy = void 0;
(function (IApplyPolicy) {
    IApplyPolicy["BEFORE_RESOLVER"] = "BEFORE_RESOLVER";
    IApplyPolicy["AFTER_RESOLVER"] = "AFTER_RESOLVER";
})(exports.IApplyPolicy || (exports.IApplyPolicy = {}));
//# sourceMappingURL=schemas.js.map

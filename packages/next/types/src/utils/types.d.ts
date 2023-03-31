export type Maybe<T> = T | null;
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: any;
    JSON: any;
    Upload: any;
};
export declare enum Enum_Webformshandler_Type {
    Action = "action",
    Email = "email",
    Remote = "remote"
}
export type WebformsFormEntityResponse = {
    __typename?: "WebformsFormEntityResponse";
    data?: Maybe<WebformsFormEntity>;
};
export type WebformsFormEntity = {
    __typename?: "WebformsFormEntity";
    attributes?: Maybe<WebformsForm>;
    id?: Maybe<Scalars["ID"]>;
};
export type WebformsForm = {
    __typename?: "WebformsForm";
    fields?: Maybe<Scalars["JSON"]>;
    handlers?: Maybe<WebformsHandlerRelationResponseCollection>;
    submissions?: Maybe<WebformsHandlerRelationResponseCollection>;
    title?: Maybe<Scalars["String"]>;
};
export type WebformsHandlerRelationResponseCollection = {
    __typename?: "WebformsHandlerRelationResponseCollection";
    data: Array<WebformsHandlerEntity>;
};
export type WebformsHandlerEntity = {
    __typename?: "WebformsHandlerEntity";
    attributes?: Maybe<WebformsHandler>;
    id?: Maybe<Scalars["ID"]>;
};
export type WebformsHandler = {
    __typename?: "WebformsHandler";
    data?: Maybe<Scalars["JSON"]>;
    enabled?: Maybe<Scalars["Boolean"]>;
    form?: Maybe<WebformsFormEntityResponse>;
    identifier?: Maybe<Scalars["String"]>;
    type?: Maybe<Enum_Webformshandler_Type>;
};
export type WebformsFormEntityResponseCollection = {
    __typename?: "WebformsFormEntityResponseCollection";
    data: WebformsFormEntity;
};
export type WebformFormsResponse = {
    data: {
        webformsForm?: Maybe<WebformsFormEntityResponseCollection>;
    };
};

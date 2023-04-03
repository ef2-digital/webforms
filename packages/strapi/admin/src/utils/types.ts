import { FieldDirectionEnum, FieldTypeEnum } from "./enums";
import * as React from "react";
import { StringAttribute, JSONAttribute } from "@strapi/strapi";
import { HandlerTypeEnum } from "../../../server/utils/enums";

export interface FormType {
  id?: number;
  title: string;
  fields: string;
  createdAt?: string;
  updatedAt?: string;
}

export type FormCollectionType = Array<FormType>;

export interface SubmissionType {
  id: number;
  form?: FormType;
  submission: string;
  createdAt: string;
  updatedAt: string;
}

export type SubmissionCollectionType = Array<SubmissionType>;

export interface FieldType {
  label: string;
  name: string;
  type?: FieldTypeEnum;
  options: FieldOptionProps[] | [];
  config: FieldConfigProps;
}

export type FieldOptionProps = {
  label: string;
  value: string;
};
export type FieldConfigProps = {
  required: boolean;
};

export const FieldTypeDefaultProps = {
  label: "",
  name: "",
  options: [],
  config: { required: false },
};

export type FieldCollectionType = Array<FieldType>;

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type FieldMoveProps = {
  event: React.MouseEvent<HTMLDivElement, MouseEvent>;
  position: number;
  name: string;
  direction: FieldDirectionEnum;
};

export type HandlerType = {
  id: number;
  identifier: StringAttribute;
  type: HandlerTypeEnum;
  data: EmailHandlerDataType;
  enabled: boolean;
  service: string;
};

export type EmailHandlerDataType = {
  sendTo: string;
  sendFrom: string;
  subject: string;
  message: string;
};

export type HandlerCollectionType = Array<HandlerType>;

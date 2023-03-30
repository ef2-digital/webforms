"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldActionsEnum = exports.FieldDirectionEnum = exports.FieldTypeEnum = void 0;
var FieldTypeEnum;
(function (FieldTypeEnum) {
    FieldTypeEnum["Text"] = "text";
    FieldTypeEnum["Checkbox"] = "checkbox";
    FieldTypeEnum["Radio"] = "radio";
    FieldTypeEnum["Textarea"] = "textarea";
    FieldTypeEnum["Email"] = "email";
    FieldTypeEnum["Number"] = "number";
    FieldTypeEnum["Select"] = "select";
})(FieldTypeEnum = exports.FieldTypeEnum || (exports.FieldTypeEnum = {}));
var FieldDirectionEnum;
(function (FieldDirectionEnum) {
    FieldDirectionEnum["Up"] = "up";
    FieldDirectionEnum["Down"] = "down";
})(FieldDirectionEnum = exports.FieldDirectionEnum || (exports.FieldDirectionEnum = {}));
var FieldActionsEnum;
(function (FieldActionsEnum) {
    FieldActionsEnum["Add"] = "add";
    FieldActionsEnum["Edit"] = "edit";
})(FieldActionsEnum = exports.FieldActionsEnum || (exports.FieldActionsEnum = {}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailDataMessageEnum = exports.HandlerTypeEnum = void 0;
var HandlerTypeEnum;
(function (HandlerTypeEnum) {
    HandlerTypeEnum["Email"] = "email";
    HandlerTypeEnum["Action"] = "action";
    HandlerTypeEnum["Remote"] = "remote";
})(HandlerTypeEnum = exports.HandlerTypeEnum || (exports.HandlerTypeEnum = {}));
var EmailDataMessageEnum;
(function (EmailDataMessageEnum) {
    EmailDataMessageEnum["Default"] = "default";
    EmailDataMessageEnum["Custom"] = "custom";
})(EmailDataMessageEnum = exports.EmailDataMessageEnum || (exports.EmailDataMessageEnum = {}));

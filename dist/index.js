"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt");
var generate_1 = require("./utils/generate");
var check_password_strength_1 = require("check-password-strength");
var chalk_1 = require("chalk");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var promptSchema, response, password, str;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                promptSchema = {
                    properties: {
                        passwordLength: {
                            description: 'Enter in a password length. Must be between 8 and 10. Recommend at least 10 for strongest password.',
                            type: 'number',
                            default: 12,
                            conform: function (val) {
                                // check if val is in fact an integer
                                if (Math.floor(val) !== val || Math.ceil(val) !== val)
                                    return false;
                                if (val > 7 && val < 17)
                                    return true;
                                return false;
                            },
                            message: 'Length must be an integer between 8 and 16.',
                        },
                        allowSpecialChars: {
                            description: 'Do you want to allow special characters (i.e. "?", "@")?',
                            type: 'boolean',
                            default: true,
                            message: 'You must enter either "true" (or "t") or "false" (or "f").',
                        },
                    },
                };
                return [4 /*yield*/, prompt.get(promptSchema)];
            case 1:
                response = _a.sent();
                prompt.start();
                password = generate_1.generate(response);
                str = check_password_strength_1.passwordStrength(password).value;
                /* eslint-disable-next-line no-console */
                console.info("Your password is " + chalk_1.green(password));
                return [2 /*return*/];
        }
    });
}); })();

window["tableau"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist-extensions/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file re-exports everything which is part of the shared embedding api public interface
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(24));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is your main. This is where you re-export everything you want to be publicly available.
 *
 * The build enforces that the file has the same name as the global variable that is exported.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(25));
__export(__webpack_require__(26));
__export(__webpack_require__(27));
__export(__webpack_require__(28));
__export(__webpack_require__(29));
__export(__webpack_require__(30));
// These are the exports from the messaging stuff
__export(__webpack_require__(33));
__export(__webpack_require__(9));
// Export a hardcoded version of the internal contract. This should match what's in package.json.
// Normally, we'd use some sort of webpack replacement to inject this into code, but that doesn't
// work with the module-dev-scripts and this isn't too much work.
// If you forget to keep this in sync with package.json, a test will fail so we should be ok.
exports.INTERNAL_CONTRACT_VERSION = {
    major: 1,
    minor: 0,
    fix: 0
};
// Export the version number of messaging for consumers to use.
// Be very careful making any updates to this contract which break version compatibility.
exports.MESSAGING_VERSION = {
    major: 1,
    minor: 0,
    fix: 0
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Custom error class that extends the default JavaScript Error object.
 * This allows us to provide a field with a specific error code
 * so that developers can more easily programmatically respond
 * to error scenarios.
 */
var TableauError = /** @class */ (function (_super) {
    __extends(TableauError, _super);
    function TableauError(_errorCode, message) {
        var _this = _super.call(this, _errorCode + ": " + message) || this;
        _this._errorCode = _errorCode;
        /*tslint:disable-next-line */
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // Error inheritance does not work propertly when compiling to ES5, this is a workaround to force
        // the proto chain to be built correctly.  See the github link above for details.
        Object.setPrototypeOf(_this, TableauError.prototype);
        return _this;
    }
    Object.defineProperty(TableauError.prototype, "errorCode", {
        get: function () {
            return this._errorCode;
        },
        enumerable: true,
        configurable: true
    });
    return TableauError;
}(Error));
exports.TableauError = TableauError;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Export everything which had been previously in the api-shared module
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Dashboard_1 = __webpack_require__(36);
exports.Dashboard = Dashboard_1.Dashboard;
var EventListenerManager_1 = __webpack_require__(10);
exports.EventListenerManager = EventListenerManager_1.EventListenerManager;
var TableauError_1 = __webpack_require__(2);
exports.TableauError = TableauError_1.TableauError;
var VersionNumber_1 = __webpack_require__(37);
exports.VersionNumber = VersionNumber_1.VersionNumber;
var InternalToExternalEnumMappings_1 = __webpack_require__(7);
exports.InternalToExternalEnumMappings = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings;
var TableauEvent_1 = __webpack_require__(17);
exports.TableauEvent = TableauEvent_1.TableauEvent;
var SingleEventManagerImpl_1 = __webpack_require__(11);
exports.SingleEventManagerImpl = SingleEventManagerImpl_1.SingleEventManagerImpl;
var DashboardImpl_1 = __webpack_require__(38);
exports.DashboardImpl = DashboardImpl_1.DashboardImpl;
var ServiceImplBase_1 = __webpack_require__(8);
exports.ServiceImplBase = ServiceImplBase_1.ServiceImplBase;
var ErrorHelpers_1 = __webpack_require__(5);
exports.ErrorHelpers = ErrorHelpers_1.ErrorHelpers;
__export(__webpack_require__(53));
__export(__webpack_require__(55));
__export(__webpack_require__(4));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(2);
var ServiceRegistryImpl = /** @class */ (function () {
    function ServiceRegistryImpl() {
        this._services = {};
    }
    ServiceRegistryImpl.prototype.registerService = function (service) {
        this._services[service.serviceName] = service;
    };
    ServiceRegistryImpl.prototype.getService = function (serviceName) {
        if (!this._services.hasOwnProperty(serviceName)) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, "Service not registered: " + serviceName);
        }
        return this._services[serviceName];
    };
    return ServiceRegistryImpl;
}());
/**
 * static class used for getting access to the single instance
 * of the ApiServiceRegistry
 */
var ApiServiceRegistry = /** @class */ (function () {
    // Private to avoid anyone constructing this
    function ApiServiceRegistry() {
    }
    Object.defineProperty(ApiServiceRegistry, "instance", {
        /**
         * Gets the singleton instance of the ServiceRegistry
         */
        get: function () {
            if (!window.__tableauApiServiceRegistry) {
                ApiServiceRegistry.setInstance(new ServiceRegistryImpl());
            }
            if (!window.__tableauApiServiceRegistry) {
                throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, 'Service registry failed');
            }
            return window.__tableauApiServiceRegistry;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper method to override the registry instance. Can be used by unit tests
     *
     * @param {ServiceRegistry} serviceRegistry The new registry
     */
    ApiServiceRegistry.setInstance = function (serviceRegistry) {
        window.__tableauApiServiceRegistry = serviceRegistry;
    };
    return ApiServiceRegistry;
}());
exports.ApiServiceRegistry = ApiServiceRegistry;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var Param_1 = __webpack_require__(12);
var TableauError_1 = __webpack_require__(2);
/**
 * This class is used to construct common errors throughout the external
 * projects (api-shared, extensions-api, etc.).  It has some duplication with
 * the ErrorHelpers class in api-core, but is separate due to the need to throw
 * an external TableauError vs. an InternalTableauError.
 */
var ErrorHelpers = /** @class */ (function () {
    function ErrorHelpers() {
    }
    /**
     * Throws with code InternalError.
     *
     * @param apiName name of api that was called.
     */
    ErrorHelpers.apiNotImplemented = function (apiName) {
        return new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, apiName + " API not yet implemented.");
    };
    /**
     * Throws an internal error if argument is null or undefined.
     *
     * @param argumentValue value to verify
     * @param argumentName name of argument to verify
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyInternalValue = function (argumentValue, argumentName) {
        if (argumentValue === null || argumentValue === undefined) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, argumentValue + " is invalid value for: " + argumentName);
        }
    };
    /**
     * Throws an InvalidParameter error if argument is null or undefined.
     *
     * @param argumentValue value to verify
     * @param argumentName name of argument to verify
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyParameter = function (argumentValue, argumentName) {
        if (argumentValue === null || argumentValue === undefined) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, argumentValue + " is invalid value for paramter: " + argumentName);
        }
    };
    /**
     * Throws an InvalidParameter error if argument is empty string, null or undefined.
     *
     * @param argumentValue value to verify
     * @param argumentName name of argument to verify
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyStringParameter = function (argumentValue, argumentName) {
        if (argumentValue === null || argumentValue === undefined || argumentValue === '') {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, argumentValue + " is invalid value for paramter: " + argumentName);
        }
    };
    /**
     * Verifies passed value is a valid value for that enum.
     * Throws an InvalidParameter error if the enum value is not valid.
     *
     * String enums are {string : string} dictionaries which are not reverse mappable
     * This is an ugly workaround
     *
     * @param enumValue value to verify
     * @param enumType enum to verify against
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyEnumValue = function (enumValue, enumType) {
        var isValid = false;
        Object.keys(enumType).forEach(function (enumKey) {
            if (enumType[enumKey] === enumValue.toString()) {
                isValid = true;
            }
        });
        if (!isValid) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, enumValue + " is invalid value for enum: " + enumType);
        }
    };
    /**
     * Verifies the params min and max for applying range filter.
     * Throws with error code InvalidParameter if range is invalid.
     *
     * @param min range min
     * @param max range max
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyRangeParamType = function (min, max) {
        if (!min && !max) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, at least one of min or max is required.');
        }
        if (min && !Param_1.Param.isTypeNumber(min) && !Param_1.Param.isTypeDate(min)) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, only Date and number are allowed for parameter min.');
        }
        if (max && !Param_1.Param.isTypeNumber(max) && !Param_1.Param.isTypeDate(max)) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, only Date and number are allowed for parameter max.');
        }
        if (min && max && typeof (min) !== typeof (max)) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, parameters min and max should be of the same type.');
        }
    };
    return ErrorHelpers;
}());
exports.ErrorHelpers = ErrorHelpers;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file re-exports everything which is part of the extensions api public interface
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// Export everything from the shared file
__export(__webpack_require__(0));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var EnumConverter_1 = __webpack_require__(16);
/* tslint:disable:typedef - Disable this to make declaring these classes a bit easier */
/**
 * Maps enums used by the internal-api-contract to the enums used
 * in the external-api-contract, which developers code against.
 */
var InternalToExternalEnumMappings = /** @class */ (function () {
    function InternalToExternalEnumMappings() {
    }
    InternalToExternalEnumMappings.extensionContext = new EnumConverter_1.EnumConverter((_a = {},
        _a[api_internal_contract_js_1.ExtensionContext.Desktop] = SharedApiExternalContract_1.ExtensionContext.Desktop,
        _a[api_internal_contract_js_1.ExtensionContext.Server] = SharedApiExternalContract_1.ExtensionContext.Server,
        _a));
    InternalToExternalEnumMappings.extensionMode = new EnumConverter_1.EnumConverter((_b = {},
        _b[api_internal_contract_js_1.ExtensionMode.Authoring] = SharedApiExternalContract_1.ExtensionMode.Authoring,
        _b[api_internal_contract_js_1.ExtensionMode.Viewing] = SharedApiExternalContract_1.ExtensionMode.Viewing,
        _b));
    InternalToExternalEnumMappings.columnType = new EnumConverter_1.EnumConverter((_c = {},
        _c[api_internal_contract_js_1.ColumnType.Continuous] = SharedApiExternalContract_1.ColumnType.Continuous,
        _c[api_internal_contract_js_1.ColumnType.Discrete] = SharedApiExternalContract_1.ColumnType.Discrete,
        _c));
    InternalToExternalEnumMappings.fieldAggregationType = new EnumConverter_1.EnumConverter((_d = {},
        _d[api_internal_contract_js_1.FieldAggregationType.Attr] = SharedApiExternalContract_1.FieldAggregationType.Attr,
        _d[api_internal_contract_js_1.FieldAggregationType.Avg] = SharedApiExternalContract_1.FieldAggregationType.Avg,
        _d[api_internal_contract_js_1.FieldAggregationType.Count] = SharedApiExternalContract_1.FieldAggregationType.Count,
        _d[api_internal_contract_js_1.FieldAggregationType.Countd] = SharedApiExternalContract_1.FieldAggregationType.Countd,
        _d[api_internal_contract_js_1.FieldAggregationType.Day] = SharedApiExternalContract_1.FieldAggregationType.Day,
        _d[api_internal_contract_js_1.FieldAggregationType.End] = SharedApiExternalContract_1.FieldAggregationType.End,
        _d[api_internal_contract_js_1.FieldAggregationType.Hour] = SharedApiExternalContract_1.FieldAggregationType.Hour,
        _d[api_internal_contract_js_1.FieldAggregationType.InOut] = SharedApiExternalContract_1.FieldAggregationType.InOut,
        _d[api_internal_contract_js_1.FieldAggregationType.Kurtosis] = SharedApiExternalContract_1.FieldAggregationType.Kurtosis,
        _d[api_internal_contract_js_1.FieldAggregationType.Max] = SharedApiExternalContract_1.FieldAggregationType.Max,
        _d[api_internal_contract_js_1.FieldAggregationType.Mdy] = SharedApiExternalContract_1.FieldAggregationType.Mdy,
        _d[api_internal_contract_js_1.FieldAggregationType.Median] = SharedApiExternalContract_1.FieldAggregationType.Median,
        _d[api_internal_contract_js_1.FieldAggregationType.Min] = SharedApiExternalContract_1.FieldAggregationType.Min,
        _d[api_internal_contract_js_1.FieldAggregationType.Minute] = SharedApiExternalContract_1.FieldAggregationType.Minute,
        _d[api_internal_contract_js_1.FieldAggregationType.MonthYear] = SharedApiExternalContract_1.FieldAggregationType.MonthYear,
        _d[api_internal_contract_js_1.FieldAggregationType.None] = SharedApiExternalContract_1.FieldAggregationType.None,
        _d[api_internal_contract_js_1.FieldAggregationType.Qtr] = SharedApiExternalContract_1.FieldAggregationType.Qtr,
        _d[api_internal_contract_js_1.FieldAggregationType.Quart1] = SharedApiExternalContract_1.FieldAggregationType.Quart1,
        _d[api_internal_contract_js_1.FieldAggregationType.Quart3] = SharedApiExternalContract_1.FieldAggregationType.Quart3,
        _d[api_internal_contract_js_1.FieldAggregationType.Second] = SharedApiExternalContract_1.FieldAggregationType.Second,
        _d[api_internal_contract_js_1.FieldAggregationType.Skewness] = SharedApiExternalContract_1.FieldAggregationType.Skewness,
        _d[api_internal_contract_js_1.FieldAggregationType.Stdev] = SharedApiExternalContract_1.FieldAggregationType.Stdev,
        _d[api_internal_contract_js_1.FieldAggregationType.Stdevp] = SharedApiExternalContract_1.FieldAggregationType.Stdevp,
        _d[api_internal_contract_js_1.FieldAggregationType.Sum] = SharedApiExternalContract_1.FieldAggregationType.Sum,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncDay] = SharedApiExternalContract_1.FieldAggregationType.TruncDay,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncHour] = SharedApiExternalContract_1.FieldAggregationType.TruncHour,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncMinute] = SharedApiExternalContract_1.FieldAggregationType.TruncMinute,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncMonth] = SharedApiExternalContract_1.FieldAggregationType.TruncMonth,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncQtr] = SharedApiExternalContract_1.FieldAggregationType.TruncQtr,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncSecond] = SharedApiExternalContract_1.FieldAggregationType.TruncSecond,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncWeek] = SharedApiExternalContract_1.FieldAggregationType.TruncWeek,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncYear] = SharedApiExternalContract_1.FieldAggregationType.TruncYear,
        _d[api_internal_contract_js_1.FieldAggregationType.User] = SharedApiExternalContract_1.FieldAggregationType.User,
        _d[api_internal_contract_js_1.FieldAggregationType.Var] = SharedApiExternalContract_1.FieldAggregationType.Var,
        _d[api_internal_contract_js_1.FieldAggregationType.Varp] = SharedApiExternalContract_1.FieldAggregationType.Varp,
        _d[api_internal_contract_js_1.FieldAggregationType.Week] = SharedApiExternalContract_1.FieldAggregationType.Week,
        _d[api_internal_contract_js_1.FieldAggregationType.Weekday] = SharedApiExternalContract_1.FieldAggregationType.Weekday,
        _d[api_internal_contract_js_1.FieldAggregationType.Year] = SharedApiExternalContract_1.FieldAggregationType.Year,
        _d));
    InternalToExternalEnumMappings.fieldRoleType = new EnumConverter_1.EnumConverter((_e = {},
        _e[api_internal_contract_js_1.FieldRoleType.Dimension] = SharedApiExternalContract_1.FieldRoleType.Dimension,
        _e[api_internal_contract_js_1.FieldRoleType.Measure] = SharedApiExternalContract_1.FieldRoleType.Measure,
        _e[api_internal_contract_js_1.FieldRoleType.Unknown] = SharedApiExternalContract_1.FieldRoleType.Unknown,
        _e));
    InternalToExternalEnumMappings.sheetType = new EnumConverter_1.EnumConverter((_f = {},
        _f[api_internal_contract_js_1.SheetType.Dashboard] = SharedApiExternalContract_1.SheetType.Dashboard,
        _f[api_internal_contract_js_1.SheetType.Story] = SharedApiExternalContract_1.SheetType.Story,
        _f[api_internal_contract_js_1.SheetType.Worksheet] = SharedApiExternalContract_1.SheetType.Worksheet,
        _f));
    InternalToExternalEnumMappings.dashboardObjectType = new EnumConverter_1.EnumConverter((_g = {},
        _g[api_internal_contract_js_1.DashboardObjectType.Extension] = SharedApiExternalContract_1.DashboardObjectType.Extension,
        _g[api_internal_contract_js_1.DashboardObjectType.Blank] = SharedApiExternalContract_1.DashboardObjectType.Blank,
        _g[api_internal_contract_js_1.DashboardObjectType.Image] = SharedApiExternalContract_1.DashboardObjectType.Image,
        _g[api_internal_contract_js_1.DashboardObjectType.Legend] = SharedApiExternalContract_1.DashboardObjectType.Legend,
        _g[api_internal_contract_js_1.DashboardObjectType.PageFilter] = SharedApiExternalContract_1.DashboardObjectType.PageFilter,
        _g[api_internal_contract_js_1.DashboardObjectType.ParameterControl] = SharedApiExternalContract_1.DashboardObjectType.ParameterControl,
        _g[api_internal_contract_js_1.DashboardObjectType.QuickFilter] = SharedApiExternalContract_1.DashboardObjectType.QuickFilter,
        _g[api_internal_contract_js_1.DashboardObjectType.Text] = SharedApiExternalContract_1.DashboardObjectType.Text,
        _g[api_internal_contract_js_1.DashboardObjectType.Title] = SharedApiExternalContract_1.DashboardObjectType.Title,
        _g[api_internal_contract_js_1.DashboardObjectType.WebPage] = SharedApiExternalContract_1.DashboardObjectType.WebPage,
        _g[api_internal_contract_js_1.DashboardObjectType.Worksheet] = SharedApiExternalContract_1.DashboardObjectType.Worksheet,
        _g));
    InternalToExternalEnumMappings.dataType = new EnumConverter_1.EnumConverter((_h = {},
        _h[api_internal_contract_js_1.DataType.Bool] = SharedApiExternalContract_1.DataType.Bool,
        _h[api_internal_contract_js_1.DataType.Date] = SharedApiExternalContract_1.DataType.Date,
        _h[api_internal_contract_js_1.DataType.DateTime] = SharedApiExternalContract_1.DataType.DateTime,
        _h[api_internal_contract_js_1.DataType.Float] = SharedApiExternalContract_1.DataType.Float,
        _h[api_internal_contract_js_1.DataType.Int] = SharedApiExternalContract_1.DataType.Int,
        _h[api_internal_contract_js_1.DataType.String] = SharedApiExternalContract_1.DataType.String,
        _h));
    InternalToExternalEnumMappings.filterUpdateType = new EnumConverter_1.EnumConverter((_j = {},
        _j[api_internal_contract_js_1.FilterUpdateType.Add] = SharedApiExternalContract_1.FilterUpdateType.Add,
        _j[api_internal_contract_js_1.FilterUpdateType.All] = SharedApiExternalContract_1.FilterUpdateType.All,
        _j[api_internal_contract_js_1.FilterUpdateType.Remove] = SharedApiExternalContract_1.FilterUpdateType.Remove,
        _j[api_internal_contract_js_1.FilterUpdateType.Replace] = SharedApiExternalContract_1.FilterUpdateType.Replace,
        _j));
    InternalToExternalEnumMappings.allowableValues = new EnumConverter_1.EnumConverter((_k = {},
        _k[api_internal_contract_js_1.DomainRestrictionType.All] = SharedApiExternalContract_1.ParameterValueType.All,
        _k[api_internal_contract_js_1.DomainRestrictionType.List] = SharedApiExternalContract_1.ParameterValueType.List,
        _k[api_internal_contract_js_1.DomainRestrictionType.Range] = SharedApiExternalContract_1.ParameterValueType.Range,
        _k));
    InternalToExternalEnumMappings.dateStepPeriod = new EnumConverter_1.EnumConverter((_l = {},
        _l[api_internal_contract_js_1.DateStepPeriod.Years] = SharedApiExternalContract_1.PeriodType.Years,
        _l[api_internal_contract_js_1.DateStepPeriod.Quarters] = SharedApiExternalContract_1.PeriodType.Quarters,
        _l[api_internal_contract_js_1.DateStepPeriod.Months] = SharedApiExternalContract_1.PeriodType.Months,
        _l[api_internal_contract_js_1.DateStepPeriod.Weeks] = SharedApiExternalContract_1.PeriodType.Weeks,
        _l[api_internal_contract_js_1.DateStepPeriod.Days] = SharedApiExternalContract_1.PeriodType.Days,
        _l[api_internal_contract_js_1.DateStepPeriod.Hours] = SharedApiExternalContract_1.PeriodType.Hours,
        _l[api_internal_contract_js_1.DateStepPeriod.Minutes] = SharedApiExternalContract_1.PeriodType.Minutes,
        _l[api_internal_contract_js_1.DateStepPeriod.Seconds] = SharedApiExternalContract_1.PeriodType.Seconds,
        _l));
    InternalToExternalEnumMappings.dateRangeType = new EnumConverter_1.EnumConverter((_m = {},
        _m[api_internal_contract_js_1.DateRangeType.Current] = SharedApiExternalContract_1.DateRangeType.Current,
        _m[api_internal_contract_js_1.DateRangeType.Last] = SharedApiExternalContract_1.DateRangeType.Last,
        _m[api_internal_contract_js_1.DateRangeType.LastN] = SharedApiExternalContract_1.DateRangeType.LastN,
        _m[api_internal_contract_js_1.DateRangeType.Next] = SharedApiExternalContract_1.DateRangeType.Next,
        _m[api_internal_contract_js_1.DateRangeType.NextN] = SharedApiExternalContract_1.DateRangeType.NextN,
        _m[api_internal_contract_js_1.DateRangeType.ToDate] = SharedApiExternalContract_1.DateRangeType.ToDate,
        _m));
    InternalToExternalEnumMappings.errorCode = new EnumConverter_1.EnumConverter((_o = {},
        _o[api_internal_contract_js_1.ErrorCodes.INITIALIZATION_ERROR] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.INTERNAL_ERROR] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.MISSING_ENUM_MAPPING] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.MISSING_PARAMETER] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.PERMISSION_DENIED] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.PRES_MODEL_PARSING_ERROR] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.UNKNOWN_VERB_ID] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.VERSION_NOT_CONFIGURED] = SharedApiExternalContract_1.ErrorCodes.APINotInitialized,
        _o));
    InternalToExternalEnumMappings.filterType = new EnumConverter_1.EnumConverter((_p = {},
        _p[api_internal_contract_js_1.FilterType.Categorical] = SharedApiExternalContract_1.FilterType.Categorical,
        _p[api_internal_contract_js_1.FilterType.Range] = SharedApiExternalContract_1.FilterType.Range,
        _p[api_internal_contract_js_1.FilterType.RelativeDate] = SharedApiExternalContract_1.FilterType.RelativeDate,
        _p[api_internal_contract_js_1.FilterType.Hierarchical] = SharedApiExternalContract_1.FilterType.Hierarchical,
        _p));
    return InternalToExternalEnumMappings;
}());
exports.InternalToExternalEnumMappings = InternalToExternalEnumMappings;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
/* tslint:enable:typedef */


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InternalToExternalEnumMappings_1 = __webpack_require__(7);
var TableauError_1 = __webpack_require__(2);
/**
 * Each ServceImpl should extend this base class for the sake of
 * proper error handling.  This base handles the conversion
 * from internal errors to external errors that we throw to developers
 */
var ServiceImplBase = /** @class */ (function () {
    function ServiceImplBase(_dispatcher) {
        this._dispatcher = _dispatcher;
    }
    ServiceImplBase.prototype.execute = function (verb, params) {
        return this._dispatcher.execute(verb, params).catch(function (error) {
            // Any internal error that comes from the dispatcher should be converted
            // to an external error using the enum mapper for error codes.
            var internalError = error;
            var externalErrorCode = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.errorCode.convert(internalError.errorCode);
            throw new TableauError_1.TableauError(externalErrorCode, internalError.message);
        });
    };
    return ServiceImplBase;
}());
exports.ServiceImplBase = ServiceImplBase;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enum defining the 4 different types of messages we have defined
 */
var MessageType;
(function (MessageType) {
    MessageType["Initialize"] = "initialize";
    MessageType["Notification"] = "notification";
    MessageType["Command"] = "command";
    MessageType["CommandResponse"] = "command-response";
})(MessageType = exports.MessageType || (exports.MessageType = {}));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var TableauError_1 = __webpack_require__(2);
/**
 * Class designed to register and unregister handlers from a user. Only those events
 * which are added via AddNewEventType will be supported by this instance
 */
var EventListenerManager = /** @class */ (function () {
    function EventListenerManager() {
        this._eventListenerManagers = {};
    }
    EventListenerManager.prototype.addEventListener = function (eventType, handler) {
        if (!this._eventListenerManagers.hasOwnProperty(eventType)) {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.UnsupportedEventName, "Cannot add event, unsupported event type: " + eventType);
        }
        return this._eventListenerManagers[eventType].addEventListener(handler);
    };
    EventListenerManager.prototype.removeEventListener = function (eventType, handler) {
        if (!this._eventListenerManagers.hasOwnProperty(eventType)) {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.UnsupportedEventName, "Cannot remove event, unsupported event type: " + eventType);
        }
        return this._eventListenerManagers[eventType].removeEventListener(handler);
    };
    EventListenerManager.prototype.addNewEventType = function (eventManager) {
        this._eventListenerManagers[eventManager.eventType] = eventManager;
    };
    return EventListenerManager;
}());
exports.EventListenerManager = EventListenerManager;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class implements the SingleEventManager interface for a single type of Tableau event
 *
 * @template TEventType The Tableau event type this class specializes
 */
var SingleEventManagerImpl = /** @class */ (function () {
    function SingleEventManagerImpl(eventType) {
        this._eventType = eventType;
        this._handlers = [];
    }
    Object.defineProperty(SingleEventManagerImpl.prototype, "eventType", {
        get: function () {
            return this._eventType;
        },
        enumerable: true,
        configurable: true
    });
    SingleEventManagerImpl.prototype.addEventListener = function (handler) {
        var _this = this;
        this._handlers.push(handler);
        return function () { return _this.removeEventListener(handler); };
    };
    SingleEventManagerImpl.prototype.removeEventListener = function (handler) {
        var beforeCount = this._handlers.length;
        this._handlers = this._handlers.filter(function (h) { return h !== handler; });
        return beforeCount > this._handlers.length;
    };
    SingleEventManagerImpl.prototype.triggerEvent = function (eventGenerator) {
        for (var _i = 0, _a = this._handlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            try {
                var eventModel = eventGenerator();
                handler(eventModel);
            }
            catch (e) {
                // Since this handler could be outside our control, just catch anything it throws and continue on
                continue;
            }
        }
    };
    return SingleEventManagerImpl;
}());
exports.SingleEventManagerImpl = SingleEventManagerImpl;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(2);
var Param = /** @class */ (function () {
    function Param() {
    }
    /**
     * serializes the date into the format that the server expects.
     * @param date the date to serialize
     */
    Param.serializeDateForPlatform = function (date) {
        var year = date.getUTCFullYear();
        var month = date.getUTCMonth() + 1;
        var day = date.getUTCDate();
        var hh = date.getUTCHours();
        var mm = date.getUTCMinutes();
        var sec = date.getUTCSeconds();
        return year + "-" + month + "-" + day + " " + hh + ":" + mm + ":" + sec;
    };
    Param.serializeBooleanForPlatform = function (bool) {
        return bool ? 'true' : 'false';
    };
    Param.serializeNumberForPlatform = function (num) {
        return num.toString(10);
    };
    /**
     * Verifies the input is a number
     */
    /* tslint:disable:no-any */
    Param.isTypeNumber = function (input) {
        return typeof (input) === 'number' || input instanceof Number;
    };
    /* tslint:enable:no-any */
    /**
     * Verifies the input is a Date
     */
    /* tslint:disable:no-any */
    Param.isTypeDate = function (input) {
        return input instanceof Date;
    };
    /* tslint:enable:no-any */
    /* tslint:disable-next-line:no-any */
    Param.isTypeString = function (input) {
        return typeof (input) === 'string' || input instanceof String;
    };
    /* tslint:disable-next-line:no-any */
    Param.isTypeBool = function (input) {
        return typeof (input) === 'boolean' || input instanceof Boolean;
    };
    /* tslint:disable-next-line:no-any */
    Param.serializeParamterValue = function (value) {
        if (Param.isTypeNumber(value)) {
            return Param.serializeNumberForPlatform(value);
        }
        else if (Param.isTypeDate(value)) {
            return Param.serializeDateForPlatform(value);
        }
        else if (Param.isTypeBool(value)) {
            return Param.serializeBooleanForPlatform(value);
        }
        else if (Param.isTypeString(value)) {
            return value;
        }
        else {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, "Unexpected invalid value for: " + value);
        }
    };
    return Param;
}());
exports.Param = Param;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataTable = /** @class */ (function () {
    function DataTable(_data, _columns, _totalRowCount, _isSummaryData, _marksInfo) {
        this._data = _data;
        this._columns = _columns;
        this._totalRowCount = _totalRowCount;
        this._isSummaryData = _isSummaryData;
        this._marksInfo = _marksInfo;
        // TODO: get rid of this in redesign.
        this._name = _isSummaryData ? 'Summary Data Table' : 'Underlying Data Table';
    }
    Object.defineProperty(DataTable.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "marksInfo", {
        get: function () {
            return this._marksInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "totalRowCount", {
        get: function () {
            return this._totalRowCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "isSummaryData", {
        get: function () {
            return this._isSummaryData;
        },
        enumerable: true,
        configurable: true
    });
    return DataTable;
}());
exports.DataTable = DataTable;
var MarkInfo = /** @class */ (function () {
    function MarkInfo(_type, _color, _tupleId) {
        this._type = _type;
        this._color = _color;
        this._tupleId = _tupleId;
    }
    Object.defineProperty(MarkInfo.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkInfo.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkInfo.prototype, "tupleId", {
        get: function () {
            return this._tupleId;
        },
        enumerable: true,
        configurable: true
    });
    return MarkInfo;
}());
exports.MarkInfo = MarkInfo;
var Column = /** @class */ (function () {
    function Column(_fieldName, _dataType, // TODO: this shoudl be an enum type
        _isReferenced, _index) {
        this._fieldName = _fieldName;
        this._dataType = _dataType;
        this._isReferenced = _isReferenced;
        this._index = _index;
    }
    Object.defineProperty(Column.prototype, "fieldName", {
        get: function () {
            return this._fieldName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "dataType", {
        get: function () {
            return this._dataType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "isReferenced", {
        get: function () {
            return this._isReferenced;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    return Column;
}());
exports.Column = Column;
var DataValue = /** @class */ (function () {
    /* tslint:disable:no-any */
    function DataValue(_value, _formattedValue) {
        this._value = _value;
        this._formattedValue = _formattedValue;
    }
    Object.defineProperty(DataValue.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataValue.prototype, "formattedValue", {
        get: function () {
            return this._formattedValue;
        },
        enumerable: true,
        configurable: true
    });
    return DataValue;
}());
exports.DataValue = DataValue;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

(function () {
  var validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");

  function gen(count) {
    var out = "";
    for (var i=0; i<count; i++) {
      out += (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return out;
  }

  function Guid(guid) {
    if (!guid) throw new TypeError("Invalid argument; `value` has no value.");
      
    this.value = Guid.EMPTY;
    
    if (guid && guid instanceof Guid) {
      this.value = guid.toString();

    } else if (guid && Object.prototype.toString.call(guid) === "[object String]" && Guid.isGuid(guid)) {
      this.value = guid;
    }
    
    this.equals = function(other) {
      // Comparing string `value` against provided `guid` will auto-call
      // toString on `guid` for comparison
      return Guid.isGuid(other) && this.value == other;
    };

    this.isEmpty = function() {
      return this.value === Guid.EMPTY;
    };
    
    this.toString = function() {
      return this.value;
    };
    
    this.toJSON = function() {
      return this.value;
    };
  };

  Guid.EMPTY = "00000000-0000-0000-0000-000000000000";

  Guid.isGuid = function(value) {
    return value && (value instanceof Guid || validator.test(value.toString()));
  };

  Guid.create = function() {
    return new Guid([gen(2), gen(1), gen(1), gen(1), gen(3)].join("-"));
  };

  Guid.raw = function() {
    return [gen(2), gen(1), gen(1), gen(1), gen(3)].join("-");
  };

  if(typeof module != 'undefined' && module.exports) {
    module.exports = Guid;
  }
  else if (typeof window != 'undefined') {
    window.Guid = Guid;
  }
})();


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventListenerManager_1 = __webpack_require__(10);
var Sheet = /** @class */ (function (_super) {
    __extends(Sheet, _super);
    function Sheet(_sheetImpl) {
        var _this = _super.call(this) || this;
        _this._sheetImpl = _sheetImpl;
        return _this;
    }
    Object.defineProperty(Sheet.prototype, "name", {
        get: function () {
            return this._sheetImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sheet.prototype, "sheetType", {
        get: function () {
            return this._sheetImpl.sheetType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sheet.prototype, "size", {
        get: function () {
            return this._sheetImpl.size;
        },
        enumerable: true,
        configurable: true
    });
    Sheet.prototype.findParameterAsync = function (parameterName) {
        return this._sheetImpl.findParameterAsync(parameterName, this);
    };
    Sheet.prototype.getParametersAsync = function () {
        return this._sheetImpl.getParametersAsync(this);
    };
    return Sheet;
}(EventListenerManager_1.EventListenerManager));
exports.Sheet = Sheet;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(2);
/**
 * This class converts from a source enum value to destination enum
 * value given a mapping from source to destination when constructed.
 *
 * Note: This exact same class is defined in api-core.  Given its small
 * nature, it is not worth having in a separate project to share this between
 * api-core and api-shared.  If more utility functionality is added that is used by api-core
 * and api-shared but has no other dependecies, a utiltity project might be merited,
 * and this class could be moved.
 */
var EnumConverter = /** @class */ (function () {
    function EnumConverter(_mappings, _defaultVal) {
        this._mappings = _mappings;
        this._defaultVal = _defaultVal;
    }
    EnumConverter.prototype.convert = function (enumVal, throwIfMissing) {
        if (this._mappings.hasOwnProperty(enumVal)) {
            return this._mappings[enumVal];
        }
        if (this._defaultVal !== undefined && !throwIfMissing) {
            return this._defaultVal;
        }
        throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, "Enum Mapping not found for: " + enumVal);
    };
    return EnumConverter;
}());
exports.EnumConverter = EnumConverter;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TableauEvent = /** @class */ (function () {
    function TableauEvent(type) {
        this._type = type;
    }
    Object.defineProperty(TableauEvent.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    return TableauEvent;
}());
exports.TableauEvent = TableauEvent;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceRegistry_1 = __webpack_require__(4);
var ErrorHelpers_1 = __webpack_require__(5);
var SheetImpl = /** @class */ (function () {
    function SheetImpl(_sheetInfoImpl) {
        this._sheetInfoImpl = _sheetInfoImpl;
    }
    Object.defineProperty(SheetImpl.prototype, "name", {
        get: function () {
            return this._sheetInfoImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetImpl.prototype, "sheetType", {
        get: function () {
            return this._sheetInfoImpl.sheetType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetImpl.prototype, "sheetPath", {
        get: function () {
            return this._sheetInfoImpl.sheetPath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetImpl.prototype, "size", {
        get: function () {
            return this._sheetInfoImpl.sheetSize;
        },
        enumerable: true,
        configurable: true
    });
    SheetImpl.prototype.findParameterAsync = function (parameterName, sheet) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(parameterName, 'parameterName');
        ErrorHelpers_1.ErrorHelpers.verifyParameter(sheet, 'sheet');
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("parameters-service" /* Parameters */);
        return service.findParameterByNameAsync(parameterName, sheet);
    };
    SheetImpl.prototype.getParametersAsync = function (sheet) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(sheet, 'sheet');
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("parameters-service" /* Parameters */);
        return service.getParametersForSheetAsync(this.sheetPath, sheet);
    };
    return SheetImpl;
}());
exports.SheetImpl = SheetImpl;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TableauSheetEvent_1 = __webpack_require__(20);
var TableauWorksheetEvent = /** @class */ (function (_super) {
    __extends(TableauWorksheetEvent, _super);
    function TableauWorksheetEvent(type, _worksheet) {
        var _this = _super.call(this, type, _worksheet) || this;
        _this._worksheet = _worksheet;
        return _this;
    }
    Object.defineProperty(TableauWorksheetEvent.prototype, "worksheet", {
        get: function () {
            return this._worksheet;
        },
        enumerable: true,
        configurable: true
    });
    return TableauWorksheetEvent;
}(TableauSheetEvent_1.TableauSheetEvent));
exports.TableauWorksheetEvent = TableauWorksheetEvent;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TableauEvent_1 = __webpack_require__(17);
var TableauSheetEvent = /** @class */ (function (_super) {
    __extends(TableauSheetEvent, _super);
    function TableauSheetEvent(type, sheet) {
        var _this = _super.call(this, type) || this;
        _this._sheet = sheet;
        return _this;
    }
    Object.defineProperty(TableauSheetEvent.prototype, "sheet", {
        get: function () {
            return this._sheet;
        },
        enumerable: true,
        configurable: true
    });
    return TableauSheetEvent;
}(TableauEvent_1.TableauEvent));
exports.TableauSheetEvent = TableauSheetEvent;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines which type of getData call to make.
 */
var GetDataType;
(function (GetDataType) {
    GetDataType["Summary"] = "summary";
    GetDataType["Underlying"] = "underlying";
})(GetDataType = exports.GetDataType || (exports.GetDataType = {}));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is your main. This is where you re-export everything you want to be publicly available.
 *
 * The build enforces that the file has the same name as the global variable that is exported.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Due to the way we configured webpack, we should be exporting things which will be under
// a global variable called "tableau". Export everything we want to be visible under tableau
// from this file.
var ExtensionsImpl_1 = __webpack_require__(23);
var Extensions_1 = __webpack_require__(78);
var ApiShared_1 = __webpack_require__(3);
ApiShared_1.VersionNumber.SetVersionNumber( true ? "0.12.8" : '0.0.0');
var extensionImpl = new ExtensionsImpl_1.ExtensionsImpl();
exports.extensions = new Extensions_1.Extensions(extensionImpl);
// Export Enums
// These show up under the tableau object. I.e. tableau.ExtensionContext.Server
var ExtensionsApiExternalContract_1 = __webpack_require__(6);
exports.ExtensionContext = ExtensionsApiExternalContract_1.ExtensionContext;
exports.ExtensionMode = ExtensionsApiExternalContract_1.ExtensionMode;
exports.AnalyticsObjectType = ExtensionsApiExternalContract_1.AnalyticsObjectType;
exports.ColumnType = ExtensionsApiExternalContract_1.ColumnType;
exports.DashboardObjectType = ExtensionsApiExternalContract_1.DashboardObjectType;
exports.DataType = ExtensionsApiExternalContract_1.DataType;
exports.DateRangeType = ExtensionsApiExternalContract_1.DateRangeType;
exports.EncodingType = ExtensionsApiExternalContract_1.EncodingType;
exports.ErrorCodes = ExtensionsApiExternalContract_1.ErrorCodes;
exports.FieldAggregationType = ExtensionsApiExternalContract_1.FieldAggregationType;
exports.FieldRoleType = ExtensionsApiExternalContract_1.FieldRoleType;
exports.FilterDomainType = ExtensionsApiExternalContract_1.FilterDomainType;
exports.FilterType = ExtensionsApiExternalContract_1.FilterType;
exports.FilterUpdateType = ExtensionsApiExternalContract_1.FilterUpdateType;
exports.FilterNullOption = ExtensionsApiExternalContract_1.FilterNullOption;
exports.MarkType = ExtensionsApiExternalContract_1.MarkType;
exports.ParameterValueType = ExtensionsApiExternalContract_1.ParameterValueType;
exports.PeriodType = ExtensionsApiExternalContract_1.PeriodType;
exports.QuickTableCalcType = ExtensionsApiExternalContract_1.QuickTableCalcType;
exports.SelectionUpdateType = ExtensionsApiExternalContract_1.SelectionUpdateType;
exports.SheetType = ExtensionsApiExternalContract_1.SheetType;
exports.SortDirection = ExtensionsApiExternalContract_1.SortDirection;
exports.TableauEventType = ExtensionsApiExternalContract_1.TableauEventType;
exports.TrendLineModelType = ExtensionsApiExternalContract_1.TrendLineModelType;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionsApiExternalContract_1 = __webpack_require__(6);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(3);
var ApiShared_2 = __webpack_require__(3);
var DashboardContent_1 = __webpack_require__(68);
var Environment_1 = __webpack_require__(69);
var Settings_1 = __webpack_require__(70);
var UI_1 = __webpack_require__(71);
var RegisterAllExtensionsServices_1 = __webpack_require__(72);
var SettingsImpl_1 = __webpack_require__(76);
var UIImpl_1 = __webpack_require__(77);
var ExtensionsImpl = /** @class */ (function () {
    function ExtensionsImpl() {
    }
    ExtensionsImpl.prototype.initializeAsync = function (isExtensionDialog, contextMenuCallbacks) {
        var _this = this;
        if (!this._initializationPromise) {
            this._initializationPromise = new Promise(function (resolve, reject) {
                // First thing we want to do is check to see if there is a desktop dispatcher already registered for us
                if (api_internal_contract_js_1.InternalApiDispatcherHolder.hasDesktopApiDispatcherPromise()) {
                    // Running in desktop, use this promise
                    var desktopDispatcherPromise = api_internal_contract_js_1.InternalApiDispatcherHolder.getDesktopDispatcherPromise();
                    desktopDispatcherPromise.then(function (dipatcherFactory) {
                        return _this.onDispatcherReceived(dipatcherFactory, isExtensionDialog, contextMenuCallbacks);
                    })
                        .then(function (openPayload) {
                        resolve(openPayload);
                    });
                }
                else {
                    // We must be running in server, so we should try to kick of the server dispatcher bootstrapping
                    var onDispatcherReceivedCallback_1 = _this.onDispatcherReceived.bind(_this);
                    ApiShared_1.doCrossFrameBootstrap(window, api_internal_contract_js_1.INTERNAL_CONTRACT_VERSION).then(function (factory) {
                        return onDispatcherReceivedCallback_1(factory, isExtensionDialog, contextMenuCallbacks);
                    }).then(function (openPayload) { resolve(openPayload); });
                }
            });
        }
        return this._initializationPromise;
    };
    ExtensionsImpl.prototype.onDispatcherReceived = function (dispatcherFactory, isExtensionDialog, contextMenuFunctions) {
        var _this = this;
        var dispatcher = dispatcherFactory(api_internal_contract_js_1.INTERNAL_CONTRACT_VERSION);
        // Call to register all the services which will use the newly initialized dispatcher
        ApiShared_1.registerAllSharedServices(dispatcher);
        RegisterAllExtensionsServices_1.registerAllExtensionsServices(dispatcher);
        // Get the initialization service and initialize this extension
        var initializationService = ApiShared_1.ApiServiceRegistry.instance.getService("InitializationService" /* InitializationService */);
        var callbackMapKeys = (contextMenuFunctions) ? Object.keys(contextMenuFunctions) : [];
        return initializationService.initializeDashboardExtensionsAsync(isExtensionDialog, callbackMapKeys).then(function (result) {
            if (!result.extensionInstance.locator.dashboardPath) {
                throw new ApiShared_2.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.InternalError, 'Unexpected error during initialization.');
            }
            _this.dashboardContent = _this.initializeDashboardContent(result.extensionDashboardInfo, result.extensionInstance.locator.dashboardPath);
            _this.environment = new Environment_1.Environment(result.extensionEnvironment);
            _this.settings = _this.initializeSettings(result.extensionSettingsInfo);
            _this.ui = new UI_1.UI(new UIImpl_1.UIImpl());
            // After initialization has completed, setup listeners for the callback functions that
            // are meant to be triggered whenever a context menu item is clicked.
            _this.initializeContextMenuCallbacks(contextMenuFunctions);
            // In the normal initialization case, this will be an empty string.  When returning from initializeAsync to the
            // developer, we just ingore that string.  In the case of initializing from an extension dialog, this string
            // is an optional payload sent from the parent extension.
            return result.extensionDialogPayload;
        });
    };
    ExtensionsImpl.prototype.initializeDashboardContent = function (info, sheetPath) {
        var dashboardImpl = new ApiShared_1.DashboardImpl(info, sheetPath);
        var dashboard = new ApiShared_1.Dashboard(dashboardImpl);
        return new DashboardContent_1.DashboardContent(dashboard);
    };
    ExtensionsImpl.prototype.initializeSettings = function (settingsInfo) {
        var settingsImpl = new SettingsImpl_1.SettingsImpl(settingsInfo);
        return new Settings_1.Settings(settingsImpl);
    };
    ExtensionsImpl.prototype.initializeContextMenuCallbacks = function (contextMenuFunctions) {
        var notificationService = ApiShared_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        // Unregister function not used since these notifications should be
        // observed for the full lifetime of the extension.
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.ContextMenuClick, function (model) {
            // Let through any context menu event, these are already filtered on api-core
            // based on the extension locator.
            return true;
        }, function (event) {
            // Execute the function associated with this context menu ID
            if (contextMenuFunctions) {
                if (!contextMenuFunctions[event.id]) {
                    throw new ApiShared_2.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.InternalError, "Received unexpected context menu Id from event: " + event.id);
                }
                contextMenuFunctions[event.id]();
            }
        });
    };
    return ExtensionsImpl;
}());
exports.ExtensionsImpl = ExtensionsImpl;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// All enum values made available to Extensions developers.
// Enums should be kept in alphabetical order.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The context in which the Extensions is currently running.
 */
var ExtensionContext;
(function (ExtensionContext) {
    ExtensionContext["Desktop"] = "desktop";
    ExtensionContext["Server"] = "server";
})(ExtensionContext = exports.ExtensionContext || (exports.ExtensionContext = {}));
/**
 * The mode in which the Extensions is currently running.
 */
var ExtensionMode;
(function (ExtensionMode) {
    ExtensionMode["Authoring"] = "authoring";
    ExtensionMode["Viewing"] = "viewing";
})(ExtensionMode = exports.ExtensionMode || (exports.ExtensionMode = {}));
var AnalyticsObjectType;
(function (AnalyticsObjectType) {
    AnalyticsObjectType["Cluster"] = "cluster";
    AnalyticsObjectType["Forecast"] = "forecast";
    AnalyticsObjectType["TrendLine"] = "trend-line";
})(AnalyticsObjectType = exports.AnalyticsObjectType || (exports.AnalyticsObjectType = {}));
var ColumnType;
(function (ColumnType) {
    ColumnType["Discrete"] = "discrete";
    ColumnType["Continuous"] = "continuous";
})(ColumnType = exports.ColumnType || (exports.ColumnType = {}));
/**
 * What the object represents in a dashboard.
 */
var DashboardObjectType;
(function (DashboardObjectType) {
    DashboardObjectType["Blank"] = "blank";
    DashboardObjectType["Worksheet"] = "worksheet";
    DashboardObjectType["QuickFilter"] = "quick-filter";
    DashboardObjectType["ParameterControl"] = "parameter-control";
    DashboardObjectType["PageFilter"] = "page-filter";
    DashboardObjectType["Legend"] = "legend";
    DashboardObjectType["Title"] = "title";
    DashboardObjectType["Text"] = "text";
    DashboardObjectType["Image"] = "image";
    DashboardObjectType["WebPage"] = "web-page";
    DashboardObjectType["Extension"] = "extension";
})(DashboardObjectType = exports.DashboardObjectType || (exports.DashboardObjectType = {}));
/**
 * The different types of data a value can have
 */
var DataType;
(function (DataType) {
    DataType["String"] = "string";
    DataType["Int"] = "int";
    DataType["Float"] = "float";
    DataType["Bool"] = "bool";
    DataType["Date"] = "date";
    DataType["DateTime"] = "date-time";
    DataType["Spatial"] = "spatial";
})(DataType = exports.DataType || (exports.DataType = {}));
/**
 * Valid date ranges for a relative date filter.
 */
var DateRangeType;
(function (DateRangeType) {
    DateRangeType["Last"] = "last";
    DateRangeType["LastN"] = "last-n";
    DateRangeType["Next"] = "next";
    DateRangeType["NextN"] = "next-n";
    DateRangeType["Current"] = "current";
    DateRangeType["ToDate"] = "to-date";
})(DateRangeType = exports.DateRangeType || (exports.DateRangeType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType["Column"] = "column";
    EncodingType["Row"] = "row";
    EncodingType["Page"] = "page";
    EncodingType["Filter"] = "filter";
    EncodingType["MarksType"] = "marks-type";
    EncodingType["MeasureValues"] = "measure-values";
    EncodingType["Color"] = "color";
    EncodingType["Size"] = "size";
    EncodingType["Label"] = "label";
    EncodingType["Detail"] = "detail";
    EncodingType["Tooltip"] = "tooltip";
    EncodingType["Shape"] = "shape";
    EncodingType["Path"] = "path";
    EncodingType["Angle"] = "angle";
})(EncodingType = exports.EncodingType || (exports.EncodingType = {}));
/**
 * All error codes used by the Extensions API.
 */
var ErrorCodes;
(function (ErrorCodes) {
    /**
     * Thrown when caller attempts to execute command before initialization has completed.
     */
    ErrorCodes["APINotInitialized"] = "api-not-initialized";
    /**
     * Only one dialog can be opened at time with the UI namespace functionality.
     */
    ErrorCodes["DialogAlreadyOpen"] = "dialog-already-open";
    /**
     * The open dialog was closed by the user.
     */
    ErrorCodes["DialogClosedByUser"] = "dialog-closed-by-user";
    /**
     * An error occurred within the Tableau Extensions API. Contact Tableau Support.
     */
    ErrorCodes["InternalError"] = "internal-error";
    /**
     * A dialog must start on the same domain as the parent extenion.
     */
    ErrorCodes["InvalidDomainDialog"] = "invalid-dialog-domain";
    /**
     * A parameter is not the correct data type or format. The name of the parameter is specified in the Error.message field.
     */
    ErrorCodes["InvalidParameter"] = "invalid-parameter";
    /**
     * Can occur if the extension interacts with a filter that has been removed from the worksheet.
     */
    ErrorCodes["MissingFilter"] = "missing-filter";
    /**
     * Can occur if the extension interacts with a parameter that has been removed from the worksheet.
     */
    ErrorCodes["MissingParameter"] = "missing-parameter";
    /**
     * Internal Server Error
     */
    ErrorCodes["ServerError"] = "server-error";
    /**
     * Developer cannot save settings while another save is still in progress.
     */
    ErrorCodes["SettingSaveInProgress"] = "setting-save-in-progress";
    /**
     * An unknown event name was specified in the call to Viz.addEventListeneror Viz.removeEventListener.
     */
    ErrorCodes["UnsupportedEventName"] = "unsupported-event-name";
    /**
     * A method was used for a type of datasource that doesn't support that method (see getActiveTablesAsync for an example)
     */
    ErrorCodes["UnsupportedMethodForDataSourceType"] = "unsupported-method-for-data-source-type";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
/**
 *  Type of aggregation on a field.
 */
var FieldAggregationType;
(function (FieldAggregationType) {
    FieldAggregationType["Sum"] = "sum";
    FieldAggregationType["Avg"] = "avg";
    FieldAggregationType["Min"] = "min";
    FieldAggregationType["Max"] = "max";
    FieldAggregationType["Stdev"] = "stdev";
    FieldAggregationType["Stdevp"] = "stdevp";
    FieldAggregationType["Var"] = "var";
    FieldAggregationType["Varp"] = "varp";
    FieldAggregationType["Count"] = "count";
    FieldAggregationType["Countd"] = "countd";
    FieldAggregationType["Median"] = "median";
    FieldAggregationType["Attr"] = "attr";
    FieldAggregationType["None"] = "none";
    FieldAggregationType["Year"] = "year";
    FieldAggregationType["Qtr"] = "qtr";
    FieldAggregationType["Month"] = "month";
    FieldAggregationType["Day"] = "day";
    FieldAggregationType["Hour"] = "hour";
    FieldAggregationType["Minute"] = "minute";
    FieldAggregationType["Second"] = "second";
    FieldAggregationType["Week"] = "week";
    FieldAggregationType["Weekday"] = "weekday";
    FieldAggregationType["MonthYear"] = "month-year";
    FieldAggregationType["Mdy"] = "mdy";
    FieldAggregationType["End"] = "end";
    FieldAggregationType["TruncYear"] = "trunc-year";
    FieldAggregationType["TruncQtr"] = "trunc-qtr";
    FieldAggregationType["TruncMonth"] = "trunc-month";
    FieldAggregationType["TruncWeek"] = "trunc-week";
    FieldAggregationType["TruncDay"] = "trunc-day";
    FieldAggregationType["TruncHour"] = "trunc-hour";
    FieldAggregationType["TruncMinute"] = "trunc-minute";
    FieldAggregationType["TruncSecond"] = "trunc-second";
    FieldAggregationType["Quart1"] = "quart1";
    FieldAggregationType["Quart3"] = "quart3";
    FieldAggregationType["Skewness"] = "skewness";
    FieldAggregationType["Kurtosis"] = "kurtosis";
    FieldAggregationType["InOut"] = "in-out";
    FieldAggregationType["User"] = "user";
})(FieldAggregationType = exports.FieldAggregationType || (exports.FieldAggregationType = {}));
/**
 * Role of a field.
 */
var FieldRoleType;
(function (FieldRoleType) {
    FieldRoleType["Dimension"] = "dimension";
    FieldRoleType["Measure"] = "measure";
    FieldRoleType["Unknown"] = "unknown";
})(FieldRoleType = exports.FieldRoleType || (exports.FieldRoleType = {}));
/**
 * An enumeration of the valid types of filters that can be applied.
 */
var FilterType;
(function (FilterType) {
    FilterType["Categorical"] = "categorical";
    FilterType["Range"] = "range";
    FilterType["Hierarchical"] = "hierarchical";
    FilterType["RelativeDate"] = "relative-date";
})(FilterType = exports.FilterType || (exports.FilterType = {}));
/**
 * The different update types for applying filter
 */
var FilterUpdateType;
(function (FilterUpdateType) {
    FilterUpdateType["Add"] = "add";
    FilterUpdateType["All"] = "all";
    FilterUpdateType["Replace"] = "replace";
    FilterUpdateType["Remove"] = "remove";
})(FilterUpdateType = exports.FilterUpdateType || (exports.FilterUpdateType = {}));
/**
 * The domain type for a filter
 */
var FilterDomainType;
(function (FilterDomainType) {
    /**
     * The domain values that are relevant to the specified filter
     * i.e. the domain is restricted by a previous filter
     */
    FilterDomainType["Relevant"] = "relevant";
    /**
     * list of all possible domain values from database
     */
    FilterDomainType["Database"] = "database";
})(FilterDomainType = exports.FilterDomainType || (exports.FilterDomainType = {}));
/**
 * The option for specifying which values to include for filtering
 * Indicates what to do with null values for a given filter or mark selection call.
 */
var FilterNullOption;
(function (FilterNullOption) {
    FilterNullOption["NullValues"] = "null-values";
    FilterNullOption["NonNullValues"] = "non-null-values";
    FilterNullOption["AllValues"] = "all-values";
})(FilterNullOption = exports.FilterNullOption || (exports.FilterNullOption = {}));
/**
 * Type of mark for a given marks card in a viz.
 */
var MarkType;
(function (MarkType) {
    MarkType["Bar"] = "bar";
    MarkType["Line"] = "line";
    MarkType["Area"] = "area";
    MarkType["Square"] = "square";
    MarkType["Circle"] = "circle";
    MarkType["Shape"] = "shape";
    MarkType["Text"] = "text";
    MarkType["Map"] = "map";
    MarkType["Pie"] = "pie";
    MarkType["GanttBar"] = "gantt-bar";
    MarkType["Polygon"] = "polygon";
})(MarkType = exports.MarkType || (exports.MarkType = {}));
/**
 * An enumeration describing the different types of allowable values.
 * This is used for restricting the domain of a parameter
 */
var ParameterValueType;
(function (ParameterValueType) {
    ParameterValueType["All"] = "all";
    ParameterValueType["List"] = "list";
    ParameterValueType["Range"] = "range";
})(ParameterValueType = exports.ParameterValueType || (exports.ParameterValueType = {}));
/**
 * Date period used in filters and in parameters.
 */
var PeriodType;
(function (PeriodType) {
    PeriodType["Years"] = "years";
    PeriodType["Quarters"] = "quarters";
    PeriodType["Months"] = "months";
    PeriodType["Weeks"] = "weeks";
    PeriodType["Days"] = "days";
    PeriodType["Hours"] = "hours";
    PeriodType["Minutes"] = "minutes";
    PeriodType["Seconds"] = "seconds";
})(PeriodType = exports.PeriodType || (exports.PeriodType = {}));
var QuickTableCalcType;
(function (QuickTableCalcType) {
    QuickTableCalcType["RunningTotal"] = "running-total";
    QuickTableCalcType["Difference"] = "difference";
    QuickTableCalcType["PercentDifference"] = "percent-difference";
    QuickTableCalcType["PercentOfTotal"] = "percent-of-total";
    QuickTableCalcType["Rank"] = "rank";
    QuickTableCalcType["Percentile"] = "percentile";
    QuickTableCalcType["MovingAverage"] = "moving-average";
    QuickTableCalcType["YTDTotal"] = "ytd-total";
    QuickTableCalcType["CompoundGrowthRate"] = "compound-growth-rate";
    QuickTableCalcType["YearOverYearGrowth"] = "year-over-year-growth";
    QuickTableCalcType["YTDGrowth"] = "ytd-growth";
    QuickTableCalcType["Undefined"] = "undefined";
})(QuickTableCalcType = exports.QuickTableCalcType || (exports.QuickTableCalcType = {}));
/**
 * Enum for specifying the selection type for select marks api.
 */
var SelectionUpdateType;
(function (SelectionUpdateType) {
    SelectionUpdateType["Replace"] = "select-replace";
    SelectionUpdateType["Add"] = "select-add";
    SelectionUpdateType["Remove"] = "select-remove";
})(SelectionUpdateType = exports.SelectionUpdateType || (exports.SelectionUpdateType = {}));
/**
 * The type of sheet a Sheet object represents
 */
var SheetType;
(function (SheetType) {
    SheetType["Dashboard"] = "dashboard";
    SheetType["Story"] = "story";
    SheetType["Worksheet"] = "worksheet";
})(SheetType = exports.SheetType || (exports.SheetType = {}));
var SortDirection;
(function (SortDirection) {
    SortDirection["Increasing"] = "increasing";
    SortDirection["Decreasing"] = "decreasing";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
/**
 * Represents a certain type of event which can be listened for
 */
var TableauEventType;
(function (TableauEventType) {
    /** Raised when any filter has changed state.*/
    TableauEventType["FilterChanged"] = "filter-changed";
    /** The selected marks on a visualization has changed */
    TableauEventType["MarkSelectionChanged"] = "mark-selection-changed";
    /** A parameter has had its value modified */
    TableauEventType["ParameterChanged"] = "parameter-changed";
    /** Settings have been changed for this extension. */
    TableauEventType["SettingsChanged"] = "settings-changed";
})(TableauEventType = exports.TableauEventType || (exports.TableauEventType = {}));
var TrendLineModelType;
(function (TrendLineModelType) {
    TrendLineModelType["Linear"] = "linear";
    TrendLineModelType["Logarithmic"] = "logarithmic";
    TrendLineModelType["Exponential"] = "exponential";
    TrendLineModelType["Polynomial"] = "polynomial";
})(TrendLineModelType = exports.TrendLineModelType || (exports.TrendLineModelType = {}));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionContext;
(function (ExtensionContext) {
    ExtensionContext["Desktop"] = "desktop";
    ExtensionContext["Server"] = "server";
    ExtensionContext["Unknown"] = "unknown";
})(ExtensionContext = exports.ExtensionContext || (exports.ExtensionContext = {}));
var ExtensionMode;
(function (ExtensionMode) {
    ExtensionMode["Authoring"] = "authoring";
    ExtensionMode["Viewing"] = "viewing";
    ExtensionMode["Unknown"] = "unknown";
})(ExtensionMode = exports.ExtensionMode || (exports.ExtensionMode = {}));
var ColumnType;
(function (ColumnType) {
    ColumnType["Discrete"] = "discrete";
    ColumnType["Continuous"] = "continuous";
})(ColumnType = exports.ColumnType || (exports.ColumnType = {}));
var DashboardObjectType;
(function (DashboardObjectType) {
    DashboardObjectType["Blank"] = "blank";
    DashboardObjectType["Worksheet"] = "worksheet";
    DashboardObjectType["QuickFilter"] = "quick-filter";
    DashboardObjectType["ParameterControl"] = "parameter-control";
    DashboardObjectType["PageFilter"] = "page-filter";
    DashboardObjectType["Legend"] = "legend";
    DashboardObjectType["Title"] = "title";
    DashboardObjectType["Text"] = "text";
    DashboardObjectType["Image"] = "image";
    DashboardObjectType["WebPage"] = "web-page";
    DashboardObjectType["Extension"] = "extension";
})(DashboardObjectType = exports.DashboardObjectType || (exports.DashboardObjectType = {}));
var DataType;
(function (DataType) {
    DataType["String"] = "string";
    DataType["Int"] = "int";
    DataType["Float"] = "float";
    DataType["Bool"] = "bool";
    DataType["Date"] = "date";
    DataType["DateTime"] = "date-time";
    DataType["Spatial"] = "spatial";
})(DataType = exports.DataType || (exports.DataType = {}));
var EncodedDataType;
(function (EncodedDataType) {
    EncodedDataType["Number"] = "number";
    EncodedDataType["String"] = "string";
    EncodedDataType["Date"] = "date";
    EncodedDataType["Boolean"] = "boolean";
})(EncodedDataType = exports.EncodedDataType || (exports.EncodedDataType = {}));
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes["INITIALIZATION_ERROR"] = "initialization-error";
    ErrorCodes["INTERNAL_ERROR"] = "internal-error";
    ErrorCodes["MISSING_ENUM_MAPPING"] = "missing-enum-mapping";
    ErrorCodes["MISSING_PARAMETER"] = "missing-parameter";
    ErrorCodes["PERMISSION_DENIED"] = "permission-denied";
    ErrorCodes["PRES_MODEL_PARSING_ERROR"] = "pres-model-parsing-error";
    ErrorCodes["VERSION_NOT_CONFIGURED"] = "version-not-configured";
    ErrorCodes["UNKNOWN_VERB_ID"] = "unknown-verb-id";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
var FieldAggregationType;
(function (FieldAggregationType) {
    FieldAggregationType["Sum"] = "sum";
    FieldAggregationType["Avg"] = "avg";
    FieldAggregationType["Min"] = "min";
    FieldAggregationType["Max"] = "max";
    FieldAggregationType["Stdev"] = "stdev";
    FieldAggregationType["Stdevp"] = "stdevp";
    FieldAggregationType["Var"] = "var";
    FieldAggregationType["Varp"] = "varp";
    FieldAggregationType["Count"] = "count";
    FieldAggregationType["Countd"] = "countd";
    FieldAggregationType["Median"] = "median";
    FieldAggregationType["Attr"] = "attr";
    FieldAggregationType["None"] = "none";
    FieldAggregationType["Year"] = "year";
    FieldAggregationType["Qtr"] = "qtr";
    FieldAggregationType["Month"] = "month";
    FieldAggregationType["Day"] = "day";
    FieldAggregationType["Hour"] = "hour";
    FieldAggregationType["Minute"] = "minute";
    FieldAggregationType["Second"] = "second";
    FieldAggregationType["Week"] = "week";
    FieldAggregationType["Weekday"] = "weekday";
    FieldAggregationType["MonthYear"] = "month-year";
    FieldAggregationType["Mdy"] = "mdy";
    FieldAggregationType["End"] = "end";
    FieldAggregationType["TruncYear"] = "trunc-year";
    FieldAggregationType["TruncQtr"] = "trunc-qtr";
    FieldAggregationType["TruncMonth"] = "trunc-month";
    FieldAggregationType["TruncWeek"] = "trunc-week";
    FieldAggregationType["TruncDay"] = "trunc-day";
    FieldAggregationType["TruncHour"] = "trunc-hour";
    FieldAggregationType["TruncMinute"] = "trunc-minute";
    FieldAggregationType["TruncSecond"] = "trunc-second";
    FieldAggregationType["Quart1"] = "quart1";
    FieldAggregationType["Quart3"] = "quart3";
    FieldAggregationType["Skewness"] = "skewness";
    FieldAggregationType["Kurtosis"] = "kurtosis";
    FieldAggregationType["InOut"] = "in-out";
    FieldAggregationType["User"] = "user";
})(FieldAggregationType = exports.FieldAggregationType || (exports.FieldAggregationType = {}));
var FieldRoleType;
(function (FieldRoleType) {
    FieldRoleType["Dimension"] = "dimension";
    FieldRoleType["Measure"] = "measure";
    FieldRoleType["Unknown"] = "unknown";
})(FieldRoleType = exports.FieldRoleType || (exports.FieldRoleType = {}));
/**
 *  The different update types for applying filter.
 */
var FilterUpdateType;
(function (FilterUpdateType) {
    FilterUpdateType["Add"] = "add";
    FilterUpdateType["All"] = "all";
    FilterUpdateType["Replace"] = "replace";
    FilterUpdateType["Remove"] = "remove";
})(FilterUpdateType = exports.FilterUpdateType || (exports.FilterUpdateType = {}));
var SheetType;
(function (SheetType) {
    SheetType["Dashboard"] = "dashboard";
    SheetType["Story"] = "story";
    SheetType["Worksheet"] = "worksheet";
})(SheetType = exports.SheetType || (exports.SheetType = {}));
var DomainRestrictionType;
(function (DomainRestrictionType) {
    DomainRestrictionType["All"] = "all";
    DomainRestrictionType["List"] = "list";
    DomainRestrictionType["Range"] = "range";
})(DomainRestrictionType = exports.DomainRestrictionType || (exports.DomainRestrictionType = {}));
var DateStepPeriod;
(function (DateStepPeriod) {
    DateStepPeriod["Years"] = "years";
    DateStepPeriod["Quarters"] = "quarters";
    DateStepPeriod["Months"] = "months";
    DateStepPeriod["Weeks"] = "weeks";
    DateStepPeriod["Days"] = "days";
    DateStepPeriod["Hours"] = "hours";
    DateStepPeriod["Minutes"] = "minutes";
    DateStepPeriod["Seconds"] = "seconds";
})(DateStepPeriod = exports.DateStepPeriod || (exports.DateStepPeriod = {}));
/**
 * The option for specifying which values to include for filtering.
 */
var FilterNullOption;
(function (FilterNullOption) {
    FilterNullOption["NullValues"] = "nullvalues";
    FilterNullOption["NonNullValues"] = "nonnullvalues";
    FilterNullOption["AllValues"] = "allvalues";
})(FilterNullOption = exports.FilterNullOption || (exports.FilterNullOption = {}));
/**
 * The type of filter domain
 */
var FilterDomainType;
(function (FilterDomainType) {
    FilterDomainType["Relevant"] = "relevant";
    FilterDomainType["Database"] = "database";
})(FilterDomainType = exports.FilterDomainType || (exports.FilterDomainType = {}));
/**
 * Internal enum for specifying the selection type for select marks api.
 */
var SelectionUpdateType;
(function (SelectionUpdateType) {
    SelectionUpdateType["Replace"] = "select-replace";
    SelectionUpdateType["Add"] = "select-add";
    SelectionUpdateType["Remove"] = "select-remove";
})(SelectionUpdateType = exports.SelectionUpdateType || (exports.SelectionUpdateType = {}));
/**
 * Internal enum for specifying the included values type for range selection.
 */
var QuantitativeIncludedValues;
(function (QuantitativeIncludedValues) {
    QuantitativeIncludedValues["IncludeNull"] = "include-null";
    QuantitativeIncludedValues["IncludeNonNull"] = "include-non-null";
    QuantitativeIncludedValues["IncludeAll"] = "include-all";
})(QuantitativeIncludedValues = exports.QuantitativeIncludedValues || (exports.QuantitativeIncludedValues = {}));
/**
 * Type of mark for a given marks card in a viz.
 */
var MarkType;
(function (MarkType) {
    MarkType["Bar"] = "bar";
    MarkType["Line"] = "line";
    MarkType["Area"] = "area";
    MarkType["Square"] = "square";
    MarkType["Circle"] = "circle";
    MarkType["Shape"] = "shape";
    MarkType["Text"] = "text";
    MarkType["Map"] = "map";
    MarkType["Pie"] = "pie";
    MarkType["GanttBar"] = "gantt-bar";
    MarkType["Polygon"] = "polygon";
})(MarkType = exports.MarkType || (exports.MarkType = {}));
/**
 * Internal enum for specifying the type of filter
 */
var FilterType;
(function (FilterType) {
    FilterType["Categorical"] = "categorical";
    FilterType["Range"] = "range";
    FilterType["RelativeDate"] = "relativeDate";
    FilterType["Hierarchical"] = "hierarchical";
})(FilterType = exports.FilterType || (exports.FilterType = {}));
/**
 * Internal enum for specifying the DateRangeType of a relative date filter
 */
var DateRangeType;
(function (DateRangeType) {
    /**
     * Refers to the last day, week, month, etc. of the date period.
     */
    DateRangeType["Last"] = "last";
    /**
     * Refers to the last N days, weeks, months, etc. of the date period.
     */
    DateRangeType["LastN"] = "lastN";
    /**
     * Refers to the next day, week, month, etc. of the date period.
     */
    DateRangeType["Next"] = "next";
    /**
     * Refers to the next N days, weeks, months, etc. of the date period.
     */
    DateRangeType["NextN"] = "nextN";
    /**
     * Refers to the current day, week, month, etc. of the date period.
     */
    DateRangeType["Current"] = "current";
    /**
     * Refers to everything up to and including the current day, week, month, etc. of the date period.
     */
    DateRangeType["ToDate"] = "toDate";
})(DateRangeType = exports.DateRangeType || (exports.DateRangeType = {}));
/**
 * Used to determine if the launching of an extension dialog succeeded or failed.
 */
var ExtensionDialogResult;
(function (ExtensionDialogResult) {
    ExtensionDialogResult["DialogAlreadyOpen"] = "dialog-already-open";
    ExtensionDialogResult["InvalidDomain"] = "invalid-domain";
    ExtensionDialogResult["Success"] = "success";
})(ExtensionDialogResult = exports.ExtensionDialogResult || (exports.ExtensionDialogResult = {}));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InternalApiDispatcherHolder;
(function (InternalApiDispatcherHolder) {
    function getDesktopDispatcherPromise() {
        return window.__tableauDesktopDispatcher;
    }
    InternalApiDispatcherHolder.getDesktopDispatcherPromise = getDesktopDispatcherPromise;
    function hasDesktopApiDispatcherPromise() {
        return !!InternalApiDispatcherHolder.getDesktopDispatcherPromise();
    }
    InternalApiDispatcherHolder.hasDesktopApiDispatcherPromise = hasDesktopApiDispatcherPromise;
    function setDesktopDispatcherPromise(dispatcher) {
        window.__tableauDesktopDispatcher = dispatcher;
    }
    InternalApiDispatcherHolder.setDesktopDispatcherPromise = setDesktopDispatcherPromise;
})(InternalApiDispatcherHolder = exports.InternalApiDispatcherHolder || (exports.InternalApiDispatcherHolder = {}));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NotificationId;
(function (NotificationId) {
    NotificationId["SelectedMarksChanged"] = "selected-marks-changed";
    NotificationId["ParameterChanged"] = "parameter-changed";
    NotificationId["FilterChanged"] = "filter-changed";
    NotificationId["ExtensionDialogUpdate"] = "extension-dialog-update";
    NotificationId["SettingsChanged"] = "settings-changed";
    NotificationId["ContextMenuClick"] = "context-menu-click";
    NotificationId["TestConversionNotification"] = "test-conversion-notification";
})(NotificationId = exports.NotificationId || (exports.NotificationId = {}));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ParameterId;
(function (ParameterId) {
    ParameterId["ExtensionLocator"] = "extension-locator";
    ParameterId["ExtensionBootstrapInfo"] = "extension-bootstrap-info";
    ParameterId["ExtensionSettingsInfo"] = "extension-settings-info";
    ParameterId["VisualId"] = "visual-id";
    ParameterId["SheetPath"] = "sheet-path";
    ParameterId["IgnoreAliases"] = "ignore-aliases";
    ParameterId["IgnoreSelection"] = "ignore-selection";
    ParameterId["IncludeAllColumns"] = "include-all-columns";
    ParameterId["MaxRows"] = "max-rows";
    ParameterId["UnderlyingDataTable"] = "underlying-data-table";
    ParameterId["UnderlyingSummaryDataTable"] = "underlying-summary-data-table";
    ParameterId["DataSourceDataTable"] = "data-source-data-table";
    ParameterId["SettingsValues"] = "settings-values";
    ParameterId["SelectedData"] = "selected-data";
    ParameterId["HighlightedData"] = "highlighted-data";
    // Filter Params
    ParameterId["FieldName"] = "field-name";
    ParameterId["FilterValues"] = "filter-values";
    ParameterId["FilterUpdateType"] = "filter-update-type";
    ParameterId["IsExcludeMode"] = "is-exclude";
    ParameterId["FilterRangeMin"] = "filter-range-min";
    ParameterId["FilterRangeMax"] = "filter-range-max";
    ParameterId["FilterRangeNullOption"] = "filter-range-null-option";
    ParameterId["WorksheetFilters"] = "worksheet-filters";
    ParameterId["FieldId"] = "field-id";
    ParameterId["DomainType"] = "domain-type";
    ParameterId["CategoricalDomain"] = "categorical-domain";
    ParameterId["QuantitativeDomain"] = "quantitative-dmain";
    ParameterId["WorksheetName"] = "worksheet-name";
    ParameterId["DashboardName"] = "dashboard";
    ParameterId["ParameterInfo"] = "parameter-info";
    ParameterId["ParameterInfos"] = "parameter-infos";
    ParameterId["ParameterCaption"] = "paremeter-caption";
    ParameterId["ParameterFieldName"] = "parameter-field-name";
    ParameterId["ParameterValue"] = "parameter-value";
    ParameterId["Selection"] = "selection";
    ParameterId["SelectionUpdateType"] = "selectionUpdateType";
    ParameterId["HierValSelectionModels"] = "hierarchicalValueSelectionModels";
    ParameterId["QuantRangeSelectionModels"] = "quantativeRangeSelectionModels";
    ParameterId["DimValSelectionModels"] = "dimensionValueSelectionModels";
    ParameterId["DataSourceId"] = "data-source-id";
    ParameterId["DataSchema"] = "data-schema";
    ParameterId["DataSourceName"] = "data-source-name";
    ParameterId["ColumnsToInclude"] = "columns-to-include";
    ParameterId["JoinDescription"] = "join-description";
    ParameterId["ConnectionDescriptionSummaries"] = "connection-description-summaries";
    ParameterId["ExtensionDialogUrl"] = "extension-dialog-url";
    ParameterId["ExtensionDialogPayload"] = "extension-dialog-payload";
    ParameterId["IsExtensionDialog"] = "is-extension-dialog";
    ParameterId["ExtensionDialogH"] = "extension-dialog-height";
    ParameterId["ExtensionDialogW"] = "extension-dialog-width";
    ParameterId["ExtensionDialogResult"] = "extension-dialog-result";
    ParameterId["ExtensionContextMenuIds"] = "extension-context-menu-ids";
    ParameterId["TestConversionParameter"] = "test-conversion-parameter";
})(ParameterId = exports.ParameterId || (exports.ParameterId = {}));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Declare this key type and export the NotificationId to make this behave like a string enum
var VerbId;
(function (VerbId) {
    VerbId["ApplyCategoricalFilter"] = "categorical-filter";
    VerbId["ApplyRangeFilter"] = "range-filter";
    VerbId["ClearFilter"] = "clear-filter";
    VerbId["InitializeExtension"] = "initialize-extension";
    VerbId["GetDataSummaryData"] = "get-summary-data";
    VerbId["GetUnderlyingData"] = "get-underlying-data";
    VerbId["GetDataSourceData"] = "get-datasource-data";
    VerbId["SaveExtensionSettings"] = "save-extension-settings";
    VerbId["GetSelectedMarks"] = "get-selected-marks";
    VerbId["GetHighlightedMarks"] = "get-highlighted-marks";
    VerbId["GetParametersForSheet"] = "get-parameters-for-sheet";
    VerbId["FindParameter"] = "find-parameter";
    VerbId["ChangeParameterValue"] = "change-parameter-value";
    VerbId["ClearSelectedMarks"] = "clear-selected-marks";
    VerbId["SelectByValue"] = "select-by-value";
    VerbId["GetDataSources"] = "get-data-sources";
    VerbId["RefreshDataSource"] = "refresh-data-source";
    VerbId["GetFilters"] = "get-filters";
    VerbId["GetCategoricalDomain"] = "get-categorical-domain";
    VerbId["GetRangeDomain"] = "get-range-domain";
    VerbId["GetJoinDescription"] = "get-join-description";
    VerbId["GetConnectionDescriptionSummaries"] = "get-connection-description-summaries";
    VerbId["DisplayDialog"] = "display-dialog";
    VerbId["CloseDialog"] = "close-dialog";
    VerbId["TestConversionVerb"] = "test-conversion-verb";
})(VerbId = exports.VerbId || (exports.VerbId = {}));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StackingVersionConverter_1 = __webpack_require__(31);
var IdentityVersionConverter_1 = __webpack_require__(32);
// A mapping from the source version of a model -> the next version of the model. Each major
// version bump can have an array of conversions to perform in order
var executeUpgrades = {
    0: []
};
var executeDowngrades = {
    0: []
};
var notificationDowngrades = {
    0: []
};
/**
 * Creates a new InternalContractVersionConverter which has the ability to upgrade and downgrade the contract between the two versions
 * which are specified. If externalMajorVersion is greater than platformMajorVersion, an error will be thrown because
 * we won't know how to do those conversions.
 *
 * @param externalMajorVersion The version of the internal api which the external module is using
 * @param platformMajorVersion The version of the internal api which the platform is using
 */
function CreateVersionConverter(externalMajorVersion, platformMajorVersion) {
    if (!Number.isInteger(externalMajorVersion) ||
        !Number.isInteger(platformMajorVersion) ||
        externalMajorVersion < 0 ||
        platformMajorVersion < 0) {
        throw new Error("Versions must be positive integers:\n    externalMajorVersion=" + externalMajorVersion + " platformMajorVersion=" + platformMajorVersion);
    }
    if (externalMajorVersion > platformMajorVersion) {
        throw new Error("External version must be less than or equal to platform version.\n    externalMajorVersion=" + externalMajorVersion + " platformMajorVersion=" + platformMajorVersion);
    }
    if (externalMajorVersion === platformMajorVersion) {
        // If we are using the exact same versions, just use the identity converter
        return new IdentityVersionConverter_1.IdentityVersionConverter();
    }
    // Walk the span between the versions we have here and collect the upgrade and downgrades necessary
    var neededExecuteUpgrades = [];
    for (var i = externalMajorVersion; i < platformMajorVersion; i++) {
        if (i in executeUpgrades) {
            neededExecuteUpgrades.push.apply(neededExecuteUpgrades, executeUpgrades[i]);
        }
    }
    // Walk the span between them backwards to get the necessary downgrades
    var neededExecuteDowngrades = [];
    var neededNotificationDowngrades = [];
    for (var i = platformMajorVersion - 1; i >= externalMajorVersion; i--) {
        if (i in executeDowngrades) {
            neededExecuteDowngrades.push.apply(neededExecuteDowngrades, executeDowngrades[i]);
        }
        if (i in notificationDowngrades) {
            neededNotificationDowngrades.push.apply(neededNotificationDowngrades, notificationDowngrades[i]);
        }
    }
    return new StackingVersionConverter_1.StackingVersionConverter(externalMajorVersion, platformMajorVersion, neededExecuteUpgrades, neededExecuteDowngrades, neededNotificationDowngrades);
}
exports.CreateVersionConverter = CreateVersionConverter;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-any
/**
 * The version converter is designed to allow the platform and external modules
 * to seemlessly communicate over two different versions of the internal API. The only
 * mode it supports is external's version <= platform's version. When executing
 * commands, it is used to upgrade the external representation to what platform knows on the way in
 * and downgrade the representations on the way out. Similarly for notifications, it can
 * downgrade those on the way from platform to external.
 */
var StackingVersionConverter = /** @class */ (function () {
    /**
     * Creates a new instance of the StackingVersionConverter
     *
     * @param _externalMajorVersion The major version of the internal contract api-external-js is using
     * @param _platformMajorVersion The major version of the internal contract the api-platform-js is using
     * @param _upgradeExecuteTranslations Ordered list of the translations to perform when upgrading cmd parameters
     * @param _downgradeExecuteTranslations Ordered list of downgrade translations to perform after a cmd
     * @param _downgradeNotificationTranslations Ordered list of downgrade translations to perform on a notification
     */
    function StackingVersionConverter(_externalMajorVersion, _platformMajorVersion, _upgradeExecuteTranslations, _downgradeExecuteTranslations, _downgradeNotificationTranslations) {
        this._externalMajorVersion = _externalMajorVersion;
        this._platformMajorVersion = _platformMajorVersion;
        this._upgradeExecuteTranslations = _upgradeExecuteTranslations;
        this._downgradeExecuteTranslations = _downgradeExecuteTranslations;
        this._downgradeNotificationTranslations = _downgradeNotificationTranslations;
        if (this._externalMajorVersion > this._platformMajorVersion) {
            throw new Error("Cannot convert between external version " + this._externalMajorVersion + " and " + this._platformMajorVersion);
        }
    }
    StackingVersionConverter.prototype.upgradeExecuteCall = function (verb, parameters) {
        // Perform the upgrade of the verb and parameters to the level that platform is using
        var upgraded = { verb: verb, parameters: parameters };
        for (var _i = 0, _a = this._upgradeExecuteTranslations; _i < _a.length; _i++) {
            var upgradeTranslation = _a[_i];
            upgraded = upgradeTranslation(upgraded.verb, upgraded.parameters);
        }
        return upgraded;
    };
    StackingVersionConverter.prototype.downgradeExecuteReturn = function (executeResponse) {
        // Downgrade the response to what the external module is expecting
        var downgraded = executeResponse;
        for (var _i = 0, _a = this._downgradeExecuteTranslations; _i < _a.length; _i++) {
            var downgradeTranslation = _a[_i];
            downgraded = downgradeTranslation(downgraded);
        }
        return downgraded;
    };
    StackingVersionConverter.prototype.downgradeNotification = function (notification) {
        // Downgrade the notification to what the external module is expecting
        var downgraded = notification;
        for (var _i = 0, _a = this._downgradeNotificationTranslations; _i < _a.length; _i++) {
            var downgradeTranslation = _a[_i];
            downgraded = downgradeTranslation(downgraded);
        }
        return downgraded;
    };
    return StackingVersionConverter;
}());
exports.StackingVersionConverter = StackingVersionConverter;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-any
/**
 * This version converter doesn't actually do anything but is useful for testing or when we have
 * a matching platform and internal version number
*/
var IdentityVersionConverter = /** @class */ (function () {
    function IdentityVersionConverter() {
    }
    IdentityVersionConverter.prototype.upgradeExecuteCall = function (verb, parameters) {
        return {
            verb: verb,
            parameters: parameters
        };
    };
    IdentityVersionConverter.prototype.downgradeExecuteReturn = function (executeResponse) {
        return executeResponse;
    };
    IdentityVersionConverter.prototype.downgradeNotification = function (notification) {
        return notification;
    };
    return IdentityVersionConverter;
}());
exports.IdentityVersionConverter = IdentityVersionConverter;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid = __webpack_require__(14);
var CrossFramePreparedMessage_1 = __webpack_require__(34);
var MessageTypes_1 = __webpack_require__(9);
var MessageTypeChecks_1 = __webpack_require__(35);
/**
 * The CrossFrameMessenger is the primary export from the api-messaging module. An instance of
 * this class can be instantiated on both sides of a frame boundary to facilitate communication
 * in both directions between the frames. This class implements both the dispatcher and the listener
 * portions, but doesn't require callers to care about both.
 */
var CrossFrameMessenger = /** @class */ (function () {
    /**
     * Creates an instance of CrossFrameMessenger. If you would like to use the CrossFrameMessenger as a MessageListener,
     * be sure to call StartListening and register message handlers.
     * @param thisWindow The window object which the CrossFrameMessenger lives. An onMessage listener will be added here.
     * @param [otherWindow] Optional otherWindow which messages will be posted to.
     *                      If defined, incoming messages must originate from otherWindow to be passed on
     * @param [otherWindowOrigin] The target origin which otherWindow must have in order to receive dispatched messages.
     *                            This value will be sent as the targetOrigin of a postMessage
     *                            (https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
     */
    function CrossFrameMessenger(thisWindow, otherWindow, otherWindowOrigin) {
        this.thisWindow = thisWindow;
        this.otherWindow = otherWindow;
        this.otherWindowOrigin = otherWindowOrigin;
        // Make sure to call StartListening
    }
    ///// MessageListener Implementation
    CrossFrameMessenger.prototype.startListening = function () {
        var _this = this;
        // Check if we already are listening, if not, hook up a message listener
        if (!this.unregisterFunction) {
            var boundHandler_1 = this.onMessageReceived.bind(this);
            this.thisWindow.addEventListener('message', boundHandler_1, true);
            this.unregisterFunction = function () { return _this.thisWindow.removeEventListener('message', boundHandler_1, true); };
        }
    };
    CrossFrameMessenger.prototype.stopListening = function () {
        // Stop listening if we have started listening
        if (this.unregisterFunction) {
            this.unregisterFunction();
            this.unregisterFunction = undefined;
        }
    };
    CrossFrameMessenger.prototype.setInitializeMessageHandler = function (handler) {
        this.initializeMessageHandler = handler;
    };
    CrossFrameMessenger.prototype.setCommandResponseMessageHandler = function (handler) {
        this.commandResponseMessageHandler = handler;
    };
    CrossFrameMessenger.prototype.setCommandMessageHandler = function (handler) {
        this.commandMessageHandler = handler;
    };
    CrossFrameMessenger.prototype.setNotificationMessageHandler = function (handler) {
        this.notificationMessageHandler = handler;
    };
    ///// MessageDispatcher Implementation
    CrossFrameMessenger.prototype.prepareInitializationMessage = function (apiVersion, crossFrameVersion) {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.Initialize,
            crossFrameVersion: crossFrameVersion,
            apiVersion: apiVersion
        };
        return this.prepareMessage(message);
    };
    CrossFrameMessenger.prototype.prepareCommandMessage = function (verbId, parameters) {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.Command,
            verbId: verbId,
            parameters: parameters
        };
        return this.prepareMessage(message);
    };
    CrossFrameMessenger.prototype.prepareCommandResponseMessage = function (commandGuid, data, error) {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.CommandResponse,
            commandGuid: commandGuid,
            data: data,
            error: error
        };
        return this.prepareMessage(message);
    };
    CrossFrameMessenger.prototype.prepareNotificationMessage = function (notificationId, data) {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.Notification,
            notificationId: notificationId,
            data: data
        };
        return this.prepareMessage(message);
    };
    /**
     * Prepares a pending message for sending and returns the prepared message
     *
     * @param msg The message to be sent to this.otherWindow
     * @returns The prepared message
     */
    CrossFrameMessenger.prototype.prepareMessage = function (msg) {
        if (!this.otherWindow || !this.otherWindowOrigin) {
            throw 'Other window not initialized, cannot dispatch messages';
        }
        var preparedMessage = new CrossFramePreparedMessage_1.CrossFramePreparedMessage(msg, this.otherWindow, this.otherWindowOrigin);
        return preparedMessage;
    };
    /**
     * Called when a message is received. Does some validation of the message, and then
     * calls an appropriate message handler if one is defined
     *
     * @param event The incoming MessageEvent
     */
    CrossFrameMessenger.prototype.onMessageReceived = function (event) {
        // If we have an otherWindow defined, make sure the message is coming from there
        if (this.otherWindow && event.source !== this.otherWindow) {
            return;
        }
        // Do some validation on event.data to make sure that we have received a real message
        if (!event.data) {
            return;
        }
        var message = event.data;
        if (!MessageTypeChecks_1.isMessage(message)) {
            return;
        }
        // Check the declared message type, validate the message, and call an appropriate hander if one exists
        switch (message.msgType) {
            case MessageTypes_1.MessageType.Initialize: {
                if (!MessageTypeChecks_1.isInitMessage(message) || !this.initializeMessageHandler) {
                    return;
                }
                this.initializeMessageHandler(message, event.source);
                break;
            }
            case MessageTypes_1.MessageType.CommandResponse: {
                if (!MessageTypeChecks_1.isCommandResponseMessage(message) || !this.commandResponseMessageHandler) {
                    return;
                }
                this.commandResponseMessageHandler(message, event.source);
                break;
            }
            case MessageTypes_1.MessageType.Command: {
                if (!MessageTypeChecks_1.isCommandMessage(message) || !this.commandMessageHandler) {
                    return;
                }
                this.commandMessageHandler(message, event.source);
                break;
            }
            case MessageTypes_1.MessageType.Notification: {
                if (!MessageTypeChecks_1.isNotificationMessage(message) || !this.notificationMessageHandler) {
                    return;
                }
                this.notificationMessageHandler(message, event.source);
                break;
            }
            default:
        }
    };
    return CrossFrameMessenger;
}());
exports.CrossFrameMessenger = CrossFrameMessenger;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the PreparedMessage interface used to post messages between
 * two frames using window.postMessage
 */
var CrossFramePreparedMessage = /** @class */ (function () {
    /**
     * Creates an instance of CrossFramePreparedMessage.
     * @param _message The message to be sent
     * @param _target The target window where the message will be sent
     * @param _origin The targetOrigin where this message can be received
     */
    function CrossFramePreparedMessage(_message, _target, _origin) {
        this._message = _message;
        this._target = _target;
        this._origin = _origin;
    }
    Object.defineProperty(CrossFramePreparedMessage.prototype, "messageGuid", {
        get: function () { return this._message.msgGuid; },
        enumerable: true,
        configurable: true
    });
    CrossFramePreparedMessage.prototype.send = function () {
        this._target.postMessage(this._message, this._origin);
        return this;
    };
    return CrossFramePreparedMessage;
}());
exports.CrossFramePreparedMessage = CrossFramePreparedMessage;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid = __webpack_require__(14);
var MessageTypes_1 = __webpack_require__(9);
/* tslint:disable no-any */
function isMessage(data) {
    if (!data) {
        return false;
    }
    var message = data;
    if (!message || !message.msgGuid || !message.msgType) {
        return false;
    }
    if (!guid.isGuid(message.msgGuid)) {
        return false;
    }
    if (typeof message.msgType !== 'string') {
        return false;
    }
    var messageTypes = [MessageTypes_1.MessageType.Command, MessageTypes_1.MessageType.CommandResponse, MessageTypes_1.MessageType.Initialize, MessageTypes_1.MessageType.Notification];
    if (messageTypes.indexOf(message.msgType) < 0) {
        return false;
    }
    return true;
}
exports.isMessage = isMessage;
function isVersion(versionNumber) {
    if (!versionNumber) {
        return false;
    }
    var v = versionNumber;
    if (typeof v !== 'object') {
        return false;
    }
    if (typeof v.fix !== 'number' || typeof v.minor !== 'number' || typeof v.major !== 'number') {
        return false;
    }
    return true;
}
exports.isVersion = isVersion;
function isInitMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var initMessage = message;
    if (initMessage.msgType !== MessageTypes_1.MessageType.Initialize) {
        return false;
    }
    if (!initMessage.apiVersion || !isVersion(initMessage.apiVersion)) {
        return false;
    }
    if (!initMessage.crossFrameVersion || !isVersion(initMessage.crossFrameVersion)) {
        return false;
    }
    return true;
}
exports.isInitMessage = isInitMessage;
function isCommandResponseMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var crMessage = message;
    if (crMessage.msgType !== MessageTypes_1.MessageType.CommandResponse) {
        return false;
    }
    if (!guid.isGuid(crMessage.commandGuid)) {
        return false;
    }
    if (!crMessage.data && !crMessage.error) {
        return false;
    }
    return true;
}
exports.isCommandResponseMessage = isCommandResponseMessage;
function isCommandMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var commandMessage = message;
    if (commandMessage.msgType !== MessageTypes_1.MessageType.Command) {
        return false;
    }
    if (!commandMessage.parameters || typeof commandMessage.parameters !== 'object') {
        return false;
    }
    if (!commandMessage.verbId || typeof commandMessage.verbId !== 'string') {
        return false;
    }
    return true;
}
exports.isCommandMessage = isCommandMessage;
function isNotificationMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var notificationMessage = message;
    if (notificationMessage.msgType !== MessageTypes_1.MessageType.Notification) {
        return false;
    }
    if (!notificationMessage.data) {
        return false;
    }
    if (!notificationMessage.notificationId || typeof notificationMessage.notificationId !== 'string') {
        return false;
    }
    return true;
}
exports.isNotificationMessage = isNotificationMessage;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sheet_1 = __webpack_require__(15);
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard(_dashboardImpl) {
        var _this = _super.call(this, _dashboardImpl) || this;
        _this._dashboardImpl = _dashboardImpl;
        _dashboardImpl.initializeWithPublicInterfaces(_this);
        return _this;
    }
    Object.defineProperty(Dashboard.prototype, "worksheets", {
        get: function () {
            return this._dashboardImpl.worksheets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "objects", {
        get: function () {
            return this._dashboardImpl.objects;
        },
        enumerable: true,
        configurable: true
    });
    return Dashboard;
}(Sheet_1.Sheet));
exports.Dashboard = Dashboard;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(2);
/**
 * Represents the current version of the extensions library
 */
var VersionNumber = /** @class */ (function () {
    // private constructor so everyone uses the singleton instance
    function VersionNumber(versionString) {
        var parts = versionString.split('.').map(function (p) { return parseInt(p, 10); });
        if (parts.length !== 3) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, "Invalid version number: " + versionString);
        }
        this.major = parts[0];
        this.minor = parts[1];
        this.fix = parts[2];
    }
    Object.defineProperty(VersionNumber, "Instance", {
        /**
         * Gets the singleton instance of the version number.
         */
        get: function () {
            return VersionNumber._instance;
        },
        enumerable: true,
        configurable: true
    });
    VersionNumber.SetVersionNumber = function (numString) {
        VersionNumber._instance = new VersionNumber(numString);
    };
    Object.defineProperty(VersionNumber.prototype, "formattedValue", {
        get: function () {
            return this.major + "." + this.minor + "." + this.fix;
        },
        enumerable: true,
        configurable: true
    });
    return VersionNumber;
}());
exports.VersionNumber = VersionNumber;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var DashboardObject_1 = __webpack_require__(39);
var InternalToExternalEnumMappings_1 = __webpack_require__(7);
var Point_1 = __webpack_require__(40);
var Size_1 = __webpack_require__(41);
var Worksheet_1 = __webpack_require__(42);
var SheetImpl_1 = __webpack_require__(18);
var SheetInfoImpl_1 = __webpack_require__(43);
var WorksheetImpl_1 = __webpack_require__(44);
var ErrorHelpers_1 = __webpack_require__(5);
var DashboardImpl = /** @class */ (function (_super) {
    __extends(DashboardImpl, _super);
    function DashboardImpl(_info, _sheetPath) {
        var _this = _super.call(this, new SheetInfoImpl_1.SheetInfoImpl(_info.name, Contract.SheetType.Dashboard, new Size_1.Size(_info.size.h, _info.size.w))) || this;
        _this._info = _info;
        _this._sheetPath = _sheetPath;
        return _this;
    }
    Object.defineProperty(DashboardImpl.prototype, "worksheets", {
        get: function () {
            return this._worksheets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardImpl.prototype, "objects", {
        get: function () {
            return this._objects;
        },
        enumerable: true,
        configurable: true
    });
    DashboardImpl.prototype.initializeWithPublicInterfaces = function (dashboard) {
        ErrorHelpers_1.ErrorHelpers.verifyInternalValue(dashboard, 'dashboard');
        this._worksheets = new Array();
        this._objects = new Array();
        // Process all the zones which are contained in this dashboard
        for (var _i = 0, _a = this._info.zones; _i < _a.length; _i++) {
            var zone = _a[_i];
            var worksheet = undefined;
            var zoneSize = new Size_1.Size(zone.height, zone.width);
            if (zone.zoneType === api_internal_contract_js_1.DashboardObjectType.Worksheet) {
                var sheetInfo = new SheetInfoImpl_1.SheetInfoImpl(zone.name, Contract.SheetType.Worksheet, zoneSize);
                var vizId = {
                    worksheet: zone.name,
                    dashboard: this._info.name,
                    storyboard: this._sheetPath.storyboard,
                    flipboardZoneID: this._sheetPath.flipboardZoneID,
                    storyPointID: this._sheetPath.storyPointID
                };
                var worksheetImpl = new WorksheetImpl_1.WorksheetImpl(sheetInfo, vizId, dashboard);
                worksheet = new Worksheet_1.Worksheet(worksheetImpl);
                this._worksheets.push(worksheet);
            }
            var zonePoint = new Point_1.Point(zone.x, zone.y);
            var dashboardObject = new DashboardObject_1.DashboardObject(dashboard, InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dashboardObjectType.convert(zone.zoneType), zonePoint, zoneSize, worksheet);
            this._objects.push(dashboardObject);
        }
    };
    return DashboardImpl;
}(SheetImpl_1.SheetImpl));
exports.DashboardImpl = DashboardImpl;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the dashboard objects - the zones in a dashboard.
 * This does not follow the Impl pattern as it is just a property bag.
 */
var DashboardObject = /** @class */ (function () {
    function DashboardObject(_dashboard, _type, _position, _size, _worksheet) {
        this._dashboard = _dashboard;
        this._type = _type;
        this._position = _position;
        this._size = _size;
        this._worksheet = _worksheet;
    }
    Object.defineProperty(DashboardObject.prototype, "dashboard", {
        get: function () {
            return this._dashboard;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "worksheet", {
        get: function () {
            return this._worksheet;
        },
        enumerable: true,
        configurable: true
    });
    return DashboardObject;
}());
exports.DashboardObject = DashboardObject;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Size = /** @class */ (function () {
    function Size(_height, _width) {
        this._height = _height;
        this._width = _width;
    }
    Object.defineProperty(Size.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Size.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    return Size;
}());
exports.Size = Size;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sheet_1 = __webpack_require__(15);
var Worksheet = /** @class */ (function (_super) {
    __extends(Worksheet, _super);
    function Worksheet(_worksheetImpl) {
        var _this = _super.call(this, _worksheetImpl) || this;
        _this._worksheetImpl = _worksheetImpl;
        // Call to initialize events and then call down to the event listener manager to handle things
        _this._worksheetImpl.initializeEvents(_this).forEach(function (e) { return _this.addNewEventType(e); });
        return _this;
    }
    Object.defineProperty(Worksheet.prototype, "parentDashboard", {
        get: function () {
            return this._worksheetImpl.parentDashboard;
        },
        enumerable: true,
        configurable: true
    });
    Worksheet.prototype.applyFilterAsync = function (fieldName, values, updateType, options) {
        return this._worksheetImpl.applyFilterAsync(fieldName, values, updateType, options);
    };
    Worksheet.prototype.applyRangeFilterAsync = function (fieldName, filterOptions) {
        return this._worksheetImpl.applyRangeFilterAsync(fieldName, filterOptions);
    };
    Worksheet.prototype.clearFilterAsync = function (fieldName) {
        return this._worksheetImpl.clearFilterAsync(fieldName);
    };
    Worksheet.prototype.getDataSourcesAsync = function () {
        return this._worksheetImpl.getDataSourcesAsync();
    };
    Worksheet.prototype.getFiltersAsync = function () {
        return this._worksheetImpl.getFiltersAsync();
    };
    Worksheet.prototype.getSelectedMarksAsync = function () {
        return this._worksheetImpl.getSelectedMarksAsync();
    };
    Worksheet.prototype.getHighlightedMarksAsync = function () {
        return this._worksheetImpl.getHighlightedMarksAsync();
    };
    Worksheet.prototype.getSummaryDataAsync = function (options) {
        return this._worksheetImpl.getSummaryDataAsync(options);
    };
    Worksheet.prototype.getUnderlyingDataAsync = function (options) {
        return this._worksheetImpl.getUnderlyingDataAsync(options);
    };
    Worksheet.prototype.clearSelectedMarksAsync = function () {
        return this._worksheetImpl.clearSelectedMarksAsync();
    };
    Worksheet.prototype.selectMarksByIDAsync = function (marksInfo, updateType) {
        return this._worksheetImpl.selectMarksByIdAsync(marksInfo, updateType);
    };
    Worksheet.prototype.selectMarksByValueAsync = function (selections, selectionUpdateType) {
        return this._worksheetImpl.selectMarksByValueAsync(selections, selectionUpdateType);
    };
    Worksheet.prototype.selectMarksByIdAsync = function (selections, selectionUpdateType) {
        return this._worksheetImpl.selectMarksByIdAsync(selections, selectionUpdateType);
    };
    return Worksheet;
}(Sheet_1.Sheet));
exports.Worksheet = Worksheet;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var SheetInfoImpl = /** @class */ (function () {
    function SheetInfoImpl(_name, _sheetType, _sheetSize) {
        this._name = _name;
        this._sheetType = _sheetType;
        this._sheetSize = _sheetSize;
    }
    Object.defineProperty(SheetInfoImpl.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetInfoImpl.prototype, "sheetSize", {
        get: function () {
            return this._sheetSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetInfoImpl.prototype, "sheetType", {
        get: function () {
            return this._sheetType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetInfoImpl.prototype, "sheetPath", {
        get: function () {
            return {
                sheetName: this.name,
                isDashboard: this.sheetType === SharedApiExternalContract_1.SheetType.Dashboard
                // TODO - Stories
            };
        },
        enumerable: true,
        configurable: true
    });
    return SheetInfoImpl;
}());
exports.SheetInfoImpl = SheetInfoImpl;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var DataSource_1 = __webpack_require__(45);
var DataSourceImpl_1 = __webpack_require__(46);
var SheetImpl_1 = __webpack_require__(18);
var SingleEventManagerImpl_1 = __webpack_require__(11);
var FilterChangedEvent_1 = __webpack_require__(51);
var MarksSelectedEvent_1 = __webpack_require__(52);
var GetDataService_1 = __webpack_require__(21);
var ServiceRegistry_1 = __webpack_require__(4);
var ErrorHelpers_1 = __webpack_require__(5);
var visualIdsAreEqual = function (a, b) {
    return a && b &&
        a.worksheet === b.worksheet &&
        a.dashboard === b.dashboard &&
        a.storyboard === b.storyboard &&
        a.storyPointID === b.storyPointID &&
        a.flipboardZoneID === b.flipboardZoneID;
};
var WorksheetImpl = /** @class */ (function (_super) {
    __extends(WorksheetImpl, _super);
    function WorksheetImpl(sheetInfoImpl, _visualId, _parentDashboard) {
        var _this = _super.call(this, sheetInfoImpl) || this;
        _this._visualId = _visualId;
        _this._parentDashboard = _parentDashboard;
        return _this;
    }
    Object.defineProperty(WorksheetImpl.prototype, "parentDashboard", {
        get: function () {
            return this._parentDashboard;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper method which goes through and registers each event type this impl knows about
     * with the NotificationService. It returns an array of SingleEventManager objects which
     * can then be passed to an EventListenerManager to handle user registration / unregistration.
     *
     * @param {Worksheet} worksheet The worksheet object which will be included with the event notifications
     * @returns {Array<SingleEventManager>} Collection of event managers to pass to an EventListenerManager
     */
    WorksheetImpl.prototype.initializeEvents = function (worksheet) {
        var _this = this;
        var results = new Array();
        var notificationService;
        try {
            notificationService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        }
        catch (e) {
            // If we don't have this service registered, just return
            return results;
        }
        // Initialize all of the event managers we'll need (one for each event type)
        var marksEvent = new SingleEventManagerImpl_1.SingleEventManagerImpl(Contract.TableauEventType.MarkSelectionChanged);
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.SelectedMarksChanged, function (model) {
            var visualId = model;
            return visualIdsAreEqual(visualId, _this.visualId);
        }, function (viz) {
            marksEvent.triggerEvent(function () { return new MarksSelectedEvent_1.MarksSelectedEvent(worksheet); });
        });
        var filterEvent = new SingleEventManagerImpl_1.SingleEventManagerImpl(Contract.TableauEventType.FilterChanged);
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.FilterChanged, function (model) {
            var filterEventResponse = model;
            return _this.visualId.worksheet === filterEventResponse.visualId.worksheet;
        }, function (event) {
            filterEvent.triggerEvent(function () { return new FilterChangedEvent_1.FilterChangedEvent(worksheet, event.fieldName); });
        });
        results.push(marksEvent);
        results.push(filterEvent);
        // TODO - other event types
        return results;
    };
    Object.defineProperty(WorksheetImpl.prototype, "visualId", {
        get: function () {
            return this._visualId;
        },
        enumerable: true,
        configurable: true
    });
    WorksheetImpl.prototype.applyFilterAsync = function (fieldName, values, updateType, options) {
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(updateType, Contract.FilterUpdateType);
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.applyFilterAsync(this.visualId, fieldName, values, updateType, options);
    };
    WorksheetImpl.prototype.applyRangeFilterAsync = function (fieldName, filterOptions) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(fieldName, 'fieldName');
        ErrorHelpers_1.ErrorHelpers.verifyParameter(filterOptions, 'filterOptions');
        ErrorHelpers_1.ErrorHelpers.verifyRangeParamType(filterOptions.min, filterOptions.max);
        if (filterOptions.nullOption) {
            ErrorHelpers_1.ErrorHelpers.verifyEnumValue(filterOptions.nullOption, Contract.FilterNullOption);
        }
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.applyRangeFilterAsync(this.visualId, fieldName, filterOptions);
    };
    WorksheetImpl.prototype.clearFilterAsync = function (fieldName) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(fieldName, 'fieldName');
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.clearFilterAsync(this.visualId, fieldName);
    };
    WorksheetImpl.prototype.getDataSourcesAsync = function () {
        var _this = this;
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return service.getDataSourcesAsync(this.visualId).then(function (result) {
            var dataSchema = result;
            var worksheetDataSourceInfo = dataSchema.worksheetDataSchemaMap[_this.name];
            var dataSources = [];
            // First, add the primary datasource.  By convention, it comes first in the returned array.
            var primaryId = worksheetDataSourceInfo.primaryDataSource;
            dataSources.push(_this.createDataSourceFromInfo(dataSchema.dataSources[primaryId]));
            // Then, loop through any secondary data sources and add them.
            for (var _i = 0, _a = worksheetDataSourceInfo.referencedDataSourceList; _i < _a.length; _i++) {
                var secondaryId = _a[_i];
                if (secondaryId !== primaryId) {
                    dataSources.push(_this.createDataSourceFromInfo(dataSchema.dataSources[secondaryId]));
                }
            }
            return dataSources;
        });
    };
    WorksheetImpl.prototype.getFiltersAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.getFiltersAsync(this.visualId);
    };
    WorksheetImpl.prototype.getSelectedMarksAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        return service.getSelectedMarksAsync(this.visualId);
    };
    WorksheetImpl.prototype.getHighlightedMarksAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        return service.getHighlightedMarksAsync(this.visualId);
    };
    WorksheetImpl.prototype.getSummaryDataAsync = function (options) {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        options = options || {};
        return service.getUnderlyingDataAsync(this.visualId, GetDataService_1.GetDataType.Summary, !!options.ignoreAliases, !!options.ignoreSelection, true, 0);
    };
    WorksheetImpl.prototype.getUnderlyingDataAsync = function (options) {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        options = options || {};
        return service.getUnderlyingDataAsync(this.visualId, GetDataService_1.GetDataType.Underlying, !!options.ignoreAliases, !!options.ignoreSelection, !!options.includeAllColumns, options.maxRows || 0);
    };
    WorksheetImpl.prototype.clearSelectedMarksAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("selection-service" /* Selection */);
        return service.clearSelectedMarksAsync(this.visualId);
    };
    WorksheetImpl.prototype.selectMarksByValueAsync = function (selections, selectionUpdateType) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(selections, 'fieldName');
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(selectionUpdateType, Contract.SelectionUpdateType);
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("selection-service" /* Selection */);
        return service.selectMarksByValueAsync(this.visualId, selections, selectionUpdateType);
    };
    WorksheetImpl.prototype.selectMarksByIdAsync = function (selections, selectionUpdateType) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(selections, 'fieldName');
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(selectionUpdateType, Contract.SelectionUpdateType);
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("selection-service" /* Selection */);
        return service.selectMarksByIdAsync(this.visualId, selections, selectionUpdateType);
    };
    WorksheetImpl.prototype.createDataSourceFromInfo = function (dataSourceInfo) {
        var dataSourceImpl = new DataSourceImpl_1.DataSourceImpl(dataSourceInfo);
        var dataSource = new DataSource_1.DataSource(dataSourceImpl);
        dataSourceImpl.initializeWithPublicInterfaces(dataSource);
        return dataSource;
    };
    return WorksheetImpl;
}(SheetImpl_1.SheetImpl));
exports.WorksheetImpl = WorksheetImpl;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataSource = /** @class */ (function () {
    function DataSource(_dataSourceImpl) {
        this._dataSourceImpl = _dataSourceImpl;
    }
    Object.defineProperty(DataSource.prototype, "name", {
        get: function () {
            return this._dataSourceImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "id", {
        get: function () {
            return this._dataSourceImpl.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "fields", {
        get: function () {
            return this._dataSourceImpl.fields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "extractUpdateTime", {
        get: function () {
            return this._dataSourceImpl.extractUpdateTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "isExtract", {
        get: function () {
            return this._dataSourceImpl.isExtract;
        },
        enumerable: true,
        configurable: true
    });
    DataSource.prototype.refreshAsync = function () {
        return this._dataSourceImpl.refreshAsync();
    };
    DataSource.prototype.getActiveTablesAsync = function () {
        return this._dataSourceImpl.getActiveTablesAsync();
    };
    DataSource.prototype.getConnectionSummariesAsync = function () {
        return this._dataSourceImpl.getConnectionSummariesAsync();
    };
    DataSource.prototype.getUnderlyingDataAsync = function (options) {
        return this._dataSourceImpl.getUnderlyingDataAsync(options);
    };
    return DataSource;
}());
exports.DataSource = DataSource;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FieldImpl_1 = __webpack_require__(47);
var ConnectionSummary_1 = __webpack_require__(48);
var Field_1 = __webpack_require__(49);
var TableSummary_1 = __webpack_require__(50);
var ServiceRegistry_1 = __webpack_require__(4);
var ErrorHelpers_1 = __webpack_require__(5);
var DataSourceImpl = /** @class */ (function () {
    function DataSourceImpl(_dataSourceInfo) {
        var _this = this;
        this._dataSourceInfo = _dataSourceInfo;
        this._fields = _dataSourceInfo.fields.map(function (fieldModel) {
            var fieldImpl = new FieldImpl_1.FieldImpl(fieldModel, _this);
            return new Field_1.Field(fieldImpl);
        });
    }
    Object.defineProperty(DataSourceImpl.prototype, "name", {
        get: function () {
            return this._dataSourceInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceImpl.prototype, "id", {
        get: function () {
            return this._dataSourceInfo.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceImpl.prototype, "extractUpdateTime", {
        get: function () {
            return this._dataSourceInfo.extractUpdateTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceImpl.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceImpl.prototype, "isExtract", {
        get: function () {
            return this._dataSourceInfo.isExtract;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceImpl.prototype.refreshAsync = function () {
        var dataSourceService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return dataSourceService.refreshAsync(this._dataSourceInfo.id);
    };
    DataSourceImpl.prototype.getConnectionSummariesAsync = function () {
        var dataSourceService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return dataSourceService.getConnectionSummariesAsync(this._dataSourceInfo.id).then(function (summaries) {
            return summaries.map(function (summary) { return new ConnectionSummary_1.ConnectionSummary(summary); });
        });
    };
    DataSourceImpl.prototype.getActiveTablesAsync = function () {
        var dataSourceService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return dataSourceService.getActiveTablesAsync(this._dataSourceInfo.id).then(function (tableInfos) {
            return tableInfos.map(function (tableInfo) { return new TableSummary_1.TableSummary(tableInfo); });
        });
    };
    DataSourceImpl.prototype.getUnderlyingDataAsync = function (options) {
        var defaultOptions = {
            ignoreAliases: false,
            maxRows: 10000,
            columnsToInclude: [],
        };
        options = options || {};
        var getDataService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        return getDataService.getDataSourceDataAsync(this.id, !!options.ignoreAliases, options.maxRows || defaultOptions.maxRows, options.columnsToInclude || defaultOptions.columnsToInclude);
    };
    DataSourceImpl.prototype.initializeWithPublicInterfaces = function (dataSource) {
        ErrorHelpers_1.ErrorHelpers.verifyInternalValue(dataSource, 'dataSource');
        this._fields = this._dataSourceInfo.fields.map(function (fieldModel) {
            var fieldImpl = new FieldImpl_1.FieldImpl(fieldModel, dataSource);
            return new Field_1.Field(fieldImpl);
        });
    };
    return DataSourceImpl;
}());
exports.DataSourceImpl = DataSourceImpl;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InternalToExternalEnumMappings_1 = __webpack_require__(7);
var FieldImpl = /** @class */ (function () {
    function FieldImpl(_fieldInfo, _parentDataSource) {
        this._fieldInfo = _fieldInfo;
        this._parentDataSource = _parentDataSource;
    }
    Object.defineProperty(FieldImpl.prototype, "name", {
        get: function () {
            return this._fieldInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "id", {
        get: function () {
            return this._fieldInfo.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "description", {
        get: function () {
            return this._fieldInfo.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "aggregation", {
        get: function () {
            return InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.fieldAggregationType.convert(this._fieldInfo.aggregation);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "dataSource", {
        get: function () {
            return this._parentDataSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "role", {
        get: function () {
            return InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.fieldRoleType.convert(this._fieldInfo.role);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "isHidden", {
        get: function () {
            return this._fieldInfo.isHidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "isGenerated", {
        get: function () {
            return this._fieldInfo.isGenerated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "isCalculatedField", {
        get: function () {
            return this._fieldInfo.isCalculatedField;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "isCombinedField", {
        get: function () {
            return this._fieldInfo.isCombinedField;
        },
        enumerable: true,
        configurable: true
    });
    return FieldImpl;
}());
exports.FieldImpl = FieldImpl;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of a connection summary.
 * This does not follow the Impl pattern as it is just a property bag.
 */
var ConnectionSummary = /** @class */ (function () {
    function ConnectionSummary(_connectionInfo) {
        this._connectionInfo = _connectionInfo;
    }
    Object.defineProperty(ConnectionSummary.prototype, "name", {
        get: function () {
            return this._connectionInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionSummary.prototype, "id", {
        get: function () {
            return this._connectionInfo.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionSummary.prototype, "serverURI", {
        get: function () {
            return this._connectionInfo.serverURI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionSummary.prototype, "type", {
        get: function () {
            return this._connectionInfo.type;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionSummary;
}());
exports.ConnectionSummary = ConnectionSummary;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ErrorHelpers_1 = __webpack_require__(5);
var Field = /** @class */ (function () {
    function Field(_fieldImpl) {
        this._fieldImpl = _fieldImpl;
    }
    Object.defineProperty(Field.prototype, "name", {
        get: function () {
            return this._fieldImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "id", {
        get: function () {
            return this._fieldImpl.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "description", {
        get: function () {
            return this._fieldImpl.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "aggregation", {
        get: function () {
            return this._fieldImpl.aggregation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "dataSource", {
        get: function () {
            return this._fieldImpl.dataSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "role", {
        get: function () {
            return this._fieldImpl.role;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "isHidden", {
        get: function () {
            return this._fieldImpl.isHidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "isGenerated", {
        get: function () {
            return this._fieldImpl.isGenerated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "isCalculatedField", {
        get: function () {
            return this._fieldImpl.isCalculatedField;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "columnType", {
        get: function () {
            throw ErrorHelpers_1.ErrorHelpers.apiNotImplemented('Field.columnType');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "isCombinedField", {
        get: function () {
            return this._fieldImpl.isCombinedField;
        },
        enumerable: true,
        configurable: true
    });
    return Field;
}());
exports.Field = Field;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of a table summary.
 * This does not follow the Impl pattern as it is just a property bag.
 */
var TableSummary = /** @class */ (function () {
    function TableSummary(_tableInfo) {
        this._tableInfo = _tableInfo;
    }
    Object.defineProperty(TableSummary.prototype, "name", {
        get: function () {
            return this._tableInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableSummary.prototype, "id", {
        get: function () {
            return this._tableInfo.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableSummary.prototype, "connectionId", {
        get: function () {
            return this._tableInfo.connectionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableSummary.prototype, "customSQL", {
        get: function () {
            return this._tableInfo.customSQL;
        },
        enumerable: true,
        configurable: true
    });
    return TableSummary;
}());
exports.TableSummary = TableSummary;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var TableauError_1 = __webpack_require__(2);
var TableauWorksheetEvent_1 = __webpack_require__(19);
var FilterChangedEvent = /** @class */ (function (_super) {
    __extends(FilterChangedEvent, _super);
    function FilterChangedEvent(worksheet, _fieldName) {
        var _this = _super.call(this, Contract.TableauEventType.FilterChanged, worksheet) || this;
        _this._fieldName = _fieldName;
        return _this;
    }
    Object.defineProperty(FilterChangedEvent.prototype, "fieldName", {
        get: function () {
            return this._fieldName;
        },
        enumerable: true,
        configurable: true
    });
    FilterChangedEvent.prototype.getFilterAsync = function () {
        var _this = this;
        return this._worksheet.getFiltersAsync().then(function (filters) {
            // TODO: Filtering of the filters should eventually be done platform side.
            var eventedFilter = filters.find(function (filter) { return (filter.fieldName === _this._fieldName); });
            if (!eventedFilter) {
                // We shouldn't hit this unless the filter was removed from the worksheet
                // after the event was raised.
                throw new TableauError_1.TableauError(Contract.ErrorCodes.MissingFilter, "cannot find filter: " + _this._fieldName);
            }
            return eventedFilter;
        });
    };
    return FilterChangedEvent;
}(TableauWorksheetEvent_1.TableauWorksheetEvent));
exports.FilterChangedEvent = FilterChangedEvent;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var TableauWorksheetEvent_1 = __webpack_require__(19);
var MarksSelectedEvent = /** @class */ (function (_super) {
    __extends(MarksSelectedEvent, _super);
    function MarksSelectedEvent(worksheet) {
        return _super.call(this, Contract.TableauEventType.MarkSelectionChanged, worksheet) || this;
    }
    MarksSelectedEvent.prototype.getMarksAsync = function () {
        return this.worksheet.getSelectedMarksAsync();
    };
    return MarksSelectedEvent;
}(TableauWorksheetEvent_1.TableauWorksheetEvent));
exports.MarksSelectedEvent = MarksSelectedEvent;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_internal_contract_js_1 = __webpack_require__(1);
var CrossFrameDispatcher_1 = __webpack_require__(54);
// Checks to see if we are running in an iframe currently: https://stackoverflow.com/a/326076/8821153
function inIframe(thisWindow) {
    try {
        return thisWindow.self !== thisWindow.parent;
    }
    catch (e) {
        return true;
    }
}
/**
 * Attempts to bootstrap the extension with a cross-frame parent where Tableau is running
 *
 * @param thisWindow The window which we are running in (injected for unit testing purposes)
 * @param internalContractVersion The version number of the internal contract we are using
 * @returns A promise which is doing the actual bootstrapping
 */
function doCrossFrameBootstrap(thisWindow, internalContractVersion) {
    return new Promise(function (resolve, reject) {
        var parent;
        // Normally, we are running inside an iframe.  The exception to this is
        // when we are running as an extension inside a dialog as part of the UINamespace
        // functionality.  In that case, we want the opener of this window rather than the parent.
        if (!inIframe(thisWindow)) {
            parent = thisWindow.opener;
        }
        else {
            parent = thisWindow.parent;
        }
        if (!parent) {
            reject('This extension is not running inside an iframe, desktop, or popup window. Initialization failed.');
        }
        // Create the messenger which will do he communication between this window and our parent
        // Since we don't know where we are running yet, we have to make this initial origin '*'. Once
        // we have successfully initialized our extension, we will limit where we send messages
        var messenger = new api_internal_contract_js_1.CrossFrameMessenger(thisWindow, parent, '*');
        // Prepare to send an initialization message to the parent frame
        var initializationMessage = messenger.prepareInitializationMessage(internalContractVersion, api_internal_contract_js_1.MESSAGING_VERSION);
        // When we receive a response back from the parent, we check to make sure the guids match and then we know
        // that the parent is aware of us and we can start communicating
        messenger.setCommandResponseMessageHandler(function (msg) {
            // Verify we are getting a response from our initialize message
            if (msg.commandGuid === initializationMessage.messageGuid) {
                // For server, the versioning of the factory is gonna happen on the other side of our frame, so just return the
                // one which doesn't have any version knowledge
                var dispatcherFactory = function () { return new CrossFrameDispatcher_1.CrossFrameDispatcher(messenger); };
                resolve(dispatcherFactory);
            }
        });
        // Now that our handlers are ready, start listening and send our initialization message
        messenger.startListening();
        initializationMessage.send();
    });
}
exports.doCrossFrameBootstrap = doCrossFrameBootstrap;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is an implementation of the InternalApiDispatcher interface which functions by passing messages
 * across a frame boundary. This is usually between the code where our javscript library has been included
 * by a 3rd party dev and another frame where Tableau server has content.
 */
var CrossFrameDispatcher = /** @class */ (function () {
    /**
     * Creates an instance of CrossFrameDispatcher which will use the given messenger to communicate
     * @param _messenger an instantiated and listening messenger object
     */
    function CrossFrameDispatcher(_messenger) {
        this._messenger = _messenger;
        // Collection of pending promises which are waiting to be resolved. When we receive a response back from the other frame,
        // these promises can be either resolved or rejected
        this._pendingPromises = {};
        // The collection of notification handlers which have been registered with this dispatcher
        this._notificationHandlers = [];
        if (!this._messenger) {
            throw 'Missing messenger object';
        }
        // Set up our message handlers. We only care about incoming notifications and command responses
        this._messenger.setCommandResponseMessageHandler(this.onCommandResponse.bind(this));
        this._messenger.setNotificationMessageHandler(this.onNotification.bind(this));
    }
    ////// Start InternalApiDispatcher implementation
    CrossFrameDispatcher.prototype.execute = function (verb, parameters) {
        var _this = this;
        // To execute a verb, we first prepare a command message and then define a promise.
        var preparedMessage = this._messenger.prepareCommandMessage(verb, parameters);
        var promise = new Promise(function (resolve, reject) {
            // Save off the pending promise by the messageGuid we are about to send. When a response is
            // received, we'll be able to resolve this promise with the result
            _this._pendingPromises[preparedMessage.messageGuid] = { resolve: resolve, reject: reject };
        });
        // Actually send the message and return the promise
        preparedMessage.send();
        return promise;
    };
    CrossFrameDispatcher.prototype.registerNotificationHandler = function (handler) {
        this._notificationHandlers.push(handler);
    };
    CrossFrameDispatcher.prototype.unregisterNotificationHandler = function (handler) {
        this._notificationHandlers = this._notificationHandlers.filter(function (h) { return h !== handler; });
    };
    ////// End InternalApiDispatcher implementation
    CrossFrameDispatcher.prototype.onCommandResponse = function (response) {
        // We got a command response, look through the pending promises and resolve
        if (Object.keys(this._pendingPromises).indexOf(response.commandGuid) < 0) {
            return; // We don't have any reference to this command, just return
        }
        var pendingPromise = this._pendingPromises[response.commandGuid];
        // If we have an error defined, reject the promise
        if (response.error) {
            pendingPromise.reject(response.error);
        }
        // If we have data defined, resolve the promise
        if (response.data) {
            pendingPromise.resolve({ result: response.data });
        }
        // Clean up our pending promises object
        delete this._pendingPromises[response.commandGuid];
    };
    CrossFrameDispatcher.prototype.onNotification = function (notificationMessage) {
        // Go through each notification handler we have registered and let them know a notification came in
        for (var _i = 0, _a = this._notificationHandlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            try {
                handler({ notificationId: notificationMessage.notificationId, data: notificationMessage.data });
            }
            catch (e) {
                // Ignore this. Wrap in try/catch so if one handler errors, the other still get the message
            }
        }
    };
    return CrossFrameDispatcher;
}());
exports.CrossFrameDispatcher = CrossFrameDispatcher;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataSourceServiceImpl_1 = __webpack_require__(56);
var FilterServiceImpl_1 = __webpack_require__(57);
var GetDataServiceImpl_1 = __webpack_require__(60);
var NotificationServiceImpl_1 = __webpack_require__(61);
var ParametersServiceImpl_1 = __webpack_require__(62);
var SelectionServiceImpl_1 = __webpack_require__(66);
var ServiceRegistry_1 = __webpack_require__(4);
function registerAllSharedServices(dispatcher) {
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new DataSourceServiceImpl_1.DataSourceServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new GetDataServiceImpl_1.GetDataServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new FilterServiceImpl_1.FilterServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new NotificationServiceImpl_1.NotificationServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new ParametersServiceImpl_1.ParametersServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new SelectionServiceImpl_1.SelectionServiceImpl(dispatcher));
}
exports.registerAllSharedServices = registerAllSharedServices;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(8);
var TableauError_1 = __webpack_require__(2);
var DataSourceServiceImpl = /** @class */ (function (_super) {
    __extends(DataSourceServiceImpl, _super);
    function DataSourceServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataSourceServiceImpl.prototype, "serviceName", {
        get: function () {
            return "data-source-service" /* DataSourceService */;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceServiceImpl.prototype.refreshAsync = function (dataSourceId) {
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.RefreshDataSource, parameters).then(function (response) {
            return;
        });
        var _a;
    };
    DataSourceServiceImpl.prototype.getActiveTablesAsync = function (dataSourceId) {
        var joinParameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId, _a);
        // Get the description of the tables used by this connection
        return this.execute(api_internal_contract_js_1.VerbId.GetJoinDescription, joinParameters).then(function (joinResponse) {
            var joinDescription = joinResponse.result;
            // getActiveTables is unsupported for cubes and GA. We do not have a connection type property
            // available from the platform (intentionally, to reduce code churn as new connections are added).
            // Instead,just check if any tables are returned. This array will be empty for any non-table based datasource.
            if (joinDescription.tables.length === 0) {
                throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.UnsupportedMethodForDataSourceType, "getActiveTables is not supported for: " + dataSourceId);
            }
            return joinDescription.tables;
        });
        var _a;
    };
    DataSourceServiceImpl.prototype.getDataSourcesAsync = function (visualId) {
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetDataSources, parameters).then(function (response) {
            var dataSchema = response.result;
            return dataSchema;
        });
        var _a;
    };
    DataSourceServiceImpl.prototype.getConnectionSummariesAsync = function (dataSourceId) {
        var params = (_a = {}, _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId, _a);
        // Get the description of the tables used by this connection
        return this.execute(api_internal_contract_js_1.VerbId.GetConnectionDescriptionSummaries, params).then(function (response) {
            var descriptionSummaries = response.result;
            return descriptionSummaries;
        });
        var _a;
    };
    return DataSourceServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.DataSourceServiceImpl = DataSourceServiceImpl;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ExternalToInternalEnumMappings_1 = __webpack_require__(58);
var InternalToExternalEnumMappings_1 = __webpack_require__(7);
var FilterModels_1 = __webpack_require__(59);
var ServiceImplBase_1 = __webpack_require__(8);
var GetDataModels_1 = __webpack_require__(13);
var Param_1 = __webpack_require__(12);
var FilterServiceImpl = /** @class */ (function (_super) {
    __extends(FilterServiceImpl, _super);
    function FilterServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FilterServiceImpl.prototype, "serviceName", {
        get: function () {
            return "filter-service" /* Filter */;
        },
        enumerable: true,
        configurable: true
    });
    FilterServiceImpl.prototype.applyFilterAsync = function (visualId, fieldName, values, updateType, filterOptions) {
        var verb = api_internal_contract_js_1.VerbId.ApplyCategoricalFilter;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        parameters[api_internal_contract_js_1.ParameterId.FieldName] = fieldName;
        parameters[api_internal_contract_js_1.ParameterId.FilterValues] = values;
        parameters[api_internal_contract_js_1.ParameterId.FilterUpdateType] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.filterUpdateType.convert(updateType);
        parameters[api_internal_contract_js_1.ParameterId.IsExcludeMode] =
            (filterOptions === undefined || filterOptions.isExcludeMode === undefined) ? false : filterOptions.isExcludeMode;
        return this.execute(verb, parameters).then(function (response) {
            return fieldName;
        });
    };
    FilterServiceImpl.prototype.applyRangeFilterAsync = function (visualId, fieldName, filterOptions) {
        var verb = api_internal_contract_js_1.VerbId.ApplyRangeFilter;
        var parameters = {};
        if (filterOptions.min) {
            var min = void 0;
            if (filterOptions.min instanceof Date) {
                min = Param_1.Param.serializeDateForPlatform(filterOptions.min);
            }
            else {
                min = filterOptions.min;
            }
            parameters[api_internal_contract_js_1.ParameterId.FilterRangeMin] = min;
        }
        if (filterOptions.max) {
            var max = void 0;
            if (filterOptions.max instanceof Date) {
                max = Param_1.Param.serializeDateForPlatform(filterOptions.max);
            }
            else {
                max = filterOptions.max;
            }
            parameters[api_internal_contract_js_1.ParameterId.FilterRangeMax] = max;
        }
        if (filterOptions.nullOption) {
            parameters[api_internal_contract_js_1.ParameterId.FilterRangeNullOption] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.nullOptions.convert(filterOptions.nullOption);
        }
        parameters[api_internal_contract_js_1.ParameterId.FieldName] = fieldName;
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        return this.execute(verb, parameters).then(function (response) {
            return fieldName;
        });
    };
    FilterServiceImpl.prototype.clearFilterAsync = function (visualId, fieldName) {
        var verb = api_internal_contract_js_1.VerbId.ClearFilter;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        parameters[api_internal_contract_js_1.ParameterId.FieldName] = fieldName;
        return this.execute(verb, parameters).then(function (resposne) {
            return fieldName;
        });
    };
    FilterServiceImpl.prototype.getFiltersAsync = function (visualId) {
        var _this = this;
        var verb = api_internal_contract_js_1.VerbId.GetFilters;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        return this.execute(verb, parameters).then(function (response) {
            var filters = response.result;
            return _this.convertDomainFilters(filters);
        });
    };
    FilterServiceImpl.prototype.getCategoricalDomainAsync = function (worksheetName, fieldId, domainType) {
        var _this = this;
        var verb = api_internal_contract_js_1.VerbId.GetCategoricalDomain;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = {
            worksheet: worksheetName
        };
        parameters[api_internal_contract_js_1.ParameterId.FieldId] = fieldId;
        parameters[api_internal_contract_js_1.ParameterId.DomainType] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.filterDomainType.convert(domainType);
        return this.execute(verb, parameters).then(function (response) {
            var domain = response.result;
            return _this.convertCategoricalDomain(domain, domainType);
        });
    };
    FilterServiceImpl.prototype.getRangeDomainAsync = function (worksheetName, fieldId, domainType) {
        var _this = this;
        var verb = api_internal_contract_js_1.VerbId.GetRangeDomain;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = {
            worksheet: worksheetName
        };
        parameters[api_internal_contract_js_1.ParameterId.FieldId] = fieldId;
        parameters[api_internal_contract_js_1.ParameterId.DomainType] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.filterDomainType.convert(domainType);
        return this.execute(verb, parameters).then(function (response) {
            var domain = response.result;
            return _this.convertRangeDomain(domain, domainType);
        });
    };
    // Helper Methods
    FilterServiceImpl.prototype.convertDomainFilters = function (domainFilters) {
        var _this = this;
        var filters = [];
        domainFilters.forEach(function (domainFilter) {
            switch (domainFilter.filterType) {
                case api_internal_contract_js_1.FilterType.Categorical: {
                    var filter = domainFilter;
                    if (filter) {
                        filters.push(_this.convertCategoricalFilter(filter));
                    }
                    else {
                        throw new Error('Invalid Categorical Filter');
                    }
                    break;
                }
                case api_internal_contract_js_1.FilterType.Range: {
                    var filter = domainFilter;
                    if (filter) {
                        filters.push(_this.convertRangeFilter(filter));
                    }
                    else {
                        throw new Error('Invalid Range Filter');
                    }
                    break;
                }
                case api_internal_contract_js_1.FilterType.RelativeDate: {
                    var filter = domainFilter;
                    if (filter) {
                        filters.push(_this.convertRelativeDateFilter(filter));
                    }
                    else {
                        throw new Error('Invalid Relative Date Filter');
                    }
                    break;
                }
                default: {
                    break;
                }
            }
        });
        return filters;
    };
    FilterServiceImpl.prototype.convertCategoricalFilter = function (domainFilter) {
        var appliedValues = domainFilter.values.map(function (dv) {
            return new GetDataModels_1.DataValue(dv.value, dv.formattedValue);
        });
        return new FilterModels_1.CategoricalFilter(domainFilter.visualId.worksheet, domainFilter.fieldCaption, domainFilter.fieldName, Contract.FilterType.Categorical, appliedValues, domainFilter.isExclude);
    };
    FilterServiceImpl.prototype.convertRangeFilter = function (domainFilter) {
        var minValue = new GetDataModels_1.DataValue(domainFilter.min.value, domainFilter.min.formattedValue);
        var maxValue = new GetDataModels_1.DataValue(domainFilter.max.value, domainFilter.max.formattedValue);
        return new FilterModels_1.RangeFilter(domainFilter.visualId.worksheet, domainFilter.fieldCaption, domainFilter.fieldName, Contract.FilterType.Range, minValue, maxValue, domainFilter.includeNullValues);
    };
    FilterServiceImpl.prototype.convertRelativeDateFilter = function (domainFilter) {
        var anchorDateValue = new GetDataModels_1.DataValue(domainFilter.anchorDate.value, domainFilter.anchorDate.formattedValue);
        return new FilterModels_1.RelativeDateFilter(domainFilter.visualId.worksheet, domainFilter.fieldCaption, domainFilter.fieldName, Contract.FilterType.RelativeDate, anchorDateValue, InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dateStepPeriod.convert(domainFilter.periodType), InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dateRangeType.convert(domainFilter.rangeType), domainFilter.rangeN);
    };
    FilterServiceImpl.prototype.convertCategoricalDomain = function (domain, domainType) {
        var values = domain.values.map(function (domainDv) {
            return new GetDataModels_1.DataValue(domainDv.value, domainDv.formattedValue);
        });
        return new FilterModels_1.CategoricalDomain(values, domainType);
    };
    FilterServiceImpl.prototype.convertRangeDomain = function (domain, domainType) {
        var min = new GetDataModels_1.DataValue(domain.min.value, domain.min.formattedValue);
        var max = new GetDataModels_1.DataValue(domain.max.value, domain.max.formattedValue);
        return new FilterModels_1.RangeDomain(min, max, domainType);
    };
    return FilterServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.FilterServiceImpl = FilterServiceImpl;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var EnumConverter_1 = __webpack_require__(16);
/* tslint:disable:typedef - Disable this to make declaring these classes a bit easier */
/**
 * Maps enums used by the external-api-contract to the enums used
 * in the internal-api-contract, which developers code against.
 */
var ExternalToInternalEnumMappings = /** @class */ (function () {
    function ExternalToInternalEnumMappings() {
    }
    ExternalToInternalEnumMappings.filterDomainType = new EnumConverter_1.EnumConverter((_a = {},
        _a[SharedApiExternalContract_1.FilterDomainType.Relevant] = api_internal_contract_js_1.FilterDomainType.Relevant,
        _a[SharedApiExternalContract_1.FilterDomainType.Database] = api_internal_contract_js_1.FilterDomainType.Database,
        _a));
    ExternalToInternalEnumMappings.nullOptions = new EnumConverter_1.EnumConverter((_b = {},
        _b[SharedApiExternalContract_1.FilterNullOption.AllValues] = api_internal_contract_js_1.FilterNullOption.AllValues,
        _b[SharedApiExternalContract_1.FilterNullOption.NonNullValues] = api_internal_contract_js_1.FilterNullOption.NonNullValues,
        _b[SharedApiExternalContract_1.FilterNullOption.NonNullValues] = api_internal_contract_js_1.FilterNullOption.NullValues,
        _b));
    ExternalToInternalEnumMappings.filterUpdateType = new EnumConverter_1.EnumConverter((_c = {},
        _c[SharedApiExternalContract_1.FilterUpdateType.Add] = api_internal_contract_js_1.FilterUpdateType.Add,
        _c[SharedApiExternalContract_1.FilterUpdateType.All] = api_internal_contract_js_1.FilterUpdateType.All,
        _c[SharedApiExternalContract_1.FilterUpdateType.Remove] = api_internal_contract_js_1.FilterUpdateType.Remove,
        _c[SharedApiExternalContract_1.FilterUpdateType.Replace] = api_internal_contract_js_1.FilterUpdateType.Replace,
        _c));
    return ExternalToInternalEnumMappings;
}());
exports.ExternalToInternalEnumMappings = ExternalToInternalEnumMappings;
var _a, _b, _c;
/* tslint:enable:typedef */


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var ServiceRegistry_1 = __webpack_require__(4);
var ErrorHelpers_1 = __webpack_require__(5);
var Filter = /** @class */ (function () {
    function Filter(_worksheetName, _fieldName, _filterType, _fieldId) {
        this._worksheetName = _worksheetName;
        this._fieldName = _fieldName;
        this._filterType = _filterType;
        this._fieldId = _fieldId;
    }
    Object.defineProperty(Filter.prototype, "worksheetName", {
        get: function () {
            return this._worksheetName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "fieldName", {
        get: function () {
            return this._fieldName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "fieldId", {
        get: function () {
            return this._fieldId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "filterType", {
        get: function () {
            return this._filterType;
        },
        enumerable: true,
        configurable: true
    });
    Filter.prototype.getFieldAsync = function () {
        throw new Error('Method not implemented');
    };
    return Filter;
}());
exports.Filter = Filter;
var CategoricalFilter = /** @class */ (function (_super) {
    __extends(CategoricalFilter, _super);
    function CategoricalFilter(worksheetName, fieldName, fieldId, filterType, _appliedValues, _isExcludeMode) {
        var _this = _super.call(this, worksheetName, fieldName, filterType, fieldId) || this;
        _this._appliedValues = _appliedValues;
        _this._isExcludeMode = _isExcludeMode;
        return _this;
    }
    Object.defineProperty(CategoricalFilter.prototype, "appliedValues", {
        get: function () {
            return this._appliedValues;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoricalFilter.prototype, "isExcludeMode", {
        get: function () {
            return this._isExcludeMode;
        },
        enumerable: true,
        configurable: true
    });
    CategoricalFilter.prototype.getDomainAsync = function (domainType) {
        if (!domainType) {
            domainType = Contract.FilterDomainType.Relevant;
        }
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(domainType, Contract.FilterDomainType);
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.getCategoricalDomainAsync(this._worksheetName, this._fieldId, domainType);
    };
    return CategoricalFilter;
}(Filter));
exports.CategoricalFilter = CategoricalFilter;
var RangeFilter = /** @class */ (function (_super) {
    __extends(RangeFilter, _super);
    function RangeFilter(worksheetName, fieldName, fieldId, filterType, _min, _max, _includeNullValues) {
        var _this = _super.call(this, worksheetName, fieldName, filterType, fieldId) || this;
        _this._min = _min;
        _this._max = _max;
        _this._includeNullValues = _includeNullValues;
        return _this;
    }
    Object.defineProperty(RangeFilter.prototype, "minValue", {
        get: function () {
            return this._min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeFilter.prototype, "maxValue", {
        get: function () {
            return this._max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeFilter.prototype, "includeNullValues", {
        get: function () {
            return this._includeNullValues;
        },
        enumerable: true,
        configurable: true
    });
    RangeFilter.prototype.getDomainAsync = function (domainType) {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        if (!domainType) {
            domainType = Contract.FilterDomainType.Relevant;
        }
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(domainType, Contract.FilterDomainType);
        return service.getRangeDomainAsync(this._worksheetName, this._fieldId, domainType);
    };
    return RangeFilter;
}(Filter));
exports.RangeFilter = RangeFilter;
var RelativeDateFilter = /** @class */ (function (_super) {
    __extends(RelativeDateFilter, _super);
    function RelativeDateFilter(worksheetName, fieldName, fieldId, filterType, _anchorDate, _periodType, _rangeType, _rangeN) {
        var _this = _super.call(this, worksheetName, fieldName, filterType, fieldId) || this;
        _this._anchorDate = _anchorDate;
        _this._periodType = _periodType;
        _this._rangeType = _rangeType;
        _this._rangeN = _rangeN;
        return _this;
    }
    Object.defineProperty(RelativeDateFilter.prototype, "anchorDate", {
        get: function () {
            return this._anchorDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeDateFilter.prototype, "periodType", {
        get: function () {
            return this._periodType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeDateFilter.prototype, "rangeType", {
        get: function () {
            return this._rangeType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeDateFilter.prototype, "rangeN", {
        get: function () {
            return this._rangeN;
        },
        enumerable: true,
        configurable: true
    });
    return RelativeDateFilter;
}(Filter));
exports.RelativeDateFilter = RelativeDateFilter;
var CategoricalDomain = /** @class */ (function () {
    function CategoricalDomain(_values, _domainType) {
        this._values = _values;
        this._domainType = _domainType;
    }
    Object.defineProperty(CategoricalDomain.prototype, "values", {
        get: function () {
            return this._values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoricalDomain.prototype, "type", {
        get: function () {
            return this._domainType;
        },
        enumerable: true,
        configurable: true
    });
    return CategoricalDomain;
}());
exports.CategoricalDomain = CategoricalDomain;
var RangeDomain = /** @class */ (function () {
    function RangeDomain(_min, _max, _domainType) {
        this._min = _min;
        this._max = _max;
        this._domainType = _domainType;
    }
    Object.defineProperty(RangeDomain.prototype, "type", {
        get: function () {
            return this._domainType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeDomain.prototype, "min", {
        get: function () {
            return this._min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeDomain.prototype, "max", {
        get: function () {
            return this._max;
        },
        enumerable: true,
        configurable: true
    });
    return RangeDomain;
}());
exports.RangeDomain = RangeDomain;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(8);
var GetDataModels_1 = __webpack_require__(13);
var GetDataService_1 = __webpack_require__(21);
var GetDataServiceImpl = /** @class */ (function (_super) {
    __extends(GetDataServiceImpl, _super);
    function GetDataServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GetDataServiceImpl.prototype, "serviceName", {
        get: function () {
            return "get-data-service" /* GetData */;
        },
        enumerable: true,
        configurable: true
    });
    GetDataServiceImpl.prototype.getUnderlyingDataAsync = function (visualId, getType, ignoreAliases, ignoreSelection, includeAllColumns, maxRows) {
        var _this = this;
        // Create all of our parameters
        var verb = getType === GetDataService_1.GetDataType.Summary ? api_internal_contract_js_1.VerbId.GetDataSummaryData : api_internal_contract_js_1.VerbId.GetUnderlyingData;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        parameters[api_internal_contract_js_1.ParameterId.IgnoreAliases] = ignoreAliases;
        parameters[api_internal_contract_js_1.ParameterId.IgnoreSelection] = ignoreSelection;
        parameters[api_internal_contract_js_1.ParameterId.IncludeAllColumns] = includeAllColumns;
        parameters[api_internal_contract_js_1.ParameterId.MaxRows] = maxRows;
        return this.execute(verb, parameters).then(function (response) {
            var responseData = response.result;
            return _this.processResultsTable(responseData.data, responseData.isSummary);
        });
    };
    GetDataServiceImpl.prototype.getSelectedMarksAsync = function (visualId) {
        var _this = this;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetSelectedMarks, parameters).then(function (response) {
            var responseData = response.result;
            return {
                data: responseData.data.map(function (table) { return _this.processResultsTable(table, true); })
            };
        });
        var _a;
    };
    GetDataServiceImpl.prototype.getHighlightedMarksAsync = function (visualId) {
        var _this = this;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetHighlightedMarks, parameters).then(function (response) {
            var responseData = response.result;
            return {
                data: responseData.data.map(function (table) { return _this.processResultsTable(table, true); })
            };
        });
        var _a;
    };
    GetDataServiceImpl.prototype.getDataSourceDataAsync = function (dataSourceId, ignoreAliases, maxRows, columnsToInclude) {
        var _this = this;
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId,
            _a[api_internal_contract_js_1.ParameterId.IgnoreAliases] = ignoreAliases,
            _a[api_internal_contract_js_1.ParameterId.MaxRows] = maxRows,
            _a[api_internal_contract_js_1.ParameterId.ColumnsToInclude] = columnsToInclude,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetDataSourceData, parameters).then(function (response) {
            var responseData = response.result;
            return _this.processResultsTable(responseData.data, false);
        });
        var _a;
    };
    GetDataServiceImpl.prototype.processResultsTable = function (responseData, isSummary) {
        var headers = responseData.headers.map(function (h) { return new GetDataModels_1.Column(h.fieldCaption, h.dataType, h.isReferenced, h.index); });
        // TODO This should be controlled by a flag indicating whether this api will respond marks info or not
        var marks;
        if (responseData.marks) {
            marks = responseData.marks.map(function (h) { return new GetDataModels_1.MarkInfo(h.type, h.color, h.tupleId); });
        }
        var table = responseData.dataTable.map(function (row) {
            return row.map(function (cell) {
                return new GetDataModels_1.DataValue(cell.value, cell.formattedValue);
            });
        });
        if (marks) {
            return new GetDataModels_1.DataTable(table, headers, table.length, isSummary, marks);
        }
        return new GetDataModels_1.DataTable(table, headers, table.length, isSummary);
    };
    return GetDataServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.GetDataServiceImpl = GetDataServiceImpl;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registration = /** @class */ (function () {
    function Registration(_filterFn, _callbackFn) {
        this._filterFn = _filterFn;
        this._callbackFn = _callbackFn;
        // Nothing Here
    }
    Registration.prototype.onNotification = function (notificationModel) {
        if (this._filterFn(notificationModel)) {
            this._callbackFn(notificationModel);
        }
    };
    return Registration;
}());
var NotificationServiceImpl = /** @class */ (function () {
    function NotificationServiceImpl(dispatcher) {
        this.dispatcher = dispatcher;
        this._handlers = {};
        this.dispatcher.registerNotificationHandler(this.onNotification.bind(this));
    }
    Object.defineProperty(NotificationServiceImpl.prototype, "serviceName", {
        get: function () {
            return "notification-service" /* Notification */;
        },
        enumerable: true,
        configurable: true
    });
    NotificationServiceImpl.prototype.registerHandler = function (id, filterFn, handler) {
        var _this = this;
        var handlers = this._handlers[id] || new Array();
        var registration = new Registration(filterFn, handler);
        handlers.push(registration);
        this._handlers[id] = handlers;
        return function () { return _this.removeRegistration(id, registration); };
    };
    NotificationServiceImpl.prototype.hasHandlersForNotificationType = function (id) {
        return this._handlers.hasOwnProperty(id);
    };
    NotificationServiceImpl.prototype.onNotification = function (notification) {
        if (!this.hasHandlersForNotificationType(notification.notificationId)) {
            return;
        }
        // Go through and check for all the handlers of this particular notification
        this._handlers[notification.notificationId].forEach(function (h) { return h.onNotification(notification.data); });
    };
    NotificationServiceImpl.prototype.removeRegistration = function (id, registration) {
        if (!this.hasHandlersForNotificationType(id)) {
            return;
        }
        this._handlers[id] = this._handlers[id].filter(function (reg) { return reg !== registration; });
    };
    return NotificationServiceImpl;
}());
exports.NotificationServiceImpl = NotificationServiceImpl;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(8);
var ParameterImpl_1 = __webpack_require__(63);
var Parameter_1 = __webpack_require__(65);
var TableauError_1 = __webpack_require__(2);
var ParametersServiceImpl = /** @class */ (function (_super) {
    __extends(ParametersServiceImpl, _super);
    function ParametersServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ParametersServiceImpl.prototype, "serviceName", {
        get: function () {
            return "parameters-service" /* Parameters */;
        },
        enumerable: true,
        configurable: true
    });
    ParametersServiceImpl.prototype.getParametersForSheetAsync = function (sheetPath, sheet) {
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.SheetPath] = sheetPath,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetParametersForSheet, parameters).then(function (response) {
            // TODO - Check for error
            var result = response.result;
            return result.map(function (parameterInfo) {
                var impl = new ParameterImpl_1.ParameterImpl(parameterInfo);
                return new Parameter_1.Parameter(impl, sheet);
            });
        });
        var _a;
    };
    ParametersServiceImpl.prototype.changeParameterValueAsync = function (fieldName, newValue) {
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.ParameterFieldName] = fieldName,
            _a[api_internal_contract_js_1.ParameterId.ParameterValue] = newValue,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.ChangeParameterValue, parameters).then(function (response) {
            var result = response.result;
            return result;
        });
        var _a;
    };
    ParametersServiceImpl.prototype.findParameterByNameAsync = function (name, sheet) {
        return this.findParameterAsync(sheet, name, undefined);
    };
    ParametersServiceImpl.prototype.findParameterByGlobalFieldNameAsync = function (fieldName, sheet) {
        return this.findParameterAsync(sheet, undefined, fieldName);
    };
    ParametersServiceImpl.prototype.findParameterAsync = function (sheet, name, fieldName) {
        var parameters = {};
        if (name !== undefined) {
            parameters[api_internal_contract_js_1.ParameterId.ParameterCaption] = name;
        }
        else if (fieldName !== undefined) {
            parameters[api_internal_contract_js_1.ParameterId.ParameterFieldName] = fieldName;
        }
        else {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.InvalidParameter, 'name or fieldName must be provided to find parameter');
        }
        return this.execute(api_internal_contract_js_1.VerbId.FindParameter, parameters).then(function (response) {
            var instanceOfParameterInfo = function (object) {
                return 'fieldName' in object;
            };
            // We need to check to see if we got a valid response back again
            if (instanceOfParameterInfo(response.result)) {
                var result = response.result;
                var impl = new ParameterImpl_1.ParameterImpl(result);
                return new Parameter_1.Parameter(impl, sheet);
            }
            else {
                return undefined;
            }
        });
    };
    return ParametersServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.ParametersServiceImpl = ParametersServiceImpl;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var InternalToExternalEnumMappings_1 = __webpack_require__(7);
var ParameterChangedEvent_1 = __webpack_require__(64);
var GetDataModels_1 = __webpack_require__(13);
var ServiceRegistry_1 = __webpack_require__(4);
var SingleEventManagerImpl_1 = __webpack_require__(11);
var ErrorHelpers_1 = __webpack_require__(5);
var Param_1 = __webpack_require__(12);
var ParameterImpl = /** @class */ (function () {
    function ParameterImpl(parameterInfo) {
        this.setParameterInfo(parameterInfo);
    }
    Object.defineProperty(ParameterImpl.prototype, "name", {
        get: function () {
            return this._parameterInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterImpl.prototype, "currentValue", {
        get: function () {
            return new GetDataModels_1.DataValue(this._parameterInfo.currentValue.value, this._parameterInfo.currentValue.formattedValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterImpl.prototype, "dataType", {
        get: function () {
            return InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dataType.convert(this._parameterInfo.dataType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterImpl.prototype, "id", {
        get: function () {
            return this._globalFieldName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterImpl.prototype, "allowableValues", {
        get: function () {
            return this._allowableValues;
        },
        enumerable: true,
        configurable: true
    });
    ParameterImpl.prototype.changeValueAsync = function (newValue) {
        var _this = this;
        ErrorHelpers_1.ErrorHelpers.verifyParameter(newValue, 'newValue');
        var coercedValue = Param_1.Param.serializeParamterValue(newValue);
        var parametersService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("parameters-service" /* Parameters */);
        return parametersService.changeParameterValueAsync(this._globalFieldName, coercedValue).then(function (parameterInfo) {
            _this.setParameterInfo(parameterInfo);
            return _this.currentValue;
        });
    };
    /**
     * Helper method which goes through and registers each event type this impl knows about
     * with the NotificationService. It returns an array of SingleEventManager objects which
     * can then be passed to an EventListenerManager to handle user registration / unregistration.
     *
     * @param sheet The sheet object which will be included with the event notifications
     * @returns {Array<SingleEventManager>} Collection of event managers to pass to an EventListenerManager
     */
    ParameterImpl.prototype.initializeEvents = function (sheet) {
        var _this = this;
        ErrorHelpers_1.ErrorHelpers.verifyInternalValue(sheet, 'sheet');
        var results = new Array();
        var notificationService;
        try {
            notificationService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        }
        catch (e) {
            // If we don't have this service registered, just return
            return results;
        }
        // Initialize all of the event managers we'll need (one for each event type)
        var parameterEvent = new SingleEventManagerImpl_1.SingleEventManagerImpl(Contract.TableauEventType.ParameterChanged);
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.ParameterChanged, function (model) {
            var fieldName = model;
            return fieldName === _this._globalFieldName;
        }, function (fieldName) {
            parameterEvent.triggerEvent(function () { return new ParameterChangedEvent_1.ParameterChangedEvent(fieldName, sheet); });
        });
        results.push(parameterEvent);
        return results;
    };
    ParameterImpl.prototype.setParameterInfo = function (parameterInfo) {
        this._parameterInfo = parameterInfo;
        this._globalFieldName = parameterInfo.fieldName;
        var type = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.allowableValues.convert(parameterInfo.allowableValuesType);
        var listValues;
        var minValue;
        var maxValue;
        var stepSize;
        var dateStepPeriod;
        if (type === Contract.ParameterValueType.List) {
            var values = parameterInfo.allowableValues || [];
            listValues = values.map(function (val) { return new GetDataModels_1.DataValue(val.value, val.formattedValue); });
        }
        else if (type === Contract.ParameterValueType.Range) {
            minValue = parameterInfo.minValue && new GetDataModels_1.DataValue(parameterInfo.minValue.value, parameterInfo.minValue.formattedValue);
            maxValue = parameterInfo.maxValue && new GetDataModels_1.DataValue(parameterInfo.maxValue.value, parameterInfo.maxValue.formattedValue);
            stepSize = parameterInfo.stepSize;
            dateStepPeriod = parameterInfo.dateStepPeriod &&
                InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dateStepPeriod.convert(parameterInfo.dateStepPeriod);
        }
        this._allowableValues = {
            type: type,
            allowableValues: listValues,
            minValue: minValue,
            maxValue: maxValue,
            stepSize: stepSize,
            dateStepPeriod: dateStepPeriod
        };
    };
    return ParameterImpl;
}());
exports.ParameterImpl = ParameterImpl;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var ServiceRegistry_1 = __webpack_require__(4);
var TableauError_1 = __webpack_require__(2);
var TableauSheetEvent_1 = __webpack_require__(20);
var ParameterChangedEvent = /** @class */ (function (_super) {
    __extends(ParameterChangedEvent, _super);
    function ParameterChangedEvent(_globalFieldName, sheet) {
        var _this = _super.call(this, Contract.TableauEventType.ParameterChanged, sheet) || this;
        _this._globalFieldName = _globalFieldName;
        return _this;
    }
    ParameterChangedEvent.prototype.getParameterAsync = function () {
        var _this = this;
        // Call down to our service to get the parameter back via its field name
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("parameters-service" /* Parameters */);
        return service.findParameterByGlobalFieldNameAsync(this._globalFieldName, this.sheet).then(function (parameter) {
            if (parameter === undefined) {
                throw new TableauError_1.TableauError(Contract.ErrorCodes.MissingParameter, "Cannot find parameter: " + _this._globalFieldName);
            }
            return parameter;
        });
    };
    return ParameterChangedEvent;
}(TableauSheetEvent_1.TableauSheetEvent));
exports.ParameterChangedEvent = ParameterChangedEvent;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventListenerManager_1 = __webpack_require__(10);
/**
 * Implementation of the Parameter contract. Calls down to the impl
 * class for almost all of the work it does.
 */
var Parameter = /** @class */ (function (_super) {
    __extends(Parameter, _super);
    function Parameter(parameterImpl, sheet) {
        var _this = _super.call(this) || this;
        _this.parameterImpl = parameterImpl;
        // Initialize our event handling for this class
        _this.parameterImpl.initializeEvents(sheet).forEach(function (e) { return _this.addNewEventType(e); });
        return _this;
    }
    Object.defineProperty(Parameter.prototype, "name", {
        get: function () {
            return this.parameterImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "currentValue", {
        get: function () {
            return this.parameterImpl.currentValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "dataType", {
        get: function () {
            return this.parameterImpl.dataType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "allowableValues", {
        get: function () {
            return this.parameterImpl.allowableValues;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "id", {
        get: function () {
            return this.parameterImpl.id;
        },
        enumerable: true,
        configurable: true
    });
    Parameter.prototype.changeValueAsync = function (newValue) {
        return this.parameterImpl.changeValueAsync(newValue);
    };
    return Parameter;
}(EventListenerManager_1.EventListenerManager));
exports.Parameter = Parameter;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var SelectionModels_1 = __webpack_require__(67);
var ServiceImplBase_1 = __webpack_require__(8);
var TableauError_1 = __webpack_require__(2);
var SelectionServiceImpl = /** @class */ (function (_super) {
    __extends(SelectionServiceImpl, _super);
    function SelectionServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SelectionServiceImpl.prototype, "serviceName", {
        get: function () {
            return "selection-service" /* Selection */;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method to clear all the selected marks for the given worksheet.
     *
     * @param visualId
     */
    SelectionServiceImpl.prototype.clearSelectedMarksAsync = function (visualId) {
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.ClearSelectedMarks, parameters).then(function (response) {
            return; // Expecting an empty model and hence the void response.
        });
        var _a;
    };
    /**
     * Method to select marks for the given worksheet.
     *
     * @param visualId
     * @param selectionCriteria
     * @param selectionUpdateType
     */
    SelectionServiceImpl.prototype.selectMarksByValueAsync = function (visualId, selectionCriterias, selectionUpdateType) {
        if (selectionCriterias.length === 0) {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.InvalidParameter, 'Selection criteria missing for selecting marks by value');
        }
        var selectionType = this.validateSelectionUpdateType(selectionUpdateType);
        var selectionCriteriaType = this.validateSelectionCriteria(selectionCriterias[0]);
        var selectionModelContainer = this.parseSelectionMarks(selectionCriterias, selectionCriteriaType);
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId,
            _a[api_internal_contract_js_1.ParameterId.SelectionUpdateType] = selectionType,
            _a);
        switch (selectionCriteriaType) {
            case SelectionCriteriaType.HierarchicalType: {
                parameters[api_internal_contract_js_1.ParameterId.HierValSelectionModels] = selectionModelContainer.hierModelArr;
                break;
            }
            case SelectionCriteriaType.RangeType: {
                parameters[api_internal_contract_js_1.ParameterId.QuantRangeSelectionModels] = selectionModelContainer.quantModelArr;
                break;
            }
            case SelectionCriteriaType.DimensionType: {
                parameters[api_internal_contract_js_1.ParameterId.DimValSelectionModels] = selectionModelContainer.dimModelArr;
                break;
            }
            default:
                break;
        }
        return this.execute(api_internal_contract_js_1.VerbId.SelectByValue, parameters).then(function (response) {
            // Expecting an empty model and hence the void response.
            return;
            // TODO Investigate the error response with multiple output params and throw error accordingly.
        });
        var _a;
    };
    /**
   * Method to select marks for the given worksheet.
   *
   * @param visualId
   * @param MarkInfo
   * @param selectionUpdateType
   */
    SelectionServiceImpl.prototype.selectMarksByIdAsync = function (visualId, marks, selectionUpdateType) {
        if (marks.length === 0) {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.InvalidParameter, 'Marks info missing for selecting marks by Id');
        }
        var selectionType = this.validateSelectionUpdateType(selectionUpdateType);
        var selectionModelContainer = this.parseSelectionIds(marks);
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId,
            _a[api_internal_contract_js_1.ParameterId.SelectionUpdateType] = selectionType,
            _a[api_internal_contract_js_1.ParameterId.Selection] = selectionModelContainer.selection,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.SelectByValue, parameters).then(function (response) {
            // Expecting an empty model and hence the void response.
            return;
            // TODO Investigate the error response with multiple output params and throw error accordingly.
        });
        var _a;
    };
    /**
     * Method to prepare the pres models for selection by MarksInfo
     * @param marks
     */
    SelectionServiceImpl.prototype.parseSelectionIds = function (marks) {
        var ids = [];
        var selectionModelContainer = new SelectionModels_1.SelectionModelsContainer();
        for (var i = 0; i < marks.length; i++) {
            var tupleId = marks[i].tupleId;
            if (tupleId !== undefined && tupleId !== null) {
                ids.push(tupleId.toString()); // collect the tuple ids
            }
            else {
                throw new TableauError_1.TableauError(Contract.ErrorCodes.InternalError, 'tupleId parsing error');
            }
        }
        if (ids.length !== 0) {
            var tupleSelectionModel = new SelectionModels_1.TupleSelectionModel();
            tupleSelectionModel.selectionType = 'tuples';
            tupleSelectionModel.objectIds = ids;
            selectionModelContainer.selection = tupleSelectionModel;
        }
        return selectionModelContainer;
    };
    /**
     * Method to prepare the pres models for selection by values.
     *
     * Supports 3 types for selection:
     * 1) hierarchical value based selection
     * 2) range value based selection
     * 3) Dimension value based selection
     *
     * @param marks
     * @param hierModelArr
     * @param dimModelArr
     * @param quantModelArr
     * @param selection
     */
    SelectionServiceImpl.prototype.parseSelectionMarks = function (selectionCriterias, selectionType) {
        var selectionModelContainer = new SelectionModels_1.SelectionModelsContainer();
        var mixedSelectionsError = false;
        for (var i = 0; i < selectionCriterias.length; i++) {
            var st = selectionCriterias[i];
            if (st.fieldName && (st.value !== undefined && st.value !== null)) {
                var catRegex = new RegExp('(\[[A-Za-z0-9]+]).*', 'g');
                var rangeOption = st.value;
                if (catRegex.test(st.fieldName)) {
                    if (selectionType === SelectionCriteriaType.HierarchicalType) {
                        var hierModel = this.addToParamsList(st.fieldName, st.value);
                        selectionModelContainer.hierModelArr.push(hierModel);
                    }
                    else {
                        mixedSelectionsError = true;
                        break;
                    }
                }
                else if (rangeOption.min !== undefined
                    && rangeOption.max !== undefined) {
                    if (selectionType === SelectionCriteriaType.RangeType) {
                        var quantModel = this.addToRangeParamsList(st.fieldName, rangeOption);
                        selectionModelContainer.quantModelArr.push(quantModel);
                    }
                    else {
                        mixedSelectionsError = true;
                        break;
                    }
                }
                else {
                    if (selectionType === SelectionCriteriaType.DimensionType) {
                        var dimModel = this.addToParamsList(st.fieldName, st.value);
                        selectionModelContainer.dimModelArr.push(dimModel);
                    }
                    else {
                        mixedSelectionsError = true;
                        break;
                    }
                }
            }
        }
        if (mixedSelectionsError) {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.InternalError, 'Selection Criteria parsing error');
        }
        return selectionModelContainer;
    };
    /**
     *
     * @param selectionCriterias Validate and determine the selection criterias type.
     */
    SelectionServiceImpl.prototype.validateSelectionCriteria = function (selectionCriteria) {
        var selectionType;
        // Determine the type of selection, this command is by looking at the first selection
        var crit = selectionCriteria;
        var catRegex = new RegExp('(\[[A-Za-z0-9]+]).*', 'g');
        var rangeOption = crit.value;
        if (crit.fieldName && (crit.value !== undefined && crit.value !== null)) {
            if (catRegex.test(crit.fieldName)) {
                selectionType = SelectionCriteriaType.HierarchicalType;
            }
            else if (rangeOption.min !== undefined
                && rangeOption.max !== undefined) {
                selectionType = SelectionCriteriaType.RangeType;
            }
            else {
                selectionType = SelectionCriteriaType.DimensionType;
            }
        }
        else {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.InternalError, 'Selection Criteria parsing error');
        }
        return selectionType;
    };
    /**
     * Method to transform the key value pair into value based pres model object.
     *
     * @param valueSelectionModel
     * @param fieldName
     * @param value
     */
    SelectionServiceImpl.prototype.addToParamsList = function (fieldName, value) {
        var valueSelectionModel = new SelectionModels_1.ValueSelectionModel();
        var markValues = [];
        if (value instanceof Array) {
            var valueArr = value;
            for (var i = 0; i < valueArr.length; i++) {
                markValues.push(valueArr[i].toString());
            }
        }
        else {
            markValues.push(value.toString());
        }
        valueSelectionModel.qualifiedFieldCaption = fieldName;
        valueSelectionModel.selectValues = markValues;
        return valueSelectionModel;
    };
    /**
     * Method to transform the key value pair into range based selection pres model.
     *
     * TODO: Need to handle the parsing of date type values.
     *
     * @param valueSelectionModel
     * @param fieldName
     * @param value
     */
    SelectionServiceImpl.prototype.addToRangeParamsList = function (fieldName, value) {
        var rangeSelectionModel = new SelectionModels_1.RangeSelectionModel();
        rangeSelectionModel.qualifiedFieldCaption = fieldName;
        if (value.max !== undefined && value.max !== null) {
            rangeSelectionModel.maxValue = value.max.toString();
        }
        if (value.min !== undefined && value.min !== null) {
            rangeSelectionModel.minValue = value.min.toString();
        }
        rangeSelectionModel.included = this.validateNullOptionType(value.nullOption);
        return rangeSelectionModel;
    };
    /**
     * Method to validate the selection update type.
     *
     * @param selectionUpdateType
     */
    SelectionServiceImpl.prototype.validateSelectionUpdateType = function (selectionUpdateType) {
        if (selectionUpdateType === Contract.SelectionUpdateType.Replace) {
            return api_internal_contract_js_1.SelectionUpdateType.Replace;
        }
        else if (selectionUpdateType === Contract.SelectionUpdateType.Add) {
            return api_internal_contract_js_1.SelectionUpdateType.Add;
        }
        else if (selectionUpdateType === Contract.SelectionUpdateType.Remove) {
            return api_internal_contract_js_1.SelectionUpdateType.Remove;
        }
        return api_internal_contract_js_1.SelectionUpdateType.Replace;
    };
    /**
     * Method to validate the include type for range selection.
     *
     * @param nullOption
     */
    SelectionServiceImpl.prototype.validateNullOptionType = function (nullOption) {
        if (nullOption) {
            if (nullOption === Contract.FilterNullOption.NullValues) {
                return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeNull;
            }
            else if (nullOption === Contract.FilterNullOption.NonNullValues) {
                return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeNonNull;
            }
            else if (nullOption === Contract.FilterNullOption.AllValues) {
                return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeAll;
            }
        }
        return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeAll;
    };
    return SelectionServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.SelectionServiceImpl = SelectionServiceImpl;
/**
 * Enum for the different selection criteria types.
 */
var SelectionCriteriaType;
(function (SelectionCriteriaType) {
    SelectionCriteriaType[SelectionCriteriaType["HierarchicalType"] = 1] = "HierarchicalType";
    SelectionCriteriaType[SelectionCriteriaType["RangeType"] = 2] = "RangeType";
    SelectionCriteriaType[SelectionCriteriaType["DimensionType"] = 3] = "DimensionType";
    SelectionCriteriaType[SelectionCriteriaType["TuplesType"] = 4] = "TuplesType";
})(SelectionCriteriaType || (SelectionCriteriaType = {}));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Selection Model.
 */
var SelectionModel = /** @class */ (function () {
    function SelectionModel() {
    }
    return SelectionModel;
}());
exports.SelectionModel = SelectionModel;
/**
 * Value based selection model. Meant for hierarchical, range and categorical selections.
 */
var ValueSelectionModel = /** @class */ (function (_super) {
    __extends(ValueSelectionModel, _super);
    function ValueSelectionModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectValues = [];
        return _this;
    }
    return ValueSelectionModel;
}(SelectionModel));
exports.ValueSelectionModel = ValueSelectionModel;
/**
 * Hierarchical value selection model
 */
var HierarchicalSelectionModel = /** @class */ (function (_super) {
    __extends(HierarchicalSelectionModel, _super);
    function HierarchicalSelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HierarchicalSelectionModel;
}(ValueSelectionModel));
exports.HierarchicalSelectionModel = HierarchicalSelectionModel;
/**
 * Range based value selection model
 */
var RangeSelectionModel = /** @class */ (function (_super) {
    __extends(RangeSelectionModel, _super);
    function RangeSelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RangeSelectionModel;
}(SelectionModel));
exports.RangeSelectionModel = RangeSelectionModel;
/**
 * Dimension value selection model
 */
var DimensionSelectionModel = /** @class */ (function (_super) {
    __extends(DimensionSelectionModel, _super);
    function DimensionSelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DimensionSelectionModel;
}(ValueSelectionModel));
exports.DimensionSelectionModel = DimensionSelectionModel;
/**
 * Tuple based selection model
 */
var TupleSelectionModel = /** @class */ (function () {
    function TupleSelectionModel() {
        this.objectIds = [];
    }
    return TupleSelectionModel;
}());
exports.TupleSelectionModel = TupleSelectionModel;
/**
 * Container class to populate all the selection models when parsing input
 */
var SelectionModelsContainer = /** @class */ (function () {
    function SelectionModelsContainer() {
        this.hierModelArr = [];
        this.dimModelArr = [];
        this.quantModelArr = [];
    }
    return SelectionModelsContainer;
}());
exports.SelectionModelsContainer = SelectionModelsContainer;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the external DashboardContent namespace.
 * This does not follow the Impl pattern as DashboardContent is
 * currently just a (single) property bag.
 */
var DashboardContent = /** @class */ (function () {
    function DashboardContent(_dashboard) {
        this._dashboard = _dashboard;
    }
    Object.defineProperty(DashboardContent.prototype, "dashboard", {
        get: function () {
            return this._dashboard;
        },
        enumerable: true,
        configurable: true
    });
    return DashboardContent;
}());
exports.DashboardContent = DashboardContent;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(3);
/**
 * Implementation of the external environment namespace.
 * Environment does not follow the Impl pattern as it is
 * just a property bag.
 */
var Environment = /** @class */ (function () {
    function Environment(extensionEnvironment) {
        this._apiVersion = extensionEnvironment.apiVersion;
        this._context = ApiShared_1.InternalToExternalEnumMappings.extensionContext.convert(extensionEnvironment.extensionContext);
        this._language = extensionEnvironment.extensionLanguage;
        this._locale = extensionEnvironment.extensionLocale;
        this._mode = ApiShared_1.InternalToExternalEnumMappings.extensionMode.convert(extensionEnvironment.extensionMode);
        this._operatingSystem = extensionEnvironment.operatingSystem;
        this._tableauVersion = extensionEnvironment.tableauVersion;
    }
    Object.defineProperty(Environment.prototype, "apiVersion", {
        get: function () {
            return this._apiVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "language", {
        get: function () {
            return this._language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "locale", {
        get: function () {
            return this._locale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "operatingSystem", {
        get: function () {
            return this._operatingSystem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "tableauVersion", {
        get: function () {
            return this._tableauVersion;
        },
        enumerable: true,
        configurable: true
    });
    return Environment;
}());
exports.Environment = Environment;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(3);
/**
 * Implementation of the external settings namespace.
 */
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings(_settingsImpl) {
        var _this = _super.call(this) || this;
        _this._settingsImpl = _settingsImpl;
        // Initialize our event handling for this class
        _this._settingsImpl.initializeEvents().forEach(function (e) { return _this.addNewEventType(e); });
        return _this;
    }
    Settings.prototype.erase = function (key) {
        this._settingsImpl.erase(key);
    };
    Settings.prototype.get = function (key) {
        return this._settingsImpl.get(key);
    };
    Settings.prototype.getAll = function () {
        return this._settingsImpl.getAll();
    };
    Object.defineProperty(Settings.prototype, "isModified", {
        get: function () {
            return this._settingsImpl.isModified;
        },
        enumerable: true,
        configurable: true
    });
    Settings.prototype.saveAsync = function () {
        return this._settingsImpl.saveAsync();
    };
    Settings.prototype.set = function (key, value) {
        this._settingsImpl.set(key, value);
    };
    return Settings;
}(ApiShared_1.EventListenerManager));
exports.Settings = Settings;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the external UI namespace.
 */
var UI = /** @class */ (function () {
    function UI(_impl) {
        this._impl = _impl;
    }
    UI.prototype.displayDialogAsync = function (url, payload, options) {
        return this._impl.displayDialogAsync(url, payload, options);
    };
    UI.prototype.closeDialog = function (payload) {
        this._impl.closeDialog(payload);
    };
    return UI;
}());
exports.UI = UI;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(3);
var InitializationServiceImpl_1 = __webpack_require__(73);
var SettingsServiceImpl_1 = __webpack_require__(74);
var UIServiceImpl_1 = __webpack_require__(75);
function registerAllExtensionsServices(dispatcher) {
    ApiShared_1.ApiServiceRegistry.instance.registerService(new InitializationServiceImpl_1.InitializationServiceImpl(dispatcher));
    ApiShared_1.ApiServiceRegistry.instance.registerService(new SettingsServiceImpl_1.SettingsServiceImpl(dispatcher));
    ApiShared_1.ApiServiceRegistry.instance.registerService(new UIServiceImpl_1.UIServiceImpl(dispatcher));
}
exports.registerAllExtensionsServices = registerAllExtensionsServices;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(3);
var api_internal_contract_js_1 = __webpack_require__(1);
var InitializationServiceImpl = /** @class */ (function (_super) {
    __extends(InitializationServiceImpl, _super);
    function InitializationServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(InitializationServiceImpl.prototype, "serviceName", {
        get: function () {
            return "InitializationService" /* InitializationService */;
        },
        enumerable: true,
        configurable: true
    });
    InitializationServiceImpl.prototype.initializeDashboardExtensionsAsync = function (isExtensionDialog, contextMenuIds) {
        var params = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.ExtensionContextMenuIds] = contextMenuIds,
            _a[api_internal_contract_js_1.ParameterId.IsExtensionDialog] = isExtensionDialog,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.InitializeExtension, params).then(function (response) {
            // TODO - Validate return value
            var result = response.result;
            return result;
        });
        var _a;
    };
    return InitializationServiceImpl;
}(ApiShared_1.ServiceImplBase));
exports.InitializationServiceImpl = InitializationServiceImpl;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionsApiExternalContract_1 = __webpack_require__(6);
var ApiShared_1 = __webpack_require__(3);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_2 = __webpack_require__(3);
var SettingsServiceImpl = /** @class */ (function (_super) {
    __extends(SettingsServiceImpl, _super);
    function SettingsServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SettingsServiceImpl.prototype, "serviceName", {
        get: function () {
            return "SettingsService" /* SettingsService */;
        },
        enumerable: true,
        configurable: true
    });
    SettingsServiceImpl.prototype.saveSettingsAsync = function (settings) {
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.SettingsValues] = settings, _a);
        return this.execute(api_internal_contract_js_1.VerbId.SaveExtensionSettings, parameters).then(function (value) {
            var result = value.result;
            if (!result || !result.settingsValues) {
                throw new ApiShared_2.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.InternalError, 'Unexpected error savings settings.');
            }
            return (result.settingsValues);
        });
        var _a;
    };
    return SettingsServiceImpl;
}(ApiShared_1.ServiceImplBase));
exports.SettingsServiceImpl = SettingsServiceImpl;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionsApiExternalContract_1 = __webpack_require__(6);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(3);
var DEFAULT_DIALOG_HEIGHT = 400; // in pixels
var DEFAULT_DIALOG_WIDTH = 600; // in pixels
var UIServiceImpl = /** @class */ (function (_super) {
    __extends(UIServiceImpl, _super);
    function UIServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UIServiceImpl.prototype, "serviceName", {
        get: function () {
            return "UIService" /* UIService */;
        },
        enumerable: true,
        configurable: true
    });
    UIServiceImpl.prototype.displayDialogAsync = function (url, payload, options) {
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.ExtensionDialogUrl] = url,
            _a[api_internal_contract_js_1.ParameterId.ExtensionDialogPayload] = payload,
            _a);
        var h = ((options) && (options.height)) ? options.height : DEFAULT_DIALOG_HEIGHT;
        var w = ((options) && (options.width)) ? options.width : DEFAULT_DIALOG_WIDTH;
        // On the platform side, we do something reasonable regardess of whether the passed
        // height and width are too large or too small.  But this likely indicates a developer error,
        // so we throw an error here to help with debugging.
        if (h <= 0 || w <= 0) {
            throw new ApiShared_1.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.InvalidParameter, 'Size parameters for displayDialogAsync must be positive');
        }
        parameters[api_internal_contract_js_1.ParameterId.ExtensionDialogH] = h;
        parameters[api_internal_contract_js_1.ParameterId.ExtensionDialogW] = w;
        return this.execute(api_internal_contract_js_1.VerbId.DisplayDialog, parameters).then(function (response) {
            var dialogResult = response.result;
            switch (dialogResult) {
                case api_internal_contract_js_1.ExtensionDialogResult.DialogAlreadyOpen:
                    throw new ApiShared_1.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.DialogAlreadyOpen, 'There already exists an open dialog for this extension.');
                case api_internal_contract_js_1.ExtensionDialogResult.InvalidDomain:
                    throw new ApiShared_1.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.InvalidDomainDialog, 'The url of an extension dialog must match the domain of the parent extension.');
                default:// Success case
                    return;
            }
        });
        var _a;
    };
    UIServiceImpl.prototype.closeDialog = function (payload) {
        var parameters = (payload) ? (_a = {}, _a[api_internal_contract_js_1.ParameterId.ExtensionDialogPayload] = payload, _a) : {};
        return this.execute(api_internal_contract_js_1.VerbId.CloseDialog, parameters).then(function (response) {
            return;
        });
        var _a;
    };
    return UIServiceImpl;
}(ApiShared_1.ServiceImplBase));
exports.UIServiceImpl = UIServiceImpl;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(6);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(3);
var SettingsChangedEvent = /** @class */ (function (_super) {
    __extends(SettingsChangedEvent, _super);
    function SettingsChangedEvent(_newSettings) {
        var _this = _super.call(this, Contract.TableauEventType.SettingsChanged) || this;
        _this._newSettings = _newSettings;
        return _this;
    }
    Object.defineProperty(SettingsChangedEvent.prototype, "newSettings", {
        get: function () {
            return this._newSettings;
        },
        enumerable: true,
        configurable: true
    });
    return SettingsChangedEvent;
}(ApiShared_1.TableauEvent));
var SettingsImpl = /** @class */ (function () {
    function SettingsImpl(settingsInfo) {
        // Since promises can't be introspected for state, keep a variable that
        // indicates a save is in progress, so that set/erase can't be called during a save.
        this._saveInProgress = false;
        this.initializeSettings(settingsInfo);
    }
    SettingsImpl.prototype.erase = function (key) {
        ApiShared_1.ErrorHelpers.verifyParameter(key, 'key');
        // Only make a modification if we have the key already
        if (this._currentSettings[key]) {
            this.verifySettingsAreUnlocked();
            delete this._currentSettings[key];
            this._isModified = true;
        }
    };
    SettingsImpl.prototype.get = function (key) {
        ApiShared_1.ErrorHelpers.verifyParameter(key, 'key');
        return this._currentSettings[key];
    };
    SettingsImpl.prototype.getAll = function () {
        // Returns a mutable copy of the settings
        return Object.assign({}, this._currentSettings);
    };
    Object.defineProperty(SettingsImpl.prototype, "isModified", {
        get: function () {
            return this._isModified;
        },
        enumerable: true,
        configurable: true
    });
    SettingsImpl.prototype.saveAsync = function () {
        var _this = this;
        this.verifySettingsAreUnlocked();
        // Just resolve immediately if settings are unchanged
        if (!this._isModified) {
            return Promise.resolve(this._currentSettings);
        }
        this._saveInProgress = true;
        // Use the settings service to save settings to twb
        var settingsService = ApiShared_1.ApiServiceRegistry.instance.getService("SettingsService" /* SettingsService */);
        return settingsService.saveSettingsAsync(this._currentSettings).then(function (newSettings) {
            _this._saveInProgress = false;
            _this._isModified = false;
            Object.assign(_this._currentSettings, newSettings);
            return newSettings;
        });
    };
    SettingsImpl.prototype.set = function (key, value) {
        ApiShared_1.ErrorHelpers.verifyStringParameter(key, 'key'); // Key shouldn't be an empty string.
        ApiShared_1.ErrorHelpers.verifyParameter(value, 'value'); // Empty string value is allowed.
        this.verifySettingsAreUnlocked();
        this._currentSettings[key] = value;
        this._isModified = true;
    };
    /**
     * Initializes all events relevant to settings object.  This is only a settingsUpdate event currently.
     *
     * @returns {Array<SingleEventManager>} Collection of event managers to pass to an EventListenerManager.
     */
    SettingsImpl.prototype.initializeEvents = function () {
        var _this = this;
        var results = new Array();
        var notificationService;
        try {
            notificationService = ApiShared_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        }
        catch (e) {
            // If we don't have this service registered, just return
            return results;
        }
        var settingsChangedEvent = new ApiShared_1.SingleEventManagerImpl(Contract.TableauEventType.SettingsChanged);
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.SettingsChanged, function (model) {
            return true;
        }, function (event) {
            _this._currentSettings = event.newSettings;
            settingsChangedEvent.triggerEvent(function () { return new SettingsChangedEvent(event.newSettings); });
        });
        results.push(settingsChangedEvent);
        return results;
    };
    SettingsImpl.prototype.initializeSettings = function (settingsInfo) {
        ApiShared_1.ErrorHelpers.verifyParameter(settingsInfo, 'settingsInfo');
        ApiShared_1.ErrorHelpers.verifyParameter(settingsInfo.settingsValues, 'settingsInfo.SettingsValues');
        this._currentSettings = settingsInfo.settingsValues;
        // Reset the isModified flag
        this._isModified = false;
    };
    /**
     * This helper should be called before any local update to this.currentSettings.
     * Checks if a current save call is still in progress and throws an error if so.
     */
    SettingsImpl.prototype.verifySettingsAreUnlocked = function () {
        if (this._saveInProgress) {
            throw new ApiShared_1.TableauError(Contract.ErrorCodes.SettingSaveInProgress, SettingsImpl.ASYNC_SAVE_IN_PROGRESS);
        }
    };
    SettingsImpl.ASYNC_SAVE_IN_PROGRESS = 'Async Save is in progress, updating settings is not allowed.';
    return SettingsImpl;
}());
exports.SettingsImpl = SettingsImpl;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(6);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(3);
var UIImpl = /** @class */ (function () {
    function UIImpl() {
    }
    UIImpl.prototype.displayDialogAsync = function (url, payload, options) {
        var uiService = ApiShared_1.ApiServiceRegistry.instance.getService("UIService" /* UIService */);
        var notificationService = ApiShared_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        return new Promise(function (resolve, reject) {
            uiService.displayDialogAsync(url, payload || '', options).then(function () {
                var unregisterFn = notificationService.registerHandler(api_internal_contract_js_1.NotificationId.ExtensionDialogUpdate, function (model) {
                    return true; // Let through any dialog update event
                }, function (event) {
                    if (event.isCloseEvent) {
                        resolve(event.closePayload);
                    }
                    else {
                        reject(new ApiShared_1.TableauError(Contract.ErrorCodes.DialogClosedByUser, 'Extension dialog closed by user.'));
                    }
                    unregisterFn();
                });
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    UIImpl.prototype.closeDialog = function (payload) {
        var uiService = ApiShared_1.ApiServiceRegistry.instance.getService("UIService" /* UIService */);
        uiService.closeDialog(payload);
    };
    return UIImpl;
}());
exports.UIImpl = UIImpl;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the external Extensions namespace.
 */
var Extensions = /** @class */ (function () {
    function Extensions(extensionImpl) {
        this.extensionImpl = extensionImpl;
        this.extensionImpl = extensionImpl;
    }
    Object.defineProperty(Extensions.prototype, "dashboardContent", {
        get: function () {
            return this.extensionImpl.dashboardContent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Extensions.prototype, "environment", {
        get: function () {
            return this.extensionImpl.environment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Extensions.prototype, "settings", {
        get: function () {
            return this.extensionImpl.settings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Extensions.prototype, "ui", {
        get: function () {
            return this.extensionImpl.ui;
        },
        enumerable: true,
        configurable: true
    });
    Extensions.prototype.initializeAsync = function (contextMenuCallbacks) {
        return this.extensionImpl.initializeAsync(false, contextMenuCallbacks).then();
    };
    Extensions.prototype.initializeDialogAsync = function () {
        return this.extensionImpl.initializeAsync(true);
    };
    return Extensions;
}());
exports.Extensions = Extensions;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWVjMGM1NDI1NjFlZTU3NjQzYmQiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvSnNBcGlJbnRlcm5hbENvbnRyYWN0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1RhYmxlYXVFcnJvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL0FwaVNoYXJlZC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVXRpbHMvRXJyb3JIZWxwZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1NlcnZpY2VJbXBsQmFzZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9pbnRlcmZhY2UvTWVzc2FnZVR5cGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50TGlzdGVuZXJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvU2luZ2xlRXZlbnRNYW5hZ2VySW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9QYXJhbS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvR2V0RGF0YU1vZGVscy50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2d1aWQvZ3VpZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TaGVldC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9FbnVtQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1RXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaGVldEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1RhYmxlYXVXb3Jrc2hlZXRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvVGFibGVhdVNoZWV0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvR2V0RGF0YVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL0V4dGVuc2lvbnNJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvRXh0ZXJuYWxDb250cmFjdC9FbnVtcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbnRyYWN0L0VudW1zLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJmYWNlL0ludGVybmFsQXBpRGlzcGF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbnRyYWN0L05vdGlmaWNhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb250cmFjdC9QYXJhbWV0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29udHJhY3QvVmVyYnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL1ZlcnNpb25Db252ZXJ0ZXJGYWN0b3J5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9TdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL0lkZW50aXR5VmVyc2lvbkNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9Dcm9zc0ZyYW1lTWVzc2VuZ2VyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvbWVzc2FnaW5nL0Nyb3NzRnJhbWVQcmVwYXJlZE1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvTWVzc2FnZVR5cGVDaGVja3MudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRGFzaGJvYXJkLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1ZlcnNpb25OdW1iZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9EYXNoYm9hcmRJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Rhc2hib2FyZE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TaXplLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1dvcmtzaGVldC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1NoZWV0SW5mb0ltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9Xb3Jrc2hlZXRJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0RhdGFTb3VyY2UudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9EYXRhU291cmNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL0ZpZWxkSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Db25uZWN0aW9uU3VtbWFyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9GaWVsZC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9UYWJsZVN1bW1hcnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL0ZpbHRlckNoYW5nZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvTWFya3NTZWxlY3RlZEV2ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Nyb3NzRnJhbWUvQ3Jvc3NGcmFtZUJvb3RzdHJhcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Dcm9zc0ZyYW1lL0Nyb3NzRnJhbWVEaXNwYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL1JlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9EYXRhU291cmNlU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9GaWx0ZXJTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FbnVtTWFwcGluZ3MvRXh0ZXJuYWxUb0ludGVybmFsRW51bU1hcHBpbmdzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9GaWx0ZXJNb2RlbHMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9HZXREYXRhU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9Ob3RpZmljYXRpb25TZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1BhcmFtZXRlcnNTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1BhcmFtZXRlckltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1BhcmFtZXRlckNoYW5nZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9QYXJhbWV0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9TZWxlY3Rpb25TZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvU2VsZWN0aW9uTW9kZWxzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0Rhc2hib2FyZENvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvRW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvVUkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL1NlcnZpY2VzL1JlZ2lzdGVyQWxsRXh0ZW5zaW9uc1NlcnZpY2VzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL0luaXRpYWxpemF0aW9uU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL1NlcnZpY2VzL0ltcGwvU2V0dGluZ3NTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9VSVNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL1NldHRpbmdzSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvSW1wbC9VSUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvRXh0ZW5zaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM3REEsNkZBQTZGOzs7OztBQUk3RixrQ0FBeUM7Ozs7Ozs7OztBQ0p6Qzs7OztHQUlH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Z0NBQVE7YUFBbkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywwQkFBRTthQUFiO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRU0sb0NBQWUsR0FBdEIsVUFBdUIsb0JBQWtDO1FBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLEVBQVEsQ0FBQztJQUN0RixDQUFDO0lBRU0sMENBQXFCLEdBQTVCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDSCxpQkFBQztBQUFELENBQUM7QUE1QlksZ0NBQVUiLCJmaWxlIjoidGFibGVhdS5leHRlbnNpb25zLjAuMTIuOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0LWV4dGVuc2lvbnMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVlYzBjNTQyNTYxZWU1NzY0M2JkIiwiLy8gVGhpcyBmaWxlIHJlLWV4cG9ydHMgZXZlcnl0aGluZyB3aGljaCBpcyBwYXJ0IG9mIHRoZSBzaGFyZWQgZW1iZWRkaW5nIGFwaSBwdWJsaWMgaW50ZXJmYWNlXG5cbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9EYXRhU291cmNlSW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvRGF0YVRhYmxlSW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvRW51bXMnO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L0V2ZW50SW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvRmlsdGVySW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvU2VsZWN0aW9uSW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvUGFyYW1ldGVySW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvU2VsZWN0aW9uSW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvU2hlZXRJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9UYWJsZWF1RXJyb3InO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0LnRzIiwiLyoqXG4gKiBUaGlzIGlzIHlvdXIgbWFpbi4gVGhpcyBpcyB3aGVyZSB5b3UgcmUtZXhwb3J0IGV2ZXJ5dGhpbmcgeW91IHdhbnQgdG8gYmUgcHVibGljbHkgYXZhaWxhYmxlLlxuICpcbiAqIFRoZSBidWlsZCBlbmZvcmNlcyB0aGF0IHRoZSBmaWxlIGhhcyB0aGUgc2FtZSBuYW1lIGFzIHRoZSBnbG9iYWwgdmFyaWFibGUgdGhhdCBpcyBleHBvcnRlZC5cbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL2NvbnRyYWN0L0VudW1zJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlL0ludGVybmFsQXBpRGlzcGF0Y2hlcic7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRyYWN0L01vZGVscyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRyYWN0L05vdGlmaWNhdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb250cmFjdC9QYXJhbWV0ZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vY29udHJhY3QvVmVyYnMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2UvVmVyc2lvbk51bWJlcic7XG5leHBvcnQgKiBmcm9tICcuL3ZlcnNpb25pbmcvVmVyc2lvbkNvbnZlcnRlckZhY3RvcnknO1xuZXhwb3J0ICogZnJvbSAnLi92ZXJzaW9uaW5nL0ludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcblxuLy8gVGhlc2UgYXJlIHRoZSBleHBvcnRzIGZyb20gdGhlIG1lc3NhZ2luZyBzdHVmZlxuXG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9Dcm9zc0ZyYW1lTWVzc2VuZ2VyJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnaW5nL2ludGVyZmFjZS9NZXNzYWdlRGlzcGF0Y2hlcic7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9pbnRlcmZhY2UvTWVzc2FnZUxpc3RlbmVyJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnaW5nL2ludGVyZmFjZS9NZXNzYWdlVHlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdpbmcvaW50ZXJmYWNlL01lc3Nlbmdlcic7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9pbnRlcmZhY2UvUHJlcGFyZWRNZXNzYWdlJztcblxuLy8gRXhwb3J0IGEgaGFyZGNvZGVkIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGNvbnRyYWN0LiBUaGlzIHNob3VsZCBtYXRjaCB3aGF0J3MgaW4gcGFja2FnZS5qc29uLlxuLy8gTm9ybWFsbHksIHdlJ2QgdXNlIHNvbWUgc29ydCBvZiB3ZWJwYWNrIHJlcGxhY2VtZW50IHRvIGluamVjdCB0aGlzIGludG8gY29kZSwgYnV0IHRoYXQgZG9lc24ndFxuLy8gd29yayB3aXRoIHRoZSBtb2R1bGUtZGV2LXNjcmlwdHMgYW5kIHRoaXMgaXNuJ3QgdG9vIG11Y2ggd29yay5cbi8vIElmIHlvdSBmb3JnZXQgdG8ga2VlcCB0aGlzIGluIHN5bmMgd2l0aCBwYWNrYWdlLmpzb24sIGEgdGVzdCB3aWxsIGZhaWwgc28gd2Ugc2hvdWxkIGJlIG9rLlxuZXhwb3J0IGNvbnN0IElOVEVSTkFMX0NPTlRSQUNUX1ZFUlNJT04gPSB7XG4gIG1ham9yOiAxLFxuICBtaW5vcjogMCxcbiAgZml4OiAwXG59O1xuXG4vLyBFeHBvcnQgdGhlIHZlcnNpb24gbnVtYmVyIG9mIG1lc3NhZ2luZyBmb3IgY29uc3VtZXJzIHRvIHVzZS5cbi8vIEJlIHZlcnkgY2FyZWZ1bCBtYWtpbmcgYW55IHVwZGF0ZXMgdG8gdGhpcyBjb250cmFjdCB3aGljaCBicmVhayB2ZXJzaW9uIGNvbXBhdGliaWxpdHkuXG5leHBvcnQgY29uc3QgTUVTU0FHSU5HX1ZFUlNJT04gPSB7XG4gIG1ham9yOiAxLFxuICBtaW5vcjogMCxcbiAgZml4OiAwXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9Kc0FwaUludGVybmFsQ29udHJhY3QudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuLyoqXG4gKiBDdXN0b20gZXJyb3IgY2xhc3MgdGhhdCBleHRlbmRzIHRoZSBkZWZhdWx0IEphdmFTY3JpcHQgRXJyb3Igb2JqZWN0LlxuICogVGhpcyBhbGxvd3MgdXMgdG8gcHJvdmlkZSBhIGZpZWxkIHdpdGggYSBzcGVjaWZpYyBlcnJvciBjb2RlXG4gKiBzbyB0aGF0IGRldmVsb3BlcnMgY2FuIG1vcmUgZWFzaWx5IHByb2dyYW1tYXRpY2FsbHkgcmVzcG9uZFxuICogdG8gZXJyb3Igc2NlbmFyaW9zLlxuICovXG5leHBvcnQgY2xhc3MgVGFibGVhdUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZXJyb3JDb2RlOiBDb250cmFjdC5FcnJvckNvZGVzLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgJHtfZXJyb3JDb2RlfTogJHttZXNzYWdlfWApO1xuXG4gICAgLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQtd2lraS9ibG9iL21hc3Rlci9CcmVha2luZy1DaGFuZ2VzLm1kI2V4dGVuZGluZy1idWlsdC1pbnMtbGlrZS1lcnJvci1hcnJheS1hbmQtbWFwLW1heS1uby1sb25nZXItd29ya1xuICAgIC8vIEVycm9yIGluaGVyaXRhbmNlIGRvZXMgbm90IHdvcmsgcHJvcGVydGx5IHdoZW4gY29tcGlsaW5nIHRvIEVTNSwgdGhpcyBpcyBhIHdvcmthcm91bmQgdG8gZm9yY2VcbiAgICAvLyB0aGUgcHJvdG8gY2hhaW4gdG8gYmUgYnVpbHQgY29ycmVjdGx5LiAgU2VlIHRoZSBnaXRodWIgbGluayBhYm92ZSBmb3IgZGV0YWlscy5cbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgVGFibGVhdUVycm9yLnByb3RvdHlwZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVycm9yQ29kZSgpOiBDb250cmFjdC5FcnJvckNvZGVzIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JDb2RlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9UYWJsZWF1RXJyb3IudHMiLCIvLyBFeHBvcnQgZXZlcnl0aGluZyB3aGljaCBoYWQgYmVlbiBwcmV2aW91c2x5IGluIHRoZSBhcGktc2hhcmVkIG1vZHVsZVxuXG5leHBvcnQgeyBEYXNoYm9hcmQgfSBmcm9tICcuL0FwaVNoYXJlZC9EYXNoYm9hcmQnO1xuZXhwb3J0IHsgRXZlbnRMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuL0FwaVNoYXJlZC9FdmVudExpc3RlbmVyTWFuYWdlcic7XG5leHBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXIgfSBmcm9tICcuL0FwaVNoYXJlZC9TaW5nbGVFdmVudE1hbmFnZXInO1xuZXhwb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi9BcGlTaGFyZWQvVGFibGVhdUVycm9yJztcbmV4cG9ydCB7IFZlcnNpb25OdW1iZXIgfSBmcm9tICcuL0FwaVNoYXJlZC9WZXJzaW9uTnVtYmVyJztcblxuZXhwb3J0IHsgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIH0gZnJvbSAnLi9BcGlTaGFyZWQvRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5leHBvcnQgeyBUYWJsZWF1RXZlbnQgfSBmcm9tICcuL0FwaVNoYXJlZC9FdmVudHMvVGFibGVhdUV2ZW50JztcbmV4cG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlckltcGwgfSBmcm9tICcuL0FwaVNoYXJlZC9JbXBsL1NpbmdsZUV2ZW50TWFuYWdlckltcGwnO1xuZXhwb3J0IHsgRGFzaGJvYXJkSW1wbCB9IGZyb20gJy4vQXBpU2hhcmVkL0ltcGwvRGFzaGJvYXJkSW1wbCc7XG5leHBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1NlcnZpY2VJbXBsQmFzZSc7XG5leHBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuL0FwaVNoYXJlZC9VdGlscy9FcnJvckhlbHBlcnMnO1xuXG5leHBvcnQgKiBmcm9tICcuL0FwaVNoYXJlZC9Dcm9zc0ZyYW1lL0Nyb3NzRnJhbWVCb290c3RyYXAnO1xuZXhwb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vQXBpU2hhcmVkL1NlcnZpY2VzL05vdGlmaWNhdGlvblNlcnZpY2UnO1xuXG5leHBvcnQgKiBmcm9tICcuL0FwaVNoYXJlZC9TZXJ2aWNlcy9SZWdpc3RlckFsbFNoYXJlZFNlcnZpY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vQXBpU2hhcmVkL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL0FwaVNoYXJlZC50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vVGFibGVhdUVycm9yJztcblxuLyoqXG4gKiBCYXNlIGludGVyZmFjZSBmb3IgYW4gYXBpIHNlcnZpY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcGlTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIG5hbWUgZm9yIHRoaXMgc2VydmljZS5cbiAgICovXG4gIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQ29sbGVjdGlvbiBvZiBzZXJ2aWNlIG5hbWUgd2hpY2ggd2lsbCBiZSByZWdpc3RlcmVkIGluIHRoZSBhcGktc2hhcmVkIHByb2plY3RcbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gU2VydmljZU5hbWVzIHtcbiAgRGF0YVNvdXJjZVNlcnZpY2UgPSAnZGF0YS1zb3VyY2Utc2VydmljZScsXG4gIEdldERhdGEgPSAnZ2V0LWRhdGEtc2VydmljZScsXG4gIEZpbHRlciA9ICdmaWx0ZXItc2VydmljZScsXG4gIE5vdGlmaWNhdGlvbiA9ICdub3RpZmljYXRpb24tc2VydmljZScsXG4gIFBhcmFtZXRlcnMgPSAncGFyYW1ldGVycy1zZXJ2aWNlJyxcbiAgU2VsZWN0aW9uID0gJ3NlbGVjdGlvbi1zZXJ2aWNlJ1xufVxuXG4vKipcbiAqIERvIHNvbWUgZ2xvYmFibCBkZWNsYXJhdGlvbnMgc28gd2UgY2FuIGNyZWF0ZSBhIHNpbmdsZXRvbiBvbiB0aGUgd2luZG93IG9iamVjdFxuICovXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cgeyBfX3RhYmxlYXVBcGlTZXJ2aWNlUmVnaXN0cnk6IFNlcnZpY2VSZWdpc3RyeSB8IHVuZGVmaW5lZDsgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VSZWdpc3RyeSB7XG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBuZXcgc2VydmljZSBpbnRvIHRoZSBzZXJ2aWNlIHJlZ2lzdHJ5LiBBbnkgZXhpc3Rpbmcgb25lIHdpbGxcbiAgICogYmUgb3ZlcndyaXR0ZW4uIHRoZSBzZXJ2aWNlIGlzIHJlZ2lzdGVyZWQgdW5kZXIgc2VydmljZS5zZXJ2aWNlTmFtZVxuICAgKlxuICAgKiBAcGFyYW0ge0FwaVNlcnZpY2V9IHNlcnZpY2UgVGhlIHNlcnZpdmUgdG8gcmVnaXN0ZXJcbiAgICovXG4gIHJlZ2lzdGVyU2VydmljZShzZXJ2aWNlOiBBcGlTZXJ2aWNlKTogdm9pZDtcblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBnaXZlbiBzZXJ2aWNlIGZyb20gdGhlIHJlZ2lzdHJ5LiBJZiB0aGVyZSBpcyBub3QgYVxuICAgKiBzZXJ2aWNlIHJlZ2lzdGVyZWQgdW5kZXIgdGhhdCBuYW1lLCB0aHJvd3MgYW5kIGVycm9yXG4gICAqXG4gICAqIEB0ZW1wbGF0ZSBUIFRoZSB0eXBlIG9mIHRoZSBzZXJ2aWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlTmFtZSBUaGUgbmFtZSBvZiB0aGUgc2VydmljZS5cbiAgICogQHJldHVybnMge1R9IFRoZSByZXF1ZXN0ZWQgc2VydmljZVxuICAgKi9cbiAgZ2V0U2VydmljZTxUIGV4dGVuZHMgQXBpU2VydmljZT4oc2VydmljZU5hbWU6IHN0cmluZyk6IFQ7XG59XG5cbmNsYXNzIFNlcnZpY2VSZWdpc3RyeUltcGwgaW1wbGVtZW50cyBTZXJ2aWNlUmVnaXN0cnkge1xuICBwcml2YXRlIF9zZXJ2aWNlczogeyBbc2VydmljZU5hbWU6IHN0cmluZ106IEFwaVNlcnZpY2U7IH07XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3NlcnZpY2VzID0ge307XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJTZXJ2aWNlKHNlcnZpY2U6IEFwaVNlcnZpY2UpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXJ2aWNlc1tzZXJ2aWNlLnNlcnZpY2VOYW1lXSA9IHNlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VydmljZTxUIGV4dGVuZHMgQXBpU2VydmljZT4oc2VydmljZU5hbWU6IHN0cmluZyk6IFQge1xuICAgIGlmICghdGhpcy5fc2VydmljZXMuaGFzT3duUHJvcGVydHkoc2VydmljZU5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgYFNlcnZpY2Ugbm90IHJlZ2lzdGVyZWQ6ICR7c2VydmljZU5hbWV9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NlcnZpY2VzW3NlcnZpY2VOYW1lXSBhcyBUO1xuICB9XG59XG5cbi8qKlxuICogc3RhdGljIGNsYXNzIHVzZWQgZm9yIGdldHRpbmcgYWNjZXNzIHRvIHRoZSBzaW5nbGUgaW5zdGFuY2VcbiAqIG9mIHRoZSBBcGlTZXJ2aWNlUmVnaXN0cnlcbiAqL1xuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2VSZWdpc3RyeSB7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFNlcnZpY2VSZWdpc3RyeVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogU2VydmljZVJlZ2lzdHJ5IHtcbiAgICBpZiAoIXdpbmRvdy5fX3RhYmxlYXVBcGlTZXJ2aWNlUmVnaXN0cnkpIHtcbiAgICAgIEFwaVNlcnZpY2VSZWdpc3RyeS5zZXRJbnN0YW5jZShuZXcgU2VydmljZVJlZ2lzdHJ5SW1wbCgpKTtcbiAgICB9XG5cbiAgICBpZiAoIXdpbmRvdy5fX3RhYmxlYXVBcGlTZXJ2aWNlUmVnaXN0cnkpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAnU2VydmljZSByZWdpc3RyeSBmYWlsZWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2luZG93Ll9fdGFibGVhdUFwaVNlcnZpY2VSZWdpc3RyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIG92ZXJyaWRlIHRoZSByZWdpc3RyeSBpbnN0YW5jZS4gQ2FuIGJlIHVzZWQgYnkgdW5pdCB0ZXN0c1xuICAgKlxuICAgKiBAcGFyYW0ge1NlcnZpY2VSZWdpc3RyeX0gc2VydmljZVJlZ2lzdHJ5IFRoZSBuZXcgcmVnaXN0cnlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2V0SW5zdGFuY2Uoc2VydmljZVJlZ2lzdHJ5PzogU2VydmljZVJlZ2lzdHJ5KTogdm9pZCB7XG4gICAgd2luZG93Ll9fdGFibGVhdUFwaVNlcnZpY2VSZWdpc3RyeSA9IHNlcnZpY2VSZWdpc3RyeTtcbiAgfVxuXG4gIC8vIFByaXZhdGUgdG8gYXZvaWQgYW55b25lIGNvbnN0cnVjdGluZyB0aGlzXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeS50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgUGFyYW0gfSBmcm9tICcuL1BhcmFtJztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vVGFibGVhdUVycm9yJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gY29uc3RydWN0IGNvbW1vbiBlcnJvcnMgdGhyb3VnaG91dCB0aGUgZXh0ZXJuYWxcbiAqIHByb2plY3RzIChhcGktc2hhcmVkLCBleHRlbnNpb25zLWFwaSwgZXRjLikuICBJdCBoYXMgc29tZSBkdXBsaWNhdGlvbiB3aXRoXG4gKiB0aGUgRXJyb3JIZWxwZXJzIGNsYXNzIGluIGFwaS1jb3JlLCBidXQgaXMgc2VwYXJhdGUgZHVlIHRvIHRoZSBuZWVkIHRvIHRocm93XG4gKiBhbiBleHRlcm5hbCBUYWJsZWF1RXJyb3IgdnMuIGFuIEludGVybmFsVGFibGVhdUVycm9yLlxuICovXG5leHBvcnQgY2xhc3MgRXJyb3JIZWxwZXJzIHtcbiAgLyoqXG4gICAqIFRocm93cyB3aXRoIGNvZGUgSW50ZXJuYWxFcnJvci5cbiAgICpcbiAgICogQHBhcmFtIGFwaU5hbWUgbmFtZSBvZiBhcGkgdGhhdCB3YXMgY2FsbGVkLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhcGlOb3RJbXBsZW1lbnRlZChhcGlOYW1lOiBzdHJpbmcpOiBUYWJsZWF1RXJyb3Ige1xuICAgIHJldHVybiBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgYCR7YXBpTmFtZX0gQVBJIG5vdCB5ZXQgaW1wbGVtZW50ZWQuYCk7XG4gIH1cblxuICAvKipcbiAgICogVGhyb3dzIGFuIGludGVybmFsIGVycm9yIGlmIGFyZ3VtZW50IGlzIG51bGwgb3IgdW5kZWZpbmVkLlxuICAgKlxuICAgKiBAcGFyYW0gYXJndW1lbnRWYWx1ZSB2YWx1ZSB0byB2ZXJpZnlcbiAgICogQHBhcmFtIGFyZ3VtZW50TmFtZSBuYW1lIG9mIGFyZ3VtZW50IHRvIHZlcmlmeVxuICAgKi9cbiAgLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcHVibGljIHN0YXRpYyB2ZXJpZnlJbnRlcm5hbFZhbHVlKGFyZ3VtZW50VmFsdWU6IGFueSwgYXJndW1lbnROYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoYXJndW1lbnRWYWx1ZSA9PT0gbnVsbCB8fCBhcmd1bWVudFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgJHthcmd1bWVudFZhbHVlfSBpcyBpbnZhbGlkIHZhbHVlIGZvcjogJHthcmd1bWVudE5hbWV9YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRocm93cyBhbiBJbnZhbGlkUGFyYW1ldGVyIGVycm9yIGlmIGFyZ3VtZW50IGlzIG51bGwgb3IgdW5kZWZpbmVkLlxuICAgKlxuICAgKiBAcGFyYW0gYXJndW1lbnRWYWx1ZSB2YWx1ZSB0byB2ZXJpZnlcbiAgICogQHBhcmFtIGFyZ3VtZW50TmFtZSBuYW1lIG9mIGFyZ3VtZW50IHRvIHZlcmlmeVxuICAgKi9cbiAgLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcHVibGljIHN0YXRpYyB2ZXJpZnlQYXJhbWV0ZXIoYXJndW1lbnRWYWx1ZTogYW55LCBhcmd1bWVudE5hbWU6IHN0cmluZykge1xuICAgIGlmIChhcmd1bWVudFZhbHVlID09PSBudWxsIHx8IGFyZ3VtZW50VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsIGAke2FyZ3VtZW50VmFsdWV9IGlzIGludmFsaWQgdmFsdWUgZm9yIHBhcmFtdGVyOiAke2FyZ3VtZW50TmFtZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhyb3dzIGFuIEludmFsaWRQYXJhbWV0ZXIgZXJyb3IgaWYgYXJndW1lbnQgaXMgZW1wdHkgc3RyaW5nLCBudWxsIG9yIHVuZGVmaW5lZC5cbiAgICpcbiAgICogQHBhcmFtIGFyZ3VtZW50VmFsdWUgdmFsdWUgdG8gdmVyaWZ5XG4gICAqIEBwYXJhbSBhcmd1bWVudE5hbWUgbmFtZSBvZiBhcmd1bWVudCB0byB2ZXJpZnlcbiAgICovXG4gIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyaWZ5U3RyaW5nUGFyYW1ldGVyKGFyZ3VtZW50VmFsdWU6IHN0cmluZywgYXJndW1lbnROYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoYXJndW1lbnRWYWx1ZSA9PT0gbnVsbCB8fCBhcmd1bWVudFZhbHVlID09PSB1bmRlZmluZWQgfHwgYXJndW1lbnRWYWx1ZSA9PT0gJycpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCBgJHthcmd1bWVudFZhbHVlfSBpcyBpbnZhbGlkIHZhbHVlIGZvciBwYXJhbXRlcjogJHthcmd1bWVudE5hbWV9YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHBhc3NlZCB2YWx1ZSBpcyBhIHZhbGlkIHZhbHVlIGZvciB0aGF0IGVudW0uXG4gICAqIFRocm93cyBhbiBJbnZhbGlkUGFyYW1ldGVyIGVycm9yIGlmIHRoZSBlbnVtIHZhbHVlIGlzIG5vdCB2YWxpZC5cbiAgICpcbiAgICogU3RyaW5nIGVudW1zIGFyZSB7c3RyaW5nIDogc3RyaW5nfSBkaWN0aW9uYXJpZXMgd2hpY2ggYXJlIG5vdCByZXZlcnNlIG1hcHBhYmxlXG4gICAqIFRoaXMgaXMgYW4gdWdseSB3b3JrYXJvdW5kXG4gICAqXG4gICAqIEBwYXJhbSBlbnVtVmFsdWUgdmFsdWUgdG8gdmVyaWZ5XG4gICAqIEBwYXJhbSBlbnVtVHlwZSBlbnVtIHRvIHZlcmlmeSBhZ2FpbnN0XG4gICAqL1xuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwdWJsaWMgc3RhdGljIHZlcmlmeUVudW1WYWx1ZTxFbnVtVHlwZT4oZW51bVZhbHVlOiBFbnVtVHlwZSwgZW51bVR5cGU6IGFueSkge1xuICAgIGxldCBpc1ZhbGlkOiBib29sZWFuID0gZmFsc2U7XG4gICAgT2JqZWN0LmtleXMoZW51bVR5cGUpLmZvckVhY2goKGVudW1LZXkpID0+IHtcbiAgICAgIGlmIChlbnVtVHlwZVtlbnVtS2V5XSA9PT0gZW51bVZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgaXNWYWxpZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCBgJHtlbnVtVmFsdWV9IGlzIGludmFsaWQgdmFsdWUgZm9yIGVudW06ICR7ZW51bVR5cGV9YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHRoZSBwYXJhbXMgbWluIGFuZCBtYXggZm9yIGFwcGx5aW5nIHJhbmdlIGZpbHRlci5cbiAgICogVGhyb3dzIHdpdGggZXJyb3IgY29kZSBJbnZhbGlkUGFyYW1ldGVyIGlmIHJhbmdlIGlzIGludmFsaWQuXG4gICAqXG4gICAqIEBwYXJhbSBtaW4gcmFuZ2UgbWluXG4gICAqIEBwYXJhbSBtYXggcmFuZ2UgbWF4XG4gICAqL1xuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwdWJsaWMgc3RhdGljIHZlcmlmeVJhbmdlUGFyYW1UeXBlKG1pbjogYW55LCBtYXg6IGFueSk6IHZvaWQge1xuICAgIGlmICghbWluICYmICFtYXgpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLFxuICAgICAgICAnVW5leHBlY3RlZCBpbnZhbGlkIHBhcmFtIHZhbHVlLCBhdCBsZWFzdCBvbmUgb2YgbWluIG9yIG1heCBpcyByZXF1aXJlZC4nKTtcbiAgICB9XG5cbiAgICBpZiAobWluICYmICFQYXJhbS5pc1R5cGVOdW1iZXIobWluKSAmJiAhUGFyYW0uaXNUeXBlRGF0ZShtaW4pKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlcixcbiAgICAgICAgJ1VuZXhwZWN0ZWQgaW52YWxpZCBwYXJhbSB2YWx1ZSwgb25seSBEYXRlIGFuZCBudW1iZXIgYXJlIGFsbG93ZWQgZm9yIHBhcmFtZXRlciBtaW4uJyk7XG4gICAgfVxuXG4gICAgaWYgKG1heCAmJiAhUGFyYW0uaXNUeXBlTnVtYmVyKG1heCkgJiYgIVBhcmFtLmlzVHlwZURhdGUobWF4KSkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsXG4gICAgICAgICdVbmV4cGVjdGVkIGludmFsaWQgcGFyYW0gdmFsdWUsIG9ubHkgRGF0ZSBhbmQgbnVtYmVyIGFyZSBhbGxvd2VkIGZvciBwYXJhbWV0ZXIgbWF4LicpO1xuICAgIH1cblxuICAgIGlmIChtaW4gJiYgbWF4ICYmIHR5cGVvZiAobWluKSAhPT0gdHlwZW9mIChtYXgpKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlcixcbiAgICAgICAgJ1VuZXhwZWN0ZWQgaW52YWxpZCBwYXJhbSB2YWx1ZSwgcGFyYW1ldGVycyBtaW4gYW5kIG1heCBzaG91bGQgYmUgb2YgdGhlIHNhbWUgdHlwZS4nKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1V0aWxzL0Vycm9ySGVscGVycy50cyIsIi8vIFRoaXMgZmlsZSByZS1leHBvcnRzIGV2ZXJ5dGhpbmcgd2hpY2ggaXMgcGFydCBvZiB0aGUgZXh0ZW5zaW9ucyBhcGkgcHVibGljIGludGVyZmFjZVxuXG4vLyBFeHBvcnQgZXZlcnl0aGluZyBmcm9tIHRoZSBzaGFyZWQgZmlsZVxuZXhwb3J0ICogZnJvbSAnLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuLy8gRXhwb3J0IHRoZSBuYW1lc3BhY2VzIHdoaWNoIGFyZSBzcGVjaWZpYyB0byBleHRlbnNpb25zXG5leHBvcnQgeyBFeHRlbnNpb25zIH0gZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvRXh0ZW5zaW9ucyc7XG5leHBvcnQgeyBEYXNoYm9hcmRDb250ZW50IH0gZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvRGFzaGJvYXJkQ29udGVudCc7XG5leHBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL0Vudmlyb25tZW50JztcbmV4cG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvU2V0dGluZ3MnO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVUknO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0LnRzIiwiaW1wb3J0IHtcbiAgQ29sdW1uVHlwZSBhcyBFeHRlcm5hbENvbHVtblR5cGUsXG4gIERhc2hib2FyZE9iamVjdFR5cGUgYXMgRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLFxuICBEYXRhVHlwZSBhcyBFeHRlcm5hbERhdGFUeXBlLFxuICBEYXRlUmFuZ2VUeXBlIGFzIEV4dGVybmFsRGF0ZVJhbmdlVHlwZSxcbiAgRXJyb3JDb2RlcyBhcyBFeHRlcm5hbEVycm9yQ29kZXMsXG4gIEV4dGVuc2lvbkNvbnRleHQgYXMgRXh0ZXJuYWxFeHRlbnNpb25zQ29udGV4dCxcbiAgRXh0ZW5zaW9uTW9kZSBhcyBFeHRlcm5hbEV4dGVuc2lvbnNNb2RlLFxuICBGaWVsZEFnZ3JlZ2F0aW9uVHlwZSBhcyBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLFxuICBGaWVsZFJvbGVUeXBlIGFzIEV4dGVybmFsRmllbGRSb2xlVHlwZSxcbiAgRmlsdGVyVHlwZSBhcyBFeHRlcm5hbEZpbHRlclR5cGUsXG4gIEZpbHRlclVwZGF0ZVR5cGUgYXMgRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLFxuICBQYXJhbWV0ZXJWYWx1ZVR5cGUgYXMgRXh0ZXJuYWxQYXJhbWV0ZXJWYWx1ZVR5cGUsXG4gIFBlcmlvZFR5cGUgYXMgRXh0ZXJuYWxEYXRlUGVyaW9kLFxuICBTaGVldFR5cGUgYXMgRXh0ZXJuYWxTaGVldFR5cGUsXG59IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBDb2x1bW5UeXBlIGFzIEludGVybmFsQ29sdW1uVHlwZSxcbiAgRGFzaGJvYXJkT2JqZWN0VHlwZSBhcyBJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUsXG4gIERhdGFUeXBlIGFzIEludGVybmFsRGF0YVR5cGUsXG4gIERhdGVSYW5nZVR5cGUgYXMgSW50ZXJuYWxEYXRlUmFuZ2VUeXBlLFxuICBEYXRlU3RlcFBlcmlvZCBhcyBJbnRlcm5hbERhdGVTdGVwUGVyaW9kLFxuICBEb21haW5SZXN0cmljdGlvblR5cGUgYXMgSW50ZXJuYWxEb21haW5SZXN0cmljdGlvblR5cGUsXG4gIEVycm9yQ29kZXMgYXMgSW50ZXJuYWxFcnJvckNvZGVzLFxuICBFeHRlbnNpb25Db250ZXh0IGFzIEludGVybmFsRXh0ZW5zaW9uc0NvbnRleHQsXG4gIEV4dGVuc2lvbk1vZGUgYXMgSW50ZXJuYWxFeHRlbnNpb25zTW9kZSxcbiAgRmllbGRBZ2dyZWdhdGlvblR5cGUgYXMgSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZSxcbiAgRmllbGRSb2xlVHlwZSBhcyBJbnRlcm5hbEZpZWxkUm9sZVR5cGUsXG4gIEZpbHRlclR5cGUgYXMgSW50ZXJuYWxGaWx0ZXJUeXBlLFxuICBGaWx0ZXJVcGRhdGVUeXBlIGFzIEludGVybmFsRmlsdGVyVXBkYXRlVHlwZSxcbiAgU2hlZXRUeXBlIGFzIEludGVybmFsU2hlZXRUeXBlLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBFbnVtQ29udmVydGVyIH0gZnJvbSAnLi4vVXRpbHMvRW51bUNvbnZlcnRlcic7XG5cbi8qIHRzbGludDpkaXNhYmxlOnR5cGVkZWYgLSBEaXNhYmxlIHRoaXMgdG8gbWFrZSBkZWNsYXJpbmcgdGhlc2UgY2xhc3NlcyBhIGJpdCBlYXNpZXIgKi9cbi8qKlxuICogTWFwcyBlbnVtcyB1c2VkIGJ5IHRoZSBpbnRlcm5hbC1hcGktY29udHJhY3QgdG8gdGhlIGVudW1zIHVzZWRcbiAqIGluIHRoZSBleHRlcm5hbC1hcGktY29udHJhY3QsIHdoaWNoIGRldmVsb3BlcnMgY29kZSBhZ2FpbnN0LlxuICovXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIHtcbiAgcHVibGljIHN0YXRpYyBleHRlbnNpb25Db250ZXh0ID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxFeHRlbnNpb25zQ29udGV4dCwgRXh0ZXJuYWxFeHRlbnNpb25zQ29udGV4dD4oe1xuICAgIFtJbnRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LkRlc2t0b3BdOiBFeHRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LkRlc2t0b3AsXG4gICAgW0ludGVybmFsRXh0ZW5zaW9uc0NvbnRleHQuU2VydmVyXTogRXh0ZXJuYWxFeHRlbnNpb25zQ29udGV4dC5TZXJ2ZXJcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBleHRlbnNpb25Nb2RlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxFeHRlbnNpb25zTW9kZSwgRXh0ZXJuYWxFeHRlbnNpb25zTW9kZT4oe1xuICAgIFtJbnRlcm5hbEV4dGVuc2lvbnNNb2RlLkF1dGhvcmluZ106IEV4dGVybmFsRXh0ZW5zaW9uc01vZGUuQXV0aG9yaW5nLFxuICAgIFtJbnRlcm5hbEV4dGVuc2lvbnNNb2RlLlZpZXdpbmddOiBFeHRlcm5hbEV4dGVuc2lvbnNNb2RlLlZpZXdpbmdcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBjb2x1bW5UeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxDb2x1bW5UeXBlLCBFeHRlcm5hbENvbHVtblR5cGU+KHtcbiAgICBbSW50ZXJuYWxDb2x1bW5UeXBlLkNvbnRpbnVvdXNdOiBFeHRlcm5hbENvbHVtblR5cGUuQ29udGludW91cyxcbiAgICBbSW50ZXJuYWxDb2x1bW5UeXBlLkRpc2NyZXRlXTogRXh0ZXJuYWxDb2x1bW5UeXBlLkRpc2NyZXRlXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZmllbGRBZ2dyZWdhdGlvblR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLCBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlPih7XG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQXR0cl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQXR0cixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5BdmddOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkF2ZyxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Db3VudF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQ291bnQsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQ291bnRkXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Db3VudGQsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuRGF5XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5EYXksXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuRW5kXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5FbmQsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuSG91cl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuSG91cixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Jbk91dF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuSW5PdXQsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuS3VydG9zaXNdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkt1cnRvc2lzLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1heF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWF4LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1keV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWR5LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1lZGlhbl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWVkaWFuLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1pbl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWluLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1pbnV0ZV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWludXRlLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1vbnRoWWVhcl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTW9udGhZZWFyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk5vbmVdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk5vbmUsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuUXRyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5RdHIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuUXVhcnQxXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5RdWFydDEsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuUXVhcnQzXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5RdWFydDMsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU2Vjb25kXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TZWNvbmQsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU2tld25lc3NdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlNrZXduZXNzLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlN0ZGV2XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TdGRldixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TdGRldnBdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlN0ZGV2cCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TdW1dOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlN1bSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY0RheV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNEYXksXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNIb3VyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY0hvdXIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNNaW51dGVdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jTWludXRlLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jTW9udGhdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jTW9udGgsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNRdHJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jUXRyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jU2Vjb25kXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1NlY29uZCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1dlZWtdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jV2VlayxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1llYXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jWWVhcixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Vc2VyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Vc2VyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlZhcl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVmFyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlZhcnBdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlZhcnAsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuV2Vla106IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuV2VlayxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5XZWVrZGF5XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5XZWVrZGF5LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlllYXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlllYXIsXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZmllbGRSb2xlVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRmllbGRSb2xlVHlwZSwgRXh0ZXJuYWxGaWVsZFJvbGVUeXBlPih7XG4gICAgW0ludGVybmFsRmllbGRSb2xlVHlwZS5EaW1lbnNpb25dOiBFeHRlcm5hbEZpZWxkUm9sZVR5cGUuRGltZW5zaW9uLFxuICAgIFtJbnRlcm5hbEZpZWxkUm9sZVR5cGUuTWVhc3VyZV06IEV4dGVybmFsRmllbGRSb2xlVHlwZS5NZWFzdXJlLFxuICAgIFtJbnRlcm5hbEZpZWxkUm9sZVR5cGUuVW5rbm93bl06IEV4dGVybmFsRmllbGRSb2xlVHlwZS5Vbmtub3duLFxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIHNoZWV0VHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsU2hlZXRUeXBlLCBFeHRlcm5hbFNoZWV0VHlwZT4oe1xuICAgIFtJbnRlcm5hbFNoZWV0VHlwZS5EYXNoYm9hcmRdOiBFeHRlcm5hbFNoZWV0VHlwZS5EYXNoYm9hcmQsXG4gICAgW0ludGVybmFsU2hlZXRUeXBlLlN0b3J5XTogRXh0ZXJuYWxTaGVldFR5cGUuU3RvcnksXG4gICAgW0ludGVybmFsU2hlZXRUeXBlLldvcmtzaGVldF06IEV4dGVybmFsU2hlZXRUeXBlLldvcmtzaGVldFxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGRhc2hib2FyZE9iamVjdFR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUsIEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZT4oe1xuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuRXh0ZW5zaW9uXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkV4dGVuc2lvbixcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkJsYW5rXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkJsYW5rLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuSW1hZ2VdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuSW1hZ2UsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5MZWdlbmRdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuTGVnZW5kLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuUGFnZUZpbHRlcl06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5QYWdlRmlsdGVyLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuUGFyYW1ldGVyQ29udHJvbF06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5QYXJhbWV0ZXJDb250cm9sLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuUXVpY2tGaWx0ZXJdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuUXVpY2tGaWx0ZXIsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5UZXh0XTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlRleHQsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5UaXRsZV06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5UaXRsZSxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLldlYlBhZ2VdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuV2ViUGFnZSxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLldvcmtzaGVldF06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5Xb3Jrc2hlZXRcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBkYXRhVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRGF0YVR5cGUsIEV4dGVybmFsRGF0YVR5cGU+KHtcbiAgICBbSW50ZXJuYWxEYXRhVHlwZS5Cb29sXTogRXh0ZXJuYWxEYXRhVHlwZS5Cb29sLFxuICAgIFtJbnRlcm5hbERhdGFUeXBlLkRhdGVdOiBFeHRlcm5hbERhdGFUeXBlLkRhdGUsXG4gICAgW0ludGVybmFsRGF0YVR5cGUuRGF0ZVRpbWVdOiBFeHRlcm5hbERhdGFUeXBlLkRhdGVUaW1lLFxuICAgIFtJbnRlcm5hbERhdGFUeXBlLkZsb2F0XTogRXh0ZXJuYWxEYXRhVHlwZS5GbG9hdCxcbiAgICBbSW50ZXJuYWxEYXRhVHlwZS5JbnRdOiBFeHRlcm5hbERhdGFUeXBlLkludCxcbiAgICBbSW50ZXJuYWxEYXRhVHlwZS5TdHJpbmddOiBFeHRlcm5hbERhdGFUeXBlLlN0cmluZ1xuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGZpbHRlclVwZGF0ZVR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUsIEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZT4oe1xuICAgIFtJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWRkXTogRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFkZCxcbiAgICBbSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFsbF06IEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BbGwsXG4gICAgW0ludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZW1vdmVdOiBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVtb3ZlLFxuICAgIFtJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVwbGFjZV06IEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZXBsYWNlXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgYWxsb3dhYmxlVmFsdWVzID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxEb21haW5SZXN0cmljdGlvblR5cGUsIEV4dGVybmFsUGFyYW1ldGVyVmFsdWVUeXBlPih7XG4gICAgW0ludGVybmFsRG9tYWluUmVzdHJpY3Rpb25UeXBlLkFsbF06IEV4dGVybmFsUGFyYW1ldGVyVmFsdWVUeXBlLkFsbCxcbiAgICBbSW50ZXJuYWxEb21haW5SZXN0cmljdGlvblR5cGUuTGlzdF06IEV4dGVybmFsUGFyYW1ldGVyVmFsdWVUeXBlLkxpc3QsXG4gICAgW0ludGVybmFsRG9tYWluUmVzdHJpY3Rpb25UeXBlLlJhbmdlXTogRXh0ZXJuYWxQYXJhbWV0ZXJWYWx1ZVR5cGUuUmFuZ2VcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBkYXRlU3RlcFBlcmlvZCA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRGF0ZVN0ZXBQZXJpb2QsIEV4dGVybmFsRGF0ZVBlcmlvZD4oe1xuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLlllYXJzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLlllYXJzLFxuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLlF1YXJ0ZXJzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLlF1YXJ0ZXJzLFxuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLk1vbnRoc106IEV4dGVybmFsRGF0ZVBlcmlvZC5Nb250aHMsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuV2Vla3NdOiBFeHRlcm5hbERhdGVQZXJpb2QuV2Vla3MsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuRGF5c106IEV4dGVybmFsRGF0ZVBlcmlvZC5EYXlzLFxuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLkhvdXJzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLkhvdXJzLFxuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLk1pbnV0ZXNdOiBFeHRlcm5hbERhdGVQZXJpb2QuTWludXRlcyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5TZWNvbmRzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLlNlY29uZHNcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBkYXRlUmFuZ2VUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxEYXRlUmFuZ2VUeXBlLCBFeHRlcm5hbERhdGVSYW5nZVR5cGU+KHtcbiAgICBbSW50ZXJuYWxEYXRlUmFuZ2VUeXBlLkN1cnJlbnRdOiBFeHRlcm5hbERhdGVSYW5nZVR5cGUuQ3VycmVudCxcbiAgICBbSW50ZXJuYWxEYXRlUmFuZ2VUeXBlLkxhc3RdOiBFeHRlcm5hbERhdGVSYW5nZVR5cGUuTGFzdCxcbiAgICBbSW50ZXJuYWxEYXRlUmFuZ2VUeXBlLkxhc3ROXTogRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLkxhc3ROLFxuICAgIFtJbnRlcm5hbERhdGVSYW5nZVR5cGUuTmV4dF06IEV4dGVybmFsRGF0ZVJhbmdlVHlwZS5OZXh0LFxuICAgIFtJbnRlcm5hbERhdGVSYW5nZVR5cGUuTmV4dE5dOiBFeHRlcm5hbERhdGVSYW5nZVR5cGUuTmV4dE4sXG4gICAgW0ludGVybmFsRGF0ZVJhbmdlVHlwZS5Ub0RhdGVdOiBFeHRlcm5hbERhdGVSYW5nZVR5cGUuVG9EYXRlXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZXJyb3JDb2RlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxFcnJvckNvZGVzLCBFeHRlcm5hbEVycm9yQ29kZXM+KHtcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLklOSVRJQUxJWkFUSU9OX0VSUk9SXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5JTlRFUk5BTF9FUlJPUl06IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuTUlTU0lOR19FTlVNX01BUFBJTkddOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLk1JU1NJTkdfUEFSQU1FVEVSXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5QRVJNSVNTSU9OX0RFTklFRF06IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuUFJFU19NT0RFTF9QQVJTSU5HX0VSUk9SXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5VTktOT1dOX1ZFUkJfSURdOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLlZFUlNJT05fTk9UX0NPTkZJR1VSRURdOiBFeHRlcm5hbEVycm9yQ29kZXMuQVBJTm90SW5pdGlhbGl6ZWRcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBmaWx0ZXJUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxGaWx0ZXJUeXBlLCBFeHRlcm5hbEZpbHRlclR5cGU+KHtcbiAgICBbSW50ZXJuYWxGaWx0ZXJUeXBlLkNhdGVnb3JpY2FsXTogRXh0ZXJuYWxGaWx0ZXJUeXBlLkNhdGVnb3JpY2FsLFxuICAgIFtJbnRlcm5hbEZpbHRlclR5cGUuUmFuZ2VdOiBFeHRlcm5hbEZpbHRlclR5cGUuUmFuZ2UsXG4gICAgW0ludGVybmFsRmlsdGVyVHlwZS5SZWxhdGl2ZURhdGVdOiBFeHRlcm5hbEZpbHRlclR5cGUuUmVsYXRpdmVEYXRlLFxuICAgIFtJbnRlcm5hbEZpbHRlclR5cGUuSGllcmFyY2hpY2FsXTogRXh0ZXJuYWxGaWx0ZXJUeXBlLkhpZXJhcmNoaWNhbFxuICB9KTtcbn1cbi8qIHRzbGludDplbmFibGU6dHlwZWRlZiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEV4ZWN1dGVSZXNwb25zZSxcbiAgSW50ZXJuYWxBcGlEaXNwYXRjaGVyLFxuICBJbnRlcm5hbFRhYmxlYXVFcnJvcixcbiAgVmVyYklkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyB9IGZyb20gJy4uLy4uL0VudW1NYXBwaW5ncy9JbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MnO1xuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vVGFibGVhdUVycm9yJztcblxuLyoqXG4gKiBFYWNoIFNlcnZjZUltcGwgc2hvdWxkIGV4dGVuZCB0aGlzIGJhc2UgY2xhc3MgZm9yIHRoZSBzYWtlIG9mXG4gKiBwcm9wZXIgZXJyb3IgaGFuZGxpbmcuICBUaGlzIGJhc2UgaGFuZGxlcyB0aGUgY29udmVyc2lvblxuICogZnJvbSBpbnRlcm5hbCBlcnJvcnMgdG8gZXh0ZXJuYWwgZXJyb3JzIHRoYXQgd2UgdGhyb3cgdG8gZGV2ZWxvcGVyc1xuICovXG5leHBvcnQgY2xhc3MgU2VydmljZUltcGxCYXNlIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Rpc3BhdGNoZXI6IEludGVybmFsQXBpRGlzcGF0Y2hlcikgeyB9XG5cbiAgcHJvdGVjdGVkIGV4ZWN1dGUodmVyYjogVmVyYklkLCBwYXJhbXM6IEV4ZWN1dGVQYXJhbWV0ZXJzKTogUHJvbWlzZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuICAgIHJldHVybiB0aGlzLl9kaXNwYXRjaGVyLmV4ZWN1dGUodmVyYiwgcGFyYW1zKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIC8vIEFueSBpbnRlcm5hbCBlcnJvciB0aGF0IGNvbWVzIGZyb20gdGhlIGRpc3BhdGNoZXIgc2hvdWxkIGJlIGNvbnZlcnRlZFxuICAgICAgLy8gdG8gYW4gZXh0ZXJuYWwgZXJyb3IgdXNpbmcgdGhlIGVudW0gbWFwcGVyIGZvciBlcnJvciBjb2Rlcy5cbiAgICAgIGNvbnN0IGludGVybmFsRXJyb3IgPSBlcnJvciBhcyBJbnRlcm5hbFRhYmxlYXVFcnJvcjtcbiAgICAgIGNvbnN0IGV4dGVybmFsRXJyb3JDb2RlOiBFcnJvckNvZGVzID0gSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLmVycm9yQ29kZS5jb252ZXJ0KGludGVybmFsRXJyb3IuZXJyb3JDb2RlKTtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoZXh0ZXJuYWxFcnJvckNvZGUsIGludGVybmFsRXJyb3IubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvU2VydmljZUltcGxCYXNlLnRzIiwiaW1wb3J0IHsgVmVyc2lvbk51bWJlciwgVmVyYklkLCBFeGVjdXRlUGFyYW1ldGVycywgTW9kZWwsIE5vdGlmaWNhdGlvbklkIH0gZnJvbSAnLi4vLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcblxuLyoqXG4gKiBFbnVtIGRlZmluaW5nIHRoZSA0IGRpZmZlcmVudCB0eXBlcyBvZiBtZXNzYWdlcyB3ZSBoYXZlIGRlZmluZWRcbiAqL1xuZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xuICBJbml0aWFsaXplID0gJ2luaXRpYWxpemUnLFxuICBOb3RpZmljYXRpb24gPSAnbm90aWZpY2F0aW9uJyxcbiAgQ29tbWFuZCA9ICdjb21tYW5kJyxcbiAgQ29tbWFuZFJlc3BvbnNlID0gJ2NvbW1hbmQtcmVzcG9uc2UnXG59XG5cbi8qKlxuICogVGhlIE1lc3NhZ2UgaW50ZXJmYWNlIGlzIHRoZSBiYXNlIGludGVyZmFjZSBmb3IgYWxsIHRoZSBvdGhlclxuICogbWVzc2FnZSB0eXBlIGludGVyZmFjZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBBIHVuaXF1ZSBpZCBmb3IgdGhpcyBtZXNzYWdlXG4gICAqL1xuICBtc2dHdWlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHRoaXMgbWVzc2FnZVxuICAgKi9cbiAgbXNnVHlwZTogTWVzc2FnZVR5cGU7XG59XG5cbi8qKlxuICogVGhlIGluaXRpYWxpemUgbWVzc2FnZSBpcyB0aGUgZmlyc3QgbWVzc2FnZSB3aGljaCB3aWxsIGJlIHNlbnRcbiAqIGZyb20gdGhlIGphdmFzY3JpcHQgdG8gc2V0IHVwIGNvbW11bmljYXRpb25zXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdGlhbGl6ZU1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBhcGkgd2hpY2ggdGhlIHNlbmRlciB3YW50cyB0byB1c2VcbiAgICovXG4gIGFwaVZlcnNpb246IFZlcnNpb25OdW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB2ZXJzaW9uIG9mIHRoaXMgbWVzc2FnaW5nIGNvbnRyYWN0IHRvIGJlIHVzZWQuIEZvciBub3csIHRoZXJlXG4gICAqIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHZlcnNpb24gYnV0IHNlbmRpbmcgdGhpcyBhbG9uZyBzaG91bGQgaGVscFxuICAgKiBpZiB3ZSBuZWVkIHRvIGFkZCBhIG5ldyB2ZXJzaW9uIGluIGEgZnV0dXJlIHJlbGVhc2VcbiAgICovXG4gIGNyb3NzRnJhbWVWZXJzaW9uOiBWZXJzaW9uTnVtYmVyO1xufVxuXG4vKipcbiAqIFRoaXMgbWVzc2FnZSBpcyBzZW50IHdoZW4gYSBub3RpZmljYXRpb24gb2NjdXJzIGZyb20gdGhlIHByZXNsYXllclxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbk1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIFRoZSBpZCBmb3IgdGhpcyB0eXBlIG9mIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgbm90aWZpY2F0aW9uSWQ6IE5vdGlmaWNhdGlvbklkO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0YSB3aGljaCBjYW1lIGFsb25nIHdpdGggdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgZGF0YTogTW9kZWw7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBjYWxsaW5nIGFuIGludGVybmFsIGNvbnRyYWN0IGNvbW1hbmRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kTWVzc2FnZSBleHRlbmRzIE1lc3NhZ2Uge1xuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBjb21tYW5kIHdoaWNoIHNob3VsZCBiZSBleGVjdXRlZFxuICAgKi9cbiAgdmVyYklkOiBWZXJiSWQ7XG5cbiAgLyoqXG4gICAqIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBwYXJhbWV0ZXJzIGZvciB0aGUgY29tbWFuZFxuICAgKi9cbiAgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnM7XG59XG5cbi8qKlxuICogVGhpcyBtZXNzYWdlIGlzIHNlbnQgaW4gcmVzcG9uc2UgdG8gYSBDb21tYW5kTWVzc2FnZSB3aXRoIHRoZVxuICogcmVzdWx0IG9mIHRoYXQgY29tbWFuZHMgaW52b2NhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRSZXNwb25zZU1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIEd1aWQgb2YgdGhlIENvbW1hbmRNZXNzYWdlIHdoaWNoIHRoaXMgaXMgaW4gcmVzcG9uc2UgdG9cbiAgICovXG4gIGNvbW1hbmRHdWlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElmIHRoZXJlIHdhcyBhbiBlcnJvciByZXR1cm5lZCBmcm9tIHRoZSBjb21tYW5kLCB0aGlzIHdpbGwgYmUgZGVmaW5lZFxuICAgKiBhbmQgY29udGFpbiB0aGUgZXJyb3JcbiAgICovXG4gIGVycm9yPzogTW9kZWw7XG5cbiAgLyoqXG4gICAqIElmIHRoZSBjb21tYW5kIGV4ZWN1dGVkIHN1Y2Nlc3NmdWxseSwgdGhpcyB3aWxsIGNvbnRhaW4gdGhlIGNvbW1hbmQgcmVzdWx0XG4gICAqL1xuICBkYXRhPzogTW9kZWw7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9pbnRlcmZhY2UvTWVzc2FnZVR5cGVzLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlciB9IGZyb20gJy4vU2luZ2xlRXZlbnRNYW5hZ2VyJztcbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4vVGFibGVhdUVycm9yJztcblxuLyoqXG4gKiBDbGFzcyBkZXNpZ25lZCB0byByZWdpc3RlciBhbmQgdW5yZWdpc3RlciBoYW5kbGVycyBmcm9tIGEgdXNlci4gT25seSB0aG9zZSBldmVudHNcbiAqIHdoaWNoIGFyZSBhZGRlZCB2aWEgQWRkTmV3RXZlbnRUeXBlIHdpbGwgYmUgc3VwcG9ydGVkIGJ5IHRoaXMgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50TGlzdGVuZXJNYW5hZ2VyIGltcGxlbWVudHMgQ29udHJhY3QuRXZlbnRMaXN0ZW5lck1hbmFnZXIge1xuICBwcml2YXRlIF9ldmVudExpc3RlbmVyTWFuYWdlcnM6IHsgW3RhYmxlYXVFdmVudFR5cGU6IHN0cmluZ106IFNpbmdsZUV2ZW50TWFuYWdlcjsgfTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lck1hbmFnZXJzID0ge307XG4gIH1cblxuICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGU6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUsXG4gICAgaGFuZGxlcjogQ29udHJhY3QuVGFibGVhdUV2ZW50SGFuZGxlckZuKTogQ29udHJhY3QuVGFibGVhdUV2ZW50VW5yZWdpc3RlckZuIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50TGlzdGVuZXJNYW5hZ2Vycy5oYXNPd25Qcm9wZXJ0eShldmVudFR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuVW5zdXBwb3J0ZWRFdmVudE5hbWUsIGBDYW5ub3QgYWRkIGV2ZW50LCB1bnN1cHBvcnRlZCBldmVudCB0eXBlOiAke2V2ZW50VHlwZX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZXZlbnRMaXN0ZW5lck1hbmFnZXJzW2V2ZW50VHlwZV0uYWRkRXZlbnRMaXN0ZW5lcihoYW5kbGVyKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSwgaGFuZGxlcjogQ29udHJhY3QuVGFibGVhdUV2ZW50SGFuZGxlckZuKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLl9ldmVudExpc3RlbmVyTWFuYWdlcnMuaGFzT3duUHJvcGVydHkoZXZlbnRUeXBlKSkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLlVuc3VwcG9ydGVkRXZlbnROYW1lLCBgQ2Fubm90IHJlbW92ZSBldmVudCwgdW5zdXBwb3J0ZWQgZXZlbnQgdHlwZTogJHtldmVudFR5cGV9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50TGlzdGVuZXJNYW5hZ2Vyc1tldmVudFR5cGVdLnJlbW92ZUV2ZW50TGlzdGVuZXIoaGFuZGxlcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkTmV3RXZlbnRUeXBlKGV2ZW50TWFuYWdlcjogU2luZ2xlRXZlbnRNYW5hZ2VyKTogdm9pZCB7XG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lck1hbmFnZXJzW2V2ZW50TWFuYWdlci5ldmVudFR5cGVdID0gZXZlbnRNYW5hZ2VyO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudExpc3RlbmVyTWFuYWdlci50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXIgfSBmcm9tICcuLi9TaW5nbGVFdmVudE1hbmFnZXInO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaW1wbGVtZW50cyB0aGUgU2luZ2xlRXZlbnRNYW5hZ2VyIGludGVyZmFjZSBmb3IgYSBzaW5nbGUgdHlwZSBvZiBUYWJsZWF1IGV2ZW50XG4gKlxuICogQHRlbXBsYXRlIFRFdmVudFR5cGUgVGhlIFRhYmxlYXUgZXZlbnQgdHlwZSB0aGlzIGNsYXNzIHNwZWNpYWxpemVzXG4gKi9cbmV4cG9ydCBjbGFzcyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsPFRFdmVudFR5cGUgZXh0ZW5kcyBDb250cmFjdC5UYWJsZWF1RXZlbnQ+IGltcGxlbWVudHMgU2luZ2xlRXZlbnRNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfZXZlbnRUeXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlO1xuICBwcml2YXRlIF9oYW5kbGVyczogQXJyYXk8KGV2ZW50T2JqOiBURXZlbnRUeXBlKSA9PiB2b2lkPjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZXZlbnRUeXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlKSB7XG4gICAgdGhpcy5fZXZlbnRUeXBlID0gZXZlbnRUeXBlO1xuICAgIHRoaXMuX2hhbmRsZXJzID0gW107XG4gIH1cblxuICBwdWJsaWMgZ2V0IGV2ZW50VHlwZSgpOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRUeXBlO1xuICB9XG5cbiAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoaGFuZGxlcjogKGV2ZW50T2JqOiBURXZlbnRUeXBlKSA9PiB2b2lkKTogQ29udHJhY3QuVGFibGVhdUV2ZW50VW5yZWdpc3RlckZuIHtcbiAgICB0aGlzLl9oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoaGFuZGxlcik7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVyOiAoZXZlbnRPYmo6IFRFdmVudFR5cGUpID0+IHZvaWQpOiBib29sZWFuIHtcbiAgICBjb25zdCBiZWZvcmVDb3VudCA9IHRoaXMuX2hhbmRsZXJzLmxlbmd0aDtcbiAgICB0aGlzLl9oYW5kbGVycyA9IHRoaXMuX2hhbmRsZXJzLmZpbHRlcihoID0+IGggIT09IGhhbmRsZXIpO1xuICAgIHJldHVybiBiZWZvcmVDb3VudCA+IHRoaXMuX2hhbmRsZXJzLmxlbmd0aDtcbiAgfVxuXG4gIHB1YmxpYyB0cmlnZ2VyRXZlbnQoZXZlbnRHZW5lcmF0b3I6ICgpID0+IFRFdmVudFR5cGUpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGhhbmRsZXIgb2YgdGhpcy5faGFuZGxlcnMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGV2ZW50TW9kZWwgPSBldmVudEdlbmVyYXRvcigpO1xuICAgICAgICBoYW5kbGVyKGV2ZW50TW9kZWwpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBTaW5jZSB0aGlzIGhhbmRsZXIgY291bGQgYmUgb3V0c2lkZSBvdXIgY29udHJvbCwganVzdCBjYXRjaCBhbnl0aGluZyBpdCB0aHJvd3MgYW5kIGNvbnRpbnVlIG9uXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaW5nbGVFdmVudE1hbmFnZXJJbXBsLnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuXG5leHBvcnQgY2xhc3MgUGFyYW0ge1xuICAvKipcbiAgICogc2VyaWFsaXplcyB0aGUgZGF0ZSBpbnRvIHRoZSBmb3JtYXQgdGhhdCB0aGUgc2VydmVyIGV4cGVjdHMuXG4gICAqIEBwYXJhbSBkYXRlIHRoZSBkYXRlIHRvIHNlcmlhbGl6ZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzZXJpYWxpemVEYXRlRm9yUGxhdGZvcm0oZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgeWVhcjogbnVtYmVyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIGNvbnN0IG1vbnRoOiBudW1iZXIgPSBkYXRlLmdldFVUQ01vbnRoKCkgKyAxO1xuICAgIGNvbnN0IGRheTogbnVtYmVyID0gZGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgY29uc3QgaGg6IG51bWJlciA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBjb25zdCBtbTogbnVtYmVyID0gZGF0ZS5nZXRVVENNaW51dGVzKCk7XG4gICAgY29uc3Qgc2VjOiBudW1iZXIgPSBkYXRlLmdldFVUQ1NlY29uZHMoKTtcbiAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9ICR7aGh9OiR7bW19OiR7c2VjfWA7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZUJvb2xlYW5Gb3JQbGF0Zm9ybShib29sOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYm9vbCA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZU51bWJlckZvclBsYXRmb3JtKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDEwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGUgaW5wdXQgaXMgYSBudW1iZXJcbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xuICBwdWJsaWMgc3RhdGljIGlzVHlwZU51bWJlcihpbnB1dDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiAoaW5wdXQpID09PSAnbnVtYmVyJyB8fCBpbnB1dCBpbnN0YW5jZW9mIE51bWJlcjtcbiAgfVxuICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLWFueSAqL1xuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGUgaW5wdXQgaXMgYSBEYXRlXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cbiAgcHVibGljIHN0YXRpYyBpc1R5cGVEYXRlKGlucHV0OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaW5wdXQgaW5zdGFuY2VvZiBEYXRlO1xuICB9XG4gIC8qIHRzbGludDplbmFibGU6bm8tYW55ICovXG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBwdWJsaWMgc3RhdGljIGlzVHlwZVN0cmluZyhpbnB1dDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiAoaW5wdXQpID09PSAnc3RyaW5nJyB8fCBpbnB1dCBpbnN0YW5jZW9mIFN0cmluZztcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgcHVibGljIHN0YXRpYyBpc1R5cGVCb29sKGlucHV0OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIChpbnB1dCkgPT09ICdib29sZWFuJyB8fCBpbnB1dCBpbnN0YW5jZW9mIEJvb2xlYW47XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplUGFyYW10ZXJWYWx1ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoUGFyYW0uaXNUeXBlTnVtYmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFBhcmFtLnNlcmlhbGl6ZU51bWJlckZvclBsYXRmb3JtKHZhbHVlIGFzIG51bWJlcik7XG4gICAgfSBlbHNlIGlmIChQYXJhbS5pc1R5cGVEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFBhcmFtLnNlcmlhbGl6ZURhdGVGb3JQbGF0Zm9ybSh2YWx1ZSBhcyBEYXRlKTtcbiAgICB9IGVsc2UgaWYgKFBhcmFtLmlzVHlwZUJvb2wodmFsdWUpKSB7XG4gICAgICByZXR1cm4gUGFyYW0uc2VyaWFsaXplQm9vbGVhbkZvclBsYXRmb3JtKHZhbHVlIGFzIGJvb2xlYW4pO1xuICAgIH0gZWxzZSBpZiAoUGFyYW0uaXNUeXBlU3RyaW5nKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgYFVuZXhwZWN0ZWQgaW52YWxpZCB2YWx1ZSBmb3I6ICR7dmFsdWV9YCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9QYXJhbS50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlIGltcGxlbWVudHMgQ29udHJhY3QuRGF0YVRhYmxlIHtcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9kYXRhOiBBcnJheTxBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+PixcbiAgICBwcml2YXRlIF9jb2x1bW5zOiBBcnJheTxDb250cmFjdC5Db2x1bW4+LFxuICAgIHByaXZhdGUgX3RvdGFsUm93Q291bnQ6IG51bWJlcixcbiAgICBwcml2YXRlIF9pc1N1bW1hcnlEYXRhOiBib29sZWFuLFxuICAgIHByaXZhdGUgX21hcmtzSW5mbz86IEFycmF5PE1hcmtJbmZvPikge1xuICAgIC8vIFRPRE86IGdldCByaWQgb2YgdGhpcyBpbiByZWRlc2lnbi5cbiAgICB0aGlzLl9uYW1lID0gX2lzU3VtbWFyeURhdGEgPyAnU3VtbWFyeSBEYXRhIFRhYmxlJyA6ICdVbmRlcmx5aW5nIERhdGEgVGFibGUnO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGEoKTogQXJyYXk8QXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPj4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgcHVibGljIGdldCBjb2x1bW5zKCk6IEFycmF5PENvbnRyYWN0LkNvbHVtbj4ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICB9XG5cbiAgcHVibGljIGdldCBtYXJrc0luZm8oKTogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWFya3NJbmZvO1xuICB9XG5cbiAgcHVibGljIGdldCB0b3RhbFJvd0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsUm93Q291bnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzU3VtbWFyeURhdGEoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU3VtbWFyeURhdGE7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcmtJbmZvIGltcGxlbWVudHMgQ29udHJhY3QuTWFya0luZm8ge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdHlwZTogQ29udHJhY3QuTWFya1R5cGUsXG4gICAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZyxcbiAgICBwcml2YXRlIF90dXBsZUlkPzogTnVtYmVyXG4gICkgeyB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IENvbnRyYWN0Lk1hcmtUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR1cGxlSWQoKTogTnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHVwbGVJZDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29sdW1uIGltcGxlbWVudHMgQ29udHJhY3QuQ29sdW1uIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2ZpZWxkTmFtZTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2RhdGFUeXBlOiBDb250cmFjdC5EYXRhVHlwZSwgLy8gVE9ETzogdGhpcyBzaG91ZGwgYmUgYW4gZW51bSB0eXBlXG4gICAgcHJpdmF0ZSBfaXNSZWZlcmVuY2VkOiBib29sZWFuLFxuICAgIHByaXZhdGUgX2luZGV4OiBudW1iZXIpIHsgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YVR5cGUoKTogQ29udHJhY3QuRGF0YVR5cGUge1xuICAgIHJldHVybiB0aGlzLl9kYXRhVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNSZWZlcmVuY2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1JlZmVyZW5jZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhVmFsdWUgaW1wbGVtZW50cyBDb250cmFjdC5EYXRhVmFsdWUge1xuICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3ZhbHVlOiBhbnksXG4gICAgcHJpdmF0ZSBfZm9ybWF0dGVkVmFsdWU6IHN0cmluZykgeyB9XG5cbiAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9ybWF0dGVkVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0dGVkVmFsdWU7XG4gIH1cbiAgLyogdHNsaW50OmVuYWJsZTpuby1hbnkgKi9cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9HZXREYXRhTW9kZWxzLnRzIiwiKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZhbGlkYXRvciA9IG5ldyBSZWdFeHAoXCJeW2EtejAtOV17OH0tW2EtejAtOV17NH0tW2EtejAtOV17NH0tW2EtejAtOV17NH0tW2EtejAtOV17MTJ9JFwiLCBcImlcIik7XG5cbiAgZnVuY3Rpb24gZ2VuKGNvdW50KSB7XG4gICAgdmFyIG91dCA9IFwiXCI7XG4gICAgZm9yICh2YXIgaT0wOyBpPGNvdW50OyBpKyspIHtcbiAgICAgIG91dCArPSAoKCgxK01hdGgucmFuZG9tKCkpKjB4MTAwMDApfDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICBmdW5jdGlvbiBHdWlkKGd1aWQpIHtcbiAgICBpZiAoIWd1aWQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50OyBgdmFsdWVgIGhhcyBubyB2YWx1ZS5cIik7XG4gICAgICBcbiAgICB0aGlzLnZhbHVlID0gR3VpZC5FTVBUWTtcbiAgICBcbiAgICBpZiAoZ3VpZCAmJiBndWlkIGluc3RhbmNlb2YgR3VpZCkge1xuICAgICAgdGhpcy52YWx1ZSA9IGd1aWQudG9TdHJpbmcoKTtcblxuICAgIH0gZWxzZSBpZiAoZ3VpZCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZ3VpZCkgPT09IFwiW29iamVjdCBTdHJpbmddXCIgJiYgR3VpZC5pc0d1aWQoZ3VpZCkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBndWlkO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmVxdWFscyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgICAvLyBDb21wYXJpbmcgc3RyaW5nIGB2YWx1ZWAgYWdhaW5zdCBwcm92aWRlZCBgZ3VpZGAgd2lsbCBhdXRvLWNhbGxcbiAgICAgIC8vIHRvU3RyaW5nIG9uIGBndWlkYCBmb3IgY29tcGFyaXNvblxuICAgICAgcmV0dXJuIEd1aWQuaXNHdWlkKG90aGVyKSAmJiB0aGlzLnZhbHVlID09IG90aGVyO1xuICAgIH07XG5cbiAgICB0aGlzLmlzRW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBHdWlkLkVNUFRZO1xuICAgIH07XG4gICAgXG4gICAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfTtcbiAgICBcbiAgICB0aGlzLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfTtcbiAgfTtcblxuICBHdWlkLkVNUFRZID0gXCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIjtcblxuICBHdWlkLmlzR3VpZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmICh2YWx1ZSBpbnN0YW5jZW9mIEd1aWQgfHwgdmFsaWRhdG9yLnRlc3QodmFsdWUudG9TdHJpbmcoKSkpO1xuICB9O1xuXG4gIEd1aWQuY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBHdWlkKFtnZW4oMiksIGdlbigxKSwgZ2VuKDEpLCBnZW4oMSksIGdlbigzKV0uam9pbihcIi1cIikpO1xuICB9O1xuXG4gIEd1aWQucmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFtnZW4oMiksIGdlbigxKSwgZ2VuKDEpLCBnZW4oMSksIGdlbigzKV0uam9pbihcIi1cIik7XG4gIH07XG5cbiAgaWYodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gR3VpZDtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lkd1aWQgPSBHdWlkO1xuICB9XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2d1aWQvZ3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV2ZW50TGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi9FdmVudExpc3RlbmVyTWFuYWdlcic7XG5cbmltcG9ydCB7IFNoZWV0SW1wbCB9IGZyb20gJy4vSW1wbC9TaGVldEltcGwnO1xuXG5leHBvcnQgY2xhc3MgU2hlZXQgZXh0ZW5kcyBFdmVudExpc3RlbmVyTWFuYWdlciBpbXBsZW1lbnRzIENvbnRyYWN0LlNoZWV0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NoZWV0SW1wbDogU2hlZXRJbXBsKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hlZXRUeXBlKCk6IENvbnRyYWN0LlNoZWV0VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW1wbC5zaGVldFR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNpemUoKTogQ29udHJhY3QuU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW1wbC5zaXplO1xuICB9XG5cbiAgcHVibGljIGZpbmRQYXJhbWV0ZXJBc3luYyhwYXJhbWV0ZXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPENvbnRyYWN0LlBhcmFtZXRlciB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEltcGwuZmluZFBhcmFtZXRlckFzeW5jKHBhcmFtZXRlck5hbWUsIHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGdldFBhcmFtZXRlcnNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LlBhcmFtZXRlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbXBsLmdldFBhcmFtZXRlcnNBc3luYyh0aGlzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2hlZXQudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBjb252ZXJ0cyBmcm9tIGEgc291cmNlIGVudW0gdmFsdWUgdG8gZGVzdGluYXRpb24gZW51bVxuICogdmFsdWUgZ2l2ZW4gYSBtYXBwaW5nIGZyb20gc291cmNlIHRvIGRlc3RpbmF0aW9uIHdoZW4gY29uc3RydWN0ZWQuXG4gKlxuICogTm90ZTogVGhpcyBleGFjdCBzYW1lIGNsYXNzIGlzIGRlZmluZWQgaW4gYXBpLWNvcmUuICBHaXZlbiBpdHMgc21hbGxcbiAqIG5hdHVyZSwgaXQgaXMgbm90IHdvcnRoIGhhdmluZyBpbiBhIHNlcGFyYXRlIHByb2plY3QgdG8gc2hhcmUgdGhpcyBiZXR3ZWVuXG4gKiBhcGktY29yZSBhbmQgYXBpLXNoYXJlZC4gIElmIG1vcmUgdXRpbGl0eSBmdW5jdGlvbmFsaXR5IGlzIGFkZGVkIHRoYXQgaXMgdXNlZCBieSBhcGktY29yZVxuICogYW5kIGFwaS1zaGFyZWQgYnV0IGhhcyBubyBvdGhlciBkZXBlbmRlY2llcywgYSB1dGlsdGl0eSBwcm9qZWN0IG1pZ2h0IGJlIG1lcml0ZWQsXG4gKiBhbmQgdGhpcyBjbGFzcyBjb3VsZCBiZSBtb3ZlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEVudW1Db252ZXJ0ZXI8VFNvdXJjZVR5cGUgZXh0ZW5kcyBzdHJpbmcsIFREZXN0aW5hdGlvblR5cGU+IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX21hcHBpbmdzOiB7IFtlbnVtVmFsOiBzdHJpbmddOiBURGVzdGluYXRpb25UeXBlOyB9LFxuICAgIHByaXZhdGUgX2RlZmF1bHRWYWw/OiBURGVzdGluYXRpb25UeXBlKSB7IH1cblxuICBwdWJsaWMgY29udmVydChlbnVtVmFsOiBUU291cmNlVHlwZSwgdGhyb3dJZk1pc3Npbmc/OiBib29sZWFuKTogVERlc3RpbmF0aW9uVHlwZSB7XG4gICAgaWYgKHRoaXMuX21hcHBpbmdzLmhhc093blByb3BlcnR5KGVudW1WYWwpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwcGluZ3NbZW51bVZhbCBhcyBzdHJpbmddO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9kZWZhdWx0VmFsICE9PSB1bmRlZmluZWQgJiYgIXRocm93SWZNaXNzaW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFZhbDtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgYEVudW0gTWFwcGluZyBub3QgZm91bmQgZm9yOiAke2VudW1WYWx9YCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1V0aWxzL0VudW1Db252ZXJ0ZXIudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuZXhwb3J0IGNsYXNzIFRhYmxlYXVFdmVudCBpbXBsZW1lbnRzIENvbnRyYWN0LlRhYmxlYXVFdmVudCB7XG4gIHByaXZhdGUgX3R5cGU6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHR5cGU6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUpIHtcbiAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1RhYmxlYXVFdmVudC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgU2hlZXRQYXRoIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgU2hlZXRJbmZvSW1wbCB9IGZyb20gJy4vU2hlZXRJbmZvSW1wbCc7XG5cbmltcG9ydCB7IFBhcmFtZXRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvUGFyYW1ldGVyc1NlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5LCBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuaW1wb3J0IHsgRXJyb3JIZWxwZXJzIH0gZnJvbSAnLi4vVXRpbHMvRXJyb3JIZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIFNoZWV0SW1wbCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaGVldEluZm9JbXBsOiBTaGVldEluZm9JbXBsKSB7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbmZvSW1wbC5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFR5cGUoKTogQ29udHJhY3QuU2hlZXRUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbmZvSW1wbC5zaGVldFR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoZWV0UGF0aCgpOiBTaGVldFBhdGgge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEluZm9JbXBsLnNoZWV0UGF0aDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2l6ZSgpOiBDb250cmFjdC5TaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbmZvSW1wbC5zaGVldFNpemU7XG4gIH1cblxuICBwdWJsaWMgZmluZFBhcmFtZXRlckFzeW5jKHBhcmFtZXRlck5hbWU6IHN0cmluZywgc2hlZXQ6IENvbnRyYWN0LlNoZWV0KTogUHJvbWlzZTxDb250cmFjdC5QYXJhbWV0ZXIgfCB1bmRlZmluZWQ+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHBhcmFtZXRlck5hbWUsICdwYXJhbWV0ZXJOYW1lJyk7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihzaGVldCwgJ3NoZWV0Jyk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8UGFyYW1ldGVyc1NlcnZpY2U+KFNlcnZpY2VOYW1lcy5QYXJhbWV0ZXJzKTtcbiAgICByZXR1cm4gc2VydmljZS5maW5kUGFyYW1ldGVyQnlOYW1lQXN5bmMocGFyYW1ldGVyTmFtZSwgc2hlZXQpO1xuICB9XG5cbiAgcHVibGljIGdldFBhcmFtZXRlcnNBc3luYyhzaGVldDogQ29udHJhY3QuU2hlZXQpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LlBhcmFtZXRlcj4+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHNoZWV0LCAnc2hlZXQnKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxQYXJhbWV0ZXJzU2VydmljZT4oU2VydmljZU5hbWVzLlBhcmFtZXRlcnMpO1xuICAgIHJldHVybiBzZXJ2aWNlLmdldFBhcmFtZXRlcnNGb3JTaGVldEFzeW5jKHRoaXMuc2hlZXRQYXRoLCBzaGVldCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvU2hlZXRJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFRhYmxlYXVTaGVldEV2ZW50IH0gZnJvbSAnLi9UYWJsZWF1U2hlZXRFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgZXh0ZW5kcyBUYWJsZWF1U2hlZXRFdmVudCBpbXBsZW1lbnRzIENvbnRyYWN0LlRhYmxlYXVXb3Jrc2hlZXRFdmVudCB7XG4gIHB1YmxpYyBnZXQgd29ya3NoZWV0KCk6IENvbnRyYWN0LldvcmtzaGVldCB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldDtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0eXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLCBwcm90ZWN0ZWQgX3dvcmtzaGVldDogQ29udHJhY3QuV29ya3NoZWV0KSB7XG4gICAgc3VwZXIodHlwZSwgX3dvcmtzaGVldCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1V29ya3NoZWV0RXZlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgVGFibGVhdUV2ZW50IH0gZnJvbSAnLi9UYWJsZWF1RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVhdVNoZWV0RXZlbnQgZXh0ZW5kcyBUYWJsZWF1RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5UYWJsZWF1U2hlZXRFdmVudCB7XG4gIHByaXZhdGUgX3NoZWV0OiBDb250cmFjdC5TaGVldDtcblxuICBwdWJsaWMgZ2V0IHNoZWV0KCk6IENvbnRyYWN0LlNoZWV0IHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXQ7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IodHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSwgc2hlZXQ6IENvbnRyYWN0LlNoZWV0KSB7XG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLl9zaGVldCA9IHNoZWV0O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvVGFibGVhdVNoZWV0RXZlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFZpc3VhbElkIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vU2VydmljZVJlZ2lzdHJ5JztcblxuLyoqXG4gKiBEZWZpbmVzIHdoaWNoIHR5cGUgb2YgZ2V0RGF0YSBjYWxsIHRvIG1ha2UuXG4gKi9cbmV4cG9ydCBlbnVtIEdldERhdGFUeXBlIHtcbiAgU3VtbWFyeSA9ICdzdW1tYXJ5JyxcbiAgVW5kZXJseWluZyA9ICd1bmRlcmx5aW5nJ1xufVxuXG4vKipcbiAqIFNlcnZpY2UgZm9yIGltcGxlbWVudGluZyB0aGUgbG9naWMgZm9yIHZhcmlvdXMgZ2V0RGF0YSBjYWxsc1xuICpcbiAqIEBpbnRlcmZhY2UgR2V0RGF0YVNlcnZpY2VcbiAqIEBleHRlbmRzIHtBcGlTZXJ2aWNlfVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEdldERhdGFTZXJ2aWNlIGV4dGVuZHMgQXBpU2VydmljZSB7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSB1bmRlcmx5aW5nIGRhdGEgZm9yIGEgcGFydGljdWxhciB2aXN1YWxcbiAgICpcbiAgICogQHBhcmFtIHtWaXN1YWxJZH0gdmlzdWFsSWQgIFRoZSB2aXN1YWwgdG8gZ2V0IGRhdGEgZm9yXG4gICAqIEBwYXJhbSB7R2V0RGF0YVR5cGV9IGdldFR5cGUgIFRoZSB0eXBlIG9mIGdldERhdGEgY2FsbCB0byBtYWtlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaWdub3JlQWxpYXNlcyAgV2hldGhlciBvciBub3QgYWxpYXNlcyBzaG91bGQgYmUgaWdub3JlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlnbm9yZVNlbGVjdGlvbiAgV2hldGhlciBvciBub3Qgc2VsZWN0aW9uIHNob3VsZCBiZSBpZ25vcmVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUFsbENvbHVtbnMgIFNob3VsZCBhbGwgY29sdW1ucyBiZSBpbmNsdWRlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4Um93cyAgTWF4aW11bSBudW1iZXIgb2Ygcm93cyB0byByZXR1cm5cbiAgICogQHJldHVybnMge1Byb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPn0gIERhdGEgdGFibGUgd2l0aCB0aGUgcmVxdWVzdGVkIGRhdGFcbiAgICovXG4gIGdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgdmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIGdldFR5cGU6IEdldERhdGFUeXBlLFxuICAgIGlnbm9yZUFsaWFzZXM6IGJvb2xlYW4sXG4gICAgaWdub3JlU2VsZWN0aW9uOiBib29sZWFuLFxuICAgIGluY2x1ZGVBbGxDb2x1bW5zOiBib29sZWFuLFxuICAgIG1heFJvd3M6IG51bWJlcik6IFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPjtcblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG1hcmtzIGZvciBhIGdpdmVuIHZpc3VhbFxuICAgKlxuICAqIEBwYXJhbSB7VmlzdWFsSWR9IHZpc3VhbElkICBUaGUgdmlzdWFsIHRvIGdldCBkYXRhIGZvclxuICAqIEByZXR1cm5zIHtQcm9taXNlPEFjdGl2ZU1hcmtzPn0gIENvbGxlY3Rpb24gb2YgZGF0YSB0YWJsZXMgd2l0aCB0aGUgYWN0aXZlIG1hcmtzXG4gICovXG4gIGdldFNlbGVjdGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj47XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnRseSBoaWdobGlnaHRlZCBtYXJrcyBmb3IgYSBnaXZlbiB2aXN1YWxcbiAgICpcbiAgKiBAcGFyYW0ge1Zpc3VhbElkfSB2aXN1YWxJZCAgVGhlIHZpc3VhbCB0byBnZXQgZGF0YSBmb3JcbiAgKiBAcmV0dXJucyB7UHJvbWlzZTxBY3RpdmVNYXJrcz59ICBDb2xsZWN0aW9uIG9mIGRhdGEgdGFibGVzIHdpdGggdGhlIGFjdGl2ZSBtYXJrc1xuICAqL1xuICBnZXRIaWdobGlnaHRlZE1hcmtzQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YXNvdXJjZUlkICBUaGUgaWQgb2YgdGhlIGRhdGFzb3VyY2UgdG8gZ2V0IGRhdGEgZm9yXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaWdub3JlQWxpYXNlcyAgV2hldGhlciBhbGlhcyB2YWx1ZXMgc2hvdWxkIGJlIGlnbm9yZWQgaW4gdGhlIHJldHVybmVkIGRhdGFcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heFJvd3MgVGhlIG1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gcmV0cmlldmVcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBjb2x1bW5zVG9JbmNsdWRlICBDb2xsZWN0aW9uIG9mIGNvbHVtbiBjYXB0aW9ucyB3aGljaCBzaG91bGQgYmUgcmV0dXJuZWQuIEVtcHR5IG1lYW5zIGFsbCBjb2x1bW5zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT59ICBEYXRhIHRhYmxlIHdpdGggdGhlIHJlcXVlc3RlZCBkYXRhXG4gICAqL1xuICBnZXREYXRhU291cmNlRGF0YUFzeW5jKFxuICAgIGRhdGFzb3VyY2VJZDogc3RyaW5nLFxuICAgIGlnbm9yZUFsaWFzZXM6IGJvb2xlYW4sXG4gICAgbWF4Um93czogbnVtYmVyLFxuICAgIGNvbHVtbnNUb0luY2x1ZGU6IEFycmF5PHN0cmluZz4pOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT47XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9HZXREYXRhU2VydmljZS50cyIsIi8qKlxuICogVGhpcyBpcyB5b3VyIG1haW4uIFRoaXMgaXMgd2hlcmUgeW91IHJlLWV4cG9ydCBldmVyeXRoaW5nIHlvdSB3YW50IHRvIGJlIHB1YmxpY2x5IGF2YWlsYWJsZS5cbiAqXG4gKiBUaGUgYnVpbGQgZW5mb3JjZXMgdGhhdCB0aGUgZmlsZSBoYXMgdGhlIHNhbWUgbmFtZSBhcyB0aGUgZ2xvYmFsIHZhcmlhYmxlIHRoYXQgaXMgZXhwb3J0ZWQuXG4gKi9cblxuLy8gRHVlIHRvIHRoZSB3YXkgd2UgY29uZmlndXJlZCB3ZWJwYWNrLCB3ZSBzaG91bGQgYmUgZXhwb3J0aW5nIHRoaW5ncyB3aGljaCB3aWxsIGJlIHVuZGVyXG4vLyBhIGdsb2JhbCB2YXJpYWJsZSBjYWxsZWQgXCJ0YWJsZWF1XCIuIEV4cG9ydCBldmVyeXRoaW5nIHdlIHdhbnQgdG8gYmUgdmlzaWJsZSB1bmRlciB0YWJsZWF1XG4vLyBmcm9tIHRoaXMgZmlsZS5cblxuaW1wb3J0IHsgRXh0ZW5zaW9uc0ltcGwgfSBmcm9tICcuL0V4dGVuc2lvbnNBcGkvSW1wbC9FeHRlbnNpb25zSW1wbCc7XG5pbXBvcnQgeyBFeHRlbnNpb25zIH0gZnJvbSAnLi9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvRXh0ZW5zaW9ucyc7XG5cbmltcG9ydCB7IFZlcnNpb25OdW1iZXIgfSBmcm9tICcuL0FwaVNoYXJlZCc7XG5cbmRlY2xhcmUgdmFyIEVYVEVOU0lPTl9BUElfVkVSU0lPTl9OVU1CRVI6IHN0cmluZztcblZlcnNpb25OdW1iZXIuU2V0VmVyc2lvbk51bWJlcih0eXBlb2YgRVhURU5TSU9OX0FQSV9WRVJTSU9OX05VTUJFUiAhPT0gJ3VuZGVmaW5lZCcgPyBFWFRFTlNJT05fQVBJX1ZFUlNJT05fTlVNQkVSIDogJzAuMC4wJyk7XG5cbmNvbnN0IGV4dGVuc2lvbkltcGwgPSBuZXcgRXh0ZW5zaW9uc0ltcGwoKTtcbmV4cG9ydCBjb25zdCBleHRlbnNpb25zID0gbmV3IEV4dGVuc2lvbnMoZXh0ZW5zaW9uSW1wbCk7XG5cbi8vIEV4cG9ydCBFbnVtc1xuLy8gVGhlc2Ugc2hvdyB1cCB1bmRlciB0aGUgdGFibGVhdSBvYmplY3QuIEkuZS4gdGFibGVhdS5FeHRlbnNpb25Db250ZXh0LlNlcnZlclxuZXhwb3J0IHtcbiAgRXh0ZW5zaW9uQ29udGV4dCxcbiAgRXh0ZW5zaW9uTW9kZSxcbiAgQW5hbHl0aWNzT2JqZWN0VHlwZSxcbiAgQ29sdW1uVHlwZSxcbiAgRGFzaGJvYXJkT2JqZWN0VHlwZSxcbiAgRGF0YVR5cGUsXG4gIERhdGVSYW5nZVR5cGUsXG4gIEVuY29kaW5nVHlwZSxcbiAgRXJyb3JDb2RlcyxcbiAgRmllbGRBZ2dyZWdhdGlvblR5cGUsXG4gIEZpZWxkUm9sZVR5cGUsXG4gIEZpbHRlckRvbWFpblR5cGUsXG4gIEZpbHRlclR5cGUsXG4gIEZpbHRlclVwZGF0ZVR5cGUsXG4gIEZpbHRlck51bGxPcHRpb24sXG4gIE1hcmtUeXBlLFxuICBQYXJhbWV0ZXJWYWx1ZVR5cGUsXG4gIFBlcmlvZFR5cGUsXG4gIFF1aWNrVGFibGVDYWxjVHlwZSxcbiAgU2VsZWN0aW9uVXBkYXRlVHlwZSxcbiAgU2hlZXRUeXBlLFxuICBTb3J0RGlyZWN0aW9uLFxuICBUYWJsZWF1RXZlbnRUeXBlLFxuICBUcmVuZExpbmVNb2RlbFR5cGVcbn0gZnJvbSAnLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBDb250ZXh0TWVudUV2ZW50LFxuICBFeHRlbnNpb25EYXNoYm9hcmRJbmZvLFxuICBFeHRlbnNpb25TZXR0aW5nc0luZm8sXG4gIEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3RvcnksXG4gIEludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlcixcbiAgTm90aWZpY2F0aW9uSWQsXG4gIFNoZWV0UGF0aCxcbiAgSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTixcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5LFxuICBEYXNoYm9hcmQsXG4gIERhc2hib2FyZEltcGwsXG4gIGRvQ3Jvc3NGcmFtZUJvb3RzdHJhcCxcbiAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgcmVnaXN0ZXJBbGxTaGFyZWRTZXJ2aWNlcyxcbiAgU2VydmljZU5hbWVzXG59IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IERhc2hib2FyZENvbnRlbnQgfSBmcm9tICcuLi9OYW1lc3BhY2VzL0Rhc2hib2FyZENvbnRlbnQnO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuLi9OYW1lc3BhY2VzL0Vudmlyb25tZW50JztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vTmFtZXNwYWNlcy9TZXR0aW5ncyc7XG5pbXBvcnQgeyBVSSB9IGZyb20gJy4uL05hbWVzcGFjZXMvVUknO1xuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgSW5pdGlhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvSW5pdGlhbGl6YXRpb25TZXJ2aWNlJztcbmltcG9ydCB7IHJlZ2lzdGVyQWxsRXh0ZW5zaW9uc1NlcnZpY2VzIH0gZnJvbSAnLi4vU2VydmljZXMvUmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMnO1xuaW1wb3J0IHsgU2V0dGluZ3NJbXBsIH0gZnJvbSAnLi9TZXR0aW5nc0ltcGwnO1xuaW1wb3J0IHsgVUlJbXBsIH0gZnJvbSAnLi9VSUltcGwnO1xuXG5leHBvcnQgdHlwZSBDYWxsYmFja01hcCA9IHsgW2tleTogc3RyaW5nXTogKCkgPT4ge30gfTtcblxuZXhwb3J0IGNsYXNzIEV4dGVuc2lvbnNJbXBsIHtcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6YXRpb25Qcm9taXNlOiBQcm9taXNlPHN0cmluZz47XG5cbiAgcHVibGljIGRhc2hib2FyZENvbnRlbnQ6IERhc2hib2FyZENvbnRlbnQ7XG4gIHB1YmxpYyBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG4gIHB1YmxpYyBzZXR0aW5nczogU2V0dGluZ3M7XG4gIHB1YmxpYyB1aTogVUk7XG5cbiAgcHVibGljIGluaXRpYWxpemVBc3luYyhpc0V4dGVuc2lvbkRpYWxvZzogYm9vbGVhbiwgY29udGV4dE1lbnVDYWxsYmFja3M/OiBDYWxsYmFja01hcCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgaWYgKCF0aGlzLl9pbml0aWFsaXphdGlvblByb21pc2UpIHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemF0aW9uUHJvbWlzZSA9IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBGaXJzdCB0aGluZyB3ZSB3YW50IHRvIGRvIGlzIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSBpcyBhIGRlc2t0b3AgZGlzcGF0Y2hlciBhbHJlYWR5IHJlZ2lzdGVyZWQgZm9yIHVzXG4gICAgICAgIGlmIChJbnRlcm5hbEFwaURpc3BhdGNoZXJIb2xkZXIuaGFzRGVza3RvcEFwaURpc3BhdGNoZXJQcm9taXNlKCkpIHtcbiAgICAgICAgICAvLyBSdW5uaW5nIGluIGRlc2t0b3AsIHVzZSB0aGlzIHByb21pc2VcbiAgICAgICAgICBjb25zdCBkZXNrdG9wRGlzcGF0Y2hlclByb21pc2UgPSBJbnRlcm5hbEFwaURpc3BhdGNoZXJIb2xkZXIuZ2V0RGVza3RvcERpc3BhdGNoZXJQcm9taXNlKCk7XG5cbiAgICAgICAgICBkZXNrdG9wRGlzcGF0Y2hlclByb21pc2UudGhlbigoZGlwYXRjaGVyRmFjdG9yeSkgPT5cbiAgICAgICAgICAgIHRoaXMub25EaXNwYXRjaGVyUmVjZWl2ZWQoZGlwYXRjaGVyRmFjdG9yeSwgaXNFeHRlbnNpb25EaWFsb2csIGNvbnRleHRNZW51Q2FsbGJhY2tzKSlcbiAgICAgICAgICAgIC50aGVuKChvcGVuUGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgICByZXNvbHZlKG9wZW5QYXlsb2FkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFdlIG11c3QgYmUgcnVubmluZyBpbiBzZXJ2ZXIsIHNvIHdlIHNob3VsZCB0cnkgdG8ga2ljayBvZiB0aGUgc2VydmVyIGRpc3BhdGNoZXIgYm9vdHN0cmFwcGluZ1xuICAgICAgICAgIGNvbnN0IG9uRGlzcGF0Y2hlclJlY2VpdmVkQ2FsbGJhY2sgPSB0aGlzLm9uRGlzcGF0Y2hlclJlY2VpdmVkLmJpbmQodGhpcyk7XG4gICAgICAgICAgZG9Dcm9zc0ZyYW1lQm9vdHN0cmFwKHdpbmRvdywgSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTikudGhlbigoZmFjdG9yeTogSW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9uRGlzcGF0Y2hlclJlY2VpdmVkQ2FsbGJhY2soZmFjdG9yeSwgaXNFeHRlbnNpb25EaWFsb2csIGNvbnRleHRNZW51Q2FsbGJhY2tzKTtcbiAgICAgICAgICB9KS50aGVuKChvcGVuUGF5bG9hZCkgPT4geyByZXNvbHZlKG9wZW5QYXlsb2FkKTsgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9pbml0aWFsaXphdGlvblByb21pc2U7XG4gIH1cblxuICBwcml2YXRlIG9uRGlzcGF0Y2hlclJlY2VpdmVkKFxuICAgIGRpc3BhdGNoZXJGYWN0b3J5OiBJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5LFxuICAgIGlzRXh0ZW5zaW9uRGlhbG9nOiBib29sZWFuLFxuICAgIGNvbnRleHRNZW51RnVuY3Rpb25zPzogQ2FsbGJhY2tNYXApOiBQcm9taXNlPHN0cmluZz4ge1xuXG4gICAgY29uc3QgZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXJGYWN0b3J5KElOVEVSTkFMX0NPTlRSQUNUX1ZFUlNJT04pO1xuXG4gICAgLy8gQ2FsbCB0byByZWdpc3RlciBhbGwgdGhlIHNlcnZpY2VzIHdoaWNoIHdpbGwgdXNlIHRoZSBuZXdseSBpbml0aWFsaXplZCBkaXNwYXRjaGVyXG4gICAgcmVnaXN0ZXJBbGxTaGFyZWRTZXJ2aWNlcyhkaXNwYXRjaGVyKTtcbiAgICByZWdpc3RlckFsbEV4dGVuc2lvbnNTZXJ2aWNlcyhkaXNwYXRjaGVyKTtcblxuICAgIC8vIEdldCB0aGUgaW5pdGlhbGl6YXRpb24gc2VydmljZSBhbmQgaW5pdGlhbGl6ZSB0aGlzIGV4dGVuc2lvblxuICAgIGNvbnN0IGluaXRpYWxpemF0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEluaXRpYWxpemF0aW9uU2VydmljZT4oXG4gICAgICBFeHRlbnNpb25zU2VydmljZU5hbWVzLkluaXRpYWxpemF0aW9uU2VydmljZSk7XG5cbiAgICBjb25zdCBjYWxsYmFja01hcEtleXMgPSAoY29udGV4dE1lbnVGdW5jdGlvbnMpID8gT2JqZWN0LmtleXMoY29udGV4dE1lbnVGdW5jdGlvbnMpIDogW107XG4gICAgcmV0dXJuIGluaXRpYWxpemF0aW9uU2VydmljZS5pbml0aWFsaXplRGFzaGJvYXJkRXh0ZW5zaW9uc0FzeW5jKGlzRXh0ZW5zaW9uRGlhbG9nLCBjYWxsYmFja01hcEtleXMpLnRoZW48c3RyaW5nPihyZXN1bHQgPT4ge1xuICAgICAgaWYgKCFyZXN1bHQuZXh0ZW5zaW9uSW5zdGFuY2UubG9jYXRvci5kYXNoYm9hcmRQYXRoKSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAnVW5leHBlY3RlZCBlcnJvciBkdXJpbmcgaW5pdGlhbGl6YXRpb24uJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGFzaGJvYXJkQ29udGVudCA9IHRoaXMuaW5pdGlhbGl6ZURhc2hib2FyZENvbnRlbnQocmVzdWx0LmV4dGVuc2lvbkRhc2hib2FyZEluZm8sXG4gICAgICAgIHJlc3VsdC5leHRlbnNpb25JbnN0YW5jZS5sb2NhdG9yLmRhc2hib2FyZFBhdGgpO1xuICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudChyZXN1bHQuZXh0ZW5zaW9uRW52aXJvbm1lbnQpO1xuICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMuaW5pdGlhbGl6ZVNldHRpbmdzKHJlc3VsdC5leHRlbnNpb25TZXR0aW5nc0luZm8pO1xuICAgICAgdGhpcy51aSA9IG5ldyBVSShuZXcgVUlJbXBsKCkpO1xuXG4gICAgICAvLyBBZnRlciBpbml0aWFsaXphdGlvbiBoYXMgY29tcGxldGVkLCBzZXR1cCBsaXN0ZW5lcnMgZm9yIHRoZSBjYWxsYmFjayBmdW5jdGlvbnMgdGhhdFxuICAgICAgLy8gYXJlIG1lYW50IHRvIGJlIHRyaWdnZXJlZCB3aGVuZXZlciBhIGNvbnRleHQgbWVudSBpdGVtIGlzIGNsaWNrZWQuXG4gICAgICB0aGlzLmluaXRpYWxpemVDb250ZXh0TWVudUNhbGxiYWNrcyhjb250ZXh0TWVudUZ1bmN0aW9ucyk7XG5cbiAgICAgIC8vIEluIHRoZSBub3JtYWwgaW5pdGlhbGl6YXRpb24gY2FzZSwgdGhpcyB3aWxsIGJlIGFuIGVtcHR5IHN0cmluZy4gIFdoZW4gcmV0dXJuaW5nIGZyb20gaW5pdGlhbGl6ZUFzeW5jIHRvIHRoZVxuICAgICAgLy8gZGV2ZWxvcGVyLCB3ZSBqdXN0IGluZ29yZSB0aGF0IHN0cmluZy4gIEluIHRoZSBjYXNlIG9mIGluaXRpYWxpemluZyBmcm9tIGFuIGV4dGVuc2lvbiBkaWFsb2csIHRoaXMgc3RyaW5nXG4gICAgICAvLyBpcyBhbiBvcHRpb25hbCBwYXlsb2FkIHNlbnQgZnJvbSB0aGUgcGFyZW50IGV4dGVuc2lvbi5cbiAgICAgIHJldHVybiByZXN1bHQuZXh0ZW5zaW9uRGlhbG9nUGF5bG9hZDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZURhc2hib2FyZENvbnRlbnQoaW5mbzogRXh0ZW5zaW9uRGFzaGJvYXJkSW5mbywgc2hlZXRQYXRoOiBTaGVldFBhdGgpOiBEYXNoYm9hcmRDb250ZW50IHtcbiAgICBjb25zdCBkYXNoYm9hcmRJbXBsID0gbmV3IERhc2hib2FyZEltcGwoaW5mbywgc2hlZXRQYXRoKTtcbiAgICBjb25zdCBkYXNoYm9hcmQgPSBuZXcgRGFzaGJvYXJkKGRhc2hib2FyZEltcGwpO1xuICAgIHJldHVybiBuZXcgRGFzaGJvYXJkQ29udGVudChkYXNoYm9hcmQpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplU2V0dGluZ3Moc2V0dGluZ3NJbmZvOiBFeHRlbnNpb25TZXR0aW5nc0luZm8pOiBTZXR0aW5ncyB7XG4gICAgY29uc3Qgc2V0dGluZ3NJbXBsID0gbmV3IFNldHRpbmdzSW1wbChzZXR0aW5nc0luZm8pO1xuICAgIHJldHVybiBuZXcgU2V0dGluZ3Moc2V0dGluZ3NJbXBsKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUNvbnRleHRNZW51Q2FsbGJhY2tzKGNvbnRleHRNZW51RnVuY3Rpb25zPzogQ2FsbGJhY2tNYXApOiB2b2lkIHtcbiAgICBjb25zdCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8Tm90aWZpY2F0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLk5vdGlmaWNhdGlvbik7XG5cbiAgICAvLyBVbnJlZ2lzdGVyIGZ1bmN0aW9uIG5vdCB1c2VkIHNpbmNlIHRoZXNlIG5vdGlmaWNhdGlvbnMgc2hvdWxkIGJlXG4gICAgLy8gb2JzZXJ2ZWQgZm9yIHRoZSBmdWxsIGxpZmV0aW1lIG9mIHRoZSBleHRlbnNpb24uXG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuQ29udGV4dE1lbnVDbGljaywgKG1vZGVsKSA9PiB7XG4gICAgICAvLyBMZXQgdGhyb3VnaCBhbnkgY29udGV4dCBtZW51IGV2ZW50LCB0aGVzZSBhcmUgYWxyZWFkeSBmaWx0ZXJlZCBvbiBhcGktY29yZVxuICAgICAgLy8gYmFzZWQgb24gdGhlIGV4dGVuc2lvbiBsb2NhdG9yLlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgKGV2ZW50OiBDb250ZXh0TWVudUV2ZW50KSA9PiB7XG4gICAgICAvLyBFeGVjdXRlIHRoZSBmdW5jdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb250ZXh0IG1lbnUgSURcbiAgICAgIGlmIChjb250ZXh0TWVudUZ1bmN0aW9ucykge1xuICAgICAgICBpZiAoIWNvbnRleHRNZW51RnVuY3Rpb25zW2V2ZW50LmlkXSkge1xuICAgICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgUmVjZWl2ZWQgdW5leHBlY3RlZCBjb250ZXh0IG1lbnUgSWQgZnJvbSBldmVudDogJHtldmVudC5pZH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHRNZW51RnVuY3Rpb25zW2V2ZW50LmlkXSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvSW1wbC9FeHRlbnNpb25zSW1wbC50cyIsIi8vIEFsbCBlbnVtIHZhbHVlcyBtYWRlIGF2YWlsYWJsZSB0byBFeHRlbnNpb25zIGRldmVsb3BlcnMuXG4vLyBFbnVtcyBzaG91bGQgYmUga2VwdCBpbiBhbHBoYWJldGljYWwgb3JkZXIuXG5cbi8qKlxuICogVGhlIGNvbnRleHQgaW4gd2hpY2ggdGhlIEV4dGVuc2lvbnMgaXMgY3VycmVudGx5IHJ1bm5pbmcuXG4gKi9cbmV4cG9ydCBlbnVtIEV4dGVuc2lvbkNvbnRleHQge1xuICBEZXNrdG9wID0gJ2Rlc2t0b3AnLFxuICBTZXJ2ZXIgPSAnc2VydmVyJ1xufVxuXG4vKipcbiAqIFRoZSBtb2RlIGluIHdoaWNoIHRoZSBFeHRlbnNpb25zIGlzIGN1cnJlbnRseSBydW5uaW5nLlxuICovXG5leHBvcnQgZW51bSBFeHRlbnNpb25Nb2RlIHtcbiAgQXV0aG9yaW5nID0gJ2F1dGhvcmluZycsXG4gIFZpZXdpbmcgPSAndmlld2luZydcbn1cblxuZXhwb3J0IGVudW0gQW5hbHl0aWNzT2JqZWN0VHlwZSB7XG4gIENsdXN0ZXIgPSAnY2x1c3RlcicsXG4gIEZvcmVjYXN0ID0gJ2ZvcmVjYXN0JyxcbiAgVHJlbmRMaW5lID0gJ3RyZW5kLWxpbmUnXG59XG5cbmV4cG9ydCBlbnVtIENvbHVtblR5cGUge1xuICBEaXNjcmV0ZSA9ICdkaXNjcmV0ZScsXG4gIENvbnRpbnVvdXMgPSAnY29udGludW91cydcbn1cblxuLyoqXG4gKiBXaGF0IHRoZSBvYmplY3QgcmVwcmVzZW50cyBpbiBhIGRhc2hib2FyZC5cbiAqL1xuZXhwb3J0IGVudW0gRGFzaGJvYXJkT2JqZWN0VHlwZSB7XG4gIEJsYW5rID0gJ2JsYW5rJyxcbiAgV29ya3NoZWV0ID0gJ3dvcmtzaGVldCcsXG4gIFF1aWNrRmlsdGVyID0gJ3F1aWNrLWZpbHRlcicsXG4gIFBhcmFtZXRlckNvbnRyb2wgPSAncGFyYW1ldGVyLWNvbnRyb2wnLFxuICBQYWdlRmlsdGVyID0gJ3BhZ2UtZmlsdGVyJyxcbiAgTGVnZW5kID0gJ2xlZ2VuZCcsXG4gIFRpdGxlID0gJ3RpdGxlJyxcbiAgVGV4dCA9ICd0ZXh0JyxcbiAgSW1hZ2UgPSAnaW1hZ2UnLFxuICBXZWJQYWdlID0gJ3dlYi1wYWdlJyxcbiAgRXh0ZW5zaW9uID0gJ2V4dGVuc2lvbidcbn1cblxuLyoqXG4gKiBUaGUgZGlmZmVyZW50IHR5cGVzIG9mIGRhdGEgYSB2YWx1ZSBjYW4gaGF2ZVxuICovXG5leHBvcnQgZW51bSBEYXRhVHlwZSB7XG4gIFN0cmluZyA9ICdzdHJpbmcnLFxuICBJbnQgPSAnaW50JyxcbiAgRmxvYXQgPSAnZmxvYXQnLFxuICBCb29sID0gJ2Jvb2wnLFxuICBEYXRlID0gJ2RhdGUnLFxuICBEYXRlVGltZSA9ICdkYXRlLXRpbWUnLFxuICBTcGF0aWFsID0gJ3NwYXRpYWwnXG59XG5cbi8qKlxuICogVmFsaWQgZGF0ZSByYW5nZXMgZm9yIGEgcmVsYXRpdmUgZGF0ZSBmaWx0ZXIuXG4gKi9cbmV4cG9ydCBlbnVtIERhdGVSYW5nZVR5cGUge1xuICBMYXN0ID0gJ2xhc3QnLFxuICBMYXN0TiA9ICdsYXN0LW4nLFxuICBOZXh0ID0gJ25leHQnLFxuICBOZXh0TiA9ICduZXh0LW4nLFxuICBDdXJyZW50ID0gJ2N1cnJlbnQnLFxuICBUb0RhdGUgPSAndG8tZGF0ZSdcbn1cblxuZXhwb3J0IGVudW0gRW5jb2RpbmdUeXBlIHtcbiAgQ29sdW1uID0gJ2NvbHVtbicsXG4gIFJvdyA9ICdyb3cnLFxuICBQYWdlID0gJ3BhZ2UnLFxuICBGaWx0ZXIgPSAnZmlsdGVyJyxcbiAgTWFya3NUeXBlID0gJ21hcmtzLXR5cGUnLFxuICBNZWFzdXJlVmFsdWVzID0gJ21lYXN1cmUtdmFsdWVzJyxcbiAgQ29sb3IgPSAnY29sb3InLFxuICBTaXplID0gJ3NpemUnLFxuICBMYWJlbCA9ICdsYWJlbCcsXG4gIERldGFpbCA9ICdkZXRhaWwnLFxuICBUb29sdGlwID0gJ3Rvb2x0aXAnLFxuICBTaGFwZSA9ICdzaGFwZScsXG4gIFBhdGggPSAncGF0aCcsXG4gIEFuZ2xlID0gJ2FuZ2xlJ1xufVxuXG4vKipcbiAqIEFsbCBlcnJvciBjb2RlcyB1c2VkIGJ5IHRoZSBFeHRlbnNpb25zIEFQSS5cbiAqL1xuZXhwb3J0IGVudW0gRXJyb3JDb2RlcyB7XG4gIC8qKlxuICAgKiBUaHJvd24gd2hlbiBjYWxsZXIgYXR0ZW1wdHMgdG8gZXhlY3V0ZSBjb21tYW5kIGJlZm9yZSBpbml0aWFsaXphdGlvbiBoYXMgY29tcGxldGVkLlxuICAgKi9cbiAgQVBJTm90SW5pdGlhbGl6ZWQgPSAnYXBpLW5vdC1pbml0aWFsaXplZCcsXG4gIC8qKlxuICAgKiBPbmx5IG9uZSBkaWFsb2cgY2FuIGJlIG9wZW5lZCBhdCB0aW1lIHdpdGggdGhlIFVJIG5hbWVzcGFjZSBmdW5jdGlvbmFsaXR5LlxuICAgKi9cbiAgRGlhbG9nQWxyZWFkeU9wZW4gPSAnZGlhbG9nLWFscmVhZHktb3BlbicsXG4gIC8qKlxuICAgKiBUaGUgb3BlbiBkaWFsb2cgd2FzIGNsb3NlZCBieSB0aGUgdXNlci5cbiAgICovXG4gIERpYWxvZ0Nsb3NlZEJ5VXNlciA9ICdkaWFsb2ctY2xvc2VkLWJ5LXVzZXInLFxuICAvKipcbiAgICogQW4gZXJyb3Igb2NjdXJyZWQgd2l0aGluIHRoZSBUYWJsZWF1IEV4dGVuc2lvbnMgQVBJLiBDb250YWN0IFRhYmxlYXUgU3VwcG9ydC5cbiAgICovXG4gIEludGVybmFsRXJyb3IgPSAnaW50ZXJuYWwtZXJyb3InLFxuICAvKipcbiAgICogQSBkaWFsb2cgbXVzdCBzdGFydCBvbiB0aGUgc2FtZSBkb21haW4gYXMgdGhlIHBhcmVudCBleHRlbmlvbi5cbiAgICovXG4gIEludmFsaWREb21haW5EaWFsb2cgPSAnaW52YWxpZC1kaWFsb2ctZG9tYWluJyxcbiAgLyoqXG4gICAqIEEgcGFyYW1ldGVyIGlzIG5vdCB0aGUgY29ycmVjdCBkYXRhIHR5cGUgb3IgZm9ybWF0LiBUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyIGlzIHNwZWNpZmllZCBpbiB0aGUgRXJyb3IubWVzc2FnZSBmaWVsZC5cbiAgICovXG4gIEludmFsaWRQYXJhbWV0ZXIgPSAnaW52YWxpZC1wYXJhbWV0ZXInLFxuICAvKipcbiAgICogQ2FuIG9jY3VyIGlmIHRoZSBleHRlbnNpb24gaW50ZXJhY3RzIHdpdGggYSBmaWx0ZXIgdGhhdCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIHdvcmtzaGVldC5cbiAgICovXG4gIE1pc3NpbmdGaWx0ZXIgPSAnbWlzc2luZy1maWx0ZXInLFxuICAvKipcbiAgICogQ2FuIG9jY3VyIGlmIHRoZSBleHRlbnNpb24gaW50ZXJhY3RzIHdpdGggYSBwYXJhbWV0ZXIgdGhhdCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIHdvcmtzaGVldC5cbiAgICovXG4gIE1pc3NpbmdQYXJhbWV0ZXIgPSAnbWlzc2luZy1wYXJhbWV0ZXInLFxuICAvKipcbiAgICogSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuICBTZXJ2ZXJFcnJvciA9ICdzZXJ2ZXItZXJyb3InLFxuICAvKipcbiAgICogRGV2ZWxvcGVyIGNhbm5vdCBzYXZlIHNldHRpbmdzIHdoaWxlIGFub3RoZXIgc2F2ZSBpcyBzdGlsbCBpbiBwcm9ncmVzcy5cbiAgICovXG4gIFNldHRpbmdTYXZlSW5Qcm9ncmVzcyA9ICdzZXR0aW5nLXNhdmUtaW4tcHJvZ3Jlc3MnLFxuICAvKipcbiAgICogQW4gdW5rbm93biBldmVudCBuYW1lIHdhcyBzcGVjaWZpZWQgaW4gdGhlIGNhbGwgdG8gVml6LmFkZEV2ZW50TGlzdGVuZXJvciBWaXoucmVtb3ZlRXZlbnRMaXN0ZW5lci5cbiAgICovXG4gIFVuc3VwcG9ydGVkRXZlbnROYW1lID0gJ3Vuc3VwcG9ydGVkLWV2ZW50LW5hbWUnLFxuICAvKipcbiAgICogQSBtZXRob2Qgd2FzIHVzZWQgZm9yIGEgdHlwZSBvZiBkYXRhc291cmNlIHRoYXQgZG9lc24ndCBzdXBwb3J0IHRoYXQgbWV0aG9kIChzZWUgZ2V0QWN0aXZlVGFibGVzQXN5bmMgZm9yIGFuIGV4YW1wbGUpXG4gICAqL1xuICBVbnN1cHBvcnRlZE1ldGhvZEZvckRhdGFTb3VyY2VUeXBlID0gJ3Vuc3VwcG9ydGVkLW1ldGhvZC1mb3ItZGF0YS1zb3VyY2UtdHlwZSdcbn1cblxuLyoqXG4gKiAgVHlwZSBvZiBhZ2dyZWdhdGlvbiBvbiBhIGZpZWxkLlxuICovXG5leHBvcnQgZW51bSBGaWVsZEFnZ3JlZ2F0aW9uVHlwZSB7XG4gIFN1bSA9ICdzdW0nLFxuICBBdmcgPSAnYXZnJyxcbiAgTWluID0gJ21pbicsXG4gIE1heCA9ICdtYXgnLFxuICBTdGRldiA9ICdzdGRldicsXG4gIFN0ZGV2cCA9ICdzdGRldnAnLFxuICBWYXIgPSAndmFyJyxcbiAgVmFycCA9ICd2YXJwJyxcbiAgQ291bnQgPSAnY291bnQnLFxuICBDb3VudGQgPSAnY291bnRkJyxcbiAgTWVkaWFuID0gJ21lZGlhbicsXG4gIEF0dHIgPSAnYXR0cicsXG4gIE5vbmUgPSAnbm9uZScsXG4gIFllYXIgPSAneWVhcicsXG4gIFF0ciA9ICdxdHInLFxuICBNb250aCA9ICdtb250aCcsXG4gIERheSA9ICdkYXknLFxuICBIb3VyID0gJ2hvdXInLFxuICBNaW51dGUgPSAnbWludXRlJyxcbiAgU2Vjb25kID0gJ3NlY29uZCcsXG4gIFdlZWsgPSAnd2VlaycsXG4gIFdlZWtkYXkgPSAnd2Vla2RheScsXG4gIE1vbnRoWWVhciA9ICdtb250aC15ZWFyJyxcbiAgTWR5ID0gJ21keScsXG4gIEVuZCA9ICdlbmQnLFxuICBUcnVuY1llYXIgPSAndHJ1bmMteWVhcicsXG4gIFRydW5jUXRyID0gJ3RydW5jLXF0cicsXG4gIFRydW5jTW9udGggPSAndHJ1bmMtbW9udGgnLFxuICBUcnVuY1dlZWsgPSAndHJ1bmMtd2VlaycsXG4gIFRydW5jRGF5ID0gJ3RydW5jLWRheScsXG4gIFRydW5jSG91ciA9ICd0cnVuYy1ob3VyJyxcbiAgVHJ1bmNNaW51dGUgPSAndHJ1bmMtbWludXRlJyxcbiAgVHJ1bmNTZWNvbmQgPSAndHJ1bmMtc2Vjb25kJyxcbiAgUXVhcnQxID0gJ3F1YXJ0MScsXG4gIFF1YXJ0MyA9ICdxdWFydDMnLFxuICBTa2V3bmVzcyA9ICdza2V3bmVzcycsXG4gIEt1cnRvc2lzID0gJ2t1cnRvc2lzJyxcbiAgSW5PdXQgPSAnaW4tb3V0JyxcbiAgVXNlciA9ICd1c2VyJ1xufVxuXG4vKipcbiAqIFJvbGUgb2YgYSBmaWVsZC5cbiAqL1xuZXhwb3J0IGVudW0gRmllbGRSb2xlVHlwZSB7XG4gIERpbWVuc2lvbiA9ICdkaW1lbnNpb24nLFxuICBNZWFzdXJlID0gJ21lYXN1cmUnLFxuICBVbmtub3duID0gJ3Vua25vd24nXG59XG5cbi8qKlxuICogQW4gZW51bWVyYXRpb24gb2YgdGhlIHZhbGlkIHR5cGVzIG9mIGZpbHRlcnMgdGhhdCBjYW4gYmUgYXBwbGllZC5cbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyVHlwZSB7XG4gIENhdGVnb3JpY2FsID0gJ2NhdGVnb3JpY2FsJyxcbiAgUmFuZ2UgPSAncmFuZ2UnLFxuICBIaWVyYXJjaGljYWwgPSAnaGllcmFyY2hpY2FsJyxcbiAgUmVsYXRpdmVEYXRlID0gJ3JlbGF0aXZlLWRhdGUnXG59XG5cbi8qKlxuICogVGhlIGRpZmZlcmVudCB1cGRhdGUgdHlwZXMgZm9yIGFwcGx5aW5nIGZpbHRlclxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJVcGRhdGVUeXBlIHtcbiAgQWRkID0gJ2FkZCcsXG4gIEFsbCA9ICdhbGwnLFxuICBSZXBsYWNlID0gJ3JlcGxhY2UnLFxuICBSZW1vdmUgPSAncmVtb3ZlJ1xufVxuXG4vKipcbiAqIFRoZSBkb21haW4gdHlwZSBmb3IgYSBmaWx0ZXJcbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyRG9tYWluVHlwZSB7XG4gIC8qKlxuICAgKiBUaGUgZG9tYWluIHZhbHVlcyB0aGF0IGFyZSByZWxldmFudCB0byB0aGUgc3BlY2lmaWVkIGZpbHRlclxuICAgKiBpLmUuIHRoZSBkb21haW4gaXMgcmVzdHJpY3RlZCBieSBhIHByZXZpb3VzIGZpbHRlclxuICAgKi9cbiAgUmVsZXZhbnQgPSAncmVsZXZhbnQnLFxuICAvKipcbiAgICogbGlzdCBvZiBhbGwgcG9zc2libGUgZG9tYWluIHZhbHVlcyBmcm9tIGRhdGFiYXNlXG4gICAqL1xuICBEYXRhYmFzZSA9ICdkYXRhYmFzZSdcbn1cblxuLyoqXG4gKiBUaGUgb3B0aW9uIGZvciBzcGVjaWZ5aW5nIHdoaWNoIHZhbHVlcyB0byBpbmNsdWRlIGZvciBmaWx0ZXJpbmdcbiAqIEluZGljYXRlcyB3aGF0IHRvIGRvIHdpdGggbnVsbCB2YWx1ZXMgZm9yIGEgZ2l2ZW4gZmlsdGVyIG9yIG1hcmsgc2VsZWN0aW9uIGNhbGwuXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlck51bGxPcHRpb24ge1xuICBOdWxsVmFsdWVzID0gJ251bGwtdmFsdWVzJyxcbiAgTm9uTnVsbFZhbHVlcyA9ICdub24tbnVsbC12YWx1ZXMnLFxuICBBbGxWYWx1ZXMgPSAnYWxsLXZhbHVlcydcbn1cblxuLyoqXG4gKiBUeXBlIG9mIG1hcmsgZm9yIGEgZ2l2ZW4gbWFya3MgY2FyZCBpbiBhIHZpei5cbiAqL1xuZXhwb3J0IGVudW0gTWFya1R5cGUge1xuICBCYXIgPSAnYmFyJyxcbiAgTGluZSA9ICdsaW5lJyxcbiAgQXJlYSA9ICdhcmVhJyxcbiAgU3F1YXJlID0gJ3NxdWFyZScsXG4gIENpcmNsZSA9ICdjaXJjbGUnLFxuICBTaGFwZSA9ICdzaGFwZScsXG4gIFRleHQgPSAndGV4dCcsXG4gIE1hcCA9ICdtYXAnLFxuICBQaWUgPSAncGllJyxcbiAgR2FudHRCYXIgPSAnZ2FudHQtYmFyJyxcbiAgUG9seWdvbiA9ICdwb2x5Z29uJ1xufVxuXG4vKipcbiAqIEFuIGVudW1lcmF0aW9uIGRlc2NyaWJpbmcgdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBhbGxvd2FibGUgdmFsdWVzLlxuICogVGhpcyBpcyB1c2VkIGZvciByZXN0cmljdGluZyB0aGUgZG9tYWluIG9mIGEgcGFyYW1ldGVyXG4gKi9cbmV4cG9ydCBlbnVtIFBhcmFtZXRlclZhbHVlVHlwZSB7XG4gIEFsbCA9ICdhbGwnLFxuICBMaXN0ID0gJ2xpc3QnLFxuICBSYW5nZSA9ICdyYW5nZSdcbn1cblxuLyoqXG4gKiBEYXRlIHBlcmlvZCB1c2VkIGluIGZpbHRlcnMgYW5kIGluIHBhcmFtZXRlcnMuXG4gKi9cbmV4cG9ydCBlbnVtIFBlcmlvZFR5cGUge1xuICBZZWFycyA9ICd5ZWFycycsXG4gIFF1YXJ0ZXJzID0gJ3F1YXJ0ZXJzJyxcbiAgTW9udGhzID0gJ21vbnRocycsXG4gIFdlZWtzID0gJ3dlZWtzJyxcbiAgRGF5cyA9ICdkYXlzJyxcbiAgSG91cnMgPSAnaG91cnMnLFxuICBNaW51dGVzID0gJ21pbnV0ZXMnLFxuICBTZWNvbmRzID0gJ3NlY29uZHMnXG59XG5cbmV4cG9ydCBlbnVtIFF1aWNrVGFibGVDYWxjVHlwZSB7XG4gIFJ1bm5pbmdUb3RhbCA9ICdydW5uaW5nLXRvdGFsJyxcbiAgRGlmZmVyZW5jZSA9ICdkaWZmZXJlbmNlJyxcbiAgUGVyY2VudERpZmZlcmVuY2UgPSAncGVyY2VudC1kaWZmZXJlbmNlJyxcbiAgUGVyY2VudE9mVG90YWwgPSAncGVyY2VudC1vZi10b3RhbCcsXG4gIFJhbmsgPSAncmFuaycsXG4gIFBlcmNlbnRpbGUgPSAncGVyY2VudGlsZScsXG4gIE1vdmluZ0F2ZXJhZ2UgPSAnbW92aW5nLWF2ZXJhZ2UnLFxuICBZVERUb3RhbCA9ICd5dGQtdG90YWwnLFxuICBDb21wb3VuZEdyb3d0aFJhdGUgPSAnY29tcG91bmQtZ3Jvd3RoLXJhdGUnLFxuICBZZWFyT3ZlclllYXJHcm93dGggPSAneWVhci1vdmVyLXllYXItZ3Jvd3RoJyxcbiAgWVRER3Jvd3RoID0gJ3l0ZC1ncm93dGgnLFxuICBVbmRlZmluZWQgPSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIEVudW0gZm9yIHNwZWNpZnlpbmcgdGhlIHNlbGVjdGlvbiB0eXBlIGZvciBzZWxlY3QgbWFya3MgYXBpLlxuICovXG5leHBvcnQgZW51bSBTZWxlY3Rpb25VcGRhdGVUeXBlIHtcbiAgUmVwbGFjZSA9ICdzZWxlY3QtcmVwbGFjZScsXG4gIEFkZCA9ICdzZWxlY3QtYWRkJyxcbiAgUmVtb3ZlID0gJ3NlbGVjdC1yZW1vdmUnXG59XG5cbi8qKlxuICogVGhlIHR5cGUgb2Ygc2hlZXQgYSBTaGVldCBvYmplY3QgcmVwcmVzZW50c1xuICovXG5leHBvcnQgZW51bSBTaGVldFR5cGUge1xuICBEYXNoYm9hcmQgPSAnZGFzaGJvYXJkJyxcbiAgU3RvcnkgPSAnc3RvcnknLFxuICBXb3Jrc2hlZXQgPSAnd29ya3NoZWV0J1xufVxuXG5leHBvcnQgZW51bSBTb3J0RGlyZWN0aW9uIHtcbiAgSW5jcmVhc2luZyA9ICdpbmNyZWFzaW5nJyxcbiAgRGVjcmVhc2luZyA9ICdkZWNyZWFzaW5nJ1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBjZXJ0YWluIHR5cGUgb2YgZXZlbnQgd2hpY2ggY2FuIGJlIGxpc3RlbmVkIGZvclxuICovXG5leHBvcnQgZW51bSBUYWJsZWF1RXZlbnRUeXBlIHtcbiAgLyoqIFJhaXNlZCB3aGVuIGFueSBmaWx0ZXIgaGFzIGNoYW5nZWQgc3RhdGUuKi9cbiAgRmlsdGVyQ2hhbmdlZCA9ICdmaWx0ZXItY2hhbmdlZCcsXG5cbiAgLyoqIFRoZSBzZWxlY3RlZCBtYXJrcyBvbiBhIHZpc3VhbGl6YXRpb24gaGFzIGNoYW5nZWQgKi9cbiAgTWFya1NlbGVjdGlvbkNoYW5nZWQgPSAnbWFyay1zZWxlY3Rpb24tY2hhbmdlZCcsXG5cbiAgLyoqIEEgcGFyYW1ldGVyIGhhcyBoYWQgaXRzIHZhbHVlIG1vZGlmaWVkICovXG4gIFBhcmFtZXRlckNoYW5nZWQgPSAncGFyYW1ldGVyLWNoYW5nZWQnLFxuXG4gIC8qKiBTZXR0aW5ncyBoYXZlIGJlZW4gY2hhbmdlZCBmb3IgdGhpcyBleHRlbnNpb24uICovXG4gIFNldHRpbmdzQ2hhbmdlZCA9ICdzZXR0aW5ncy1jaGFuZ2VkJ1xufVxuXG5leHBvcnQgZW51bSBUcmVuZExpbmVNb2RlbFR5cGUge1xuICBMaW5lYXIgPSAnbGluZWFyJyxcbiAgTG9nYXJpdGhtaWMgPSAnbG9nYXJpdGhtaWMnLFxuICBFeHBvbmVudGlhbCA9ICdleHBvbmVudGlhbCcsXG4gIFBvbHlub21pYWwgPSAncG9seW5vbWlhbCdcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvRXh0ZXJuYWxDb250cmFjdC9FbnVtcy50cyIsImV4cG9ydCBlbnVtIEV4dGVuc2lvbkNvbnRleHQge1xuICBEZXNrdG9wID0gJ2Rlc2t0b3AnLFxuICBTZXJ2ZXIgPSAnc2VydmVyJyxcbiAgVW5rbm93biA9ICd1bmtub3duJ1xufVxuXG5leHBvcnQgZW51bSBFeHRlbnNpb25Nb2RlIHtcbiAgQXV0aG9yaW5nID0gJ2F1dGhvcmluZycsXG4gIFZpZXdpbmcgPSAndmlld2luZycsXG4gIFVua25vd24gPSAndW5rbm93bidcbn1cblxuZXhwb3J0IGVudW0gQ29sdW1uVHlwZSB7XG4gIERpc2NyZXRlID0gJ2Rpc2NyZXRlJyxcbiAgQ29udGludW91cyA9ICdjb250aW51b3VzJ1xufVxuXG5leHBvcnQgZW51bSBEYXNoYm9hcmRPYmplY3RUeXBlIHtcbiAgQmxhbmsgPSAnYmxhbmsnLFxuICBXb3Jrc2hlZXQgPSAnd29ya3NoZWV0JyxcbiAgUXVpY2tGaWx0ZXIgPSAncXVpY2stZmlsdGVyJyxcbiAgUGFyYW1ldGVyQ29udHJvbCA9ICdwYXJhbWV0ZXItY29udHJvbCcsXG4gIFBhZ2VGaWx0ZXIgPSAncGFnZS1maWx0ZXInLFxuICBMZWdlbmQgPSAnbGVnZW5kJyxcbiAgVGl0bGUgPSAndGl0bGUnLFxuICBUZXh0ID0gJ3RleHQnLFxuICBJbWFnZSA9ICdpbWFnZScsXG4gIFdlYlBhZ2UgPSAnd2ViLXBhZ2UnLFxuICBFeHRlbnNpb24gPSAnZXh0ZW5zaW9uJ1xufVxuXG5leHBvcnQgZW51bSBEYXRhVHlwZSB7XG4gIFN0cmluZyA9ICdzdHJpbmcnLFxuICBJbnQgPSAnaW50JyxcbiAgRmxvYXQgPSAnZmxvYXQnLFxuICBCb29sID0gJ2Jvb2wnLFxuICBEYXRlID0gJ2RhdGUnLFxuICBEYXRlVGltZSA9ICdkYXRlLXRpbWUnLFxuICBTcGF0aWFsID0gJ3NwYXRpYWwnXG59XG5cbmV4cG9ydCBlbnVtIEVuY29kZWREYXRhVHlwZSB7XG4gIE51bWJlciA9ICdudW1iZXInLFxuICBTdHJpbmcgPSAnc3RyaW5nJyxcbiAgRGF0ZSA9ICdkYXRlJyxcbiAgQm9vbGVhbiA9ICdib29sZWFuJ1xufVxuXG5leHBvcnQgZW51bSBFcnJvckNvZGVzIHtcbiAgSU5JVElBTElaQVRJT05fRVJST1IgPSAnaW5pdGlhbGl6YXRpb24tZXJyb3InLFxuICBJTlRFUk5BTF9FUlJPUiA9ICdpbnRlcm5hbC1lcnJvcicsXG4gIE1JU1NJTkdfRU5VTV9NQVBQSU5HID0gJ21pc3NpbmctZW51bS1tYXBwaW5nJyxcbiAgTUlTU0lOR19QQVJBTUVURVIgPSAnbWlzc2luZy1wYXJhbWV0ZXInLFxuICBQRVJNSVNTSU9OX0RFTklFRCA9ICdwZXJtaXNzaW9uLWRlbmllZCcsXG4gIFBSRVNfTU9ERUxfUEFSU0lOR19FUlJPUiA9ICdwcmVzLW1vZGVsLXBhcnNpbmctZXJyb3InLFxuICBWRVJTSU9OX05PVF9DT05GSUdVUkVEID0gJ3ZlcnNpb24tbm90LWNvbmZpZ3VyZWQnLFxuICBVTktOT1dOX1ZFUkJfSUQgPSAndW5rbm93bi12ZXJiLWlkJ1xufVxuXG5leHBvcnQgZW51bSBGaWVsZEFnZ3JlZ2F0aW9uVHlwZSB7XG4gIFN1bSA9ICdzdW0nLFxuICBBdmcgPSAnYXZnJyxcbiAgTWluID0gJ21pbicsXG4gIE1heCA9ICdtYXgnLFxuICBTdGRldiA9ICdzdGRldicsXG4gIFN0ZGV2cCA9ICdzdGRldnAnLFxuICBWYXIgPSAndmFyJyxcbiAgVmFycCA9ICd2YXJwJyxcbiAgQ291bnQgPSAnY291bnQnLFxuICBDb3VudGQgPSAnY291bnRkJyxcbiAgTWVkaWFuID0gJ21lZGlhbicsXG4gIEF0dHIgPSAnYXR0cicsXG4gIE5vbmUgPSAnbm9uZScsXG4gIFllYXIgPSAneWVhcicsXG4gIFF0ciA9ICdxdHInLFxuICBNb250aCA9ICdtb250aCcsXG4gIERheSA9ICdkYXknLFxuICBIb3VyID0gJ2hvdXInLFxuICBNaW51dGUgPSAnbWludXRlJyxcbiAgU2Vjb25kID0gJ3NlY29uZCcsXG4gIFdlZWsgPSAnd2VlaycsXG4gIFdlZWtkYXkgPSAnd2Vla2RheScsXG4gIE1vbnRoWWVhciA9ICdtb250aC15ZWFyJyxcbiAgTWR5ID0gJ21keScsXG4gIEVuZCA9ICdlbmQnLFxuICBUcnVuY1llYXIgPSAndHJ1bmMteWVhcicsXG4gIFRydW5jUXRyID0gJ3RydW5jLXF0cicsXG4gIFRydW5jTW9udGggPSAndHJ1bmMtbW9udGgnLFxuICBUcnVuY1dlZWsgPSAndHJ1bmMtd2VlaycsXG4gIFRydW5jRGF5ID0gJ3RydW5jLWRheScsXG4gIFRydW5jSG91ciA9ICd0cnVuYy1ob3VyJyxcbiAgVHJ1bmNNaW51dGUgPSAndHJ1bmMtbWludXRlJyxcbiAgVHJ1bmNTZWNvbmQgPSAndHJ1bmMtc2Vjb25kJyxcbiAgUXVhcnQxID0gJ3F1YXJ0MScsXG4gIFF1YXJ0MyA9ICdxdWFydDMnLFxuICBTa2V3bmVzcyA9ICdza2V3bmVzcycsXG4gIEt1cnRvc2lzID0gJ2t1cnRvc2lzJyxcbiAgSW5PdXQgPSAnaW4tb3V0JyxcbiAgVXNlciA9ICd1c2VyJ1xufVxuXG5leHBvcnQgZW51bSBGaWVsZFJvbGVUeXBlIHtcbiAgRGltZW5zaW9uID0gJ2RpbWVuc2lvbicsXG4gIE1lYXN1cmUgPSAnbWVhc3VyZScsXG4gIFVua25vd24gPSAndW5rbm93bidcbn1cblxuLyoqXG4gKiAgVGhlIGRpZmZlcmVudCB1cGRhdGUgdHlwZXMgZm9yIGFwcGx5aW5nIGZpbHRlci5cbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyVXBkYXRlVHlwZSB7XG4gIEFkZCA9ICdhZGQnLFxuICBBbGwgPSAnYWxsJyxcbiAgUmVwbGFjZSA9ICdyZXBsYWNlJyxcbiAgUmVtb3ZlID0gJ3JlbW92ZSdcbn1cblxuZXhwb3J0IGVudW0gU2hlZXRUeXBlIHtcbiAgRGFzaGJvYXJkID0gJ2Rhc2hib2FyZCcsXG4gIFN0b3J5ID0gJ3N0b3J5JyxcbiAgV29ya3NoZWV0ID0gJ3dvcmtzaGVldCdcbn1cblxuZXhwb3J0IGVudW0gRG9tYWluUmVzdHJpY3Rpb25UeXBlIHtcbiAgQWxsID0gJ2FsbCcsXG4gIExpc3QgPSAnbGlzdCcsXG4gIFJhbmdlID0gJ3JhbmdlJ1xufVxuXG5leHBvcnQgZW51bSBEYXRlU3RlcFBlcmlvZCB7XG4gIFllYXJzID0gJ3llYXJzJyxcbiAgUXVhcnRlcnMgPSAncXVhcnRlcnMnLFxuICBNb250aHMgPSAnbW9udGhzJyxcbiAgV2Vla3MgPSAnd2Vla3MnLFxuICBEYXlzID0gJ2RheXMnLFxuICBIb3VycyA9ICdob3VycycsXG4gIE1pbnV0ZXMgPSAnbWludXRlcycsXG4gIFNlY29uZHMgPSAnc2Vjb25kcydcbn1cblxuLyoqXG4gKiBUaGUgb3B0aW9uIGZvciBzcGVjaWZ5aW5nIHdoaWNoIHZhbHVlcyB0byBpbmNsdWRlIGZvciBmaWx0ZXJpbmcuXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlck51bGxPcHRpb24ge1xuICBOdWxsVmFsdWVzID0gJ251bGx2YWx1ZXMnLFxuICBOb25OdWxsVmFsdWVzID0gJ25vbm51bGx2YWx1ZXMnLFxuICBBbGxWYWx1ZXMgPSAnYWxsdmFsdWVzJ1xufVxuXG4vKipcbiAqIFRoZSB0eXBlIG9mIGZpbHRlciBkb21haW5cbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyRG9tYWluVHlwZSB7XG4gIFJlbGV2YW50ID0gJ3JlbGV2YW50JyxcbiAgRGF0YWJhc2UgPSAnZGF0YWJhc2UnXG59XG5cbi8qKlxuICogSW50ZXJuYWwgZW51bSBmb3Igc3BlY2lmeWluZyB0aGUgc2VsZWN0aW9uIHR5cGUgZm9yIHNlbGVjdCBtYXJrcyBhcGkuXG4gKi9cbmV4cG9ydCBlbnVtIFNlbGVjdGlvblVwZGF0ZVR5cGUge1xuICBSZXBsYWNlID0gJ3NlbGVjdC1yZXBsYWNlJyxcbiAgQWRkID0gJ3NlbGVjdC1hZGQnLFxuICBSZW1vdmUgPSAnc2VsZWN0LXJlbW92ZSdcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCBlbnVtIGZvciBzcGVjaWZ5aW5nIHRoZSBpbmNsdWRlZCB2YWx1ZXMgdHlwZSBmb3IgcmFuZ2Ugc2VsZWN0aW9uLlxuICovXG5leHBvcnQgZW51bSBRdWFudGl0YXRpdmVJbmNsdWRlZFZhbHVlcyB7XG4gIEluY2x1ZGVOdWxsID0gJ2luY2x1ZGUtbnVsbCcsXG4gIEluY2x1ZGVOb25OdWxsID0gJ2luY2x1ZGUtbm9uLW51bGwnLFxuICBJbmNsdWRlQWxsID0gJ2luY2x1ZGUtYWxsJ1xufVxuXG4vKipcbiAqIFR5cGUgb2YgbWFyayBmb3IgYSBnaXZlbiBtYXJrcyBjYXJkIGluIGEgdml6LlxuICovXG5leHBvcnQgZW51bSBNYXJrVHlwZSB7XG4gICAgQmFyID0gJ2JhcicsXG4gICAgTGluZSA9ICdsaW5lJyxcbiAgICBBcmVhID0gJ2FyZWEnLFxuICAgIFNxdWFyZSA9ICdzcXVhcmUnLFxuICAgIENpcmNsZSA9ICdjaXJjbGUnLFxuICAgIFNoYXBlID0gJ3NoYXBlJyxcbiAgICBUZXh0ID0gJ3RleHQnLFxuICAgIE1hcCA9ICdtYXAnLFxuICAgIFBpZSA9ICdwaWUnLFxuICAgIEdhbnR0QmFyID0gJ2dhbnR0LWJhcicsXG4gICAgUG9seWdvbiA9ICdwb2x5Z29uJyxcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCBlbnVtIGZvciBzcGVjaWZ5aW5nIHRoZSB0eXBlIG9mIGZpbHRlclxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJUeXBlIHtcbiAgQ2F0ZWdvcmljYWwgPSAnY2F0ZWdvcmljYWwnLFxuICBSYW5nZSA9ICdyYW5nZScsXG4gIFJlbGF0aXZlRGF0ZSA9ICdyZWxhdGl2ZURhdGUnLFxuICBIaWVyYXJjaGljYWwgPSAnaGllcmFyY2hpY2FsJ1xufVxuXG4vKipcbiAqIEludGVybmFsIGVudW0gZm9yIHNwZWNpZnlpbmcgdGhlIERhdGVSYW5nZVR5cGUgb2YgYSByZWxhdGl2ZSBkYXRlIGZpbHRlclxuICovXG5leHBvcnQgZW51bSBEYXRlUmFuZ2VUeXBlIHtcbiAgLyoqXG4gICAqIFJlZmVycyB0byB0aGUgbGFzdCBkYXksIHdlZWssIG1vbnRoLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIExhc3QgPSAnbGFzdCcsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gdGhlIGxhc3QgTiBkYXlzLCB3ZWVrcywgbW9udGhzLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIExhc3ROID0gJ2xhc3ROJyxcbiAgLyoqXG4gICAqIFJlZmVycyB0byB0aGUgbmV4dCBkYXksIHdlZWssIG1vbnRoLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIE5leHQgPSAnbmV4dCcsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gdGhlIG5leHQgTiBkYXlzLCB3ZWVrcywgbW9udGhzLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIE5leHROID0gJ25leHROJyxcbiAgLyoqXG4gICAqIFJlZmVycyB0byB0aGUgY3VycmVudCBkYXksIHdlZWssIG1vbnRoLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIEN1cnJlbnQgPSAnY3VycmVudCcsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gZXZlcnl0aGluZyB1cCB0byBhbmQgaW5jbHVkaW5nIHRoZSBjdXJyZW50IGRheSwgd2VlaywgbW9udGgsIGV0Yy4gb2YgdGhlIGRhdGUgcGVyaW9kLlxuICAgKi9cbiAgVG9EYXRlID0gJ3RvRGF0ZSdcbn1cblxuLyoqXG4gKiBVc2VkIHRvIGRldGVybWluZSBpZiB0aGUgbGF1bmNoaW5nIG9mIGFuIGV4dGVuc2lvbiBkaWFsb2cgc3VjY2VlZGVkIG9yIGZhaWxlZC5cbiAqL1xuZXhwb3J0IGVudW0gRXh0ZW5zaW9uRGlhbG9nUmVzdWx0IHtcbiAgRGlhbG9nQWxyZWFkeU9wZW4gPSAnZGlhbG9nLWFscmVhZHktb3BlbicsXG4gIEludmFsaWREb21haW4gPSAnaW52YWxpZC1kb21haW4nLFxuICBTdWNjZXNzID0gJ3N1Y2Nlc3MnXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL2NvbnRyYWN0L0VudW1zLnRzIiwiaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuLi9jb250cmFjdC9Nb2RlbHMnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uSWQgfSBmcm9tICcuLi9jb250cmFjdC9Ob3RpZmljYXRpb25zJztcbmltcG9ydCB7IFZlcmJJZCB9IGZyb20gJy4uL2NvbnRyYWN0L1ZlcmJzJztcbmltcG9ydCB7IFZlcnNpb25OdW1iZXIgfSBmcm9tICcuL1ZlcnNpb25OdW1iZXInO1xuXG5leHBvcnQgdHlwZSBOb3RpZmljYXRpb25IYW5kbGVyID0gKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4ZWN1dGVQYXJhbWV0ZXJzIHtcbiAgW2tleTogc3RyaW5nXTogTW9kZWw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhlY3V0ZVJlc3BvbnNlIHtcbiAgcmVzdWx0OiBNb2RlbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xuICBub3RpZmljYXRpb25JZDogTm90aWZpY2F0aW9uSWQ7XG4gIGRhdGE6IE1vZGVsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEludGVybmFsQXBpRGlzcGF0Y2hlciB7XG4gIGV4ZWN1dGUodmVyYjogVmVyYklkLCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyk6IFByb21pc2U8RXhlY3V0ZVJlc3BvbnNlPjtcbiAgcmVnaXN0ZXJOb3RpZmljYXRpb25IYW5kbGVyKGhhbmRsZXI6IE5vdGlmaWNhdGlvbkhhbmRsZXIpOiB2b2lkO1xuICB1bnJlZ2lzdGVyTm90aWZpY2F0aW9uSGFuZGxlcihoYW5kbGVyOiBOb3RpZmljYXRpb25IYW5kbGVyKTogdm9pZDtcbn1cblxuLy8gVGhpcyBmYWN0b3J5IGZ1bmN0aW9uIHdpbGwgZ2V0IGNhbGxlZCBmcm9tIHRoZSBleHRlcm5hbCBzaWRlIG9mIHRoaW5ncyB0byBpbnN0YW50aWF0ZSBhIHByb3Blcmx5XG4vLyB2ZXJzaW9uZWQgQVBJIGRpc3BhdGNoZXIgd2hpY2ggdGhpcyBwYXJ0aWN1bGFyIHZlcnNpb24gb2YgZXh0ZXJuYWwga25vd3MgaG93IHRvIHVzZVxuZXhwb3J0IHR5cGUgSW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeSA9XG4gIChpbnRlcm5hbENvbnRyYWN0VmVyc2lvbjogVmVyc2lvbk51bWJlcikgPT4gSW50ZXJuYWxBcGlEaXNwYXRjaGVyO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cgeyBfX3RhYmxlYXVEZXNrdG9wRGlzcGF0Y2hlcjogUHJvbWlzZTxJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5PjsgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIEludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlciB7XG4gIGV4cG9ydCBmdW5jdGlvbiBnZXREZXNrdG9wRGlzcGF0Y2hlclByb21pc2UoKTogUHJvbWlzZTxJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5PiB7XG4gICAgcmV0dXJuIHdpbmRvdy5fX3RhYmxlYXVEZXNrdG9wRGlzcGF0Y2hlcjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBoYXNEZXNrdG9wQXBpRGlzcGF0Y2hlclByb21pc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhSW50ZXJuYWxBcGlEaXNwYXRjaGVySG9sZGVyLmdldERlc2t0b3BEaXNwYXRjaGVyUHJvbWlzZSgpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldERlc2t0b3BEaXNwYXRjaGVyUHJvbWlzZShkaXNwYXRjaGVyOiBQcm9taXNlPEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3Rvcnk+KTogdm9pZCB7XG4gICAgd2luZG93Ll9fdGFibGVhdURlc2t0b3BEaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9pbnRlcmZhY2UvSW50ZXJuYWxBcGlEaXNwYXRjaGVyLnRzIiwiZXhwb3J0IGVudW0gTm90aWZpY2F0aW9uSWQge1xuICBTZWxlY3RlZE1hcmtzQ2hhbmdlZCA9ICdzZWxlY3RlZC1tYXJrcy1jaGFuZ2VkJyxcbiAgUGFyYW1ldGVyQ2hhbmdlZCA9ICdwYXJhbWV0ZXItY2hhbmdlZCcsXG4gIEZpbHRlckNoYW5nZWQgPSAnZmlsdGVyLWNoYW5nZWQnLFxuICBFeHRlbnNpb25EaWFsb2dVcGRhdGUgPSAnZXh0ZW5zaW9uLWRpYWxvZy11cGRhdGUnLFxuICBTZXR0aW5nc0NoYW5nZWQgPSAnc2V0dGluZ3MtY2hhbmdlZCcsXG4gIENvbnRleHRNZW51Q2xpY2sgPSAnY29udGV4dC1tZW51LWNsaWNrJyxcbiAgVGVzdENvbnZlcnNpb25Ob3RpZmljYXRpb24gPSAndGVzdC1jb252ZXJzaW9uLW5vdGlmaWNhdGlvbidcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvY29udHJhY3QvTm90aWZpY2F0aW9ucy50cyIsImV4cG9ydCBlbnVtIFBhcmFtZXRlcklkIHtcbiAgRXh0ZW5zaW9uTG9jYXRvciA9ICdleHRlbnNpb24tbG9jYXRvcicsXG4gIEV4dGVuc2lvbkJvb3RzdHJhcEluZm8gPSAnZXh0ZW5zaW9uLWJvb3RzdHJhcC1pbmZvJyxcbiAgRXh0ZW5zaW9uU2V0dGluZ3NJbmZvID0gJ2V4dGVuc2lvbi1zZXR0aW5ncy1pbmZvJyxcbiAgVmlzdWFsSWQgPSAndmlzdWFsLWlkJyxcbiAgU2hlZXRQYXRoID0gJ3NoZWV0LXBhdGgnLFxuICBJZ25vcmVBbGlhc2VzID0gJ2lnbm9yZS1hbGlhc2VzJyxcbiAgSWdub3JlU2VsZWN0aW9uID0gJ2lnbm9yZS1zZWxlY3Rpb24nLFxuICBJbmNsdWRlQWxsQ29sdW1ucyA9ICdpbmNsdWRlLWFsbC1jb2x1bW5zJyxcbiAgTWF4Um93cyA9ICdtYXgtcm93cycsXG4gIFVuZGVybHlpbmdEYXRhVGFibGUgPSAndW5kZXJseWluZy1kYXRhLXRhYmxlJyxcbiAgVW5kZXJseWluZ1N1bW1hcnlEYXRhVGFibGUgPSAndW5kZXJseWluZy1zdW1tYXJ5LWRhdGEtdGFibGUnLFxuICBEYXRhU291cmNlRGF0YVRhYmxlID0gJ2RhdGEtc291cmNlLWRhdGEtdGFibGUnLFxuICBTZXR0aW5nc1ZhbHVlcyA9ICdzZXR0aW5ncy12YWx1ZXMnLFxuICBTZWxlY3RlZERhdGEgPSAnc2VsZWN0ZWQtZGF0YScsXG4gIEhpZ2hsaWdodGVkRGF0YSA9ICdoaWdobGlnaHRlZC1kYXRhJyxcblxuICAvLyBGaWx0ZXIgUGFyYW1zXG4gIEZpZWxkTmFtZSA9ICdmaWVsZC1uYW1lJyxcbiAgRmlsdGVyVmFsdWVzID0gJ2ZpbHRlci12YWx1ZXMnLFxuICBGaWx0ZXJVcGRhdGVUeXBlID0gJ2ZpbHRlci11cGRhdGUtdHlwZScsXG4gIElzRXhjbHVkZU1vZGUgPSAnaXMtZXhjbHVkZScsXG4gIEZpbHRlclJhbmdlTWluID0gJ2ZpbHRlci1yYW5nZS1taW4nLFxuICBGaWx0ZXJSYW5nZU1heCA9ICdmaWx0ZXItcmFuZ2UtbWF4JyxcbiAgRmlsdGVyUmFuZ2VOdWxsT3B0aW9uID0gJ2ZpbHRlci1yYW5nZS1udWxsLW9wdGlvbicsXG4gIFdvcmtzaGVldEZpbHRlcnMgPSAnd29ya3NoZWV0LWZpbHRlcnMnLFxuICBGaWVsZElkID0gJ2ZpZWxkLWlkJyxcbiAgRG9tYWluVHlwZSA9ICdkb21haW4tdHlwZScsXG4gIENhdGVnb3JpY2FsRG9tYWluID0gJ2NhdGVnb3JpY2FsLWRvbWFpbicsXG4gIFF1YW50aXRhdGl2ZURvbWFpbiA9ICdxdWFudGl0YXRpdmUtZG1haW4nLFxuXG4gIFdvcmtzaGVldE5hbWUgPSAnd29ya3NoZWV0LW5hbWUnLFxuICBEYXNoYm9hcmROYW1lID0gJ2Rhc2hib2FyZCcsXG5cbiAgUGFyYW1ldGVySW5mbyA9ICdwYXJhbWV0ZXItaW5mbycsXG4gIFBhcmFtZXRlckluZm9zID0gJ3BhcmFtZXRlci1pbmZvcycsXG4gIFBhcmFtZXRlckNhcHRpb24gPSAncGFyZW1ldGVyLWNhcHRpb24nLFxuICBQYXJhbWV0ZXJGaWVsZE5hbWUgPSAncGFyYW1ldGVyLWZpZWxkLW5hbWUnLFxuICBQYXJhbWV0ZXJWYWx1ZSA9ICdwYXJhbWV0ZXItdmFsdWUnLFxuICBTZWxlY3Rpb24gPSAnc2VsZWN0aW9uJyxcbiAgU2VsZWN0aW9uVXBkYXRlVHlwZSA9ICdzZWxlY3Rpb25VcGRhdGVUeXBlJyxcbiAgSGllclZhbFNlbGVjdGlvbk1vZGVscyA9ICdoaWVyYXJjaGljYWxWYWx1ZVNlbGVjdGlvbk1vZGVscycsXG4gIFF1YW50UmFuZ2VTZWxlY3Rpb25Nb2RlbHMgPSAncXVhbnRhdGl2ZVJhbmdlU2VsZWN0aW9uTW9kZWxzJyxcbiAgRGltVmFsU2VsZWN0aW9uTW9kZWxzID0gJ2RpbWVuc2lvblZhbHVlU2VsZWN0aW9uTW9kZWxzJyxcblxuICBEYXRhU291cmNlSWQgPSAnZGF0YS1zb3VyY2UtaWQnLFxuICBEYXRhU2NoZW1hID0gJ2RhdGEtc2NoZW1hJyxcbiAgRGF0YVNvdXJjZU5hbWUgPSAnZGF0YS1zb3VyY2UtbmFtZScsXG4gIENvbHVtbnNUb0luY2x1ZGUgPSAnY29sdW1ucy10by1pbmNsdWRlJyxcbiAgSm9pbkRlc2NyaXB0aW9uID0gJ2pvaW4tZGVzY3JpcHRpb24nLFxuICBDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJpZXMgPSAnY29ubmVjdGlvbi1kZXNjcmlwdGlvbi1zdW1tYXJpZXMnLFxuXG4gIEV4dGVuc2lvbkRpYWxvZ1VybCA9ICdleHRlbnNpb24tZGlhbG9nLXVybCcsXG4gIEV4dGVuc2lvbkRpYWxvZ1BheWxvYWQgPSAnZXh0ZW5zaW9uLWRpYWxvZy1wYXlsb2FkJyxcbiAgSXNFeHRlbnNpb25EaWFsb2cgPSAnaXMtZXh0ZW5zaW9uLWRpYWxvZycsXG4gIEV4dGVuc2lvbkRpYWxvZ0ggPSAnZXh0ZW5zaW9uLWRpYWxvZy1oZWlnaHQnLFxuICBFeHRlbnNpb25EaWFsb2dXID0gJ2V4dGVuc2lvbi1kaWFsb2ctd2lkdGgnLFxuICBFeHRlbnNpb25EaWFsb2dSZXN1bHQgPSAnZXh0ZW5zaW9uLWRpYWxvZy1yZXN1bHQnLFxuXG4gIEV4dGVuc2lvbkNvbnRleHRNZW51SWRzID0gJ2V4dGVuc2lvbi1jb250ZXh0LW1lbnUtaWRzJyxcblxuICBUZXN0Q29udmVyc2lvblBhcmFtZXRlciA9ICd0ZXN0LWNvbnZlcnNpb24tcGFyYW1ldGVyJ1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9jb250cmFjdC9QYXJhbWV0ZXJzLnRzIiwiLy8gRGVjbGFyZSB0aGlzIGtleSB0eXBlIGFuZCBleHBvcnQgdGhlIE5vdGlmaWNhdGlvbklkIHRvIG1ha2UgdGhpcyBiZWhhdmUgbGlrZSBhIHN0cmluZyBlbnVtXG5leHBvcnQgZW51bSBWZXJiSWQge1xuICBBcHBseUNhdGVnb3JpY2FsRmlsdGVyID0gJ2NhdGVnb3JpY2FsLWZpbHRlcicsXG4gIEFwcGx5UmFuZ2VGaWx0ZXIgPSAncmFuZ2UtZmlsdGVyJyxcbiAgQ2xlYXJGaWx0ZXIgPSAnY2xlYXItZmlsdGVyJyxcbiAgSW5pdGlhbGl6ZUV4dGVuc2lvbiA9ICdpbml0aWFsaXplLWV4dGVuc2lvbicsXG4gIEdldERhdGFTdW1tYXJ5RGF0YSA9ICdnZXQtc3VtbWFyeS1kYXRhJyxcbiAgR2V0VW5kZXJseWluZ0RhdGEgPSAnZ2V0LXVuZGVybHlpbmctZGF0YScsXG4gIEdldERhdGFTb3VyY2VEYXRhID0gJ2dldC1kYXRhc291cmNlLWRhdGEnLFxuICBTYXZlRXh0ZW5zaW9uU2V0dGluZ3MgPSAnc2F2ZS1leHRlbnNpb24tc2V0dGluZ3MnLFxuICBHZXRTZWxlY3RlZE1hcmtzID0gJ2dldC1zZWxlY3RlZC1tYXJrcycsXG4gIEdldEhpZ2hsaWdodGVkTWFya3MgPSAnZ2V0LWhpZ2hsaWdodGVkLW1hcmtzJyxcbiAgR2V0UGFyYW1ldGVyc0ZvclNoZWV0ID0gJ2dldC1wYXJhbWV0ZXJzLWZvci1zaGVldCcsXG4gIEZpbmRQYXJhbWV0ZXIgPSAnZmluZC1wYXJhbWV0ZXInLFxuICBDaGFuZ2VQYXJhbWV0ZXJWYWx1ZSA9ICdjaGFuZ2UtcGFyYW1ldGVyLXZhbHVlJyxcbiAgQ2xlYXJTZWxlY3RlZE1hcmtzID0gJ2NsZWFyLXNlbGVjdGVkLW1hcmtzJyxcbiAgU2VsZWN0QnlWYWx1ZSA9ICdzZWxlY3QtYnktdmFsdWUnLFxuICBHZXREYXRhU291cmNlcyA9ICdnZXQtZGF0YS1zb3VyY2VzJyxcbiAgUmVmcmVzaERhdGFTb3VyY2UgPSAncmVmcmVzaC1kYXRhLXNvdXJjZScsXG4gIEdldEZpbHRlcnMgPSAnZ2V0LWZpbHRlcnMnLFxuICBHZXRDYXRlZ29yaWNhbERvbWFpbiA9ICdnZXQtY2F0ZWdvcmljYWwtZG9tYWluJyxcbiAgR2V0UmFuZ2VEb21haW4gPSAnZ2V0LXJhbmdlLWRvbWFpbicsXG4gIEdldEpvaW5EZXNjcmlwdGlvbiA9ICdnZXQtam9pbi1kZXNjcmlwdGlvbicsXG4gIEdldENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcmllcyA9ICdnZXQtY29ubmVjdGlvbi1kZXNjcmlwdGlvbi1zdW1tYXJpZXMnLFxuICBEaXNwbGF5RGlhbG9nID0gJ2Rpc3BsYXktZGlhbG9nJyxcbiAgQ2xvc2VEaWFsb2cgPSAnY2xvc2UtZGlhbG9nJyxcbiAgVGVzdENvbnZlcnNpb25WZXJiID0gJ3Rlc3QtY29udmVyc2lvbi12ZXJiJ1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9jb250cmFjdC9WZXJicy50cyIsImltcG9ydCB7IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIH0gZnJvbSAnLi9JbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlcic7XG5pbXBvcnQgKiBhcyBUcmFuc2xhdGlvbnMgZnJvbSAnLi9WZXJzaW9uVHJhbnNsYXRpb25zJztcbmltcG9ydCB7IFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlciB9IGZyb20gJy4vU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCB7IElkZW50aXR5VmVyc2lvbkNvbnZlcnRlciB9IGZyb20gJy4vSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyJztcblxuLy8gQSBtYXBwaW5nIGZyb20gdGhlIHNvdXJjZSB2ZXJzaW9uIG9mIGEgbW9kZWwgLT4gdGhlIG5leHQgdmVyc2lvbiBvZiB0aGUgbW9kZWwuIEVhY2ggbWFqb3Jcbi8vIHZlcnNpb24gYnVtcCBjYW4gaGF2ZSBhbiBhcnJheSBvZiBjb252ZXJzaW9ucyB0byBwZXJmb3JtIGluIG9yZGVyXG5jb25zdCBleGVjdXRlVXBncmFkZXM6IHsgW3ZlcnNpb246IG51bWJlcl06IEFycmF5PFRyYW5zbGF0aW9ucy5VcGdyYWRlRXhlY3V0ZUNhbGw+IH0gPSB7XG4gIDA6IFtdXG59O1xuXG5jb25zdCBleGVjdXRlRG93bmdyYWRlczogeyBbdmVyc2lvbjogbnVtYmVyXTogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZUV4ZWN1dGVSZXR1cm4+IH0gPSB7XG4gIDA6IFtdXG59O1xuXG5jb25zdCBub3RpZmljYXRpb25Eb3duZ3JhZGVzOiB7IFt2ZXJzaW9uOiBudW1iZXJdOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlTm90aWZpY2F0aW9uPiB9ID0ge1xuICAwOiBbXVxufTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgd2hpY2ggaGFzIHRoZSBhYmlsaXR5IHRvIHVwZ3JhZGUgYW5kIGRvd25ncmFkZSB0aGUgY29udHJhY3QgYmV0d2VlbiB0aGUgdHdvIHZlcnNpb25zXG4gKiB3aGljaCBhcmUgc3BlY2lmaWVkLiBJZiBleHRlcm5hbE1ham9yVmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gcGxhdGZvcm1NYWpvclZlcnNpb24sIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIGJlY2F1c2VcbiAqIHdlIHdvbid0IGtub3cgaG93IHRvIGRvIHRob3NlIGNvbnZlcnNpb25zLlxuICpcbiAqIEBwYXJhbSBleHRlcm5hbE1ham9yVmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgYXBpIHdoaWNoIHRoZSBleHRlcm5hbCBtb2R1bGUgaXMgdXNpbmdcbiAqIEBwYXJhbSBwbGF0Zm9ybU1ham9yVmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgYXBpIHdoaWNoIHRoZSBwbGF0Zm9ybSBpcyB1c2luZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlVmVyc2lvbkNvbnZlcnRlcihleHRlcm5hbE1ham9yVmVyc2lvbjogbnVtYmVyLCBwbGF0Zm9ybU1ham9yVmVyc2lvbjogbnVtYmVyKTogSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIge1xuXG4gIGlmICghTnVtYmVyLmlzSW50ZWdlcihleHRlcm5hbE1ham9yVmVyc2lvbikgfHxcbiAgICAhTnVtYmVyLmlzSW50ZWdlcihwbGF0Zm9ybU1ham9yVmVyc2lvbikgfHxcbiAgICBleHRlcm5hbE1ham9yVmVyc2lvbiA8IDAgfHxcbiAgICBwbGF0Zm9ybU1ham9yVmVyc2lvbiA8IDApIHtcblxuICAgIHRocm93IG5ldyBFcnJvcihgVmVyc2lvbnMgbXVzdCBiZSBwb3NpdGl2ZSBpbnRlZ2VyczpcbiAgICBleHRlcm5hbE1ham9yVmVyc2lvbj0ke2V4dGVybmFsTWFqb3JWZXJzaW9ufSBwbGF0Zm9ybU1ham9yVmVyc2lvbj0ke3BsYXRmb3JtTWFqb3JWZXJzaW9ufWApO1xuICB9XG5cbiAgaWYgKGV4dGVybmFsTWFqb3JWZXJzaW9uID4gcGxhdGZvcm1NYWpvclZlcnNpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4dGVybmFsIHZlcnNpb24gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gcGxhdGZvcm0gdmVyc2lvbi5cbiAgICBleHRlcm5hbE1ham9yVmVyc2lvbj0ke2V4dGVybmFsTWFqb3JWZXJzaW9ufSBwbGF0Zm9ybU1ham9yVmVyc2lvbj0ke3BsYXRmb3JtTWFqb3JWZXJzaW9ufWApO1xuICB9XG5cbiAgaWYgKGV4dGVybmFsTWFqb3JWZXJzaW9uID09PSBwbGF0Zm9ybU1ham9yVmVyc2lvbikge1xuICAgIC8vIElmIHdlIGFyZSB1c2luZyB0aGUgZXhhY3Qgc2FtZSB2ZXJzaW9ucywganVzdCB1c2UgdGhlIGlkZW50aXR5IGNvbnZlcnRlclxuICAgIHJldHVybiBuZXcgSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyKCk7XG4gIH1cblxuICAvLyBXYWxrIHRoZSBzcGFuIGJldHdlZW4gdGhlIHZlcnNpb25zIHdlIGhhdmUgaGVyZSBhbmQgY29sbGVjdCB0aGUgdXBncmFkZSBhbmQgZG93bmdyYWRlcyBuZWNlc3NhcnlcbiAgbGV0IG5lZWRlZEV4ZWN1dGVVcGdyYWRlczogQXJyYXk8VHJhbnNsYXRpb25zLlVwZ3JhZGVFeGVjdXRlQ2FsbD4gPSBbXTtcbiAgZm9yIChsZXQgaSA9IGV4dGVybmFsTWFqb3JWZXJzaW9uOyBpIDwgcGxhdGZvcm1NYWpvclZlcnNpb247IGkrKykge1xuICAgIGlmIChpIGluIGV4ZWN1dGVVcGdyYWRlcykge1xuICAgICAgbmVlZGVkRXhlY3V0ZVVwZ3JhZGVzLnB1c2goLi4uZXhlY3V0ZVVwZ3JhZGVzW2ldKTtcbiAgICB9XG4gIH1cblxuICAvLyBXYWxrIHRoZSBzcGFuIGJldHdlZW4gdGhlbSBiYWNrd2FyZHMgdG8gZ2V0IHRoZSBuZWNlc3NhcnkgZG93bmdyYWRlc1xuICBsZXQgbmVlZGVkRXhlY3V0ZURvd25ncmFkZXM6IEFycmF5PFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVFeGVjdXRlUmV0dXJuPiA9IFtdO1xuICBsZXQgbmVlZGVkTm90aWZpY2F0aW9uRG93bmdyYWRlczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZU5vdGlmaWNhdGlvbj4gPSBbXTtcbiAgZm9yIChsZXQgaSA9IHBsYXRmb3JtTWFqb3JWZXJzaW9uIC0gMTsgaSA+PSBleHRlcm5hbE1ham9yVmVyc2lvbjsgaS0tKSB7XG4gICAgaWYgKGkgaW4gZXhlY3V0ZURvd25ncmFkZXMpIHtcbiAgICAgIG5lZWRlZEV4ZWN1dGVEb3duZ3JhZGVzLnB1c2goLi4uZXhlY3V0ZURvd25ncmFkZXNbaV0pO1xuICAgIH1cblxuICAgIGlmIChpIGluIG5vdGlmaWNhdGlvbkRvd25ncmFkZXMpIHtcbiAgICAgIG5lZWRlZE5vdGlmaWNhdGlvbkRvd25ncmFkZXMucHVzaCguLi5ub3RpZmljYXRpb25Eb3duZ3JhZGVzW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlcihcbiAgICBleHRlcm5hbE1ham9yVmVyc2lvbiwgcGxhdGZvcm1NYWpvclZlcnNpb24sIG5lZWRlZEV4ZWN1dGVVcGdyYWRlcywgbmVlZGVkRXhlY3V0ZURvd25ncmFkZXMsIG5lZWRlZE5vdGlmaWNhdGlvbkRvd25ncmFkZXMpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL1ZlcnNpb25Db252ZXJ0ZXJGYWN0b3J5LnRzIiwiaW1wb3J0IHsgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0ludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCB7IEV4ZWN1dGVSZXNwb25zZSwgTm90aWZpY2F0aW9uLCBWZXJiSWQsIEV4ZWN1dGVQYXJhbWV0ZXJzIH0gZnJvbSAnLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcbmltcG9ydCAqIGFzIFRyYW5zbGF0aW9ucyBmcm9tICcuL1ZlcnNpb25UcmFuc2xhdGlvbnMnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcblxuLyoqXG4gKiBUaGUgdmVyc2lvbiBjb252ZXJ0ZXIgaXMgZGVzaWduZWQgdG8gYWxsb3cgdGhlIHBsYXRmb3JtIGFuZCBleHRlcm5hbCBtb2R1bGVzXG4gKiB0byBzZWVtbGVzc2x5IGNvbW11bmljYXRlIG92ZXIgdHdvIGRpZmZlcmVudCB2ZXJzaW9ucyBvZiB0aGUgaW50ZXJuYWwgQVBJLiBUaGUgb25seVxuICogbW9kZSBpdCBzdXBwb3J0cyBpcyBleHRlcm5hbCdzIHZlcnNpb24gPD0gcGxhdGZvcm0ncyB2ZXJzaW9uLiBXaGVuIGV4ZWN1dGluZ1xuICogY29tbWFuZHMsIGl0IGlzIHVzZWQgdG8gdXBncmFkZSB0aGUgZXh0ZXJuYWwgcmVwcmVzZW50YXRpb24gdG8gd2hhdCBwbGF0Zm9ybSBrbm93cyBvbiB0aGUgd2F5IGluXG4gKiBhbmQgZG93bmdyYWRlIHRoZSByZXByZXNlbnRhdGlvbnMgb24gdGhlIHdheSBvdXQuIFNpbWlsYXJseSBmb3Igbm90aWZpY2F0aW9ucywgaXQgY2FuXG4gKiBkb3duZ3JhZGUgdGhvc2Ugb24gdGhlIHdheSBmcm9tIHBsYXRmb3JtIHRvIGV4dGVybmFsLlxuICovXG5leHBvcnQgY2xhc3MgU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyIGltcGxlbWVudHMgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyXG4gICAqXG4gICAqIEBwYXJhbSBfZXh0ZXJuYWxNYWpvclZlcnNpb24gVGhlIG1ham9yIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGNvbnRyYWN0IGFwaS1leHRlcm5hbC1qcyBpcyB1c2luZ1xuICAgKiBAcGFyYW0gX3BsYXRmb3JtTWFqb3JWZXJzaW9uIFRoZSBtYWpvciB2ZXJzaW9uIG9mIHRoZSBpbnRlcm5hbCBjb250cmFjdCB0aGUgYXBpLXBsYXRmb3JtLWpzIGlzIHVzaW5nXG4gICAqIEBwYXJhbSBfdXBncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMgT3JkZXJlZCBsaXN0IG9mIHRoZSB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSB3aGVuIHVwZ3JhZGluZyBjbWQgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gX2Rvd25ncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMgT3JkZXJlZCBsaXN0IG9mIGRvd25ncmFkZSB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSBhZnRlciBhIGNtZFxuICAgKiBAcGFyYW0gX2Rvd25ncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9ucyBPcmRlcmVkIGxpc3Qgb2YgZG93bmdyYWRlIHRyYW5zbGF0aW9ucyB0byBwZXJmb3JtIG9uIGEgbm90aWZpY2F0aW9uXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZXh0ZXJuYWxNYWpvclZlcnNpb246IG51bWJlcixcbiAgICBwcml2YXRlIF9wbGF0Zm9ybU1ham9yVmVyc2lvbjogbnVtYmVyLFxuICAgIHByaXZhdGUgX3VwZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zOiBBcnJheTxUcmFuc2xhdGlvbnMuVXBncmFkZUV4ZWN1dGVDYWxsPixcbiAgICBwcml2YXRlIF9kb3duZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlRXhlY3V0ZVJldHVybj4sXG4gICAgcHJpdmF0ZSBfZG93bmdyYWRlTm90aWZpY2F0aW9uVHJhbnNsYXRpb25zOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlTm90aWZpY2F0aW9uPikge1xuXG4gICAgaWYgKHRoaXMuX2V4dGVybmFsTWFqb3JWZXJzaW9uID4gdGhpcy5fcGxhdGZvcm1NYWpvclZlcnNpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGNvbnZlcnQgYmV0d2VlbiBleHRlcm5hbCB2ZXJzaW9uICR7dGhpcy5fZXh0ZXJuYWxNYWpvclZlcnNpb259IGFuZCAke3RoaXMuX3BsYXRmb3JtTWFqb3JWZXJzaW9ufWApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGdyYWRlRXhlY3V0ZUNhbGwodmVyYjogYW55LCBwYXJhbWV0ZXJzOiBhbnkpOiB7IHZlcmI6IFZlcmJJZDsgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnM7IH0ge1xuICAgIC8vIFBlcmZvcm0gdGhlIHVwZ3JhZGUgb2YgdGhlIHZlcmIgYW5kIHBhcmFtZXRlcnMgdG8gdGhlIGxldmVsIHRoYXQgcGxhdGZvcm0gaXMgdXNpbmdcbiAgICBsZXQgdXBncmFkZWQgPSB7IHZlcmI6IHZlcmIsIHBhcmFtZXRlcnM6IHBhcmFtZXRlcnMgfTtcbiAgICBmb3IgKGNvbnN0IHVwZ3JhZGVUcmFuc2xhdGlvbiBvZiB0aGlzLl91cGdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9ucykge1xuICAgICAgdXBncmFkZWQgPSB1cGdyYWRlVHJhbnNsYXRpb24odXBncmFkZWQudmVyYiwgdXBncmFkZWQucGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwZ3JhZGVkO1xuICB9XG5cbiAgcHVibGljIGRvd25ncmFkZUV4ZWN1dGVSZXR1cm4oZXhlY3V0ZVJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2UpOiBFeGVjdXRlUmVzcG9uc2Uge1xuICAgIC8vIERvd25ncmFkZSB0aGUgcmVzcG9uc2UgdG8gd2hhdCB0aGUgZXh0ZXJuYWwgbW9kdWxlIGlzIGV4cGVjdGluZ1xuICAgIGxldCBkb3duZ3JhZGVkID0gZXhlY3V0ZVJlc3BvbnNlO1xuICAgIGZvciAoY29uc3QgZG93bmdyYWRlVHJhbnNsYXRpb24gb2YgdGhpcy5fZG93bmdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9ucykge1xuICAgICAgZG93bmdyYWRlZCA9IGRvd25ncmFkZVRyYW5zbGF0aW9uKGRvd25ncmFkZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkb3duZ3JhZGVkO1xuICB9XG5cbiAgcHVibGljIGRvd25ncmFkZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbik6IE5vdGlmaWNhdGlvbiB7XG4gICAgLy8gRG93bmdyYWRlIHRoZSBub3RpZmljYXRpb24gdG8gd2hhdCB0aGUgZXh0ZXJuYWwgbW9kdWxlIGlzIGV4cGVjdGluZ1xuICAgIGxldCBkb3duZ3JhZGVkID0gbm90aWZpY2F0aW9uO1xuICAgIGZvciAoY29uc3QgZG93bmdyYWRlVHJhbnNsYXRpb24gb2YgdGhpcy5fZG93bmdyYWRlTm90aWZpY2F0aW9uVHJhbnNsYXRpb25zKSB7XG4gICAgICBkb3duZ3JhZGVkID0gZG93bmdyYWRlVHJhbnNsYXRpb24oZG93bmdyYWRlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvd25ncmFkZWQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9TdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXIudHMiLCJpbXBvcnQgeyBJbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB9IGZyb20gJy4vSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXInO1xuaW1wb3J0IHsgRXhlY3V0ZVJlc3BvbnNlLCBOb3RpZmljYXRpb24sIFZlcmJJZCwgRXhlY3V0ZVBhcmFtZXRlcnMgfSBmcm9tICcuLi9Kc0FwaUludGVybmFsQ29udHJhY3QnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcblxuLyoqXG4gKiBUaGlzIHZlcnNpb24gY29udmVydGVyIGRvZXNuJ3QgYWN0dWFsbHkgZG8gYW55dGhpbmcgYnV0IGlzIHVzZWZ1bCBmb3IgdGVzdGluZyBvciB3aGVuIHdlIGhhdmVcbiAqIGEgbWF0Y2hpbmcgcGxhdGZvcm0gYW5kIGludGVybmFsIHZlcnNpb24gbnVtYmVyXG4qL1xuZXhwb3J0IGNsYXNzIElkZW50aXR5VmVyc2lvbkNvbnZlcnRlciBpbXBsZW1lbnRzIEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcbiAgcHVibGljIHVwZ3JhZGVFeGVjdXRlQ2FsbCh2ZXJiOiBhbnksIHBhcmFtZXRlcnM6IGFueSk6IHsgdmVyYjogVmVyYklkOyBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVyczsgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZlcmI6IHZlcmIgYXMgVmVyYklkLFxuICAgICAgcGFyYW1ldGVyczogcGFyYW1ldGVycyBhcyBFeGVjdXRlUGFyYW1ldGVyc1xuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZG93bmdyYWRlRXhlY3V0ZVJldHVybihleGVjdXRlUmVzcG9uc2U6IEV4ZWN1dGVSZXNwb25zZSk6IEV4ZWN1dGVSZXNwb25zZSB7XG4gICAgcmV0dXJuIGV4ZWN1dGVSZXNwb25zZTtcbiAgfVxuXG4gIHB1YmxpYyBkb3duZ3JhZGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pOiBOb3RpZmljYXRpb24ge1xuICAgIHJldHVybiBub3RpZmljYXRpb247XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9JZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIudHMiLCJpbXBvcnQgKiBhcyBndWlkIGZyb20gJ2d1aWQnO1xuXG5pbXBvcnQgeyBDcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlIH0gZnJvbSAnLi9Dcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlJztcbmltcG9ydCB7XG4gIENvbW1hbmRNZXNzYWdlLFxuICBDb21tYW5kUmVzcG9uc2VNZXNzYWdlLFxuICBJbml0aWFsaXplTWVzc2FnZSxcbiAgTWVzc2FnZSxcbiAgTWVzc2FnZVR5cGUsXG4gIE5vdGlmaWNhdGlvbk1lc3NhZ2UsXG59IGZyb20gJy4vaW50ZXJmYWNlL01lc3NhZ2VUeXBlcyc7XG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuL2ludGVyZmFjZS9NZXNzZW5nZXInO1xuaW1wb3J0IHsgUHJlcGFyZWRNZXNzYWdlIH0gZnJvbSAnLi9pbnRlcmZhY2UvUHJlcGFyZWRNZXNzYWdlJztcbmltcG9ydCB7XG4gIGlzQ29tbWFuZE1lc3NhZ2UsXG4gIGlzQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSxcbiAgaXNJbml0TWVzc2FnZSxcbiAgaXNNZXNzYWdlLFxuICBpc05vdGlmaWNhdGlvbk1lc3NhZ2UsXG59IGZyb20gJy4vTWVzc2FnZVR5cGVDaGVja3MnO1xuaW1wb3J0IHsgVmVyc2lvbk51bWJlciwgVmVyYklkLCBFeGVjdXRlUGFyYW1ldGVycywgTW9kZWwsIE5vdGlmaWNhdGlvbklkIH0gZnJvbSAnLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcblxuLyoqXG4gKiBUaGUgQ3Jvc3NGcmFtZU1lc3NlbmdlciBpcyB0aGUgcHJpbWFyeSBleHBvcnQgZnJvbSB0aGUgYXBpLW1lc3NhZ2luZyBtb2R1bGUuIEFuIGluc3RhbmNlIG9mXG4gKiB0aGlzIGNsYXNzIGNhbiBiZSBpbnN0YW50aWF0ZWQgb24gYm90aCBzaWRlcyBvZiBhIGZyYW1lIGJvdW5kYXJ5IHRvIGZhY2lsaXRhdGUgY29tbXVuaWNhdGlvblxuICogaW4gYm90aCBkaXJlY3Rpb25zIGJldHdlZW4gdGhlIGZyYW1lcy4gVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGJvdGggdGhlIGRpc3BhdGNoZXIgYW5kIHRoZSBsaXN0ZW5lclxuICogcG9ydGlvbnMsIGJ1dCBkb2Vzbid0IHJlcXVpcmUgY2FsbGVycyB0byBjYXJlIGFib3V0IGJvdGguXG4gKi9cbmV4cG9ydCBjbGFzcyBDcm9zc0ZyYW1lTWVzc2VuZ2VyIGltcGxlbWVudHMgTWVzc2VuZ2VyIHtcbiAgcHJpdmF0ZSB1bnJlZ2lzdGVyRnVuY3Rpb246IHVuZGVmaW5lZCB8ICgoKSA9PiB2b2lkKTtcbiAgcHJpdmF0ZSBpbml0aWFsaXplTWVzc2FnZUhhbmRsZXI6IHVuZGVmaW5lZCB8ICgobXNnOiBJbml0aWFsaXplTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpO1xuICBwcml2YXRlIGNvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyOiB1bmRlZmluZWQgfCAoKG1zZzogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpO1xuICBwcml2YXRlIGNvbW1hbmRNZXNzYWdlSGFuZGxlcjogdW5kZWZpbmVkIHwgKChtc2c6IENvbW1hbmRNZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk7XG4gIHByaXZhdGUgbm90aWZpY2F0aW9uTWVzc2FnZUhhbmRsZXI6IHVuZGVmaW5lZCB8ICgobXNnOiBOb3RpZmljYXRpb25NZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ3Jvc3NGcmFtZU1lc3Nlbmdlci4gSWYgeW91IHdvdWxkIGxpa2UgdG8gdXNlIHRoZSBDcm9zc0ZyYW1lTWVzc2VuZ2VyIGFzIGEgTWVzc2FnZUxpc3RlbmVyLFxuICAgKiBiZSBzdXJlIHRvIGNhbGwgU3RhcnRMaXN0ZW5pbmcgYW5kIHJlZ2lzdGVyIG1lc3NhZ2UgaGFuZGxlcnMuXG4gICAqIEBwYXJhbSB0aGlzV2luZG93IFRoZSB3aW5kb3cgb2JqZWN0IHdoaWNoIHRoZSBDcm9zc0ZyYW1lTWVzc2VuZ2VyIGxpdmVzLiBBbiBvbk1lc3NhZ2UgbGlzdGVuZXIgd2lsbCBiZSBhZGRlZCBoZXJlLlxuICAgKiBAcGFyYW0gW290aGVyV2luZG93XSBPcHRpb25hbCBvdGhlcldpbmRvdyB3aGljaCBtZXNzYWdlcyB3aWxsIGJlIHBvc3RlZCB0by5cbiAgICogICAgICAgICAgICAgICAgICAgICAgSWYgZGVmaW5lZCwgaW5jb21pbmcgbWVzc2FnZXMgbXVzdCBvcmlnaW5hdGUgZnJvbSBvdGhlcldpbmRvdyB0byBiZSBwYXNzZWQgb25cbiAgICogQHBhcmFtIFtvdGhlcldpbmRvd09yaWdpbl0gVGhlIHRhcmdldCBvcmlnaW4gd2hpY2ggb3RoZXJXaW5kb3cgbXVzdCBoYXZlIGluIG9yZGVyIHRvIHJlY2VpdmUgZGlzcGF0Y2hlZCBtZXNzYWdlcy5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyB2YWx1ZSB3aWxsIGJlIHNlbnQgYXMgdGhlIHRhcmdldE9yaWdpbiBvZiBhIHBvc3RNZXNzYWdlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L3Bvc3RNZXNzYWdlKVxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgdGhpc1dpbmRvdzogV2luZG93LCBwcml2YXRlIG90aGVyV2luZG93PzogV2luZG93LCBwcml2YXRlIG90aGVyV2luZG93T3JpZ2luPzogc3RyaW5nKSB7XG4gICAgLy8gTWFrZSBzdXJlIHRvIGNhbGwgU3RhcnRMaXN0ZW5pbmdcbiAgfVxuXG4gIC8vLy8vIE1lc3NhZ2VMaXN0ZW5lciBJbXBsZW1lbnRhdGlvblxuXG4gIHB1YmxpYyBzdGFydExpc3RlbmluZygpOiB2b2lkIHtcbiAgICAvLyBDaGVjayBpZiB3ZSBhbHJlYWR5IGFyZSBsaXN0ZW5pbmcsIGlmIG5vdCwgaG9vayB1cCBhIG1lc3NhZ2UgbGlzdGVuZXJcbiAgICBpZiAoIXRoaXMudW5yZWdpc3RlckZ1bmN0aW9uKSB7XG4gICAgICBjb25zdCBib3VuZEhhbmRsZXIgPSB0aGlzLm9uTWVzc2FnZVJlY2VpdmVkLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnRoaXNXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGJvdW5kSGFuZGxlciwgdHJ1ZSk7XG4gICAgICB0aGlzLnVucmVnaXN0ZXJGdW5jdGlvbiA9ICgpID0+IHRoaXMudGhpc1dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgYm91bmRIYW5kbGVyLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RvcExpc3RlbmluZygpOiB2b2lkIHtcbiAgICAvLyBTdG9wIGxpc3RlbmluZyBpZiB3ZSBoYXZlIHN0YXJ0ZWQgbGlzdGVuaW5nXG4gICAgaWYgKHRoaXMudW5yZWdpc3RlckZ1bmN0aW9uKSB7XG4gICAgICB0aGlzLnVucmVnaXN0ZXJGdW5jdGlvbigpO1xuICAgICAgdGhpcy51bnJlZ2lzdGVyRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldEluaXRpYWxpemVNZXNzYWdlSGFuZGxlcihoYW5kbGVyPzogKG1zZzogSW5pdGlhbGl6ZU1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5pbml0aWFsaXplTWVzc2FnZUhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG5cbiAgcHVibGljIHNldENvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyKGhhbmRsZXI/OiAobXNnOiBDb21tYW5kUmVzcG9uc2VNZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuY29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG5cbiAgcHVibGljIHNldENvbW1hbmRNZXNzYWdlSGFuZGxlcihoYW5kbGVyPzogKG1zZzogQ29tbWFuZE1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5jb21tYW5kTWVzc2FnZUhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG5cbiAgcHVibGljIHNldE5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyKGhhbmRsZXI/OiAobXNnOiBOb3RpZmljYXRpb25NZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMubm90aWZpY2F0aW9uTWVzc2FnZUhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG5cbiAgLy8vLy8gTWVzc2FnZURpc3BhdGNoZXIgSW1wbGVtZW50YXRpb25cblxuICBwdWJsaWMgcHJlcGFyZUluaXRpYWxpemF0aW9uTWVzc2FnZShhcGlWZXJzaW9uOiBWZXJzaW9uTnVtYmVyLCBjcm9zc0ZyYW1lVmVyc2lvbjogVmVyc2lvbk51bWJlcik6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgY29uc3QgbWVzc2FnZTogSW5pdGlhbGl6ZU1lc3NhZ2UgPSB7XG4gICAgICBtc2dHdWlkOiBndWlkLnJhdygpLFxuICAgICAgbXNnVHlwZTogTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZSxcbiAgICAgIGNyb3NzRnJhbWVWZXJzaW9uOiBjcm9zc0ZyYW1lVmVyc2lvbixcbiAgICAgIGFwaVZlcnNpb246IGFwaVZlcnNpb25cbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZU1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZUNvbW1hbmRNZXNzYWdlKHZlcmJJZDogVmVyYklkLCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgY29uc3QgbWVzc2FnZTogQ29tbWFuZE1lc3NhZ2UgPSB7XG4gICAgICBtc2dHdWlkOiBndWlkLnJhdygpLFxuICAgICAgbXNnVHlwZTogTWVzc2FnZVR5cGUuQ29tbWFuZCxcbiAgICAgIHZlcmJJZDogdmVyYklkLFxuICAgICAgcGFyYW1ldGVyczogcGFyYW1ldGVyc1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlTWVzc2FnZShtZXNzYWdlKTtcbiAgfVxuXG4gIHB1YmxpYyBwcmVwYXJlQ29tbWFuZFJlc3BvbnNlTWVzc2FnZShjb21tYW5kR3VpZDogc3RyaW5nLCBkYXRhOiBNb2RlbCB8IHVuZGVmaW5lZCwgZXJyb3I6IE1vZGVsIHwgdW5kZWZpbmVkKTogUHJlcGFyZWRNZXNzYWdlIHtcbiAgICBjb25zdCBtZXNzYWdlOiBDb21tYW5kUmVzcG9uc2VNZXNzYWdlID0ge1xuICAgICAgbXNnR3VpZDogZ3VpZC5yYXcoKSxcbiAgICAgIG1zZ1R5cGU6IE1lc3NhZ2VUeXBlLkNvbW1hbmRSZXNwb25zZSxcbiAgICAgIGNvbW1hbmRHdWlkOiBjb21tYW5kR3VpZCxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZU1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZU5vdGlmaWNhdGlvbk1lc3NhZ2Uobm90aWZpY2F0aW9uSWQ6IE5vdGlmaWNhdGlvbklkLCBkYXRhOiBNb2RlbCk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgY29uc3QgbWVzc2FnZTogTm90aWZpY2F0aW9uTWVzc2FnZSA9IHtcbiAgICAgIG1zZ0d1aWQ6IGd1aWQucmF3KCksXG4gICAgICBtc2dUeXBlOiBNZXNzYWdlVHlwZS5Ob3RpZmljYXRpb24sXG4gICAgICBub3RpZmljYXRpb25JZDogbm90aWZpY2F0aW9uSWQsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByZXBhcmVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmVzIGEgcGVuZGluZyBtZXNzYWdlIGZvciBzZW5kaW5nIGFuZCByZXR1cm5zIHRoZSBwcmVwYXJlZCBtZXNzYWdlXG4gICAqXG4gICAqIEBwYXJhbSBtc2cgVGhlIG1lc3NhZ2UgdG8gYmUgc2VudCB0byB0aGlzLm90aGVyV2luZG93XG4gICAqIEByZXR1cm5zIFRoZSBwcmVwYXJlZCBtZXNzYWdlXG4gICAqL1xuICBwcml2YXRlIHByZXBhcmVNZXNzYWdlKG1zZzogTWVzc2FnZSk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgaWYgKCF0aGlzLm90aGVyV2luZG93IHx8ICF0aGlzLm90aGVyV2luZG93T3JpZ2luKSB7XG4gICAgICB0aHJvdyAnT3RoZXIgd2luZG93IG5vdCBpbml0aWFsaXplZCwgY2Fubm90IGRpc3BhdGNoIG1lc3NhZ2VzJztcbiAgICB9XG5cbiAgICBjb25zdCBwcmVwYXJlZE1lc3NhZ2UgPSBuZXcgQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZShtc2csIHRoaXMub3RoZXJXaW5kb3csIHRoaXMub3RoZXJXaW5kb3dPcmlnaW4pO1xuICAgIHJldHVybiBwcmVwYXJlZE1lc3NhZ2U7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBtZXNzYWdlIGlzIHJlY2VpdmVkLiBEb2VzIHNvbWUgdmFsaWRhdGlvbiBvZiB0aGUgbWVzc2FnZSwgYW5kIHRoZW5cbiAgICogY2FsbHMgYW4gYXBwcm9wcmlhdGUgbWVzc2FnZSBoYW5kbGVyIGlmIG9uZSBpcyBkZWZpbmVkXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCBUaGUgaW5jb21pbmcgTWVzc2FnZUV2ZW50XG4gICAqL1xuICBwcml2YXRlIG9uTWVzc2FnZVJlY2VpdmVkKGV2ZW50OiBNZXNzYWdlRXZlbnQpOiB2b2lkIHtcblxuICAgIC8vIElmIHdlIGhhdmUgYW4gb3RoZXJXaW5kb3cgZGVmaW5lZCwgbWFrZSBzdXJlIHRoZSBtZXNzYWdlIGlzIGNvbWluZyBmcm9tIHRoZXJlXG4gICAgaWYgKHRoaXMub3RoZXJXaW5kb3cgJiYgZXZlbnQuc291cmNlICE9PSB0aGlzLm90aGVyV2luZG93KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRG8gc29tZSB2YWxpZGF0aW9uIG9uIGV2ZW50LmRhdGEgdG8gbWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSByZWNlaXZlZCBhIHJlYWwgbWVzc2FnZVxuICAgIGlmICghZXZlbnQuZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuICAgIGlmICghaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdGhlIGRlY2xhcmVkIG1lc3NhZ2UgdHlwZSwgdmFsaWRhdGUgdGhlIG1lc3NhZ2UsIGFuZCBjYWxsIGFuIGFwcHJvcHJpYXRlIGhhbmRlciBpZiBvbmUgZXhpc3RzXG4gICAgc3dpdGNoIChtZXNzYWdlLm1zZ1R5cGUpIHtcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZToge1xuICAgICAgICBpZiAoIWlzSW5pdE1lc3NhZ2UobWVzc2FnZSkgfHwgIXRoaXMuaW5pdGlhbGl6ZU1lc3NhZ2VIYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplTWVzc2FnZUhhbmRsZXIobWVzc2FnZSwgZXZlbnQuc291cmNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkNvbW1hbmRSZXNwb25zZToge1xuICAgICAgICBpZiAoIWlzQ29tbWFuZFJlc3BvbnNlTWVzc2FnZShtZXNzYWdlKSB8fCAhdGhpcy5jb21tYW5kUmVzcG9uc2VNZXNzYWdlSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIobWVzc2FnZSwgZXZlbnQuc291cmNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkNvbW1hbmQ6IHtcbiAgICAgICAgaWYgKCFpc0NvbW1hbmRNZXNzYWdlKG1lc3NhZ2UpIHx8ICF0aGlzLmNvbW1hbmRNZXNzYWdlSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tbWFuZE1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UsIGV2ZW50LnNvdXJjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Ob3RpZmljYXRpb246IHtcbiAgICAgICAgaWYgKCFpc05vdGlmaWNhdGlvbk1lc3NhZ2UobWVzc2FnZSkgfHwgIXRoaXMubm90aWZpY2F0aW9uTWVzc2FnZUhhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UsIGV2ZW50LnNvdXJjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgIC8vIEp1c3QgaWdub3JlIHRoaXMgc2luY2Ugd2UgZG9uJ3Qga25vdyBob3cgdG8gaGFuZGxlIHRoZSBtZXNzYWdlIHR5cGVcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvbWVzc2FnaW5nL0Nyb3NzRnJhbWVNZXNzZW5nZXIudHMiLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9pbnRlcmZhY2UvTWVzc2FnZVR5cGVzJztcbmltcG9ydCB7IFByZXBhcmVkTWVzc2FnZSB9IGZyb20gJy4vaW50ZXJmYWNlL1ByZXBhcmVkTWVzc2FnZSc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIFByZXBhcmVkTWVzc2FnZSBpbnRlcmZhY2UgdXNlZCB0byBwb3N0IG1lc3NhZ2VzIGJldHdlZW5cbiAqIHR3byBmcmFtZXMgdXNpbmcgd2luZG93LnBvc3RNZXNzYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBDcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlIGltcGxlbWVudHMgUHJlcGFyZWRNZXNzYWdlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZS5cbiAgICogQHBhcmFtIF9tZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGJlIHNlbnRcbiAgICogQHBhcmFtIF90YXJnZXQgVGhlIHRhcmdldCB3aW5kb3cgd2hlcmUgdGhlIG1lc3NhZ2Ugd2lsbCBiZSBzZW50XG4gICAqIEBwYXJhbSBfb3JpZ2luIFRoZSB0YXJnZXRPcmlnaW4gd2hlcmUgdGhpcyBtZXNzYWdlIGNhbiBiZSByZWNlaXZlZFxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2U6IE1lc3NhZ2UsIHByaXZhdGUgX3RhcmdldDogV2luZG93LCBwcml2YXRlIF9vcmlnaW46IHN0cmluZykge1xuXG4gIH1cblxuICBwdWJsaWMgZ2V0IG1lc3NhZ2VHdWlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9tZXNzYWdlLm1zZ0d1aWQ7IH1cblxuICBwdWJsaWMgc2VuZCgpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIHRoaXMuX3RhcmdldC5wb3N0TWVzc2FnZSh0aGlzLl9tZXNzYWdlLCB0aGlzLl9vcmlnaW4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9Dcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlLnRzIiwiaW1wb3J0ICogYXMgZ3VpZCBmcm9tICdndWlkJztcblxuaW1wb3J0IHsgVmVyc2lvbk51bWJlciB9IGZyb20gJy4uL2ludGVyZmFjZS9WZXJzaW9uTnVtYmVyJztcbmltcG9ydCB7XG4gIENvbW1hbmRNZXNzYWdlLFxuICBDb21tYW5kUmVzcG9uc2VNZXNzYWdlLFxuICBJbml0aWFsaXplTWVzc2FnZSxcbiAgTWVzc2FnZSxcbiAgTWVzc2FnZVR5cGUsXG4gIE5vdGlmaWNhdGlvbk1lc3NhZ2UsXG59IGZyb20gJy4vaW50ZXJmYWNlL01lc3NhZ2VUeXBlcyc7XG5cbi8qIHRzbGludDpkaXNhYmxlIG5vLWFueSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTWVzc2FnZShkYXRhOiBNZXNzYWdlIHwgYW55KTogZGF0YSBpcyBNZXNzYWdlIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgbWVzc2FnZSA9IGRhdGEgYXMgTWVzc2FnZTtcbiAgaWYgKCFtZXNzYWdlIHx8ICFtZXNzYWdlLm1zZ0d1aWQgfHwgIW1lc3NhZ2UubXNnVHlwZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghZ3VpZC5pc0d1aWQobWVzc2FnZS5tc2dHdWlkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbWVzc2FnZS5tc2dUeXBlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IG1lc3NhZ2VUeXBlczogQXJyYXk8c3RyaW5nPiA9XG4gICAgW01lc3NhZ2VUeXBlLkNvbW1hbmQsIE1lc3NhZ2VUeXBlLkNvbW1hbmRSZXNwb25zZSwgTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZSwgTWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uXTtcblxuICBpZiAobWVzc2FnZVR5cGVzLmluZGV4T2YobWVzc2FnZS5tc2dUeXBlKSA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmVyc2lvbih2ZXJzaW9uTnVtYmVyOiBWZXJzaW9uTnVtYmVyIHwgYW55KTogdmVyc2lvbk51bWJlciBpcyBWZXJzaW9uTnVtYmVyIHtcbiAgaWYgKCF2ZXJzaW9uTnVtYmVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgdiA9IHZlcnNpb25OdW1iZXIgYXMgVmVyc2lvbk51bWJlcjtcblxuICBpZiAodHlwZW9mIHYgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2LmZpeCAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHYubWlub3IgIT09ICdudW1iZXInIHx8IHR5cGVvZiB2Lm1ham9yICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbml0TWVzc2FnZShtZXNzYWdlOiBJbml0aWFsaXplTWVzc2FnZSB8IGFueSk6IG1lc3NhZ2UgaXMgSW5pdGlhbGl6ZU1lc3NhZ2Uge1xuICBpZiAoIWlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGluaXRNZXNzYWdlID0gbWVzc2FnZSBhcyBJbml0aWFsaXplTWVzc2FnZTtcbiAgaWYgKGluaXRNZXNzYWdlLm1zZ1R5cGUgIT09IE1lc3NhZ2VUeXBlLkluaXRpYWxpemUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWluaXRNZXNzYWdlLmFwaVZlcnNpb24gfHwgIWlzVmVyc2lvbihpbml0TWVzc2FnZS5hcGlWZXJzaW9uKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghaW5pdE1lc3NhZ2UuY3Jvc3NGcmFtZVZlcnNpb24gfHwgIWlzVmVyc2lvbihpbml0TWVzc2FnZS5jcm9zc0ZyYW1lVmVyc2lvbikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tbWFuZFJlc3BvbnNlTWVzc2FnZShtZXNzYWdlOiBDb21tYW5kUmVzcG9uc2VNZXNzYWdlIHwgYW55KTogbWVzc2FnZSBpcyBDb21tYW5kUmVzcG9uc2VNZXNzYWdlIHtcbiAgaWYgKCFpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBjck1lc3NhZ2UgPSBtZXNzYWdlIGFzIENvbW1hbmRSZXNwb25zZU1lc3NhZ2U7XG4gIGlmIChjck1lc3NhZ2UubXNnVHlwZSAhPT0gTWVzc2FnZVR5cGUuQ29tbWFuZFJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFndWlkLmlzR3VpZChjck1lc3NhZ2UuY29tbWFuZEd1aWQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFjck1lc3NhZ2UuZGF0YSAmJiAhY3JNZXNzYWdlLmVycm9yKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbW1hbmRNZXNzYWdlKG1lc3NhZ2U6IENvbW1hbmRNZXNzYWdlIHwgYW55KTogbWVzc2FnZSBpcyBDb21tYW5kTWVzc2FnZSB7XG4gIGlmICghaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgY29tbWFuZE1lc3NhZ2UgPSBtZXNzYWdlIGFzIENvbW1hbmRNZXNzYWdlO1xuICBpZiAoY29tbWFuZE1lc3NhZ2UubXNnVHlwZSAhPT0gTWVzc2FnZVR5cGUuQ29tbWFuZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghY29tbWFuZE1lc3NhZ2UucGFyYW1ldGVycyB8fCB0eXBlb2YgY29tbWFuZE1lc3NhZ2UucGFyYW1ldGVycyAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWNvbW1hbmRNZXNzYWdlLnZlcmJJZCB8fCB0eXBlb2YgY29tbWFuZE1lc3NhZ2UudmVyYklkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb3RpZmljYXRpb25NZXNzYWdlKG1lc3NhZ2U6IE5vdGlmaWNhdGlvbk1lc3NhZ2UgfCBhbnkpOiBtZXNzYWdlIGlzIE5vdGlmaWNhdGlvbk1lc3NhZ2Uge1xuICBpZiAoIWlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IG5vdGlmaWNhdGlvbk1lc3NhZ2UgPSBtZXNzYWdlIGFzIE5vdGlmaWNhdGlvbk1lc3NhZ2U7XG4gIGlmIChub3RpZmljYXRpb25NZXNzYWdlLm1zZ1R5cGUgIT09IE1lc3NhZ2VUeXBlLk5vdGlmaWNhdGlvbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghbm90aWZpY2F0aW9uTWVzc2FnZS5kYXRhKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFub3RpZmljYXRpb25NZXNzYWdlLm5vdGlmaWNhdGlvbklkIHx8IHR5cGVvZiBub3RpZmljYXRpb25NZXNzYWdlLm5vdGlmaWNhdGlvbklkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvTWVzc2FnZVR5cGVDaGVja3MudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRGFzaGJvYXJkSW1wbCB9IGZyb20gJy4vSW1wbC9EYXNoYm9hcmRJbXBsJztcbmltcG9ydCB7IFNoZWV0IH0gZnJvbSAnLi9TaGVldCc7XG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBTaGVldCBpbXBsZW1lbnRzIENvbnRyYWN0LkRhc2hib2FyZCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXNoYm9hcmRJbXBsOiBEYXNoYm9hcmRJbXBsKSB7XG4gICAgc3VwZXIoX2Rhc2hib2FyZEltcGwpO1xuICAgIF9kYXNoYm9hcmRJbXBsLmluaXRpYWxpemVXaXRoUHVibGljSW50ZXJmYWNlcyh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd29ya3NoZWV0cygpOiBBcnJheTxDb250cmFjdC5Xb3Jrc2hlZXQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGFzaGJvYXJkSW1wbC53b3Jrc2hlZXRzO1xuICB9XG5cbiAgcHVibGljIGdldCBvYmplY3RzKCk6IEFycmF5PENvbnRyYWN0LkRhc2hib2FyZE9iamVjdD4ge1xuICAgIHJldHVybiB0aGlzLl9kYXNoYm9hcmRJbXBsLm9iamVjdHM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Rhc2hib2FyZC50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFZlcnNpb25OdW1iZXIgYXMgVmVyc2lvbk51bWJlckNvbnRyYWN0IH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi9UYWJsZWF1RXJyb3InO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgZXh0ZW5zaW9ucyBsaWJyYXJ5XG4gKi9cbmV4cG9ydCBjbGFzcyBWZXJzaW9uTnVtYmVyIGltcGxlbWVudHMgVmVyc2lvbk51bWJlckNvbnRyYWN0IHtcbiAgLy8gVXNpbmcgc29tZSB3ZWJwYWNrIHRyaWNrcywgd2UgY2FuIGluamVjdCB0aGlzIHZlcnNpb24gaW50byBvdXIgY29kZSAoa2luZGEgbGlrZSBjKysgcHJlcHJvY2Vzc29yIHN0dWZmKVxuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFZlcnNpb25OdW1iZXI7XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgdmVyc2lvbiBudW1iZXIuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpOiBWZXJzaW9uTnVtYmVyIHtcbiAgICByZXR1cm4gVmVyc2lvbk51bWJlci5faW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIFNldFZlcnNpb25OdW1iZXIobnVtU3RyaW5nOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBWZXJzaW9uTnVtYmVyLl9pbnN0YW5jZSA9IG5ldyBWZXJzaW9uTnVtYmVyKG51bVN0cmluZyk7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgbWFqb3I6IG51bWJlcjtcbiAgcHVibGljIHJlYWRvbmx5IG1pbm9yOiBudW1iZXI7XG4gIHB1YmxpYyByZWFkb25seSBmaXg6IG51bWJlcjtcblxuICAvLyBwcml2YXRlIGNvbnN0cnVjdG9yIHNvIGV2ZXJ5b25lIHVzZXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZVxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHZlcnNpb25TdHJpbmc6IHN0cmluZykge1xuICAgIGNvbnN0IHBhcnRzID0gdmVyc2lvblN0cmluZy5zcGxpdCgnLicpLm1hcChwID0+IHBhcnNlSW50KHAsIDEwKSk7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gMykge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGBJbnZhbGlkIHZlcnNpb24gbnVtYmVyOiAke3ZlcnNpb25TdHJpbmd9YCk7XG4gICAgfVxuXG4gICAgdGhpcy5tYWpvciA9IHBhcnRzWzBdO1xuICAgIHRoaXMubWlub3IgPSBwYXJ0c1sxXTtcbiAgICB0aGlzLmZpeCA9IHBhcnRzWzJdO1xuICB9XG5cbiAgcHVibGljIGdldCBmb3JtYXR0ZWRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLm1ham9yfS4ke3RoaXMubWlub3J9LiR7dGhpcy5maXh9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVmVyc2lvbk51bWJlci50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgRGFzaGJvYXJkT2JqZWN0VHlwZSwgRXh0ZW5zaW9uRGFzaGJvYXJkSW5mbywgU2hlZXRQYXRoLCBWaXN1YWxJZCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IERhc2hib2FyZE9iamVjdCB9IGZyb20gJy4uL0Rhc2hib2FyZE9iamVjdCc7XG5pbXBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgfSBmcm9tICcuLi9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vUG9pbnQnO1xuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJy4uL1NpemUnO1xuaW1wb3J0IHsgV29ya3NoZWV0IH0gZnJvbSAnLi4vV29ya3NoZWV0JztcblxuaW1wb3J0IHsgU2hlZXRJbXBsIH0gZnJvbSAnLi9TaGVldEltcGwnO1xuaW1wb3J0IHsgU2hlZXRJbmZvSW1wbCB9IGZyb20gJy4vU2hlZXRJbmZvSW1wbCc7XG5pbXBvcnQgeyBXb3Jrc2hlZXRJbXBsIH0gZnJvbSAnLi9Xb3Jrc2hlZXRJbXBsJztcblxuaW1wb3J0IHsgRXJyb3JIZWxwZXJzIH0gZnJvbSAnLi4vVXRpbHMvRXJyb3JIZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZEltcGwgZXh0ZW5kcyBTaGVldEltcGwge1xuICBwcml2YXRlIF93b3Jrc2hlZXRzOiBBcnJheTxDb250cmFjdC5Xb3Jrc2hlZXQ+O1xuICBwcml2YXRlIF9vYmplY3RzOiBBcnJheTxDb250cmFjdC5EYXNoYm9hcmRPYmplY3Q+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbmZvOiBFeHRlbnNpb25EYXNoYm9hcmRJbmZvLCBwcml2YXRlIF9zaGVldFBhdGg6IFNoZWV0UGF0aCkge1xuICAgIHN1cGVyKG5ldyBTaGVldEluZm9JbXBsKF9pbmZvLm5hbWUsIENvbnRyYWN0LlNoZWV0VHlwZS5EYXNoYm9hcmQsIG5ldyBTaXplKF9pbmZvLnNpemUuaCwgX2luZm8uc2l6ZS53KSkpO1xuICB9XG5cbiAgcHVibGljIGdldCB3b3Jrc2hlZXRzKCk6IEFycmF5PENvbnRyYWN0LldvcmtzaGVldD4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRzO1xuICB9XG5cbiAgcHVibGljIGdldCBvYmplY3RzKCk6IEFycmF5PENvbnRyYWN0LkRhc2hib2FyZE9iamVjdD4ge1xuICAgIHJldHVybiB0aGlzLl9vYmplY3RzO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVXaXRoUHVibGljSW50ZXJmYWNlcyhkYXNoYm9hcmQ6IENvbnRyYWN0LkRhc2hib2FyZCk6IHZvaWQge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlJbnRlcm5hbFZhbHVlKGRhc2hib2FyZCwgJ2Rhc2hib2FyZCcpO1xuXG4gICAgdGhpcy5fd29ya3NoZWV0cyA9IG5ldyBBcnJheTxXb3Jrc2hlZXQ+KCk7XG4gICAgdGhpcy5fb2JqZWN0cyA9IG5ldyBBcnJheTxDb250cmFjdC5EYXNoYm9hcmRPYmplY3Q+KCk7XG5cbiAgICAvLyBQcm9jZXNzIGFsbCB0aGUgem9uZXMgd2hpY2ggYXJlIGNvbnRhaW5lZCBpbiB0aGlzIGRhc2hib2FyZFxuICAgIGZvciAoY29uc3Qgem9uZSBvZiB0aGlzLl9pbmZvLnpvbmVzKSB7XG4gICAgICBsZXQgd29ya3NoZWV0OiBXb3Jrc2hlZXQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgICAgIGNvbnN0IHpvbmVTaXplID0gbmV3IFNpemUoem9uZS5oZWlnaHQsIHpvbmUud2lkdGgpO1xuXG4gICAgICBpZiAoem9uZS56b25lVHlwZSA9PT0gRGFzaGJvYXJkT2JqZWN0VHlwZS5Xb3Jrc2hlZXQpIHtcbiAgICAgICAgY29uc3Qgc2hlZXRJbmZvID0gbmV3IFNoZWV0SW5mb0ltcGwoem9uZS5uYW1lLCBDb250cmFjdC5TaGVldFR5cGUuV29ya3NoZWV0LCB6b25lU2l6ZSk7XG4gICAgICAgIGNvbnN0IHZpeklkOiBWaXN1YWxJZCA9IHtcbiAgICAgICAgICB3b3Jrc2hlZXQ6IHpvbmUubmFtZSxcbiAgICAgICAgICBkYXNoYm9hcmQ6IHRoaXMuX2luZm8ubmFtZSxcbiAgICAgICAgICBzdG9yeWJvYXJkOiB0aGlzLl9zaGVldFBhdGguc3Rvcnlib2FyZCxcbiAgICAgICAgICBmbGlwYm9hcmRab25lSUQ6IHRoaXMuX3NoZWV0UGF0aC5mbGlwYm9hcmRab25lSUQsXG4gICAgICAgICAgc3RvcnlQb2ludElEOiB0aGlzLl9zaGVldFBhdGguc3RvcnlQb2ludElEXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgd29ya3NoZWV0SW1wbCA9IG5ldyBXb3Jrc2hlZXRJbXBsKHNoZWV0SW5mbywgdml6SWQsIGRhc2hib2FyZCk7XG4gICAgICAgIHdvcmtzaGVldCA9IG5ldyBXb3Jrc2hlZXQod29ya3NoZWV0SW1wbCk7XG4gICAgICAgIHRoaXMuX3dvcmtzaGVldHMucHVzaCh3b3Jrc2hlZXQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB6b25lUG9pbnQgPSBuZXcgUG9pbnQoem9uZS54LCB6b25lLnkpO1xuXG4gICAgICBjb25zdCBkYXNoYm9hcmRPYmplY3QgPSBuZXcgRGFzaGJvYXJkT2JqZWN0KFxuICAgICAgICBkYXNoYm9hcmQsXG4gICAgICAgIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5kYXNoYm9hcmRPYmplY3RUeXBlLmNvbnZlcnQoem9uZS56b25lVHlwZSksXG4gICAgICAgIHpvbmVQb2ludCxcbiAgICAgICAgem9uZVNpemUsXG4gICAgICAgIHdvcmtzaGVldFxuICAgICAgKTtcblxuICAgICAgdGhpcy5fb2JqZWN0cy5wdXNoKGRhc2hib2FyZE9iamVjdCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL0Rhc2hib2FyZEltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgZGFzaGJvYXJkIG9iamVjdHMgLSB0aGUgem9uZXMgaW4gYSBkYXNoYm9hcmQuXG4gKiBUaGlzIGRvZXMgbm90IGZvbGxvdyB0aGUgSW1wbCBwYXR0ZXJuIGFzIGl0IGlzIGp1c3QgYSBwcm9wZXJ0eSBiYWcuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRPYmplY3QgaW1wbGVtZW50cyBDb250cmFjdC5EYXNoYm9hcmRPYmplY3Qge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZGFzaGJvYXJkOiBDb250cmFjdC5EYXNoYm9hcmQsXG4gICAgcHJpdmF0ZSBfdHlwZTogQ29udHJhY3QuRGFzaGJvYXJkT2JqZWN0VHlwZSxcbiAgICBwcml2YXRlIF9wb3NpdGlvbjogQ29udHJhY3QuUG9pbnQsXG4gICAgcHJpdmF0ZSBfc2l6ZTogQ29udHJhY3QuU2l6ZSxcbiAgICBwcml2YXRlIF93b3Jrc2hlZXQ6IENvbnRyYWN0LldvcmtzaGVldCB8IHVuZGVmaW5lZFxuICApIHsgfVxuXG4gIHB1YmxpYyBnZXQgZGFzaGJvYXJkKCk6IENvbnRyYWN0LkRhc2hib2FyZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Rhc2hib2FyZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBDb250cmFjdC5EYXNoYm9hcmRPYmplY3RUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcG9zaXRpb24oKTogQ29udHJhY3QuUG9pbnQge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2l6ZSgpOiBDb250cmFjdC5TaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd29ya3NoZWV0KCk6IENvbnRyYWN0LldvcmtzaGVldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRGFzaGJvYXJkT2JqZWN0LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmV4cG9ydCBjbGFzcyBQb2ludCBpbXBsZW1lbnRzIENvbnRyYWN0LlBvaW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3g6IG51bWJlciwgcHJpdmF0ZSBfeTogbnVtYmVyKSB7IH1cblxuICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5feDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl95O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Qb2ludC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5leHBvcnQgY2xhc3MgU2l6ZSBpbXBsZW1lbnRzIENvbnRyYWN0LlNpemUge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXIsIHByaXZhdGUgX3dpZHRoOiBudW1iZXIpIHsgfVxuXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NpemUudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgU2hlZXQgfSBmcm9tICcuL1NoZWV0JztcbmltcG9ydCB7IFdvcmtzaGVldEltcGwgfSBmcm9tICcuL0ltcGwvV29ya3NoZWV0SW1wbCc7XG5cbmV4cG9ydCBjbGFzcyBXb3Jrc2hlZXQgZXh0ZW5kcyBTaGVldCBpbXBsZW1lbnRzIENvbnRyYWN0LldvcmtzaGVldCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF93b3Jrc2hlZXRJbXBsOiBXb3Jrc2hlZXRJbXBsKSB7XG4gICAgc3VwZXIoX3dvcmtzaGVldEltcGwpO1xuXG4gICAgLy8gQ2FsbCB0byBpbml0aWFsaXplIGV2ZW50cyBhbmQgdGhlbiBjYWxsIGRvd24gdG8gdGhlIGV2ZW50IGxpc3RlbmVyIG1hbmFnZXIgdG8gaGFuZGxlIHRoaW5nc1xuICAgIHRoaXMuX3dvcmtzaGVldEltcGwuaW5pdGlhbGl6ZUV2ZW50cyh0aGlzKS5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdFdmVudFR5cGUoZSkpO1xuICB9XG5cbiAgcHVibGljIGdldCBwYXJlbnREYXNoYm9hcmQoKTogQ29udHJhY3QuRGFzaGJvYXJkIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5wYXJlbnREYXNoYm9hcmQ7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlGaWx0ZXJBc3luYyhcbiAgICBmaWVsZE5hbWU6IHN0cmluZywgdmFsdWVzOiBBcnJheTxzdHJpbmc+LCB1cGRhdGVUeXBlOiBDb250cmFjdC5GaWx0ZXJVcGRhdGVUeXBlLCBvcHRpb25zOiBDb250cmFjdC5GaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5hcHBseUZpbHRlckFzeW5jKGZpZWxkTmFtZSwgdmFsdWVzLCB1cGRhdGVUeXBlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseVJhbmdlRmlsdGVyQXN5bmMoZmllbGROYW1lOiBzdHJpbmcsIGZpbHRlck9wdGlvbnM6IENvbnRyYWN0LlJhbmdlRmlsdGVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuYXBwbHlSYW5nZUZpbHRlckFzeW5jKGZpZWxkTmFtZSwgZmlsdGVyT3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJGaWx0ZXJBc3luYyhmaWVsZE5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuY2xlYXJGaWx0ZXJBc3luYyhmaWVsZE5hbWUpO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFTb3VyY2VzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5EYXRhU291cmNlPj4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldERhdGFTb3VyY2VzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5GaWx0ZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0RmlsdGVyc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3VtbWFyeURhdGFBc3luYyhvcHRpb25zOiBDb250cmFjdC5HZXRTdW1tYXJ5RGF0YU9wdGlvbnMpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldFN1bW1hcnlEYXRhQXN5bmMob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhvcHRpb25zOiBDb250cmFjdC5HZXRVbmRlcmx5aW5nRGF0YU9wdGlvbnMpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldFVuZGVybHlpbmdEYXRhQXN5bmMob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJTZWxlY3RlZE1hcmtzQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuY2xlYXJTZWxlY3RlZE1hcmtzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNYXJrc0J5SURBc3luYyhtYXJrc0luZm86IEFycmF5PENvbnRyYWN0Lk1hcmtJbmZvPiwgdXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLnNlbGVjdE1hcmtzQnlJZEFzeW5jKG1hcmtzSW5mbywgdXBkYXRlVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWFya3NCeVZhbHVlQXN5bmMoc2VsZWN0aW9uczogQXJyYXk8Q29udHJhY3QuU2VsZWN0aW9uQ3JpdGVyaWE+LFxuICAgIHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5zZWxlY3RNYXJrc0J5VmFsdWVBc3luYyhzZWxlY3Rpb25zLCBzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNYXJrc0J5SWRBc3luYyhzZWxlY3Rpb25zOiBBcnJheTxDb250cmFjdC5NYXJrSW5mbz4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLnNlbGVjdE1hcmtzQnlJZEFzeW5jKHNlbGVjdGlvbnMsIHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Xb3Jrc2hlZXQudHMiLCJpbXBvcnQgeyBTaGVldFR5cGUsIFNpemUgfSBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFNoZWV0UGF0aCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmV4cG9ydCBjbGFzcyBTaGVldEluZm9JbXBsIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZyxcbiAgICBwcml2YXRlIF9zaGVldFR5cGU6IFNoZWV0VHlwZSxcbiAgICBwcml2YXRlIF9zaGVldFNpemU6IFNpemVcbiAgKSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hlZXRTaXplKCk6IFNpemUge1xuICAgIHJldHVybiB0aGlzLl9zaGVldFNpemU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoZWV0VHlwZSgpOiBTaGVldFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9zaGVldFR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoZWV0UGF0aCgpOiBTaGVldFBhdGgge1xuICAgIHJldHVybiB7XG4gICAgICBzaGVldE5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGlzRGFzaGJvYXJkOiB0aGlzLnNoZWV0VHlwZSA9PT0gU2hlZXRUeXBlLkRhc2hib2FyZFxuICAgICAgLy8gVE9ETyAtIFN0b3JpZXNcbiAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1NoZWV0SW5mb0ltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7XG4gIERhdGFTY2hlbWEsXG4gIERhdGFTb3VyY2UgYXMgRGF0YVNvdXJjZUluZm8sXG4gIEZpbHRlckV2ZW50LCBOb3RpZmljYXRpb25JZCxcbiAgVmlzdWFsSWQsXG4gIFdvcmtzaGVldERhdGFTb3VyY2VJbmZvXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi9EYXRhU291cmNlJztcbmltcG9ydCB7IFdvcmtzaGVldCB9IGZyb20gJy4uL1dvcmtzaGVldCc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VJbXBsIH0gZnJvbSAnLi9EYXRhU291cmNlSW1wbCc7XG5pbXBvcnQgeyBTaGVldEltcGwgfSBmcm9tICcuL1NoZWV0SW1wbCc7XG5pbXBvcnQgeyBTaGVldEluZm9JbXBsIH0gZnJvbSAnLi9TaGVldEluZm9JbXBsJztcbmltcG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlckltcGwgfSBmcm9tICcuL1NpbmdsZUV2ZW50TWFuYWdlckltcGwnO1xuXG5pbXBvcnQgeyBGaWx0ZXJDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9FdmVudHMvRmlsdGVyQ2hhbmdlZEV2ZW50JztcbmltcG9ydCB7IE1hcmtzU2VsZWN0ZWRFdmVudCB9IGZyb20gJy4uL0V2ZW50cy9NYXJrc1NlbGVjdGVkRXZlbnQnO1xuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi4vU2luZ2xlRXZlbnRNYW5hZ2VyJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9EYXRhU291cmNlU2VydmljZSc7XG5pbXBvcnQgeyBGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvRmlsdGVyU2VydmljZSc7XG5pbXBvcnQgeyBHZXREYXRhU2VydmljZSwgR2V0RGF0YVR5cGUgfSBmcm9tICcuLi9TZXJ2aWNlcy9HZXREYXRhU2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvTm90aWZpY2F0aW9uU2VydmljZSc7XG5pbXBvcnQgeyBTZWxlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvU2VsZWN0aW9uU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuLi9VdGlscy9FcnJvckhlbHBlcnMnO1xuXG5jb25zdCB2aXN1YWxJZHNBcmVFcXVhbCA9IGZ1bmN0aW9uIChhOiBWaXN1YWxJZCwgYjogVmlzdWFsSWQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGEgJiYgYiAmJlxuICAgIGEud29ya3NoZWV0ID09PSBiLndvcmtzaGVldCAmJlxuICAgIGEuZGFzaGJvYXJkID09PSBiLmRhc2hib2FyZCAmJlxuICAgIGEuc3Rvcnlib2FyZCA9PT0gYi5zdG9yeWJvYXJkICYmXG4gICAgYS5zdG9yeVBvaW50SUQgPT09IGIuc3RvcnlQb2ludElEICYmXG4gICAgYS5mbGlwYm9hcmRab25lSUQgPT09IGIuZmxpcGJvYXJkWm9uZUlEO1xufTtcblxuZXhwb3J0IGNsYXNzIFdvcmtzaGVldEltcGwgZXh0ZW5kcyBTaGVldEltcGwge1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2hlZXRJbmZvSW1wbDogU2hlZXRJbmZvSW1wbCxcbiAgICBwcml2YXRlIF92aXN1YWxJZDogVmlzdWFsSWQsXG4gICAgcHJpdmF0ZSBfcGFyZW50RGFzaGJvYXJkOiBDb250cmFjdC5EYXNoYm9hcmQpIHtcbiAgICBzdXBlcihzaGVldEluZm9JbXBsKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGFyZW50RGFzaGJvYXJkKCk6IENvbnRyYWN0LkRhc2hib2FyZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudERhc2hib2FyZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHdoaWNoIGdvZXMgdGhyb3VnaCBhbmQgcmVnaXN0ZXJzIGVhY2ggZXZlbnQgdHlwZSB0aGlzIGltcGwga25vd3MgYWJvdXRcbiAgICogd2l0aCB0aGUgTm90aWZpY2F0aW9uU2VydmljZS4gSXQgcmV0dXJucyBhbiBhcnJheSBvZiBTaW5nbGVFdmVudE1hbmFnZXIgb2JqZWN0cyB3aGljaFxuICAgKiBjYW4gdGhlbiBiZSBwYXNzZWQgdG8gYW4gRXZlbnRMaXN0ZW5lck1hbmFnZXIgdG8gaGFuZGxlIHVzZXIgcmVnaXN0cmF0aW9uIC8gdW5yZWdpc3RyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7V29ya3NoZWV0fSB3b3Jrc2hlZXQgVGhlIHdvcmtzaGVldCBvYmplY3Qgd2hpY2ggd2lsbCBiZSBpbmNsdWRlZCB3aXRoIHRoZSBldmVudCBub3RpZmljYXRpb25zXG4gICAqIEByZXR1cm5zIHtBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+fSBDb2xsZWN0aW9uIG9mIGV2ZW50IG1hbmFnZXJzIHRvIHBhc3MgdG8gYW4gRXZlbnRMaXN0ZW5lck1hbmFnZXJcbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplRXZlbnRzKHdvcmtzaGVldDogV29ya3NoZWV0KTogQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+KCk7XG4gICAgbGV0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2U7XG5cbiAgICB0cnkge1xuICAgICAgbm90aWZpY2F0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPE5vdGlmaWNhdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5Ob3RpZmljYXRpb24pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgdGhpcyBzZXJ2aWNlIHJlZ2lzdGVyZWQsIGp1c3QgcmV0dXJuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFsbCBvZiB0aGUgZXZlbnQgbWFuYWdlcnMgd2UnbGwgbmVlZCAob25lIGZvciBlYWNoIGV2ZW50IHR5cGUpXG4gICAgY29uc3QgbWFya3NFdmVudCA9IG5ldyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsPE1hcmtzU2VsZWN0ZWRFdmVudD4oQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZS5NYXJrU2VsZWN0aW9uQ2hhbmdlZCk7XG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuU2VsZWN0ZWRNYXJrc0NoYW5nZWQsIChtb2RlbCkgPT4ge1xuICAgICAgY29uc3QgdmlzdWFsSWQgPSBtb2RlbCBhcyBWaXN1YWxJZDtcbiAgICAgIHJldHVybiB2aXN1YWxJZHNBcmVFcXVhbCh2aXN1YWxJZCwgdGhpcy52aXN1YWxJZCk7XG4gICAgfSwgKHZpejogVmlzdWFsSWQpID0+IHtcbiAgICAgIG1hcmtzRXZlbnQudHJpZ2dlckV2ZW50KCgpID0+IG5ldyBNYXJrc1NlbGVjdGVkRXZlbnQod29ya3NoZWV0KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmaWx0ZXJFdmVudCA9IG5ldyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsPEZpbHRlckNoYW5nZWRFdmVudD4oQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZS5GaWx0ZXJDaGFuZ2VkKTtcbiAgICBub3RpZmljYXRpb25TZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihOb3RpZmljYXRpb25JZC5GaWx0ZXJDaGFuZ2VkLCAobW9kZWwpID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlckV2ZW50UmVzcG9uc2UgPSBtb2RlbCBhcyBGaWx0ZXJFdmVudDtcbiAgICAgIHJldHVybiB0aGlzLnZpc3VhbElkLndvcmtzaGVldCA9PT0gZmlsdGVyRXZlbnRSZXNwb25zZS52aXN1YWxJZC53b3Jrc2hlZXQ7XG4gICAgfSwgKGV2ZW50OiBGaWx0ZXJFdmVudCkgPT4ge1xuICAgICAgZmlsdGVyRXZlbnQudHJpZ2dlckV2ZW50KCgpID0+IG5ldyBGaWx0ZXJDaGFuZ2VkRXZlbnQod29ya3NoZWV0LCBldmVudC5maWVsZE5hbWUpKTtcbiAgICB9KTtcblxuICAgIHJlc3VsdHMucHVzaChtYXJrc0V2ZW50KTtcbiAgICByZXN1bHRzLnB1c2goZmlsdGVyRXZlbnQpO1xuXG4gICAgLy8gVE9ETyAtIG90aGVyIGV2ZW50IHR5cGVzXG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmlzdWFsSWQoKTogVmlzdWFsSWQge1xuICAgIHJldHVybiB0aGlzLl92aXN1YWxJZDtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUZpbHRlckFzeW5jKFxuICAgIGZpZWxkTmFtZTogc3RyaW5nLCB2YWx1ZXM6IEFycmF5PHN0cmluZz4sIHVwZGF0ZVR5cGU6IENvbnRyYWN0LkZpbHRlclVwZGF0ZVR5cGUsIG9wdGlvbnM6IENvbnRyYWN0LkZpbHRlck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlFbnVtVmFsdWU8Q29udHJhY3QuRmlsdGVyVXBkYXRlVHlwZT4odXBkYXRlVHlwZSwgQ29udHJhY3QuRmlsdGVyVXBkYXRlVHlwZSk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RmlsdGVyU2VydmljZT4oU2VydmljZU5hbWVzLkZpbHRlcik7XG4gICAgcmV0dXJuIHNlcnZpY2UuYXBwbHlGaWx0ZXJBc3luYyh0aGlzLnZpc3VhbElkLCBmaWVsZE5hbWUsIHZhbHVlcywgdXBkYXRlVHlwZSwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlSYW5nZUZpbHRlckFzeW5jKGZpZWxkTmFtZTogc3RyaW5nLCBmaWx0ZXJPcHRpb25zOiBDb250cmFjdC5SYW5nZUZpbHRlck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoZmllbGROYW1lLCAnZmllbGROYW1lJyk7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihmaWx0ZXJPcHRpb25zLCAnZmlsdGVyT3B0aW9ucycpO1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlSYW5nZVBhcmFtVHlwZShmaWx0ZXJPcHRpb25zLm1pbiwgZmlsdGVyT3B0aW9ucy5tYXgpO1xuXG4gICAgaWYgKGZpbHRlck9wdGlvbnMubnVsbE9wdGlvbikge1xuICAgICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uPihmaWx0ZXJPcHRpb25zLm51bGxPcHRpb24sIENvbnRyYWN0LkZpbHRlck51bGxPcHRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxGaWx0ZXJTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRmlsdGVyKTtcbiAgICByZXR1cm4gc2VydmljZS5hcHBseVJhbmdlRmlsdGVyQXN5bmModGhpcy52aXN1YWxJZCwgZmllbGROYW1lLCBmaWx0ZXJPcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlckFzeW5jKGZpZWxkTmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKGZpZWxkTmFtZSwgJ2ZpZWxkTmFtZScpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEZpbHRlclNlcnZpY2U+KFNlcnZpY2VOYW1lcy5GaWx0ZXIpO1xuICAgIHJldHVybiBzZXJ2aWNlLmNsZWFyRmlsdGVyQXN5bmModGhpcy52aXN1YWxJZCwgZmllbGROYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhU291cmNlc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuRGF0YVNvdXJjZT4+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RGF0YVNvdXJjZVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5EYXRhU291cmNlU2VydmljZSk7XG5cbiAgICByZXR1cm4gc2VydmljZS5nZXREYXRhU291cmNlc0FzeW5jKHRoaXMudmlzdWFsSWQpLnRoZW48QXJyYXk8Q29udHJhY3QuRGF0YVNvdXJjZT4+KHJlc3VsdCA9PiB7XG4gICAgICBjb25zdCBkYXRhU2NoZW1hOiBEYXRhU2NoZW1hID0gcmVzdWx0IGFzIERhdGFTY2hlbWE7XG4gICAgICBjb25zdCB3b3Jrc2hlZXREYXRhU291cmNlSW5mbzogV29ya3NoZWV0RGF0YVNvdXJjZUluZm8gPSBkYXRhU2NoZW1hLndvcmtzaGVldERhdGFTY2hlbWFNYXBbdGhpcy5uYW1lXTtcblxuICAgICAgbGV0IGRhdGFTb3VyY2VzOiBBcnJheTxDb250cmFjdC5EYXRhU291cmNlPiA9IFtdO1xuXG4gICAgICAvLyBGaXJzdCwgYWRkIHRoZSBwcmltYXJ5IGRhdGFzb3VyY2UuICBCeSBjb252ZW50aW9uLCBpdCBjb21lcyBmaXJzdCBpbiB0aGUgcmV0dXJuZWQgYXJyYXkuXG4gICAgICBsZXQgcHJpbWFyeUlkOiBzdHJpbmcgPSB3b3Jrc2hlZXREYXRhU291cmNlSW5mby5wcmltYXJ5RGF0YVNvdXJjZTtcbiAgICAgIGRhdGFTb3VyY2VzLnB1c2godGhpcy5jcmVhdGVEYXRhU291cmNlRnJvbUluZm8oZGF0YVNjaGVtYS5kYXRhU291cmNlc1twcmltYXJ5SWRdKSk7XG5cbiAgICAgIC8vIFRoZW4sIGxvb3AgdGhyb3VnaCBhbnkgc2Vjb25kYXJ5IGRhdGEgc291cmNlcyBhbmQgYWRkIHRoZW0uXG4gICAgICBmb3IgKGxldCBzZWNvbmRhcnlJZCBvZiB3b3Jrc2hlZXREYXRhU291cmNlSW5mby5yZWZlcmVuY2VkRGF0YVNvdXJjZUxpc3QpIHtcbiAgICAgICAgaWYgKHNlY29uZGFyeUlkICE9PSBwcmltYXJ5SWQpIHtcbiAgICAgICAgICBkYXRhU291cmNlcy5wdXNoKHRoaXMuY3JlYXRlRGF0YVNvdXJjZUZyb21JbmZvKGRhdGFTY2hlbWEuZGF0YVNvdXJjZXNbc2Vjb25kYXJ5SWRdKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFTb3VyY2VzO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlcnNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LkZpbHRlcj4+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RmlsdGVyU2VydmljZT4oU2VydmljZU5hbWVzLkZpbHRlcik7XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0RmlsdGVyc0FzeW5jKHRoaXMudmlzdWFsSWQpO1xuICB9XG5cbiAgcHVibGljIGdldFNlbGVjdGVkTWFya3NBc3luYygpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxHZXREYXRhU2VydmljZT4oU2VydmljZU5hbWVzLkdldERhdGEpO1xuICAgIHJldHVybiBzZXJ2aWNlLmdldFNlbGVjdGVkTWFya3NBc3luYyh0aGlzLnZpc3VhbElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRIaWdobGlnaHRlZE1hcmtzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8R2V0RGF0YVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5HZXREYXRhKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRIaWdobGlnaHRlZE1hcmtzQXN5bmModGhpcy52aXN1YWxJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3VtbWFyeURhdGFBc3luYyhvcHRpb25zOiBDb250cmFjdC5HZXRTdW1tYXJ5RGF0YU9wdGlvbnMpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxHZXREYXRhU2VydmljZT4oU2VydmljZU5hbWVzLkdldERhdGEpO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhcbiAgICAgIHRoaXMudmlzdWFsSWQsIEdldERhdGFUeXBlLlN1bW1hcnksICEhb3B0aW9ucy5pZ25vcmVBbGlhc2VzLCAhIW9wdGlvbnMuaWdub3JlU2VsZWN0aW9uLCB0cnVlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnM6IENvbnRyYWN0LkdldFVuZGVybHlpbmdEYXRhT3B0aW9ucyk6IFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEdldERhdGFTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuR2V0RGF0YSk7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhcbiAgICAgIHRoaXMudmlzdWFsSWQsXG4gICAgICBHZXREYXRhVHlwZS5VbmRlcmx5aW5nLFxuICAgICAgISFvcHRpb25zLmlnbm9yZUFsaWFzZXMsXG4gICAgICAhIW9wdGlvbnMuaWdub3JlU2VsZWN0aW9uLFxuICAgICAgISFvcHRpb25zLmluY2x1ZGVBbGxDb2x1bW5zLFxuICAgICAgb3B0aW9ucy5tYXhSb3dzIHx8IDApO1xuICB9XG5cbiAgcHVibGljIGNsZWFyU2VsZWN0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxTZWxlY3Rpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuU2VsZWN0aW9uKTtcbiAgICByZXR1cm4gc2VydmljZS5jbGVhclNlbGVjdGVkTWFya3NBc3luYyh0aGlzLnZpc3VhbElkKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNYXJrc0J5VmFsdWVBc3luYyhzZWxlY3Rpb25zOiBBcnJheTxDb250cmFjdC5TZWxlY3Rpb25Dcml0ZXJpYT4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2VsZWN0aW9ucywgJ2ZpZWxkTmFtZScpO1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlFbnVtVmFsdWU8Q29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZT4oc2VsZWN0aW9uVXBkYXRlVHlwZSwgQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8U2VsZWN0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLlNlbGVjdGlvbik7XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2VsZWN0TWFya3NCeVZhbHVlQXN5bmModGhpcy52aXN1YWxJZCwgc2VsZWN0aW9ucywgc2VsZWN0aW9uVXBkYXRlVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWFya3NCeUlkQXN5bmMoc2VsZWN0aW9uczogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+LFxuICAgIHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHNlbGVjdGlvbnMsICdmaWVsZE5hbWUnKTtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGU+KHNlbGVjdGlvblVwZGF0ZVR5cGUsIENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFNlbGVjdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5TZWxlY3Rpb24pO1xuICAgIHJldHVybiBzZXJ2aWNlLnNlbGVjdE1hcmtzQnlJZEFzeW5jKHRoaXMudmlzdWFsSWQsIHNlbGVjdGlvbnMsIHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVEYXRhU291cmNlRnJvbUluZm8oZGF0YVNvdXJjZUluZm86IERhdGFTb3VyY2VJbmZvKTogQ29udHJhY3QuRGF0YVNvdXJjZSB7XG4gICAgY29uc3QgZGF0YVNvdXJjZUltcGwgPSBuZXcgRGF0YVNvdXJjZUltcGwoZGF0YVNvdXJjZUluZm8pO1xuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBuZXcgRGF0YVNvdXJjZShkYXRhU291cmNlSW1wbCk7XG4gICAgZGF0YVNvdXJjZUltcGwuaW5pdGlhbGl6ZVdpdGhQdWJsaWNJbnRlcmZhY2VzKGRhdGFTb3VyY2UpO1xuICAgIHJldHVybiBkYXRhU291cmNlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1dvcmtzaGVldEltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZUltcGwgfSBmcm9tICcuL0ltcGwvRGF0YVNvdXJjZUltcGwnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIENvbnRyYWN0LkRhdGFTb3VyY2Uge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNvdXJjZUltcGw6IERhdGFTb3VyY2VJbXBsKSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwuaWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZpZWxkcygpOiBBcnJheTxDb250cmFjdC5GaWVsZD4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5maWVsZHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGV4dHJhY3RVcGRhdGVUaW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmV4dHJhY3RVcGRhdGVUaW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0V4dHJhY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmlzRXh0cmFjdDtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLnJlZnJlc2hBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVRhYmxlc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuVGFibGVTdW1tYXJ5Pj4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5nZXRBY3RpdmVUYWJsZXNBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldENvbm5lY3Rpb25TdW1tYXJpZXNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LkNvbm5lY3Rpb25TdW1tYXJ5Pj4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5nZXRDb25uZWN0aW9uU3VtbWFyaWVzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnM/OiBDb250cmFjdC5EYXRhU291cmNlVW5kZXJseWluZ0RhdGFPcHRpb25zKTpcbiAgICBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5nZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9EYXRhU291cmNlLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBJbnRlcm5hbENvbnRyYWN0IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEZpZWxkSW1wbCB9IGZyb20gJy4vRmllbGRJbXBsJztcblxuaW1wb3J0IHsgQ29ubmVjdGlvblN1bW1hcnkgfSBmcm9tICcuLi9Db25uZWN0aW9uU3VtbWFyeSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL0ZpZWxkJztcbmltcG9ydCB7IFRhYmxlU3VtbWFyeSB9IGZyb20gJy4uL1RhYmxlU3VtbWFyeSc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvRGF0YVNvdXJjZVNlcnZpY2UnO1xuaW1wb3J0IHsgR2V0RGF0YVNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9HZXREYXRhU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuLi9VdGlscy9FcnJvckhlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZUltcGwge1xuICBwcml2YXRlIF9maWVsZHM6IEFycmF5PEZpZWxkPjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNvdXJjZUluZm86IEludGVybmFsQ29udHJhY3QuRGF0YVNvdXJjZSkge1xuICAgIHRoaXMuX2ZpZWxkcyA9IF9kYXRhU291cmNlSW5mby5maWVsZHMubWFwKGZpZWxkTW9kZWwgPT4ge1xuICAgICAgY29uc3QgZmllbGRJbXBsID0gbmV3IEZpZWxkSW1wbChmaWVsZE1vZGVsLCB0aGlzKTtcbiAgICAgIHJldHVybiBuZXcgRmllbGQoZmllbGRJbXBsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW5mby5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW5mby5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXh0cmFjdFVwZGF0ZVRpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUluZm8uZXh0cmFjdFVwZGF0ZVRpbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZpZWxkcygpOiBBcnJheTxDb250cmFjdC5GaWVsZD4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRXh0cmFjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUluZm8uaXNFeHRyYWN0O1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2hBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBkYXRhU291cmNlU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPERhdGFTb3VyY2VTZXJ2aWNlPihcbiAgICAgIFNlcnZpY2VOYW1lcy5EYXRhU291cmNlU2VydmljZSk7XG5cbiAgICByZXR1cm4gZGF0YVNvdXJjZVNlcnZpY2UucmVmcmVzaEFzeW5jKHRoaXMuX2RhdGFTb3VyY2VJbmZvLmlkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25uZWN0aW9uU3VtbWFyaWVzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5Db25uZWN0aW9uU3VtbWFyeVtdPiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxEYXRhU291cmNlU2VydmljZT4oXG4gICAgICBTZXJ2aWNlTmFtZXMuRGF0YVNvdXJjZVNlcnZpY2UpO1xuXG4gICAgcmV0dXJuIGRhdGFTb3VyY2VTZXJ2aWNlLmdldENvbm5lY3Rpb25TdW1tYXJpZXNBc3luYyh0aGlzLl9kYXRhU291cmNlSW5mby5pZCkudGhlbjxDb250cmFjdC5Db25uZWN0aW9uU3VtbWFyeVtdPihzdW1tYXJpZXMgPT4ge1xuICAgICAgcmV0dXJuIHN1bW1hcmllcy5tYXAoc3VtbWFyeSA9PiBuZXcgQ29ubmVjdGlvblN1bW1hcnkoc3VtbWFyeSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVRhYmxlc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuVGFibGVTdW1tYXJ5Pj4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2VTZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RGF0YVNvdXJjZVNlcnZpY2U+KFxuICAgICAgU2VydmljZU5hbWVzLkRhdGFTb3VyY2VTZXJ2aWNlKTtcblxuICAgIHJldHVybiBkYXRhU291cmNlU2VydmljZS5nZXRBY3RpdmVUYWJsZXNBc3luYyh0aGlzLl9kYXRhU291cmNlSW5mby5pZCkudGhlbjxBcnJheTxDb250cmFjdC5UYWJsZVN1bW1hcnk+Pih0YWJsZUluZm9zID0+IHtcbiAgICAgIHJldHVybiB0YWJsZUluZm9zLm1hcCh0YWJsZUluZm8gPT4gbmV3IFRhYmxlU3VtbWFyeSh0YWJsZUluZm8pKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnM/OiBDb250cmFjdC5EYXRhU291cmNlVW5kZXJseWluZ0RhdGFPcHRpb25zKTpcbiAgICBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgaWdub3JlQWxpYXNlczogZmFsc2UsXG4gICAgICBtYXhSb3dzOiAxMDAwMCxcbiAgICAgIGNvbHVtbnNUb0luY2x1ZGU6IFtdLFxuICAgIH07XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIGNvbnN0IGdldERhdGFTZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8R2V0RGF0YVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5HZXREYXRhKTtcbiAgICByZXR1cm4gZ2V0RGF0YVNlcnZpY2UuZ2V0RGF0YVNvdXJjZURhdGFBc3luYyhcbiAgICAgIHRoaXMuaWQsXG4gICAgICAhIW9wdGlvbnMuaWdub3JlQWxpYXNlcyxcbiAgICAgIG9wdGlvbnMubWF4Um93cyB8fCBkZWZhdWx0T3B0aW9ucy5tYXhSb3dzLFxuICAgICAgb3B0aW9ucy5jb2x1bW5zVG9JbmNsdWRlIHx8IGRlZmF1bHRPcHRpb25zLmNvbHVtbnNUb0luY2x1ZGUpO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVXaXRoUHVibGljSW50ZXJmYWNlcyhkYXRhU291cmNlOiBDb250cmFjdC5EYXRhU291cmNlKTogdm9pZCB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUludGVybmFsVmFsdWUoZGF0YVNvdXJjZSwgJ2RhdGFTb3VyY2UnKTtcblxuICAgIHRoaXMuX2ZpZWxkcyA9IHRoaXMuX2RhdGFTb3VyY2VJbmZvLmZpZWxkcy5tYXAoZmllbGRNb2RlbCA9PiB7XG4gICAgICBjb25zdCBmaWVsZEltcGwgPSBuZXcgRmllbGRJbXBsKGZpZWxkTW9kZWwsIGRhdGFTb3VyY2UpO1xuICAgICAgcmV0dXJuIG5ldyBGaWVsZChmaWVsZEltcGwpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL0RhdGFTb3VyY2VJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBJbnRlcm5hbENvbnRyYWN0IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyB9IGZyb20gJy4uL0VudW1NYXBwaW5ncy9JbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MnO1xuXG5leHBvcnQgY2xhc3MgRmllbGRJbXBsIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZpZWxkSW5mbzogSW50ZXJuYWxDb250cmFjdC5GaWVsZCxcbiAgICBwcml2YXRlIF9wYXJlbnREYXRhU291cmNlOiBDb250cmFjdC5EYXRhU291cmNlKSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBhZ2dyZWdhdGlvbigpOiBDb250cmFjdC5GaWVsZEFnZ3JlZ2F0aW9uVHlwZSB7XG4gICAgcmV0dXJuIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5maWVsZEFnZ3JlZ2F0aW9uVHlwZS5jb252ZXJ0KHRoaXMuX2ZpZWxkSW5mby5hZ2dyZWdhdGlvbik7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGFTb3VyY2UoKTogQ29udHJhY3QuRGF0YVNvdXJjZSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudERhdGFTb3VyY2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJvbGUoKTogQ29udHJhY3QuRmllbGRSb2xlVHlwZSB7XG4gICAgcmV0dXJuIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5maWVsZFJvbGVUeXBlLmNvbnZlcnQodGhpcy5fZmllbGRJbmZvLnJvbGUpO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0hpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmlzSGlkZGVuO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0dlbmVyYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmlzR2VuZXJhdGVkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NhbGN1bGF0ZWRGaWVsZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmlzQ2FsY3VsYXRlZEZpZWxkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NvbWJpbmVkRmllbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5pc0NvbWJpbmVkRmllbGQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRmllbGRJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJ5IH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBhIGNvbm5lY3Rpb24gc3VtbWFyeS5cbiAqIFRoaXMgZG9lcyBub3QgZm9sbG93IHRoZSBJbXBsIHBhdHRlcm4gYXMgaXQgaXMganVzdCBhIHByb3BlcnR5IGJhZy5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25TdW1tYXJ5IGltcGxlbWVudHMgQ29udHJhY3QuQ29ubmVjdGlvblN1bW1hcnkge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfY29ubmVjdGlvbkluZm86IENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcnkpIHsgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uSW5mby5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uSW5mby5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2VydmVyVVJJKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25JbmZvLnNlcnZlclVSSTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uSW5mby50eXBlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Db25uZWN0aW9uU3VtbWFyeS50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBGaWVsZEltcGwgfSBmcm9tICcuL0ltcGwvRmllbGRJbXBsJztcblxuaW1wb3J0IHsgRXJyb3JIZWxwZXJzIH0gZnJvbSAnLi9VdGlscy9FcnJvckhlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgRmllbGQgaW1wbGVtZW50cyBDb250cmFjdC5GaWVsZCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9maWVsZEltcGw6IEZpZWxkSW1wbCkgeyB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuaWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWdncmVnYXRpb24oKTogQ29udHJhY3QuRmllbGRBZ2dyZWdhdGlvblR5cGUge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuYWdncmVnYXRpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGFTb3VyY2UoKTogQ29udHJhY3QuRGF0YVNvdXJjZSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5kYXRhU291cmNlO1xuICB9XG5cbiAgcHVibGljIGdldCByb2xlKCk6IENvbnRyYWN0LkZpZWxkUm9sZVR5cGUge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwucm9sZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNIaWRkZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5pc0hpZGRlbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNHZW5lcmF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5pc0dlbmVyYXRlZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNDYWxjdWxhdGVkRmllbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5pc0NhbGN1bGF0ZWRGaWVsZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29sdW1uVHlwZSgpOiBDb250cmFjdC5Db2x1bW5UeXBlIHtcbiAgICB0aHJvdyBFcnJvckhlbHBlcnMuYXBpTm90SW1wbGVtZW50ZWQoJ0ZpZWxkLmNvbHVtblR5cGUnKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNDb21iaW5lZEZpZWxkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuaXNDb21iaW5lZEZpZWxkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9GaWVsZC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgVGFibGVJbmZvIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBhIHRhYmxlIHN1bW1hcnkuXG4gKiBUaGlzIGRvZXMgbm90IGZvbGxvdyB0aGUgSW1wbCBwYXR0ZXJuIGFzIGl0IGlzIGp1c3QgYSBwcm9wZXJ0eSBiYWcuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJsZVN1bW1hcnkgaW1wbGVtZW50cyBDb250cmFjdC5UYWJsZVN1bW1hcnkge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFibGVJbmZvOiBUYWJsZUluZm8pIHsgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90YWJsZUluZm8ubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVJbmZvLmlkO1xuICB9XG5cbiAgcHVibGljIGdldCBjb25uZWN0aW9uSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVJbmZvLmNvbm5lY3Rpb25JZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY3VzdG9tU1FMKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlSW5mby5jdXN0b21TUUw7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1RhYmxlU3VtbWFyeS50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuaW1wb3J0IHsgVGFibGVhdVdvcmtzaGVldEV2ZW50IH0gZnJvbSAnLi9UYWJsZWF1V29ya3NoZWV0RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyQ2hhbmdlZEV2ZW50IGV4dGVuZHMgVGFibGVhdVdvcmtzaGVldEV2ZW50IGltcGxlbWVudHMgQ29udHJhY3QuRmlsdGVyQ2hhbmdlZEV2ZW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHdvcmtzaGVldDogQ29udHJhY3QuV29ya3NoZWV0LCBwcml2YXRlIF9maWVsZE5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuRmlsdGVyQ2hhbmdlZCwgd29ya3NoZWV0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJBc3luYygpOiBQcm9taXNlPENvbnRyYWN0LkZpbHRlcj4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXQuZ2V0RmlsdGVyc0FzeW5jKCkudGhlbjxDb250cmFjdC5GaWx0ZXI+KGZpbHRlcnMgPT4ge1xuICAgICAgLy8gVE9ETzogRmlsdGVyaW5nIG9mIHRoZSBmaWx0ZXJzIHNob3VsZCBldmVudHVhbGx5IGJlIGRvbmUgcGxhdGZvcm0gc2lkZS5cbiAgICAgIGNvbnN0IGV2ZW50ZWRGaWx0ZXIgPSBmaWx0ZXJzLmZpbmQoKGZpbHRlcikgPT4gKGZpbHRlci5maWVsZE5hbWUgPT09IHRoaXMuX2ZpZWxkTmFtZSkpO1xuXG4gICAgICBpZiAoIWV2ZW50ZWRGaWx0ZXIpIHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkbid0IGhpdCB0aGlzIHVubGVzcyB0aGUgZmlsdGVyIHdhcyByZW1vdmVkIGZyb20gdGhlIHdvcmtzaGVldFxuICAgICAgICAvLyBhZnRlciB0aGUgZXZlbnQgd2FzIHJhaXNlZC5cbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLk1pc3NpbmdGaWx0ZXIsIGBjYW5ub3QgZmluZCBmaWx0ZXI6ICR7dGhpcy5fZmllbGROYW1lfWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZlbnRlZEZpbHRlcjtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL0ZpbHRlckNoYW5nZWRFdmVudC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgfSBmcm9tICcuL1RhYmxlYXVXb3Jrc2hlZXRFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBNYXJrc1NlbGVjdGVkRXZlbnQgZXh0ZW5kcyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5NYXJrc1NlbGVjdGVkRXZlbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3Iod29ya3NoZWV0OiBDb250cmFjdC5Xb3Jrc2hlZXQpIHtcbiAgICBzdXBlcihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLk1hcmtTZWxlY3Rpb25DaGFuZ2VkLCB3b3Jrc2hlZXQpO1xuICB9XG5cbiAgcHVibGljIGdldE1hcmtzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy53b3Jrc2hlZXQuZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9NYXJrc1NlbGVjdGVkRXZlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHtcbiAgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSxcbiAgQ3Jvc3NGcmFtZU1lc3NlbmdlcixcbiAgTUVTU0FHSU5HX1ZFUlNJT04gYXMgQXBpTWVzc2FnaW5nVmVyc2lvbixcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgQ3Jvc3NGcmFtZURpc3BhdGNoZXIgfSBmcm9tICcuL0Nyb3NzRnJhbWVEaXNwYXRjaGVyJztcblxuLy8gQ2hlY2tzIHRvIHNlZSBpZiB3ZSBhcmUgcnVubmluZyBpbiBhbiBpZnJhbWUgY3VycmVudGx5OiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzI2MDc2Lzg4MjExNTNcbmZ1bmN0aW9uIGluSWZyYW1lKHRoaXNXaW5kb3c6IFdpbmRvdyk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIHJldHVybiB0aGlzV2luZG93LnNlbGYgIT09IHRoaXNXaW5kb3cucGFyZW50O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0cyB0byBib290c3RyYXAgdGhlIGV4dGVuc2lvbiB3aXRoIGEgY3Jvc3MtZnJhbWUgcGFyZW50IHdoZXJlIFRhYmxlYXUgaXMgcnVubmluZ1xuICpcbiAqIEBwYXJhbSB0aGlzV2luZG93IFRoZSB3aW5kb3cgd2hpY2ggd2UgYXJlIHJ1bm5pbmcgaW4gKGluamVjdGVkIGZvciB1bml0IHRlc3RpbmcgcHVycG9zZXMpXG4gKiBAcGFyYW0gaW50ZXJuYWxDb250cmFjdFZlcnNpb24gVGhlIHZlcnNpb24gbnVtYmVyIG9mIHRoZSBpbnRlcm5hbCBjb250cmFjdCB3ZSBhcmUgdXNpbmdcbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB3aGljaCBpcyBkb2luZyB0aGUgYWN0dWFsIGJvb3RzdHJhcHBpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvQ3Jvc3NGcmFtZUJvb3RzdHJhcChcbiAgdGhpc1dpbmRvdzogV2luZG93LCBpbnRlcm5hbENvbnRyYWN0VmVyc2lvbjogQ29udHJhY3QuVmVyc2lvbk51bWJlcilcbiAgOiBQcm9taXNlPENvbnRyYWN0LkludGVybmFsQXBpRGlzcGF0Y2hlckZhY3Rvcnk+IHtcblxuICByZXR1cm4gbmV3IFByb21pc2U8Q29udHJhY3QuSW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgbGV0IHBhcmVudDogV2luZG93O1xuXG4gICAgLy8gTm9ybWFsbHksIHdlIGFyZSBydW5uaW5nIGluc2lkZSBhbiBpZnJhbWUuICBUaGUgZXhjZXB0aW9uIHRvIHRoaXMgaXNcbiAgICAvLyB3aGVuIHdlIGFyZSBydW5uaW5nIGFzIGFuIGV4dGVuc2lvbiBpbnNpZGUgYSBkaWFsb2cgYXMgcGFydCBvZiB0aGUgVUlOYW1lc3BhY2VcbiAgICAvLyBmdW5jdGlvbmFsaXR5LiAgSW4gdGhhdCBjYXNlLCB3ZSB3YW50IHRoZSBvcGVuZXIgb2YgdGhpcyB3aW5kb3cgcmF0aGVyIHRoYW4gdGhlIHBhcmVudC5cbiAgICBpZiAoIWluSWZyYW1lKHRoaXNXaW5kb3cpKSB7XG4gICAgICBwYXJlbnQgPSB0aGlzV2luZG93Lm9wZW5lcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gdGhpc1dpbmRvdy5wYXJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHJlamVjdCgnVGhpcyBleHRlbnNpb24gaXMgbm90IHJ1bm5pbmcgaW5zaWRlIGFuIGlmcmFtZSwgZGVza3RvcCwgb3IgcG9wdXAgd2luZG93LiBJbml0aWFsaXphdGlvbiBmYWlsZWQuJyk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBtZXNzZW5nZXIgd2hpY2ggd2lsbCBkbyBoZSBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhpcyB3aW5kb3cgYW5kIG91ciBwYXJlbnRcbiAgICAvLyBTaW5jZSB3ZSBkb24ndCBrbm93IHdoZXJlIHdlIGFyZSBydW5uaW5nIHlldCwgd2UgaGF2ZSB0byBtYWtlIHRoaXMgaW5pdGlhbCBvcmlnaW4gJyonLiBPbmNlXG4gICAgLy8gd2UgaGF2ZSBzdWNjZXNzZnVsbHkgaW5pdGlhbGl6ZWQgb3VyIGV4dGVuc2lvbiwgd2Ugd2lsbCBsaW1pdCB3aGVyZSB3ZSBzZW5kIG1lc3NhZ2VzXG4gICAgY29uc3QgbWVzc2VuZ2VyID0gbmV3IENyb3NzRnJhbWVNZXNzZW5nZXIodGhpc1dpbmRvdywgcGFyZW50LCAnKicpO1xuXG4gICAgLy8gUHJlcGFyZSB0byBzZW5kIGFuIGluaXRpYWxpemF0aW9uIG1lc3NhZ2UgdG8gdGhlIHBhcmVudCBmcmFtZVxuICAgIGNvbnN0IGluaXRpYWxpemF0aW9uTWVzc2FnZSA9IG1lc3Nlbmdlci5wcmVwYXJlSW5pdGlhbGl6YXRpb25NZXNzYWdlKGludGVybmFsQ29udHJhY3RWZXJzaW9uLCBBcGlNZXNzYWdpbmdWZXJzaW9uKTtcblxuICAgIC8vIFdoZW4gd2UgcmVjZWl2ZSBhIHJlc3BvbnNlIGJhY2sgZnJvbSB0aGUgcGFyZW50LCB3ZSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIGd1aWRzIG1hdGNoIGFuZCB0aGVuIHdlIGtub3dcbiAgICAvLyB0aGF0IHRoZSBwYXJlbnQgaXMgYXdhcmUgb2YgdXMgYW5kIHdlIGNhbiBzdGFydCBjb21tdW5pY2F0aW5nXG4gICAgbWVzc2VuZ2VyLnNldENvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyKGZ1bmN0aW9uIChtc2c6IENvbW1hbmRSZXNwb25zZU1lc3NhZ2UpOiB2b2lkIHtcblxuICAgICAgLy8gVmVyaWZ5IHdlIGFyZSBnZXR0aW5nIGEgcmVzcG9uc2UgZnJvbSBvdXIgaW5pdGlhbGl6ZSBtZXNzYWdlXG4gICAgICBpZiAobXNnLmNvbW1hbmRHdWlkID09PSBpbml0aWFsaXphdGlvbk1lc3NhZ2UubWVzc2FnZUd1aWQpIHtcblxuICAgICAgICAvLyBGb3Igc2VydmVyLCB0aGUgdmVyc2lvbmluZyBvZiB0aGUgZmFjdG9yeSBpcyBnb25uYSBoYXBwZW4gb24gdGhlIG90aGVyIHNpZGUgb2Ygb3VyIGZyYW1lLCBzbyBqdXN0IHJldHVybiB0aGVcbiAgICAgICAgLy8gb25lIHdoaWNoIGRvZXNuJ3QgaGF2ZSBhbnkgdmVyc2lvbiBrbm93bGVkZ2VcbiAgICAgICAgY29uc3QgZGlzcGF0Y2hlckZhY3RvcnkgPSAoKSA9PiBuZXcgQ3Jvc3NGcmFtZURpc3BhdGNoZXIobWVzc2VuZ2VyKTtcbiAgICAgICAgcmVzb2x2ZShkaXNwYXRjaGVyRmFjdG9yeSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBOb3cgdGhhdCBvdXIgaGFuZGxlcnMgYXJlIHJlYWR5LCBzdGFydCBsaXN0ZW5pbmcgYW5kIHNlbmQgb3VyIGluaXRpYWxpemF0aW9uIG1lc3NhZ2VcbiAgICBtZXNzZW5nZXIuc3RhcnRMaXN0ZW5pbmcoKTtcbiAgICBpbml0aWFsaXphdGlvbk1lc3NhZ2Uuc2VuZCgpO1xuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Nyb3NzRnJhbWUvQ3Jvc3NGcmFtZUJvb3RzdHJhcC50cyIsImltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBFeGVjdXRlUmVzcG9uc2UsXG4gIEludGVybmFsQXBpRGlzcGF0Y2hlcixcbiAgTW9kZWwsXG4gIE5vdGlmaWNhdGlvbkhhbmRsZXIsXG4gIFZlcmJJZCxcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IENvbW1hbmRSZXNwb25zZU1lc3NhZ2UsIE1lc3NlbmdlciwgTm90aWZpY2F0aW9uTWVzc2FnZSB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbi8qKlxuICogVGhpcyBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgSW50ZXJuYWxBcGlEaXNwYXRjaGVyIGludGVyZmFjZSB3aGljaCBmdW5jdGlvbnMgYnkgcGFzc2luZyBtZXNzYWdlc1xuICogYWNyb3NzIGEgZnJhbWUgYm91bmRhcnkuIFRoaXMgaXMgdXN1YWxseSBiZXR3ZWVuIHRoZSBjb2RlIHdoZXJlIG91ciBqYXZzY3JpcHQgbGlicmFyeSBoYXMgYmVlbiBpbmNsdWRlZFxuICogYnkgYSAzcmQgcGFydHkgZGV2IGFuZCBhbm90aGVyIGZyYW1lIHdoZXJlIFRhYmxlYXUgc2VydmVyIGhhcyBjb250ZW50LlxuICovXG5leHBvcnQgY2xhc3MgQ3Jvc3NGcmFtZURpc3BhdGNoZXIgaW1wbGVtZW50cyBJbnRlcm5hbEFwaURpc3BhdGNoZXIge1xuXG4gIC8vIENvbGxlY3Rpb24gb2YgcGVuZGluZyBwcm9taXNlcyB3aGljaCBhcmUgd2FpdGluZyB0byBiZSByZXNvbHZlZC4gV2hlbiB3ZSByZWNlaXZlIGEgcmVzcG9uc2UgYmFjayBmcm9tIHRoZSBvdGhlciBmcmFtZSxcbiAgLy8gdGhlc2UgcHJvbWlzZXMgY2FuIGJlIGVpdGhlciByZXNvbHZlZCBvciByZWplY3RlZFxuICBwcml2YXRlIF9wZW5kaW5nUHJvbWlzZXM6XG4gICAgeyBbbWVzc2FnZUd1aWQ6IHN0cmluZ106IHsgcmVzb2x2ZTogKHJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2UpID0+IHZvaWQsIHJlamVjdDogKGVycm9yOiBNb2RlbCkgPT4gdm9pZCB9IH0gPSB7fTtcblxuICAvLyBUaGUgY29sbGVjdGlvbiBvZiBub3RpZmljYXRpb24gaGFuZGxlcnMgd2hpY2ggaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGRpc3BhdGNoZXJcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uSGFuZGxlcnM6IEFycmF5PE5vdGlmaWNhdGlvbkhhbmRsZXI+ID0gW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ3Jvc3NGcmFtZURpc3BhdGNoZXIgd2hpY2ggd2lsbCB1c2UgdGhlIGdpdmVuIG1lc3NlbmdlciB0byBjb21tdW5pY2F0ZVxuICAgKiBAcGFyYW0gX21lc3NlbmdlciBhbiBpbnN0YW50aWF0ZWQgYW5kIGxpc3RlbmluZyBtZXNzZW5nZXIgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2VuZ2VyOiBNZXNzZW5nZXIpIHtcbiAgICBpZiAoIXRoaXMuX21lc3Nlbmdlcikge1xuICAgICAgdGhyb3cgJ01pc3NpbmcgbWVzc2VuZ2VyIG9iamVjdCc7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIG91ciBtZXNzYWdlIGhhbmRsZXJzLiBXZSBvbmx5IGNhcmUgYWJvdXQgaW5jb21pbmcgbm90aWZpY2F0aW9ucyBhbmQgY29tbWFuZCByZXNwb25zZXNcbiAgICB0aGlzLl9tZXNzZW5nZXIuc2V0Q29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIodGhpcy5vbkNvbW1hbmRSZXNwb25zZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLl9tZXNzZW5nZXIuc2V0Tm90aWZpY2F0aW9uTWVzc2FnZUhhbmRsZXIodGhpcy5vbk5vdGlmaWNhdGlvbi5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8vLy8vLyBTdGFydCBJbnRlcm5hbEFwaURpc3BhdGNoZXIgaW1wbGVtZW50YXRpb25cblxuICBwdWJsaWMgZXhlY3V0ZSh2ZXJiOiBWZXJiSWQsIHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzKTogUHJvbWlzZTxFeGVjdXRlUmVzcG9uc2U+IHtcbiAgICAvLyBUbyBleGVjdXRlIGEgdmVyYiwgd2UgZmlyc3QgcHJlcGFyZSBhIGNvbW1hbmQgbWVzc2FnZSBhbmQgdGhlbiBkZWZpbmUgYSBwcm9taXNlLlxuICAgIGNvbnN0IHByZXBhcmVkTWVzc2FnZSA9IHRoaXMuX21lc3Nlbmdlci5wcmVwYXJlQ29tbWFuZE1lc3NhZ2UodmVyYiwgcGFyYW1ldGVycyk7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlPEV4ZWN1dGVSZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAvLyBTYXZlIG9mZiB0aGUgcGVuZGluZyBwcm9taXNlIGJ5IHRoZSBtZXNzYWdlR3VpZCB3ZSBhcmUgYWJvdXQgdG8gc2VuZC4gV2hlbiBhIHJlc3BvbnNlIGlzXG4gICAgICAvLyByZWNlaXZlZCwgd2UnbGwgYmUgYWJsZSB0byByZXNvbHZlIHRoaXMgcHJvbWlzZSB3aXRoIHRoZSByZXN1bHRcbiAgICAgIHRoaXMuX3BlbmRpbmdQcm9taXNlc1twcmVwYXJlZE1lc3NhZ2UubWVzc2FnZUd1aWRdID0geyByZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdCB9O1xuICAgIH0pO1xuXG4gICAgLy8gQWN0dWFsbHkgc2VuZCB0aGUgbWVzc2FnZSBhbmQgcmV0dXJuIHRoZSBwcm9taXNlXG4gICAgcHJlcGFyZWRNZXNzYWdlLnNlbmQoKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck5vdGlmaWNhdGlvbkhhbmRsZXIoaGFuZGxlcjogTm90aWZpY2F0aW9uSGFuZGxlcik6IHZvaWQge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBwdWJsaWMgdW5yZWdpc3Rlck5vdGlmaWNhdGlvbkhhbmRsZXIoaGFuZGxlcjogTm90aWZpY2F0aW9uSGFuZGxlcik6IHZvaWQge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkhhbmRsZXJzID0gdGhpcy5fbm90aWZpY2F0aW9uSGFuZGxlcnMuZmlsdGVyKGggPT4gaCAhPT0gaGFuZGxlcik7XG4gIH1cblxuICAvLy8vLy8gRW5kIEludGVybmFsQXBpRGlzcGF0Y2hlciBpbXBsZW1lbnRhdGlvblxuXG4gIHByaXZhdGUgb25Db21tYW5kUmVzcG9uc2UocmVzcG9uc2U6IENvbW1hbmRSZXNwb25zZU1lc3NhZ2UpOiB2b2lkIHtcbiAgICAvLyBXZSBnb3QgYSBjb21tYW5kIHJlc3BvbnNlLCBsb29rIHRocm91Z2ggdGhlIHBlbmRpbmcgcHJvbWlzZXMgYW5kIHJlc29sdmVcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5fcGVuZGluZ1Byb21pc2VzKS5pbmRleE9mKHJlc3BvbnNlLmNvbW1hbmRHdWlkKSA8IDApIHtcbiAgICAgIHJldHVybjsgLy8gV2UgZG9uJ3QgaGF2ZSBhbnkgcmVmZXJlbmNlIHRvIHRoaXMgY29tbWFuZCwganVzdCByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwZW5kaW5nUHJvbWlzZSA9IHRoaXMuX3BlbmRpbmdQcm9taXNlc1tyZXNwb25zZS5jb21tYW5kR3VpZF07XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGFuIGVycm9yIGRlZmluZWQsIHJlamVjdCB0aGUgcHJvbWlzZVxuICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgcGVuZGluZ1Byb21pc2UucmVqZWN0KHJlc3BvbnNlLmVycm9yKTtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGRhdGEgZGVmaW5lZCwgcmVzb2x2ZSB0aGUgcHJvbWlzZVxuICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICBwZW5kaW5nUHJvbWlzZS5yZXNvbHZlKHsgcmVzdWx0OiByZXNwb25zZS5kYXRhIH0pO1xuICAgIH1cblxuICAgIC8vIENsZWFuIHVwIG91ciBwZW5kaW5nIHByb21pc2VzIG9iamVjdFxuICAgIGRlbGV0ZSB0aGlzLl9wZW5kaW5nUHJvbWlzZXNbcmVzcG9uc2UuY29tbWFuZEd1aWRdO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb25NZXNzYWdlOiBOb3RpZmljYXRpb25NZXNzYWdlKTogdm9pZCB7XG4gICAgLy8gR28gdGhyb3VnaCBlYWNoIG5vdGlmaWNhdGlvbiBoYW5kbGVyIHdlIGhhdmUgcmVnaXN0ZXJlZCBhbmQgbGV0IHRoZW0ga25vdyBhIG5vdGlmaWNhdGlvbiBjYW1lIGluXG4gICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIHRoaXMuX25vdGlmaWNhdGlvbkhhbmRsZXJzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBoYW5kbGVyKHsgbm90aWZpY2F0aW9uSWQ6IG5vdGlmaWNhdGlvbk1lc3NhZ2Uubm90aWZpY2F0aW9uSWQsIGRhdGE6IG5vdGlmaWNhdGlvbk1lc3NhZ2UuZGF0YSB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoaXMuIFdyYXAgaW4gdHJ5L2NhdGNoIHNvIGlmIG9uZSBoYW5kbGVyIGVycm9ycywgdGhlIG90aGVyIHN0aWxsIGdldCB0aGUgbWVzc2FnZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvQ3Jvc3NGcmFtZS9Dcm9zc0ZyYW1lRGlzcGF0Y2hlci50cyIsImltcG9ydCB7IEludGVybmFsQXBpRGlzcGF0Y2hlciB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9EYXRhU291cmNlU2VydmljZUltcGwnO1xuaW1wb3J0IHsgRmlsdGVyU2VydmljZUltcGwgfSBmcm9tICcuL2ltcGwvRmlsdGVyU2VydmljZUltcGwnO1xuaW1wb3J0IHsgR2V0RGF0YVNlcnZpY2VJbXBsIH0gZnJvbSAnLi9pbXBsL0dldERhdGFTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9Ob3RpZmljYXRpb25TZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJzU2VydmljZUltcGwgfSBmcm9tICcuL2ltcGwvUGFyYW1ldGVyc1NlcnZpY2VJbXBsJztcbmltcG9ydCB7IFNlbGVjdGlvblNlcnZpY2VJbXBsIH0gZnJvbSAnLi9pbXBsL1NlbGVjdGlvblNlcnZpY2VJbXBsJztcbmltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSB9IGZyb20gJy4vU2VydmljZVJlZ2lzdHJ5JztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMoZGlzcGF0Y2hlcjogSW50ZXJuYWxBcGlEaXNwYXRjaGVyKTogdm9pZCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IERhdGFTb3VyY2VTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IEdldERhdGFTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IEZpbHRlclNlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgTm90aWZpY2F0aW9uU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBQYXJhbWV0ZXJzU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBTZWxlY3Rpb25TZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9SZWdpc3RlckFsbFNoYXJlZFNlcnZpY2VzLnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJ5LFxuICBEYXRhU2NoZW1hLFxuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgSm9pbkRlc2NyaXB0aW9uLFxuICBQYXJhbWV0ZXJJZCxcbiAgVGFibGVJbmZvLFxuICBWZXJiSWQsXG4gIFZpc3VhbElkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vU2VydmljZUltcGxCYXNlJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9EYXRhU291cmNlU2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi8uLi9UYWJsZWF1RXJyb3InO1xuXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZVNlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgRGF0YVNvdXJjZVNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5EYXRhU291cmNlU2VydmljZTtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoQXN5bmMoZGF0YVNvdXJjZUlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHsgW1BhcmFtZXRlcklkLkRhdGFTb3VyY2VJZF06IGRhdGFTb3VyY2VJZCB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuUmVmcmVzaERhdGFTb3VyY2UsIHBhcmFtZXRlcnMpLnRoZW48dm9pZD4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVRhYmxlc0FzeW5jKGRhdGFTb3VyY2VJZDogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxUYWJsZUluZm8+PiB7XG4gICAgY29uc3Qgam9pblBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuRGF0YVNvdXJjZUlkXTogZGF0YVNvdXJjZUlkIH07XG5cbiAgICAvLyBHZXQgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0YWJsZXMgdXNlZCBieSB0aGlzIGNvbm5lY3Rpb25cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXRKb2luRGVzY3JpcHRpb24sIGpvaW5QYXJhbWV0ZXJzKS50aGVuPEFycmF5PFRhYmxlSW5mbz4+KGpvaW5SZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCBqb2luRGVzY3JpcHRpb24gPSBqb2luUmVzcG9uc2UucmVzdWx0IGFzIEpvaW5EZXNjcmlwdGlvbjtcblxuICAgICAgLy8gZ2V0QWN0aXZlVGFibGVzIGlzIHVuc3VwcG9ydGVkIGZvciBjdWJlcyBhbmQgR0EuIFdlIGRvIG5vdCBoYXZlIGEgY29ubmVjdGlvbiB0eXBlIHByb3BlcnR5XG4gICAgICAvLyBhdmFpbGFibGUgZnJvbSB0aGUgcGxhdGZvcm0gKGludGVudGlvbmFsbHksIHRvIHJlZHVjZSBjb2RlIGNodXJuIGFzIG5ldyBjb25uZWN0aW9ucyBhcmUgYWRkZWQpLlxuICAgICAgLy8gSW5zdGVhZCxqdXN0IGNoZWNrIGlmIGFueSB0YWJsZXMgYXJlIHJldHVybmVkLiBUaGlzIGFycmF5IHdpbGwgYmUgZW1wdHkgZm9yIGFueSBub24tdGFibGUgYmFzZWQgZGF0YXNvdXJjZS5cbiAgICAgIGlmIChqb2luRGVzY3JpcHRpb24udGFibGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuVW5zdXBwb3J0ZWRNZXRob2RGb3JEYXRhU291cmNlVHlwZSxcbiAgICAgICAgICBgZ2V0QWN0aXZlVGFibGVzIGlzIG5vdCBzdXBwb3J0ZWQgZm9yOiAke2RhdGFTb3VyY2VJZH1gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGpvaW5EZXNjcmlwdGlvbi50YWJsZXM7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YVNvdXJjZXNBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPERhdGFTY2hlbWE+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHsgW1BhcmFtZXRlcklkLlZpc3VhbElkXTogdmlzdWFsSWQgfTtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXREYXRhU291cmNlcywgcGFyYW1ldGVycykudGhlbjxEYXRhU2NoZW1hPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCBkYXRhU2NoZW1hID0gcmVzcG9uc2UucmVzdWx0IGFzIERhdGFTY2hlbWE7XG4gICAgICByZXR1cm4gZGF0YVNjaGVtYTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25uZWN0aW9uU3VtbWFyaWVzQXN5bmMoZGF0YVNvdXJjZUlkOiBzdHJpbmcpOiBQcm9taXNlPENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcnlbXT4ge1xuICAgIGNvbnN0IHBhcmFtczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5EYXRhU291cmNlSWRdOiBkYXRhU291cmNlSWQgfTtcblxuICAgIC8vIEdldCB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHRhYmxlcyB1c2VkIGJ5IHRoaXMgY29ubmVjdGlvblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcmllcywgcGFyYW1zKS50aGVuPENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcnlbXT4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb25TdW1tYXJpZXMgPSByZXNwb25zZS5yZXN1bHQgYXMgQ29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyeVtdO1xuICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uU3VtbWFyaWVzO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL0RhdGFTb3VyY2VTZXJ2aWNlSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0ICogYXMgSW50ZXJuYWxDb250cmFjdCBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRmlsdGVyVHlwZSxcbiAgUGFyYW1ldGVySWQsXG4gIFZlcmJJZCxcbiAgVmlzdWFsSWRcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgRXh0ZXJuYWxUb0ludGVybmFsRW51bU1hcHBpbmdzIGFzIEV4dGVybmFsRW51bUNvbnZlcnRlciB9IGZyb20gJy4uLy4uL0VudW1NYXBwaW5ncy9FeHRlcm5hbFRvSW50ZXJuYWxFbnVtTWFwcGluZ3MnO1xuaW1wb3J0IHsgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIGFzIEludGVybmFsRW51bUNvbnZlcnRlciB9IGZyb20gJy4uLy4uL0VudW1NYXBwaW5ncy9JbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MnO1xuXG5pbXBvcnQge1xuICBDYXRlZ29yaWNhbERvbWFpbixcbiAgQ2F0ZWdvcmljYWxGaWx0ZXIsXG4gIFJhbmdlRG9tYWluLFxuICBSYW5nZUZpbHRlcixcbiAgUmVsYXRpdmVEYXRlRmlsdGVyXG59IGZyb20gJy4uLy4uL01vZGVscy9GaWx0ZXJNb2RlbHMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL1NlcnZpY2VJbXBsQmFzZSc7XG5cbmltcG9ydCB7IEZpbHRlclNlcnZpY2UgfSBmcm9tICcuLi9GaWx0ZXJTZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmltcG9ydCB7IERhdGFWYWx1ZSB9IGZyb20gJy4uLy4uL01vZGVscy9HZXREYXRhTW9kZWxzJztcbmltcG9ydCB7IFBhcmFtIH0gZnJvbSAnLi4vLi4vVXRpbHMvUGFyYW0nO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyU2VydmljZUltcGwgZXh0ZW5kcyBTZXJ2aWNlSW1wbEJhc2UgaW1wbGVtZW50cyBGaWx0ZXJTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuRmlsdGVyO1xuICB9XG5cbiAgcHVibGljIGFwcGx5RmlsdGVyQXN5bmMoXG4gICAgdmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIGZpZWxkTmFtZTogc3RyaW5nLFxuICAgIHZhbHVlczogQXJyYXk8c3RyaW5nPixcbiAgICB1cGRhdGVUeXBlOiBDb250cmFjdC5GaWx0ZXJVcGRhdGVUeXBlLFxuICAgIGZpbHRlck9wdGlvbnM6IENvbnRyYWN0LkZpbHRlck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuQXBwbHlDYXRlZ29yaWNhbEZpbHRlcjtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuVmlzdWFsSWRdID0gdmlzdWFsSWQ7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWVsZE5hbWVdID0gZmllbGROYW1lO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmlsdGVyVmFsdWVzXSA9IHZhbHVlcztcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpbHRlclVwZGF0ZVR5cGVdID0gRXh0ZXJuYWxFbnVtQ29udmVydGVyLmZpbHRlclVwZGF0ZVR5cGUuY29udmVydCh1cGRhdGVUeXBlKTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLklzRXhjbHVkZU1vZGVdID1cbiAgICAgIChmaWx0ZXJPcHRpb25zID09PSB1bmRlZmluZWQgfHwgZmlsdGVyT3B0aW9ucy5pc0V4Y2x1ZGVNb2RlID09PSB1bmRlZmluZWQpID8gZmFsc2UgOiBmaWx0ZXJPcHRpb25zLmlzRXhjbHVkZU1vZGU7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKHZlcmIsIHBhcmFtZXRlcnMpLnRoZW48c3RyaW5nPihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gZmllbGROYW1lO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFwcGx5UmFuZ2VGaWx0ZXJBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQsIGZpZWxkTmFtZTogc3RyaW5nLCBmaWx0ZXJPcHRpb25zOiBDb250cmFjdC5SYW5nZUZpbHRlck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuQXBwbHlSYW5nZUZpbHRlcjtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuXG4gICAgaWYgKGZpbHRlck9wdGlvbnMubWluKSB7XG4gICAgICBsZXQgbWluOiBzdHJpbmcgfCBudW1iZXI7XG4gICAgICBpZiAoZmlsdGVyT3B0aW9ucy5taW4gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIG1pbiA9IFBhcmFtLnNlcmlhbGl6ZURhdGVGb3JQbGF0Zm9ybShmaWx0ZXJPcHRpb25zLm1pbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtaW4gPSBmaWx0ZXJPcHRpb25zLm1pbjtcbiAgICAgIH1cbiAgICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmlsdGVyUmFuZ2VNaW5dID0gbWluO1xuICAgIH1cblxuICAgIGlmIChmaWx0ZXJPcHRpb25zLm1heCkge1xuICAgICAgbGV0IG1heDogc3RyaW5nIHwgbnVtYmVyO1xuICAgICAgaWYgKGZpbHRlck9wdGlvbnMubWF4IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBtYXggPSBQYXJhbS5zZXJpYWxpemVEYXRlRm9yUGxhdGZvcm0oZmlsdGVyT3B0aW9ucy5tYXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF4ID0gZmlsdGVyT3B0aW9ucy5tYXg7XG4gICAgICB9XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpbHRlclJhbmdlTWF4XSA9IG1heDtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyT3B0aW9ucy5udWxsT3B0aW9uKSB7XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpbHRlclJhbmdlTnVsbE9wdGlvbl0gPSBFeHRlcm5hbEVudW1Db252ZXJ0ZXIubnVsbE9wdGlvbnMuY29udmVydChmaWx0ZXJPcHRpb25zLm51bGxPcHRpb24pO1xuICAgIH1cblxuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmllbGROYW1lXSA9IGZpZWxkTmFtZTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlZpc3VhbElkXSA9IHZpc3VhbElkO1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPHN0cmluZz4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlckFzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCwgZmllbGROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuQ2xlYXJGaWx0ZXI7XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpZWxkTmFtZV0gPSBmaWVsZE5hbWU7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPHN0cmluZz4ocmVzcG9zbmUgPT4ge1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5GaWx0ZXI+PiB7XG4gICAgY29uc3QgdmVyYiA9IFZlcmJJZC5HZXRGaWx0ZXJzO1xuICAgIGxldCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuVmlzdWFsSWRdID0gdmlzdWFsSWQ7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPEFycmF5PENvbnRyYWN0LkZpbHRlcj4+KHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCBmaWx0ZXJzID0gcmVzcG9uc2UucmVzdWx0IGFzIEFycmF5PEludGVybmFsQ29udHJhY3QuRmlsdGVyPjtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnREb21haW5GaWx0ZXJzKGZpbHRlcnMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldENhdGVnb3JpY2FsRG9tYWluQXN5bmMoXG4gICAgd29ya3NoZWV0TmFtZTogc3RyaW5nLFxuICAgIGZpZWxkSWQ6IHN0cmluZyxcbiAgICBkb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogUHJvbWlzZTxDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbj4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuR2V0Q2F0ZWdvcmljYWxEb21haW47XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB7XG4gICAgICB3b3Jrc2hlZXQ6IHdvcmtzaGVldE5hbWVcbiAgICB9O1xuXG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWVsZElkXSA9IGZpZWxkSWQ7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5Eb21haW5UeXBlXSA9IEV4dGVybmFsRW51bUNvbnZlcnRlci5maWx0ZXJEb21haW5UeXBlLmNvbnZlcnQoZG9tYWluVHlwZSk7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPENvbnRyYWN0LkNhdGVnb3JpY2FsRG9tYWluPihyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgZG9tYWluID0gcmVzcG9uc2UucmVzdWx0IGFzIEludGVybmFsQ29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW47XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0Q2F0ZWdvcmljYWxEb21haW4oZG9tYWluLCBkb21haW5UeXBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSYW5nZURvbWFpbkFzeW5jKHdvcmtzaGVldE5hbWU6IHN0cmluZywgZmllbGRJZDogc3RyaW5nLCBkb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogUHJvbWlzZTxDb250cmFjdC5SYW5nZURvbWFpbj4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuR2V0UmFuZ2VEb21haW47XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB7XG4gICAgICB3b3Jrc2hlZXQ6IHdvcmtzaGVldE5hbWVcbiAgICB9O1xuXG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWVsZElkXSA9IGZpZWxkSWQ7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5Eb21haW5UeXBlXSA9IEV4dGVybmFsRW51bUNvbnZlcnRlci5maWx0ZXJEb21haW5UeXBlLmNvbnZlcnQoZG9tYWluVHlwZSk7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPENvbnRyYWN0LlJhbmdlRG9tYWluPihyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgZG9tYWluID0gcmVzcG9uc2UucmVzdWx0IGFzIEludGVybmFsQ29udHJhY3QuUmFuZ2VEb21haW47XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRSYW5nZURvbWFpbihkb21haW4sIGRvbWFpblR5cGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gSGVscGVyIE1ldGhvZHNcbiAgcHJpdmF0ZSBjb252ZXJ0RG9tYWluRmlsdGVycyhkb21haW5GaWx0ZXJzOiBBcnJheTxJbnRlcm5hbENvbnRyYWN0LkZpbHRlcj4pOiBBcnJheTxDb250cmFjdC5GaWx0ZXI+IHtcbiAgICBsZXQgZmlsdGVyczogQXJyYXk8Q29udHJhY3QuRmlsdGVyPiA9IFtdO1xuICAgIGRvbWFpbkZpbHRlcnMuZm9yRWFjaChkb21haW5GaWx0ZXIgPT4ge1xuICAgICAgc3dpdGNoIChkb21haW5GaWx0ZXIuZmlsdGVyVHlwZSkge1xuICAgICAgICBjYXNlIEZpbHRlclR5cGUuQ2F0ZWdvcmljYWw6IHtcbiAgICAgICAgICBsZXQgZmlsdGVyID0gZG9tYWluRmlsdGVyIGFzIEludGVybmFsQ29udHJhY3QuQ2F0ZWdvcmljYWxGaWx0ZXI7XG4gICAgICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHRoaXMuY29udmVydENhdGVnb3JpY2FsRmlsdGVyKGZpbHRlcikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQ2F0ZWdvcmljYWwgRmlsdGVyJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBGaWx0ZXJUeXBlLlJhbmdlOiB7XG4gICAgICAgICAgbGV0IGZpbHRlciA9IGRvbWFpbkZpbHRlciBhcyBJbnRlcm5hbENvbnRyYWN0LlJhbmdlRmlsdGVyO1xuICAgICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh0aGlzLmNvbnZlcnRSYW5nZUZpbHRlcihmaWx0ZXIpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFJhbmdlIEZpbHRlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgRmlsdGVyVHlwZS5SZWxhdGl2ZURhdGU6IHtcbiAgICAgICAgICBsZXQgZmlsdGVyID0gZG9tYWluRmlsdGVyIGFzIEludGVybmFsQ29udHJhY3QuUmVsYXRpdmVEYXRlRmlsdGVyO1xuICAgICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh0aGlzLmNvbnZlcnRSZWxhdGl2ZURhdGVGaWx0ZXIoZmlsdGVyKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBSZWxhdGl2ZSBEYXRlIEZpbHRlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJzO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0Q2F0ZWdvcmljYWxGaWx0ZXIoZG9tYWluRmlsdGVyOiBJbnRlcm5hbENvbnRyYWN0LkNhdGVnb3JpY2FsRmlsdGVyKTogQ29udHJhY3QuQ2F0ZWdvcmljYWxGaWx0ZXIge1xuICAgIGxldCBhcHBsaWVkVmFsdWVzOiBBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+ID0gZG9tYWluRmlsdGVyLnZhbHVlcy5tYXAoZHYgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhVmFsdWUoZHYudmFsdWUsIGR2LmZvcm1hdHRlZFZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgQ2F0ZWdvcmljYWxGaWx0ZXIoXG4gICAgICBkb21haW5GaWx0ZXIudmlzdWFsSWQud29ya3NoZWV0LFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkQ2FwdGlvbixcbiAgICAgIGRvbWFpbkZpbHRlci5maWVsZE5hbWUsXG4gICAgICBDb250cmFjdC5GaWx0ZXJUeXBlLkNhdGVnb3JpY2FsLFxuICAgICAgYXBwbGllZFZhbHVlcyxcbiAgICAgIGRvbWFpbkZpbHRlci5pc0V4Y2x1ZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0UmFuZ2VGaWx0ZXIoZG9tYWluRmlsdGVyOiBJbnRlcm5hbENvbnRyYWN0LlJhbmdlRmlsdGVyKTogQ29udHJhY3QuUmFuZ2VGaWx0ZXIge1xuICAgIGxldCBtaW5WYWx1ZTogRGF0YVZhbHVlID0gbmV3IERhdGFWYWx1ZShkb21haW5GaWx0ZXIubWluLnZhbHVlLCBkb21haW5GaWx0ZXIubWluLmZvcm1hdHRlZFZhbHVlKTtcbiAgICBsZXQgbWF4VmFsdWU6IERhdGFWYWx1ZSA9IG5ldyBEYXRhVmFsdWUoZG9tYWluRmlsdGVyLm1heC52YWx1ZSwgZG9tYWluRmlsdGVyLm1heC5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBSYW5nZUZpbHRlcihcbiAgICAgIGRvbWFpbkZpbHRlci52aXN1YWxJZC53b3Jrc2hlZXQsXG4gICAgICBkb21haW5GaWx0ZXIuZmllbGRDYXB0aW9uLFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkTmFtZSxcbiAgICAgIENvbnRyYWN0LkZpbHRlclR5cGUuUmFuZ2UsXG4gICAgICBtaW5WYWx1ZSxcbiAgICAgIG1heFZhbHVlLFxuICAgICAgZG9tYWluRmlsdGVyLmluY2x1ZGVOdWxsVmFsdWVzXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFJlbGF0aXZlRGF0ZUZpbHRlcihkb21haW5GaWx0ZXI6IEludGVybmFsQ29udHJhY3QuUmVsYXRpdmVEYXRlRmlsdGVyKTogQ29udHJhY3QuUmVsYXRpdmVEYXRlRmlsdGVyIHtcbiAgICBsZXQgYW5jaG9yRGF0ZVZhbHVlOiBEYXRhVmFsdWUgPSBuZXcgRGF0YVZhbHVlKGRvbWFpbkZpbHRlci5hbmNob3JEYXRlLnZhbHVlLCBkb21haW5GaWx0ZXIuYW5jaG9yRGF0ZS5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBSZWxhdGl2ZURhdGVGaWx0ZXIoXG4gICAgICBkb21haW5GaWx0ZXIudmlzdWFsSWQud29ya3NoZWV0LFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkQ2FwdGlvbixcbiAgICAgIGRvbWFpbkZpbHRlci5maWVsZE5hbWUsXG4gICAgICBDb250cmFjdC5GaWx0ZXJUeXBlLlJlbGF0aXZlRGF0ZSxcbiAgICAgIGFuY2hvckRhdGVWYWx1ZSxcbiAgICAgIEludGVybmFsRW51bUNvbnZlcnRlci5kYXRlU3RlcFBlcmlvZC5jb252ZXJ0KGRvbWFpbkZpbHRlci5wZXJpb2RUeXBlKSxcbiAgICAgIEludGVybmFsRW51bUNvbnZlcnRlci5kYXRlUmFuZ2VUeXBlLmNvbnZlcnQoZG9tYWluRmlsdGVyLnJhbmdlVHlwZSksXG4gICAgICBkb21haW5GaWx0ZXIucmFuZ2VOXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydENhdGVnb3JpY2FsRG9tYWluKFxuICAgIGRvbWFpbjogSW50ZXJuYWxDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbixcbiAgICBkb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogQ29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW4ge1xuICAgIGxldCB2YWx1ZXM6IEFycmF5PERhdGFWYWx1ZT4gPSBkb21haW4udmFsdWVzLm1hcCgoZG9tYWluRHYpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZhbHVlKGRvbWFpbkR2LnZhbHVlLCBkb21haW5Edi5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBDYXRlZ29yaWNhbERvbWFpbih2YWx1ZXMsIGRvbWFpblR5cGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0UmFuZ2VEb21haW4oZG9tYWluOiBJbnRlcm5hbENvbnRyYWN0LlJhbmdlRG9tYWluLCBkb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogQ29udHJhY3QuUmFuZ2VEb21haW4ge1xuICAgIGxldCBtaW46IERhdGFWYWx1ZSA9IG5ldyBEYXRhVmFsdWUoZG9tYWluLm1pbi52YWx1ZSwgZG9tYWluLm1pbi5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgbGV0IG1heDogRGF0YVZhbHVlID0gbmV3IERhdGFWYWx1ZShkb21haW4ubWF4LnZhbHVlLCBkb21haW4ubWF4LmZvcm1hdHRlZFZhbHVlKTtcbiAgICByZXR1cm4gbmV3IFJhbmdlRG9tYWluKFxuICAgICAgbWluLFxuICAgICAgbWF4LFxuICAgICAgZG9tYWluVHlwZVxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvRmlsdGVyU2VydmljZUltcGwudHMiLCJpbXBvcnQge1xuICBGaWx0ZXJEb21haW5UeXBlIGFzIEV4dGVybmFsRG9tYWluVHlwZSxcbiAgRmlsdGVyTnVsbE9wdGlvbiBhcyBFeHRlcm5hbE51bGxPcHRpb24sXG4gIEZpbHRlclVwZGF0ZVR5cGUgYXMgRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlXG59IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHtcbiAgRmlsdGVyRG9tYWluVHlwZSBhcyBJbnRlcm5hbERvbWFpblR5cGUsXG4gIEZpbHRlck51bGxPcHRpb24gYXMgSW50ZXJuYWxOdWxsT3B0aW9uLFxuICBGaWx0ZXJVcGRhdGVUeXBlIGFzIEludGVybmFsRmlsdGVyVXBkYXRlVHlwZVxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBFbnVtQ29udmVydGVyIH0gZnJvbSAnLi4vVXRpbHMvRW51bUNvbnZlcnRlcic7XG5cbi8qIHRzbGludDpkaXNhYmxlOnR5cGVkZWYgLSBEaXNhYmxlIHRoaXMgdG8gbWFrZSBkZWNsYXJpbmcgdGhlc2UgY2xhc3NlcyBhIGJpdCBlYXNpZXIgKi9cbi8qKlxuICogTWFwcyBlbnVtcyB1c2VkIGJ5IHRoZSBleHRlcm5hbC1hcGktY29udHJhY3QgdG8gdGhlIGVudW1zIHVzZWRcbiAqIGluIHRoZSBpbnRlcm5hbC1hcGktY29udHJhY3QsIHdoaWNoIGRldmVsb3BlcnMgY29kZSBhZ2FpbnN0LlxuICovXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxUb0ludGVybmFsRW51bU1hcHBpbmdzIHtcbiAgcHVibGljIHN0YXRpYyBmaWx0ZXJEb21haW5UeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8RXh0ZXJuYWxEb21haW5UeXBlLCBJbnRlcm5hbERvbWFpblR5cGU+KHtcbiAgICBbRXh0ZXJuYWxEb21haW5UeXBlLlJlbGV2YW50XTogSW50ZXJuYWxEb21haW5UeXBlLlJlbGV2YW50LFxuICAgIFtFeHRlcm5hbERvbWFpblR5cGUuRGF0YWJhc2VdOiBJbnRlcm5hbERvbWFpblR5cGUuRGF0YWJhc2VcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBudWxsT3B0aW9ucyA9IG5ldyBFbnVtQ29udmVydGVyPEV4dGVybmFsTnVsbE9wdGlvbiwgSW50ZXJuYWxOdWxsT3B0aW9uPih7XG4gICAgW0V4dGVybmFsTnVsbE9wdGlvbi5BbGxWYWx1ZXNdOiBJbnRlcm5hbE51bGxPcHRpb24uQWxsVmFsdWVzLFxuICAgIFtFeHRlcm5hbE51bGxPcHRpb24uTm9uTnVsbFZhbHVlc106IEludGVybmFsTnVsbE9wdGlvbi5Ob25OdWxsVmFsdWVzLFxuICAgIFtFeHRlcm5hbE51bGxPcHRpb24uTm9uTnVsbFZhbHVlc106IEludGVybmFsTnVsbE9wdGlvbi5OdWxsVmFsdWVzXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZmlsdGVyVXBkYXRlVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZSwgSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlPih7XG4gICAgW0V4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BZGRdOiBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWRkLFxuICAgIFtFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWxsXTogSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFsbCxcbiAgICBbRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlbW92ZV06IEludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZW1vdmUsXG4gICAgW0V4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZXBsYWNlXTogSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlcGxhY2VcbiAgfSk7XG59XG4vKiB0c2xpbnQ6ZW5hYmxlOnR5cGVkZWYgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0VudW1NYXBwaW5ncy9FeHRlcm5hbFRvSW50ZXJuYWxFbnVtTWFwcGluZ3MudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRmlsdGVyU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL0ZpbHRlclNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5LCBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuaW1wb3J0IHsgRXJyb3JIZWxwZXJzIH0gZnJvbSAnLi4vVXRpbHMvRXJyb3JIZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEZpbHRlciBpbXBsZW1lbnRzIENvbnRyYWN0LkZpbHRlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgX3dvcmtzaGVldE5hbWU6IHN0cmluZyxcbiAgICBwcm90ZWN0ZWQgX2ZpZWxkTmFtZTogc3RyaW5nLFxuICAgIHByb3RlY3RlZCBfZmlsdGVyVHlwZTogQ29udHJhY3QuRmlsdGVyVHlwZSxcbiAgICBwcm90ZWN0ZWQgX2ZpZWxkSWQ6IHN0cmluZykge1xuICB9XG5cbiAgcHVibGljIGdldCB3b3Jrc2hlZXROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldE5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZpZWxkTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZE5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZpZWxkSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmlsdGVyVHlwZSgpOiBDb250cmFjdC5GaWx0ZXJUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWVsZEFzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuRmllbGQ+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmljYWxGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIgaW1wbGVtZW50cyBDb250cmFjdC5DYXRlZ29yaWNhbEZpbHRlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICB3b3Jrc2hlZXROYW1lOiBzdHJpbmcsXG4gICAgZmllbGROYW1lOiBzdHJpbmcsXG4gICAgZmllbGRJZDogc3RyaW5nLFxuICAgIGZpbHRlclR5cGU6IENvbnRyYWN0LkZpbHRlclR5cGUsXG4gICAgcHJpdmF0ZSBfYXBwbGllZFZhbHVlczogQXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPixcbiAgICBwcml2YXRlIF9pc0V4Y2x1ZGVNb2RlOiBib29sZWFuKSB7XG4gICAgc3VwZXIod29ya3NoZWV0TmFtZSwgZmllbGROYW1lLCBmaWx0ZXJUeXBlLCBmaWVsZElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYXBwbGllZFZhbHVlcygpOiBBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+IHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGllZFZhbHVlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNFeGNsdWRlTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNFeGNsdWRlTW9kZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREb21haW5Bc3luYyhkb21haW5UeXBlPzogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSk6IFByb21pc2U8Q29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW4+IHtcbiAgICBpZiAoIWRvbWFpblR5cGUpIHtcbiAgICAgIGRvbWFpblR5cGUgPSBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlLlJlbGV2YW50O1xuICAgIH1cblxuICAgIEVycm9ySGVscGVycy52ZXJpZnlFbnVtVmFsdWU8Q29udHJhY3QuRmlsdGVyRG9tYWluVHlwZT4oZG9tYWluVHlwZSwgQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RmlsdGVyU2VydmljZT4oU2VydmljZU5hbWVzLkZpbHRlcik7XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0Q2F0ZWdvcmljYWxEb21haW5Bc3luYyh0aGlzLl93b3Jrc2hlZXROYW1lLCB0aGlzLl9maWVsZElkLCBkb21haW5UeXBlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmFuZ2VGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIgaW1wbGVtZW50cyBDb250cmFjdC5SYW5nZUZpbHRlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICB3b3Jrc2hlZXROYW1lOiBzdHJpbmcsXG4gICAgZmllbGROYW1lOiBzdHJpbmcsXG4gICAgZmllbGRJZDogc3RyaW5nLFxuICAgIGZpbHRlclR5cGU6IENvbnRyYWN0LkZpbHRlclR5cGUsXG4gICAgcHJpdmF0ZSBfbWluOiBDb250cmFjdC5EYXRhVmFsdWUsXG4gICAgcHJpdmF0ZSBfbWF4OiBDb250cmFjdC5EYXRhVmFsdWUsXG4gICAgcHJpdmF0ZSBfaW5jbHVkZU51bGxWYWx1ZXM6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih3b3Jrc2hlZXROYW1lLCBmaWVsZE5hbWUsIGZpbHRlclR5cGUsIGZpZWxkSWQpO1xuICB9XG5cbiAgcHVibGljIGdldCBtaW5WYWx1ZSgpOiBDb250cmFjdC5EYXRhVmFsdWUge1xuICAgIHJldHVybiB0aGlzLl9taW47XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1heFZhbHVlKCk6IENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW5jbHVkZU51bGxWYWx1ZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVOdWxsVmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGdldERvbWFpbkFzeW5jKGRvbWFpblR5cGU/OiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogUHJvbWlzZTxDb250cmFjdC5SYW5nZURvbWFpbj4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxGaWx0ZXJTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRmlsdGVyKTtcbiAgICBpZiAoIWRvbWFpblR5cGUpIHtcbiAgICAgIGRvbWFpblR5cGUgPSBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlLlJlbGV2YW50O1xuICAgIH1cblxuICAgIEVycm9ySGVscGVycy52ZXJpZnlFbnVtVmFsdWU8Q29udHJhY3QuRmlsdGVyRG9tYWluVHlwZT4oZG9tYWluVHlwZSwgQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSk7XG5cbiAgICByZXR1cm4gc2VydmljZS5nZXRSYW5nZURvbWFpbkFzeW5jKHRoaXMuX3dvcmtzaGVldE5hbWUsIHRoaXMuX2ZpZWxkSWQsIGRvbWFpblR5cGUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWxhdGl2ZURhdGVGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIgaW1wbGVtZW50cyBDb250cmFjdC5SZWxhdGl2ZURhdGVGaWx0ZXIge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgd29ya3NoZWV0TmFtZTogc3RyaW5nLFxuICAgIGZpZWxkTmFtZTogc3RyaW5nLFxuICAgIGZpZWxkSWQ6IHN0cmluZyxcbiAgICBmaWx0ZXJUeXBlOiBDb250cmFjdC5GaWx0ZXJUeXBlLFxuICAgIHByaXZhdGUgX2FuY2hvckRhdGU6IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9wZXJpb2RUeXBlOiBDb250cmFjdC5QZXJpb2RUeXBlLFxuICAgIHByaXZhdGUgX3JhbmdlVHlwZTogQ29udHJhY3QuRGF0ZVJhbmdlVHlwZSxcbiAgICBwcml2YXRlIF9yYW5nZU46IG51bWJlcikge1xuICAgIHN1cGVyKHdvcmtzaGVldE5hbWUsIGZpZWxkTmFtZSwgZmlsdGVyVHlwZSwgZmllbGRJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFuY2hvckRhdGUoKTogQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fYW5jaG9yRGF0ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGVyaW9kVHlwZSgpOiBDb250cmFjdC5QZXJpb2RUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyaW9kVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmFuZ2VUeXBlKCk6IENvbnRyYWN0LkRhdGVSYW5nZVR5cGUge1xuICAgIHJldHVybiB0aGlzLl9yYW5nZVR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJhbmdlTigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yYW5nZU47XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhdGVnb3JpY2FsRG9tYWluIGltcGxlbWVudHMgQ29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW4ge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdmFsdWVzOiBBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+LFxuICAgIHByaXZhdGUgX2RvbWFpblR5cGU6IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUpIHtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmFsdWVzKCk6IEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4ge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpblR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJhbmdlRG9tYWluIGltcGxlbWVudHMgQ29udHJhY3QuUmFuZ2VEb21haW4ge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbWluOiBDb250cmFjdC5EYXRhVmFsdWUsXG4gICAgcHJpdmF0ZSBfbWF4OiBDb250cmFjdC5EYXRhVmFsdWUsXG4gICAgcHJpdmF0ZSBfZG9tYWluVHlwZTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSkge1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5UeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBtaW4oKTogQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fbWluO1xuICB9XG5cbiAgcHVibGljIGdldCBtYXgoKTogQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvRmlsdGVyTW9kZWxzLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQge1xuICBEYXRhVGFibGUgYXMgRGF0YVRhYmxlSW50ZXJuYWxDb250cmFjdCxcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEhpZ2hsaWdodGVkTWFya3NUYWJsZSxcbiAgUGFyYW1ldGVySWQsXG4gIFNlbGVjdGVkTWFya3NUYWJsZSxcbiAgVW5kZXJseWluZ0RhdGFUYWJsZSxcbiAgVmVyYklkLFxuICBWaXN1YWxJZCxcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgU2VydmljZUltcGxCYXNlIH0gZnJvbSAnLi9TZXJ2aWNlSW1wbEJhc2UnO1xuXG5pbXBvcnQgeyBDb2x1bW4sIERhdGFUYWJsZSwgRGF0YVZhbHVlLCBNYXJrSW5mbyB9IGZyb20gJy4uLy4uL01vZGVscy9HZXREYXRhTW9kZWxzJztcbmltcG9ydCB7IEdldERhdGFTZXJ2aWNlLCBHZXREYXRhVHlwZSB9IGZyb20gJy4uL0dldERhdGFTZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmV4cG9ydCBjbGFzcyBHZXREYXRhU2VydmljZUltcGwgZXh0ZW5kcyBTZXJ2aWNlSW1wbEJhc2UgaW1wbGVtZW50cyBHZXREYXRhU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU2VydmljZU5hbWVzLkdldERhdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhcbiAgICB2aXN1YWxJZDogVmlzdWFsSWQsXG4gICAgZ2V0VHlwZTogR2V0RGF0YVR5cGUsXG4gICAgaWdub3JlQWxpYXNlczogYm9vbGVhbixcbiAgICBpZ25vcmVTZWxlY3Rpb246IGJvb2xlYW4sXG4gICAgaW5jbHVkZUFsbENvbHVtbnM6IGJvb2xlYW4sXG4gICAgbWF4Um93czogbnVtYmVyKTogUHJvbWlzZTxEYXRhVGFibGU+IHtcbiAgICAvLyBDcmVhdGUgYWxsIG9mIG91ciBwYXJhbWV0ZXJzXG4gICAgY29uc3QgdmVyYiA9IGdldFR5cGUgPT09IEdldERhdGFUeXBlLlN1bW1hcnkgPyBWZXJiSWQuR2V0RGF0YVN1bW1hcnlEYXRhIDogVmVyYklkLkdldFVuZGVybHlpbmdEYXRhO1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLklnbm9yZUFsaWFzZXNdID0gaWdub3JlQWxpYXNlcztcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLklnbm9yZVNlbGVjdGlvbl0gPSBpZ25vcmVTZWxlY3Rpb247XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5JbmNsdWRlQWxsQ29sdW1uc10gPSBpbmNsdWRlQWxsQ29sdW1ucztcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLk1heFJvd3NdID0gbWF4Um93cztcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxEYXRhVGFibGU+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBVbmRlcmx5aW5nRGF0YVRhYmxlO1xuICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZShyZXNwb25zZURhdGEuZGF0YSwgcmVzcG9uc2VEYXRhLmlzU3VtbWFyeSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5WaXN1YWxJZF06IHZpc3VhbElkIH07XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuR2V0U2VsZWN0ZWRNYXJrcywgcGFyYW1ldGVycykudGhlbjxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBTZWxlY3RlZE1hcmtzVGFibGU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEuZGF0YS5tYXAodGFibGUgPT4gdGhpcy5wcm9jZXNzUmVzdWx0c1RhYmxlKHRhYmxlLCB0cnVlKSlcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5WaXN1YWxJZF06IHZpc3VhbElkIH07XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuR2V0SGlnaGxpZ2h0ZWRNYXJrcywgcGFyYW1ldGVycykudGhlbjxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBIaWdobGlnaHRlZE1hcmtzVGFibGU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEuZGF0YS5tYXAodGFibGUgPT4gdGhpcy5wcm9jZXNzUmVzdWx0c1RhYmxlKHRhYmxlLCB0cnVlKSlcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YVNvdXJjZURhdGFBc3luYyhcbiAgICBkYXRhU291cmNlSWQ6IHN0cmluZyxcbiAgICBpZ25vcmVBbGlhc2VzOiBib29sZWFuLFxuICAgIG1heFJvd3M6IG51bWJlcixcbiAgICBjb2x1bW5zVG9JbmNsdWRlOiBBcnJheTxzdHJpbmc+KTogUHJvbWlzZTxEYXRhVGFibGU+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5EYXRhU291cmNlSWRdOiBkYXRhU291cmNlSWQsXG4gICAgICBbUGFyYW1ldGVySWQuSWdub3JlQWxpYXNlc106IGlnbm9yZUFsaWFzZXMsXG4gICAgICBbUGFyYW1ldGVySWQuTWF4Um93c106IG1heFJvd3MsXG4gICAgICBbUGFyYW1ldGVySWQuQ29sdW1uc1RvSW5jbHVkZV06IGNvbHVtbnNUb0luY2x1ZGUsXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldERhdGFTb3VyY2VEYXRhLCBwYXJhbWV0ZXJzKS50aGVuPERhdGFUYWJsZT4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2UucmVzdWx0IGFzIFVuZGVybHlpbmdEYXRhVGFibGU7XG4gICAgICByZXR1cm4gdGhpcy5wcm9jZXNzUmVzdWx0c1RhYmxlKHJlc3BvbnNlRGF0YS5kYXRhLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcHJvY2Vzc1Jlc3VsdHNUYWJsZShyZXNwb25zZURhdGE6IERhdGFUYWJsZUludGVybmFsQ29udHJhY3QsIGlzU3VtbWFyeTogYm9vbGVhbik6IERhdGFUYWJsZSB7XG4gICAgY29uc3QgaGVhZGVycyA9IHJlc3BvbnNlRGF0YS5oZWFkZXJzLm1hcChoID0+IG5ldyBDb2x1bW4oaC5maWVsZENhcHRpb24sXG4gICAgICBoLmRhdGFUeXBlLFxuICAgICAgaC5pc1JlZmVyZW5jZWQsXG4gICAgICBoLmluZGV4KSk7XG4gICAgLy8gVE9ETyBUaGlzIHNob3VsZCBiZSBjb250cm9sbGVkIGJ5IGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBhcGkgd2lsbCByZXNwb25kIG1hcmtzIGluZm8gb3Igbm90XG4gICAgbGV0IG1hcmtzO1xuICAgIGlmIChyZXNwb25zZURhdGEubWFya3MpIHtcbiAgICAgIG1hcmtzID0gcmVzcG9uc2VEYXRhLm1hcmtzLm1hcChoID0+IG5ldyBNYXJrSW5mbyhoLnR5cGUsXG4gICAgICAgIGguY29sb3IsXG4gICAgICAgIGgudHVwbGVJZCkpO1xuICAgIH1cbiAgICBjb25zdCB0YWJsZSA9IHJlc3BvbnNlRGF0YS5kYXRhVGFibGUubWFwKHJvdyA9PiB7XG4gICAgICByZXR1cm4gcm93Lm1hcChjZWxsID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRhVmFsdWUoY2VsbC52YWx1ZSwgY2VsbC5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChtYXJrcykge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhVGFibGUodGFibGUsIGhlYWRlcnMsIHRhYmxlLmxlbmd0aCwgaXNTdW1tYXJ5LCBtYXJrcyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0YVRhYmxlKHRhYmxlLCBoZWFkZXJzLCB0YWJsZS5sZW5ndGgsIGlzU3VtbWFyeSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvR2V0RGF0YVNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0IHsgSW50ZXJuYWxBcGlEaXNwYXRjaGVyLCBNb2RlbCwgTm90aWZpY2F0aW9uLCBOb3RpZmljYXRpb25JZCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UsIFVucmVnaXN0ZXJGbiB9IGZyb20gJy4uL05vdGlmaWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuY2xhc3MgUmVnaXN0cmF0aW9uIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2ZpbHRlckZuOiAobm90aWZpY2F0aW9uTW9kZWw6IE1vZGVsKSA9PiBib29sZWFuLFxuICAgIHByaXZhdGUgX2NhbGxiYWNrRm46IChub3RpZmljYXRpb25Nb2RlbDogTW9kZWwpID0+IHZvaWQpIHtcbiAgICAvLyBOb3RoaW5nIEhlcmVcbiAgfVxuXG4gIHB1YmxpYyBvbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb25Nb2RlbDogTW9kZWwpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZmlsdGVyRm4obm90aWZpY2F0aW9uTW9kZWwpKSB7XG4gICAgICB0aGlzLl9jYWxsYmFja0ZuKG5vdGlmaWNhdGlvbk1vZGVsKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblNlcnZpY2VJbXBsIGltcGxlbWVudHMgTm90aWZpY2F0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgX2hhbmRsZXJzOiB7IFtub3RpZmljYXRpb25JZDogc3RyaW5nXTogQXJyYXk8UmVnaXN0cmF0aW9uPiB9O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc3BhdGNoZXI6IEludGVybmFsQXBpRGlzcGF0Y2hlcikge1xuICAgIHRoaXMuX2hhbmRsZXJzID0ge307XG4gICAgdGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyTm90aWZpY2F0aW9uSGFuZGxlcih0aGlzLm9uTm90aWZpY2F0aW9uLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuTm90aWZpY2F0aW9uO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVySGFuZGxlcihpZDogTm90aWZpY2F0aW9uSWQsIGZpbHRlckZuOiAobW9kZWw6IE1vZGVsKSA9PiBib29sZWFuLCBoYW5kbGVyOiAobW9kZWw6IE1vZGVsKSA9PiB2b2lkKTogVW5yZWdpc3RlckZuIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuX2hhbmRsZXJzW2lkXSB8fCBuZXcgQXJyYXk8UmVnaXN0cmF0aW9uPigpO1xuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbiA9IG5ldyBSZWdpc3RyYXRpb24oZmlsdGVyRm4sIGhhbmRsZXIpO1xuICAgIGhhbmRsZXJzLnB1c2gocmVnaXN0cmF0aW9uKTtcbiAgICB0aGlzLl9oYW5kbGVyc1tpZF0gPSBoYW5kbGVycztcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5yZW1vdmVSZWdpc3RyYXRpb24oaWQsIHJlZ2lzdHJhdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGhhc0hhbmRsZXJzRm9yTm90aWZpY2F0aW9uVHlwZShpZDogTm90aWZpY2F0aW9uSWQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFuZGxlcnMuaGFzT3duUHJvcGVydHkoaWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNIYW5kbGVyc0Zvck5vdGlmaWNhdGlvblR5cGUobm90aWZpY2F0aW9uLm5vdGlmaWNhdGlvbklkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEdvIHRocm91Z2ggYW5kIGNoZWNrIGZvciBhbGwgdGhlIGhhbmRsZXJzIG9mIHRoaXMgcGFydGljdWxhciBub3RpZmljYXRpb25cbiAgICB0aGlzLl9oYW5kbGVyc1tub3RpZmljYXRpb24ubm90aWZpY2F0aW9uSWRdLmZvckVhY2goaCA9PiBoLm9uTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbi5kYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVJlZ2lzdHJhdGlvbihpZDogTm90aWZpY2F0aW9uSWQsIHJlZ2lzdHJhdGlvbjogUmVnaXN0cmF0aW9uKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc0hhbmRsZXJzRm9yTm90aWZpY2F0aW9uVHlwZShpZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9oYW5kbGVyc1tpZF0gPSB0aGlzLl9oYW5kbGVyc1tpZF0uZmlsdGVyKHJlZyA9PiByZWcgIT09IHJlZ2lzdHJhdGlvbik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvTm90aWZpY2F0aW9uU2VydmljZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIE1vZGVsLFxuICBQYXJhbWV0ZXJJZCxcbiAgUGFyYW1ldGVySW5mbyxcbiAgU2hlZXRQYXRoLFxuICBWZXJiSWQsXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vU2VydmljZUltcGxCYXNlJztcblxuaW1wb3J0IHsgUGFyYW1ldGVySW1wbCB9IGZyb20gJy4uLy4uL0ltcGwvUGFyYW1ldGVySW1wbCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXIgfSBmcm9tICcuLi8uLi9QYXJhbWV0ZXInO1xuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2UgfSBmcm9tICcuLi9QYXJhbWV0ZXJzU2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi8uLi9UYWJsZWF1RXJyb3InO1xuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyc1NlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgUGFyYW1ldGVyc1NlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5QYXJhbWV0ZXJzO1xuICB9XG5cbiAgcHVibGljIGdldFBhcmFtZXRlcnNGb3JTaGVldEFzeW5jKHNoZWV0UGF0aDogU2hlZXRQYXRoLCBzaGVldDogQ29udHJhY3QuU2hlZXQpOiBQcm9taXNlPEFycmF5PFBhcmFtZXRlcj4+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLlNoZWV0UGF0aF06IHNoZWV0UGF0aFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXRQYXJhbWV0ZXJzRm9yU2hlZXQsIHBhcmFtZXRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gVE9ETyAtIENoZWNrIGZvciBlcnJvclxuXG4gICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5yZXN1bHQgYXMgQXJyYXk8UGFyYW1ldGVySW5mbz47XG4gICAgICByZXR1cm4gcmVzdWx0Lm1hcChwYXJhbWV0ZXJJbmZvID0+IHtcbiAgICAgICAgY29uc3QgaW1wbCA9IG5ldyBQYXJhbWV0ZXJJbXBsKHBhcmFtZXRlckluZm8pO1xuICAgICAgICByZXR1cm4gbmV3IFBhcmFtZXRlcihpbXBsLCBzaGVldCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VQYXJhbWV0ZXJWYWx1ZUFzeW5jKGZpZWxkTmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxQYXJhbWV0ZXJJbmZvPiB7XG4gICAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5QYXJhbWV0ZXJGaWVsZE5hbWVdOiBmaWVsZE5hbWUsXG4gICAgICBbUGFyYW1ldGVySWQuUGFyYW1ldGVyVmFsdWVdOiBuZXdWYWx1ZVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5DaGFuZ2VQYXJhbWV0ZXJWYWx1ZSwgcGFyYW1ldGVycykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5yZXN1bHQgYXMgUGFyYW1ldGVySW5mbztcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZmluZFBhcmFtZXRlckJ5TmFtZUFzeW5jKG5hbWU6IHN0cmluZywgc2hlZXQ6IENvbnRyYWN0LlNoZWV0KTogUHJvbWlzZTxQYXJhbWV0ZXIgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gdGhpcy5maW5kUGFyYW1ldGVyQXN5bmMoc2hlZXQsIG5hbWUsIHVuZGVmaW5lZCk7XG4gIH1cblxuICBwdWJsaWMgZmluZFBhcmFtZXRlckJ5R2xvYmFsRmllbGROYW1lQXN5bmMoZmllbGROYW1lOiBzdHJpbmcsIHNoZWV0OiBDb250cmFjdC5TaGVldCk6IFByb21pc2U8UGFyYW1ldGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIHRoaXMuZmluZFBhcmFtZXRlckFzeW5jKHNoZWV0LCB1bmRlZmluZWQsIGZpZWxkTmFtZSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRQYXJhbWV0ZXJBc3luYyhcbiAgICBzaGVldDogQ29udHJhY3QuU2hlZXQsXG4gICAgbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICAgIGZpZWxkTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogUHJvbWlzZTxQYXJhbWV0ZXIgfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuUGFyYW1ldGVyQ2FwdGlvbl0gPSBuYW1lO1xuICAgIH0gZWxzZSBpZiAoZmllbGROYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuUGFyYW1ldGVyRmllbGROYW1lXSA9IGZpZWxkTmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsICduYW1lIG9yIGZpZWxkTmFtZSBtdXN0IGJlIHByb3ZpZGVkIHRvIGZpbmQgcGFyYW1ldGVyJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuRmluZFBhcmFtZXRlciwgcGFyYW1ldGVycykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZU9mUGFyYW1ldGVySW5mbyA9IChvYmplY3Q6IE1vZGVsKTogb2JqZWN0IGlzIFBhcmFtZXRlckluZm8gPT4ge1xuICAgICAgICByZXR1cm4gJ2ZpZWxkTmFtZScgaW4gb2JqZWN0O1xuICAgICAgfTtcblxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayB0byBzZWUgaWYgd2UgZ290IGEgdmFsaWQgcmVzcG9uc2UgYmFjayBhZ2FpblxuICAgICAgaWYgKGluc3RhbmNlT2ZQYXJhbWV0ZXJJbmZvKHJlc3BvbnNlLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0IGFzIFBhcmFtZXRlckluZm87XG4gICAgICAgIGNvbnN0IGltcGwgPSBuZXcgUGFyYW1ldGVySW1wbChyZXN1bHQpO1xuICAgICAgICByZXR1cm4gbmV3IFBhcmFtZXRlcihpbXBsLCBzaGVldCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1BhcmFtZXRlcnNTZXJ2aWNlSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uSWQsIFBhcmFtZXRlckluZm8gfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgfSBmcm9tICcuLi9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcbmltcG9ydCB7IFBhcmFtZXRlckNoYW5nZWRFdmVudCB9IGZyb20gJy4uL0V2ZW50cy9QYXJhbWV0ZXJDaGFuZ2VkRXZlbnQnO1xuaW1wb3J0IHsgRGF0YVZhbHVlIH0gZnJvbSAnLi4vTW9kZWxzL0dldERhdGFNb2RlbHMnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL05vdGlmaWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9QYXJhbWV0ZXJzU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXIgfSBmcm9tICcuLi9TaW5nbGVFdmVudE1hbmFnZXInO1xuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCB9IGZyb20gJy4vU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCc7XG5cbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5pbXBvcnQgeyBQYXJhbSB9IGZyb20gJy4uL1V0aWxzL1BhcmFtJztcblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckltcGwge1xuICBwcml2YXRlIF9hbGxvd2FibGVWYWx1ZXM6IENvbnRyYWN0LlBhcmFtZXRlckRvbWFpblJlc3RyaWN0aW9uO1xuICBwcml2YXRlIF9nbG9iYWxGaWVsZE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFyYW1ldGVySW5mbzogUGFyYW1ldGVySW5mbztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyYW1ldGVySW5mbzogUGFyYW1ldGVySW5mbykge1xuICAgIHRoaXMuc2V0UGFyYW1ldGVySW5mbyhwYXJhbWV0ZXJJbmZvKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJJbmZvLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1cnJlbnRWYWx1ZSgpOiBEYXRhVmFsdWUge1xuICAgIHJldHVybiBuZXcgRGF0YVZhbHVlKHRoaXMuX3BhcmFtZXRlckluZm8uY3VycmVudFZhbHVlLnZhbHVlLCB0aGlzLl9wYXJhbWV0ZXJJbmZvLmN1cnJlbnRWYWx1ZS5mb3JtYXR0ZWRWYWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGFUeXBlKCk6IENvbnRyYWN0LkRhdGFUeXBlIHtcbiAgICByZXR1cm4gSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLmRhdGFUeXBlLmNvbnZlcnQodGhpcy5fcGFyYW1ldGVySW5mby5kYXRhVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb2JhbEZpZWxkTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWxsb3dhYmxlVmFsdWVzKCk6IENvbnRyYWN0LlBhcmFtZXRlckRvbWFpblJlc3RyaWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dhYmxlVmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVZhbHVlQXN5bmMobmV3VmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBEYXRlKTogUHJvbWlzZTxEYXRhVmFsdWU+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKG5ld1ZhbHVlLCAnbmV3VmFsdWUnKTtcblxuICAgIGxldCBjb2VyY2VkVmFsdWUgPSBQYXJhbS5zZXJpYWxpemVQYXJhbXRlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICBjb25zdCBwYXJhbWV0ZXJzU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFBhcmFtZXRlcnNTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycyk7XG4gICAgcmV0dXJuIHBhcmFtZXRlcnNTZXJ2aWNlLmNoYW5nZVBhcmFtZXRlclZhbHVlQXN5bmModGhpcy5fZ2xvYmFsRmllbGROYW1lLCBjb2VyY2VkVmFsdWUpLnRoZW4ocGFyYW1ldGVySW5mbyA9PiB7XG4gICAgICB0aGlzLnNldFBhcmFtZXRlckluZm8ocGFyYW1ldGVySW5mbyk7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB3aGljaCBnb2VzIHRocm91Z2ggYW5kIHJlZ2lzdGVycyBlYWNoIGV2ZW50IHR5cGUgdGhpcyBpbXBsIGtub3dzIGFib3V0XG4gICAqIHdpdGggdGhlIE5vdGlmaWNhdGlvblNlcnZpY2UuIEl0IHJldHVybnMgYW4gYXJyYXkgb2YgU2luZ2xlRXZlbnRNYW5hZ2VyIG9iamVjdHMgd2hpY2hcbiAgICogY2FuIHRoZW4gYmUgcGFzc2VkIHRvIGFuIEV2ZW50TGlzdGVuZXJNYW5hZ2VyIHRvIGhhbmRsZSB1c2VyIHJlZ2lzdHJhdGlvbiAvIHVucmVnaXN0cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gc2hlZXQgVGhlIHNoZWV0IG9iamVjdCB3aGljaCB3aWxsIGJlIGluY2x1ZGVkIHdpdGggdGhlIGV2ZW50IG5vdGlmaWNhdGlvbnNcbiAgICogQHJldHVybnMge0FycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj59IENvbGxlY3Rpb24gb2YgZXZlbnQgbWFuYWdlcnMgdG8gcGFzcyB0byBhbiBFdmVudExpc3RlbmVyTWFuYWdlclxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVFdmVudHMoc2hlZXQ6IENvbnRyYWN0LlNoZWV0KTogQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUludGVybmFsVmFsdWUoc2hlZXQsICdzaGVldCcpO1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+KCk7XG4gICAgbGV0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2U7XG5cbiAgICB0cnkge1xuICAgICAgbm90aWZpY2F0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPE5vdGlmaWNhdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5Ob3RpZmljYXRpb24pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgdGhpcyBzZXJ2aWNlIHJlZ2lzdGVyZWQsIGp1c3QgcmV0dXJuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFsbCBvZiB0aGUgZXZlbnQgbWFuYWdlcnMgd2UnbGwgbmVlZCAob25lIGZvciBlYWNoIGV2ZW50IHR5cGUpXG4gICAgY29uc3QgcGFyYW1ldGVyRXZlbnQgPSBuZXcgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbDxQYXJhbWV0ZXJDaGFuZ2VkRXZlbnQ+KENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuUGFyYW1ldGVyQ2hhbmdlZCk7XG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuUGFyYW1ldGVyQ2hhbmdlZCwgKG1vZGVsKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSBtb2RlbCBhcyBzdHJpbmc7XG4gICAgICByZXR1cm4gZmllbGROYW1lID09PSB0aGlzLl9nbG9iYWxGaWVsZE5hbWU7XG4gICAgfSwgKGZpZWxkTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBwYXJhbWV0ZXJFdmVudC50cmlnZ2VyRXZlbnQoKCkgPT4gbmV3IFBhcmFtZXRlckNoYW5nZWRFdmVudChmaWVsZE5hbWUsIHNoZWV0KSk7XG4gICAgfSk7XG5cbiAgICByZXN1bHRzLnB1c2gocGFyYW1ldGVyRXZlbnQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwcml2YXRlIHNldFBhcmFtZXRlckluZm8ocGFyYW1ldGVySW5mbzogUGFyYW1ldGVySW5mbyk6IHZvaWQge1xuICAgIHRoaXMuX3BhcmFtZXRlckluZm8gPSBwYXJhbWV0ZXJJbmZvO1xuICAgIHRoaXMuX2dsb2JhbEZpZWxkTmFtZSA9IHBhcmFtZXRlckluZm8uZmllbGROYW1lO1xuXG4gICAgY29uc3QgdHlwZSA9IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5hbGxvd2FibGVWYWx1ZXMuY29udmVydChwYXJhbWV0ZXJJbmZvLmFsbG93YWJsZVZhbHVlc1R5cGUpO1xuICAgIGxldCBsaXN0VmFsdWVzOiBBcnJheTxEYXRhVmFsdWU+IHwgdW5kZWZpbmVkO1xuICAgIGxldCBtaW5WYWx1ZTogRGF0YVZhbHVlIHwgdW5kZWZpbmVkO1xuICAgIGxldCBtYXhWYWx1ZTogRGF0YVZhbHVlIHwgdW5kZWZpbmVkO1xuICAgIGxldCBzdGVwU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIGxldCBkYXRlU3RlcFBlcmlvZDogQ29udHJhY3QuUGVyaW9kVHlwZSB8IHVuZGVmaW5lZDtcblxuICAgIGlmICh0eXBlID09PSBDb250cmFjdC5QYXJhbWV0ZXJWYWx1ZVR5cGUuTGlzdCkge1xuICAgICAgY29uc3QgdmFsdWVzID0gcGFyYW1ldGVySW5mby5hbGxvd2FibGVWYWx1ZXMgfHwgW107XG4gICAgICBsaXN0VmFsdWVzID0gdmFsdWVzLm1hcCh2YWwgPT4gbmV3IERhdGFWYWx1ZSh2YWwudmFsdWUsIHZhbC5mb3JtYXR0ZWRWYWx1ZSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gQ29udHJhY3QuUGFyYW1ldGVyVmFsdWVUeXBlLlJhbmdlKSB7XG4gICAgICBtaW5WYWx1ZSA9IHBhcmFtZXRlckluZm8ubWluVmFsdWUgJiYgbmV3IERhdGFWYWx1ZShwYXJhbWV0ZXJJbmZvLm1pblZhbHVlLnZhbHVlLCBwYXJhbWV0ZXJJbmZvLm1pblZhbHVlLmZvcm1hdHRlZFZhbHVlKTtcbiAgICAgIG1heFZhbHVlID0gcGFyYW1ldGVySW5mby5tYXhWYWx1ZSAmJiBuZXcgRGF0YVZhbHVlKHBhcmFtZXRlckluZm8ubWF4VmFsdWUudmFsdWUsIHBhcmFtZXRlckluZm8ubWF4VmFsdWUuZm9ybWF0dGVkVmFsdWUpO1xuICAgICAgc3RlcFNpemUgPSBwYXJhbWV0ZXJJbmZvLnN0ZXBTaXplO1xuICAgICAgZGF0ZVN0ZXBQZXJpb2QgPSBwYXJhbWV0ZXJJbmZvLmRhdGVTdGVwUGVyaW9kICYmXG4gICAgICAgIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5kYXRlU3RlcFBlcmlvZC5jb252ZXJ0KHBhcmFtZXRlckluZm8uZGF0ZVN0ZXBQZXJpb2QpO1xuICAgIH1cblxuICAgIHRoaXMuX2FsbG93YWJsZVZhbHVlcyA9IHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBhbGxvd2FibGVWYWx1ZXM6IGxpc3RWYWx1ZXMsXG4gICAgICBtaW5WYWx1ZTogbWluVmFsdWUsXG4gICAgICBtYXhWYWx1ZTogbWF4VmFsdWUsXG4gICAgICBzdGVwU2l6ZTogc3RlcFNpemUsXG4gICAgICBkYXRlU3RlcFBlcmlvZDogZGF0ZVN0ZXBQZXJpb2RcbiAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1BhcmFtZXRlckltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9QYXJhbWV0ZXJzU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5pbXBvcnQgeyBUYWJsZWF1U2hlZXRFdmVudCB9IGZyb20gJy4vVGFibGVhdVNoZWV0RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyQ2hhbmdlZEV2ZW50IGV4dGVuZHMgVGFibGVhdVNoZWV0RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5QYXJhbWV0ZXJDaGFuZ2VkRXZlbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZ2xvYmFsRmllbGROYW1lOiBzdHJpbmcsIHNoZWV0OiBDb250cmFjdC5TaGVldCkge1xuICAgIHN1cGVyKENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuUGFyYW1ldGVyQ2hhbmdlZCwgc2hlZXQpO1xuICB9XG5cbiAgcHVibGljIGdldFBhcmFtZXRlckFzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuUGFyYW1ldGVyPiB7XG4gICAgLy8gQ2FsbCBkb3duIHRvIG91ciBzZXJ2aWNlIHRvIGdldCB0aGUgcGFyYW1ldGVyIGJhY2sgdmlhIGl0cyBmaWVsZCBuYW1lXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFBhcmFtZXRlcnNTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycyk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZmluZFBhcmFtZXRlckJ5R2xvYmFsRmllbGROYW1lQXN5bmModGhpcy5fZ2xvYmFsRmllbGROYW1lLCB0aGlzLnNoZWV0KS50aGVuKHBhcmFtZXRlciA9PiB7XG4gICAgICBpZiAocGFyYW1ldGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLk1pc3NpbmdQYXJhbWV0ZXIsIGBDYW5ub3QgZmluZCBwYXJhbWV0ZXI6ICR7dGhpcy5fZ2xvYmFsRmllbGROYW1lfWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvUGFyYW1ldGVyQ2hhbmdlZEV2ZW50LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV2ZW50TGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi9FdmVudExpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBQYXJhbWV0ZXJJbXBsIH0gZnJvbSAnLi9JbXBsL1BhcmFtZXRlckltcGwnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBQYXJhbWV0ZXIgY29udHJhY3QuIENhbGxzIGRvd24gdG8gdGhlIGltcGxcbiAqIGNsYXNzIGZvciBhbG1vc3QgYWxsIG9mIHRoZSB3b3JrIGl0IGRvZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXIgZXh0ZW5kcyBFdmVudExpc3RlbmVyTWFuYWdlciBpbXBsZW1lbnRzIENvbnRyYWN0LlBhcmFtZXRlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtZXRlckltcGw6IFBhcmFtZXRlckltcGwsIHNoZWV0OiBDb250cmFjdC5TaGVldCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIG91ciBldmVudCBoYW5kbGluZyBmb3IgdGhpcyBjbGFzc1xuICAgIHRoaXMucGFyYW1ldGVySW1wbC5pbml0aWFsaXplRXZlbnRzKHNoZWV0KS5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdFdmVudFR5cGUoZSkpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBjdXJyZW50VmFsdWUoKTogQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJJbXBsLmN1cnJlbnRWYWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YVR5cGUoKTogQ29udHJhY3QuRGF0YVR5cGUge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwuZGF0YVR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFsbG93YWJsZVZhbHVlcygpOiBDb250cmFjdC5QYXJhbWV0ZXJEb21haW5SZXN0cmljdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5hbGxvd2FibGVWYWx1ZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5pZDtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VWYWx1ZUFzeW5jKG5ld1ZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgRGF0ZSk6IFByb21pc2U8Q29udHJhY3QuRGF0YVZhbHVlPiB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5jaGFuZ2VWYWx1ZUFzeW5jKG5ld1ZhbHVlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvUGFyYW1ldGVyLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBQYXJhbWV0ZXJJZCxcbiAgUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMsXG4gIFNlbGVjdGlvblVwZGF0ZVR5cGUgYXMgU2VsZWN0aW9uVXBkYXRlVHlwZUludGVybmFsLFxuICBWZXJiSWQsXG4gIFZpc3VhbElkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7XG4gIERpbWVuc2lvblNlbGVjdGlvbk1vZGVsLFxuICBIaWVyYXJjaGljYWxTZWxlY3Rpb25Nb2RlbCxcbiAgUmFuZ2VTZWxlY3Rpb25Nb2RlbCxcbiAgU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyLFxuICBUdXBsZVNlbGVjdGlvbk1vZGVsLFxuICBWYWx1ZVNlbGVjdGlvbk1vZGVsXG59IGZyb20gJy4uLy4uL01vZGVscy9TZWxlY3Rpb25Nb2RlbHMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL1NlcnZpY2VJbXBsQmFzZSc7XG5cbmltcG9ydCB7IFNlbGVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9TZWxlY3Rpb25TZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uL1RhYmxlYXVFcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25TZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFNlbGVjdGlvblNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5TZWxlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNsZWFyIGFsbCB0aGUgc2VsZWN0ZWQgbWFya3MgZm9yIHRoZSBnaXZlbiB3b3Jrc2hlZXQuXG4gICAqXG4gICAqIEBwYXJhbSB2aXN1YWxJZFxuICAgKi9cbiAgcHVibGljIGNsZWFyU2VsZWN0ZWRNYXJrc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkNsZWFyU2VsZWN0ZWRNYXJrcywgcGFyYW1ldGVycykudGhlbjx2b2lkPihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm47IC8vIEV4cGVjdGluZyBhbiBlbXB0eSBtb2RlbCBhbmQgaGVuY2UgdGhlIHZvaWQgcmVzcG9uc2UuXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHNlbGVjdCBtYXJrcyBmb3IgdGhlIGdpdmVuIHdvcmtzaGVldC5cbiAgICpcbiAgICogQHBhcmFtIHZpc3VhbElkXG4gICAqIEBwYXJhbSBzZWxlY3Rpb25Dcml0ZXJpYVxuICAgKiBAcGFyYW0gc2VsZWN0aW9uVXBkYXRlVHlwZVxuICAgKi9cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlWYWx1ZUFzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCxcbiAgICBzZWxlY3Rpb25Dcml0ZXJpYXM6IEFycmF5PENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhPixcbiAgICBzZWxlY3Rpb25VcGRhdGVUeXBlOiBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHNlbGVjdGlvbkNyaXRlcmlhcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCAnU2VsZWN0aW9uIGNyaXRlcmlhIG1pc3NpbmcgZm9yIHNlbGVjdGluZyBtYXJrcyBieSB2YWx1ZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGlvblR5cGU6IHN0cmluZyA9IHRoaXMudmFsaWRhdGVTZWxlY3Rpb25VcGRhdGVUeXBlKHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICAgIGxldCBzZWxlY3Rpb25Dcml0ZXJpYVR5cGU6IFNlbGVjdGlvbkNyaXRlcmlhVHlwZSA9IHRoaXMudmFsaWRhdGVTZWxlY3Rpb25Dcml0ZXJpYShzZWxlY3Rpb25Dcml0ZXJpYXNbMF0pO1xuICAgIGxldCBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyID0gdGhpcy5wYXJzZVNlbGVjdGlvbk1hcmtzKHNlbGVjdGlvbkNyaXRlcmlhcywgc2VsZWN0aW9uQ3JpdGVyaWFUeXBlKTtcblxuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLlZpc3VhbElkXTogdmlzdWFsSWQsXG4gICAgICBbUGFyYW1ldGVySWQuU2VsZWN0aW9uVXBkYXRlVHlwZV06IHNlbGVjdGlvblR5cGVcbiAgICB9O1xuXG4gICAgc3dpdGNoIChzZWxlY3Rpb25Dcml0ZXJpYVR5cGUpIHtcbiAgICAgIGNhc2UgU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLkhpZXJhcmNoaWNhbFR5cGU6IHtcbiAgICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5IaWVyVmFsU2VsZWN0aW9uTW9kZWxzXSA9IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLmhpZXJNb2RlbEFycjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5SYW5nZVR5cGU6IHtcbiAgICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5RdWFudFJhbmdlU2VsZWN0aW9uTW9kZWxzXSA9IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLnF1YW50TW9kZWxBcnI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuRGltZW5zaW9uVHlwZToge1xuICAgICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkRpbVZhbFNlbGVjdGlvbk1vZGVsc10gPSBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5kaW1Nb2RlbEFycjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuU2VsZWN0QnlWYWx1ZSwgcGFyYW1ldGVycykudGhlbjx2b2lkPihyZXNwb25zZSA9PiB7XG4gICAgICAvLyBFeHBlY3RpbmcgYW4gZW1wdHkgbW9kZWwgYW5kIGhlbmNlIHRoZSB2b2lkIHJlc3BvbnNlLlxuICAgICAgcmV0dXJuO1xuICAgICAgLy8gVE9ETyBJbnZlc3RpZ2F0ZSB0aGUgZXJyb3IgcmVzcG9uc2Ugd2l0aCBtdWx0aXBsZSBvdXRwdXQgcGFyYW1zIGFuZCB0aHJvdyBlcnJvciBhY2NvcmRpbmdseS5cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICogTWV0aG9kIHRvIHNlbGVjdCBtYXJrcyBmb3IgdGhlIGdpdmVuIHdvcmtzaGVldC5cbiAqXG4gKiBAcGFyYW0gdmlzdWFsSWRcbiAqIEBwYXJhbSBNYXJrSW5mb1xuICogQHBhcmFtIHNlbGVjdGlvblVwZGF0ZVR5cGVcbiAqL1xuICBwdWJsaWMgc2VsZWN0TWFya3NCeUlkQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIG1hcmtzOiBBcnJheTxDb250cmFjdC5NYXJrSW5mbz4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChtYXJrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCAnTWFya3MgaW5mbyBtaXNzaW5nIGZvciBzZWxlY3RpbmcgbWFya3MgYnkgSWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb25UeXBlOiBzdHJpbmcgPSB0aGlzLnZhbGlkYXRlU2VsZWN0aW9uVXBkYXRlVHlwZShzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgICBsZXQgc2VsZWN0aW9uTW9kZWxDb250YWluZXI6IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciA9IHRoaXMucGFyc2VTZWxlY3Rpb25JZHMobWFya3MpO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCxcbiAgICAgIFtQYXJhbWV0ZXJJZC5TZWxlY3Rpb25VcGRhdGVUeXBlXTogc2VsZWN0aW9uVHlwZSxcbiAgICAgIFtQYXJhbWV0ZXJJZC5TZWxlY3Rpb25dOiBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5zZWxlY3Rpb25cbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLlNlbGVjdEJ5VmFsdWUsIHBhcmFtZXRlcnMpLnRoZW48dm9pZD4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gRXhwZWN0aW5nIGFuIGVtcHR5IG1vZGVsIGFuZCBoZW5jZSB0aGUgdm9pZCByZXNwb25zZS5cbiAgICAgIHJldHVybjtcbiAgICAgIC8vIFRPRE8gSW52ZXN0aWdhdGUgdGhlIGVycm9yIHJlc3BvbnNlIHdpdGggbXVsdGlwbGUgb3V0cHV0IHBhcmFtcyBhbmQgdGhyb3cgZXJyb3IgYWNjb3JkaW5nbHkuXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHByZXBhcmUgdGhlIHByZXMgbW9kZWxzIGZvciBzZWxlY3Rpb24gYnkgTWFya3NJbmZvXG4gICAqIEBwYXJhbSBtYXJrc1xuICAgKi9cbiAgcHJpdmF0ZSBwYXJzZVNlbGVjdGlvbklkcyhtYXJrczogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+KTogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyIHtcbiAgICBsZXQgaWRzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgbGV0IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyOiBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIgPSBuZXcgU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJrcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHR1cGxlSWQ6IE51bWJlciB8IHVuZGVmaW5lZCA9IG1hcmtzW2ldLnR1cGxlSWQ7XG4gICAgICBpZiAodHVwbGVJZCAhPT0gdW5kZWZpbmVkICYmIHR1cGxlSWQgIT09IG51bGwpIHsgLy8gSWYgdHVwbGUgaWQgaXMgcHJvdmlkZWQgdXNlIHRoYXQgaW5zdGVhZCBvZiBwYWlyXG4gICAgICAgIGlkcy5wdXNoKHR1cGxlSWQudG9TdHJpbmcoKSk7IC8vIGNvbGxlY3QgdGhlIHR1cGxlIGlkc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkludGVybmFsRXJyb3IsICd0dXBsZUlkIHBhcnNpbmcgZXJyb3InKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlkcy5sZW5ndGggIT09IDApIHsgLy8gdHVwbGUgaWRzIGJhc2VkIHNlbGVjdGlvblxuICAgICAgbGV0IHR1cGxlU2VsZWN0aW9uTW9kZWw6IFR1cGxlU2VsZWN0aW9uTW9kZWwgPSBuZXcgVHVwbGVTZWxlY3Rpb25Nb2RlbCgpO1xuICAgICAgdHVwbGVTZWxlY3Rpb25Nb2RlbC5zZWxlY3Rpb25UeXBlID0gJ3R1cGxlcyc7XG4gICAgICB0dXBsZVNlbGVjdGlvbk1vZGVsLm9iamVjdElkcyA9IGlkcztcbiAgICAgIHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLnNlbGVjdGlvbiA9IHR1cGxlU2VsZWN0aW9uTW9kZWw7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjtcbiAgfVxuICAvKipcbiAgICogTWV0aG9kIHRvIHByZXBhcmUgdGhlIHByZXMgbW9kZWxzIGZvciBzZWxlY3Rpb24gYnkgdmFsdWVzLlxuICAgKlxuICAgKiBTdXBwb3J0cyAzIHR5cGVzIGZvciBzZWxlY3Rpb246XG4gICAqIDEpIGhpZXJhcmNoaWNhbCB2YWx1ZSBiYXNlZCBzZWxlY3Rpb25cbiAgICogMikgcmFuZ2UgdmFsdWUgYmFzZWQgc2VsZWN0aW9uXG4gICAqIDMpIERpbWVuc2lvbiB2YWx1ZSBiYXNlZCBzZWxlY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIG1hcmtzXG4gICAqIEBwYXJhbSBoaWVyTW9kZWxBcnJcbiAgICogQHBhcmFtIGRpbU1vZGVsQXJyXG4gICAqIEBwYXJhbSBxdWFudE1vZGVsQXJyXG4gICAqIEBwYXJhbSBzZWxlY3Rpb25cbiAgICovXG4gIHByaXZhdGUgcGFyc2VTZWxlY3Rpb25NYXJrcyhzZWxlY3Rpb25Dcml0ZXJpYXM6IEFycmF5PENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhPixcbiAgICBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUpOiBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIge1xuICAgIGxldCBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyID0gbmV3IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lcigpO1xuICAgIGxldCBtaXhlZFNlbGVjdGlvbnNFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb25Dcml0ZXJpYXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0ID0gc2VsZWN0aW9uQ3JpdGVyaWFzW2ldO1xuICAgICAgaWYgKHN0LmZpZWxkTmFtZSAmJiAoc3QudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBzdC52YWx1ZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgbGV0IGNhdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnKFxcW1tBLVphLXowLTldK10pLionLCAnZycpO1xuICAgICAgICBsZXQgcmFuZ2VPcHRpb246IENvbnRyYWN0LlJhbmdlVmFsdWUgPSBzdC52YWx1ZSBhcyBDb250cmFjdC5SYW5nZVZhbHVlO1xuICAgICAgICBpZiAoY2F0UmVnZXgudGVzdChzdC5maWVsZE5hbWUpKSB7IC8vIEhpZXJhcmNoaWNhbCB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgICBpZiAoc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLkhpZXJhcmNoaWNhbFR5cGUpIHtcbiAgICAgICAgICAgIGxldCBoaWVyTW9kZWw6IEhpZXJhcmNoaWNhbFNlbGVjdGlvbk1vZGVsID0gdGhpcy5hZGRUb1BhcmFtc0xpc3Qoc3QuZmllbGROYW1lLCBzdC52YWx1ZSkgYXMgSGllcmFyY2hpY2FsU2VsZWN0aW9uTW9kZWw7XG4gICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5oaWVyTW9kZWxBcnIucHVzaChoaWVyTW9kZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXhlZFNlbGVjdGlvbnNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoKHJhbmdlT3B0aW9uIGFzIENvbnRyYWN0LlJhbmdlVmFsdWUpLm1pbiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgJiYgKHJhbmdlT3B0aW9uIGFzIENvbnRyYWN0LlJhbmdlVmFsdWUpLm1heCAhPT0gdW5kZWZpbmVkKSB7IC8vIFJhbmdlIHZhbHVlIHNlbGVjdGlvblxuICAgICAgICAgIGlmIChzZWxlY3Rpb25UeXBlID09PSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuUmFuZ2VUeXBlKSB7XG4gICAgICAgICAgICBsZXQgcXVhbnRNb2RlbDogUmFuZ2VTZWxlY3Rpb25Nb2RlbCA9IHRoaXMuYWRkVG9SYW5nZVBhcmFtc0xpc3Qoc3QuZmllbGROYW1lLCByYW5nZU9wdGlvbik7XG4gICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5xdWFudE1vZGVsQXJyLnB1c2gocXVhbnRNb2RlbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1peGVkU2VsZWN0aW9uc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHsgLy8gRGltZW5zaW9uIHZhbHVlIHNlbGVjdGlvblxuICAgICAgICAgIGlmIChzZWxlY3Rpb25UeXBlID09PSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuRGltZW5zaW9uVHlwZSkge1xuICAgICAgICAgICAgbGV0IGRpbU1vZGVsOiBEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbCA9IHRoaXMuYWRkVG9QYXJhbXNMaXN0KHN0LmZpZWxkTmFtZSwgc3QudmFsdWUpIGFzIERpbWVuc2lvblNlbGVjdGlvbk1vZGVsO1xuICAgICAgICAgICAgc2VsZWN0aW9uTW9kZWxDb250YWluZXIuZGltTW9kZWxBcnIucHVzaChkaW1Nb2RlbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1peGVkU2VsZWN0aW9uc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtaXhlZFNlbGVjdGlvbnNFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkludGVybmFsRXJyb3IsICdTZWxlY3Rpb24gQ3JpdGVyaWEgcGFyc2luZyBlcnJvcicpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0aW9uTW9kZWxDb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHNlbGVjdGlvbkNyaXRlcmlhcyBWYWxpZGF0ZSBhbmQgZGV0ZXJtaW5lIHRoZSBzZWxlY3Rpb24gY3JpdGVyaWFzIHR5cGUuXG4gICAqL1xuICBwcml2YXRlIHZhbGlkYXRlU2VsZWN0aW9uQ3JpdGVyaWEoc2VsZWN0aW9uQ3JpdGVyaWE6IENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhKTogU2VsZWN0aW9uQ3JpdGVyaWFUeXBlIHtcbiAgICBsZXQgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uQ3JpdGVyaWFUeXBlO1xuICAgIC8vIERldGVybWluZSB0aGUgdHlwZSBvZiBzZWxlY3Rpb24sIHRoaXMgY29tbWFuZCBpcyBieSBsb29raW5nIGF0IHRoZSBmaXJzdCBzZWxlY3Rpb25cbiAgICBsZXQgY3JpdDogQ29udHJhY3QuU2VsZWN0aW9uQ3JpdGVyaWEgPSBzZWxlY3Rpb25Dcml0ZXJpYTtcblxuICAgIGxldCBjYXRSZWdleCA9IG5ldyBSZWdFeHAoJyhcXFtbQS1aYS16MC05XStdKS4qJywgJ2cnKTtcbiAgICBsZXQgcmFuZ2VPcHRpb246IENvbnRyYWN0LlJhbmdlVmFsdWUgPSBjcml0LnZhbHVlIGFzIENvbnRyYWN0LlJhbmdlVmFsdWU7XG5cbiAgICBpZiAoY3JpdC5maWVsZE5hbWUgJiYgKGNyaXQudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjcml0LnZhbHVlICE9PSBudWxsKSkge1xuICAgICAgaWYgKGNhdFJlZ2V4LnRlc3QoY3JpdC5maWVsZE5hbWUpKSB7IC8vIEhpZXJhcmNoaWNhbCB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgc2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5IaWVyYXJjaGljYWxUeXBlO1xuICAgICAgfSBlbHNlIGlmICgocmFuZ2VPcHRpb24gYXMgQ29udHJhY3QuUmFuZ2VWYWx1ZSkubWluICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgKHJhbmdlT3B0aW9uIGFzIENvbnRyYWN0LlJhbmdlVmFsdWUpLm1heCAhPT0gdW5kZWZpbmVkKSB7IC8vIFJhbmdlIHZhbHVlIHNlbGVjdGlvblxuICAgICAgICBzZWxlY3Rpb25UeXBlID0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLlJhbmdlVHlwZTtcbiAgICAgIH0gZWxzZSB7IC8vIERpbWVyc2lvbiB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgc2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5EaW1lbnNpb25UeXBlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgJ1NlbGVjdGlvbiBDcml0ZXJpYSBwYXJzaW5nIGVycm9yJyk7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3Rpb25UeXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB0cmFuc2Zvcm0gdGhlIGtleSB2YWx1ZSBwYWlyIGludG8gdmFsdWUgYmFzZWQgcHJlcyBtb2RlbCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZVNlbGVjdGlvbk1vZGVsXG4gICAqIEBwYXJhbSBmaWVsZE5hbWVcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBwcml2YXRlIGFkZFRvUGFyYW1zTGlzdChmaWVsZE5hbWU6IHN0cmluZywgdmFsdWU6IG9iamVjdCk6IFZhbHVlU2VsZWN0aW9uTW9kZWwge1xuICAgIGxldCB2YWx1ZVNlbGVjdGlvbk1vZGVsOiBWYWx1ZVNlbGVjdGlvbk1vZGVsID0gbmV3IFZhbHVlU2VsZWN0aW9uTW9kZWwoKTtcbiAgICBsZXQgbWFya1ZhbHVlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGxldCB2YWx1ZUFycjogQXJyYXk8c3RyaW5nPiA9IHZhbHVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBtYXJrVmFsdWVzLnB1c2godmFsdWVBcnJbaV0udG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcmtWYWx1ZXMucHVzaCh2YWx1ZS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICB2YWx1ZVNlbGVjdGlvbk1vZGVsLnF1YWxpZmllZEZpZWxkQ2FwdGlvbiA9IGZpZWxkTmFtZTtcbiAgICB2YWx1ZVNlbGVjdGlvbk1vZGVsLnNlbGVjdFZhbHVlcyA9IG1hcmtWYWx1ZXM7XG4gICAgcmV0dXJuIHZhbHVlU2VsZWN0aW9uTW9kZWw7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHRyYW5zZm9ybSB0aGUga2V5IHZhbHVlIHBhaXIgaW50byByYW5nZSBiYXNlZCBzZWxlY3Rpb24gcHJlcyBtb2RlbC5cbiAgICpcbiAgICogVE9ETzogTmVlZCB0byBoYW5kbGUgdGhlIHBhcnNpbmcgb2YgZGF0ZSB0eXBlIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlU2VsZWN0aW9uTW9kZWxcbiAgICogQHBhcmFtIGZpZWxkTmFtZVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIHByaXZhdGUgYWRkVG9SYW5nZVBhcmFtc0xpc3QoZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBDb250cmFjdC5SYW5nZVZhbHVlKTogUmFuZ2VTZWxlY3Rpb25Nb2RlbCB7XG4gICAgbGV0IHJhbmdlU2VsZWN0aW9uTW9kZWw6IFJhbmdlU2VsZWN0aW9uTW9kZWwgPSBuZXcgUmFuZ2VTZWxlY3Rpb25Nb2RlbCgpO1xuICAgIHJhbmdlU2VsZWN0aW9uTW9kZWwucXVhbGlmaWVkRmllbGRDYXB0aW9uID0gZmllbGROYW1lO1xuICAgIGlmICh2YWx1ZS5tYXggIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5tYXggIT09IG51bGwpIHtcbiAgICAgIHJhbmdlU2VsZWN0aW9uTW9kZWwubWF4VmFsdWUgPSB2YWx1ZS5tYXgudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLm1pbiAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLm1pbiAhPT0gbnVsbCkge1xuICAgICAgcmFuZ2VTZWxlY3Rpb25Nb2RlbC5taW5WYWx1ZSA9IHZhbHVlLm1pbi50b1N0cmluZygpO1xuICAgIH1cbiAgICByYW5nZVNlbGVjdGlvbk1vZGVsLmluY2x1ZGVkID0gdGhpcy52YWxpZGF0ZU51bGxPcHRpb25UeXBlKHZhbHVlLm51bGxPcHRpb24pO1xuICAgIHJldHVybiByYW5nZVNlbGVjdGlvbk1vZGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB2YWxpZGF0ZSB0aGUgc2VsZWN0aW9uIHVwZGF0ZSB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0gc2VsZWN0aW9uVXBkYXRlVHlwZVxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZVNlbGVjdGlvblVwZGF0ZVR5cGUoc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IHN0cmluZyB7XG4gICAgaWYgKHNlbGVjdGlvblVwZGF0ZVR5cGUgPT09IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUuUmVwbGFjZSkge1xuICAgICAgcmV0dXJuIFNlbGVjdGlvblVwZGF0ZVR5cGVJbnRlcm5hbC5SZXBsYWNlO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uVXBkYXRlVHlwZSA9PT0gQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZS5BZGQpIHtcbiAgICAgIHJldHVybiBTZWxlY3Rpb25VcGRhdGVUeXBlSW50ZXJuYWwuQWRkO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uVXBkYXRlVHlwZSA9PT0gQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZS5SZW1vdmUpIHtcbiAgICAgIHJldHVybiBTZWxlY3Rpb25VcGRhdGVUeXBlSW50ZXJuYWwuUmVtb3ZlO1xuICAgIH1cbiAgICByZXR1cm4gU2VsZWN0aW9uVXBkYXRlVHlwZUludGVybmFsLlJlcGxhY2U7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHZhbGlkYXRlIHRoZSBpbmNsdWRlIHR5cGUgZm9yIHJhbmdlIHNlbGVjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIG51bGxPcHRpb25cbiAgICovXG4gIHByaXZhdGUgdmFsaWRhdGVOdWxsT3B0aW9uVHlwZShudWxsT3B0aW9uOiBDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgICBpZiAobnVsbE9wdGlvbikge1xuICAgICAgaWYgKG51bGxPcHRpb24gPT09IENvbnRyYWN0LkZpbHRlck51bGxPcHRpb24uTnVsbFZhbHVlcykge1xuICAgICAgICByZXR1cm4gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMuSW5jbHVkZU51bGw7XG4gICAgICB9IGVsc2UgaWYgKG51bGxPcHRpb24gPT09IENvbnRyYWN0LkZpbHRlck51bGxPcHRpb24uTm9uTnVsbFZhbHVlcykge1xuICAgICAgICByZXR1cm4gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMuSW5jbHVkZU5vbk51bGw7XG4gICAgICB9IGVsc2UgaWYgKG51bGxPcHRpb24gPT09IENvbnRyYWN0LkZpbHRlck51bGxPcHRpb24uQWxsVmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBRdWFudGl0YXRpdmVJbmNsdWRlZFZhbHVlcy5JbmNsdWRlQWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBRdWFudGl0YXRpdmVJbmNsdWRlZFZhbHVlcy5JbmNsdWRlQWxsO1xuICB9XG5cbn1cblxuLyoqXG4gKiBFbnVtIGZvciB0aGUgZGlmZmVyZW50IHNlbGVjdGlvbiBjcml0ZXJpYSB0eXBlcy5cbiAqL1xuZW51bSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUge1xuICBIaWVyYXJjaGljYWxUeXBlID0gMSxcbiAgUmFuZ2VUeXBlID0gMixcbiAgRGltZW5zaW9uVHlwZSA9IDMsXG4gIFR1cGxlc1R5cGUgPSA0LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9TZWxlY3Rpb25TZXJ2aWNlSW1wbC50cyIsIi8qKlxuICogU2VsZWN0aW9uIE1vZGVsLlxuICovXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uTW9kZWwge1xuICBwdWJsaWMgcXVhbGlmaWVkRmllbGRDYXB0aW9uOiBzdHJpbmc7XG59XG5cbi8qKlxuICogVmFsdWUgYmFzZWQgc2VsZWN0aW9uIG1vZGVsLiBNZWFudCBmb3IgaGllcmFyY2hpY2FsLCByYW5nZSBhbmQgY2F0ZWdvcmljYWwgc2VsZWN0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFZhbHVlU2VsZWN0aW9uTW9kZWwgZXh0ZW5kcyBTZWxlY3Rpb25Nb2RlbCB7XG4gIHB1YmxpYyBzZWxlY3RWYWx1ZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbn1cblxuLyoqXG4gKiBIaWVyYXJjaGljYWwgdmFsdWUgc2VsZWN0aW9uIG1vZGVsXG4gKi9cbmV4cG9ydCBjbGFzcyBIaWVyYXJjaGljYWxTZWxlY3Rpb25Nb2RlbCBleHRlbmRzIFZhbHVlU2VsZWN0aW9uTW9kZWwge1xufVxuXG4vKipcbiAqIFJhbmdlIGJhc2VkIHZhbHVlIHNlbGVjdGlvbiBtb2RlbFxuICovXG5leHBvcnQgY2xhc3MgUmFuZ2VTZWxlY3Rpb25Nb2RlbCBleHRlbmRzIFNlbGVjdGlvbk1vZGVsIHtcbiAgcHVibGljIG1pblZhbHVlOiBzdHJpbmc7XG4gIHB1YmxpYyBtYXhWYWx1ZTogc3RyaW5nO1xuICBwdWJsaWMgaW5jbHVkZWQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEaW1lbnNpb24gdmFsdWUgc2VsZWN0aW9uIG1vZGVsXG4gKi9cbmV4cG9ydCBjbGFzcyBEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbCBleHRlbmRzIFZhbHVlU2VsZWN0aW9uTW9kZWwge1xufVxuLyoqXG4gKiBUdXBsZSBiYXNlZCBzZWxlY3Rpb24gbW9kZWxcbiAqL1xuZXhwb3J0IGNsYXNzIFR1cGxlU2VsZWN0aW9uTW9kZWwge1xuICBwdWJsaWMgc2VsZWN0aW9uVHlwZTogc3RyaW5nO1xuICBwdWJsaWMgb2JqZWN0SWRzOiBBcnJheTxzdHJpbmc+ID0gW107XG59XG5cbi8qKlxuICogQ29udGFpbmVyIGNsYXNzIHRvIHBvcHVsYXRlIGFsbCB0aGUgc2VsZWN0aW9uIG1vZGVscyB3aGVuIHBhcnNpbmcgaW5wdXRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciB7XG4gIHB1YmxpYyBoaWVyTW9kZWxBcnI6IEFycmF5PEhpZXJhcmNoaWNhbFNlbGVjdGlvbk1vZGVsPiA9IFtdO1xuICBwdWJsaWMgZGltTW9kZWxBcnI6IEFycmF5PERpbWVuc2lvblNlbGVjdGlvbk1vZGVsPiA9IFtdO1xuICBwdWJsaWMgcXVhbnRNb2RlbEFycjogQXJyYXk8UmFuZ2VTZWxlY3Rpb25Nb2RlbD4gPSBbXTtcbiAgcHVibGljIHNlbGVjdGlvbjogVHVwbGVTZWxlY3Rpb25Nb2RlbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9TZWxlY3Rpb25Nb2RlbHMudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGV4dGVybmFsIERhc2hib2FyZENvbnRlbnQgbmFtZXNwYWNlLlxuICogVGhpcyBkb2VzIG5vdCBmb2xsb3cgdGhlIEltcGwgcGF0dGVybiBhcyBEYXNoYm9hcmRDb250ZW50IGlzXG4gKiBjdXJyZW50bHkganVzdCBhIChzaW5nbGUpIHByb3BlcnR5IGJhZy5cbiAqL1xuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbnRlbnQgaW1wbGVtZW50cyBDb250cmFjdC5EYXNoYm9hcmRDb250ZW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Rhc2hib2FyZDogQ29udHJhY3QuRGFzaGJvYXJkKSB7IH1cblxuICBwdWJsaWMgZ2V0IGRhc2hib2FyZCgpOiBDb250cmFjdC5EYXNoYm9hcmQge1xuICAgIHJldHVybiB0aGlzLl9kYXNoYm9hcmQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0Rhc2hib2FyZENvbnRlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbkVudmlyb25tZW50IH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyBhcyBFbnVtTWFwcGluZ3MgfSBmcm9tICcuLi8uLi9BcGlTaGFyZWQnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBleHRlcm5hbCBlbnZpcm9ubWVudCBuYW1lc3BhY2UuXG4gKiBFbnZpcm9ubWVudCBkb2VzIG5vdCBmb2xsb3cgdGhlIEltcGwgcGF0dGVybiBhcyBpdCBpc1xuICoganVzdCBhIHByb3BlcnR5IGJhZy5cbiAqL1xuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IGltcGxlbWVudHMgQ29udHJhY3QuRW52aXJvbm1lbnQge1xuICBwcml2YXRlIF9hcGlWZXJzaW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbnRleHQ6IENvbnRyYWN0LkV4dGVuc2lvbkNvbnRleHQ7XG4gIHByaXZhdGUgX2xhbmd1YWdlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nO1xuICBwcml2YXRlIF9tb2RlOiBDb250cmFjdC5FeHRlbnNpb25Nb2RlO1xuICBwcml2YXRlIF9vcGVyYXRpbmdTeXN0ZW06IHN0cmluZztcbiAgcHJpdmF0ZSBfdGFibGVhdVZlcnNpb246IHN0cmluZztcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZXh0ZW5zaW9uRW52aXJvbm1lbnQ6IEV4dGVuc2lvbkVudmlyb25tZW50KSB7XG4gICAgdGhpcy5fYXBpVmVyc2lvbiA9IGV4dGVuc2lvbkVudmlyb25tZW50LmFwaVZlcnNpb247XG4gICAgdGhpcy5fY29udGV4dCA9IEVudW1NYXBwaW5ncy5leHRlbnNpb25Db250ZXh0LmNvbnZlcnQoZXh0ZW5zaW9uRW52aXJvbm1lbnQuZXh0ZW5zaW9uQ29udGV4dCk7XG4gICAgdGhpcy5fbGFuZ3VhZ2UgPSBleHRlbnNpb25FbnZpcm9ubWVudC5leHRlbnNpb25MYW5ndWFnZTtcbiAgICB0aGlzLl9sb2NhbGUgPSBleHRlbnNpb25FbnZpcm9ubWVudC5leHRlbnNpb25Mb2NhbGU7XG4gICAgdGhpcy5fbW9kZSA9IEVudW1NYXBwaW5ncy5leHRlbnNpb25Nb2RlLmNvbnZlcnQoZXh0ZW5zaW9uRW52aXJvbm1lbnQuZXh0ZW5zaW9uTW9kZSk7XG4gICAgdGhpcy5fb3BlcmF0aW5nU3lzdGVtID0gZXh0ZW5zaW9uRW52aXJvbm1lbnQub3BlcmF0aW5nU3lzdGVtO1xuICAgIHRoaXMuX3RhYmxlYXVWZXJzaW9uID0gZXh0ZW5zaW9uRW52aXJvbm1lbnQudGFibGVhdVZlcnNpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFwaVZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpVmVyc2lvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29udGV4dCgpOiBDb250cmFjdC5FeHRlbnNpb25Db250ZXh0IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbGFuZ3VhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1vZGUoKTogQ29udHJhY3QuRXh0ZW5zaW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9wZXJhdGluZ1N5c3RlbSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9vcGVyYXRpbmdTeXN0ZW07XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRhYmxlYXVWZXJzaW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlYXVWZXJzaW9uO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9FbnZpcm9ubWVudC50cyIsImltcG9ydCB7IFNldHRpbmdzIGFzIFNldHRpbmdzQ29udHJhY3QgfSBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBFdmVudExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IFNldHRpbmdzSW1wbCB9IGZyb20gJy4uL0ltcGwvU2V0dGluZ3NJbXBsJztcbmltcG9ydCB7IFNldHRpbmdzQ29sbGVjdGlvbiB9IGZyb20gJy4uL1NlcnZpY2VzL1NldHRpbmdzU2VydmljZSc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGV4dGVybmFsIHNldHRpbmdzIG5hbWVzcGFjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNldHRpbmdzIGV4dGVuZHMgRXZlbnRMaXN0ZW5lck1hbmFnZXIgaW1wbGVtZW50cyBTZXR0aW5nc0NvbnRyYWN0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NldHRpbmdzSW1wbDogU2V0dGluZ3NJbXBsKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIEluaXRpYWxpemUgb3VyIGV2ZW50IGhhbmRsaW5nIGZvciB0aGlzIGNsYXNzXG4gICAgdGhpcy5fc2V0dGluZ3NJbXBsLmluaXRpYWxpemVFdmVudHMoKS5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdFdmVudFR5cGUoZSkpO1xuICB9XG5cbiAgcHVibGljIGVyYXNlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0dGluZ3NJbXBsLmVyYXNlKGtleSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3NJbXBsLmdldChrZXkpO1xuICB9XG5cbiAgcHVibGljIGdldEFsbCgpOiBTZXR0aW5nc0NvbGxlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5nc0ltcGwuZ2V0QWxsKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzTW9kaWZpZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzSW1wbC5pc01vZGlmaWVkO1xuICB9XG5cbiAgcHVibGljIHNhdmVBc3luYygpOiBQcm9taXNlPFNldHRpbmdzQ29sbGVjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5nc0ltcGwuc2F2ZUFzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0dGluZ3NJbXBsLnNldChrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvU2V0dGluZ3MudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFVJSW1wbCB9IGZyb20gJy4uL0ltcGwvVUlJbXBsJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgZXh0ZXJuYWwgVUkgbmFtZXNwYWNlLlxuICovXG5leHBvcnQgY2xhc3MgVUkgaW1wbGVtZW50cyBDb250cmFjdC5VSSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbXBsOiBVSUltcGwpIHsgfVxuXG4gIHB1YmxpYyBkaXNwbGF5RGlhbG9nQXN5bmModXJsOiBzdHJpbmcsIHBheWxvYWQ/OiBzdHJpbmcsIG9wdGlvbnM/OiBDb250cmFjdC5EaWFsb2dPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5faW1wbC5kaXNwbGF5RGlhbG9nQXN5bmModXJsLCBwYXlsb2FkLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURpYWxvZyhwYXlsb2FkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5faW1wbC5jbG9zZURpYWxvZyhwYXlsb2FkKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvVUkudHMiLCJpbXBvcnQgeyBJbnRlcm5hbEFwaURpc3BhdGNoZXIgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5IH0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgSW5pdGlhbGl6YXRpb25TZXJ2aWNlSW1wbCB9IGZyb20gJy4vSW1wbC9Jbml0aWFsaXphdGlvblNlcnZpY2VJbXBsJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZUltcGwgfSBmcm9tICcuL0ltcGwvU2V0dGluZ3NTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBVSVNlcnZpY2VJbXBsIH0gZnJvbSAnLi9JbXBsL1VJU2VydmljZUltcGwnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMoZGlzcGF0Y2hlcjogSW50ZXJuYWxBcGlEaXNwYXRjaGVyKTogdm9pZCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IEluaXRpYWxpemF0aW9uU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBTZXR0aW5nc1NlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgVUlTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvUmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMudHMiLCJpbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuLi8uLi8uLi9BcGlTaGFyZWQnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRXh0ZW5zaW9uQm9vdHN0cmFwSW5mbyxcbiAgUGFyYW1ldGVySWQsXG4gIFZlcmJJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBFeHRlbnNpb25zU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyc7XG5pbXBvcnQgeyBJbml0aWFsaXphdGlvblNlcnZpY2UgfSBmcm9tICcuLi9Jbml0aWFsaXphdGlvblNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgSW5pdGlhbGl6YXRpb25TZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIEluaXRpYWxpemF0aW9uU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5Jbml0aWFsaXphdGlvblNlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZURhc2hib2FyZEV4dGVuc2lvbnNBc3luYyhpc0V4dGVuc2lvbkRpYWxvZzogYm9vbGVhbiwgY29udGV4dE1lbnVJZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxFeHRlbnNpb25Cb290c3RyYXBJbmZvPiB7XG4gICAgY29uc3QgcGFyYW1zOiBFeGVjdXRlUGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5FeHRlbnNpb25Db250ZXh0TWVudUlkc106IGNvbnRleHRNZW51SWRzLFxuICAgICAgW1BhcmFtZXRlcklkLklzRXh0ZW5zaW9uRGlhbG9nXTogaXNFeHRlbnNpb25EaWFsb2dcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuSW5pdGlhbGl6ZUV4dGVuc2lvbiwgcGFyYW1zKS50aGVuPEV4dGVuc2lvbkJvb3RzdHJhcEluZm8+KHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIFRPRE8gLSBWYWxpZGF0ZSByZXR1cm4gdmFsdWVcblxuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0IGFzIEV4dGVuc2lvbkJvb3RzdHJhcEluZm87XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9Jbml0aWFsaXphdGlvblNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4uLy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBFeHRlbnNpb25TZXR0aW5nc0luZm8sXG4gIFBhcmFtZXRlcklkLFxuICBWZXJiSWRcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgU2V0dGluZ3NDb2xsZWN0aW9uLCBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuLi9TZXR0aW5nc1NlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFNldHRpbmdzU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5TZXR0aW5nc1NlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgc2F2ZVNldHRpbmdzQXN5bmMoc2V0dGluZ3M6IFNldHRpbmdzQ29sbGVjdGlvbik6IFByb21pc2U8U2V0dGluZ3NDb2xsZWN0aW9uPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5TZXR0aW5nc1ZhbHVlc106IHNldHRpbmdzIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5TYXZlRXh0ZW5zaW9uU2V0dGluZ3MsIHBhcmFtZXRlcnMpLnRoZW48U2V0dGluZ3NDb2xsZWN0aW9uPih2YWx1ZSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB2YWx1ZS5yZXN1bHQgYXMgRXh0ZW5zaW9uU2V0dGluZ3NJbmZvO1xuXG4gICAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LnNldHRpbmdzVmFsdWVzKSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAnVW5leHBlY3RlZCBlcnJvciBzYXZpbmdzIHNldHRpbmdzLicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKHJlc3VsdC5zZXR0aW5nc1ZhbHVlcyk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL1NldHRpbmdzU2VydmljZUltcGwudHMiLCJpbXBvcnQgeyBEaWFsb2dPcHRpb25zLCBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRXh0ZW5zaW9uRGlhbG9nUmVzdWx0LFxuICBQYXJhbWV0ZXJJZCxcbiAgVmVyYklkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSwgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnLi4vVUlTZXJ2aWNlJztcblxuY29uc3QgREVGQVVMVF9ESUFMT0dfSEVJR0hUOiBudW1iZXIgPSA0MDA7IC8vIGluIHBpeGVsc1xuY29uc3QgREVGQVVMVF9ESUFMT0dfV0lEVEg6IG51bWJlciA9IDYwMDsgLy8gaW4gcGl4ZWxzXG5cbmV4cG9ydCBjbGFzcyBVSVNlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgVUlTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBFeHRlbnNpb25zU2VydmljZU5hbWVzLlVJU2VydmljZTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwbGF5RGlhbG9nQXN5bmModXJsOiBzdHJpbmcsIHBheWxvYWQ6IHN0cmluZywgb3B0aW9ucz86IERpYWxvZ09wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuRXh0ZW5zaW9uRGlhbG9nVXJsXTogdXJsLFxuICAgICAgW1BhcmFtZXRlcklkLkV4dGVuc2lvbkRpYWxvZ1BheWxvYWRdOiBwYXlsb2FkXG4gICAgfTtcblxuICAgIGNvbnN0IGg6IG51bWJlciA9ICgob3B0aW9ucykgJiYgKG9wdGlvbnMuaGVpZ2h0KSkgPyBvcHRpb25zLmhlaWdodCA6IERFRkFVTFRfRElBTE9HX0hFSUdIVDtcbiAgICBjb25zdCB3OiBudW1iZXIgPSAoKG9wdGlvbnMpICYmIChvcHRpb25zLndpZHRoKSkgPyBvcHRpb25zLndpZHRoIDogREVGQVVMVF9ESUFMT0dfV0lEVEg7XG5cbiAgICAvLyBPbiB0aGUgcGxhdGZvcm0gc2lkZSwgd2UgZG8gc29tZXRoaW5nIHJlYXNvbmFibGUgcmVnYXJkZXNzIG9mIHdoZXRoZXIgdGhlIHBhc3NlZFxuICAgIC8vIGhlaWdodCBhbmQgd2lkdGggYXJlIHRvbyBsYXJnZSBvciB0b28gc21hbGwuICBCdXQgdGhpcyBsaWtlbHkgaW5kaWNhdGVzIGEgZGV2ZWxvcGVyIGVycm9yLFxuICAgIC8vIHNvIHdlIHRocm93IGFuIGVycm9yIGhlcmUgdG8gaGVscCB3aXRoIGRlYnVnZ2luZy5cbiAgICBpZiAoaCA8PSAwIHx8IHcgPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsICdTaXplIHBhcmFtZXRlcnMgZm9yIGRpc3BsYXlEaWFsb2dBc3luYyBtdXN0IGJlIHBvc2l0aXZlJyk7XG4gICAgfVxuXG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5FeHRlbnNpb25EaWFsb2dIXSA9IGg7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5FeHRlbnNpb25EaWFsb2dXXSA9IHc7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5EaXNwbGF5RGlhbG9nLCBwYXJhbWV0ZXJzKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IGRpYWxvZ1Jlc3VsdCA9IHJlc3BvbnNlLnJlc3VsdCBhcyBFeHRlbnNpb25EaWFsb2dSZXN1bHQ7XG4gICAgICBzd2l0Y2ggKGRpYWxvZ1Jlc3VsdCkge1xuICAgICAgICBjYXNlIEV4dGVuc2lvbkRpYWxvZ1Jlc3VsdC5EaWFsb2dBbHJlYWR5T3BlbjpcbiAgICAgICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuRGlhbG9nQWxyZWFkeU9wZW4sICdUaGVyZSBhbHJlYWR5IGV4aXN0cyBhbiBvcGVuIGRpYWxvZyBmb3IgdGhpcyBleHRlbnNpb24uJyk7XG4gICAgICAgIGNhc2UgRXh0ZW5zaW9uRGlhbG9nUmVzdWx0LkludmFsaWREb21haW46XG4gICAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWREb21haW5EaWFsb2csXG4gICAgICAgICAgICAnVGhlIHVybCBvZiBhbiBleHRlbnNpb24gZGlhbG9nIG11c3QgbWF0Y2ggdGhlIGRvbWFpbiBvZiB0aGUgcGFyZW50IGV4dGVuc2lvbi4nKTtcbiAgICAgICAgZGVmYXVsdDogLy8gU3VjY2VzcyBjYXNlXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNsb3NlRGlhbG9nKHBheWxvYWQ/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSAocGF5bG9hZCkgPyB7IFtQYXJhbWV0ZXJJZC5FeHRlbnNpb25EaWFsb2dQYXlsb2FkXTogcGF5bG9hZCB9IDoge307XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5DbG9zZURpYWxvZywgcGFyYW1ldGVycykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm47XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL1VJU2VydmljZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvblNldHRpbmdzSW5mbywgTm90aWZpY2F0aW9uSWQsIFNldHRpbmdzRXZlbnQgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQge1xuICBBcGlTZXJ2aWNlUmVnaXN0cnksXG4gIEVycm9ySGVscGVycyxcbiAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgU2VydmljZU5hbWVzLFxuICBTaW5nbGVFdmVudE1hbmFnZXIsXG4gIFNpbmdsZUV2ZW50TWFuYWdlckltcGwsXG4gIFRhYmxlYXVFcnJvcixcbiAgVGFibGVhdUV2ZW50XG59IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9FeHRlbnNpb25zU2VydmljZU5hbWVzJztcbmltcG9ydCB7IFNldHRpbmdzQ29sbGVjdGlvbiwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvU2V0dGluZ3NTZXJ2aWNlJztcblxuY2xhc3MgU2V0dGluZ3NDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBUYWJsZWF1RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5TZXR0aW5nc0NoYW5nZWRFdmVudCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZXdTZXR0aW5nczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuU2V0dGluZ3NDaGFuZ2VkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmV3U2V0dGluZ3MoKTogU2V0dGluZ3NDb2xsZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fbmV3U2V0dGluZ3M7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldHRpbmdzSW1wbCB7XG4gIHByaXZhdGUgc3RhdGljIEFTWU5DX1NBVkVfSU5fUFJPR1JFU1M6IHN0cmluZyA9ICdBc3luYyBTYXZlIGlzIGluIHByb2dyZXNzLCB1cGRhdGluZyBzZXR0aW5ncyBpcyBub3QgYWxsb3dlZC4nO1xuICBwcml2YXRlIF9pc01vZGlmaWVkOiBib29sZWFuO1xuICBwcml2YXRlIF9jdXJyZW50U2V0dGluZ3M6IFNldHRpbmdzQ29sbGVjdGlvbjtcblxuICAvLyBTaW5jZSBwcm9taXNlcyBjYW4ndCBiZSBpbnRyb3NwZWN0ZWQgZm9yIHN0YXRlLCBrZWVwIGEgdmFyaWFibGUgdGhhdFxuICAvLyBpbmRpY2F0ZXMgYSBzYXZlIGlzIGluIHByb2dyZXNzLCBzbyB0aGF0IHNldC9lcmFzZSBjYW4ndCBiZSBjYWxsZWQgZHVyaW5nIGEgc2F2ZS5cbiAgcHJpdmF0ZSBfc2F2ZUluUHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2V0dGluZ3NJbmZvOiBFeHRlbnNpb25TZXR0aW5nc0luZm8pIHtcbiAgICB0aGlzLmluaXRpYWxpemVTZXR0aW5ncyhzZXR0aW5nc0luZm8pO1xuICB9XG5cbiAgcHVibGljIGVyYXNlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihrZXksICdrZXknKTtcblxuICAgIC8vIE9ubHkgbWFrZSBhIG1vZGlmaWNhdGlvbiBpZiB3ZSBoYXZlIHRoZSBrZXkgYWxyZWFkeVxuICAgIGlmICh0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XSkge1xuICAgICAgdGhpcy52ZXJpZnlTZXR0aW5nc0FyZVVubG9ja2VkKCk7XG5cbiAgICAgIGRlbGV0ZSB0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XTtcbiAgICAgIHRoaXMuX2lzTW9kaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoa2V5LCAna2V5Jyk7XG5cbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFNldHRpbmdzW2tleV07XG4gIH1cblxuICBwdWJsaWMgZ2V0QWxsKCk6IFNldHRpbmdzQ29sbGVjdGlvbiB7XG4gICAgLy8gUmV0dXJucyBhIG11dGFibGUgY29weSBvZiB0aGUgc2V0dGluZ3NcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY3VycmVudFNldHRpbmdzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNNb2RpZmllZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNNb2RpZmllZDtcbiAgfVxuXG4gIHB1YmxpYyBzYXZlQXN5bmMoKTogUHJvbWlzZTxTZXR0aW5nc0NvbGxlY3Rpb24+IHtcbiAgICB0aGlzLnZlcmlmeVNldHRpbmdzQXJlVW5sb2NrZWQoKTtcblxuICAgIC8vIEp1c3QgcmVzb2x2ZSBpbW1lZGlhdGVseSBpZiBzZXR0aW5ncyBhcmUgdW5jaGFuZ2VkXG4gICAgaWYgKCF0aGlzLl9pc01vZGlmaWVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlPFNldHRpbmdzQ29sbGVjdGlvbj4odGhpcy5fY3VycmVudFNldHRpbmdzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zYXZlSW5Qcm9ncmVzcyA9IHRydWU7XG5cbiAgICAvLyBVc2UgdGhlIHNldHRpbmdzIHNlcnZpY2UgdG8gc2F2ZSBzZXR0aW5ncyB0byB0d2JcbiAgICBjb25zdCBzZXR0aW5nc1NlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxTZXR0aW5nc1NlcnZpY2U+KFxuICAgICAgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5TZXR0aW5nc1NlcnZpY2UpO1xuXG4gICAgcmV0dXJuIHNldHRpbmdzU2VydmljZS5zYXZlU2V0dGluZ3NBc3luYyh0aGlzLl9jdXJyZW50U2V0dGluZ3MpLnRoZW48U2V0dGluZ3NDb2xsZWN0aW9uPihuZXdTZXR0aW5ncyA9PiB7XG4gICAgICB0aGlzLl9zYXZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNNb2RpZmllZCA9IGZhbHNlO1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9jdXJyZW50U2V0dGluZ3MsIG5ld1NldHRpbmdzKTtcbiAgICAgIHJldHVybiBuZXdTZXR0aW5ncztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5U3RyaW5nUGFyYW1ldGVyKGtleSwgJ2tleScpOyAvLyBLZXkgc2hvdWxkbid0IGJlIGFuIGVtcHR5IHN0cmluZy5cbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHZhbHVlLCAndmFsdWUnKTsgLy8gRW1wdHkgc3RyaW5nIHZhbHVlIGlzIGFsbG93ZWQuXG4gICAgdGhpcy52ZXJpZnlTZXR0aW5nc0FyZVVubG9ja2VkKCk7XG5cbiAgICB0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XSA9IHZhbHVlO1xuICAgIHRoaXMuX2lzTW9kaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFsbCBldmVudHMgcmVsZXZhbnQgdG8gc2V0dGluZ3Mgb2JqZWN0LiAgVGhpcyBpcyBvbmx5IGEgc2V0dGluZ3NVcGRhdGUgZXZlbnQgY3VycmVudGx5LlxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPn0gQ29sbGVjdGlvbiBvZiBldmVudCBtYW5hZ2VycyB0byBwYXNzIHRvIGFuIEV2ZW50TGlzdGVuZXJNYW5hZ2VyLlxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVFdmVudHMoKTogQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+KCk7XG4gICAgbGV0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2U7XG5cbiAgICB0cnkge1xuICAgICAgbm90aWZpY2F0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPE5vdGlmaWNhdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5Ob3RpZmljYXRpb24pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgdGhpcyBzZXJ2aWNlIHJlZ2lzdGVyZWQsIGp1c3QgcmV0dXJuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICBjb25zdCBzZXR0aW5nc0NoYW5nZWRFdmVudCA9IG5ldyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsPFNldHRpbmdzQ2hhbmdlZEV2ZW50PihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLlNldHRpbmdzQ2hhbmdlZCk7XG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuU2V0dGluZ3NDaGFuZ2VkLCAobW9kZWwpID0+IHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIChldmVudDogU2V0dGluZ3NFdmVudCkgPT4ge1xuICAgICAgdGhpcy5fY3VycmVudFNldHRpbmdzID0gZXZlbnQubmV3U2V0dGluZ3M7XG4gICAgICBzZXR0aW5nc0NoYW5nZWRFdmVudC50cmlnZ2VyRXZlbnQoKCkgPT4gbmV3IFNldHRpbmdzQ2hhbmdlZEV2ZW50KGV2ZW50Lm5ld1NldHRpbmdzKSk7XG4gICAgfSk7XG5cbiAgICByZXN1bHRzLnB1c2goc2V0dGluZ3NDaGFuZ2VkRXZlbnQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVTZXR0aW5ncyhzZXR0aW5nc0luZm86IEV4dGVuc2lvblNldHRpbmdzSW5mbyk6IHZvaWQge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2V0dGluZ3NJbmZvLCAnc2V0dGluZ3NJbmZvJyk7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihzZXR0aW5nc0luZm8uc2V0dGluZ3NWYWx1ZXMsICdzZXR0aW5nc0luZm8uU2V0dGluZ3NWYWx1ZXMnKTtcblxuICAgIHRoaXMuX2N1cnJlbnRTZXR0aW5ncyA9IHNldHRpbmdzSW5mby5zZXR0aW5nc1ZhbHVlcztcblxuICAgIC8vIFJlc2V0IHRoZSBpc01vZGlmaWVkIGZsYWdcbiAgICB0aGlzLl9pc01vZGlmaWVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBoZWxwZXIgc2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgYW55IGxvY2FsIHVwZGF0ZSB0byB0aGlzLmN1cnJlbnRTZXR0aW5ncy5cbiAgICogQ2hlY2tzIGlmIGEgY3VycmVudCBzYXZlIGNhbGwgaXMgc3RpbGwgaW4gcHJvZ3Jlc3MgYW5kIHRocm93cyBhbiBlcnJvciBpZiBzby5cbiAgICovXG4gIHByaXZhdGUgdmVyaWZ5U2V0dGluZ3NBcmVVbmxvY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc2F2ZUluUHJvZ3Jlc3MpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5TZXR0aW5nU2F2ZUluUHJvZ3Jlc3MsIFNldHRpbmdzSW1wbC5BU1lOQ19TQVZFX0lOX1BST0dSRVNTKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL1NldHRpbmdzSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRGlhbG9nVXBkYXRlRXZlbnQsIE5vdGlmaWNhdGlvbklkIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeSxcbiAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgU2VydmljZU5hbWVzLFxuICBUYWJsZWF1RXJyb3Jcbn0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvVUlTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFVJSW1wbCB7XG4gIHB1YmxpYyBkaXNwbGF5RGlhbG9nQXN5bmModXJsOiBzdHJpbmcsIHBheWxvYWQ/OiBzdHJpbmcsIG9wdGlvbnM/OiBDb250cmFjdC5EaWFsb2dPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCB1aVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxVSVNlcnZpY2U+KEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMuVUlTZXJ2aWNlKTtcbiAgICBjb25zdCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8Tm90aWZpY2F0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLk5vdGlmaWNhdGlvbik7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdWlTZXJ2aWNlLmRpc3BsYXlEaWFsb2dBc3luYyh1cmwsIHBheWxvYWQgfHwgJycsIG9wdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCB1bnJlZ2lzdGVyRm4gPSBub3RpZmljYXRpb25TZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihOb3RpZmljYXRpb25JZC5FeHRlbnNpb25EaWFsb2dVcGRhdGUsIChtb2RlbCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBMZXQgdGhyb3VnaCBhbnkgZGlhbG9nIHVwZGF0ZSBldmVudFxuICAgICAgICB9LCAoZXZlbnQ6IERpYWxvZ1VwZGF0ZUV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmlzQ2xvc2VFdmVudCkge1xuICAgICAgICAgICAgcmVzb2x2ZShldmVudC5jbG9zZVBheWxvYWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkRpYWxvZ0Nsb3NlZEJ5VXNlciwgJ0V4dGVuc2lvbiBkaWFsb2cgY2xvc2VkIGJ5IHVzZXIuJykpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVucmVnaXN0ZXJGbigpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEaWFsb2cocGF5bG9hZD86IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHVpU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFVJU2VydmljZT4oXG4gICAgICBFeHRlbnNpb25zU2VydmljZU5hbWVzLlVJU2VydmljZSk7XG5cbiAgICB1aVNlcnZpY2UuY2xvc2VEaWFsb2cocGF5bG9hZCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL1VJSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgQ2FsbGJhY2tNYXAsIEV4dGVuc2lvbnNJbXBsIH0gZnJvbSAnLi4vSW1wbC9FeHRlbnNpb25zSW1wbCc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGV4dGVybmFsIEV4dGVuc2lvbnMgbmFtZXNwYWNlLlxuICovXG5leHBvcnQgY2xhc3MgRXh0ZW5zaW9ucyBpbXBsZW1lbnRzIENvbnRyYWN0LkV4dGVuc2lvbnMge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBleHRlbnNpb25JbXBsOiBFeHRlbnNpb25zSW1wbCkge1xuICAgIHRoaXMuZXh0ZW5zaW9uSW1wbCA9IGV4dGVuc2lvbkltcGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhc2hib2FyZENvbnRlbnQoKTogQ29udHJhY3QuRGFzaGJvYXJkQ29udGVudCB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5kYXNoYm9hcmRDb250ZW50O1xuICB9XG5cbiAgcHVibGljIGdldCBlbnZpcm9ubWVudCgpOiBDb250cmFjdC5FbnZpcm9ubWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5lbnZpcm9ubWVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2V0dGluZ3MoKTogQ29udHJhY3QuU2V0dGluZ3Mge1xuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbkltcGwuc2V0dGluZ3M7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHVpKCk6IENvbnRyYWN0LlVJIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb25JbXBsLnVpO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVBc3luYyhjb250ZXh0TWVudUNhbGxiYWNrcz86IENhbGxiYWNrTWFwKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5pbml0aWFsaXplQXN5bmMoZmFsc2UsIGNvbnRleHRNZW51Q2FsbGJhY2tzKS50aGVuPHZvaWQ+KCk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZURpYWxvZ0FzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5pbml0aWFsaXplQXN5bmModHJ1ZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0V4dGVuc2lvbnMudHMiXSwic291cmNlUm9vdCI6IiJ9
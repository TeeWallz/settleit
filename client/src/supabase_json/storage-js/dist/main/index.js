"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupabaseStorageClient = exports.StorageClient = void 0;
var StorageClient_1 = require("./StorageClient");
Object.defineProperty(exports, "StorageClient", { enumerable: true, get: function () { return StorageClient_1.StorageClient; } });
Object.defineProperty(exports, "SupabaseStorageClient", { enumerable: true, get: function () { return StorageClient_1.StorageClient; } });
__exportStar(require("./lib/types"), exports);
//# sourceMappingURL=index.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_logging_1 = require("./services/http-logging/http-logging");
const tick_tock_component_1 = require("./components/tick-tock/tick-tock.component");
const tick_tock_service_1 = require("./services/tick-tock/tick-tock.service");
let ProcessPuzzleUtilModule = class ProcessPuzzleUtilModule {
};
ProcessPuzzleUtilModule = __decorate([
    core_1.NgModule({
        providers: [
            http_logging_1.HttpLoggingInterceptor,
            tick_tock_service_1.TickTockService,
        ],
        declarations: [
            tick_tock_component_1.TickTockComponent,
        ],
        exports: [
            tick_tock_component_1.TickTockComponent,
        ]
    })
], ProcessPuzzleUtilModule);
exports.ProcessPuzzleUtilModule = ProcessPuzzleUtilModule;
//# sourceMappingURL=processpuzzle-util.module.js.map
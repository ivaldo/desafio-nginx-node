"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleController = void 0;
const common_1 = require("@nestjs/common");
const people_service_1 = require("../service/people.service");
let PeopleController = class PeopleController {
    constructor(peopleService) {
        this.peopleService = peopleService;
    }
    async getPeopleById(id) {
        return this.peopleService.People({ id: Number(id) });
    }
    async getPeople() {
        return this.peopleService.Peoples({});
    }
    async createPeople(postData) {
        const { nome } = postData;
        return this.peopleService.createPeople({
            nome,
        });
    }
    async updatePeople(id, postData) {
        const { nome } = postData;
        return this.peopleService.updatePeople({
            where: { id: Number(id) },
            data: { nome },
        });
    }
    async deletePeople(id) {
        return this.peopleService.deletePeople({ id: Number(id) });
    }
};
exports.PeopleController = PeopleController;
__decorate([
    (0, common_1.Get)('/api/people/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PeopleController.prototype, "getPeopleById", null);
__decorate([
    (0, common_1.Get)('/api/people'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PeopleController.prototype, "getPeople", null);
__decorate([
    (0, common_1.Post)('/api/people'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PeopleController.prototype, "createPeople", null);
__decorate([
    (0, common_1.Put)('/api/people/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PeopleController.prototype, "updatePeople", null);
__decorate([
    (0, common_1.Delete)('/api/people/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PeopleController.prototype, "deletePeople", null);
exports.PeopleController = PeopleController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [people_service_1.PeopleService])
], PeopleController);
//# sourceMappingURL=people.controller.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
let PeopleService = class PeopleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async People(PeopleWhereUniqueInput) {
        return this.prisma.people.findUnique({
            where: PeopleWhereUniqueInput,
        });
    }
    async Peoples(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.people.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createPeople(data) {
        return this.prisma.people.create({
            data,
        });
    }
    async updatePeople(params) {
        const { where, data } = params;
        return this.prisma.people.update({
            data,
            where,
        });
    }
    async deletePeople(where) {
        return this.prisma.people.delete({
            where,
        });
    }
};
exports.PeopleService = PeopleService;
exports.PeopleService = PeopleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PeopleService);
//# sourceMappingURL=people.service.js.map
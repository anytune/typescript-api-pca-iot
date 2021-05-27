"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAttendanceTable1621688162631 = void 0;
const typeorm_1 = require("typeorm");
class CreateAttendanceTable1621688162631 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'attendance',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'registered_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('attendance');
    }
}
exports.CreateAttendanceTable1621688162631 = CreateAttendanceTable1621688162631;

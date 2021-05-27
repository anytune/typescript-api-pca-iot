"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable1621695704351 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersTable1621695704351 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'students',
            columns: [
                {
                    name: 'student_id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'class',
                    type: 'varchar'
                },
                {
                    name: 'schoolShift',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('students');
    }
}
exports.CreateUsersTable1621695704351 = CreateUsersTable1621695704351;

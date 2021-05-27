"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFilesTable1621699837246 = void 0;
const typeorm_1 = require("typeorm");
class CreateFilesTable1621699837246 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'files',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'path',
                    type: 'mediumtext'
                },
                {
                    name: 'mime',
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
        await queryRunner.dropTable('files');
    }
}
exports.CreateFilesTable1621699837246 = CreateFilesTable1621699837246;

import {MigrationInterface, QueryRunner} from "typeorm";

export class RoleSeed1752959540104 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO \`role\` (\`id\`, \`name\`, \`createdDate\`, \`updatedDate\`, \`deletedDate\`) VALUES (1, 'Normal', '2022-05-19 12:02:44.722825', '2022-05-19 12:02:44.722825', NULL);`)
        await queryRunner.query(`INSERT INTO \`role\` (\`id\`, \`name\`, \`createdDate\`, \`updatedDate\`, \`deletedDate\`) VALUES (2, 'Manager', '2022-05-19 12:02:44.708094', '2022-05-19 12:02:44.708094', NULL);`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM \`role\` WHERE id = 1;`);
        await queryRunner.query(`DELETE FROM \`role\` WHERE id = 2;`);
    }

}

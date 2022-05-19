import {MigrationInterface, QueryRunner} from "typeorm";

export class UserRoleSeed1752959540105 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO \`user_role\` (\`id\`, \`userId\`, \`roleId\`) VALUES (1, 1, 2);`)
        await queryRunner.query(`INSERT INTO \`user_role\` (\`id\`, \`userId\`, \`roleId\`) VALUES (2, 1, 1);`)
        await queryRunner.query(`INSERT INTO \`user_role\` (\`id\`, \`userId\`, \`roleId\`) VALUES (3, 2, 1);`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM \`user_role\` WHERE id = 1;`);
        await queryRunner.query(`DELETE FROM \`user_role\` WHERE id = 2;`);
        await queryRunner.query(`DELETE FROM \`user_role\` WHERE id = 3;`);
    }

}

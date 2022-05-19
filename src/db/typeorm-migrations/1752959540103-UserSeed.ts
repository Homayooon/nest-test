import {MigrationInterface, QueryRunner} from "typeorm";

export class UserSeed1752959540103 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO \`user\` (\`id\`, \`username\`, \`password\`, \`createdDate\`, \`updatedDate\`, \`deletedDate\`) VALUES (1, 'admin', '$2b$10$lDUMBufvlumekkwCJ.tbYef93PaUO/5Ix7GHq4DcmXH.hLTi2LQsS', '2022-05-19 11:24:05.425173', '2022-05-19 11:24:05.425173', NULL);`)
        await queryRunner.query(`INSERT INTO \`user\` (\`id\`, \`username\`, \`password\`, \`createdDate\`, \`updatedDate\`, \`deletedDate\`) VALUES (2, 'homayoon', '$2b$10$LpsFtmC4GXQlj3ykEqqnaue625TZ6YPX/W3JaH7/n65ESboxrTJRy', '2022-05-19 12:34:32.265373', '2022-05-19 12:34:32.265373', NULL);`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM \`user\` WHERE id = 1;`);
        await queryRunner.query(`DELETE FROM \`user\` WHERE id = 2;`);
    }

}

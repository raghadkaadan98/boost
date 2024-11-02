import { MigrationInterface, QueryRunner } from "typeorm";

export class Updated21730486941333 implements MigrationInterface {
    name = 'Updated21730486941333'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`categ_name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`white_crewneck_price\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`white_hoodie_price\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`black_crewneck_price\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`black_hoodie_price\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`categoryId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_329b8ae12068b23da547d3b4798\``);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_329b8ae12068b23da547d3b4798\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_ff0c0301a95e517153df97f6812\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_ff0c0301a95e517153df97f6812\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_329b8ae12068b23da547d3b4798\``);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_329b8ae12068b23da547d3b4798\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`categoryId\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`black_hoodie_price\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`black_crewneck_price\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`white_hoodie_price\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`white_crewneck_price\``);
        await queryRunner.query(`DROP TABLE \`category\``);
    }

}

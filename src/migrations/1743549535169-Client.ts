import { MigrationInterface, QueryRunner } from "typeorm";

export class Client1743549535169 implements MigrationInterface {
    name = 'Client1743549535169'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "client" (
                "id" SERIAL NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                "name" character varying NOT NULL,
                "email" character varying NOT NULL,
                CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "address" (
                "id" SERIAL NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                "street" character varying NOT NULL,
                "complement" character varying,
                "number" character varying,
                "city" character varying NOT NULL,
                "state" character varying NOT NULL,
                "postalCode" character varying(8) NOT NULL,
                "clientId" integer,
                CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "address"
            ADD CONSTRAINT "FK_3d3e29e99d821fd75d7cb117e04" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "address" DROP CONSTRAINT "FK_3d3e29e99d821fd75d7cb117e04"
        `);
        await queryRunner.query(`
            DROP TABLE "address"
        `);
        await queryRunner.query(`
            DROP TABLE "client"
        `);
    }

}

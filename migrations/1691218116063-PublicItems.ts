import { MigrationInterface, QueryRunner } from 'typeorm';
import { Logger } from '@nestjs/common';

export class PublicItems1691218116063 implements MigrationInterface {
  private readonly logger = new Logger(PublicItems1691218116063.name);

  public async up(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('up');
    await queryRunner.query('UPDATE item SET public = 1');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('down');
  }
}

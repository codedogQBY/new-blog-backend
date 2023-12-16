import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { MenuModule } from './menu/menu.module';
import { RoleModule } from './role/role.module';
import { OptionModule } from './option/option.module';
import { LinkModule } from './link/link.module';
import { BoardModule } from './board/board.module';
import { DiaryModule } from './diary/diary.module';
import { CommentModule } from './comment/comment.module';
import { User } from './user/entities/user.entity';
import { Article } from './article/entities/article.entity';
import { Menu } from './menu/entities/menu.entity';
import { Role } from './role/entities/role.entity';
import { Option } from './option/entities/option.entity';
import { Link } from './link/entities/link.entity';
import { Board } from './board/entities/board.entity';
import { Diary } from './diary/entities/diary.entity';
import { Comment } from './comment/entities/comment.entity';
import { Tag } from './tag/entities/tag.entity';
import { TagModule } from './tag/tag.module';
import { RedisModule } from './redis/redis.module';
import { EmailModule } from './email/email.module';
import { DATA_BASE_CONFIG } from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DATA_BASE_CONFIG.HOST,
      port: DATA_BASE_CONFIG.PORT,
      username: DATA_BASE_CONFIG.USERNAME,
      password: DATA_BASE_CONFIG.PASSWORD,
      database: DATA_BASE_CONFIG.DATABASE,
      synchronize: true,
      logging: true,
      entities: [
        User,
        Article,
        Role,
        Option,
        Link,
        Board,
        Comment,
        Diary,
        Menu,
        Tag,
      ],
      poolSize: 10,
      connectorPackage: 'mysql2',
    }),
    ArticleModule,
    CommentModule,
    DiaryModule,
    BoardModule,
    LinkModule,
    OptionModule,
    UserModule,
    RoleModule,
    MenuModule,
    TagModule,
    RedisModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

@Module({
    imports: [
      ConfigModule.forRoot({ isGlobal: true }),
      GraphQLModule.forRootAsync({
        driver: ApolloDriver,
        imports: [ConfigModule],
        useFactory: getGraphQLConfig,
        inject: [ConfigService]
      }),
      PrismaModule,
      AccountModule, // Add this line
      RedisModule
    ],
  })
  export class CoreModule {}
  
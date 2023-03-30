module.exports = {
    definition: `
        type Game {
          gameCreation: Int!,
          gameDuration: Int!,
          gameId: Int!,
          gameMode: String!,
          assists: Int!,
          kills: Int!,
          deaths: Int!,
          championName: String!,
          champLevel: Int!
          win: Boolean!
        }
    
        type Summoner {
          id: String!,
          accountId: String!,
          puuid: String!, 
          name: String!,
          profileIconId: Int!,
          revisionDate: Int!,
          summonerLevel: Int!,
          games: [Game]
        }`,
    query: `
          Summoner(summoner: String!): Summoner!
        `,
    resolver: {
        Query: {
            Summoner: {
                description: "Get the Summoner object in the Riot API.",
                resolver: "application::riot.summoner.findSummonerByName",
            },
        },
    },
};

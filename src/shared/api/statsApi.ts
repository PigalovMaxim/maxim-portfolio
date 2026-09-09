import { baseApi } from './baseApi'

export const statsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStats: builder.query<unknown, void>({
      query: () => '/stats',
    }),
  }),
})

export const { useLazyGetStatsQuery } = statsApi

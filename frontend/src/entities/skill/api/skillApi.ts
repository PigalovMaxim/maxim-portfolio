import { baseApi } from '@/shared/api'
import type { Skill } from '../model/types'

export const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<Skill[], void>({
      query: () => '/skills',
      providesTags: ['Skills'],
    }),
  }),
})

export const { useGetSkillsQuery } = skillApi

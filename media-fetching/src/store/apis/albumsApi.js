import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'

// DEV ONLY!!!
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
        // `fetchFn` allows the user to overwrite the default `fetch` behaviour
        fetchFn: async (...args) => {
            await pause(1000)
            return fetch(...args)
        }
    }),
    endpoints(builder) {
        return {
            // `mutation` - Change data
            removeAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: 'Album', id: album.id}]
                },
                query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method: 'DELETE'
                    }
                }
            }),
            // `query` - get data
            fetchAlbums: builder.query({
                // third `arg` is the value that is passed into the hook
                providesTags: (result, error, user) => {
                    const tags = result.map(album => {
                        return { type: 'Album', id: album.id}
                    })
                    tags.push({ type: 'UsersAlbums', id: user.id })
                    return tags
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id
                        },
                        method: 'GET'
                    }
                }
            }),
            addAlbum: builder.mutation({
                // third `arg` is the value that is passed into the hook
                invalidatesTags: (result , error, user) => {
                    return [{ type: 'UsersAlbums', id: user.id }]
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName()
                        }
                    }
                }
            })
        }
    }
})


export const { 
    useFetchAlbumsQuery, 
    useAddAlbumMutation,
    useRemoveAlbumMutation
} = albumsApi
export { albumsApi }
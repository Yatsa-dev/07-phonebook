import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61a3c411d5e8330017292178.mockapi.io/api/yatsa-dev/',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `contacts/`,
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: 'contacts/',
        method: 'POST',
        body: { ...newContact },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});
export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactApi;

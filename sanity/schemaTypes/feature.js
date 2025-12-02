import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'feature',
  title: 'Feature',
  type: 'document',
  fields: [
      defineField({
      name: 'name',
      title: 'Feature Name',
      type: 'string',
      validation:(Rule)=> Rule.required()
    }),
    defineField( {
      name: 'description',
      title: 'Feature description',
      type: 'string',
      validation:(Rule)=> Rule.max(200)
    }),
    defineField( {
      name:"restaurants",
      type: 'array',
      title:"Restaurants",
       of:[{
      type:"reference",
      to:[{type:"restaurant"}]
       }],
    }),

  ],


})

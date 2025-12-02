import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
       defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation:(Rule)=> Rule.required()
    }),
      defineField( {
      name: 'description',
      title: 'Restaurant description',
      type: 'string',
      validation:(Rule)=> Rule.max(200)
    }),
      defineField( {
      name: 'image',
      title: 'Image of the restaurant',
      type: 'image',
    }),
     defineField({
      name: 'lat',
      title: 'Latitude of the restaurant',
      type: 'number',
     
    }),
       defineField({
      name: 'long',
      title: 'Longitude of the restaurant',
      type: 'number',
     
    }),
       defineField({
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation:(Rule)=> Rule.required()
    }),
       defineField({
      name: 'rating',
      title: 'Enter a Rating from (1 - 5 Star) ',
      type: 'number',
      validation:(Rule)=> Rule.required().min(1).max(5).error('Please enter the rating between 1 to 5 .'),
      
    }),
       defineField({
      name: 'type',
      title: 'Category',
      type: 'array',
      validation:(Rule)=> Rule.required(),
       of:[{
      type:"reference",
      to:[{type:"category"}]
       }],
    }),
      defineField( {
      name:"dishes",
      type: 'array',
      title:"Dishes",
      of:[{
       type:"reference",
       to:[{type:"dish"}],
      }]
    }),

  ],


})

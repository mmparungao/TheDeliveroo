import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
     defineField({
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation:(Rule)=> Rule.required()
    }),
    defineField(  {
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
    }),
    defineField(   {
      name: 'description',
      title: 'Dish description',
      type: 'string',
      validation:(Rule)=> Rule.max(200)
    }),
      defineField(  {
      name: 'Price',
      title: 'Price of the Dish',
      type: 'number',
    }),
  ]
})

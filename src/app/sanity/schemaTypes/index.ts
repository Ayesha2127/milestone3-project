import { type SchemaTypeDefinition } from 'sanity'
import { coffeeProduct } from './blend'
import { breakfastProducts } from './breakfast'
import { mochaProducts } from './mocha'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [coffeeProduct , breakfastProducts , mochaProducts],
}

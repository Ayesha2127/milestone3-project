import { defineType } from "sanity";

export const mochaProducts = defineType({
  name: "mochaProduct",
  title: "Mocha Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
      description: "Name of the coffee product",
      validation: (Rule) => Rule.required().min(3).max(50),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Unique identifier for the product (used in URLs)",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      description: "Image of the coffee product",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of the product in USD",
      validation: (Rule) =>
        Rule.required().positive().integer().min(1).max(1000),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Short description of the product",
      validation: (Rule) => Rule.required().min(10).max(200),
    },
  ],
});

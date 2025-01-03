import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { IoMdAddCircle } from "react-icons/io";
import imageUrlBuilder from "@sanity/image-url";

// Define the type for the coffee product
interface CoffeeProduct {
  _id: string;
  name: string;
  slug: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  price: number;
  description: string;
}

// Create the urlFor utility
const urlFor = (source: CoffeeProduct["image"]) =>
  imageUrlBuilder(client).image(source);

// Fetch data from Sanity
async function fetchData(): Promise<CoffeeProduct[]> {
  const query = `*[_type == "coffeeProduct"]{
    _id,
    name,
    "slug": slug.current,
    image,
    price,
    description
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Coffee() {
  // Fetch data from Sanity
  const coffeeProducts = await fetchData();

  return (
    <section>
      {/* Heading */}
      <div className="flex flex-wrap text-3xl justify-center items-center text-center font-bold text-[#5D300E] py-4 px-4">
        OUR COFFEE
      </div>

      {/* Coffee Products Grid */}
      <div className="flex flex-wrap justify-center gap-8 py-6">
        {coffeeProducts.map((product) => (
          <div
            key={product._id}
            className="border border-[#5D300E] shadow-2xl rounded-2xl w-[200px] h-[350px] flex flex-col justify-center items-center"
          >
            {/* Product Image */}
            <div>
              <Image
                src={urlFor(product.image).url()} // Use urlFor to generate the image URL
                alt={product.name}
                width={200}
                height={200}
                className="object-cover rounded-t-2xl"
              />
            </div>

            {/* Product Name */}
            <h1 className="text-[#5D300E] font-bold text-xl text-center py-2">
              {product.name}
            </h1>

            {/* Product Price and Add Button */}
            <p className="flex justify-center items-center gap-7 py-2">
              <span className="font-bold text-lg text-[#5D300E]">
                ${product.price}
              </span>
              <IoMdAddCircle size={30} className="text-[#5D300E] cursor-pointer" />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";

import { faker } from "@faker-js/faker";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import ImageInput from "@/components/form/ImageInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CheckboxInput from "@/components/form/CheckboxInput";

const createProductAction = async (formData: FormData) => {
  "use server";
  // this is the server action
  // we used to call fetch/axios to make an api call by defining the methods ("GET","POST", etc) like before with payload
  //but  we can directly call the action in the server from our component here
  console.log(formData.get("name"));
};

const CreateProductPage = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({
    min: 10,
    max: 12,
  });
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">create product</h1>
      <div className="border p-8 rounded-md">
        <form action={createProductAction}>
          <div>
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              label="company"
              defaultValue={company}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={description}
          />
          <div className="mt-6">
            <CheckboxInput name="featured" label="featured" />
          </div>
          <div className="mt-4">
            <Button type="submit" size="lg">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default CreateProductPage;

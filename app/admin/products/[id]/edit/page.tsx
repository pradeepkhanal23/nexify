/**
 * EditProductPage
 * ----------------
 * This page is the admin "edit product" screen. It retrieves the product
 * details from the backend (using `fetchAdminProductDetails`) and then
 * renders two update forms:
 *
 * 1. Image Update Form (`ImageInputContainer`):
 *    - Shows the current product image.
 *    - Lets the admin upload a new one.
 *    - Hidden inputs (`id` and `url`) are passed along:
 *        • `id` tells the backend which product to update.
 *        • `url` tells the backend the current image URL, so it can
 *          replace or delete it.
 *    - Submits to `updateProductImageAction`.
 *
 * 2. Product Details Update Form (`FormContainer`):
 *    - Editable fields: name, company, price, description, and featured flag.
 *    - A hidden `id` input ensures the backend knows which product to update.
 *    - Submits to `updateProductAction`.
 *
 * Notes:
 * - Both forms are self-contained: they include all data needed for the
 *   server to process the request (id, old values, new values).
 * - `FormContainer` abstracts form handling and submission, while the
 *   various input components (FormInput, PriceInput, TextAreaInput,
 *   CheckboxInput, SubmitButton) provide reusable UI pieces.
 * - This separation (image form vs details form) makes the UX cleaner and
 *   the backend logic simpler to manage.
 */

import {
  fetchAdminProductDetails,
  updateProductAction,
  updateProductImageAction,
} from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import SubmitButton from "@/components/form/SubmitButton";
import CheckboxInput from "@/components/form/CheckboxInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";

async function EditProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await fetchAdminProductDetails(id);
  const { name, company, description, featured, price } = product;
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">update product</h1>
      <div className="border p-8 rounded-md">
        {/* Image Input Container goes here*/}

        <ImageInputContainer
          action={updateProductImageAction}
          name={name}
          image={product.image}
          text="Update image"
        >
          {/* these inouts are not shown in the screen but it carries the data as props and take it to the image input container where it can be accessed */}
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={product.image} />
        </ImageInputContainer>
        <FormContainer action={updateProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
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

            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={description}
          />
          <div className="mt-6">
            <CheckboxInput
              name="featured"
              label="featured"
              defaultChecked={featured}
            />
          </div>
          <SubmitButton text="update product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default EditProductPage;

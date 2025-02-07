import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CreateProductPage = () => {
  // this is the server action
  // no used to call fetch/axios to make an api call by defining the methods ("GET","POST", etc) like before with payload
  //but  we can directly call the action in the server from our component here

  const createProductAction = async (formData: FormData) => {
    "use server";
    const name = formData.get("name") as string;
    console.log(name);
  };
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">create product</h1>
      <div className="border p-8 rounded-md">
        <form action={createProductAction}>
          <div className="mb-2">
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" name="name" type="text" />
          </div>
          <Button type="submit" size="lg">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};
export default CreateProductPage;

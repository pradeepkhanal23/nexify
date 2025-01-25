import { Separator } from "@/components/ui/separator";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <h2 className="text-3xl capitalize text-center font-bold mb-5 tracking-wide">
        {title}
      </h2>
      <Separator />
    </div>
  );
};
export default SectionTitle;

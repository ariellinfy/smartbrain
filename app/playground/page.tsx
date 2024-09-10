import { Rank } from "@/ui/rank";
import { ImageForm } from "@/ui/image-form";
import { Result } from "@/ui/result";

export default function Playground() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Rank />
      <ImageForm />
      <Result />
    </div>
  );
}

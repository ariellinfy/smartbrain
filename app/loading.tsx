import { Spinner } from "@nextui-org/spinner";

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-5 justify-center items-center font-medium text-large">
      <Spinner label="Loading..." color="primary" size="lg" />
    </div>
  );
}

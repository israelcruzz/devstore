import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <LoaderCircle className="animate-spin" />
    </div>
  );
}

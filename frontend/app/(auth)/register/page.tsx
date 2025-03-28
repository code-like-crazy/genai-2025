import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { RegisterForm } from "../../../components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <Card className="animate-in fade-in-0 slide-in-from-bottom-4 w-full max-w-md border-2 border-pink-200/50 bg-white/50 shadow-lg backdrop-blur-sm duration-500">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">
          Create an Account
        </CardTitle>
        <CardDescription className="font-sans">
          Join our community and start your journey with us today.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
    </Card>
  );
}

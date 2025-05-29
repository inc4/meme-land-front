import type { Route } from "../../../.react-router/types/app/routes/+types";
import { Welcome } from "~/components/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Green.meme App" },
    { name: "description", content: "Welcome to Green.meme App!" },
  ];
}

export default function Home() {
  return <Welcome />;
}

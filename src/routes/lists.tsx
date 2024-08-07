import { createFileRoute } from "@tanstack/react-router";
import News from "../pages/News";

export const Route = createFileRoute("/lists")({
  component: News,
});

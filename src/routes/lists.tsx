import { createFileRoute } from "@tanstack/react-router";
import Lists from "../pages/Lists";

export const Route = createFileRoute("/lists")({
  component: Lists,
});

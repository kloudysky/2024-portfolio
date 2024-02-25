import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Navigation } from "~/components/navigation/navigation";

export default component$(() => {
  return (
    <>
      <Navigation />
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Koud's portfolio",
  meta: [
    {
      name: "Kloud's Portfolio",
      content: "Kloud's 2024 portfolio using Qwik & Flask",
    },
  ],
};

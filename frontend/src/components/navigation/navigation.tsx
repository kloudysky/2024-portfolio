import { component$, useStore } from "@builder.io/qwik";

export const Navigation = component$(() => {
  // State to manage dropdown visibility
  const dropdown = useStore({ value: false });

  return (
    <nav class="fixed top-0 z-10 w-full bg-white shadow-md">
      <div class="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div class="logo">
          <a href="/">Your Logo</a>
        </div>

        {/* Navigation Links */}
        <ul class="hidden space-x-6 md:flex">
          <li>
            <a href="/" class="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="/about" class="hover:text-blue-500">
              About
            </a>
          </li>

          {/* Dropdown */}
          <li class="relative">
            <button
              class="hover:text-blue-500"
              onClick$={() => (dropdown.value = !dropdown.value)}
            >
              More
            </button>
            <ul
              class={
                dropdown.value
                  ? "absolute block rounded bg-white p-4 shadow-md"
                  : "hidden"
              }
            >
              <li>
                <a href="/page1" class="block py-2 hover:bg-gray-100">
                  Page 1
                </a>
              </li>
              <li>
                <a href="/page2" class="block py-2 hover:bg-gray-100">
                  Page 2
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
});

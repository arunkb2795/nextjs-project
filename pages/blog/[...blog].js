import React from "react";
import { useRouter } from "next/router";
export default function Blog() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>Blog Post!</h1>
    </div>
  );
}

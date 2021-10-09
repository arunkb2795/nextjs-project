import React from "react";
import { useRouter } from "next/router";
export default function ListItem() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  const handleRedirect = () => {
    router.push({
      pathname: `/blog/date=${2020}`,
      // query: { id: "max" },
    });
  };
  return (
    <div>
      <h1>List Item</h1>
      <button onClick={handleRedirect}>go to </button>
    </div>
  );
}

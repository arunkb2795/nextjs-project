import React from "react";
import Link from "next/link";

const lists = [
  { id: "123", name: "Arun" },
  { id: "124", name: "Roy" },
];
export default function ListPage() {
  return (
    <div>
      <h1>List Page</h1>
      <ul>
        {lists.map((item) => {
          return (
            //   <h1>hello!</h1>;
            <li key={item.id}>
              <Link
                href={{
                  pathname: "/lists/[id]",
                  query: { listId: item.id },
                }}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

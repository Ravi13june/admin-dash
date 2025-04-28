"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeleteIcon from "@/icons/DeleteIcon";
import EditIcon from "@/icons/EditIcon";
import { articleService } from "@/service/articleService";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Delete from "@/icons/Delete";


const Article = () => {
  const [page, setPage] = useState(1); // Current page
  const pageSize = 10; // Number of items per page
  const { data, isLoading, error } = useQuery({
    queryKey: ["article"],
    queryFn: () =>
      articleService
        .getArticles(page, pageSize)
        .then((res) => res.data)
        .catch((err) => console.log("Error:", err)),
    //keepPreviousData: true, // Keeps the previous data while loading new data
  });
  // Destructure the data if it exists
  const articles = data?.data?.docs || [];
  const totalItems = data?.data?.totalDocs || 0; // Total number of items
  console.log("data", data);

  // Error handling
  if (error instanceof Error) {
    console.error("Error fetching articles:", error.message);
  }

  // Loading state
  if (isLoading) return <div>Loading...</div>;

  const startRange = (page - 1) * pageSize + 1;
  const endRange = Math.min(page * pageSize, totalItems);
  return (
    <>
      <div className="flex items-center justify-between mb-8 mr-12">
        <p className="text-3xl font-bold">Article</p>
        <div className="flex gap-4">
          <Button className="bg-[#199FB1] font-bold text-base py-6">Add New Article</Button>
          <Delete/>
        </div>
      </div>

      <Table className="shadow-sm bg-white rounded-xl p-8 mr-12">
        <TableHeader>
          <TableRow className="shadow-md py-6">
            <TableHead>
              <Checkbox />
            </TableHead>
            <TableHead className="font-extrabold text-sm py-6">Image</TableHead>
            <TableHead className="font-extrabold text-sm py-6">Title</TableHead>
            <TableHead className="font-extrabold text-sm py-6">
              Description
            </TableHead>
            <TableHead className="font-extrabold text-sm text-center py-6">
              Operation
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No articles found.
              </TableCell>
            </TableRow>
          ) : (
            articles.map((article: { _id: string; image: string ; title: string;description:string  }) => (
              <TableRow key={article._id} className="py-4">
                <TableCell className="font-semibold">
                  <Checkbox />
                </TableCell>
                <TableCell className="font-semibold text-sm py-6">
                 {/* <div> */}
                 <Image
                        src={article.image}
                        alt={article.title}
                        width={50}
                        height={50}
                      />
                 {/* </div> */}
                 
                </TableCell>
                <TableCell className="font-semibold text-sm py-6">
                  {article.title}
                </TableCell>
                <TableCell className="font-semibold text-sm py-6">
                  {article.description}
                </TableCell>
                <TableCell className="flex justify-center items-center gap-4 font-semibold text-sm py-6">
                  <EditIcon />
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <span className="text-sm text-gray-500">
            Showing {startRange}-{endRange} of {totalItems}
          </span>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
          >
            {"<"}
          </button>
          <button
            onClick={() =>
              setPage((prev) =>
                Math.min(prev + 1, Math.ceil(totalItems / pageSize))
              )
            }
            disabled={page === Math.ceil(totalItems / pageSize)}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Article;

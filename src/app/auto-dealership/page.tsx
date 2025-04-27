"use client";
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { autoDealershipService } from '@/service/autoDealerShipService';
import { Checkbox } from '@radix-ui/react-checkbox';
import { useQuery } from '@tanstack/react-query';
import { EditIcon, DeleteIcon, Trash2, Plus } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

const AutoDealerShip = () => {
    const [page, setPage] = useState(1); // Current page
    const pageSize = 10; // Number of items per page
      const { data, isLoading, error } = useQuery({
          queryKey: ["auto"],
          queryFn: () =>
            autoDealershipService.getAllAutoDealership()
                .then((res) => res.data)
                .catch((err) => console.log("Error:", err)),
          //keepPreviousData: true, // Keeps the previous data while loading new data
        });
         // Destructure the data if it exists
         const autoDealerShip = data?.data|| [];
         const totalItems = data?.data?.totalDocs
         || 0; // Total number of items
  console.log("autoDealerShip",autoDealerShip);
  
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
     <div className="flex items-center justify-between mb-8">
        <p className="text-3xl font-bold">Article</p>
        <div className="flex gap-4">
          <Button className="bg-[#199FB1] font-bold text-base"><Plus/> Add Auto Dealership</Button>
          <Button>
            <Trash2/>
          </Button>
        </div>
      </div>
    <Table className="shadow-sm bg-white rounded-xl p-8">
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead className="font-extrabold text-sm">Image</TableHead>
          <TableHead className="font-extrabold text-sm">Title</TableHead>
          <TableHead className="font-extrabold text-sm">Description</TableHead>
          <TableHead className="font-extrabold text-sm text-center">
            Operation
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {autoDealerShip.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className="text-center">
              No articles found.
            </TableCell>
          </TableRow>
        ) : (
            autoDealerShip.map((auto: any) => (
            <TableRow key={auto._id}>
              <TableCell className="font-semibold">
                <Checkbox />
              </TableCell>
              <TableCell className="font-semibold text-sm">
                <Image src={auto.image} alt={auto.title} width={50} height={50} />
              </TableCell>
              <TableCell className="font-semibold text-sm">{auto.title}</TableCell>
              <TableCell className="font-semibold text-sm">{auto.description
              }</TableCell>
              <TableCell className="flex justify-center items-center gap-4 font-semibold text-sm">
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
         onClick={() => setPage((prev) => Math.min(prev + 1, Math.ceil(totalItems / pageSize)))}
         disabled={page === Math.ceil(totalItems / pageSize)}
         className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
       >
         {">"}
       </button>
     </div>
   </div>
   </>
  )
}

export default AutoDealerShip
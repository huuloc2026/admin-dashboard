export enum CategoryName {
  "X001" = "CLOTHING",
  "X002" = "ELECTRONICS",
  "X003" = "BOOKS",
  "X004" = "HOME APPLIANCES"
} 

export const PRODUCT_TABLE_HEADERS = [
    { key: "name", label: "Name" },
    { key: "description", label: "Description" },
    { key: "price", label: "Price" },
    { key: "stock", label: "Stock" },
    { key: "categoryId", label: "Category" },
    { key: "status", label: "Status" },
    { key: "actions", label: "Actions" }, 
  ]


export enum ProductCategory {
    "CLOTHING" = "X001",
    "ELECTRONICS"="X002",
  "BOOKS"="X003",
   "HOME APPLIANCES" ="X004"
}
  
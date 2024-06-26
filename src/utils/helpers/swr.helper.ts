import axios from "axios";

type props = [
  url: string,
  type: "get" | "post" | "put" | "delete",
  rest: any[]
];
export const genericAPIFetcher = async ([url, type, ...rest]: [
  string,
  "get" | "post" | "put" | "delete",
  any[]?
]) => {
  return await axios[type](url, ...rest);
};

export const genericMutationFetcher = async (
  url: string,
  {
    arg,
  }: {
    arg: {
      type: "get" | "post" | "put" | "delete";
      rest?: any[];
    };
  }
) => {
  return await axios[arg.type](url, ...(arg.rest || []));
};

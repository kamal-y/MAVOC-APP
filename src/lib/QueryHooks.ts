import { useQuery } from "@tanstack/react-query";
import { fetchNavbarItems } from "./apis";

export const useNavbarItems = (modelName: string) => {
  return useQuery({
    queryKey: [modelName],
    queryFn: () => fetchNavbarItems(modelName),
  });
};

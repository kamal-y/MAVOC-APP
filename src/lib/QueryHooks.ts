import { useQuery } from "@tanstack/react-query";
import { fetchNavbarItems, fetchFooterPaymentOptionsItems } from "./apis";

export const useNavbarItems = (modelName: string) => {
  return useQuery({
    queryKey: [modelName],
    queryFn: () => fetchNavbarItems(modelName),
  });
};

export const useFooterPaymentOptionsItems = (modelName: string) => {
  return useQuery({
    queryKey: [modelName],
    queryFn: () => fetchFooterPaymentOptionsItems(modelName),
  });
};
